---
title: Creating a webhook
generated: 1701279907748
description: Use Val Town to receive HTTP webhooks from services like Discord or Stripe
---

A webhook is another name for a
[Request](https://developer.mozilla.org/en-US/docs/web/api/request) that is sent
between two services on the web. They “hook” into the events that one service
creates and notify another service of what happens. In other words, webhooks
allow you to get realtime notifications.

You can create a webhook handler in Val Town and then register it with the
service you want the notification from. Webhooks are usually created via Val
Town [HTTP Val](/types/http) , because it can accept standard HTTP requests.

## Create a webhook handler

Vals that conform to the [HTTP Val](/types/http) pattern accept a
[Request](https://developer.mozilla.org/en-US/docs/web/api/request) as an
argument and return a
[Response](https://developer.mozilla.org/en-US/docs/web/api/response).

Here’s an example that connects the [Clerk](http://clerk.com) authentication
service and [Discord](http://discord.com).

<div class="not-content">
  <iframe src="https://www.val.town/embed/neverstew.handleDiscordNewUser" width="100%" frameborder="no" style="height: 400px;">
    &#x20;
  </iframe>
</div>

The val above has three parts:

1. It accepts a
   [Request](https://developer.mozilla.org/en-US/docs/web/api/request) and
   checks that it really is from the Clerk by comparing a secret.
2. It sends a
   [Request](https://developer.mozilla.org/en-US/docs/web/api/request) to
   Discord to send a message to a channel and `await`s the response.
3. It sends a
   [Response](https://developer.mozilla.org/en-US/docs/web/api/response) back to
   Clerk so that it knows the webhook succeeded.

## Receiving Webhooks

Copy your val’s web endpoint using the menu and paste it into your webhook
provider. The webhook provider will POST events to your Val.

![Untitled](./creating-a-webhook/untitled.png)

You can debug the requests by checking the arguments object in the
[Evaluations tab](https://www.val.town/settings/evaluations).

![Screenshot 2023-06-14 at 14.36.06.png](./creating-a-webhook/screenshot_2023-06-14_at_143606.png)

See also

- [Receiving a GitHub Webhook](/integrations/github/receiving-a-github-webhook)
- [Send Discord message via webhook](/integrations/discord/send-discord-message-via-webhook)
