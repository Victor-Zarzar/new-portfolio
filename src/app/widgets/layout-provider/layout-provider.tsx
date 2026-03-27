import type { ReactNode } from "react";
import LayoutClientProvider from "./layout-client-provider";

export default function LayoutProvider({ children }: { children: ReactNode }) {
  return <LayoutClientProvider>{children}</LayoutClientProvider>;
}
