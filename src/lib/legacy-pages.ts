import { legacyPages } from "@/data/site/legacy-pages.generated";
import type { LegacyPageEntry } from "@/types/site";

function normalizePathname(pathname: string) {
  if (!pathname || pathname === "/") {
    return "/";
  }

  const cleanPath = pathname.split("?")[0].split("#")[0];
  const normalized = cleanPath.startsWith("/") ? cleanPath : `/${cleanPath}`;

  return normalized !== "/" && normalized.endsWith("/")
    ? normalized.slice(0, -1)
    : normalized;
}

export function getLegacyPage(pathname: string): LegacyPageEntry | undefined {
  return legacyPages[normalizePathname(pathname)];
}

export function getLegacyPathFromSlug(slug?: string[]) {
  if (!slug || slug.length === 0) {
    return "/";
  }

  return normalizePathname(`/${slug.join("/")}`);
}

