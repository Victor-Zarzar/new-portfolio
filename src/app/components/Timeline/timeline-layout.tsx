import { type TimelineItemType } from '@/app/types/main';
import { Timeline, TimelineDescription, TimelineHeader, TimelineItem, TimelineTime, TimelineTitle } from '@/components/ui/timeline';
import { useTranslations } from 'next-intl';
import { Fade } from 'react-awesome-reveal';

export const TimelineLayout = () => {
    const t = useTranslations('Experiences');

    const timelineData: TimelineItemType[] = [
        {
            id: 1,
            title: 'XLabs Security',
            description: t('p2'),
            local: t('p3'),
            time: '2023 - Present',
        },
        {
            id: 2,
            title: 'Freelance',
            description: t('p5'),
            local: t('p6'),
            time: '2022 - 2023',
        },
        {
            id: 3,
            title: t('p7'),
            description: t('p8'),
            local: '',
            time: '2024 - 2027',
        },
        {
            id: 4,
            title: t('p9'),
            description: t('p10'),
            local: '',
            time: '2022 - 2024',
        },
    ];

    return (
        <section className="mx-auto mt-28 mb-28 max-w-3xl">
            <Fade>
                <h1 className="title-about mb-4 font-extrabold leading-10 tracking-tight text-3xl md:text-4xl text-center mt-20 md:mt-36">
                    {t('h1')}
                </h1>
            </Fade>

            <div className="timeline mt-8 mb-16 flex justify-center items-center">
                <Timeline className="mt-8">
                    {timelineData.map((item) => (
                        <TimelineItem key={item.id}>
                            <TimelineHeader>
                                <TimelineTime className="capitalize">{item.time}</TimelineTime>
                                <TimelineTitle className="text-sm sm:text-2xl">{item.title}</TimelineTitle>
                            </TimelineHeader>
                            {item.description && (
                                <>
                                    <TimelineDescription className="text-xs sm:text-xl">{item.description}</TimelineDescription>
                                    <TimelineDescription className="text-sm md:text-xl">{item.local}</TimelineDescription>
                                </>
                            )}
                        </TimelineItem>
                    ))}
                </Timeline>
            </div>
        </section>
    );
};
