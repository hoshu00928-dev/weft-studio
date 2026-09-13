import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, changeFrequency: 'monthly', priority: 1 },
    { url: `${SITE_URL}/about`, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${SITE_URL}/works`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/order`, changeFrequency: 'monthly', priority: 0.8 },
  ];
}
