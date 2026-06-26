import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import LegacyContentPage from "@/components/site/LegacyContentPage";
import { getLegacyPage } from "@/lib/legacy-pages";

interface LegacyBaseCatchAllPageProps {
  params: Promise<{ slug: string[] }>;
}

function getLegacyBasePath(slug: string[]) {
  return `/bvimit/${slug.join("/")}`;
}

export async function generateMetadata({
  params,
}: LegacyBaseCatchAllPageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getLegacyPage(getLegacyBasePath(slug));

  if (!page || page.kind === "redirect") {
    return {};
  }

  return {
    title: `${page.title} | BVIMIT`,
    description: page.summary,
  };
}

export default async function LegacyBaseCatchAllPage({
  params,
}: LegacyBaseCatchAllPageProps) {
  const { slug } = await params;
  const page = getLegacyPage(getLegacyBasePath(slug));

  if (!page) {
    notFound();
  }

  if (page.kind === "redirect" && page.redirectTo) {
    redirect(page.redirectTo);
  }

  return <LegacyContentPage page={page} />;
}

