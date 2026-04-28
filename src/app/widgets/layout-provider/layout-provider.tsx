import type { ReactNode } from "react";
import LayoutWrapper from "@/app/shared/wrapper/layout-wrapper";

export default function LayoutProvider({ children }: { children: ReactNode }) {
  return <LayoutWrapper>{children}</LayoutWrapper>;
}
