import type { GithubProject, GithubStats } from "@/app/shared/types/main";
import env from "@/env.mjs";

type RepoResponse = {
  data?: {
    user?: {
      repositories?: { nodes?: GithubProject[] };
    };
  };
  errors?: Array<{ message: string }>;
};

type StatsResponse = {
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

const GITHUB_GRAPHQL_URL = "https://api.github.com/graphql";

export async function getStats(): Promise<GithubStats | null> {
  try {
    const res = await fetch(GITHUB_GRAPHQL_URL, {
      method: "POST",
      next: { revalidate: 3600 },
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${env.GH_API_TOKEN}`,
      },
      body: JSON.stringify({
        query: `
          query userInfo($login: String!) {
            user(login: $login) {
              contributionsCollection {
                totalCommitContributions
                restrictedContributionsCount
              }
              repositoriesContributedTo(contributionTypes: [COMMIT, ISSUE, PULL_REQUEST, REPOSITORY]) {
                totalCount
              }
              pullRequests {
                totalCount
              }
              openIssues: issues(states: OPEN) {
                totalCount
              }
              closedIssues: issues(states: CLOSED) {
                totalCount
              }
              repositories(ownerAffiliations: OWNER, first: 100) {
                totalCount
                nodes {
                  stargazers {
                    totalCount
                  }
                  primaryLanguage {
                    name
                    color
                  }
                }
              }
            }
          }
        `,
        variables: {
          login: "victor-zarzar",
        },
      }),
    });

    if (!res.ok) {
      return null;
    }

    const json = (await res.json()) as StatsResponse;
    if (json.errors?.length) {
      return null;
    }

    const user = json.data?.user;
    if (!user) {
      return null;
    }

    const repos = user.repositories?.nodes ?? [];
    let stars = 0;
    for (const repo of repos) {
      stars += repo.stargazers?.totalCount ?? 0;
    }

    const totalCommitContributions =
      user.contributionsCollection?.totalCommitContributions ?? 0;
    const restrictedContributionsCount =
      user.contributionsCollection?.restrictedContributionsCount ?? 0;

    const totalCommits =
      totalCommitContributions + restrictedContributionsCount;

    const languageCounts: Record<
      string,
      { count: number; color: string | null }
    > = {};

    for (const repo of repos) {
      const lang = repo.primaryLanguage?.name;
      const color = repo.primaryLanguage?.color ?? null;
      if (!lang) {
        continue;
      }

      if (!languageCounts[lang]) {
        languageCounts[lang] = { count: 0, color };
      }
      languageCounts[lang].count += 1;
      if (!languageCounts[lang].color && color) {
        languageCounts[lang].color = color;
      }
    }

    const topLanguages = Object.entries(languageCounts)
      .map(([name, v]) => ({ name, count: v.count, color: v.color }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 5);

    const prs = user.pullRequests?.totalCount ?? 0;
    const openIssues = user.openIssues?.totalCount ?? 0;
    const closedIssues = user.closedIssues?.totalCount ?? 0;
    const issues = openIssues + closedIssues;

    const contributions = user.repositoriesContributedTo?.totalCount ?? 0;

    return {
      stars,
      totalCommits,
      prs,
      issues,
      contributions,
      topLanguages,
    };
  } catch {
    return null;
  }
}

export async function getProjects(perPage = 20): Promise<GithubProject[]> {
  try {
    const res = await fetch(GITHUB_GRAPHQL_URL, {
      method: "POST",
      next: { revalidate: 3600 },
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${env.GH_API_TOKEN}`,
      },
      body: JSON.stringify({
        query: `
          query projectsInfo($login: String!, $perPage: Int!) {
            user(login: $login) {
              repositories(
                first: $perPage,
                orderBy: { field: PUSHED_AT, direction: DESC },
                privacy: PUBLIC,
                isFork: false
              ) {
                nodes {
                  name
                  url
                  description
                  homepageUrl
                  stargazerCount
                  primaryLanguage { name color }
                }
              }
            }
          }
        `,
        variables: {
          login: "victor-zarzar",
          perPage,
        },
      }),
    });

    if (!res.ok) {
      return [];
    }

    const json = (await res.json()) as RepoResponse;
    if (json.errors?.length) {
      return [];
    }

    return json.data?.user?.repositories?.nodes ?? [];
  } catch {
    return [];
  }
}
