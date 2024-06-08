import {getRequestConfig} from 'next-intl/server';
import NotFound404 from './app/[locale]/[rest...]/page';
 
const locales = ['en', 'pt-br'];
 
export default getRequestConfig(async ({locale}) => {

  if (!locales.includes(locale as any)) NotFound404();
 
  return {
    messages: (await import(`../messages/${locale}.json`)).default
  };
});