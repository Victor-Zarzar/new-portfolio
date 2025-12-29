"use client";

import { useTranslations } from "next-intl";
import { Fade } from "react-awesome-reveal";
import SkillOutline, { skills } from "@/app/widgets/skills-showcase/IconSkills";

export default function Skills() {
  const t = useTranslations("Skills");

  return (
    <section className="space-y-6 max-w-lg md:max-w-3xl mt-28 mb-16">
      <header className="text-center mb-20">
        <Fade>
          <h1 className="title-skills mb-4 font-extrabold leading-10 tracking-tight text-3xl md:text-4xl">
            {t("h1")}
          </h1>
        </Fade>
        <p className="text-sm leading-relaxed mx-auto md:text-2xl lg:text-2xl font-semibold tracking-tighter">
          {t("p")}
        </p>
      </header>
      <div className="gap-3.5 p-4 sm:p-0 w-96 sm:w-full sm:gap-2 md:gap-4 lg:gap-5 grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {skills.map((skill) => (
          <article key={skill.text} className="flex flex-col items-center">
            <SkillOutline Icon={skill.icon} text={skill.text} />
          </article>
        ))}
      </div>
    </section>
  );
}
