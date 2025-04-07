import { getCollection } from "astro:content";
import type { APIRoute } from "astro";

export function getStaticPaths() {
	return [{ params: {} }];
}

export const GET: APIRoute = async () => {
	const docs = await getCollection("docs");

	const SECTIONS = {
		quickstarts: "Getting Started",
		vals: "Vals",
		projects: "Projects",
		reference: "Reference",
		std: "Standard Library",
		api: "REST API",
		troubleshooting: "Troubleshooting",
		guides: "Guides",
		integrations: "Integrations",
	} as const;

	type SectionKey = keyof typeof SECTIONS;
	const sections = Object.keys(SECTIONS) as SectionKey[];
	const docsBySection: Record<SectionKey, (typeof docs)[number][]> =
		{} as Record<SectionKey, (typeof docs)[number][]>;

	sections.forEach((key) => {
		docsBySection[key] = [];
	});

	docs.forEach((doc) => {
		const section = doc.slug.split("/")[0];
		if (section !== "index" && section in SECTIONS) {
			docsBySection[section as SectionKey].push(doc);
		}
	});

	let content = "# Val Town Documentation\n\n";

	for (const section of sections) {
		const sectionDocs = docsBySection[section];
		if (sectionDocs.length === 0) continue;

		content += `## ${SECTIONS[section]}\n`;

		for (const doc of sectionDocs) {
			const description = doc.data.description
				? `: ${doc.data.description}`
				: "";
			content += `- [${doc.data.title}](https://docs.val.town/${doc.slug}.md)${description}\n`;
		}

		content += "\n";
	}

	content += `## Optional\n`;
	content += `- [Discord](https://discord.gg/dHv45uN5RY)\n`;
	content += `- [Email](mailto:docs-help@val.town)\n`;
	content += `- [Blog](https://blog.val.town/)\n`;

	return new Response(content);
};

