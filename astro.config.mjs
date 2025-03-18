import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightLinksValidator from "starlight-links-validator";
import { valTownOpenButton } from "./plugins/val-town-open-button.mjs";

// https://astro.build/config
export default defineConfig({
  site: "https://docs.val.town/",
  redirects: {
    "/api/vals/": "/openapi.html#tag/vals",
    "/api/eval/": "/openapi.html#tag/vals",
    "/api/my-resources/": "/openapi.html#tag/me",
    "/api/users/": "/openapi.html#tag/users",
    "/api/aliases/": "/openapi.html#tag/alias",
    "/api/run/": "/openapi.html#tag/vals/GET/v1/run/{valname}",
  },
  integrations: [
    starlightLinksValidator(),
    starlight({
      title: "Docs | Val Town",
      defaultLocale: "root",
      components: {
        Footer: "./src/components/Footer.astro",
        Head: "./src/components/CopyPageButton.astro",
      },
      editLink: {
        baseUrl: "https://github.com/val-town/val-town-docs/edit/main/",
      },
      lastUpdated: true,
      pagination: false,
      locales: {
        root: {
          lang: "en",
          label: "English",
        },
      },
      social: {
        github: "https://github.com/val-town/val-town-docs",
        twitter: "https://twitter.com/valdottown",
        youtube: "https://www.youtube.com/@valDotTown",
        discord: "https://discord.val.town",
      },
      logo: {
        light: "./src/assets/logo.svg",
        dark: "./src/assets/logo-dark.svg",
        replacesTitle: true,
      },
      customCss: [
        // Fontsource files for to regular and semi-bold font weights.
        "@fontsource/ibm-plex-sans/400.css",
        "@fontsource/ibm-plex-sans/600.css",
        "./src/styles/custom.css",
      ],
      sidebar: [
        {
          label: "Val Town Docs",
          link: "/",
        },
        {
          label: "Quickstarts",
          autogenerate: { directory: "quickstarts" },
        },
        {
          label: "Vals",
          items: [
            {
              label: "Overview",
              link: "vals/",
            },
            {
              label: "Script",
              link: "vals/script",
            },
            {
              label: "HTTP",
              autogenerate: { directory: "vals/http" },
              collapsed: true,
              // TODO - get this to not be bold
            },
            {
              label: "Cron",
              link: "vals/cron",
            },
            {
              label: "Email",
              link: "vals/email",
            },
          ],
        },
        {
          label: "Projects",
          badge: "Beta",
          autogenerate: { directory: "projects" },
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
        {
          label: "Standard Library",
          items: [
            { label: "Email", link: "std/email" },
            {
              label: "SQLite",
              autogenerate: { directory: "std/SQLite" },
              collapsed: true,
            },
            { label: "Blob", link: "std/blob" },
            { label: "Proxied fetch", link: "std/fetch" },
            { label: "OpenAI", link: "std/openai" },
          ],
        },
        {
          label: "REST API",
          autogenerate: { directory: "api" },
          collapsed: true,
        },
        {
          label: "Troubleshooting",
          autogenerate: { directory: "troubleshooting" },
          collapsed: true,
        },
        {
          label: "Guides",
          autogenerate: { directory: "guides" },
          collapsed: true,
        },
        {
          label: "Integrations",
          autogenerate: { directory: "integrations" },
          collapsed: true,
        },

        {
          label: "Contact",
          autogenerate: { directory: "contact-us" },
          collapsed: true,
        },
      ],
      head: [
        {
          tag: "meta",
          attrs: {
            property: "og:image",
            content: "/share-image.jpg",
          },
        },
        {
          tag: "meta",
          attrs: {
            property: "twitter:image",
            content: "/share-image.jpg",
          },
        },
        {
          tag: "script",
          attrs: {
            src: "https://cdn.jsdelivr.net/npm/lite-youtube-embed@0.3.0/src/lite-yt-embed.min.js",
            defer: true,
          },
        },
        {
          tag: "link",
          attrs: {
            href: "https://cdn.jsdelivr.net/npm/lite-youtube-embed@0.3.0/src/lite-yt-embed.min.css",
            rel: "stylesheet",
          },
        },
      ],
      expressiveCode: {
        plugins: [valTownOpenButton()],
      },
    }),
  ],
});