
export default function JsonLd() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "PostMeBooth",
        "image": "https://postmebooth.com/og-image.jpg",
        "description": "Premium photo booth rental for Los Angeles corporate events, weddings, and nightlife. Sony a7IV studio-quality photography and instant sharing.",
        "email": "postmebooth@gmail.com",
        "url": "https://postmebooth.com",
        "priceRange": "$$$",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Los Angeles",
            "addressRegion": "CA",
            "addressCountry": "US"
        },
        "serviceArea": {
            "@type": "GeoCircle",
            "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": 34.0522,
                "longitude": -118.2437
            },
            "geoRadius": "80000"
        },
        "areaServed": [
            { "@type": "City", "name": "Los Angeles" },
            { "@type": "City", "name": "Santa Monica" },
            { "@type": "City", "name": "Beverly Hills" },
            { "@type": "City", "name": "Long Beach" },
            { "@type": "City", "name": "Malibu" },
            { "@type": "City", "name": "Culver City" }
        ],
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Photo Booth Services",
            "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Corporate Event Photo Booth" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Wedding Photo Booth" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Nightlife Photo Booth" } }
            ]
        },
        "sameAs": [
            "https://instagram.com/postmebooth",
            "https://facebook.com/postmebooth"
        ]
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    )
}
