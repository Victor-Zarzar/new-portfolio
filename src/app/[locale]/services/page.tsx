"use client";

import { useTranslations } from "next-intl";
import { Fade } from "react-awesome-reveal";
import { getServicesData } from "@/app/shared/data/getServicesData";
import type { Services } from "@/app/shared/types/main";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/shared/ui/card";

export default function ServicesPage() {
  const t = useTranslations("Services");
  const services: Services[] = getServicesData({ t });

  return (
    <main className="services">
      <section className="col-span-4 mx-auto">
        <header className="h1 p-6">
          <Fade>
            <h1 className="title-projects mb-4 font-extrabold leading-10 tracking-tight text-3xl md:text-4xl text-center mt-6 md:mt-10">
              {t("h1")}
            </h1>
          </Fade>
        </header>
      </section>

      <section className="p-4 flex flex-col gap-4 items-center min-h-screen mb-12 md:mb-0">
        {services.map((item) => (
          <Card key={item.id} className="w-4/5 max-w-lg mb-4">
            <CardHeader>
              <CardTitle className="text-sm sm:text-2xl">
                {item.title}
              </CardTitle>
              <CardDescription className="text-xs sm:text-base text-neutral-600 dark:text-neutral-400">
                {item.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p
                className="text-sm font-medium
              text-neutral-600 dark:text-neutral-400
              transition-colors"
              >
                {item.p}
              </p>
            </CardContent>
          </Card>
        ))}
      </section>
    </main>
  );
}
