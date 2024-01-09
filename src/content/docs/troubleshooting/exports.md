---
title: Exports
description: |
  Vals can export anything they want, but if you intend to use vals as
  web handlers, email handlers, or on a schedule, they'll need at least
  one export.
lastUpdated: 2023-12-22
---

Vals can export anything they want, but if you intend to use vals as
web handlers, email handlers, or on a schedule, they'll need at least
one export. For example, if you've written an email handler but forgotten
to add the `export` keyword, you'll encounter an error reminding you to
export something.

```ts title="Example" val
/**
 * Note the 'export' keyword which tells JavaScript to export
 * this method and make it available to other files.
 */
export function handleEmail(email: Email) {
  console.log("ok!");
}
```
