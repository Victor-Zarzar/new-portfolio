import type { MetadataRoute } from "next";
import env from "@/env.mjs";
import { routing } from "@/i18n/routing";
import { getAllPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = env.NEXT_PUBLIC_WEBSITE_URL;
  const locales = routing.locales;
  const pages = [
    "",
    "about",
    "services",
    "contact",
    "projects",
    "privacypolicy",
  ];

  const routes = locales.flatMap((locale) =>
    pages.map((page) => ({
      url: `${baseUrl}/${locale}${page ? `/${page}` : ""}`,
      lastModified: new Date().toISOString().split("T")[0],
    })),
  );

  const blogRoutes: MetadataRoute.Sitemap = locales.flatMap((locale) => {
    const posts = getAllPosts(locale);

    return posts.map((post) => ({
      url: `${baseUrl}/${locale}/blog/${post.slug}`,
      lastModified: post.publishedAt,
      changeFrequency: "weekly",
      priority: 0.8,
    }));
  });

  return [...routes, ...blogRoutes];
}
