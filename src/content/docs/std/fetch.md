---
title: Proxied fetch
---

Val Town offers a proxied version of the standard fetch method that uses proxies and retries for more reliability. This is useful for websites that block requests made from data centers or have unreliable uptime. However it is slower than the standard `fetch` method. `std/fetch` has the same API as the standard fetch method.

## Usage

You can use `std/fetch` just like the standard `fetch` method.

```ts val
import { fetch } from "https://esm.town/v/std/fetch";

let result = await fetch("https://api64.ipify.org?format=json");
let json = await result.json();
console.log(json.ip);
```

If you run the above code multiple times, you'll see that it returns different IP addresses, because `std/fetch` uses proxies, so that each request is made from a different IP address.
