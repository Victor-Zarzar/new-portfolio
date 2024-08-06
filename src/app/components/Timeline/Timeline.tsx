import React from 'react';
import { Timeline } from 'rsuite';
import { Fade } from 'react-awesome-reveal';
import { FaReact, FaBug } from 'react-icons/fa';
import { IoIosSchool } from 'react-icons/io';
import { useTranslations } from 'next-intl';

export default function TimelineComponent() {
    const t = useTranslations('Experiences');

    return (
        <>
            <div className="mx-auto mt-28 mb-28">
                <Fade>
                    <h1 className="title-about mb-4 font-extrabold leading-10 tracking-tight text-3xl md:text-4xl text-center mt-20 md:mt-36">
                        {t('h1')}
                    </h1>
                </Fade>
            </div>
            <div className="timeline flex justify-center items-center mt-8 mb-16">
                <Timeline endless className="custom-timeline max-w-3xl">
                    <Timeline.Item dot={<FaReact className="pr-1" />} className="text-sm md:text-xl lg:text-2xl">
                        <p>{t('p1')}</p>
                        <p>XLabs Security</p>
                        <p>{t('p2')}</p>
                        <p>{t('p3')}</p>
                    </Timeline.Item>
                    <Timeline.Item dot={<FaBug className="pr-1.5" />} className="text-sm md:text-xl lg:text-2xl">
                        <p>{t('p4')}</p>
                        <p>Freelance</p>
                        <p>{t('p5')}</p>
                        <p>{t('p6')}</p>
                    </Timeline.Item>
                    <Timeline.Item dot={<IoIosSchool className="pr-1" />} className="text-sm md:text-xl lg:text-2xl">
                        <p>{t('p7')}</p>
                        <p>{t('p8')}</p>
                    </Timeline.Item>
                    <Timeline.Item dot={<IoIosSchool className="pr-1" />} className="text-sm md:text-xl lg:text-2xl">
                        <p>{t('p9')}</p>
                        <p>{t('p10')}</p>
                    </Timeline.Item>
                </Timeline>
            </div>
        </>
    );
}