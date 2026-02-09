import type { Metadata } from "next";
import Image, { type ImageProps } from "next/image";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote-client/rsc";
import { toISODateUTC } from "@/app/shared/helpers/format-date";
import type {
  MdxAnchorProps,
  MdxCodeProps,
  MdxHeadingProps,
  MdxImgProps,
  MdxLiProps,
  MdxOlProps,
  MdxParagraphProps,
  MdxPreProps,
  MdxUlProps,
  PageProps,
} from "@/app/shared/types/main";
import { HeroImageClient } from "@/app/shared/wrapper/hero-image-client";
import env from "@/env.mjs";
import { routing } from "@/i18n/routing";
import { getAllPosts, getPostBySlug } from "@/lib/blog";

const components = {
  h1: (props: MdxHeadingProps) => (
    <h1 className="text-4xl font-bold mt-8 mb-4" {...props} />
  ),
  h2: (props: MdxHeadingProps) => (
    <h2 className="text-3xl font-bold mt-6 mb-3" {...props} />
  ),
  h3: (props: MdxHeadingProps) => (
    <h3 className="text-2xl font-bold mt-4 mb-2" {...props} />
  ),
  p: (props: MdxParagraphProps) => <p className="mb-4 leading-7" {...props} />,
  ul: (props: MdxUlProps) => <ul className="list-disc ml-6 mb-4" {...props} />,
  ol: (props: MdxOlProps) => (
    <ol className="list-decimal ml-6 mb-4" {...props} />
  ),
  li: (props: MdxLiProps) => <li className="mb-2" {...props} />,
  a: (props: MdxAnchorProps) => (
    <a
      className="text-blue-600 dark:text-blue-400 hover:underline"
      {...props}
    />
  ),
  code: (props: MdxCodeProps) => (
    <code
      className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-sm"
      {...props}
    />
  ),
  pre: (props: MdxPreProps) => (
    <pre
      className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto mb-4"
      {...props}
    />
  ),

  img: ({ src, alt }: MdxImgProps) => {
    if (!src) {
      return null;
    }

    const imageSrc = src as ImageProps["src"];

    return (
      <Image
        src={imageSrc}
        width={800}
        height={400}
        className="rounded-lg my-4"
        alt={alt ?? "Blog image"}
      />
    );
  },
};

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    getAllPosts(locale).map((post) => ({
      locale,
      slug: post.slug,
    })),
  );
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = getPostBySlug(locale, slug);

  if (!post) {
    return {};
  }

  const { title, description, publishedAt, photo, tags } = post.metadata;

  const canonical = `${env.NEXT_PUBLIC_WEBSITE_URL}/${locale}/blog/${slug}`;
  const ogImage = photo.startsWith("http")
    ? photo
    : `${env.NEXT_PUBLIC_WEBSITE_URL}${photo}`;

  const publishedTime = toISODateUTC(publishedAt);

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    keywords: tags,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: canonical,
      images: [{ url: ogImage }],
      tags,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { locale, slug } = await params;
  const post = getPostBySlug(locale, slug);

  if (!post) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.metadata.title,
    description: post.metadata.description,
    image: `${env.NEXT_PUBLIC_WEBSITE_URL}${post.metadata.photo}`,
    url: `${env.NEXT_PUBLIC_WEBSITE_URL}/${locale}/blog/${slug}`,
    datePublished: post.metadata.publishedAt,
    dateModified: post.metadata.publishedAt,
    author: {
      "@type": "Person",
      name: "Victor Zarzar",
      url: env.NEXT_PUBLIC_WEBSITE_URL,
    },
    publisher: {
      "@type": "Person",
      name: "Victor Zarzar",
    },
    keywords: post.metadata.tags?.join(", "),
    inLanguage: locale,
  };

  const publishedDate = new Date(`${post.metadata.publishedAt}T00:00:00Z`);

  return (
    <article className="container max-w-4xl mx-auto px-4 py-3 md:py-4">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
      <header className="mb-8">
        <div className="relative aspect-video w-full overflow-hidden rounded-lg mb-6">
          <HeroImageClient
            src={post.metadata.photo}
            alt={post.metadata.title}
            priority
          />
        </div>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-2">
          {publishedDate.toLocaleDateString(locale, {
            year: "numeric",
            month: "long",
            day: "numeric",
            timeZone: "UTC",
          })}
        </p>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          {post.metadata.title}
        </h1>
        <p className="text-xl text-neutral-600 dark:text-neutral-300">
          {post.metadata.description}
        </p>
      </header>

      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <MDXRemote source={post.content} components={components} />
      </div>
    </article>
  );
}
