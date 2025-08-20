---
title: Custom subdomains
description: Choose custom subdomains of val.run for HTTP vals in projects
---

[HTTP endpoints](/vals/http/) within vals can claim custom subdomains
under `val.run`. To choose a custom subdomain:

- Click the green HTTP trigger dropdown
- Select "Custom subdomain"
- Enter your desired name and click "Save". Your endpoint will be available at
  `https://<subdomain>.val.run`.

![](./choosing-subdomains.png)

### Subdomain naming

Subdomain names need to be valid for the DNS system, so they can contain
letters, dashes, and numbers, but they cannot contain two consecutive dashes
`--`, or start or end with a dash. They can be anywhere from 3-63 characters
long.

### Claiming and changing subdomain names

Subdomains are first-come first-served: once you claim a subdomain,
it is attached to your account and can be used for your HTTP endpoints.

For security reasons and to prevent subdomain takeovers,
if you claim a subdomain name and rename an HTTP endpoint
_away_ from that name, the old name will not be accessible to anyone else
for a certain period of time.

Due to the exclusivity of subdomains, there are limits on how many domains
you can use in your account and how many times you can change the subdomain
of an HTTP endpoint.

### Custom domains

You can go even farther with [custom _domains_](/vals/http/custom-domains/),
which allow HTTP endpoints to be hosted behind any top-level domain that
you purchase, or subdomain of a domain that you own.
