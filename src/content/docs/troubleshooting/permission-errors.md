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

Vals run in a sandbox with limited access: we use
[Deno's permissions system](https://docs.deno.com/runtime/manual/basics/permissions)
to limit access to anything that could allow one val to read data from another,
or otherwise compromise security.

NPM modules, on the other hand, often do unexpected and dangerous things, like
downloading other code at runtime, accessing your environment variables, reading
files from disk, and more. This unrestricted access is the root cause of many
security issues for Node.js.

We have expanded our permissions to support as many things as possible while
still maintinaing good isolation. If you come across a package that you think
should be supported please let us know.

## Allowed permissions

Vals have the following permissions:

1. Network access (`--allow-net`).
2. Environment access, limited to your secrets (`--allow-env`).
3. Some system information (`--allow-sys=osRelease,homedir,cpus,hostname`) This
   allows you to access the following functionality:
   ```ts
   import os from "node:os";
   os.cpus();
   os.homedir();
   Deno.osRelease();
   Deno.hostname();
   ```
   These values are not particularly useful, but are sometimes relied upon by
   certain libraries.
4. Read access to some files, including the NPM registy cache and the current
   working directory. This allows you to read the
   [lockfile](/reference/version-control/#lockfiles) contents
   (`console.log(Deno.readTextFileSync("deno.lock"));`) and read files imported
   by NPM modules.

Vals do not have access to:

1. General filesystem read/write operations (`--allow-read` and
   `--allow-write`), except for the specific cases mentioned above.
2. Dynamic libraries (`--allow-ffi`).
3. Extended system information beyond the permitted values (`--allow-sys`).
4. High-resolution time measurement (`--allow-hrtime`).
5. Subprocess or executable execution (`--allow-run`).

## Workarounds

### Use esm.sh

If you're having problems using an NPM module because of permission issues, you
can often import the package from [esm.sh](https://esm.sh/) instead of NPM to
quickly resolve the issue. For example:

```diff lang="ts"
- import garminConnect from "npm:garmin-connect";
+ import garminConnect from "https://esm.sh/garmin-connect";
```

esm.sh transpiles code in order to run cleanly on Deno.
