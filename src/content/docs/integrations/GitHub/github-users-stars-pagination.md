---
title: Github user’s stars (pagination)
generated: 1701279907766

---

When there are many results, GitHub
[paginates](https://docs.github.com/en/rest/guides/using-pagination-in-the-rest-api?apiVersion=2022-11-28#about-pagination)
the data. You can use the `per_page` parameter to loop over the data. Here’s a
practical example: getting the total stars across a user’s repositories.

Here’s a Val that returns the star count for a username.

<div class="not-content">
  <iframe src="https://www.val.town/embed/vtdocs.getGithubStars" width="100%" frameborder="no" style="height: 400px;">
    &#x20;
  </iframe>
</div>

Call it to get the result:

<div class="not-content">
  <iframe src="https://www.val.town/embed/vtdocs.steveGithubStars" width="100%" frameborder="no" style="height: 400px;">
    &#x20;
  </iframe>
</div>

## Email yourself when you get a comment reaction!

Create a GitHub personal access token:
[https://github.com/settings/personal-access-tokens/new](https://github.com/settings/personal-access-tokens/new).
Give it permissions to the repositories that you’re interested in getting
comment reaction notifications for.

![Screenshot 2023-06-13 at 14.36.38.png](./github-users-stars-pagination/screenshot_2023-06-13_at_143638.png)

Allow _Read-only_ access for issues to find your recent issue comments (pull
requests are issues).

![Untitled](./github-users-stars-pagination/untitled.png)

Go to:
[https://www.val.town/settings/secrets](https://www.val.town/settings/secrets)
and save the token as `githubPatToken`.

Fork this Val, change `username` to your GitHub username, and schedule it to run
every **fifteen minutes**.

<div class="not-content">
  <iframe src="https://www.val.town/embed/vtdocs.emailGithubReactions" width="100%" frameborder="no" style="height: 400px;">
    &#x20;
  </iframe>
</div>

When this Val runs, it gets the last 100 events for an authenticated user. It
makes additional requests to get the reactions for any recent events that are
comments.

If the reaction was created in the last fifteen minutes, then it’s a new
comment!

You’ll receive a batch of reactions and comment links only for new reactions.
