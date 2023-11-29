---
title: Standard library
generated: 1701279907923
sidebar:
  order: 1
---

We provide several methods that let you extend the functionality of vals - send
emails, store data, make HTTP requests. This standard library is implemented as
a set of vals, so you can import and use just the parts you need.

### std/email

Go to [std/email](https://www.val.town/v/std/email)

```ts
// std-email-example.ts
import { email } from "https://esm.town/v/std/email";

await email({
  to: "tim@apple.com",
  text: "emails emails emails!",
});
```

The `std/email` val lets you send emails from Val town. It's an asynchronous
function that takes details of the email and sends it while the val is running.

You can send emails to yourself, only - unless you have Val Town Pro, in which
case you can send emails to anyone.

:::note

Want to receive emails instead? [Create an email handler val](/types/email/)

:::

### std/blob

Go to [`std/blob`](https://www.val.town/v/std/blob)

```ts
// std-blob-example.ts
import { blob } from "https://esm.town/v/std/blob";

await blob.setJSON("myKey", { foo: "bar" });
export let blobDemo = await blob.getJSON("myKey");
```

`std/blob` lets you store data. Note that you can also use
[the REST API](/rest-api/vals/) to update vals and store data _as vals_, but
`std/blob` is more flexible and in most cases preferred. You can store any kind
of data with `std/blob`, not just JSON, and its asynchronous interface lets you
load updated data as the val is running.

### std/fetch

Go to [std/fetch](https://www.val.town/v/std/fetch)

Val Town exposes the web-standard
[fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API), which
lets you make fetch requests. However, many websites block requests made from
unknown sources. This is why we provide `std/fetch`, which automatically uses
proxies in order to make requests with a greater chance of success. It has the
same API as the standard fetch method.

Expect `std/fetch` to be more reliable, but slower because it has to go through
proxies.

### std/turso

Go to [std/turso](https://www.val.town/v/std/turso)

See our documentation on [SQLite](/reference/val-town-sqlite/) for more details
on the `std/turso` val.
