import {getRequestConfig} from 'next-intl/server';
import { routing } from './routing';
import NotFound404 from '@/app/[locale]/[rest...]/page';

export default getRequestConfig(async ({locale}) => {
  if (!routing.locales.includes(locale as any)) NotFound404();
 
  return {
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});