---
title: Eval
generated: 1701279907968

---

The Eval API lets you run arbitrary JavaScript/TypeScript, with full access to
the Val Town runtime.

Vals created via this API will _not_ appear in the authenticated user's
workspace but they will be created and can be accessed (and moved into the
user's workspace) via their direct link on the
frontend: **`https://val.town/v/{handle}.{val}`**.

## GET `/v1/eval/{expression}`

One of the more fun parts of the Eval API is that you can explore it fully in
the URL bar. For the following examples, click on the URLs to test them out
yourself.

You can evaluate simple expression, like
[`https://api.val.town/v1/eval/1+1`](https://api.val.town/v1/eval/1+1) which
returns `2`.

You can compute with references to public vals, like
[`https://api.val.town/v1/eval/@stevekrouse.example1+1`](https://api.val.town/v1/eval/@stevekrouse.example1+1).

You can even call vals:
[`https://api.val.town/v1/eval/@stevekrouse.add(@stevekrouse.example1, @stevekrouse.example2)`](https://api.val.town/v1/eval/@stevekrouse.add(@stevekrouse.example1,%20@stevekrouse.example2)).

## POST `/v1/eval`

Pass the `code` expression to be evaluated via a JSON-encoded body, like so:

<div class="not-content">
  <iframe src="https://www.val.town/embed/stevekrouse.evalPost1" width="100%" frameborder="no" style="height: 400px;">
    &#x20;
  </iframe>
</div>

You can also pass arguments if the `code` parameter represents a function:

<div class="not-content">
  <iframe src="https://www.val.town/embed/stevekrouse.evalPost2" width="100%" frameborder="no" style="height: 400px;">
    &#x20;
  </iframe>
</div>
