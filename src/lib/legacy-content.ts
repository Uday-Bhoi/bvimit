import legacyContentData from "@/data/legacy-pages.generated.json";
import type {
  LegacyContentCollection,
  LegacyPageRecord,
} from "@/types/legacy-content";

const legacyContent = legacyContentData as LegacyContentCollection;

const normalizeRoutePath = (routePath: string) => {
  if (!routePath) {
    return "/";
  }

  if (routePath === "/") {
    return routePath;
  }

  return routePath.endsWith("/") ? routePath.slice(0, -1) : routePath;
};

const pagesById = new Map(
  legacyContent.pages.map((page) => [page.id, page] satisfies [string, LegacyPageRecord]),
);

const pagesByRoute = new Map(
  legacyContent.pages.map((page) => [
    normalizeRoutePath(page.routePath),
    page,
  ] satisfies [string, LegacyPageRecord]),
);

export const legacyContentCollection = legacyContent;
export const legacyPages = legacyContent.pages;
export const legacyContentMetadata = legacyContent.metadata;

export function listLegacyPages(): LegacyPageRecord[] {
  return legacyPages;
}

export function getLegacyPage(id: string): LegacyPageRecord | undefined {
  return pagesById.get(id);
}

export function getLegacyPageByRoute(
  routePath: string,
): LegacyPageRecord | undefined {
  return pagesByRoute.get(normalizeRoutePath(routePath));
}
