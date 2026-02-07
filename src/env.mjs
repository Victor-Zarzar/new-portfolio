import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

const env = createEnv({
  server: {
    NODE_ENV: z
      .enum(["development", "test", "production"])
      .default("development"),

    SMTP_EMAIL: z.email(),
    SMTP_PASSWORD: z.string(),
    SLACK_WEBHOOK_URL: z.string().optional(),
    GITHUB_API_TOKEN: z.string(),
    SENTRY_AUTH_TOKEN: z.string().optional(),
    SENTRY_RELEASE: z.string().optional(),
    SENTRY_ORG: z.string().optional(),
    SENTRY_PROJECT: z.string().optional(),
  },

  client: {
    NEXT_PUBLIC_WEBSITE_URL: z
      .string()
      .default("http://localhost:3000")
      .transform((url) => {
        if (url.startsWith("http://localhost:3000")) {
          return url;
        }
        return url.startsWith("http") ? url : `https://${url}`;
      }),

    NEXT_PUBLIC_DISABLE_DEVTOOLS: z
      .union([z.string(), z.boolean()])
      .transform((value) => {
        if (typeof value === "boolean") {
          return value;
        }
        return value === "true";
      }),

    NEXT_PUBLIC_SENTRY_DSN: z.url().optional(),
  },

  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    SMTP_EMAIL: process.env.SMTP_EMAIL,
    SMTP_PASSWORD: process.env.SMTP_PASSWORD,
    SLACK_WEBHOOK_URL: process.env.SLACK_WEBHOOK_URL,
    GITHUB_API_TOKEN: process.env.GITHUB_API_TOKEN,
    SENTRY_AUTH_TOKEN: process.env.SENTRY_AUTH_TOKEN,
    SENTRY_RELEASE: process.env.SENTRY_RELEASE,
    SENTRY_ORG: process.env.SENTRY_ORG,
    SENTRY_PROJECT: process.env.SENTRY_PROJECT,
    NEXT_PUBLIC_WEBSITE_URL: process.env.NEXT_PUBLIC_WEBSITE_URL,
    NEXT_PUBLIC_DISABLE_DEVTOOLS: process.env.NEXT_PUBLIC_DISABLE_DEVTOOLS,
    NEXT_PUBLIC_SENTRY_DSN: process.env.NEXT_PUBLIC_SENTRY_DSN,
  },

  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
  emptyStringAsUndefined: true,
});

export default env;
