---
title: Permission errors
description: |
  Vals run in a sandbox that doesn’t permit access to the
  filesystem, or to execute arbitrary scripts.
lastUpdated: 2024-01-19
---

Some NPM and Deno modules will produce an error like this:

```json
{
  "error": "Requires read access to <exec_path>, run again with the --allow-read flag"
}
```

Vals run in a sandbox with limited access: we use [Deno's permissions system](https://docs.deno.com/runtime/manual/basics/permissions)
to limit access to anything that could allow one val to read
data from another, or otherwise compromise security.

NPM modules, on the other hand, often do unexpected and dangerous
things, like downloading other code at runtime, accessing your
environment variables, reading files from disk, and more. This unrestricted
access is the root cause of many security issues for Node.js.

## Allowed permissions

Vals have access to the following:

- The network (`--allow-net`)
- The environment, which in this case only means your secrets (`--allow-env`)

They don't have access to:

- The filesystem (`--allow-read` and `--allow-write`)
- Dynamic libraries (`--allow-ffi`)
- System information (`--allow-sys`)

## Workarounds

### Use esm.sh

If you're having problems using an NPM module because of permission
issues, you can often import the package from [esm.sh](https://esm.sh/) instead
of NPM to quickly resolve the issue. For example:

```diff lang="ts"
- import garminConnect from "npm:garmin-connect";
+ import garminConnect from "https://esm.sh/garmin-connect";
```

esm.sh transpiles code in order to run cleanly on Deno.
