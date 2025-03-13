# Val Town Docs Guidelines

## Commands
- Build: `npm run build` (Astro check + build)
- Dev server: `npm run dev` (starts local dev at localhost:4321)
- Preview: `npm run preview` (preview build locally)
- Spell check: `npm test` (runs cspell)
- Type check: `npm run astro check`

## Code Style
- Project uses TypeScript with strict type checking
- Follow Astro component structure for new components
- MDX for documentation files with frontmatter metadata
- Use relative paths for imports
- Prefer absolute paths for file references

## Directory Structure
- `src/content/docs/` - All documentation files (.md, .mdx)
- `src/assets/` - Images and SVG files
- `src/components/` - Reusable Astro components
- `public/` - Static assets (favicons, etc.)

## Spelling & Documentation
- Add new valid words to `project-words.txt`
- Use `# cspell:ignore word` in frontmatter for one-off words
- Include descriptive frontmatter with title, description, lastUpdated
- Follow existing documentation format and style

## Images & Assets
- Store images in specific folders next to their related content
- Reference images with relative links from Markdown