import { routing } from '@/i18n/routing';
import type { Metadata } from 'next';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { JetBrains_Mono } from 'next/font/google';
import LayoutProvider from '../widgets/layout-provider/layout-provider';
import NotFound404 from './[rest...]/page';
import './globals.css';

const JetBrains = JetBrains_Mono({ subsets: ['latin'] });

export const metadata: Metadata = {
    metadataBase: new URL('https://www.victorzarzar.com.br'),
    title: 'Victor Zarzar | Full Stack Developer',
    description: 'Portfólio profissional com projetos modernos e stacks atualizadas.',
    keywords: ['full stack developer', 'portfolio', 'nextjs', 'react'],
    openGraph: {
        title: 'Victor Zarzar | Full Stack Developer',
        description: 'Projetos, experiência e contato.',
        url: 'https://www.victorzarzar.com.br',
        siteName: 'Victor Zarzar Portfolio',
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
            },
        ],
    },
};

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    if (!hasLocale(routing.locales, locale)) {
        return <NotFound404 />;
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
