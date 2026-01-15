"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { Fade } from "react-awesome-reveal";
import { HiArrowRight } from "react-icons/hi";
import {
  calculateReadingTime,
  formatReadingTime,
} from "@/app/shared/helpers/reading-time";
import type { BlogListProps, PostMetadata } from "@/app/shared/types/main";
import { Card, CardContent } from "@/app/shared/ui/card";

export function BlogList({ posts, locale }: BlogListProps) {
  const t = useTranslations("Blog");

  return (
    <main className="container-articles">
      <section className="col-span-4 mx-auto">
        <header className="h1 p-6">
          <Fade>
            <h1 className="title-articles mb-4 font-extrabold leading-10 tracking-tight text-3xl md:text-4xl text-center mt-20 md:mt-36">
              {t("h1")}
            </h1>
          </Fade>
        </header>
      </section>

      <section className="my-4 mt-8 md:mt-6" id="blog">
        <h2 className="title-skills font-extrabold leading-10 tracking-tight text-sm md:text-2xl lg:text-2xl mt-8 md:mt-4 mb-8 text-center">
          {t("h2")}
        </h2>
      </section>

      <section className="max-w-3xl mx-auto grid grid-cols-1 gap-6 px-4 mb-52 md:mb-72">
        {posts.map((post, index) => (
          <ActionCard key={index} post={post} locale={locale} />
        ))}
      </section>
    </main>
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
  if (!tags || tags.length === 0) {
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

function ActionCard({ post, locale }: { post: PostMetadata; locale: string }) {
  const t = useTranslations("Blog");
  const readingTime = calculateReadingTime(post.content || post.description);
  const formattedReadingTime = formatReadingTime(readingTime, locale);

  return (
    <Link href={`/${locale}/blog/${post.slug}`}>
      <Card
        className="w-full transition-all duration-300 hover:scale-[1.01] hover:shadow-lg dark:hover:shadow-stone-600
                  border-black dark:border-gray-400 cursor-pointer group"
      >
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

            <div className="flex items-center justify-between mt-2">
              <Tags tags={post.tags} />

              <div className="flex items-center gap-2 text-sm transition-colors">
                <span>{t("p")}</span>
                <HiArrowRight className="transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
