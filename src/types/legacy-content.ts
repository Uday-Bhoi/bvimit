export type LegacySourceMode =
  | "local"
  | "remote"
  | "prefer-local"
  | "prefer-remote";

export type LegacyPageStatus = "ready" | "partial" | "missing";

export type LegacyLinkKind =
  | "anchor"
  | "asset"
  | "document"
  | "email"
  | "external"
  | "internal-page"
  | "phone";

export interface LegacyGeneratorMetadata {
  version: number;
  generatedAt: string;
  sourceMode: LegacySourceMode;
  remoteBaseUrl: string;
  localRoot: string;
}

export interface LegacyHeading {
  level: number;
  text: string;
  slug: string;
}

export interface LegacyContentBlock {
  id: string;
  tagName: string;
  heading: string | null;
  text: string;
  html: string;
  linkCount: number;
  imageCount: number;
  tableCount: number;
}

export interface LegacyLinkRecord {
  text: string;
  href: string;
  absoluteUrl: string | null;
  routePath: string | null;
  kind: LegacyLinkKind;
  localPath: string | null;
  existsLocally: boolean;
}

export interface LegacyImageRecord {
  alt: string | null;
  src: string;
  absoluteUrl: string | null;
  localPath: string | null;
  existsLocally: boolean;
}

export interface LegacyTableRecord {
  index: number;
  caption: string | null;
  headers: string[];
  rows: string[][];
}

export interface LegacyPageRecord {
  id: string;
  routePath: string;
  section: string;
  label: string;
  legacyPath: string;
  legacyUrl: string;
  sourceKind: "local" | "remote" | null;
  sourceReference: string | null;
  sourceChecksum: string | null;
  status: LegacyPageStatus;
  title: string;
  summary: string | null;
  html: string;
  text: string;
  blocks: LegacyContentBlock[];
  headings: LegacyHeading[];
  links: LegacyLinkRecord[];
  images: LegacyImageRecord[];
  documents: LegacyLinkRecord[];
  tables: LegacyTableRecord[];
  warnings: string[];
  dynamicSignals: string[];
}

export interface LegacyContentCollection {
  metadata: LegacyGeneratorMetadata;
  pages: LegacyPageRecord[];
}
