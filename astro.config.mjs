import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Docs",
      social: {
        github: "https://github.com/val-town/val-town-docs",
        twitter: "https://twitter.com/valdottown",
      },
      logo: {
        light: "./src/assets/logo.svg",
        dark: "./src/assets/logo-dark.svg",
      },
      customCss: [
        // Fontsource files for to regular and semi-bold font weights.
        "@fontsource/ibm-plex-sans/400.css",
        "@fontsource/ibm-plex-sans/600.css",
        "./src/styles/custom.css",
      ],
      sidebar: [
        {
          label: "Start Here",
          autogenerate: { directory: "start-here" },
        },
        {
          label: "Types of vals",
          autogenerate: { directory: "types" },
        },
        {
          label: "How to",
          autogenerate: { directory: "how-to" },
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
        {
          label: "Integrations",
          autogenerate: { directory: "integrations" },
          collapsed: true,
        },
        {
          label: "Upgrading",
          autogenerate: { directory: "upgrading" },
          collapsed: true,
        },
        {
          label: "Troubleshooting",
          autogenerate: { directory: "troubleshooting" },
          collapsed: true,
        },
        {
          label: "REST API",
          autogenerate: { directory: "rest-api" },
          collapsed: true,
        },
        {
          label: "Info",
          autogenerate: { directory: "info" },
        },
      ],
      head: [
        // Example: add Fathom analytics script tag.
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
    }),
  ],
});
