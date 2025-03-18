import { getCollection } from "astro:content";
import type { APIRoute } from "astro";

// Configuration for section organization
const SECTION_CONFIG = {
  order: [
    "index",
    "quickstarts", 
    "vals",
    "projects",
    "reference",
    "std",
    "api",
    "guides",
    "integrations"
  ],
  subsections: {
    "quickstarts": ["first-cron", "first-website"],
    "vals": ["overview", "script", "http", "cron", "email"],
    "projects": ["overview", "branches", "remixes", "pull-requests"],
    "reference": ["townie", "bot-rate-limiting", "environment-variables", "importing", "permissions", "runtime", "esm.town", "keyboard-shortcuts", "version-control"],
    "std": ["email", "sqlite", "blob", "openai", "fetch"]
  },
  nestedSubsections: {
    "vals": {
      "http": ["index", "basic-examples", "html-jsx", "routing", "early-return", "custom-domains"]
    },
    "std": {
      "sqlite": ["index", "usage"]
    }
  }
};

export const GET: APIRoute = async () => {
  try {
    const docs = await getCollection("docs");
    
    // Group docs by their top-level section
    const sections = groupDocumentsBySection(docs);
    
    // Build the response text
    let responseText = "# Val Town Documentation\n\n";
    
    // Add sections in the defined order
    SECTION_CONFIG.order.forEach(sectionName => {
      const sectionContent = formatSection(sectionName, sections);
      if (sectionContent) {
        responseText += sectionContent;
      }
    });
    
    return new Response(responseText, {
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

// Helper functions
function groupDocumentsBySection(docs) {
  const sections = new Map();
  
  docs.forEach((doc) => {
    const topSection = doc.slug.split('/')[0];
    
    if (!sections.has(topSection)) {
      sections.set(topSection, []);
    }
    
    sections.get(topSection)?.push(doc);
  });
  
  return sections;
}

function formatSection(sectionName, sections) {
  if (!sections.has(sectionName)) {
    return '';
  }
  
  const sectionDocs = sections.get(sectionName) || [];
  
  // Special handling for index section
  if (sectionName === "index") {
    const indexDoc = sectionDocs.find(doc => doc.slug === "index");
    if (indexDoc) {
      return `## Docs\n- [${indexDoc.data.title}](https://docs.val.town/): ${indexDoc.data.description || ''}\n\n`;
    }
    return '';
  }
  
  // Format section title
  const sectionTitle = sectionName === "std" ? "Standard Library" : sectionName.charAt(0).toUpperCase() + sectionName.slice(1);
  let sectionText = `\n## ${sectionTitle}\n`;
  
  // Find and add section description
  const introDoc = findIntroDocument(sectionName, sectionDocs);
  if (introDoc?.data.description) {
    sectionText += `${introDoc.data.description}\n\n`;
  }
  
  // Process subsections if available
  const orderedSubsections = SECTION_CONFIG.subsections[sectionName] || [];
  
  if (orderedSubsections.length > 0) {
    sectionText += formatOrderedSubsections(sectionName, orderedSubsections, sectionDocs);
    sectionText += formatRemainingDocuments(sectionName, orderedSubsections, sectionDocs);
  } else {
    sectionText += formatAllDocuments(sectionDocs);
  }
  
  return sectionText;
}

// Additional helper functions would be defined here...
// findIntroDocument, formatOrderedSubsections, formatRemainingDocuments, formatAllDocuments, etc.

// Add contact information at the end
responseText += `\n## Contact\n`;
responseText += `- [Discord](https://discord.gg/dHv45uN5RY)\n`;
responseText += `- [Email](mailto:docs-help@val.town)\n`;

return new Response(responseText, { 
  headers: { 
    "Content-Type": "text/plain; charset=utf-8",
    "X-Robots-Tag": "noindex, nofollow"
  } 
}); 