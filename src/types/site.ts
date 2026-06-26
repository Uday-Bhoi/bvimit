export type LegacyPageKind = "content" | "redirect";

export interface LegacyPageEntry {
  kind: LegacyPageKind;
  path: string;
  canonicalPath: string;
  title: string;
  section: string;
  summary?: string;
  sourceFile?: string;
  html?: string;
  redirectTo?: string;
}

export type LegacyPageManifest = Record<string, LegacyPageEntry>;

