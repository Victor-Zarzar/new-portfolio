import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({

  locales: ['en', 'pt-br'],

  defaultLocale: 'en'
});
 
export const config = {

  matcher: ['/', '/about', '/projects', '/contact', '/(en|pt-br)/:path*']
};