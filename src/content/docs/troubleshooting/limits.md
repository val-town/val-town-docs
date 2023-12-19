---
title: Limits
---

Currently, vals can return a maximum of 250,000 characters of JSON. This is a limit we're working on increasing.

In the meantime, one workaround is to gzip your data before returning it:

```ts val
import { gzip } from "npm:pako";

export default async function(req: Request): Promise<Response> {
  const largeData = "hi".repeat(250_000);
  // return Response.json(largeData); // {"error":"The return is too large to process"}

  return new Response(await gzip(JSON.stringify(largeData)), {
    headers: {
      "Content-Encoding": "gzip",
      "Content-Type": "application/json",
    },
  });
}
```

Please reach out if you need help with this or need higher limits. We can prioritize getting you access. Email steve@val.town.
