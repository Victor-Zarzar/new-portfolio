"use client";

import Image from "next/image";
import type { HeroImageClientProps } from "@/app/shared/types/image/image";

export function HeroImageClient({
  src,
  alt,
  priority,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 896px, 896px",
}: HeroImageClientProps) {
  return (
    <>
      <Image
        src={src}
        alt={alt ?? "Blog image"}
        fill
        sizes={sizes}
        priority={priority}
        quality={75}
        className={["object-cover transition-opacity duration-300"].join(" ")}
      />
    </>
  );
}
