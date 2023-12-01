---
title: Async issues
lastUpdated: 2023-12-01
tableOfContents: false
---


The JavaScript language supports
[asynchronous code](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous).
Methods like `fetch()`, to request something over HTTP, are asynchronous - their
results aren't immediately available and instead they return `Promise` objects
that you need to await using `.then()` or the `await` keyword. This is described
in more detail in
[MDN’s reference document for asynchronous JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing).
In the case of Val Town, you’ll need to know about asynchronous methods so that
you can properly wait for their results or handle errors.

If you don't `await` or `.catch` a Promise, any potential errors it throws will
not be associated with your val and you won't be notified of it.

```jsx
// ✅ errors & emails you
try {
  await fetch("hi");
} catch (e) {
  console.email(e);
}

// ⛔ fails silently
(() => {
  fetch("hi");
})();

// ✅ error in UI
// val town awaits top level Promises
fetch("hi");
```
