"use client";

import { Menu, X } from "lucide-react";
import * as React from "react";
import { useState } from "react";
import { cn } from "@/app/shared/lib/utils";
import type { NavbarNavLink, NavMobileProps } from "@/app/shared/types/main";
import { Button } from "@/app/shared/ui/button";
import { Link } from "@/i18n/navigation";

export const NavMobile = React.forwardRef<HTMLDivElement, NavMobileProps>(
  ({ navigationLinks }, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
      <>
        <Button
          onClick={toggleMenu}
          className="group h-9 w-9 hover:bg-accent hover:text-accent-foreground"
          size="icon"
          variant="ghost"
          aria-label="Toggle menu"
        >
          <Menu className="h-5 w-5" />
        </Button>

        <div
          className={cn(
            "fixed inset-0 z-50 dark:bg-stone-950 bg-[#ffffff] backdrop-blur-md transition-all duration-300",
            isOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none",
          )}
          onClick={closeMenu}
          aria-hidden="true"
        />

        <div
          ref={ref}
          className={cn(
            "fixed left-1/2 -translate-x-1/2 z-[60] w-[min(90vw,400px)] bg-background/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-border/50 dark:bg-stone-950 bg-[#ffffff] transition-all duration-300 ease-out overflow-hidden",
            isOpen
              ? "top-20 opacity-100 scale-100"
              : "top-16 opacity-0 scale-95 pointer-events-none",
          )}
        >
          <div className="flex items-center justify-between px-5 py-4 border-b border-border/50">
            <div className="flex items-center gap-2">
              <Menu className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium text-muted-foreground">
                Menu
              </span>
            </div>
            <Button
              onClick={closeMenu}
              size="icon"
              variant="ghost"
              className="h-8 w-8 hover:bg-accent rounded-full"
              aria-label="Close menu"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          <nav className="py-3">
            <ul className="space-y-0.5">
              {navigationLinks.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.link}
                    onClick={closeMenu}
                    className={cn(
                      "flex items-center gap-3 px-5 py-3.5 text-base font-normal transition-all duration-200 cursor-pointer no-underline group relative",
                      "hover:bg-accent/50",
                      item.active
                        ? "text-foreground font-medium"
                        : "text-foreground/70",
                    )}
                  >
                    {item.icon ? (
                      <span
                        className={cn(
                          "shrink-0",
                          item.active ? "[&_*]:text-primary" : "",
                        )}
                      >
                        {item.icon}
                      </span>
                    ) : null}

                    <span className="flex-1">{item.label}</span>

                    {item.active && (
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-primary rounded-r-full" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
        </div>
      </>
    );
  },
);

NavMobile.displayName = "NavMobile";
