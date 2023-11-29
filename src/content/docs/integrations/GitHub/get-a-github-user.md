---
title: Get a Github user
generated: 1701279907762

---

For example, we can get a user without passing an authentication token.

![GitHub API endpoints have a cURL command that you can manually translate into a fetchJSON call (e.g. see Get a user). ](./get-a-github-user/screenshot_2023-06-13_at_003949.png)

GitHub API endpoints have a cURL command that you can manually translate into a `fetchJSON` call (e.g. see [Get a user](https://docs.github.com/en/rest/users/users?apiVersion=2022-11-28#get-a-user)).

Here’s a Val that returns a GitHub user object for a given username:

<div class="not-content">
  <iframe src="https://www.val.town/embed/vtdocs.getGithubUser" width="100%" frameborder="no" style="height: 400px;">
    &#x20;
  </iframe>
</div>

You can fork it and alter it, or just call it directly like this:

<div class="not-content">
  <iframe src="https://www.val.town/embed/vtdocs.getSteve" width="100%" frameborder="no" style="height: 400px;">
    &#x20;
  </iframe>
</div>

You can also do this with [octokit.js](https://github.com/octokit/octokit.js). Reminder: import npm packages by prepending the package name with `npm:`.

<div class="not-content">
  <iframe src="https://www.val.town/embed/vtdocs.getGithubUserViaOctokit" width="100%" frameborder="no" style="height: 400px;">
    &#x20;
  </iframe>
</div>
