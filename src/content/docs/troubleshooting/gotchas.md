---
title: Gotchas
generated: 1701279907770

---

# Importing

## `default` vs named imports

If the library uses a `default` export, you will need to unwrap it:

<div class="not-content">
  <iframe src="https://www.val.town/embed/stevekrouse.npmDefaultExample" width="100%" frameborder="no" style="height: 400px;">
    &#x20;
  </iframe>
</div>

You’ll often notice that you need to do this if you don’t do it and get an unhelpful error:

<div class="not-content">
  <iframe src="https://www.val.town/embed/stevekrouse.npmDefaultErrorExample" width="100%" frameborder="no" style="height: 400px;">
    &#x20;
  </iframe>
</div>

This isn’t necessary for libraries that use named exports. There’s even a version of lodash that does this:

<div class="not-content">
  <iframe src="https://www.val.town/embed/@stevekrouse.npmExample" width="100%" frameborder="no" style="height: 400px;">
    &#x20;
  </iframe>
</div>

# Rendering

Vals don’t support outputting a UI, such as HTML or JSX.

The most common pattern is to use our [HTTP Val](../http-val)  to output HTML:

<div class="not-content">
  <iframe src="https://www.val.town/embed/neverstew.webHTMLExample" width="100%" frameborder="no" style="height: 400px;">
    &#x20;
  </iframe>
</div>

You can easily import any val into a frontend via the API. Like in [this example in Observable](https://observablehq.com/@stevekrouse/val-town-example).

# Uncaught Async Errors (Unhandled Promise Rejections)

If you don't `await` or `.catch` a Promise, any potential errors it throws will not be associated with your val and you won't be notified of it.

```jsx
// ✅ errors & emails you
try { await fetch("hi") }
catch (e) { console.email(e) }

// ⛔ fails silently
(() => { fetch("hi") })()

// ✅ error in UI
// val town awaits top level Promises 
fetch("hi")
```

# Unexpected Empty objects: `{}`

In many cases, if you’re getting an empty object `{}` where you don’t expect one to be, it might be that `Promise` that wasn’t awaited. If you get an empty object, try awaiting it and see if that solves the problem. It could also be due to how we only persist JSON data.

# `setTimeout`

You can use `setTimeout`, but it has some quirks:

1. We recommend that you wrap the timeout in a promise and await it. (Otherwise we may kill your evaluation prematurely if we fail to detect that it’s still waiting on a timeout.)

   <div class="not-content">
     <iframe src="https://www.val.town/embed/stevekrouse.delayEx" width="100%" frameborder="no" style="height: 400px;">
       &#x20;
     </iframe>
   </div>

2. We don’t limit the duration of your timeout, but we do limit the duration of val execution (1 min for free accounts and 5 min for paid), so any timeout longer than this will not execute.

# Size limits and truncation

Val and evaluation fields have a size limit of 100kb for users on the free plan and 250kb for Pro subscribers. If your output, logs, errors, code or arguments exceed that limit, we’ll truncate the value, and try to keep a valid syntax by using [JSON repair](https://www.npmjs.com/package/jsonrepair). Here’s an example:

1. Run val with code `new Array(1_000_000).fill("123")`
2. Result would be `["123","123", ... ,"123"]`
3. We truncate it to `["123","123", ... ,"1` (100kb ≈ 102400 characters)
4. We apply JSON repair `["123","123", ... ,"1"]`

If you need higher limits, reach out and let us know what’s your use-case is! And if 250kb is enough for you, please consider [subscribing to our Pro plan](https://val.town/pricing).
