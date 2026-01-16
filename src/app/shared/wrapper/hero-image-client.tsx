"use client";

import Image from "next/image";
import { useState } from "react";
import type { HeroImageClientProps } from "@/app/shared/types/main";
import { Skeleton } from "@/app/shared/ui/skeleton";

export function HeroImageClient({
  src,
  alt,
  priority,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
}: HeroImageClientProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-lg mb-6">
      {!isLoaded && <Skeleton className="absolute inset-0 z-0" />}

      <Image
        src={src}
        alt={alt ?? "Blog image"}
        fill
        sizes={sizes}
        priority={priority}
        className={[
          "object-cover transition-opacity duration-300",
          isLoaded ? "opacity-100" : "opacity-0",
        ].join(" ")}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
}
