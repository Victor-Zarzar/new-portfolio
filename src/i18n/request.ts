import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';
import type { Locale } from '@/app/types/main';

export default getRequestConfig(async ({ requestLocale }) => {
    let locale = requestLocale as unknown as Locale;

    if (!locale || !routing.locales.includes(locale)) {
        locale = routing.defaultLocale as Locale;
    }

    return {
        locale,
        messages: (await import(`../../messages/${locale}.json`)).default,
    };
});