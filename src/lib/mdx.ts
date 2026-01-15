import fs from "fs";
import matter from "gray-matter";
import path from "path";
import type { PostMetadata } from "@/app/shared/types/main";

const contentDirectory = path.join(process.cwd(), "src/content");

export function getPostBySlug(locale: string, slug: string) {
  const fullPath = path.join(contentDirectory, locale, `${slug}.mdx`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    metadata: {
      ...data,
      slug,
    } as PostMetadata,
    content,
  };
}

export function getAllPosts(locale: string): PostMetadata[] {
  const localeDir = path.join(contentDirectory, locale);

  if (!fs.existsSync(localeDir)) {
    return [];
  }

  const files = fs.readdirSync(localeDir);

  const posts = files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const fullPath = path.join(localeDir, file);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);

      return {
        ...data,
        slug,
        content,
      } as PostMetadata;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}
