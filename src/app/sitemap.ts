import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const currentDate = new Date();

    return [
        {
            url: 'https://www.victorzarzar.com.br',
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: 'https://www.victorzarzar.com.br/about',
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://www.victorzarzar.com.br/services',
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://www.victorzarzar.com.br/contact',
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://www.victorzarzar.com.br/projects',
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://www.victorzarzar.com.br/privacypolicy',
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
    ];
}
