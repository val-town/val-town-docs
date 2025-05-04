import { getCollection } from "astro:content";
import type { APIRoute } from "astro";

export function getStaticPaths() {
	return [{ params: {} }];
}

export const GET: APIRoute = async () => {
	const docs = await getCollection("docs");

	let content = "# Val Town Full Documentation\n\n";

	for (const doc of docs) {
		content += `# ${doc.data.title}\n\n`;
		content += `URL: https://docs.val.town/${doc.slug}.md\n\n`;
		content += `${doc.body}\n\n---\n\n`;
	}

	return new Response(content);
};

