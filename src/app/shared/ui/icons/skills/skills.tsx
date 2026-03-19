"use client";

import { useTranslations } from "next-intl";
import FadeWrapper from "@/app/shared/wrapper/fade-wrapper";
import CardSkills from "@/app/widgets/card-skills/card-skills";

export default function Skills() {
  const t = useTranslations("Skills");

  return (
    <section className="space-y-6 max-w-lg md:max-w-5xl mt-28 mb-16">
      <header className="text-center mb-20">
        <FadeWrapper>
          <h1 className="title-skills mb-4 font-extrabold leading-10 tracking-tight text-3xl md:text-4xl">
            {t("h1")}
          </h1>
        </FadeWrapper>
        <p className="text-sm leading-relaxed mx-auto md:text-2xl lg:text-2xl font-semibold tracking-tighter">
          {t("p")}
        </p>
      </header>
      <CardSkills />
    </section>
  );
}
