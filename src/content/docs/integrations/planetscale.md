---
title: PlanetScale
generated: 1701279907815

---

[PlanetScale](https://planetscale.com/) provide a hosted MySQL database with 5GB
of storage included in the [free tier](https://planetscale.com/pricing).

## 1. Sign up to PlanetScale

Go to
[https://auth.planetscale.com/sign-up](https://auth.planetscale.com/sign-up)

## 2. Create a new database

Select **New database** on the dashboard.

Create a database.

![Screenshot 2023-06-25 at 21.43.25.png](./planetscale/screenshot_2023-06-25_at_214325.png)

![Screenshot 2023-06-25 at 21.15.01.png](./planetscale/screenshot_2023-06-25_at_211501.png)

## 3. Create a password

Go to **Settings** → **Passwords** and click **New password**.

![Screenshot 2023-06-25 at 21.15.41.png](./planetscale/screenshot_2023-06-25_at_211541.png)

Save the `host`, `username`, and `password` values as
[Val Town secrets](https://www.val.town/settings/secrets) – use
`planetScaleHost`, `planetScaleUsername`, and `planetScalePassword`
respectively.

![Screenshot 2023-06-25 at 21.16.18.png](./planetscale/screenshot_2023-06-25_at_211618.png)

## 4. Create your first table

Copy and paste this val to create a table with the given schema.

<div class="not-content">
  <iframe src="https://www.val.town/embed/vtdocs.planetScaleCreateStockTable" width="100%" frameborder="no" style="height: 400px;">
    &#x20;
  </iframe>
</div>

## 5. Insert an item

Insert one or more items.

<div class="not-content">
  <iframe src="https://www.val.town/embed/vtdocs.planetScaleInsertStockTable" width="100%" frameborder="no" style="height: 400px;">
    &#x20;
  </iframe>
</div>

## 6. Query an item

Use the `rows` property to get your query results – or return the entire
`results` object to see what other data is available.

<div class="not-content">
  <iframe src="https://www.val.town/embed/vtdocs.planetScaleSelectStockTable" width="100%" frameborder="no" style="height: 400px;">
    &#x20;
  </iframe>
</div>

## 7. Do more than queries!

Read the source of the
[@vtdocs.queryPlanetScale](https://www.val.town/v/vtdocs.queryPlanetScale)
helper, see how it uses the `@planetscale/database` SDK, refer to the
[driver’s documentation](https://github.com/planetscale/database-js), and extend
it!

<div class="not-content">
  <iframe src="https://www.val.town/embed/vtdocs.queryPlanetScale" width="100%" frameborder="no" style="height: 400px;">
    &#x20;
  </iframe>
</div>
