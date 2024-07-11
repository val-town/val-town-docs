# Val Town Docs

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

```
npm create astro@latest -- --template starlight
```

## Spell-checking

This project uses [cspell](https://cspell.org/) to keep typos at bay. You can run cspell by running
the tests:

```
npm test
```

These also run in GitHub Actions, so PRs will fail if they include new typos. If you have
introduced a new valid word that is not in the cspell dictionary and should be accepted
project-wide, add it to the list in `./project-words.txt`. If you have added a new jargon
word to a document and want to make a one-off exception, add a `cspell:ignore` comment
in that document's frontmatter, like this:

```
---
title: Your first cron val
description: Make your first cron val - a weather notifier
lastUpdated: 2024-05-09
# cspell:ignore crongpt
---
```

## 🚀 Project Structure

Inside of your Astro + Starlight project, you'll see the following folders and files:

```
.
├── public/
├── src/
│   ├── assets/
│   ├── content/
│   │   ├── docs/
│   │   └── config.ts
│   └── env.d.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

Starlight looks for `.md` or `.mdx` files in the `src/content/docs/` directory. Each file is exposed as a route based on its file name.

Images can be added to `src/assets/` and embedded in Markdown with a relative link.

Static assets, like favicons, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

Test
