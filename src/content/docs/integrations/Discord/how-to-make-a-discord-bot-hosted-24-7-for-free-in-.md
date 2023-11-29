---
title: Discord bot
generated: 1701279907787
description: How to make a Discord bot hosted 24/7 for free in 6 steps
---

![https://i.postimg.cc/bw5Xj8Rd/ping.gif](https://i.postimg.cc/bw5Xj8Rd/ping.gif)

## Introduction

By the end of this tutorial you will have a Discord bot hosted 24/7, for free,
forever, on [Val Town](http://val.town), that responds to a basic `/ping`
[Slash Command](https://support.discord.com/hc/en-us/articles/1500000368501-Slash-Commands-FAQ).

[Val Town](http://val.town) is a social website to write, and deploy JavaScript
from the browser.

No prior coding experience required. The vast majority of this tutorial is
creating the bot on Discord and pasting your keys into Val Town. The actual
coding parts are just clicking ******Run****** two times to fork over two pieces
of code to your Val Town account.

:::note 💡 If you get stuck,
[come join us in the Val Town Discord](https://discord.gg/dHv45uN5RY)!

:::

## Video Tutorial

If you prefer videos, here’s this same tutorial in a 3-minute YouTube video.

[https://youtu.be/yYXmInPSSfg](https://youtu.be/yYXmInPSSfg)

## Step 1: Create a Discord app

1. Go to the
   [Discord Developer Portal](https://discord.com/developers/applications) and
   select “New Application” in the top right

![1.edited.png](./how-to-make-a-discord-bot-hosted-24-7-for-free-in-/1edited.png)

1. Enter a name for your Bot, accept the terms and press Create.

![2.png](./how-to-make-a-discord-bot-hosted-24-7-for-free-in-/2.png)

## Step 2: Add the bot to your server

To invite your new bot to your server, you need to generate a link to click on.

1. Head to the **Oauth2** > **URL Generator** page.
2. Select the `bot` scope, then the `Send Messages` permission.

![5.png](./how-to-make-a-discord-bot-hosted-24-7-for-free-in-/5.png)

1. **Copy** the URL at the bottom of the page and paste it into a new browser
   tab.
2. Click through the steps until you’re prompted to choose your server and press
   **Continue**.

![6.png](./how-to-make-a-discord-bot-hosted-24-7-for-free-in-/6.png)

1. Press **Authorize**.

![7.png](./how-to-make-a-discord-bot-hosted-24-7-for-free-in-/7.png)

🎉 Your bot is now a member of your server! Now let’s get it to respond to Slash
Commands.

## Step 3: Login to Val Town

[Val Town](http://val.town/) is a social website to write, run, and host
JavaScript. You can create APIs, scheduled functions, email yourself, and
persist small pieces of data — all from the browser and instantly deployed.
There is a generous free plan, and no credit card required.

1. [Login](http://val.town/auth/signin) or
   [create an account](https://www.val.town/auth/signup).

## Step 4: Save bot secrets

1. Go to the “General Information” page

![3.edited.png](./how-to-make-a-discord-bot-hosted-24-7-for-free-in-/3edited.png)

1. **Copy** your Application ID
2. Go to [val.town/settings/secrets](https://www.val.town/settings/secrets)
3. Create a new secret called `discordAppId` and paste in the value
4. **Copy** your Public Key, saving it as `discordPublicKey`
5. Go to the Bot page
6. Click **Reset Token** and accept the warning

![4.edited.png](./how-to-make-a-discord-bot-hosted-24-7-for-free-in-/4edited.png)

1. **Copy** and paste it in
   [val.town/settings/secrets](http://val.town/settings/secrets) as
   `discordBotToken`.

## Step 5: Register a new Slash Command

1. The embedded code below should have your name in the top-left corner. If you
   see ******************anonymous******************, refresh this page. If you
   still see ******anonymous******, ensure
   [you’re logged into Val Town](https://www.val.town/auth/signin).
2. Press ******Run****** to add the `/ping` command to your bot.

<div class="not-content">
  <iframe src="https://www.val.town/embed/new?code=import+%7B+registerDiscordSlashCommand+%7D+from+%22https%3A%2F%2Fesm.town%2Fv%2Fneverstew%2FregisterDiscordSlashCommand%22%3B%0Aimport+process+from+%22node%3Aprocess%22%3B%0A%0Aexport+const+registerDiscordCommand+%3D+registerDiscordSlashCommand%28%0A++process.env.discordAppId%2C%0A++process.env.discordBotToken%2C%0A++%7B%0A++++name%3A+%22ping%22%2C%0A++++description%3A+%22Say+hi+to+your+bot%22%2C%0A++%7D%2C%0A%29.then%28r+%3D%3E+r.json%28%29%29%3B" width="100%" frameborder="no" style="height: 400px;">
    &#x20;
  </iframe>
</div>

## Step 6: Listen for Slash Commands

1. Press ******Run****** to listen for Slash Commands and reply.

<div class="not-content">
  <iframe src="https://www.val.town/embed/new?code=import+%7B+verify_discord_signature+%7D+from+%22https%3A%2F%2Fesm.town%2Fv%2Fmattx%2Fverify_discord_signature%3Fv%3D8%22%3B%0A%0Aexport+const+handleDiscordInteraction+%3D+async+%28req%3A+Request%29+%3D%3E+%7B%0A++if+%28req.method+%3D%3D%3D+%22GET%22%29+return+new+Response%28%29%3B%0A++const+body+%3D+await+req.json%28%29%3B%0A++const+verified+%3D+await+verify_discord_signature%28%0A++++Deno.env.get%28%27discordPublicKey%27%29%2C%0A++++JSON.stringify%28body%29%2C%0A++++req.headers.get%28%22X-Signature-Ed25519%22%29%2C%0A++++req.headers.get%28%22X-Signature-Timestamp%22%29%2C%0A++%29%3B%0A++if+%28%21verified%29%0A++++return+new+Response%28%22signature+invalid%22%2C+%7B%0A++++++status%3A+401%2C%0A++++++statusText%3A+%22signature+invalid%22%2C%0A++++%7D%29%3B%0A++%2F%2F+PING%0A++if+%28body.type+%3D%3D%3D+1%29%0A++++return+Response.json%28%7B+type%3A+1+%7D%29%3B+%2F%2F+PONG%0A++%2F%2F+APPLICATION_COMMAND+interactions%0A++if+%28body.type+%3D%3D%3D+2%29+%7B%0A++++if+%28body.data%3F.name+%3D%3D%3D+%22ping%22%29%0A++++++return+Response.json%28%7B%0A++++++++type%3A+4%2C%0A++++++++data%3A+%7B%0A++++++++++content%3A+%60Pong%21+It+is+%24%7Bnew+Date%28%29%7D%60%2C%0A++++++++%7D%2C%0A++++++%7D%29%3B%0A++++return+new+Response%28%22Bad+request%22%2C+%7B%0A++++++status%3A+400%2C%0A++++++statusText%3A+%22Bad+request%22%2C%0A++++%7D%29%3B%0A++%7D%0A++return+new+Response%28%22Not+handled%22%2C+%7B+status%3A+422+%7D%29%3B%0A%7D%3B" width="100%" frameborder="no" style="height: 400px;">
    &#x20;
  </iframe>
</div>

1. Next to your val’s name, click 🔒 >
   ******************Unlisted.******************
2. In the val above, in the bottom-left corner of the val, click
   ************Script************ and change it to **********HTTP.**********
3. Click on the URL at the bottom of that val that looks like
   [https://username-handleDiscordInteraction.web.val.run](https://stevekrouse-handlediscordinteraction.web.val.run/)
4. Visit the General Information page for your bot and paste your copied
   endpoint into **INTERACTIONS ENDPOINT URL** and click ******Save
   Changes******.

![9.png](./how-to-make-a-discord-bot-hosted-24-7-for-free-in-/9.png)

## 💬 Try it out!

Refresh Discord and try out your bot using `/ping`

![Untitled](./how-to-make-a-discord-bot-hosted-24-7-for-free-in-/untitled.png)

## Further Directions

Now that you have a basic Discord Bot setup, you’ll want to customize it to do
exactly what you want. You’ll probably want to:

1. Register a new Slash Command
2. Connect your bot to APIs like OpenAI’s GPT or DallE

[Come join us in the Val Town Discord](https://discord.gg/dHv45uN5RY) if you get
stuck, have questions, or want to show off your cool new bot!
