import { defineRouteMiddleware } from "@astrojs/starlight/route-data";

// Point the nav logo at val.town instead of the docs home.
// Starlight computes `siteTitleHref` from the locale and doesn't expose
// it as a config option, so route middleware is the sanctioned override.
export const onRequest = defineRouteMiddleware((context) => {
  context.locals.starlightRoute.siteTitleHref = "https://val.town";
});
