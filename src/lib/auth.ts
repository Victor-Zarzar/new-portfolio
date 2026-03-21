import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import {
  customSession,
  lastLoginMethod,
  oAuthProxy,
  twoFactor,
} from "better-auth/plugins";
import env from "@/env.mjs";
import { db } from "@/lib/db";
import * as authSchema from "./db/auth-schema";

export const auth = betterAuth({
  appName: "Victor Zarzar",
  baseURL: env.NEXT_PUBLIC_WEBSITE_URL,
  telemetry: { enabled: false },
  database: drizzleAdapter(db, {
    provider: "pg",
    schema: authSchema,
    usePlural: false,
  }),
  trustedOrigins: [env.BETTER_AUTH_URL],
  emailAndPassword: {
    enabled: true,
    disableSignUp: true,
  },
  session: {
    expiresIn: 60 * 60 * 24 * 1,
    updateAge: 60 * 60 * 6,
  },
  plugins: [
    oAuthProxy(),
    lastLoginMethod(),
    twoFactor({
      issuer: "Victor Zarzar",
    }),
    customSession(async ({ user, session }) => {
      return {
        user: {
          ...user,
          isAdmin: user.email === env.ADMIN_EMAIL,
        },
        session,
      };
    }),
  ],
});
