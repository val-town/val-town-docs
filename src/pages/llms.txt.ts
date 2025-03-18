import { getCollection } from "astro:content";
import type { APIRoute } from "astro";

// Section order and title formatting
const SECTIONS = {
  "quickstarts": "Quickstarts",
  "vals": "Vals",
  "projects": "Projects",
  "reference": "Reference",
  "std": "Standard Library",
  "api": "REST API",
  "troubleshooting": "Troubleshooting",
  "guides": "Guides",
  "integrations": "Integrations",
  "contact-us": "Contact-us"
};

export const GET: APIRoute = async () => {
  try {
    // Get all documentation pages
    const docs = await getCollection("docs");
    
    const docsBySection = {};
    docs.forEach(doc => {
      const section = doc.slug.split('/')[0];
      if (section !== "index" && SECTIONS[section]) {
        if (!docsBySection[section]) docsBySection[section] = [];
        docsBySection[section].push(doc);
      }
    });
    
    // Starts with the title
    let content = "# Val Town Documentation\n\n";
    
    // Add each section with its documents
    Object.keys(SECTIONS).forEach(section => {
      if (docsBySection[section] && docsBySection[section].length > 0) {
        content += `## ${SECTIONS[section]}\n`;
        
        // Grab .md version of each to help our LLM friends
        docsBySection[section].forEach(doc => {
          content += `- [${doc.data.title}](https://docs.val.town/${doc.slug}.md): ${doc.data.description || ''}\n`;
        });
        
        content += '\n';
      }
    });
    
    // Add optional contact information
    content += `## Optional\n`;
    content += `- [Discord](https://discord.gg/dHv45uN5RY)\n`;
    content += `- [Email](mailto:docs-help@val.town)\n`;
    content += `- [Blog](https://blog.val.town/)\n`;
    
    return new Response(content, {
      headers: {
        "Content-Type": "text/markdown; charset=utf-8",
        // To not duplicate content and confused SEO
        "X-Robots-Tag": "noindex, nofollow",
        "Cache-Control": "public, max-age=3600"
      }
    });
  } catch (error) {
    console.error("Error generating documentation text:", error);
    return new Response("Error generating documentation", { status: 500 });
  }
}; 