---
title: Basic examples
generated: 1701279907946

---

A val that works with the Web API takes a Request object as input and needs to return a Response object.

The most basic example can ignore the request and just return a response, even using a shorthand method like [Response.json, which is part of the web standard](https://developer.mozilla.org/en-US/docs/Web/API/Response/json_static).

<div class="not-content">
  <iframe src="https://www.val.town/embed/tmcw.jsonOkExample" width="100%" frameborder="no" style="height: 400px;">
    &#x20;
  </iframe>
</div>

A slightly more built-out val can return HTML along with the correct Content-Type header:

<div class="not-content">
  <iframe src="https://www.val.town/embed/tmcw.htmlExample" width="100%" frameborder="no" style="height: 400px;">
    &#x20;
  </iframe>
</div>

Now let’s work with the request: this echoes request headers back in the response:

<div class="not-content">
  <iframe src="https://www.val.town/embed/tmcw.headersExample" width="100%" frameborder="no" style="height: 400px;">
    &#x20;
  </iframe>
</div>

We can grab query parameters using the web standard [URLSearchParams](https://developer.mozilla.org/en-US/docs/Web/API/URL/searchParams) class:

<div class="not-content">
  <iframe src="https://www.val.town/embed/neverstew.queryParams" width="100%" frameborder="no" style="height: 400px;">
    &#x20;
  </iframe>
</div>
