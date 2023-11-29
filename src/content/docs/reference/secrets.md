---
title: Secrets
generated: 1701279907850
---

The proper place to store secrets, keys, API tokens is in
[https://val.town/settings/secrets](https://val.town/settings/secrets).

:::danger

Any public or unlisted code can be run by others via the
[Run API](../val-town-api/run). Be careful about publishing any code that
references your secrets because it could allow others the ability to use your
secrets (but not see what they are).

:::

Secrets can be accessed via `process.env` or `Deno.env`.

## process.env

```tsx
import process from "node:process";

export let sdk = new SomeSDK(process.env.someSdkSecret);
```

## Deno.env

```tsx
export let sdk = new SomeSDK(Deno.env.get("someSdkSecret"));
```
