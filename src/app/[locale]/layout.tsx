import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import env from "@/env.mjs";
import { routing } from "@/i18n/routing";
import LayoutProvider from "../widgets/layout-provider/layout-provider";
import "./globals.css";

const JetBrains = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_WEBSITE_URL),
  title: "Victor Zarzar | Software Developer",
  description:
    "Portfólio profissional com projetos modernos e stacks atualizadas.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  keywords: ["software developer", "portfolio", "nextjs", "react"],
  openGraph: {
    title: "Victor Zarzar | Software Developer",
    description: "Projetos, experiência e contato.",
    url: env.NEXT_PUBLIC_WEBSITE_URL,
    siteName: "Victor Zarzar Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};

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
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={JetBrains.className}>
        <NextIntlClientProvider>
          <LayoutProvider>{children}</LayoutProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
