import { GetTimelineDataParams, type TimelineItemType } from '@/app/shared/types/main';

export function getTimelineData({ t }: GetTimelineDataParams): TimelineItemType[] {
    return [
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
}
