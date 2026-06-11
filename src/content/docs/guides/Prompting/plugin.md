---
title: Plugin
description: Use Val Town with coding agents
sidebar:
  order: 1
---

The Val Town plugin for coding agents bundles the Val Town [MCP server](/guides/prompting/mcp) and platform skills for your agents. It works with Claude Code, Codex, and Cursor.

You can explore the plugin's source code, including skills, at [github.com/val-town/plugins](https://github.com/val-town/plugins).

## Install

Install for Claude Code, Codex, and Cursor in one command:

```bash
npx plugins add val-town/plugins
```

Or from Claude Code's official plugin marketplace:

```bash
claude plugin install valtown@claude-plugins-official
```

Or in Codex:

```bash
codex plugin marketplace add val-town/plugins
```

Or in Cursor:

```bash
/add-plugin valtown
```

## Capabilities

With the plugin, your coding agent can write idiomatic vals and deploy live to Val Town in 100ms. The plugin includes:

1. **Val Town MCP server:** list, read, create, edit, run, and deploy
   vals; view logs; query your SQLite and Blob storage; manage env vars,
   branches, and version history
2. **Val Town Skills:** platform know-how from our [system prompt](https://val.town/townie/system-prompt), plus skills for HTTP vals,
   crons, email vals, SQLite, OAuth, frontend patterns, API integrations

Learn more and contribute at [github.com/val-town/plugins](https://github.com/val-town/plugins).
