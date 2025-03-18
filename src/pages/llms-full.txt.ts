import { getCollection } from "astro:content";
import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
  const docs = await getCollection("docs");
  
  return new Response(
    `# Val Town Full Documentation\n\n${docs
      .map((doc) => {
        return `# ${doc.data.title}\n\n${doc.body}\n\n`;
      })
      .join("")}`,
    { 
      headers: { 
        "Content-Type": "text/plain; charset=utf-8",
        "X-Robots-Tag": "noindex, nofollow"
      } 
    }
  );
}; 