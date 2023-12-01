---
title: JSX
generated: 1701279907947
description: You can use JSX syntax in Val Town to render HTML and other XML dialects
---

Val Town supports server-rendered JSX. This lets you use JSX syntax to construct
your HTML string. It does not include any client-side JSX framework features,
such a re-rendering on the client.

To use JSX, you’ll need to insert what TypeScript calls a
“[per-file pragma](https://www.typescriptlang.org/tsconfig#jsxImportSource)” - a
comment that uses `@jsxImportSource` to specify where the JSX methods are going
to come from. For example, if you're implementing JSX with Preact, the pragma
will look like this at the top of your val:

```tsx
/** @jsxImportSource https://esm.sh/preact */
```

### Preact

A good default is [Preact](https://github.com/preactjs/preact), which provides a
nice `preact-render-to-string` module that lets you quickly turn that JSX object
into a string that you can use for a response.

<div class="not-content">
  <iframe src="https://www.val.town/embed/stevekrouse/preactExample" width="100%" frameborder="no" style="height: 400px;">
    &#x20;
  </iframe>
</div>

### React

<div class="not-content">
  <iframe src="https://www.val.town/embed/stevekrouse/reactExample" width="100%" frameborder="no" style="height: 400px;">
    &#x20;
  </iframe>
</div>

### Vue

<div class="not-content">
  <iframe src="https://www.val.town/embed/stevekrouse/vueExample" width="100%" frameborder="no" style="height: 400px;">
    &#x20;
  </iframe>
</div>

### Solid

<div class="not-content">
  <iframe src="https://www.val.town/embed/stevekrouse/solidExample" width="100%" frameborder="no" style="height: 400px;">
    &#x20;
  </iframe>
</div>
