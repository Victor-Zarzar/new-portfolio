'use client';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { useTranslations } from 'next-intl';
import React from 'react';
import { Fade } from 'react-awesome-reveal';

export default function ServicesPage() {
    const t = useTranslations('Services');

    return (
        <main className="services">
            <section className="col-span-4 mx-auto">
                <header className="h1 p-6">
                    <Fade>
                        <h1 className="title-projects mb-4 font-extrabold leading-10 tracking-tight text-3xl md:text-4xl text-center mt-20 md:mt-36">
                            {t('h1')}
                        </h1>
                    </Fade>
                </header>
            </section>

            <section className="p-4 flex flex-col gap-4 items-center min-h-screen mb-10 md:mb-0">
                <Card
                    className="w-full max-w-md font-medium transition-colors 
            focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring border border-input mb-4 
            bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground hover:-translate-y-1 dark:bg-transparent dark:border-gray-200"
                >
                    <CardHeader>
                        <CardTitle>{t('cardtitle1')}</CardTitle>
                        <CardDescription>{t('carddescription1')}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className='text-sm md:text-xl'>{t('p1')}</p>
                    </CardContent>
                </Card>

                <Card
                    className="w-full max-w-md font-medium transition-colors 
            focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring border border-input mb-4 
            bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground hover:-translate-y-1 dark:bg-transparent dark:border-gray-200"
                >
                    <CardHeader>
                        <CardTitle>{t('cardtitle2')}</CardTitle>
                        <CardDescription>{t('carddescription2')}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className='text-sm md:text-xl'>{t('p2')}</p>
                    </CardContent>
                </Card>

                <Card
                    className="w-full max-w-md font-medium transition-colors 
            focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring border border-input 
            bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground hover:-translate-y-1 dark:bg-transparent dark:border-gray-200"
                >
                    <CardHeader>
                        <CardTitle>{t('cardtitle3')}</CardTitle>
                        <CardDescription>{t('carddescription3')}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className='text-sm md:text-xl'>{t('p3')}</p>
                    </CardContent>
                </Card>
            </section>
        </main>
    );
}
