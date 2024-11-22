'use client';
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';
import { Bounce } from 'react-awesome-reveal';

export default function NotFound404() {
    const t = useTranslations('NotFound');

    return (
        <main className="flex items-center justify-center min-h-screen">
            <section className="text-center">
                <div className="max-w-md mx-auto px-4 py-8">
                    <Bounce>
                        <h1 className="text-4xl md:text-7xl lg:text-9xl font-extrabold text-primary-600 dark:text-primary-500">404</h1>
                        <p className="mt-4 text-lg md:text-xl font-light text-gray-500 dark:text-gray-400">{t('p')}</p>
                    </Bounce>
                    <Link href="/">
                        <Button className="mt-6 px-4 py-2 md:px-6 md:py-3 font-semibold">{t('button')}</Button>
                    </Link>
                </div>
            </section>
        </main>
    );
}