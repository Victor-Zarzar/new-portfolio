'use client';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { CookieIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

export default function CookieConsentComponent({ demo = false, onAcceptCallback = () => {}, onDeclineCallback = () => {} }) {
    const [isOpen, setIsOpen] = useState(false);
    const [hide, setHide] = useState(false);

    const t = useTranslations('Cookies');

    function setCookie(name: string, value: string, options: { additional?: string } = {}) {
        const defaultOptions = 'Secure; SameSite=Strict; expires=Fri, 31 Dec 9999 23:59:59 GMT';
        document.cookie = `${name}=${value}; ${defaultOptions} ${options.additional || ''}`;
    }

    function accept() {
        setIsOpen(false);
        setCookie('cookieConsent', 'true');
        setTimeout(() => {
            setHide(true);
        }, 700);
        onAcceptCallback();
    }

    function decline() {
        setIsOpen(false);
        setCookie('cookieConsent', 'declined');
        localStorage.setItem('cookieConsent', 'declined');
        setTimeout(() => {
            setHide(true);
        }, 700);
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
            <div className="dark:bg-stone-900 bg-gray-50 rounded-md m-3 border border-border shadow-lg">
                <div className="grid gap-2">
                    <div className="border-b border-border h-14 flex items-center justify-between p-4">
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
                    <div className="flex gap-2 p-4 py-5 border-t border-border dark:bg-background/20">
                        <Button onClick={accept} className="w-full">
                            {t('accept')}
                        </Button>
                        <Button onClick={decline} className="w-full bg-gray-300 hover:bg-gray-400" variant="secondary">
                            {t('decline')}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
