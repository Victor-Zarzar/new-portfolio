import {
  customSessionClient,
  lastLoginMethodClient,
  twoFactorClient,
} from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/react";

import type { auth } from "@/lib/auth";

export const authClient = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_WEBSITE_URL,
  plugins: [
    lastLoginMethodClient(),
    customSessionClient<typeof auth>(),
    twoFactorClient({
      onTwoFactorRedirect() {
        window.location.href = "/auth/two-factor";
      },
    }),
  ],
});

const UserInfer = authClient.$Infer.Session.user;
export type User = typeof UserInfer;
