import type { MetadataRoute } from 'next'

const locales = ['en', 'pt', 'es'];
const baseUrl = 'https://www.victorzarzar.com.br';
const routes = [
  '/',
  'about',
  'services',
  'projects',
  'contact',
  'privacypolicy',
  'privacypolicy-apps',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const items: MetadataRoute.Sitemap = [];
  for (const locale of locales) {
    for (const route of routes) {
      items.push({
        url: `${baseUrl}/${locale}${route ? `/${route}` : ''}`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: route === '' ? 1 : 0.8,
      });
    }
  }
  return items;
}