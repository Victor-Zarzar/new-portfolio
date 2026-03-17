import { desc } from "drizzle-orm";
import { headers } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { posts } from "@/lib/db/schema";

export default async function AdminDashboardPage() {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) {
    redirect("/auth/signin");
  }

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

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
        <StatCard label="Total de posts" value={allPosts.length} />
        <StatCard label="Publicados" value={published} />
        <StatCard label="Rascunhos" value={drafts} />
      </div>

      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-lg font-semibold">Posts recentes</h2>
        <Link
          href="/admin/posts"
          className="text-sm text-muted-foreground hover:underline"
        >
          Ver todos →
        </Link>
      </div>
      <ul className="space-y-2">
        {recentPosts.map((post) => (
          <li key={post.id}>
            <Link
              href={`/admin/posts/${post.id}`}
              className="text-sm hover:underline text-foreground"
            >
              {post.translations[0]?.title ?? "Sem título"}
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
