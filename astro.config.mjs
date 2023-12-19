import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightLinksValidator from "starlight-links-validator";
import { valTownOpenButton } from "./plugins/val-town-open-button.mjs";

// https://astro.build/config
export default defineConfig({
  site: "https://docs.val.town/",
  integrations: [
    starlightLinksValidator(),
    starlight({
      title: "Docs",
      defaultLocale: "root",
      components: {
        Footer: "./src/components/Footer.astro",
      },
      editLink: {
        baseUrl: "https://github.com/val-town/val-town-docs/edit/main/",
      },
      lastUpdated: true,
      pagination: false,
      locales: {
        en: {
          label: "English",
        },
      },
      social: {
        github: "https://github.com/val-town/val-town-docs",
        twitter: "https://twitter.com/valdottown",
        youtube: "https://www.youtube.com/@valDotTown",
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
          label: "Types of vals",
          items: [
            {
              label: "Script",
              link: "types/script",
            },
            {
              label: "HTTP",
              autogenerate: { directory: "types/http" },
              collapsed: true,
            },
            {
              label: "Scheduled",
              link: "types/scheduled",
            },
            {
              label: "Email",
              link: "types/email",
            },
          ],
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
          ],
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
          label: "REST API",
          autogenerate: { directory: "api" },
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
