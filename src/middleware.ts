import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
    matcher: [
        '/',
        '/services',
        '/about',
        '/projects',
        '/articles',
        '/contact',
        '/privacypolicy',
        '/privacypolicy-apps',
        '/unauthorized',
        '/(en|pt|es)/:path*',
    ],
};
