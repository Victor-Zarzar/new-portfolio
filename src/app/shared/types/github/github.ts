export type GithubProject = {
  name: string;
  url: string;
  description: string | null;
  homepageUrl: string | null;
  stargazerCount: number;
  primaryLanguage: { name: string; color: string | null } | null;
};

export type GithubTopLanguage = {
  name: string;
  count: number;
  color: string | null;
};

export type GithubStats = {
  stars: number;
  totalCommits: number;
  prs: number;
  issues: number;
  contributions: number;
  topLanguages: GithubTopLanguage[];
};
