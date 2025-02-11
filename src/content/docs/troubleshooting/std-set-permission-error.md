---
title: "Upgrade Guide: Safer Val Scopes"
description: "How to upgrade your vals for the safer default scopes rolled out to everyone on Feb 11, 2025"
sidebar:
  hidden: true
---

On February 11th, 2025, we migrated all remaining users' vals to the safer API scopes scopes. This change was [announced in this blog post](https://blog.val.town/blog/api-token-scopes/) on Nov 1, 2024. At that time, the changes applied only to the users who were not using the `val:write` scope, so as to give users who would be affected time to upgrade their vals. As of February 11th, 2025, all user's vals default to these safer scopes. In particular, the `vals:write` permission is missing from your vals, unless and until you explicitly add it in your val's settings.

One of the most common uses of the `val:write` permission is the now-deprecated [std.set](https://www.val.town/v/std/set) function, since it modifies another val. If you're seeing an error with `std/set`, there are two actions you can take, outlined below. [Reach out to us if you need any help with the process](/contact-us/contact-us/).

## Use Blob Storage Instead (recommended)

`Std/set` is deprecated and we now use blob storage with our [`std/blob`](https://www.val.town/v/std/blob) library instead. The equivalent function to `std.set()` is [`blob.setJSON()`](https://www.val.town/v/std/blob#L161). 


```js
// Using std/set
import { set } from "https://esm.town/v/std/set";
set("createdAt", Date.now());
```

```js
// Using std/blob
import { blob } from "https://esm.town/v/std/blob";
blob.setJSON("createdAt", Date.now());
```

Below is a real world example of swapping out `std/set` for `std/blob` in [a cron val](https://www.val.town/v/stevekrouse/pollRSSFeeds2) that polls RSS feeds and emails the results:

Using `std/set`:
```js
import { email } from "https://esm.town/v/std/email?v=9";
import { set } from "https://esm.town/v/std/set?v=11";
import { inkAndSwitchRssUrl } from "https://esm.town/v/stevekrouse/inkAndSwitchRssUrl";
import { newRSSItems } from "https://esm.town/v/stevekrouse/newRSSItems";
import { pollRSSInkAndSwitch } from "https://esm.town/v/stevekrouse/pollRSSInkAndSwitch";

export async function pollRSSFeeds2() {
  let items = await newRSSItems({
    url: inkAndSwitchRssUrl,
    lastRunAt: pollRSSInkAndSwitch,
  });
  if (items.length)
    await email({
      text: JSON.stringify(items, null, 2),
      subject: `New RSS Item`,
    });
  return set("pollRSSInkAndSwitch", Date.now());
}
```

Using `std/blob`:
```js
import { email } from "https://esm.town/v/std/email?v=9";
import { blob } from "https://esm.town/v/std/blob?v=13"; // Updated import
import { inkAndSwitchRssUrl } from "https://esm.town/v/stevekrouse/inkAndSwitchRssUrl";
import { newRSSItems } from "https://esm.town/v/stevekrouse/newRSSItems";

export async function pollRSSFeeds2() {
  let pollRSSInkAndSwitch = await blob.getJSON("pollRSSInkAndSwitch");
  if (!pollRSSInkAndSwitch) {
    pollRSSInkAndSwitch = (await import("https://esm.town/v/stevekrouse/pollRSSInkAndSwitch")).pollRSSInkAndSwitch;
  }
  let items = await newRSSItems({
    url: inkAndSwitchRssUrl,
    lastRunAt: pollRSSInkAndSwitch,
  });
  if (items.length)
    await email({
      text: JSON.stringify(items, null, 2),
      subject: `New RSS Item`,
    });
  return blob.setJSON("pollRSSInkAndSwitch", Date.now()); // Updated function call
}
```

If you want to learn more about how to use blob storage, [check out our docs here](https://docs.val.town/std/blob/#_top). You can also view and manually edit your blobs by forking this [blob admin val](https://www.val.town/v/stevekrouse/blob_admin).

## Add Val Write Permissions to Your Val

Alternatively, you can update your val's permission scopes so it can create or modify other vals again. To do this:

### 1. Go to your val's Settings

![Val settings page](./std-set-permission-error/val-settings.png)

### 2. Scroll down to the Permissions section and select the Vals dropdown

![Vals permissions menu](./std-set-permission-error/vals-permissions-menu.png)

### 3. Select Read and Write

![Read and write dropdown](./std-set-permission-error/read-write-dropdown.png)

You're good to go!