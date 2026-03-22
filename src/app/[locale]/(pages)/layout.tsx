import type React from "react";
import DevToolsGuard from "@/app/shared/guard/disable-dev-tools";
import Footer from "@/app/widgets/footer/footer-component";
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
      <Footer />
    </>
  );
}
