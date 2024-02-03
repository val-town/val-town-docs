---
title: Email
lastUpdated: 2024-02-02
---

Send emails with [`std/email`](https://www.val.town/v/std/email). You can only send emails to yourself if you're on Val Town Free. If you're on Val Town Pro, you can email to anyone.

:::note
Want to receive emails instead? [Create an email handler val](/types/email/)
:::

## Basic usage

```ts title="Example" val
import { email } from "https://esm.town/v/std/email";

await email({ text: "emails emails emails!" });
```

## `to`, `cc`, and `bcc`

By default, the `to` field is set to the owner of the Val Town account that calls it.

If you have Val Town Pro, you can send emails to anyone via the `to`, `cc`, and `bcc` fields.

If you don't have Val Town Pro, you can only send emails to yourself, so leave those fields blank.

## `from`

The `from` is limited to a few options:

1. It defaults to `notifications@val.town` if you don't specify it.

2. If you do specify it, it must be of the form: `your_username.valname@valtown.email`.

## `replyTo`

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

## Attachments

You can attach files to your emails by using the `attachments` field.

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
