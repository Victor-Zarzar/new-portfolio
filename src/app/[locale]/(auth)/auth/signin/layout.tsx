import type { ReactNode } from "react";
import SignInLayoutWrapper from "@/app/shared/wrapper/signin-wrapper";

export default function SignInLayout({ children }: { children: ReactNode }) {
  return <SignInLayoutWrapper>{children}</SignInLayoutWrapper>;
}
