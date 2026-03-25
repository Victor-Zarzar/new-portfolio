export const cacheKeys = {
  posts: (locale: string) => `posts:${locale}`,
  post: (locale: string, slug: string) => `post:${locale}:${slug}`,
  sitemap: () => `posts:sitemap`,

  githubStats: () => "github:stats",
  githubProjects: (perPage: number) => `github:projects:${perPage}`,
};
