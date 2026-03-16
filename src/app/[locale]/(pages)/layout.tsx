import type React from "react";
import { NavbarComponent } from "@/app/widgets/navbar/navbar-desktop";

export default async function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavbarComponent />
      {children}
    </>
  );
}
