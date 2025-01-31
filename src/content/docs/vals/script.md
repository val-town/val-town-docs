---
title: Script
description: |
  The most flexible kind of val, a way to run any TypeScript and JavaScript
sidebar:
  order: 2
lastUpdated: 2024-03-18
---

Script vals are freeform JavaScript, TypeScript, or JSX. They are useful
for testing, saving utility functions, and one-off operations.

It's common to use script vals to write standalone functions that can
be imported by your HTTP, Cron, and Email vals. A script val
can be as simple as a function that just adds two numbers:

```tsx val
export function add(a: number, b: number) {
  return a + b;
}
```

Script vals can also export static values: they don't need to export
functions.

```tsx
export const MEANING_OF_LIFE = 42;
```
