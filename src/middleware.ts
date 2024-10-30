import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
    matcher: ['/', '/services', '/about', '/projects', '/contact', '/privacypolicy', '/privacypolicy-apps', '/(en|pt|es)/:path*'],
};