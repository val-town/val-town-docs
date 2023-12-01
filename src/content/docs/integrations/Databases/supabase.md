---
title: Supabase
generated: 1701279907867
---

[Supabase](https://supabase.com/) provide a hosted Postgres database with 500MB
of storage in the [free tier](https://supabase.com/pricing).

You can query and create data inside your vals using either Supabase’s
JavaScript SDK, or a Postgres client.

## Using the SDK

### 1. Sign up to Supabase

Visit
[https://supabase.com/dashboard/sign-up](https://supabase.com/dashboard/sign-up).

### 2. Create a project

On Supabase’s [dashboard](https://supabase.com/dashboard/projects), create a new
project.

![Screenshot 2023-07-02 at 13.19.28.png](./supabase/screenshot_2023-07-02_at_131928.png)

### 3. Get your API URL and service role key

Go to your project’s **Settings** via the sidebar. Inside **API**, scroll down
and copy the **Project URL,** and then, inside **Project API Keys**, copy the
\*\*\*\*`service role` key. Save these as two separate
[Val Town secrets](https://www.val.town/settings/secrets) as `supabaseURL` and
`supabaseKey` respectively.

![Screenshot 2023-07-06 at 13.09.52.png](./supabase/screenshot_2023-07-06_at_130952.png)

### 4. Create your first table

Head to the **Table editor** in the sidebar.

![Screenshot 2023-07-06 at 13.20.21.png](./supabase/screenshot_2023-07-06_at_132021.png)

**Create a new table** called `my_first_table` with the following schema.

![Screenshot 2023-07-06 at 13.16.02.png](./supabase/screenshot_2023-07-06_at_131602.png)

### 5. Insert some data

Copy and paste the following val to insert some data.

<div class="not-content">
  <iframe src="https://www.val.town/embed/vtdocs.supabaseSDKInsertIntoMyFirstTable" width="100%" frameborder="no" style="height: 400px;">
    &#x20;
  </iframe>
</div>

### 6. Query back that data

Get back the data you just inserted by using `eq()` (like SQL’s `WHERE`).

<div class="not-content">
  <iframe src="https://www.val.town/embed/vtdocs.supabaseSDKSelectMyFirstTable" width="100%" frameborder="no" style="height: 400px;">
    &#x20;
  </iframe>
</div>

### 7. Keep going!

Use Supabase’s
[JavaScript Client library documentation](https://supabase.com/docs/reference/javascript/select)
to write more queries!

## Using a Postgres client

### 1. Sign up to Supabase

Visit
[https://supabase.com/dashboard/sign-up](https://supabase.com/dashboard/sign-up).

### 2. Create a project

On Supabase’s [dashboard](https://supabase.com/dashboard/projects), create a new
project.

![Screenshot 2023-07-02 at 13.19.28.png](./supabase/screenshot_2023-07-02_at_131928.png)

Keep a note of your database password, you’ll need this to create a database
connection string.

![Screenshot 2023-07-02 at 13.20.19.png](./supabase/screenshot_2023-07-02_at_132019.png)

### 3. Get your database’s connection string

![Screenshot 2023-07-02 at 13.28.33.png](./supabase/screenshot_2023-07-02_at_132833.png)

Go to your project’s **Settings** via the sidebar. Inside **Database**, scroll
down and copy the **Connection string** for **Nodejs**. Replace
`[YOUR-PASSWORD]` (removing the square brackets) with your database password
(alternatively, reset your database password to create a new one).

Save this connection string as a
[Val Town secret](https://www.val.town/settings/secrets) as `supabasePostgres`.

### 4. Create your first table

Copy and paste this val to create a table with the given schema.

<div class="not-content">
  <iframe src="https://www.val.town/embed/vtdocs.supabaseCreateMyFirstTable" width="100%" frameborder="no" style="height: 400px;">
    &#x20;
  </iframe>
</div>

### 5. Insert some data

Use a
[prepared statement](https://deno-postgres.com/#/?id=prepared-statements-and-query-arguments)
like below to prevent
[SQL injection](https://en.wikipedia.org/wiki/SQL_injection).

<div class="not-content">
  <iframe src="https://www.val.town/embed/vtdocs.supabaseInsertIntoMyFirstTable" width="100%" frameborder="no" style="height: 400px;">
    &#x20;
  </iframe>
</div>

### 6. Query back that data

Usually, you’ll just want the `rows` property from the response.

<div class="not-content">
  <iframe src="https://www.val.town/embed/vtdocs.supabaseSelectMyFirstTable" width="100%" frameborder="no" style="height: 400px;">
    &#x20;
  </iframe>
</div>

### 7. More resources

Learn more about the [Deno Postgres client](https://deno-postgres.com/) used in
this guide, view the Supabase
[Database documentation](https://supabase.com/docs/guides/database), or get help
on [Val Town’s Discord](https://discord.gg/dHv45uN5RY).
