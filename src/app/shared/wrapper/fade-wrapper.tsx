"use client";

import { Fade } from "react-awesome-reveal";

export default function FadeWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Fade triggerOnce direction="up" duration={600}>
      {children}
    </Fade>
  );
}
