---
title: CORS
description: |
  Understanding Cross-Origin Resource Sharing (CORS) in Val Town
lastUpdated: 2024-10-22
---

This document explains how Val Town handles Cross-Origin Resource Sharing (CORS)
headers, why they're important, and how to customize them for your vals.

## Default CORS Configuration

By default, Val Town adds the following CORS headers to responses:

```
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: GET,HEAD,PUT,PATCH,POST,DELETE
```

When responding to preflight requests, we also mirror any requested headers in
the `Access-Control-Allow-Headers` response header.

These default headers enable your vals to:

- Be called from any domain (`*`)
- Support common HTTP methods without additional configuration
- Work with standard web APIs and frameworks
- Handle preflight requests automatically

This default configuration is beneficial for development, allowing easy
interaction with your Val endpoints. However, as you move towards production,
you may want to implement more restrictive CORS policies for enhanced security.

## Customizing CORS Headers

You can override the default CORS configuration by setting your own CORS headers
in your val. Once you set any CORS-related header, Val Town will not add any
default headers.

### Example: Custom CORS Configuration

```javascript
export async function myEndpoint() {
    return new Response("Hello", {
        headers: {
            "Access-Control-Allow-Origin": "https://specific-domain.com",
            "Access-Control-Allow-Methods": "GET,POST",
        },
    });
}
```

### Example: Handling Preflight Requests

For complete control over CORS behavior, you can handle OPTIONS requests
explicitly:

```javascript
export async function myEndpoint(req) {
    if (req.method === "OPTIONS") {
        return new Response(null, {
            status: 204,
            headers: {
                "Access-Control-Allow-Origin": "https://specific-domain.com",
                "Access-Control-Allow-Methods": "GET,POST",
                "Access-Control-Allow-Headers": "*",
                "Access-Control-Max-Age": "86400",
            },
        });
    }
    // Handle actual request...
}
```

## Removing CORS Headers

If we detect that you've set your own `"Access-Control-Allow-Origin"` header we
won't add any custom CORS headers to your request.

```javascript
export async function myEndpoint() {
    return new Response("Hello", {
        headers: {
            "Access-Control-Allow-Origin": "", // The minimum possible configuration to disable our headers.
        },
    });
}
```

## Security Considerations

While the default CORS configuration enables broad access (`*`), consider
restricting the `Access-Control-Allow-Origin` header to specific domains in
production environments where appropriate. This can help prevent unauthorized
cross-origin requests to your vals.
