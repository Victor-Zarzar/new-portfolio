import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { HiArrowRight } from "react-icons/hi";
import {
  calculateReadingTime,
  formatReadingTime,
} from "@/app/shared/helpers/reading-time";
import type { BlogContentProps, PostMetadata } from "@/app/shared/types/main";
import { Card, CardContent } from "@/app/shared/ui/card";

export default async function BlogContent({ locale, posts }: BlogContentProps) {
  const t = await getTranslations("Blog");

  return (
    <section className="max-w-3xl mx-auto grid grid-cols-1 gap-6 px-4 mb-52 md:mb-72">
      {posts.map((post) => (
        <ActionCard key={post.slug} post={post} locale={locale} t={t} />
      ))}
    </section>
  );
}

function ArticleDescription({ description }: { description: string }) {
  return (
    <div className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
      {description}
    </div>
  );
}

function Tags({ tags }: { tags?: string[] }) {
  if (!tags?.length) {
    return null;
  }

  return (
    <div className="flex gap-2 flex-wrap">
      {tags.map((tag) => (
        <span
          key={tag}
          className="px-3 py-1 text-xs rounded-full bg-neutral-800 dark:bg-neutral-800 border border-neutral-700"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

function ActionCard({
  post,
  locale,
  t,
}: {
  post: PostMetadata;
  locale: string;
  t: (key: string) => string;
}) {
  const readingTime = calculateReadingTime(post.content || post.description);
  const formattedReadingTime = formatReadingTime(readingTime, locale);

  return (
    <Link href={`/${locale}/blog/${post.slug}`}>
      <Card className="w-full group">
        <CardContent className="p-6">
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <p className="text-xs">
                {t("year")}: {post.year}
              </p>
              <p className="text-xs">{formattedReadingTime}</p>
            </div>

            <h4 className="text-xl font-semibold">{post.title}</h4>

            <ArticleDescription description={post.description} />

            <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="min-w-0 text-white">
                <Tags tags={post.tags} />
              </div>

              <div className="flex items-center gap-2 text-sm text-stone-950 dark:text-stone-50 self-end sm:self-auto sm:shrink-0">
                <span className="leading-none whitespace-nowrap">{t("p")}</span>
                <HiArrowRight className="transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
