export type GithubProject = {
  name: string;
  url: string;
  description: string | null;
  homepageUrl: string | null;
  stargazerCount: number;
  primaryLanguage: { name: string; color: string | null } | null;
  topics: string[];
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

export type RepoResponse = {
  data?: {
    user?: {
      repositories?: {
        nodes?: Array<{
          name: string;
          url: string;
          description: string | null;
          homepageUrl: string | null;
          stargazerCount: number;
          primaryLanguage: { name: string; color: string | null } | null;
          repositoryTopics?: {
            nodes?: Array<{
              topic?: {
                name?: string;
              };
            }>;
          };
        }>;
      };
    };
  };
  errors?: Array<{ message: string }>;
};

export type StatsResponse = {
  data?: {
    user?: {
      contributionsCollection?: {
        totalCommitContributions?: number;
        restrictedContributionsCount?: number;
      };
      repositoriesContributedTo?: { totalCount?: number };
      pullRequests?: { totalCount?: number };
      openIssues?: { totalCount?: number };
      closedIssues?: { totalCount?: number };
      repositories?: {
        totalCount?: number;
        nodes?: Array<{
          stargazers?: { totalCount?: number };
          primaryLanguage?: { name: string; color: string | null } | null;
        }>;
      };
    };
  };
  errors?: Array<{ message: string }>;
};
