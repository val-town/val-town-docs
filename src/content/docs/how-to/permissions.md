---
title: Permissions
generated: 1701279907810

---

## Exposing your vals to the internet

Public vals are great because they can be called from anywhere, anytime,
instantly. They can also be called ********************by
anyone.********************

Since anyone can call your public endpoints, if they interact with some data
that should only be changed by yourself, you will need to make sure that those
endpoints check for some kind of secret that only you know.

Here’s an example of a val exposed using the [HTTP Val](../http-val), secured
with a secret that only I know.

<div class="not-content">
  <iframe src="https://www.val.town/embed/neverstew.secretEndpoint" width="100%" frameborder="no" style="height: 400px;">
    &#x20;
  </iframe>
</div>

If I called it without supplying the secret, I’ll be denied access:

<div class="not-content">
  <iframe src="https://www.val.town/embed/neverstew.secretEndpointFailure" width="100%" frameborder="no" style="height: 400px;">
    &#x20;
  </iframe>
</div>

By supplying the secret in a header, I’m allowed access:

<div class="not-content">
  <iframe src="https://www.val.town/embed/neverstew.secretEndpointSuccess" width="100%" frameborder="no" style="height: 400px;">
    &#x20;
  </iframe>
</div>

The rest of this article will focus on various common combinations of public and
private vals that you’re likely to come across and how those interact with the
permissions system.

## Public code referencing private data

It is safe for a a public val to reference one of your private vals or one of
your secrets. Private vals and secrets are like environment variables in this
way — others can see that they’re being used, but not their values.

For example, I created a private val, `example3`. You won’t be able to see or
reference `example3` but I can use it in `example4` which is public.

<div class="not-content">
  <iframe src="https://www.val.town/embed/stevekrouse.example4" width="100%" frameborder="no" style="height: 400px;">
    &#x20;
  </iframe>
</div>

You can _****infer****_ that the value of `example3` is `"Stevie"` because of
how it’s used here. This is why you have to be careful about publishing vals
that reference private data. Typically you will reference private data in a way
that makes it impossible for others to infer what it is, like you would with an
environment variable credentials. Below I am passing my secrets to an Upstash
Redis store. You can see that I’m using these secrets and the output of this
computation, but you can’t get those values, nor can you rerun this script with
my secrets.

<div class="not-content">
  <iframe src="https://www.val.town/embed/stevekrouse.upstashJSONEx" width="100%" frameborder="no" style="height: 400px;">
    &#x20;
  </iframe>
</div>

## Using another’s vals as a library

Using another’s val is like using a library from npm. The code runs entirely in
your sandbox and they don’t get any access to your evaluation logs. In this way
it is safe to pass other’s code your private data and secrets.

<div class="not-content">
  <iframe src="https://www.val.town/embed/stevekrouse.librarySecretEx" width="100%" frameborder="no" style="height: 400px;">
    &#x20;
  </iframe>
</div>
