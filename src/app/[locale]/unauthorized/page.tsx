import { getTranslations } from "next-intl/server";
import FadeWrapper from "@/app/shared/wrapper/fade-wrapper";

export default async function UnauthorizedPage() {
  const t = await getTranslations("Unauthorized");

  return (
    <main className="flex items-center justify-center min-h-screen">
      <section className="text-center">
        <div className="max-w-md mx-auto px-4 py-8">
          <FadeWrapper>
            <h1 className="text-4xl md:text-7xl lg:text-9xl font-extrabold text-primary-600 dark:text-primary-500">
              403
            </h1>
            <h1 className="text-4xl md:text-7xl font-extrabold text-primary-600 dark:text-primary-500">
              {t("title")}
            </h1>
            <p className="mt-4 text-lg md:text-xl font-light text-gray-500 dark:text-gray-400">
              {t("p")}
            </p>
          </FadeWrapper>
        </div>
      </section>
    </main>
  );
}
