---
title: Serialization
lastUpdated: 2023-12-01
description: |
  Val Town tries to serialize and deserialize as many types as it can, but
  doing that for all JavaScript is unfortunately very hard
---

Val Town is a server-side platform, primarily: when you run code, it runs
on a server. This has many benefits, like the ability to import many different
modules, make requests to other servers, run code on a schedule, and much
more.

It also means that when you run code and see the results of that code, the
results have to be stored, encoded, sent to your browser, and then decoded
into something readable. We try to cover as many bases as possible with this
conversion: if your code returns a JavaScript string, number, array, Map,
Set, and many other types - we'll show you a very helpful representation of it.

However, there are some objects that aren't really translatable from one
environment to another, like `Promise` and `Symbol` objects. In some cases as well, code that returns data with recursive structures - self-references -
will fail to be serialized, and produce an error.
