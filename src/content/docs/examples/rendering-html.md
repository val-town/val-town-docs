---
title: Rendering HTML
generated: 1701279907834

---

You can use the [HTTP Val](../http-val)  to return HTML pages. You can copy the URL by using the menu and selecting Endpoints > Copy web endpoint.

<div class="not-content">
  <iframe src="https://www.val.town/embed/neverstew.webHTMLExample" width="100%" frameborder="no" style="height: 400px;">
    &#x20;
  </iframe>
</div>

Click on this URL to view the above Val: [https://neverstew-webHTMLExample.web.val.run?name=Steve](https://neverstew-webhtmlexample.web.val.run/?name=Steve).

## Using Markdown

By importing a markdown library like [Marked](https://github.com/markedjs/marked), you can render markdown to HTML.

<div class="not-content">
  <iframe src="https://www.val.town/embed/neverstew.markdownExample" width="100%" frameborder="no" style="height: 400px;">
    &#x20;
  </iframe>
</div>

View the result by clicking on this URL: [https://neverstew-handleDiscordNewUser.web.val.run](https://neverstew-handlediscordnewuser.web.val.run/)

## React With Server-Side Rendering (SSR)

You can import `ReactDOMServer` from the `react-dom/server` module to perform server-side rendering with React.

Note: JSX is not supported yet.

<div class="not-content">
  <iframe src="https://www.val.town/embed/neverstew.reactSSRExample" width="100%" frameborder="no" style="height: 400px;">
    &#x20;
  </iframe>
</div>

`ReactDOMServer.renderToString` converts the `TodoList` component into HTML which is sent to the client as the initial server response, which you can view here: [https://neverstew-reactSSRExample.web.val.run](https://neverstew-reactssrexample.web.val.run/)
