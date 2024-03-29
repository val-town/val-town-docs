---
title: Environment variables
description: Using environment variables to store secrets that vals can securely access
lastUpdated: 2024-02-26
---

The proper place to store secrets, keys, and API tokens is in
[Environment Variables](https://val.town/settings/environment-variables). When you add a key and value to
the list of environment variables on that page, it becomes available via the `Deno.env` and `process.env` variables.

Environment variables can be accessed via `Deno.env` or `process.env`.

- The "key" and "value" of each environment variable can be any string
- Vals can't set environment variables: Environment variables are set via the settings page. Trying to update an environment variable, for example by using `Deno.env.set`, is a no-op.

### Deno.env

This uses the Deno-default
[Deno.env](https://docs.deno.com/runtime/manual/basics/env_variables) variable,
which is available globally.

```ts
const secret = Deno.env.get("someSdkSecret");
export let sdk = new SomeSDK(secret);
```

### process.env

This is the conventional way to access environment variables when you're in a
Node.js environment. In Node.js, process is an always-available global variable,
but since Val Town targets Deno, you'll need to import process from
node:process:

```ts
import process from "node:process";

const secret = process.env.someSdkSecret;
export let sdk = new SomeSDK(secret);
```
