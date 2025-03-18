import { getCollection } from "astro:content";
import type { APIRoute } from "astro";

// Section order based on the sidebar
// Not great because this requires some maintenance over time
const SIDEBAR_SECTIONS = [
  "quickstarts", "vals", "projects", "reference", 
  "std", "api", "troubleshooting", "guides", "integrations", "contact-us"
];

export const GET: APIRoute = async () => {
  try {
    // Get all documentation pages
    const docs = await getCollection("docs");
    
    // Group docs by their top-level section
    const docsBySection = {};
    docs.forEach((doc) => {
      const section = doc.slug.split('/')[0];
      if (!docsBySection[section]) docsBySection[section] = [];
      docsBySection[section].push(doc);
    });
    
    // Sort sections based on sidebar order only
    const sortedSections = Object.keys(docsBySection).sort((a, b) => {
      const indexA = SIDEBAR_SECTIONS.indexOf(a);
      const indexB = SIDEBAR_SECTIONS.indexOf(b);
      return (indexA === -1 ? 999 : indexA) - (indexB === -1 ? 999 : indexB) || a.localeCompare(b);
    });
    
    // Filter out the "index" section
    const filteredSections = sortedSections.filter(section => section !== "index");
    
    // Build the markdown content
    let content = "# Val Town Documentation\n\n";
    
    filteredSections.forEach(section => {
      // Format section title
      const title = section === "api" ? "REST API" : 
                    section === "std" ? "Standard Library" :
                    section.charAt(0).toUpperCase() + section.slice(1);
      
      content += `## ${title}\n`;
      
      // Sort all docs in this section by title
      docsBySection[section]
        .sort((a, b) => (a.data.title || '').localeCompare(b.data.title || ''))
        .forEach(doc => {
          // No indentation, just a simple list item for every document
          content += `- [${doc.data.title}](https://docs.val.town/${doc.slug}.md): ${doc.data.description || ''}\n`;
        });
      
      content += '\n';
    });
    
    // Optional contact information
    content += `## Optional\n`;
    content += `- [Discord](https://discord.gg/dHv45uN5RY)\n`;
    content += `- [Email](mailto:docs-help@val.town)\n`;
    content += `- [Blog](https://blog.val.town/)\n`;
    
    return new Response(content, {
      headers: {
        "Content-Type": "text/markdown; charset=utf-8",
        "X-Robots-Tag": "noindex, nofollow",
        "Cache-Control": "public, max-age=3600"
      }
    });
  } catch (error) {
    console.error("Error generating documentation text:", error);
    return new Response("Error generating documentation", { status: 500 });
  }
}; 