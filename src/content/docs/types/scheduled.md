---
title: Scheduled function
generated: 1701279907849

---

Scheduled vals come in two flavors: “Run every” and “Cron”.

## Run Every

You can specify an amount of time between runs, such as “run every 2 hours.”

## Cron

You can specify a cron expression for when your val should run, specified in the
UTC timezone.

## `Interval` argument

Scheduled Vals can optionally accept one argument, which includes some metadata
about the interval. For example, you can get the most recent time the interval
was run to filter out data that was already seen:

<div class="not-content">
  <iframe src="https://www.val.town/embed/neverstew.scheduleExampleTwo" width="100%" frameborder="no" style="height: 400px;">
    &#x20;
  </iframe>
</div>
