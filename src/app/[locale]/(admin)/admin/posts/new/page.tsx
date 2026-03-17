import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { PostForm } from "@/app/features/posts/post-form";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { tags } from "@/lib/db/schema";

export default async function NewPostPage() {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) {
    redirect("/auth/signin");
  }

  const availableTags = await db.select().from(tags);

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold mb-8">New post</h1>
      <PostForm authorId={session.user.id} availableTags={availableTags} />
    </div>
  );
}
