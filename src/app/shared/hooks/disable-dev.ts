'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useRef } from 'react';

export default function useDisableDevTools() {
    const router = useRouter();
    const pathname = usePathname();
    const redirectedRef = useRef(false);

    useEffect(() => {
        const preventKeys = (e: KeyboardEvent) => {
            // Prevent DevTools keys
            if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && ['I', 'J', 'C'].includes(e.key)) || (e.ctrlKey && e.key === 'U')) {
                e.preventDefault();

                // Redirects only when the key is pressed
                if (!redirectedRef.current && pathname !== '/unauthorized') {
                    redirectedRef.current = true;
                    router.push('/unauthorized');
                }
            }
        };

        const preventContextMenu = (e: MouseEvent) => {
            e.preventDefault();

            // Optional: redirect also in the context menu
            if (!redirectedRef.current && pathname !== '/unauthorized') {
                redirectedRef.current = true;
                router.push('/unauthorized');
            }
        };

        // Controlled via environment variable
        const shouldDisableDevTools = process.env.NEXT_PUBLIC_DISABLE_DEVTOOLS === 'true';

        if (shouldDisableDevTools) {
            document.addEventListener('keydown', preventKeys);
            document.addEventListener('contextmenu', preventContextMenu);
        }

        return () => {
            document.removeEventListener('keydown', preventKeys);
            document.removeEventListener('contextmenu', preventContextMenu);
        };
    }, [router, pathname]);

    // Reset the flag when leaving the unauthorized page.
    useEffect(() => {
        if (pathname !== '/unauthorized') {
            redirectedRef.current = false;
        }
    }, [pathname]);
}
