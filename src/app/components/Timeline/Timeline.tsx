'use client';
import { useTranslations } from 'next-intl';
import { Fade } from 'react-awesome-reveal';
import { FaBug, FaReact } from 'react-icons/fa';
import { IoIosSchool } from 'react-icons/io';
import { Timeline } from 'rsuite';

export default function TimelineComponent() {
    const t = useTranslations('Experiences');

    return (
        <section className="mx-auto mt-28 mb-28 max-w-3xl">
            <Fade>
                <h1 className="title-about mb-4 font-extrabold leading-10 tracking-tight text-3xl md:text-4xl text-center mt-20 md:mt-36">
                    {t('h1')}
                </h1>
            </Fade>

            <div className="timeline mt-8 mb-16 flex justify-center items-center">
                <Timeline endless className="custom-timeline w-full">
                    <Timeline.Item dot={<FaReact className="text-xl" />} className="text-sm md:text-xl lg:text-2xl">
                        <div>
                            <p>{t('p1')}</p>
                            <p>
                                <strong>XLabs Security</strong>
                            </p>
                            <p>{t('p2')}</p>
                            <p>{t('p3')}</p>
                        </div>
                    </Timeline.Item>
                    <Timeline.Item dot={<FaBug className="text-xl" />} className="text-sm md:text-xl lg:text-2xl">
                        <div>
                            <p>{t('p4')}</p>
                            <p>
                                <strong>Freelance</strong>
                            </p>
                            <p>{t('p5')}</p>
                            <p>{t('p6')}</p>
                        </div>
                    </Timeline.Item>
                    <Timeline.Item dot={<IoIosSchool className="text-xl" />} className="text-sm md:text-xl lg:text-2xl">
                        <div>
                            <p>{t('p7')}</p>
                            <p>{t('p8')}</p>
                        </div>
                    </Timeline.Item>
                    <Timeline.Item dot={<IoIosSchool className="text-xl" />} className="text-sm md:text-xl lg:text-2xl">
                        <div>
                            <p>{t('p9')}</p>
                            <p>{t('p10')}</p>
                        </div>
                    </Timeline.Item>
                </Timeline>
            </div>
        </section>
    );
}
