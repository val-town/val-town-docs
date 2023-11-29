---
title: Import from NPM
generated: 1701279907795

---

## Basic Example

You can import from npm using `await import("npm:package-name")`.

<div class="not-content">
  <iframe src="https://www.val.town/embed/stevekrouse.npmExample" width="100%" frameborder="no" style="height: 400px;">
    &#x20;
  </iframe>
</div>

## Importing off of `default`

The reason we used `npm:lodash-es` instead of the classic `npm:lodash` above is
to avoid having to destructure the import off `default`. However this is a very
common thing you’ll have to do when using npm modules, and it looks like this:

<div class="not-content">
  <iframe src="https://www.val.town/embed/stevekrouse.npmDefaultExample" width="100%" frameborder="no" style="height: 400px;">
    &#x20;
  </iframe>
</div>

## Importing types

Sometimes, especially when making vals that interface with other libraries, you
might want to only import a type from an npm package. You can do that using the
familiar `import` syntax (no need to await the promise here!)

<div class="not-content">
  <iframe src="https://www.val.town/embed/neverstew.dynamicImportTypeExample" width="100%" frameborder="no" style="height: 400px;">
    &#x20;
  </iframe>
</div>

## Look for examples

Whenever you go to use a new npm library, we recommend first searching to see if
anyone has used that library before.
[You can find the most common packages here](https://www.val.town/examples/packages).

Or you could look for examples related to `cheerio` by searching for it or even
more pointedly
[by searching for `import("npm:cheerio")`](https://www.val.town/search?q=import(%22npm:cheerio%22)).

## Debugging imports

It’s often not clear how a library will expose its methods. It can be helpful to
log the keys of whatever object they return to you. That will tell you if you
need to import it off of default or not, and what is available to you.

<div class="not-content">
  <iframe src="https://www.val.town/embed/stevekrouse.debugCheerioEx" width="100%" frameborder="no" style="height: 400px;">
    &#x20;
  </iframe>
</div>

## Deno ports

It’s common to get Deno-related errors when importing npm packages. If you see a
mysterious error, we reccomend looking for a Deno port of that npm package
(search “name-of-package deno”) and trying that instead. As always, ask in our
Discord if you want help.

## Limitations

- All Val Town imports must either start with `npm:` or `https://`
- Val Town only has dynamic imports. If you write static imports, they will be
  auto-rewritten.
- We don’t allow `require` style imports.
