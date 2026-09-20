import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PagePlaceholder } from "@/components/marketing/page-placeholder";
import { getPlaceholderPage, placeholderPages } from "@/lib/content/placeholder-pages";

export function generateStaticParams() {
  return placeholderPages.map((p) => ({ slug: p.slug.split("/") }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[...slug]">): Promise<Metadata> {
  const { slug } = await params;
  const page = getPlaceholderPage(slug.join("/"));
  if (!page) return {};
  return {
    title: page.title,
    robots: { index: false, follow: true },
  };
}

export default async function PlaceholderRoute({ params }: PageProps<"/[...slug]">) {
  const { slug } = await params;
  const page = getPlaceholderPage(slug.join("/"));
  if (!page) notFound();
  return <PagePlaceholder title={page.title} note={page.note} />;
}
