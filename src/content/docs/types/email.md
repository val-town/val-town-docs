---
title: Email
generated: 1701279907751
sidebar:
  order: 4
---

Email handler vals get their own email address that you can send email
to, and when Val Town receives that email, it triggers the val with the email
as its first argument. Ever wanted a robot that you could forward emails to,
or to be able to control something via an email trigger? With email
handler vals it's simple: they get their own, unique address.

## Type Signature

Email handlers receive an argument called `Email` and can do anything with it:
they can go on to reply to the email with the [standard library](/std/email),
or call methods in response to it.

```tsx
// email-example.tsx
export function emailHandler(email: Email) {
  console.log("Email received!");
}
```

The `Email` type has this shape:

```ts
interface Email {
  from: string;
  to: string[];
  subject: string | undefined;
  text: string | undefined;
  html: string | undefined;
}
```

## Example

<div class="not-content">
  <iframe src="https://www.val.town/embed/stevekrouse.testEmail2" width="100%" frameborder="no" style="height: 400px;">
    &#x20;
  </iframe>
</div>

The email address for
[@stevekrouse.testEmail2](https://www.val.town/v/stevekrouse.testEmail) is
`steverkouse.testEmail2@valtown.email`. Note that the username does not contain
a leading `@` and that the email domain is `valtown.email`.

You can view all the emails sent to this function here:

<div class="not-content">
  <iframe src="https://www.val.town/embed/stevekrouse.testEmails" width="100%" frameborder="no" style="height: 400px;">
    &#x20;
  </iframe>
</div>

Test it out yourself by sending an email to
`steverkouse.testEmail2@valtown.email` and your email should show up in this
list above.
