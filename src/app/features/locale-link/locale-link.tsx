"use client";

import { useLocale } from "next-intl";
import { useTransition } from "react";
import { cn } from "@/app/shared/lib/utils";
import type { Locale } from "@/app/shared/types/locale/locale";
import { Button } from "@/app/shared/ui/button";
import { usePathname, useRouter } from "@/i18n/navigation";

const order: Locale[] = ["en", "es", "pt"];

function nextLocale(current: Locale): Locale {
  const idx = order.indexOf(current);
  if (idx === -1) {
    return order[0];
  }
  return order[(idx + 1) % order.length];
}

export function LocaleLink({ className }: { className?: string }) {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const label = locale.toUpperCase();
  const to = nextLocale(locale);

  function handleClick() {
    if (isPending) {
      return;
    }
    startTransition(() => {
      router.replace(pathname, { locale: to });
    });
  }

  return (
    <Button
      type="button"
      variant="ghost"
      disabled={isPending}
      onClick={handleClick}
      aria-label={`Change language to ${to.toUpperCase()}`}
      className={cn(
        "relative inline-flex h-9 items-center justify-center px-2 text-sm font-medium uppercase",
        "text-foreground/80 hover:text-foreground transition-colors",
        "disabled:opacity-50 disabled:pointer-events-none hidden md:flex",
        "after:absolute after:left-0 after:bottom-1 after:h-0.5 after:w-0 after:bg-foreground after:transition-all after:duration-300 hover:after:w-full",
        className,
      )}
    >
      {label}
    </Button>
  );
}
