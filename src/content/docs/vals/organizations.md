---
title: Organizations
description: Collaborate with your team
lastUpdated: 2026-07-01
---

Organizations are how you collaborate with teammates on vals. Creating an org is free, but our [Business](https://www.val.town/pricing) plan unlocks features, like [environment groups](/reference/environment-groups), higher limits, and hands-on support.

Create a new org from your Val Town [dashboard](https://val.town/dashboard):

![organizations](./organizations.png)

## Transferring vals between orgs

When you transfer a val to a different org, the following features transfer automatically:

- Scoped [environment variables](/reference/environment-variables)
- Scoped [SQLite](/reference/std/sqlite/)
- Scoped [blob storage](/reference/std/blob)
- `*.val.run` [HTTP endpoints](/vals/http/)

### What does NOT transfer automatically

The following require manual updates (or ask your agent/Townie):

- val.town URLs, i.e. `https://www.val.town/x/<org>/<val>`
- esm.town URLs, e.g. used by other vals importing code from the transferred val
- Global env vars (deprecated): found in [account settings](https://www.val.town/settings/environment-variables); new ones can't be created
- [Environment groups](/reference/environment-groups): scoped to the organization, do not transfer
