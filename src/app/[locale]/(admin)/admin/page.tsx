import { desc } from "drizzle-orm";
import { getTranslations } from "next-intl/server";
import FadeWrapper from "@/app/shared/wrapper/fade-wrapper";
import { Link } from "@/i18n/navigation";
import { db } from "@/lib/db";
import { posts } from "@/lib/db/schema";

export default async function AdminDashboardPage() {
  const [allPosts, recentPosts] = await Promise.all([
    db.query.posts.findMany({ columns: { id: true, publishedAt: true } }),
    db.query.posts.findMany({
      orderBy: [desc(posts.createdAt)],
      limit: 5,
      with: {
        translations: {
          where: (t, { eq }) => eq(t.locale, "en"),
          columns: { title: true },
        },
      },
    }),
  ]);

  const published = allPosts.filter((p) => p.publishedAt).length;
  const drafts = allPosts.length - published;
  const t = await getTranslations("dashboard");

  return (
    <div className="container mx-auto px-4 py-8">
      <FadeWrapper>
        <h1 className="text-center text-2xl font-bold mb-8">{t("title")}</h1>
      </FadeWrapper>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
        <StatCard label={t("stats.totalPosts")} value={allPosts.length} />
        <StatCard label={t("stats.published")} value={published} />
        <StatCard label={t("stats.drafts")} value={drafts} />
      </div>

      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-lg font-semibold">{t("recentPosts.title")}</h2>
        <Link
          href="/admin/posts"
          className="text-sm text-muted-foreground hover:underline"
        >
          {t("recentPosts.viewAll")}
        </Link>
      </div>
      <ul className="space-y-2">
        {recentPosts.map((post) => (
          <li key={post.id}>
            <Link
              href={`/admin/posts/${post.id}`}
              className="text-sm hover:underline text-foreground"
            >
              {post.translations[0]?.title ?? "recentPosts.untitled"}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-lg border bg-card p-4">
      <p className="text-sm text-muted-foreground">{label}</p>
      <p className="text-3xl font-bold mt-1">{value}</p>
    </div>
  );
}
