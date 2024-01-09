---
title: Environment variables
generated: 1701279907850
description: Using environment variables to store secrets that vals can securely access
lastUpdated: 2023-12-22
---

The proper place to store secrets, keys, and API tokens is in
[Environment Variables](https://val.town/settings/environment-variables). When you add a key and value to
the list of environment variables on that page, it becomes available via the `Deno.env` and `process.env` variables.

:::danger

Any public or unlisted code can be run by others via the
[Run API](/api/run). Be careful about publishing any code that
references your environment variables because it could allow others the ability to use your
environment variables (but not see what they are).

:::

Environment variables can be accessed via `Deno.env` or `process.env`.

### Deno.env

This uses the Deno-default
[Deno.env](https://docs.deno.com/runtime/manual/basics/env_variables) variable,
which is available globally.

```ts
export let sdk = new SomeSDK(Deno.env.get("someSdkSecret"));
```

### process.env

This is the conventional way to access environment variables when you're in a
Node.js environment. In Node.js, process is an always-available global variable,
but since Val Town targets Deno, you'll need to import process from
node:process:

```ts
import process from "node:process";

export let sdk = new SomeSDK(process.env.someSdkSecret);
```

### Notes

- **Vals can't set environment variables**: Environment variables are set via the settings page. Trying to update an environment variable, for example by using `Deno.env.set`, is a no-op.
