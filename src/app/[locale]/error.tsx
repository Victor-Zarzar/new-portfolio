"use client";

import { useTranslations } from "next-intl";
import { Button } from "@/app/shared/ui/button";
import { Link } from "@/i18n/navigation";

export default function ErrorPage() {
  const t = useTranslations("Error");

  return (
    <main className="mx-auto mb-16 flex max-w-96 md:max-w-3xl flex-col items-start justify-center min-h-screen">
      <h1 className="mb-4 font-bold tracking-tight text-4xl md:text-5xl lg:text-7xl">
        {t("title")}
      </h1>
      <p className="mt-4 text-lg md:text-xl font-light text-gray-500 dark:text-gray-400">
        {t("description")}
      </p>
      <Link href="/">
        <Button className="mt-6 px-4 py-2 md:px-6 md:py-3 font-semibold">
          {t("return-home")}
        </Button>
      </Link>
    </main>
  );
}
