---
title: Express
generated: 1701279907972

---

:::note
👉 Most new vals [should use the Web API instead](../http-val), which supports a wider range of inputs & outputs.

:::

The Express API allows to run a Val as an [Express](https://expressjs.com/) route handler. The Express system will be familiar to folks who have written web servers with Node.js, and gives you control over details like response headers and redirection.

You can return HTML ([example val](https://www.val.town/v/stevekrouse.expressHTMLExample), [output](https://api.val.town/v1/express/stevekrouse.expressHTMLExample?name=Townie)) or define a webhook handler to adhere to another service’s specifications ([example val](https://www.val.town/v/stevekrouse.handleOnboardingReferral)).

The Val must be a function. It is passed two arguments, the Express **`[req](https://expressjs.com/en/4x/api.html#req)`** and **`[res](https://expressjs.com/en/4x/api.html#res)`** objects. You can use **`req`** to pull out request data, and **`res`** to respond with any valid Express response. Learn more at the [Express docs](https://expressjs.com/en/4x/api.html).

Unauthenticated use will only be able to call public vals as Express handlers. The Val will be executed with Val author's permissions, so it will be able to read and write to author’s public and private vals, read their secrets, and send them emails via **`console.email`**.

:::note
❕ For security reasons, the versions of the express Request and Response objects exposed to vals don’t expose all methods. Requests have the methods: `method` `query` `body` `baseUrl` `params` `secure` `subdomains` `fresh` `protocol` `path` `originalUrl` `acceptsCharsets` `acceptsEncodings` `acceptsLanguages` `accepts` and `get`. Responses have the methods `json` `jsonp` `status` `send` `type` `get` `redirect` `end` `set` .

:::

## `handle-val.express.val.run`

The Express API can be called via GET or POST. You can access the JSON-parsed POST request body via `req.body`:

<div class="not-content">
  <iframe src="https://www.val.town/embed/stevekrouse.postWebhook1" width="100%" frameborder="no" style="height: 400px;">
    &#x20;
  </iframe>
</div>

<div class="not-content">
  <iframe src="https://www.val.town/embed/stevekrouse.postWebhookTest1" width="100%" frameborder="no" style="height: 400px;">
    &#x20;
  </iframe>
</div>

Check out the [ExpressJS docs](http://expressjs.com/) to figure out how to use the `req` and `res` objects or add `express.Request` and `express.Rsponse` types to your parameters and you’ll see what properties exist on them inline:

![Screenshot 2023-03-14 at 3.29.23 PM.png](./express/screenshot_2023-03-14_at_32923_pm.png)

## Custom Status Codes

Like any Express server, you can respond with [custom headers](https://expressjs.com/en/api.html#res.set), and custom status codes.

<div class="not-content">
  <iframe src="https://www.val.town/embed/vtdocs.customStatusCode" width="100%" frameborder="no" style="height: 400px;">
    &#x20;
  </iframe>
</div>
