---
title: Vals need to be exported
generated: 1701279907927

---

You might be running into an error that looks like this:

```
ImportValError: Vals require exactly one export. This val has none.
```

This is because vals need to have one export. In JavaScript, each file (or each val, in our case) can have exported variables and declarations. These values are exported with the `export` keyword, and are different from the rest of the variables because they’re accessible to other files.

For example, a web handler might look like:

```tsx
export async function okHandler(request: Request): Promise<Response> {
  return Response.json({ ok: 1 });
}
```

Which exports the `okHandler` method. So, if you’ve got a val like this:

```tsx
let ok = true;
```

And you’re running into this issue, just add an export keyword:

```tsx
export let ok = true;
```

🎉 That’ll work!

The same goes for functions:

```tsx
function x() {}
```

Won’t work, but

```tsx
export function x() {}
```

Will!
