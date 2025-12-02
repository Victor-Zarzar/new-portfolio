import type { CardItemType, GetServicesDataParams } from '@/app/shared/types/main';

export function getServicesData({ t }: GetServicesDataParams): CardItemType[] {
    return [
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
}
