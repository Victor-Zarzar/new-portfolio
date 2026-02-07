"use client";

import {
  BookOpen,
  Briefcase,
  FolderKanban,
  Home,
  Mail,
  Settings,
  User,
} from "lucide-react";
import { useTranslations } from "next-intl";
import * as React from "react";
import type { CommandLink } from "@/app/shared/types/main";
import { Button } from "@/app/shared/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/app/shared/ui/command";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/app/shared/ui/dialog";
import { useRouter } from "@/i18n/navigation";

export default function CommandPalette() {
  const t = useTranslations("CommandPalette");
  const router = useRouter();

  const [isOpen, setIsOpen] = React.useState(false);

  const cls = "mr-0.5 h-4 w-4";

  const links: CommandLink[] = [
    {
      id: "home",
      labelKey: "nav.home",
      href: "/",
      icon: <Home className={cls} />,
    },
    {
      id: "about",
      labelKey: "nav.about",
      href: "/about",
      icon: <User className={cls} />,
    },
    {
      id: "services",
      labelKey: "nav.services",
      href: "/services",
      icon: <Briefcase className={cls} />,
    },
    {
      id: "projects",
      labelKey: "nav.projects",
      href: "/projects",
      icon: <FolderKanban className={cls} />,
    },
    {
      id: "blog",
      labelKey: "nav.blog",
      href: "/blog",
      icon: <BookOpen className={cls} />,
    },
    {
      id: "contact",
      labelKey: "nav.contact",
      href: "/contact",
      icon: <Mail className={cls} />,
    },
  ];

  React.useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (
        (event.key === "k" && (event.metaKey || event.ctrlKey)) ||
        (event.code === "scape" && isOpen)
      ) {
        event.preventDefault();

        setIsOpen(!isOpen);
      }
    }
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  const go = (href: string) => {
    setIsOpen(false);
    router.push(href);
  };

  return (
    <>
      <Button
        type="button"
        variant="outline"
        size="sm"
        className="hidden h-9 w-65 justify-start gap-2 px-3 text-sm md:flex border-black dark:border-gray-400"
        onClick={() => setIsOpen(true)}
      >
        <span className="text-muted-foreground text-xs">
          {t("pressToNavigate")}
        </span>
        <span className="ml-auto flex items-center gap-1">
          <kbd
            className="pointer-events-none inline-flex h-5 select-none items-center gap-1
            rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground"
          >
            <span className="text-[11px]">⌘</span>K
          </kbd>
        </span>
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="p-0 overflow-hidden">
          <DialogTitle className="sr-only">{t("command.navigate")}</DialogTitle>
          <DialogDescription className="sr-only">
            {t("command.description")}
          </DialogDescription>
          <Command>
            <CommandInput placeholder={t("searchPlaceholder")} />
            <CommandList>
              <CommandEmpty>{t("command.empty")}</CommandEmpty>

              <CommandGroup heading={t("command.navigate")}>
                {links.map((item) => (
                  <CommandItem
                    key={item.id}
                    value={`${t(item.labelKey)} ${item.keywords ?? ""}`}
                    onSelect={() => go(item.href)}
                  >
                    {item.icon}
                    {t(item.labelKey)}
                  </CommandItem>
                ))}
              </CommandGroup>

              <CommandSeparator />

              <CommandGroup heading={t("command.settings")}>
                <CommandItem
                  onSelect={() => {
                    setIsOpen(false);
                    window.dispatchEvent(new CustomEvent("app:open-settings"));
                  }}
                >
                  <Settings className={cls} />
                  {t("nav.settings")}
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </DialogContent>
      </Dialog>
    </>
  );
}
