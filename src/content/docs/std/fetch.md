---
title: Proxied fetch
lastUpdated: 2023-12-27
---


The Javascript Fetch API is directly available within a Val. However, the requests sent using this API are not proxied or retried. This is problematic in some use cases where requests may be blocked by the receiving server for using particular IP addresses. Additionally, network blips or unreliable web services may lead to failed Vals if not handled properly.

The Val Town standard library contains an alternative version, [`std/fetch`](https://www.val.town/v/std/fetch), that wraps the Javascript Fetch API to provide additional functionality. The fetch function from [`std/fetch`](https://www.val.town/v/std/fetch) reroutes requests using a proxy vendor so that all requests obtain different IP addresses. It also automatically retries failed requests several times. Note that using [`std/fetch`](https://www.val.town/v/std/fetch) may be slightly slower than directly calling the Javascript Fetch API due to rerouted requests.

## Usage

After importing [`std/fetch`](https://www.val.town/v/std/fetch), the fetch method is used with the same signature as the Javascript Fetch API.

```ts title="Example" val
import { fetch } from "https://esm.town/v/std/fetch";

let result = await fetch("https://api64.ipify.org?format=json");
let json = await result.json();
console.log(json.ip);
```

If you run the above code multiple times, you'll see that it returns different IP addresses, because [`std/fetch`](https://www.val.town/v/std/fetch) uses proxies, so that each request is made from a different IP address.
