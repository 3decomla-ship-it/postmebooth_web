import { MetadataRoute } from 'next'
import { EVENTS } from '@/lib/events.generated'

export default function sitemap(): MetadataRoute.Sitemap {
    const staticRoutes: MetadataRoute.Sitemap = [
        {
            url: 'https://postmebooth.com',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: 'https://postmebooth.com/services',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: 'https://postmebooth.com/past-events',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.85,
        },
        {
            url: 'https://postmebooth.com/about',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.75,
        },
        {
            url: 'https://postmebooth.com/faq',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: 'https://postmebooth.com/contact',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://postmebooth.com/portfolio',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.5,
        },
        {
            url: 'https://postmebooth.com/lp/corporate',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: 'https://postmebooth.com/lp/nightlife',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: 'https://postmebooth.com/lp/weddings',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
    ]

    // Dynamic event detail pages
    const eventRoutes: MetadataRoute.Sitemap = EVENTS.map((event) => ({
        url: `https://postmebooth.com/past-events/${event.id}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }))

    return [...staticRoutes, ...eventRoutes]
}
