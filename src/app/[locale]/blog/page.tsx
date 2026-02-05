import type { PageProps } from "@/app/shared/types/main";
import { getAllPosts } from "@/lib/blog";
import { BlogList } from "./blog-list";

export default async function BlogPage({ params }: PageProps) {
  const { locale } = await params;
  const posts = getAllPosts(locale);

  return <BlogList posts={posts} locale={locale} />;
}
