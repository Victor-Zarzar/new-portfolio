import { eq } from "drizzle-orm";
import { headers } from "next/headers";
import { notFound, redirect } from "next/navigation";
import { PostForm } from "@/app/features/posts/post-form";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { posts, tags } from "@/lib/db/schema";

export default async function EditPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) {
    redirect("/auth/signin");
  }

  const { id } = await params;
  const postId = Number(id);

  const [post, availableTags] = await Promise.all([
    db.query.posts.findFirst({
      where: eq(posts.id, postId),
      with: {
        translations: true,
        postTags: true,
      },
    }),
    db.select({ id: tags.id, name: tags.name }).from(tags),
  ]);

  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold mb-8">Edit post</h1>
      <PostForm
        authorId={session.user.id}
        postId={post.id}
        availableTags={availableTags}
        defaultValues={{
          slug: post.slug,
          year: post.year ?? undefined,
          photo: post.photo ?? "",
          translations: post.translations.map((t) => ({
            locale: t.locale as "pt" | "en" | "es",
            title: t.title,
            description: t.description,
            content: t.content,
          })),
          tagIds: post.postTags.map((pt) => pt.tagId),
        }}
      />
    </div>
  );
}
