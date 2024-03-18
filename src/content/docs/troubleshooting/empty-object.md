---
title: Empty objects
lastUpdated: 2024-03-18
description: You may see an empty object in a val's output if you forget to serialize a promise.
---

In many cases, if you're getting an empty object `{}` where you don't expect one
to be, it might be that `Promise` that wasn't awaited. If you get an empty
object, try awaiting it and see if that solves the problem. It could also
be a type that can't be serialized, like a [Symbol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol)
or a JavaScript class.