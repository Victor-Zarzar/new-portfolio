'use client';

import useDisableDevTools from '@/app/shared/hooks/disable-dev';

export default function DevToolsGuard() {
    useDisableDevTools();
    return null;
}
