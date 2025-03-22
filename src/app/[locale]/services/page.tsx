'use client';

import { type CardItemType } from '@/app/shared/types/main';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/shared/ui/card';
import { useTranslations } from 'next-intl';
import { Fade } from 'react-awesome-reveal';

export default function ServicesPage() {
    const t = useTranslations('Services');

    const CardServicesData: CardItemType[] = [
        {
            id: 1,
            title: t('cardtitle1'),
            description: t('carddescription1'),
            p: t('p1'),
        },
        {
            id: 2,
            title: t('cardtitle2'),
            description: t('carddescription2'),
            p: t('p2'),
        },
        {
            id: 3,
            title: t('cardtitle3'),
            description: t('carddescription3'),
            p: t('p3'),
        },
    ];

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
                {CardServicesData.map((item) => (
                    <Card
                        key={item.id}
                        className="w-3/4 max-w-md mb-4 bg-transparent shadow-sm 
                        hover:-translate-y-1 dark:bg-transparent border-black dark:border-gray-200"
                    >
                        <CardHeader>
                            <CardTitle className="text-sm sm:text-2xl">{item.title}</CardTitle>
                            <CardDescription className="text-xs sm:text-xl">{item.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm md:text-xl">{item.p}</p>
                        </CardContent>
                    </Card>
                ))}
            </section>
        </main>
    );
}
