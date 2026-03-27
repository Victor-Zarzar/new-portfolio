import type { ReactNode } from "react";
import SignInLayoutClient from "./layout-client";

export default function SignInLayout({ children }: { children: ReactNode }) {
  return <SignInLayoutClient>{children}</SignInLayoutClient>;
}
