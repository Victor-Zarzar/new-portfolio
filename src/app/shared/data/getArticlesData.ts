import type { Articles, GetArticlesParams } from '@/app/shared/types/main';

export const getArticlesData = ({ t }: GetArticlesParams): Articles[] =>
    [
        {
            id: 1,
            title: t('articletitle1'),
            description: t('articledescription1'),
            p: t('articlep1'),
            photo: '/article-1.png',
            webLink: 'https://dev.to/victorzarzar/protecao-em-dispositivos-moveis-31ei',
            year: 2024,
        },
        {
            id: 2,
            title: t('articletitle2'),
            description: t('articledescription2'),
            p: t('articlep2'),
            photo: '/article-2.png',
            webLink: 'https://dev.to/victorzarzar/autenticacao-cookies-http-http-only-jwt-localstorage-e-sessionstorage-4b73',
            year: 2024,
        },
        {
            id: 3,
            title: t('articletitle3'),
            description: t('articledescription3'),
            p: t('articlep3'),
            photo: '/article-4.png',
            webLink: 'https://dev.to/victorzarzar/a-importancia-de-gerenciar-corretamente-variaveis-de-ambiente-env-4b5i',
            year: 2025,
        },
        {
            id: 4,
            title: t('articletitle4'),
            description: t('articledescription4'),
            p: t('articlep4'),
            photo: '/article-3.png',
            webLink: 'https://dev.to/victorzarzar/-otimizando-imagens-docker-boas-praticas-para-builds-eficientes-5cj7',
            year: 2025,
        },
    ].sort((a, b) => b.year - a.year);
