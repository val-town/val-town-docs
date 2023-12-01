---
title: HTTP
sidebar:
  order: 0
---

**The Web API lets you expose Vals to the internet, where they can receive
requests and return responses.** It’s built on the web-standard
[Request](https://developer.mozilla.org/en-US/docs/Web/API/Request) and
[Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) objects,
so it’s compatible with a number of web frameworks like
[Hono](https://hono.dev/) and [Peko](https://github.com/sejori/peko).

We recommend you use the Web API for vals that produce APIs and web pages.

## Type signature

These handlers need to export a function that takes a `Request` object
as the first parameter and returns a `Response` object. The function
can be asynchronous.

```tsx
// basic-example.ts
export function handler(request: Request) {
  return Response.json({ ok: true });
}
```

Ready to use this kind of val? Read more about how to [use frameworks to route requests](/examples/routing)
and how to [use JSX to render HTML from web endpoints](/examples/jsx).

The maximum size for requests at the time of this writing is 2mb.
