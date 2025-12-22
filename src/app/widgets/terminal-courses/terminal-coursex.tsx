"use client";

import { getCoursesData } from "@/app/shared/data/getCoursesData";
import { Card } from "@/app/shared/ui/card";
import { Terminal } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";

export default function TerminalCourses() {
  const t = useTranslations("Courses");
  const courses = getCoursesData({ t });

  return (
    <main className="courses">
      <section className="col-span-4 mx-auto">
        <header className="h1 p-6">
          <Fade>
            <h1 className="title-projects mb-4 font-extrabold leading-10 tracking-tight text-3xl md:text-4xl text-center">
              {t("h1")}
            </h1>
          </Fade>
        </header>
      </section>

      <section className="p-4 flex flex-col gap-4 items-center mb-20 md:mb-32">
        <Card
          className="border border-neutral-700 dark:border-stone-200 bg-white dark:bg-stone-950 text-neutral-800
                    dark:text-neutral-200 rounded-lg shadow-lg w-full max-w-2xl mx-auto font-mono transition-transform duration-300
                    hover:scale-[1.02] hover:shadow-xl overflow-hidden"
        >
          <div className="flex items-center gap-2 bg-white dark:bg-stone-950 px-3 py-1 border-b border-neutral-700 dark:border-stone-200">
            <div className="flex gap-2">
              <span className="w-3 h-3 bg-red-500 rounded-full"></span>
              <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            </div>
            <span className="ml-3 text-sm md:text-base text-neutral-800 dark:text-neutral-200 flex items-center gap-1">
              <Terminal size={14} /> Terminal — Portfolio
            </span>
          </div>

          <div className="px-4 py-3 text-sm md:text-base">
            <span className="text-neutral-800 dark:text-neutral-200 font-bold">
             🧙‍♂️victorzarzar
            </span>
            <span className="text-green-700 dark:text-green-500">
              @debian
            </span>
            <span className="text-neutral-600 dark:text-neutral-400"> in </span>
            <span className="text-blue-500 dark:text-blue-400">new-portfolio</span>
            <span className="text-yellow-600 dark:text-yellow-400">
              {" "}
              v24.12.0
            </span>
            <span className="text-neutral-600 dark:text-neutral-500">
              {" "}
              took
            </span>
          </div>

          <div className="px-4 text-sm md:text-base text-neutral-800 dark:text-neutral-200">
            ${" "}
            <span className="text-neutral-800 dark:text-neutral-200">
              {t("p")}
            </span>
          </div>

          <div className="px-4 py-3">
            <ul className="space-y-1 text-xs md:text-base">
              {courses.map((course, index) => (
                <li key={index}>
                  <Link
                    href={course.url}
                    target="_blank"
                    className="hover:underline transition-colors"
                  >
                    {`[${index + 1}]`} {course.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Card>
      </section>
    </main>
  );
}
