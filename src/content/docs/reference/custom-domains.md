---
title: Custom domains
description: Point your own domains to any HTTP val
---

:::note

This page is still being written and reviewed

:::

Custom domains allow you to use your own domain names to access the HTTP vals you created. This feature enables a more branded and professional experience for users visiting your vals.

## Setting up custom domains

Navigate to [custom domain settings](https://val.town/settings/domains), then add the domain that you want to redirect to one of your vals.

Once the domain is added, you can choose a val to handle requests to that domain, and you'll get the DNS setup instructions, which are also covered below.

## Configure the DNS

The DNS configuration will depend on the type of domain, apex domains (`example.com`) or subdomains (`something.example.com`). These settings will depend on the platform you use to manage your domains.

### Subdomains

Create a CNAME record to `domains.val.run`:

| CNAME record            | value             |
| ----------------------- | ----------------- |
| `something.example.com` | `domains.val.run` |

Replace `something.example.com` with your domain. In some domain platforms, you should you'll only use the subdomain, which would be `something` in the example above.

### Apex domains

Create the following two A records:

| A record      | value           |
| ------------- | --------------- |
| `example.com` | `75.2.96.173`   |
| `example.com` | `99.83.186.151` |

Replace `example.com` with your domain. In some domain platforms, you should replace `example.com` with `@`.
