"use client";

import { useTranslations } from "next-intl";
import { Fade } from "react-awesome-reveal";
import ContactForm from "@/app/features/contact-form/contact-form";

export default function Contact() {
  const t = useTranslations("Contact");

  return (
    <section className="col-span-4 mx-auto p-6 md:min-h-screen">
      <Fade>
        <header className="text-center mt-20 md:mt-36">
          <h1 className="title-projects mb-4 font-extrabold leading-10 tracking-tight text-3xl md:text-4xl">
            {t("h1")}
          </h1>
        </header>
      </Fade>

      <div className="mt-10 md:mt-20 max-w-lg mx-auto mb-40 md:mb-36">
        <ContactForm />
      </div>
    </section>
  );
}
