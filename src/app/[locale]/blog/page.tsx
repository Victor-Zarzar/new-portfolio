import type { Metadata } from "next/types";
import { getTranslations } from "next-intl/server";
import type { PageProps } from "@/app/shared/types/main";
import { routing } from "@/i18n/routing";
import { getAllPosts } from "@/lib/blog";
import { BlogList } from "./blog-list";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Blog" });

  return {
    title: t("title"),
  };
}

export default async function BlogPage({ params }: PageProps) {
  const { locale } = await params;
  const posts = getAllPosts(locale);

  return <BlogList posts={posts} locale={locale} />;
}
