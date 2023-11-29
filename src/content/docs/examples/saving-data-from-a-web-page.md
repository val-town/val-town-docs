---
title: Saving data from a web page
generated: 1701279907847

---

You can insert and fetch data from Val Town from any web page using the [Run](../val-town-api/run) API and some JavaScript.

## 1. Create a val to store some state

Fork, or copy and paste this val into your workspace – keep it named as `comments` so the snippets in this guide work correctly.

<div class="not-content">
  <iframe src="https://www.val.town/embed/vtdocs.comments" width="100%" frameborder="no" style="height: 400px;">
    &#x20;
  </iframe>
</div>

## 2. Create a val that can mutate that state

Fork, or copy and paste the below val into your workspace.

When it’s set to public, anyone can send an API request to it, and the data they send will be appended to the `comments` val you created in the previous step.

<div class="not-content">
  <iframe src="https://www.val.town/embed/vtdocs.appendToComments" width="100%" frameborder="no" style="height: 400px;">
    &#x20;
  </iframe>
</div>

## 3. Use this JavaScript snippet on your webpage

Get the Run API endpoint for the val you created in the step above.

![Screenshot 2023-07-11 at 15.30.12.png](./saving-data-from-a-web-page/screenshot_2023-07-11_at_153012.png)

The below JavaScript snippet sends data to your `appendToComments` val which writes the data to your `comments` val.

```jsx
// change this URL to your appendToComments's Run API endpoint!
fetch("https://api.val.town/v1/run/vtdocs.appendToComments", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
   // the single arg here maps to the `data` arg
   args: ["hello world!"],
  }),
}).then(r => {
  // status will be 200 if everything went okay
  console.log(r.status, r.statusText)
})
```

## 4. Directly read from `comments`

If you make your `comments` val public, anyone can read from it directly with the Run API with this JavaScript snippet.

```jsx
// change this URL to your comments' Run API endpoint!
fetch("https://api.val.town/v1/run/vtdocs.comments")
  .then(r => r.json())
  .then(json => console.log(json.data));
```

When the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) doesn’t include a method, it sends a GET request.

## 5. Indirectly read from `comments`

Maybe you want to hide some of your data. You can keep `comments` private and just provide access to a slice of it by using a public function val like this.

<div class="not-content">
  <iframe src="https://www.val.town/embed/vtdocs.getFirstComment" width="100%" frameborder="no" style="height: 400px;">
    &#x20;
  </iframe>
</div>

Go ahead and test this by calling this one in your browser’s developer console with this snippet.

```jsx
const r = await fetch("https://api.val.town/v1/run/vtdocs.getFirstComment")
console.log(await r.json())
```

If the val is a function, it’s implicitly called by the Run API.

## 6. Use anything that supports HTTP!

Like `cURL`:

```bash
curl https://api.val.town/v1/run/vtdocs.getFirstComment
## "hello world!"
```

Or `python3`:

```python
import json, urllib.request
body = urllib.request.urlopen("https://api.val.town/v1/run/vtdocs.getFirstComment").read()
print(json.loads(body)) # hello world!
```

## 7. See the Val Town API reference

For more details, and alternative ways of interacting with Val Town, see [Val Town API](../val-town-api)
