import type { ImageProps } from "next/image";

export type HeroImageClientProps = {
  src: ImageProps["src"];
  alt: string;
  priority?: boolean;
  sizes?: string;
};
