---
title: Environment variables
generated: 1701279907850
description: Using secrets to set environment variables that vals can securely access
---

The proper place to store secrets, keys, and API tokens is in
[Secrets](https://val.town/settings/secrets). When you add a key and value to
the list of secrets on that page, it becomes available as an environment
variable via the `Deno.env` and `process.env` variables.

:::danger

Any public or unlisted code can be run by others via the
[Run API](/api/run). Be careful about publishing any code that
references your secrets because it could allow others the ability to use your
secrets (but not see what they are).

:::

Secrets can be accessed via `Deno.env` or `process.env`.

### Deno.env

This uses the Deno-default
[Deno.env](https://docs.deno.com/runtime/manual/basics/env_variables) variable,
which is available globally.

```tsx
// use-deno-env.ts
export let sdk = new SomeSDK(Deno.env.get("someSdkSecret"));
```

### process.env

This is the conventional way to access environment variables when you're in a
Node.js environment. In Node.js, process is an always-available global variable,
but since Val Town targets Deno, you'll need to import process from
node:process:

```tsx
// import-process.ts
import process from "node:process";

export let sdk = new SomeSDK(process.env.someSdkSecret);
```

### Notes

- **Vals can't set environment variables**: Environment variables are set via the settings page. Trying to update an
  environment variable, for example by using `Deno.env.set`, is a no-op.
