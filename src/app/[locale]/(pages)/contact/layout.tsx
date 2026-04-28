import type { ReactNode } from "react";
import ContactLayoutWrapper from "@/app/shared/wrapper/contact-wrapper";

export default function ContactLayout({ children }: { children: ReactNode }) {
  return <ContactLayoutWrapper>{children}</ContactLayoutWrapper>;
}
