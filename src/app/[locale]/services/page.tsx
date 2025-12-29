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
            <h1 className="title-projects mb-4 font-extrabold leading-10 tracking-tight text-3xl md:text-4xl text-center mt-20 md:mt-36">
              {t("h1")}
            </h1>
          </Fade>
        </header>
      </section>

      <section className="p-4 flex flex-col gap-4 items-center min-h-screen mb-12 md:mb-0">
        {services.map((item) => (
          <Card
            key={item.id}
            className="w-3/4 max-w-md mb-4 transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg dark:hover:shadow-stone-600 
                        border-black dark:border-gray-400 cursor-pointer"
          >
            <CardHeader>
              <CardTitle className="text-sm sm:text-2xl">
                {item.title}
              </CardTitle>
              <CardDescription className="text-xs sm:text-xl">
                {item.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm md:text-xl">{item.p}</p>
            </CardContent>
          </Card>
        ))}
      </section>
    </main>
  );
}
