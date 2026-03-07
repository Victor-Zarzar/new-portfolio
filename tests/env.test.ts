import { describe, expect, test } from "bun:test";

function forceServerRuntime(): void {
  const g = globalThis as Record<string, unknown>;

  delete g.window;
  delete g.document;
  delete g.navigator;
}

async function importFreshEnv(): Promise<typeof import("../src/env.mjs")> {
  return import(`../src/env.mjs?test=${crypto.randomUUID()}`);
}

describe("env.mjs loading .env", () => {
  test("reads variables from the .env file (via process.env)", async () => {
    forceServerRuntime();

    const mod = await importFreshEnv();
    const env = mod.default;

    expect(env.NODE_ENV).toBeTruthy();
    expect(env.NEXT_PUBLIC_WEBSITE_URL).toBeTruthy();
    expect(env.SMTP_EMAIL).toBeTruthy();
    expect(env.SMTP_PASSWORD).toBeTruthy();
    expect(env.SENTRY_AUTH_TOKEN).toBeTruthy();
    expect(env.SENTRY_RELEASE).toBeTruthy();
    expect(env.SENTRY_ORG).toBeTruthy();
    expect(env.SENTRY_PROJECT).toBeTruthy();
  });
});
