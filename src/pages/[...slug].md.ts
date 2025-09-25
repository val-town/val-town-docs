import { getCollection } from "astro:content";
import type { APIRoute } from "astro";

export async function getStaticPaths() {
  const docs = await getCollection("docs");
  return docs.map((doc) => ({
    params: { slug: doc.slug },
    props: doc,
  }));
}

export const GET: APIRoute = async ({ params }) => {
  // If no slug is provided, return 404
  if (!params.slug) {
    return new Response("Not Found", { status: 404 });
  }

  try {
    // Fetch all documentation
    const docs = await getCollection("docs");

    // Find the matching document
    const doc = docs.find((d) => d.slug === params.slug);

    if (!doc) {
      return new Response("Document not found", { status: 404 });
    }

    // Reconstruct the markdown with frontmatter
    const content = `---
title: ${doc.data.title}
description: ${doc.data.description}
---

${doc.body}`;

    // Return the markdown content with frontmatter
    return new Response(content);
  } catch (error) {
    console.error(`Error fetching markdown for slug "${params.slug}":`, error);
    return new Response("Internal Server Error", { status: 500 });
  }
};
