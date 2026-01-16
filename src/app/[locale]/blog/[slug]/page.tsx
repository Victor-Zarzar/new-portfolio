import type { Metadata } from "next";
import Image, { type ImageProps } from "next/image";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote-client/rsc";
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
import { getAllPosts, getPostBySlug } from "@/lib/mdx";

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

export async function generateStaticParams(): Promise<
  Array<{ locale: string; slug: string }>
> {
  const locales = ["pt", "en", "es"] as const;

  return locales.flatMap((locale) => {
    const posts = getAllPosts(locale);
    return posts.map((post) => ({
      locale,
      slug: post.slug,
    }));
  });
}

const ogLocaleMap: Record<string, string> = {
  pt: "pt_BR",
  en: "en_US",
  es: "es_ES",
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = getPostBySlug(locale, slug);

  if (!post) {
    return {};
  }
  const canonicalPath = `/${locale}/blog/${slug}`;
  const canonicalUrl = `${env.NEXT_PUBLIC_WEBSITE_URL}${canonicalPath}`;

  return {
    metadataBase: new URL(env.NEXT_PUBLIC_WEBSITE_URL),
    title: post.metadata.title,
    description: post.metadata.description,
    openGraph: {
      title: post.metadata.title,
      description: post.metadata.description,
      url: canonicalUrl,
      siteName: "Victor Zarzar | Software Developer",
      images: [
        {
          url: post.metadata.photo,
        },
      ],
      locale: ogLocaleMap[locale] ?? "en_US",
      type: "article",
    },
    alternates: {
      canonical: canonicalPath,
      languages: {
        "pt-BR": `/pt/blog/${slug}`,
        "en-US": `/en/blog/${slug}`,
        "es-ES": `/es/blog/${slug}`,
      },
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
    datePublished: post.metadata.date,
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

  return (
    <article className="container max-w-4xl mx-auto px-4 py-12 md:py-20">
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
          {new Date(post.metadata.date).toLocaleDateString(locale, {
            year: "numeric",
            month: "long",
            day: "numeric",
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
