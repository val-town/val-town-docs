---
title: Interop with Node, Deno, and Browsers
description: Learn how to run your vals in different runtimes
lastUpdated: 2024-01-16
# cspell:ignore interoperating
---

Vals can be written in TypeScript and JavaScript. JavaScript
is the natural language of the web, and benefits from having
many different runtimes.

So you can run your vals outside of Val Town, but because each
of the JavaScript runtimes is a bit different, there are some
notes to be aware of.

### Deno

Val Town's own runtime is built on [Deno](https://deno.land/),
so naturally vals run best on Deno outside of Val Town.
You can reasonably expect Deno to _just work_ with Vals:
you can just copy the **Module URL** from the dropdown
menu in the val editor and plug it into Deno:

```sh
$ deno run https://esm.town/v/tmcw/randomVal
0.5133662021089374
```

**Caveats**: When you run vals locally, you'll need to make sure that
any [environment variables](/reference/environment-variables/)
you've set in Val Town are set as environment variables in your
local environment.

**Private vals** can be run by setting [DENO_AUTH_TOKENS](https://docs.deno.com/runtime/manual/basics/modules/private). Create an [API token](/reference/api/authentication/)
in Val Town, and then use it for the esm.town domain:

```sh
$ DENO_AUTH_TOKENS=xxx@esm.town deno run https://esm.town/v/tmcw/privateVal

Hello world!
```

### Browsers

Both Val Town and Deno aim to use the web platform and build
on web standards, so many vals will also run in browsers!

Our module endpoint will transpile TypeScript code to JavaScript
code when it receives a request that meets the criteria:

- The requester is not Deno.
- Neither `text/html` nor `text/tsx` are specified in the HTTP
  Accept header.

This means that if you go to a Val's source code directly on
its esm.town URL, you'll see TypeScript, but if you import
that code via JavaScript in the browser, your browser will
get the code as JavaScript.

```html
<script type="module">
  import rand from "https://esm.town/v/tmcw/randomVal";
  console.log(rand);
</script>
```

To use a val from a browser, you'll need to import it from
script with `type="module"` - Vals use the [ES Module Syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules).

**Caveats**: While we support Web Platform APIs, we also support
many APIs that aren't available in web browsers. Unlike web browsers,
Deno can read files, interact with environment variables, and much
more. Vals that use these Deno or Node-specific APIs will not
automatically work in browsers.

### Node.js

Using [Node.js](https://nodejs.org/en) with Vals directly relies on relatively new APIs in Node.js,
specifically the [support for HTTP and HTTPS imports](https://nodejs.org/api/esm.html#https-and-http-imports). This requires you to run
Node with a the `--experimental-network-imports` flag, and
has a number of caveats. However, for simple vals, it works.

Create a JavaScript file that Node.js will execute as ESM,
in this case prompting that by using the `.mjs` extension.

```js
// index.mjs
import rand from "https://esm.town/v/tmcw/randomVal";
console.log(rand);
```

Then run Node.js with the specified flag:

```sh
$ node --experimental-network-imports index.mjs
0.4050279110448427
```

### Node.js with dnt

The more robust way of interoperating with Node.js is to use
[dnt](https://github.com/denoland/dnt). dnt is a tool that
can repackage code written for Deno as NPM modules that are
fully compatible with Node.js. It requires a bit more setup than
the other options, but if you're using Deno and NPM APIs and
have more complex code, it can be a great option.

You'll need to install and use Deno locally to run dnt.

Create a shim file that exports from your Val (dnt doesn't support
entry points over HTTP):

```ts
// index.ts
export * from "https://esm.town/v/tmcw/randomVal?v=3";
```

Create a build file like:

```ts
// build.ts
import { build, emptyDir } from "https://deno.land/x/dnt/mod.ts";

await emptyDir("./npm");

await build({
  entryPoints: ["index.ts"],
  outDir: "./npm",
  typecheck: false,
  shims: {
    deno: true,
  },
  package: {
    name: "your-val",
    version: Deno.args[0],
    description: "Your package.",
  },
  postBuild() {},
});
```

Run that build file with Deno:

```sh
$ deno run -A build.ts
[dnt] Transforming...
[dnt] Running npm install...

added 3 packages, and audited 4 packages in 543ms

found 0 vulnerabilities
[dnt] Building project...
[dnt] Type checking ESM...
[dnt] Emitting ESM package...
[dnt] Emitting script package...
[dnt] Running post build action...
[dnt] Running tests...

> test
> node test_runner.js

[dnt] Complete!
```

And now you'll get a directory named `npm` that contains a Node-compatible
module:

```sh
$ npm node
Welcome to Node.js v18.18.0.
Type ".help" for more information.
> require('./')
0.402717678920262
{}
```

### Bun

[Bun](https://bun.sh/) has Node.js compatibility but doesn't support
HTTP imports yet, so the best way to use Vals with Bun is to run them
through dnt using the information above.
