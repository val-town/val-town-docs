---
title: Exports
description: |
  Vals with triggers (HTTP, Scheduled, Email) require at least one export.
lastUpdated: 2024-05-09
---

Vals with triggers (HTTP, Scheduled, Email) require at least one export: the function to run when that val is triggered. If your val has multiple exports, then we require one of them to the `default` export, which will be the function that runs when the val is triggered.

Script vals can export anything or nothing.

```ts title="Example" val
/**
 * Note the 'export' keyword
 */
export function handleEmail(email: Email) {
  console.log("ok!");
}
```

:::note[Export syntax]

Val Town supports modern [JavaScript module syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules#exporting_module_features).

Val Town does not support CommonJS `module.exports` and `require()`.

:::
