'use client';

import { cn } from '@/app/shared/lib/utils';
import { Button } from '@/app/shared/ui//button';
import { CookieIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

export default function CookieConsentComponent({ demo = false, onAcceptCallback = () => {}, onDeclineCallback = () => {} }) {
    const [isOpen, setIsOpen] = useState(false);
    const [hide, setHide] = useState(false);

    const t = useTranslations('Cookies');

    function setCookie(name: string, value: string, days = 180, options: { additional?: string } = {}) {
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        const expires = `expires=${date.toUTCString()}`;
        const defaultOptions = `Secure; SameSite=Strict; ${expires}`;
        document.cookie = `${name}=${value}; ${defaultOptions} ${options.additional || ''}`;
    }

    function accept() {
        setIsOpen(false);
        setCookie('cookieConsent', 'true');
        setTimeout(() => {
            setHide(true);
        }, 180);
        onAcceptCallback();
    }

    function decline() {
        setIsOpen(false);
        setCookie('cookieConsent', 'declined');
        localStorage.setItem('cookieConsent', 'declined');
        setTimeout(() => {
            setHide(true);
        }, 180);
        onDeclineCallback();
    }

    useEffect(() => {
        try {
            setIsOpen(true);
            const cookies = document.cookie;
            if (cookies.includes('cookieConsent=true') || cookies.includes('cookieConsent=declined')) {
                if (!demo) {
                    setIsOpen(false);
                    setTimeout(() => {
                        setHide(true);
                    }, 700);
                }
            }
        } catch (e) {
            toast.error(t('error'));
        }
    }, []);

    return (
        <div
            className={cn(
                'fixed z-[200] bottom-0 right-0 sm:right-4 sm:bottom-4 w-full sm:max-w-md duration-700',
                !isOpen ? 'transition-[opacity,transform] translate-y-8 opacity-0' : 'transition-[opacity,transform] translate-y-0 opacity-100',
                hide && 'hidden',
            )}
        >
            <div className="dark:bg-stone-950 bg-gray-50 border-black dark:border-gray-200 rounded-md m-3 border shadow-lg">
                <div className="grid gap-2">
                    <div className="border-b h-14 flex items-center justify-between p-4 border-black dark:border-gray-200">
                        <h1 className="text-lg font-medium"> {t('title')}</h1>
                        <CookieIcon className="h-[1.2rem] w-[1.2rem]" />
                    </div>
                    <div className="p-4">
                        <p className="text-sm font-normal text-start">
                            {t('message')} <br />
                            <Link href="/privacypolicy" className="dark:text-blue-400 text-blue-600 underline">
                                {t('privacyLink')}
                            </Link>
                        </p>
                    </div>
                    <div className="flex gap-2 p-4 py-5 border-t dark:bg-background/20 border-black dark:border-gray-200">
                        <Button onClick={accept} className="w-full cursor-pointer">
                            {t('accept')}
                        </Button>
                        <Button onClick={decline} className="w-full bg-gray-300 hover:bg-gray-400 cursor-pointer" variant="secondary">
                            {t('decline')}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
