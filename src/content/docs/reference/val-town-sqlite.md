---
title: Val Town SQLite
generated: 1701279907918

---

Val Town comes with SQLite built-in. You can store store and query any
relational data. It’s backed by [Turso](https://turso.tech/).

You can store 10mb on the free plan and up to 1gb on the paid plan. Contact us
if you need more.

## Running some simple queries

These are the simplest ways to run queries, by directly sending SQL to the
database. We can build on top of these vals, but they’re essential to
understand.

### Creating tables

<div class="not-content">
  <iframe src="https://www.val.town/embed/andreterron/createSqliteTable" width="100%" frameborder="no" style="height: 400px;">
    &#x20;
  </iframe>
</div>

### Selecting data

<div class="not-content">
  <iframe src="https://www.val.town/embed/andreterron/selectFromSqlite" width="100%" frameborder="no" style="height: 400px;">
    &#x20;
  </iframe>
</div>

### Inserting data

<div class="not-content">
  <iframe src="https://www.val.town/embed/andreterron/insertIntoSqlite" width="100%" frameborder="no" style="height: 400px;">
    &#x20;
  </iframe>
</div>

### Deleting data

<div class="not-content">
  <iframe src="https://www.val.town/embed/andreterron/deleteFromSqlite" width="100%" frameborder="no" style="height: 400px;">
    &#x20;
  </iframe>
</div>

## Batches

<div class="not-content">
  <iframe src="https://www.val.town/embed/andreterron/batchSqlite" width="100%" frameborder="no" style="height: 400px;">
    &#x20;
  </iframe>
</div>

## Migrations

Migrations can be difficult in traditional server environments: you need to
execute some SQL, but this should only happen once. In Val Town, managing
migrations is easy.

The best way to run migrations in Val Town is to write a single val and keep
updating it with each migration. Because vals have versions, each version of a
val is run exactly once.

Let’s look at an example…

In our first migration, we create a users table:

<div class="not-content">
  <iframe src="https://www.val.town/embed/andreterron/dbMigrations?v=1" width="100%" frameborder="no" style="height: 400px;">
    &#x20;
  </iframe>
</div>

Later, we realize we also want to store names. We update _the same val_ to alter
the table:

<div class="not-content">
  <iframe src="https://www.val.town/embed/andreterron/dbMigrations?v=2" width="100%" frameborder="no" style="height: 400px;">
    &#x20;
  </iframe>
</div>

## Connecting with ORMs

Writing SQL is really fast and it’s great for small projects. As your projects
grow, you might want to take advantage of an ORM or query builder instead. Here
are a few examples of how to do that with popular tools.

### Drizzle

<div class="not-content">
  <iframe src="https://www.val.town/embed/stevekrouse/sqliteDrizzleExample" width="100%" frameborder="no" style="height: 400px;">
    &#x20;
  </iframe>
</div>

### Prisma

:::note 🚫 Prisma isn’t supported in Val Town because it relies on functionality
that only exists in a classic server environment.

:::

### Sequelize

:::note 🚫 Sequelize isn’t supported in Val Town because it relies on specific
database drivers and is not extensible.

:::

## Other SQLite options

For all your other SQLite needs, you can run SQLite in WASM and save data as a
[blob](https://docs.val.town/blob-storage), or use your own Turso account. See:

[SQLite wasm](../val-town-sqlite/sqlite-wasm)
