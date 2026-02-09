import { HiArrowRight } from "react-icons/hi";
import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";

export default async function SeeAllProjects() {
  const t = await getTranslations("Projects");

  return (
    <div className="pt-6 flex">
      <Link
        href="https://github.com/Victor-Zarzar?tab=repositories"
        target="_blank"
        rel="noreferrer"
        className="
          group inline-flex items-center gap-2
          text-sm font-medium
          text-neutral-600 dark:text-neutral-400
          hover:text-neutral-900 dark:hover:text-neutral-100
          transition-colors"
      >
        <span>{t("seeAll")}</span>

        <HiArrowRight
          className="
            transition-transform
            group-hover:translate-x-1"
        />
      </Link>
    </div>
  );
}
