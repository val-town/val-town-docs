---
title: Empty objects
lastUpdated: 2023-12-01
tableOfContents: false
---


In many cases, if you’re getting an empty object `{}` where you don’t expect one
to be, it might be that `Promise` that wasn’t awaited. If you get an empty
object, try awaiting it and see if that solves the problem. It could also be due
to how we only persist JSON data.
