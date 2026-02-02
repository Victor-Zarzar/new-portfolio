"use client";

import { BookOpen, Briefcase, FileText, Home, Mail, User } from "lucide-react";
import { useTranslations } from "next-intl";
import * as React from "react";
import CommandPalette from "@/app/features/command-palette/command-palette";
import SettingsSwitcher from "@/app/features/settings-switcher/settings-switcher";
import { cn } from "@/app/shared/lib/utils";
import type { NavbarNavLink } from "@/app/shared/types/main";
import { Logo } from "@/app/shared/ui/logo";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/app/shared/ui/navigation-menu";
import { Link } from "@/i18n/navigation";
import { NavMobile } from "./nav-mobile";

export interface NavbarProps extends React.HTMLAttributes<HTMLElement> {
  logo?: React.ReactNode;
  logoHref?: string;
  navigationLinks?: NavbarNavLink[];
  signInText?: string;
  signInHref?: string;
  ctaText?: string;
  ctaHref?: string;
  onSignInClick?: () => void;
  onCtaClick?: () => void;
}

export const Navbar = React.forwardRef<HTMLElement, NavbarProps>(
  (
    {
      className,
      logo = <Logo />,
      logoHref = "/",
      navigationLinks,
      signInText,
      signInHref,
      ctaText,
      ctaHref,
      onSignInClick,
      onCtaClick,
      ...props
    },
    ref,
  ) => {
    const t = useTranslations("Navbar");
    const iconCls = "h-5 w-5";

    const defaultNavigationLinks: NavbarNavLink[] = [
      { link: "/", label: t("home"), icon: <Home className={iconCls} /> },
      { link: "/about", label: t("about"), icon: <User className={iconCls} /> },
      {
        link: "/services",
        label: t("services"),
        icon: <Briefcase className={iconCls} />,
      },
      {
        link: "/projects",
        label: t("projects"),
        icon: <FileText className={iconCls} />,
      },
      {
        link: "/blog",
        label: t("blog"),
        icon: <BookOpen className={iconCls} />,
      },
      {
        link: "/contact",
        label: t("contact"),
        icon: <Mail className={iconCls} />,
      },
    ];

    const links = navigationLinks ?? defaultNavigationLinks;

    return (
      <header
        className={cn(
          "sticky top-0 z-50 w-full border-b backdrop-blur supports-backdrop-filter:bg-background/60 px-4 md:px-6 [&_*]:no-underline dark:bg-stone-950 bg-[#ffffff]",
          className,
        )}
        ref={ref}
        {...props}
      >
        <div className="container mx-auto flex h-16 max-w-screen-2xl items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="md:hidden">
              <NavMobile
                logo={logo}
                logoHref={logoHref}
                navigationLinks={links}
              />
            </div>

            <div className="flex items-center gap-6">
              <Link
                href={logoHref ?? "/"}
                className="flex items-center space-x-2 text-primary hover:text-primary/90 transition-colors cursor-pointer"
              >
                <div className="text-2xl">{logo}</div>
              </Link>

              <NavigationMenu className="hidden md:flex">
                <NavigationMenuList className="gap-1">
                  {links.map((item, index) => (
                    <NavigationMenuItem key={index}>
                      <Link
                        href={item.link}
                        className={cn(
                          "group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 cursor-pointer no-underline",
                          item.active
                            ? "bg-accent text-accent-foreground"
                            : "text-foreground/80 hover:text-foreground",
                        )}
                      >
                        {item.label}
                      </Link>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <CommandPalette />
            <div className="md:hidden">
              <SettingsSwitcher />
            </div>
          </div>
        </div>
      </header>
    );
  },
);

Navbar.displayName = "Navbar";

export { Logo };

export function NavbarComponent() {
  return <Navbar />;
}
