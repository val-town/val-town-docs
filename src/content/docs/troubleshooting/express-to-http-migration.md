---
title: Express to HTTP migration
description: How to migrate existing vals from the deprecated express type to the HTTP type
lastUpdated: 2024-09-03
---

The deprecated Express type of Val is being replaced by HTTP on October 1, 2024. If you still have Express vals running and want to upgrade them, here are some tips for doing so. [Reach out to us if you need help with the process](/contact-us/contact-us/).

## Parameters

- Express vals took two arguments: a request and a response, and their return value was ignored.
- HTTP vals receive a [`Request`](https://developer.mozilla.org/en-US/docs/Web/API/Request) as an argument and they need to return a [`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response) object to reply.

Here are equivalent vals for the express versus HTTP types:

```ts
// Express handler
export function handler(req, res) {
  res.send("Hello world");
}
```

```ts
// HTTP handler
export function handler(req) {
  return new Response("Hello world");
}
```

## The response object

Where with express vals, you set the response status, headers, and other details by chaining functions off of the response object, with the HTTP type, these are options you set for the Response object.

```ts
// Express handler
export function handler(req, res) {
  res.status(200).set("Content-Type", "text/plain").send("Hello world");
}
```

```ts
// HTTP handler
export function handler(req) {
  return new Response("Hello world", {
    status: 200,
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
```

## The request object

The request object for the express handler looks like [an express Request object, which is based on a Node.js request object](https://expressjs.com/en/4x/api.html#req). The Request object for the HTTP handler is [the web-standard Request object](https://developer.mozilla.org/en-US/docs/Web/API/Request). This means that some things, like getting query string parameters, will require different code:

```ts
// Express handler
export function handler(req, res) {
  res.send(req.query.name);
}
```

```ts
// HTTP handler
export function handler(req) {
  return new Response(new URL(req.url).searchParams.get("name"));
}
```
