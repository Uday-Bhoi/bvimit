import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { contentRoutes, redirectRoutes } from "./legacy-route-config.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectRoot = path.resolve(__dirname, "..");
const legacyRoot = path.resolve(projectRoot, "..", "bvimit");
const generatedFile = path.join(
  projectRoot,
  "src",
  "data",
  "site",
  "legacy-pages.generated.ts",
);

const SOURCE_TO_CANONICAL_PATH = new Map(
  contentRoutes.map((route) => [route.sourceFile, route.path]),
);

const MOJIBAKE_REPLACEMENTS = [
  ["â€™", "’"],
  ["â€˜", "‘"],
  ["â€œ", "“"],
  ["â€", "”"],
  ["â€\"", "–"],
  ["â€”", "—"],
  ["â€¦", "…"],
  ["â‚¹", "₹"],
  ["Â©", "©"],
  ["Â ", " "],
  [" ", " "],
];

function fixTextEncoding(value) {
  return MOJIBAKE_REPLACEMENTS.reduce(
    (acc, [needle, replacement]) => acc.split(needle).join(replacement),
    value,
  );
}

function normalizePathname(value) {
  if (!value) {
    return "/";
  }

  const withoutQuery = value.split("?")[0].split("#")[0].trim();
  if (!withoutQuery || withoutQuery === "/") {
    return "/";
  }

  const normalized = withoutQuery.startsWith("/")
    ? withoutQuery
    : `/${withoutQuery}`;

  return normalized !== "/" && normalized.endsWith("/")
    ? normalized.slice(0, -1)
    : normalized;
}

function slugToTitle(value) {
  return value
    .replace(/\.php$/i, "")
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function toLegacyAssetPath(relativePath) {
  const normalized = relativePath.replace(/^\.?\//, "");

  if (normalized.startsWith("pdf/")) {
    return `/legacy/pdfs/${normalized.slice(4)}`;
  }

  if (normalized.startsWith("images/")) {
    return `/legacy/images/${normalized.slice(7)}`;
  }

  if (normalized.startsWith("facultyresume/")) {
    return `/legacy/facultyresume/${normalized.slice(14)}`;
  }

  if (normalized.startsWith("gifs/")) {
    return `/legacy/gifs/${normalized.slice(5)}`;
  }

  if (normalized.startsWith("svg/")) {
    return `/legacy/svg/${normalized.slice(4)}`;
  }

  if (normalized.startsWith("admin2/")) {
    return `/legacy/admin2/${normalized.slice(7)}`;
  }

  if (normalized.startsWith("facultyimage/")) {
    return `/legacy/facultyimage/${normalized.slice(13)}`;
  }

  return `/${normalized}`;
}

function rewriteUrl(rawUrl) {
  const value = rawUrl.trim();

  if (
    !value ||
    value.startsWith("#") ||
    value.startsWith("mailto:") ||
    value.startsWith("tel:") ||
    value.startsWith("javascript:")
  ) {
    return value;
  }

  if (/^https?:\/\//i.test(value)) {
    return value;
  }

  if (/\.(php)$/i.test(value)) {
    const fileName = value.replace(/^\.?\//, "");
    return SOURCE_TO_CANONICAL_PATH.get(fileName) ?? `/bvimit/${fileName}`;
  }

  if (
    value.startsWith("pdf/") ||
    value.startsWith("images/") ||
    value.startsWith("facultyresume/") ||
    value.startsWith("gifs/") ||
    value.startsWith("svg/") ||
    value.startsWith("admin2/") ||
    value.startsWith("facultyimage/")
  ) {
    return toLegacyAssetPath(value);
  }

  return value;
}

function cleanupHtml(rawContent) {
  let html = rawContent;

  html = html.replace(/<\?php[\s\S]*?\?>/g, "");
  html = html.replace(/<!--[\s\S]*?-->/g, "");
  html = fixTextEncoding(html);

  html = html.replace(/\s(?:uk-scrollspy|uk-grid|uk-img|uk-lightbox|uk-slider|uk-height-match|uk-filter)="[^"]*"/g, "");
  html = html.replace(/\s(?:data-toggle|data-target|data-ride|data-slide|data-slide-to|aria-controls|aria-selected)="[^"]*"/g, "");
  html = html.replace(/\s(?:onclick|onmouseover|onmouseout)="[^"]*"/g, "");
  html = html.replace(/\srole="[^"]*"/g, "");
  html = html.replace(/\sid="exampleModal[^"]*"/g, "");

  html = html.replace(
    /\s(?:href|src|data-src)="([^"]*)"/g,
    (match, value) => {
      const attrName = match.trim().startsWith("data-src") ? "src" : match.trim().split("=")[0];
      const rewritten = rewriteUrl(value);
      return rewritten ? ` ${attrName}="${rewritten}"` : "";
    },
  );

  html = html.replace(/<img([^>]*)\ssrc="#"\s*([^>]*)>/gi, "");
  html = html.replace(/<a([^>]*)href="#"\s*([^>]*)>\s*<\/a>/gi, "");
  html = html.replace(/<script[\s\S]*?<\/script>/gi, "");
  html = html.replace(/<style[\s\S]*?<\/style>/gi, "");
  html = html.replace(/^\s+|\s+$/g, "");

  return html;
}

async function readContentPage(route) {
  const filePath = path.join(legacyRoot, route.sourceFile);
  const raw = await fs.readFile(filePath, "utf8");

  return {
    kind: "content",
    path: route.path,
    canonicalPath: route.path,
    title: route.title,
    section: route.section,
    summary: route.summary,
    sourceFile: route.sourceFile,
    html: cleanupHtml(raw),
  };
}

function buildAliasEntries(page) {
  const fileName = page.sourceFile;
  const aliases = [
    normalizePathname(fileName),
    normalizePathname(`/bvimit/${fileName}`),
  ].filter((alias) => alias !== page.path);

  return aliases.map((aliasPath) => [
    aliasPath,
    {
      kind: "redirect",
      path: aliasPath,
      canonicalPath: page.path,
      title: page.title,
      section: page.section,
      redirectTo: page.path,
    },
  ]);
}

async function buildManifest() {
  const manifest = new Map();

  for (const route of contentRoutes) {
    const page = await readContentPage(route);
    manifest.set(page.path, page);

    for (const [aliasPath, aliasEntry] of buildAliasEntries(page)) {
      manifest.set(aliasPath, aliasEntry);
    }
  }

  for (const route of redirectRoutes) {
    manifest.set(normalizePathname(route.path), {
      kind: "redirect",
      path: normalizePathname(route.path),
      canonicalPath: route.redirectTo,
      title: slugToTitle(route.path),
      section: "Legacy",
      redirectTo: route.redirectTo,
    });
    manifest.set(normalizePathname(`/bvimit${route.path}`), {
      kind: "redirect",
      path: normalizePathname(`/bvimit${route.path}`),
      canonicalPath: route.redirectTo,
      title: slugToTitle(route.path),
      section: "Legacy",
      redirectTo: route.redirectTo,
    });
  }

  return Object.fromEntries(
    [...manifest.entries()].sort(([left], [right]) => left.localeCompare(right)),
  );
}

async function writeGeneratedFile(manifest) {
  const fileContents = `import type { LegacyPageManifest } from "@/types/site";

export const legacyPages: LegacyPageManifest = ${JSON.stringify(manifest, null, 2)};\n`;

  await fs.writeFile(generatedFile, fileContents, "utf8");
}

async function main() {
  const manifest = await buildManifest();
  await writeGeneratedFile(manifest);
  console.log(`Generated ${Object.keys(manifest).length} legacy route entries.`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

