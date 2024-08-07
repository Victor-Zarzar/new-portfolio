import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
    locales: ['en', 'pt-BR'],

    defaultLocale: 'en',
});

export const config = {
    matcher: ['/', '/about', '/projects', '/contact', '/privacypolicy', '/privacypolicy-apps', '/(en|pt-BR)/:path*'],
};