---
title: Email
description: Send emails programmatically from your vals using Val Town's email API
---

Send emails with [`std/email`](https://www.val.town/v/std/email). You can only send emails to yourself if you're on Val Town Free. If you're on [Val Town Pro](https://www.val.town/pricing), you can email anyone.

:::note
Want to receive emails instead? [Create an email handler val](/types/email/)
:::

## Basic usage

```ts title="Example" val
import { email } from "https://esm.town/v/std/email";

await email({ subject: "New Ink & Switch Post!",  text: "https://www.inkandswitch.com/embark/" });
```

### `subject`

The email subject line. It defaults to `Message from @your_username on Val Town`.

### `to`, `cc`, and `bcc`

By default, the `to` field is set to the owner of the Val Town account that calls it.

If you have Val Town Pro, you can send emails to anyone via the `to`, `cc`, and `bcc` fields.

If you don't have Val Town Pro, you can only send emails to yourself, so leave those fields blank.

### `from`

The `from` is limited to a few options:

1. It defaults to `notifications@val.town` if you don't specify it.

2. If you do specify it, it must be of the form:
  - `{ email: "your_username.valname@valtown.email }"` or
  - `{ email: "your_username.valname@valtown.email", name: "Sender Name" }`.

### `replyTo`

`replyTo` accepts a string email or an object with strings for `email` and `name` (optional).

This can be useful if you are sending emails to others with Val Town Pro.

```ts title="replyTo" val
import { email } from "https://esm.town/v/std/email";

await email({
  to: "someone_else@example.com",
  from: "your_username.valname@valtown.email",
  replyTo: "your_email@example.com",
  text: "these pretzels are making me thirsty",
});
```

### Attachments

You can attach files to your emails by using the `attachments` field.
Attachments need to be [Base64](https://en.wikipedia.org/wiki/Base64) encoded,
which is what the [btoa](https://developer.mozilla.org/en-US/docs/Web/API/btoa)
method is doing in this example:

```ts title="Attachments example" val
import { email } from "https://esm.town/v/std/email";

export const stdEmailAttachmentExample = email({
  attachments: [
    {
      content: btoa("hello attachments!"),
      filename: "test.txt",
      type: "text",
      disposition: "attachment",
    },
  ],
});
```

Here's an example sending a [PDF](https://www.val.town/v/stevekrouse/sendPDF).

### Headers

You can set custom headers in emails that you send:

```ts title="Custom headers example" val
import { email } from "https://esm.town/v/std/email?v=13"

console.log(
  await email({
    text: "Hi",
    headers: {
      "X-Custom-Header": "xxx",
    },
  }),
)
```

This is also [documented in our REST API](https://docs.val.town/openapi#/tag/emails/POST/v1/email), and supported in the [SDK](https://docs.val.town/api/sdk/). 

### Custom email addresses

Email triggers support custom addresses in the same way that HTTP triggers
support [custom subdomains](https://docs.val.town/vals/http/custom-subdomains/), and
with the same rules for naming.

To choose a custom email address, click **Run** on an Email Val and then click
**Customize address**.
