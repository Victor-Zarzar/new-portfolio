'use client';
import React from 'react';
import Image from 'next/image';
import { Fade } from 'react-awesome-reveal';
import TimelineComponent from '@/app/components/Timeline/Timeline';
import { useTranslations } from 'next-intl';

export default function About() {
    const t = useTranslations('About');

    return (
        <div className="rounded-lg p-6">
            <Fade>
                <h1 className="title-about mb-4 font-extrabold leading-10 tracking-tight text-3xl md:text-4xl text-center mt-20 md:mt-36">
                    {t('h1')}
                </h1>
            </Fade>
            <p className="text-sm leading-relaxed text-center max-w-3xl mx-auto md:text-2xl lg:text-2xl font-semibold tracking-tighter mt-10">
                {t('p')}
            </p>
            <div className="timeline">
                <TimelineComponent />
            </div>
            <div className="rounded-lg p-6 mt-4">
                <Fade>
                    <h2 className="title-about mb-4 font-extrabold leading-10 tracking-tight text-3xl md:text-4xl text-center mt-4">{t('h2')}</h2>
                </Fade>
                <div className="flex">
                    <div className="flex items-center mx-auto mt-10">
                        <Image src="/us.png" alt="us" width={20} height={20} priority className="h-3 w-3 md:w-7 md:h-7 mr-1" />
                        <span className="text-sm leading-relaxed md:text-2xl lg:text-2xl font-semibold tracking-tighter">{t('span1')}</span>
                    </div>
                </div>
                <div className="flex">
                    <div className="flex items-center mx-auto mt-5">
                        <Image src="/br.png" alt="br" width={20} height={20} priority className="h-3 w-3 md:w-7 md:h-7 mr-1" />
                        <span className="text-sm leading-relaxed md:text-2xl lg:text-2xl font-semibold tracking-tighter">{t('span2')}</span>
                    </div>
                </div>
                <div className="flex mb-20">
                    <div className="flex items-center mx-auto mt-5">
                        <Image src="/es.png" alt="br" width={20} height={20} priority className="h-3 w-3 md:w-7 md:h-7 mr-1" />
                        <span className="text-sm leading-relaxed md:text-2xl lg:text-2xl font-semibold tracking-tighter">{t('span3')}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}