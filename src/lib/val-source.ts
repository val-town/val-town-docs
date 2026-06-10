/**
 * Build-time fetching of embedded val source code.
 *
 * Docs pages embed runnable examples as `<Val url="https://www.val.town/embed/..." />`
 * iframes, which makes the example code invisible to AI agents in the rendered
 * HTML, the per-page `.md` routes, and `llms-full.txt`. At build time we fetch
 * each embedded val's source from the Val Town API so all three outputs can
 * include it as a static code block alongside a link to the val.
 */

const API_BASE = "https://api.val.town/v2";

// The sqlite-wasm guide embeds stevekrouse/messages2, whose "source" is a
// 481-line serialized SQLite byte array, not example code. Skip anything
// that large rather than inlining it.
const MAX_SOURCE_LENGTH = 20_000;

export interface ValSource {
  code: string;
  lang: "ts" | "tsx";
  /** The val's page on val.town, for a "view and run" link. */
  valPageUrl: string;
}

// Each embed URL is fetched once per build, even though Val.astro, the
// per-page `.md` routes, and llms-full.txt all ask for the same vals.
const cache = new Map<string, Promise<ValSource | null>>();

export function fetchValSource(embedUrl: string): Promise<ValSource | null> {
  let pending = cache.get(embedUrl);
  if (!pending) {
    pending = fetchValSourceUncached(embedUrl).catch((error) => {
      warn(`failed to fetch source for ${embedUrl}: ${error}`);
      return null;
    });
    cache.set(embedUrl, pending);
  }
  return pending;
}

/**
 * Replace each `<Val url="..." />` stub in raw MDX with a link to the val
 * plus a fenced code block of its source. Stubs whose source can't be
 * fetched (e.g. `embed/new`, deleted vals) are left unchanged.
 */
export async function inlineValEmbeds(markdown: string): Promise<string> {
  const valTag = /<Val\s[^>]*?url="([^"]+)"[^>]*?\/>/gs;
  const tags = [...markdown.matchAll(valTag)];
  if (tags.length === 0) return markdown;

  const replacements = await Promise.all(
    tags.map(async (tag) => {
      const source = await fetchValSource(tag[1]);
      if (!source) return tag[0];
      return `[View and run this example on Val Town](${source.valPageUrl})\n\n\`\`\`${source.lang}\n${source.code}\n\`\`\``;
    }),
  );

  let result = "";
  let lastIndex = 0;
  tags.forEach((tag, i) => {
    const index = tag.index ?? 0;
    result += markdown.slice(lastIndex, index) + replacements[i];
    lastIndex = index + tag[0].length;
  });
  return result + markdown.slice(lastIndex);
}

interface ParsedEmbed {
  handle: string;
  valName: string;
  filePath: string;
  version: string | null;
  valPageUrl: string;
}

function parseEmbedUrl(embedUrl: string): ParsedEmbed | null {
  const url = new URL(embedUrl);
  const segments = url.pathname.split("/").filter(Boolean);
  if (segments[0] !== "embed") return null;

  // `embed/new?code=...` — the code lives in the URL itself, there is no val.
  if (segments[1] === "new") return null;

  if (segments[1] === "x") {
    // embed/x/{handle}/{valName}/{...filePath}
    const [, , handle, valName, ...fileParts] = segments;
    const filePath = fileParts.join("/");
    return {
      handle,
      valName,
      filePath,
      version: null,
      valPageUrl: `https://www.val.town/x/${handle}/${valName}${filePath ? `/code/${filePath}` : ""}`,
    };
  }

  // embed/{handle}/{valName}[?v=N] — a legacy val, stored as main.tsx
  const [, handle, valName] = segments;
  const version = url.searchParams.get("v");
  return {
    handle,
    valName,
    filePath: "main.tsx",
    version,
    valPageUrl: `https://www.val.town/v/${handle}/${valName}${version ? `?v=${version}` : ""}`,
  };
}

async function fetchValSourceUncached(
  embedUrl: string,
): Promise<ValSource | null> {
  const parsed = parseEmbedUrl(embedUrl);
  if (!parsed) return null;

  const { handle, valName, filePath, version, valPageUrl } = parsed;

  // Resolve handle/name to a val id via the alias API.
  let valId = await fetchValId(handle, valName);

  // If the alias 404s the handle may have been renamed (e.g. petermillspaugh
  // is now pmillspaugh). esm.town still serves the module under the old
  // handle, with a header comment pointing at the val's current URL.
  let esmSource: string | null = null;
  if (!valId) {
    esmSource = await fetchText(
      `https://esm.town/v/${handle}/${valName}${filePath === "main.tsx" ? "" : `/${filePath}`}`,
    );
    const renamedHandle = esmSource?.match(
      /Open in Val Town: https:\/\/www\.val\.town\/[xv]\/([^/\s]+)\//,
    )?.[1];
    if (renamedHandle && renamedHandle !== handle) {
      valId = await fetchValId(renamedHandle, valName);
    }
  }

  // Fetch the raw, untranspiled source from the API.
  let code: string | null = null;
  if (valId) {
    code = await fetchText(
      `${API_BASE}/vals/${valId}/files/content?path=${encodeURIComponent(filePath)}${
        version ? `&version=${version}` : ""
      }`,
    );
  }

  // Last resort: esm.town's module cache survives some deleted vals
  // (e.g. stevekrouse/exampleSQLiteAdd), but its source is transpiled
  // (types stripped), so only use it when the API has nothing.
  if (code === null && esmSource !== null) {
    warn(`using transpiled esm.town source for ${handle}/${valName}`);
    code = esmSource.replace(/^\/\* Open in Val Town:.*\*\/\n?/, "");
  }

  if (code === null) {
    warn(`could not resolve source for ${embedUrl}`);
    return null;
  }
  if (code.length > MAX_SOURCE_LENGTH) {
    warn(
      `skipping ${handle}/${valName}: source is ${code.length} bytes, not example code`,
    );
    return null;
  }

  return { code: code.trim(), lang: detectLang(code), valPageUrl };
}

async function fetchValId(
  handle: string,
  valName: string,
): Promise<string | null> {
  const response = await fetch(`${API_BASE}/alias/vals/${handle}/${valName}`);
  if (!response.ok) return null;
  const val = (await response.json()) as { id: string };
  return val.id;
}

async function fetchText(url: string): Promise<string | null> {
  const response = await fetch(url);
  if (!response.ok) return null;
  return response.text();
}

function detectLang(code: string): "ts" | "tsx" {
  return /<\/[a-zA-Z>]|\/>/.test(code) ? "tsx" : "ts";
}

function warn(message: string) {
  console.warn(`[val-source] ${message}`);
}
