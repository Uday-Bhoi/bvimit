import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import LegacyContentPage from "@/components/site/LegacyContentPage";
import { getLegacyPage, getLegacyPathFromSlug } from "@/lib/legacy-pages";

interface CatchAllPageProps {
  params: Promise<{ slug: string[] }>;
}

export async function generateMetadata({
  params,
}: CatchAllPageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getLegacyPage(getLegacyPathFromSlug(slug));

  if (!page || page.kind === "redirect") {
    return {};
  }

  return {
    title: `${page.title} | BVIMIT`,
    description: page.summary,
  };
}

export default async function CatchAllPage({ params }: CatchAllPageProps) {
  const { slug } = await params;
  const page = getLegacyPage(getLegacyPathFromSlug(slug));

  if (!page) {
    notFound();
  }

  if (page.kind === "redirect" && page.redirectTo) {
    redirect(page.redirectTo);
  }

  return <LegacyContentPage page={page} />;
}

