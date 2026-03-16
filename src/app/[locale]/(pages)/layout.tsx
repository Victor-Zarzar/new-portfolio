import type React from "react";
import DevToolsGuard from "@/app/guard/disable-dev-tools";
import { NavbarComponent } from "@/app/widgets/navbar/navbar-desktop";

export default async function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavbarComponent />
      <DevToolsGuard />
      {children}
    </>
  );
}
