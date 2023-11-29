---
title: Slack bot
generated: 1701279907711
description: A Slack bot that replies to mentions

---

You can build a Slack bot using vals.

Vals can receive events from Slack’s
[Events API](https://api.slack.com/apis/connections/events-api) via the Express
API. In this guide, you’ll build a bot that replies whenever it’s mentioned.

![Screenshot 2023-06-28 at 09.21.24.png](./a-slack-bot-that-replies-to-mentions/screenshot_2023-06-28_at_092124.png)

## 1. Create a Slack app

Visit
[https://api.slack.com/apps?new\_app=1](https://api.slack.com/apps?new_app=1),
create a new app **From Scratch**, and choose your **App Name** and your
workspace.

![Screenshot 2023-06-27 at 07.05.40.png](./send-messages-to-slack/screenshot_2023-06-27_at_070540.png)

## 2. Save your app’s verification token

When your handler val receives requests, you can verify that they were sent by
Slack by looking for the verification token.

To find your app’s verification token, go to **Settings** → **Basic
Information** in the side bar. Scroll down to **App Credentials**.

![Screenshot 2023-06-27 at 13.29.51.png](./a-slack-bot-that-replies-to-mentions/screenshot_2023-06-27_at_132951.png)

Save the **Verification Token** as a
[Val Town secret](https://www.val.town/settings/secrets) as
`slackVerificationToken`.

## 3. Create a val that will respond to the challenge and reply when it’s mentioned

When you add a **Request URL**, Slack will immediately send a challenge to
verify the endpoint is correct.

Fork this val that responds to the challenge, and replies to `app_mention`
events.

<div class="not-content">
  <iframe src="https://www.val.town/embed/neverstew.slackReplyToMessage" width="100%" frameborder="no" style="height: 400px;">
    &#x20;
  </iframe>
</div>

## 4. Set up event subscriptions

On your forked val, copy the Web endpoint via the menu at Endpoints > Copy web
endpoint.

Back on Slack, navigate to the **Event Subscription** page. It’s under
**Features** in the side bar.

Toggle on **Enable Events**, and paste your endpoint in the **Request URL**
field.

![Screenshot 2023-06-28 at 11.15.06.png](./a-slack-bot-that-replies-to-mentions/screenshot_2023-06-28_at_111506.png)

A few seconds later, you should see a verified message above the input box.

## 4. Subscribe to the [app_mention](https://api.slack.com/events/app_mention) event

On the **Event Subscriptions** page, scroll down to the ****Subscribe to bot
events**** section, and subscribe to the
[app_mention](https://api.slack.com/events/app_mention) event. Make sure to
**Save Changes**.

![Screenshot 2023-06-27 at 21.49.16.png](./a-slack-bot-that-replies-to-mentions/screenshot_2023-06-27_at_214916.png)

## 5. Add the necessary scopes to your app

In **Features** → **OAuth & Permissions**, scroll down to **Scopes** and enable
the scopes you need.

So the bot can reply when it’s mentioned, add `app_mentions:read` and
`chat:write`.

![Screenshot 2023-06-27 at 21.51.05.png](./a-slack-bot-that-replies-to-mentions/screenshot_2023-06-27_at_215105.png)

## 6. Install your app to your workspace

In **Settings** → **Install App**, install the app to your workspace.

![Screenshot 2023-06-27 at 21.38.57.png](./a-slack-bot-that-replies-to-mentions/screenshot_2023-06-27_at_213857.png)

## 7. Get your app’s OAuth token

In **Features** → **OAuth & Permissions**, copy the **Bot User OAuth Token**,
and save it as a [Val Town secret](https://www.val.town/settings/secrets) as
`slackToken`.

![Screenshot 2023-06-27 at 22.08.15.png](./a-slack-bot-that-replies-to-mentions/screenshot_2023-06-27_at_220815.png)

## 7. Add your bot to the relevant Slack channel

The bot will receive an event when it’s mentioned in a channel that it’s been
invited to.

Invite the bot to your channel.

![Screenshot 2023-06-27 at 21.43.49.png](./a-slack-bot-that-replies-to-mentions/screenshot_2023-06-27_at_214349.png)

Mention the bot, and the val you forked earlier
([@vtdocs.slackReplyToMessage](https://www.val.town/v/vtdocs.slackReplyToMessage))
will reply to the message!

![Screenshot 2023-06-28 at 09.21.24.png](./a-slack-bot-that-replies-to-mentions/screenshot_2023-06-28_at_092124-1.png)

Vals not behaving like you’d expect? Get help on the
[Val Town Discord](https://discord.gg/dHv45uN5RY).
