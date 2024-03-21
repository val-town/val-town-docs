---
title: Exports
description: |
  Vals can export anything they want, but if you intend to use vals as
  web handlers, email handlers, or on a schedule, they'll need at least
  one export.
lastUpdated: 2024-03-18
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

:::note[Export syntax]

This is the [JavaScript module syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules#exporting_module_features),
which is a standardized way for JavaScript modules to imort and
export values. There was a predecessor to this syntax, CommonJS,
which was supported by Node.js - Val Town only supports the modern
syntax, not CommonJS, so modules that use `module.exports` and
`require()` are not supported.

:::