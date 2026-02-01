"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { Bounce } from "react-awesome-reveal";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiArrowCircleDown } from "react-icons/hi";
import { getProfileData } from "@/app/shared/data/getProfileData";
import { Button } from "@/app/shared/ui/button";
import { Skeleton } from "@/app/shared/ui/skeleton";

const ICON_MAP = {
  github: FaGithub,
  linkedin: FaLinkedin,
};

export default function Header() {
  const t = useTranslations("Header");
  const [isLoaded, setIsLoaded] = useState(false);
  const profile = getProfileData();

  return (
    <>
      <header className="flex flex-col text-center items-center justify-center py-0 sm:py-32 md:py-20 md:flex-row md:space-x-4 md:text-left">
        <section className="md:mt-2 md:w-1/2">
          <div className="w-40 h-40 md:w-72 md:h-72 rounded-full mb-4 mx-auto mt-2 relative overflow-hidden">
            {!isLoaded && (
              <Skeleton className="w-full h-full rounded-full absolute inset-0 z-0" />
            )}
            <Image
              src={profile.image.src}
              alt={profile.image.alt}
              fill
              sizes={profile.image.sizes}
              priority={profile.image.priority}
              quality={profile.image.quality}
              onLoad={() => setIsLoaded(true)}
              className={`rounded-full object-cover transition-opacity duration-500 ${
                isLoaded ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>
        </section>

        <section className="md:mt-2 md:w-3/5 md:ml-8">
          {!isLoaded ? (
            <div className="space-y-4">
              <Skeleton className="h-12 w-3/4 mx-auto md:mx-0 mt-6 md:mt-0" />
              <Skeleton className="h-6 w-full mt-4" />
              <Skeleton className="h-6 w-4/5 mx-auto md:mx-0 mb-6" />
              <div className="flex space-x-1 justify-center md:justify-start">
                <Skeleton className="h-10 w-24" />
                <Skeleton className="h-10 w-28" />
              </div>
            </div>
          ) : (
            <>
              <Bounce>
                <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-5xl">
                  {t("h1")}
                </h1>

                <p className="text-lg mt-4 mb-6 md:text-2xl">
                  <span className="font-semibold text-gray-500 whitespace-pre-line">
                    {t("span")}
                  </span>
                </p>
              </Bounce>

              <nav className="mt-4 flex flex-col items-center gap-3 md:flex-row md:items-start md:justify-start">
                {profile.links.map((link) => {
                  const Icon = ICON_MAP[link.icon];

                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="w-32"
                    >
                      <Button
                        variant="outline"
                        className="w-full px-2 md:px-4 transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg dark:hover:shadow-stone-600
                        border-black dark:border-gray-400 cursor-pointer"
                      >
                        <Icon className="mr-1" />
                        {link.label}
                      </Button>
                    </Link>
                  );
                })}
              </nav>
            </>
          )}
        </section>
      </header>

      <div className="flex items-center justify-center mt-20 md:mt-10">
        <HiArrowCircleDown size={40} className="animate-bounce" />
      </div>
    </>
  );
}
