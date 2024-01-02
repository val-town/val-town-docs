---
title: Custom domains
description: Point your own domains to any HTTP val
---

Custom domains allow you to use your own domain names to access the HTTP vals you created. This feature enables a more branded and professional experience for users visiting your vals.

## Buy a domain

The custom domains feature works with domains that you already own, and connects them to your val, which serves all traffic to the domain. You'll need to configure DNS settings with your domain registrar to make this work.

Some domain registrars that you can use to buy a domain:

- [Namecheap](https://www.namecheap.com/)
- [Cloudflare Registrar](https://www.cloudflare.com/products/registrar/)
- [GoDaddy](https://www.godaddy.com/)

## Add your domain to Val Town

Once you have a domain, navigate to Val Town's [custom domain settings](https://val.town/settings/domains) and add your domain that you want to redirect to one of your vals.

Then, choose a val to handle requests to that domain.

## Configure the DNS

Lastly, you'll need to configure the DNS settings in your domain registrar so that requests are routed to your val. We provide a summary of the information below on the domain page for your convenience.

The DNS configuration will depend on the type of domain, apex domains (`example.com`) or subdomains (`something.example.com`). These settings will depend on the platform you use to manage your domains.

:::note

DNS changes can take a few minutes or up to an hour to take effect.

:::

### Subdomains

Create a CNAME record to `domains.val.run`:

| CNAME record            | value             |
| ----------------------- | ----------------- |
| `something.example.com` | `domains.val.run` |

Replace `something.example.com` with your domain. In some domain platforms, you should only use the subdomain, which would be `something` in the example above.

### Apex domains

Create the following two A records:

| A record      | value           |
| ------------- | --------------- |
| `example.com` | `75.2.96.173`   |
| `example.com` | `99.83.186.151` |

Replace `example.com` with your domain. In some domain platforms, you should replace `example.com` with `@`.
