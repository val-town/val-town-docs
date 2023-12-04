---
title: Simplified val privacy
generated: 1701279907991
lastUpdated: 2023-03-24
description: |
  A change that we made in which val privacy is no longer determined
  by whether the values in JavaScript are exported, but rather through
  a UI element.
---

Publishing a Val has been one of the biggest sources of confusion in Val Town.
We rolled out a simpler model: Val privacy status is now entirely controlled in
the UI. We sent personalized emails to any users affected by this change.

### Val Privacy Was Confusing

1. Vals were made public by adding `export` and private by leaving out `export`
   at the beginning of the code
2. Privacy was tied to specific versions of a Val. So v0 could be private, and
   v1 could be public.

### The Fix

1. Val privacy status is now controlled entirely in the UI (click the 🔒 or
   🌐 icon)
2. A Val is public or private: all versions of the val have the same privacy
   setting.

### Upgrading

This had no effect for most users. However some of you did have Vals with mixed
privacy. That is, you had a single val where some versions were public and some
versions were private. We automatically made all of those Vals private and
emailed you to let you know what we did, and to which Vals, so you could
re-publish any that were actually meant to be public. If you did not get an
email then you need not take any action.

Going forward our runtime will ignore the `export` keyword. You can only affect
the privacy of a Val via the UI. There is currently no way to change the privacy
status of Val via the API, but we plan to add that shortly.
