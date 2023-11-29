---
title: Run
generated: 1701279907981

---

The Run API let’s you run any Val as an API. Unauthenticated use will only have access to public vals. If you run a JSON Val, it simply returns that Val. A function Val will be executed its author's permissions, so it will be able to read and write to author’s public and private vals, read their secrets, and send them emails via **`console.email`**.

You pass `args` to Run API function calls via a JSON-encoded array. While it may feel a bit clunky to always pass an array (even when passing a single argument), this is a clean and expressive way to accept any number of arguments.

## GET `/v1/run/{handle}.{val}`

<div class="not-content">
  <iframe src="https://www.val.town/embed/stevekrouse.runGET" width="100%" frameborder="no" style="height: 400px;">
    &#x20;
  </iframe>
</div>

## POST `/v1/run/{handle}.{val}`

<div class="not-content">
  <iframe src="https://www.val.town/embed/stevekrouse.runPOST" width="100%" frameborder="no" style="height: 400px;">
    &#x20;
  </iframe>
</div>
