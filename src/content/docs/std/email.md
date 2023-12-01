---
title: Email
---

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
