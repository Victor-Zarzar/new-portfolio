import type { ReactNode } from "react";
import ContactLayoutClient from "./layout-client";

export default function ContactLayout({ children }: { children: ReactNode }) {
  return <ContactLayoutClient>{children}</ContactLayoutClient>;
}
