import env from "@/env.mjs";
import { routing } from "@/i18n/routing";
import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { JetBrains_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import LayoutProvider from "../widgets/layout-provider/layout-provider";
import "./globals.css";

const JetBrains = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
	metadataBase: new URL(env.NEXT_PUBLIC_WEBSITE_URL),
	title: "Victor Zarzar | Full Stack Developer",
	description:
		"Portfólio profissional com projetos modernos e stacks atualizadas.",
	keywords: ["full stack developer", "portfolio", "nextjs", "react"],
	openGraph: {
		title: "Victor Zarzar | Full Stack Developer",
		description: "Projetos, experiência e contato.",
		url: "https://www.victorzarzar.com.br",
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
	return routing.locales.map((locale) => ({ locale }));
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
