import { desc } from "drizzle-orm";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { PostsTable } from "@/app/features/post-form/posts-table";
import FadeWrapper from "@/app/shared/wrapper/fade-wrapper";
import { db } from "@/lib/db";
import { posts } from "@/lib/db/schema";

export default async function AdminPostsPage() {
  const t = await getTranslations("dashboard");
  const allPosts = await db.query.posts.findMany({
    orderBy: [desc(posts.createdAt)],
    with: {
      translations: {
        where: (t, { eq }) => eq(t.locale, "en"),
        columns: { title: true, description: true },
      },
      postTags: {
        with: { tag: { columns: { name: true } } },
      },
    },
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <FadeWrapper>
          <h1 className="text-center text-2xl font-bold">{t("posts.title")}</h1>
        </FadeWrapper>
        <Link
          href="/admin/posts/new"
          className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2
          text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          {t("posts.new")}
        </Link>
      </div>
      <PostsTable posts={allPosts} />
    </div>
  );
}
