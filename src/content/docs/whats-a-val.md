---
title: What’s a Val?
lastUpdated: 2023-11-30
description: "A val is a hosted script"
sidebar:
  order: 1
---

- Vals are JavaScript, TypeScript, or JSX
- Vals can import other vals
- Vals can be public, unlisted, or private
- Every version of a val is immutable
- Vals can be referenced by other vals
- There are different kinds of vals:
  - HTTP
  - Scheduled
  - Email
  - Script

## Publishing a Val

There are three states for a Val:

1. 🌎 Public (anyone can view or run)
2. 🔗 Unlisted (anyone with the name or link can view or run)
3. 🔒 Private (only you can view or run)

All Vals default to private. You can publish a Val by clicking the 🔒 next to
its name.

Publishing your Val as either Public or Unlisted makes it accessible via the Run
API. Be careful about publishing a function val that has access to your secrets
— your secrets will be used if others call that function via the Run API.
Publishing a val makes it a public API.

## Referencing a Val

A val can reference other vals, much like a tweet can reference other tweets.
For example, this val references the the prior example:

<div class="not-content">
  <iframe src="https://www.val.town/embed/stevekrouse.example2" width="100%" frameborder="no" style="height: 400px;">
    &#x20;
  </iframe>
</div>

Once you type `@` you will get helpful autocomplete on handles and then val
names.

## Referencing Private Vals

Anyone can reference public vals. Private vals can only be accessed by their
authors. For example, I created a private val, `example3`. You won’t be able to
see or reference `example3` but I can! I can publish a val that uses `example3`,
still without making `example3` public as shown below.

<div class="not-content">
  <iframe src="https://www.val.town/embed/stevekrouse.example4" width="100%" frameborder="no" style="height: 400px;">
    &#x20;
  </iframe>
</div>

## Versions

Vals are immutable but you can publish new versions of vals. Versions start at
`v0` and go up from there. When you reference a val, you always get the most
recent version. You can toggle which version you’re looking at via the drop down
menu next to the val’s name.

When you import one of your own vals, it will be imported unpinned, so you will
automatically get all new changes. When you import another user’s val, it will
pin your import to the most recent version of that val (ie it will end it `?v=7`
or whatever the current version number is), so if they change it, you won’t get
automatic updates. This makes your code more stable and protects you against
code injection attacks. You can override this default behavior if you trust the
user not to break your code: remove the `v` query param in the import statement,
and your code will always use the latest version of that val.

## Deleting a Val

You can delete a val you created via the 🗑️ button. You can either delete a
specific version or all versions. You can restore any deleted val version at
[/settings/versions](https://www.val.town/settings/versions).

## Linking to a Val

You can get a link to a val in the Share menu or via
`val.town/v/username/valName`.

## Embedding a Val

You can get an embed link to a val in the Share menu or via
`val.town/embed/username/valName`. You can paste that link into a tool like
Notion and it’ll just work. For other context, you may need to use an `iframe`.

## Included environment

Vals are evaluated on a limited subset of deno. It includes:

- `fetch` to make HTTP requests
- `import` from npm and https

You can view the
[entire environment we support here](https://gist.github.com/stevekrouse/d87a152586b02316f0ae99a136084596).

## Keyboard shortcuts

- ctrl/cmd-enter to run a val
- ctrl/cmd-k to search for a val
- ctrl/cmd-click to go to a val reference or URL
- ctrl+space to trigger autocomplete in the code editor

## Limitations

The limitations on vals can be found on
[our pricing page](https://val.town/pricing).
