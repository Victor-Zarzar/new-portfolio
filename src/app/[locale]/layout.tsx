import type { Locale } from '@/app/types/main';
import { routing } from '@/i18n/routing';
import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { JetBrains_Mono } from 'next/font/google';
import LayoutProvider from '../components/Layout/Layout';
import NotFound404 from './[rest...]/page';
import './globals.css';

const JetBrains = JetBrains_Mono({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Portfolio - Victor Zarzar',
    description: 'Generated by create Victor Zarzar',
};

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: { locale: Locale } }) {
    const { locale } = await Promise.resolve(params);

    if (!routing.locales.includes(locale)) {
        return <NotFound404 />;
    }

    const messages = await getMessages();

    return (
        <html lang={locale} suppressHydrationWarning className="dark">
            <head>
                <link rel="icon" href="/favicon.ico" />
            </head>
            <body className={JetBrains.className}>
                <NextIntlClientProvider messages={messages}>
                    <LayoutProvider>{children}</LayoutProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
