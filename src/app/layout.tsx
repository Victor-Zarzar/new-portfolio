import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import LayoutProvider from "./components/Layout/Layout";
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';

const JetBrains = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio - Victor Zarzar",
  description: "Generated by create Victor Zarzar",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const locale = await getLocale();
  
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={JetBrains.className}>
        <NextIntlClientProvider messages={messages}>
          <LayoutProvider>
            {children}
          </LayoutProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}