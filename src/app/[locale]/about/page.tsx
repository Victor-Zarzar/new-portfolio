'use client';

import { TimelineLayout } from '@/app/features/timeline-layout/timeline-layout';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Fade } from 'react-awesome-reveal';

export default function About() {
    const t = useTranslations('About');

    return (
        <section className="rounded-lg p-6">
            <Fade>
                <header className="text-center mt-20 md:mt-36">
                    <h1 className="title-about mb-4 font-extrabold leading-10 tracking-tight text-3xl md:text-4xl">{t('h1')}</h1>
                </header>
            </Fade>
            <p className="text-sm leading-relaxed text-center max-w-3xl mx-auto md:text-2xl lg:text-2xl font-semibold tracking-tighter mt-10">
                {t('p')}
            </p>

            <TimelineLayout />

            <section className="rounded-lg p-6 mt-4">
                <Fade>
                    <header className="text-center mt-4">
                        <h2 className="title-about mb-4 font-extrabold leading-10 tracking-tight text-3xl md:text-4xl">{t('h2')}</h2>
                    </header>
                </Fade>

                <div className="flex flex-col items-center mt-10 space-y-5">
                    <div className="flex items-center">
                        <Image src="/en.svg" alt="us" width={20} height={20} priority className="h-3 w-3 md:w-7 md:h-7 mr-1" />
                        <span className="text-sm leading-relaxed md:text-2xl lg:text-2xl font-semibold tracking-tighter">{t('span1')}</span>
                    </div>

                    <div className="flex items-center">
                        <Image src="/pt.svg" alt="br" width={20} height={20} priority className="h-3 w-3 md:w-7 md:h-7 mr-1" />
                        <span className="text-sm leading-relaxed md:text-2xl lg:text-2xl font-semibold tracking-tighter">{t('span2')}</span>
                    </div>

                    <div className="flex items-center mb-20">
                        <Image src="/es.svg" alt="es" width={20} height={20} priority className="h-3 w-3 md:w-7 md:h-7 mr-1" />
                        <span className="text-sm leading-relaxed md:text-2xl lg:text-2xl font-semibold tracking-tighter">{t('span3')}</span>
                    </div>
                </div>
            </section>
        </section>
    );
}
