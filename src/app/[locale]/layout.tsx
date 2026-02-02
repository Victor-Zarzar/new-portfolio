import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import env from "@/env.mjs";
import { routing } from "@/i18n/routing";
import LayoutProvider from "../widgets/layout-provider/layout-provider";
import "./globals.css";

const JetBrains = JetBrains_Mono({ subsets: ["latin"] });

const translations: Record<
  string,
  { title: string; description: string; ogDescription: string }
> = {
  pt: {
    title: "Victor Zarzar | Desenvolvedor Front-end",
    description:
      "Desenvolvedor Front-end com experiência no desenvolvimento de aplicações modernas com foco em front-end, SEO, acessibilidade, segurança, performance e boas práticas. Atuação em projetos web e mobile.",
    ogDescription:
      "Portfólio profissional com projetos modernos e tecnologias atualizadas.",
  },
  en: {
    title: "Victor Zarzar | Front-end Developer",
    description:
      "Front-end Developer with experience in developing modern applications focused on front-end, SEO, accessibility, security, performance and best practices. Working on web and mobile projects.",
    ogDescription:
      "Professional portfolio with modern projects and updated technologies.",
  },
  es: {
    title: "Victor Zarzar | Desarrollador Front-end",
    description:
      "Desarrollador Front-end con experiencia en el desarrollo de aplicaciones modernas enfocado en front-end, SEO, accesibilidad, seguridad, rendimiento y buenas prácticas. Actuación en proyectos web y mobile.",
    ogDescription:
      "Portafolio profesional con proyectos modernos y tecnologías actualizadas.",
  },
};

const ogLocaleMap: Record<string, string> = {
  pt: "pt_BR",
  en: "en_US",
  es: "es_ES",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const meta = translations[locale] || translations.en;

  return {
    metadataBase: new URL(env.NEXT_PUBLIC_WEBSITE_URL),
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: meta.title,
      description: meta.ogDescription,
      url: `${env.NEXT_PUBLIC_WEBSITE_URL}/${locale}`,
      siteName: "Victor Zarzar | Front-end Developer",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
        },
      ],
      locale: ogLocaleMap[locale] ?? "en_US",
      type: "website",
    },
    alternates: {
      canonical: `/${locale}`,
      languages: {
        "pt-BR": "/pt",
        "en-US": "/en",
        "es-ES": "/es",
      },
    },
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale: string) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale} suppressHydrationWarning className="dark">
      <body className={JetBrains.className}>
        <NextIntlClientProvider>
          <LayoutProvider>{children}</LayoutProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
