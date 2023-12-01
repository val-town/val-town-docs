---
title: Fetch
---

Go to [std/fetch](https://www.val.town/v/std/fetch)

Val Town exposes the web-standard
[`fetch``](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API), which
lets you make fetch requests. 

```ts
let data = await fetch(")
```


However, many websites block requests made from
unknown sources. This is why we provide `std/fetch`, which automatically uses
proxies in order to make requests with a greater chance of success. It has the
same API as the standard fetch method.

Expect `std/fetch` to be more reliable, but slower because it has to go through proxies.
