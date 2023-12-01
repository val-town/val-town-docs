---
title: Script
lastUpdated: 2023-11-30
sidebar:
  order: 2
---

Scripts can be anything: a script val can be a function, or a single variable.
It can have multiple exports or none, and can be used like a library and
imported from other vals, or it can be a full-fledged system. You can use
script val as mini calculators, like:

```tsx
// script-example.ts
export const theAnswer = Math.sqrt(1764);
```

## Type Signature

Script vals can have any type signature: it's all up to you.
