---
title: Limits
---

Val and evaluation fields have a size limit of 100kb for users on the free plan
and 250kb for Pro subscribers. If your output, logs, errors, code or arguments
exceed that limit, we’ll truncate the value, and try to keep a valid syntax by
using [JSON repair](https://www.npmjs.com/package/jsonrepair). Here’s an
example:

1. Run val with code `new Array(1_000_000).fill("123")`
2. Result would be `["123","123", ... ,"123"]`
3. We truncate it to `["123","123", ... ,"1` (100kb ≈ 102400 characters)
4. We apply JSON repair `["123","123", ... ,"1"]`

If you need higher limits, reach out and let us know what’s your use-case is!
And if 250kb is enough for you, please consider
[subscribing to our Pro plan](https://val.town/pricing).
