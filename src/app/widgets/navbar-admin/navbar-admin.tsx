"use client";

import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import * as React from "react";
import CommandPalette from "@/app/features/command-palette/command-palette";
import { LocaleLink } from "@/app/features/locale-link/locale-link";
import SettingsSwitcher from "@/app/features/settings-switcher/settings-switcher";
import { ModeToggle } from "@/app/features/toggle-mode/toggle-mode";
import { cn, getInitials } from "@/app/shared/lib/utils";
import type { AdminNavbarProps } from "@/app/shared/types/navbar/nav";
import { Avatar, AvatarFallback, AvatarImage } from "@/app/shared/ui/avatar";
import { Button } from "@/app/shared/ui/button";
import { Logo } from "@/app/shared/ui/logo";
import { authClient } from "@/lib/auth-client";

export const AdminNavbar = React.forwardRef<HTMLElement, AdminNavbarProps>(
  (
    { className, user, logo = <Logo />, logoHref = "/admin", ...props },
    ref,
  ) => {
    const router = useRouter();
    const t = useTranslations("AdminNavbar");

    async function logOut() {
      await authClient.signOut();
      router.refresh();
    }

    return (
      <header
        className={cn(
          "sticky top-0 z-50 w-full border-b backdrop-blur supports-backdrop-filter:bg-background/60 px-4 md:px-6 dark:bg-stone-950 bg-[#ffffff]",
          className,
        )}
        ref={ref}
        {...props}
      >
        <div className="container relative mx-auto flex h-16 items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Avatar className="h-7 w-7">
              <AvatarImage src={user.image ?? undefined} alt={user.name} />
              <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
            </Avatar>
            <span className="hidden sm:inline">
              {t("hello")}{" "}
              <strong className="text-foreground">{user.name}</strong>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden lg:flex items-center gap-3">
              <CommandPalette />
              <ModeToggle />
              <LocaleLink />
            </div>
            <div className="flex lg:hidden">
              <SettingsSwitcher />
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={async () => await logOut()}
            >
              <LogOut className="h-4 w-4 sm:mr-2" />
              <span className="hidden sm:inline">{t("signOut")}</span>
            </Button>
          </div>
        </div>
      </header>
    );
  },
);

AdminNavbar.displayName = "AdminNavbar";
