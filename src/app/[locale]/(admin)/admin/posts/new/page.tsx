import { headers } from "next/headers";
import { getTranslations } from "next-intl/server";
import { PostForm } from "@/app/features/posts/post-form";
import FadeWrapper from "@/app/shared/wrapper/fade-wrapper";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { tags } from "@/lib/db/schema";

export default async function NewPostPage() {
  const session = await auth.api.getSession({ headers: await headers() });
  const availableTags = await db.select().from(tags);
  const t = await getTranslations("dashboard");

  return (
    <div className="container mx-auto px-4 py-8">
      <FadeWrapper>
        <h1 className="text-center text-2xl font-bold mb-8">
          {t("posts.title")}
        </h1>
      </FadeWrapper>
      <PostForm authorId={session!.user.id} availableTags={availableTags} />
    </div>
  );
}
