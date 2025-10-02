---
title: Proxied fetch
lastUpdated: 2024-05-09
description: Make HTTP requests to external services using Val Town's proxied fetch
---

The Javascript [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) is directly available within a Val. However sometimes fetch calls are blocked by the receiving server for using particular IP addresses. Additionally, network blips or unreliable web services may lead to failures if not handled properly.

The Val Town standard library contains an alternative version, [`std/fetch`](https://www.val.town/v/std/fetch), that wraps the JavaScript Fetch API to provide additional functionality. The fetch function from [`std/fetch`](https://www.val.town/v/std/fetch) reroutes requests using a proxy vendor so that requests obtain different IP addresses. It also automatically retries failed requests several times. Note that using [`std/fetch`](https://www.val.town/v/std/fetch) will be significantly slower than directly calling the Javascript Fetch API due to extra network hops.

## Usage

After importing [`std/fetch`](https://www.val.town/v/std/fetch), the fetch method is used with the same signature as the Javascript Fetch API.

```ts title="Example" val
import { fetch } from "https://esm.town/v/std/fetch";

let result = await fetch("https://api64.ipify.org?format=json");
let json = await result.json();
console.log(json.ip);
```

If you run the above code multiple times, you'll see that it returns different IP addresses, because [`std/fetch`](https://www.val.town/v/std/fetch) uses proxies so that each request is made from a different IP address.
