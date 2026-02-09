"use client";

import { Fade } from "react-awesome-reveal";

export default function FadeWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Fade>{children}</Fade>;
}
