---
title: Save HTML Form Data
generated: 1701279907843

---

<div class="not-content">
  <lite-youtube videoid="AEaYaWf5B-I">
    &#x20;
  </lite-youtube>
</div>

You can submit forms to Val Town using the [HTTP Val](../http-val) . You can place these forms on any page on the internet – or host the form directly on Val Town.

These examples show how to accept and store email addresses on Val Town. The email addresses are saved into a val, and you also get sent an email notification for each new signup.

## Add a form to your website

## 1. Create a val that uses the [HTTP Val](../http-val)

Write a val function that accepts a [Request](https://developer.mozilla.org/en-US/docs/web/api/request) and returns a [Response](https://developer.mozilla.org/en-US/docs/web/api/response), or just fork the one below!

<div class="not-content">
  <iframe src="https://www.val.town/embed/neverstew.saveFormData" width="100%" frameborder="no" style="height: 400px;">
    &#x20;
  </iframe>
</div>

## 2. Add the form to your webpage

Copy your val’s Web endpoint URL using the menu (Endpoints > Copy web endpoint) and set it as the form’s action (this tells the form where to send its data when it’s submitted).

Below is a full HTML page example. If you are adding a form to an existing page just copy and paste the `<form></form>` block.

```html
<!DOCTYPE html>
<html>
<head>
  <title>Email Form</title>
</head>
<body>
  <!-- Change the action here to your val's Express endpoint! -->
  <form action="https://neverstew-saveFormData.web.val.run" method="post">
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
    <br>
    <input type="submit" value="Submit">
  </form>
</body>
</html>
```

## Host your form on Val Town

There are two ways to do this. You can write a val function that serves a webpage, and a separate val that accepts the form data – or you can write a single val that does both like the example below.

When a form is submitted, it sends a HTTP request with the [POST](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/POST) method. When a user visits a webpage in their web browser, the server (your val function) gets sent a [GET](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/GET) request.

You can check the HTTP method using `req.method` and change how your val function responds.

<div class="not-content">
  <iframe src="https://www.val.town/embed/neverstew.renderFormAndSaveData" width="100%" frameborder="no" style="height: 400px;">
    &#x20;
  </iframe>
</div>

See [Web forms — Working with user data](https://developer.mozilla.org/en-US/docs/Learn/Forms) on the MDN Web Docs site for more help with forms.
