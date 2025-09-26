import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";
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
        PageTitle: "./src/components/PageTitle.astro",
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
      social: [
        {
          label: "GitHub",
          icon: "github",
          href: "https://github.com/val-town/val-town-docs",
        },
        {
          label: "Twitter",
          icon: "twitter",
          href: "https://twitter.com/valdottown",
        },
        {
          label: "YouTube",
          icon: "youtube",
          href: "https://www.youtube.com/@valDotTown",
        },
        { label: "Discord", icon: "discord", href: "https://discord.val.town" },
      ],
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
          label: "Getting Started",
          items: [
            {
              label: "Your first website",
              link: "quickstarts/first-website",
            },
            {
              label: "Your first scheduled cron",
              link: "quickstarts/first-cron",
            },
            {
              label: "Sending Slack messages",
              link: "integrations/slack/send-messages-to-slack/",
            },
            {
              label: "LLM prompting",
              link: "quickstarts/prompting",
            },
          ],
        },
        {
          label: "Vals",
          items: [
            {
              label: "Overview",
              link: "vals/",
            },
            {
              label: "Triggers",
              items: [
                {
                  label: "HTTP",
                  autogenerate: { directory: "vals/http" },
                  collapsed: true,
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
              label: "Branches",
              link: "vals/branches",
            },
            {
              label: "Remixes",
              link: "vals/remixes",
            },
            {
              label: "Pull Requests",
              link: "vals/pull-requests",
            },
            {
              label: "Limitations",
              link: "vals/limitations",
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
            { label: "OpenAI", link: "std/openai" },
          ],
        },
        {
          label: "REST API",
          items: [
            { label: "Overview", link: "api/" },
            { label: "Authentication", link: "api/authentication" },
            { label: "JavaScript SDK", link: "https://sdk.val.town" },
          ],
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
            src: "/jobs.js",
            defer: true,
          },
        },
      ],
      expressiveCode: {
        plugins: [valTownOpenButton()],
      },
    }),
  ],
});
