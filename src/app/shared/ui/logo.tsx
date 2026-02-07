"use client";

import { useTranslations } from "next-intl";
import { cn } from "@/app/shared/lib/utils";
import type { LogoProps } from "../types/main";

export function Logo({ className }: LogoProps) {
  const t = useTranslations("Navbar");

  return (
    <div
      className={cn(
        "group inline-flex items-center gap-2 select-none",
        className,
      )}
    >
      <span
        className={cn(
          "inline-flex h-8 w-8 md:w-7 md:h-7 items-center justify-center rounded-full",
          "bg-primary text-primary-foreground",
          "text-[12px] font-semibold tracking-[0.14em] uppercase",
          "ring-1 ring-border shadow-sm",
          "transition-transform duration-200 group-hover:scale-[1.02] mb-0 md:mb-3",
        )}
      >
        VZ
      </span>

      <span
        className={cn(
          "hidden lg:inline-flex items-baseline",
          "font-semibold tracking-tight",
          "text-base leading-none",
        )}
      >
        <span
          className="lg:hidden xl:flex lg:text-2xl font-extrabold tracking-wide text-transparent
          bg-clip-text bg-linear-to-r from-gray-500 to-gray-800 dark:from-gray-300 dark:to-gray-500
          drop-shadow-md transition-all duration-300 hover:scale-105 hover:text-gray-500 dark:hover:text-gray-300 font-mono animate-pulse mb-2"
        >
          {t("titlenavbar")}
        </span>
      </span>
    </div>
  );
}
