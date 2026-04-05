import { getTranslations } from "next-intl/server";
import { TwoFactorForm } from "@/app/features/two-factor-form/two-factor-form";
import FadeWrapper from "@/app/shared/wrapper/fade-wrapper";

export default async function TwoFactorPage() {
  const t = await getTranslations("twoFactor");

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      <div className="text-center mb-10 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-muted-foreground mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          {t("secureNote")}
        </div>
        <FadeWrapper>
          <h1 className="text-4xl font-bold tracking-tight">{t("title")}</h1>
        </FadeWrapper>
        <p className="text-muted-foreground text-sm max-w-sm mx-auto leading-relaxed">
          {t("subtitle")}
        </p>
      </div>
      <TwoFactorForm />
      <p className="mt-8 text-xs text-muted-foreground">{t("codeExpires")}</p>
    </section>
  );
}
