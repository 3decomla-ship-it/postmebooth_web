import type { Metadata } from 'next'
import { Inter, Playfair_Display, Fraunces, Cormorant_Garamond, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
})

const playfair = Playfair_Display({
    subsets: ['latin'],
    variable: '--font-playfair',
    display: 'swap',
})

const fraunces = Fraunces({
    subsets: ['latin'],
    variable: '--font-fraunces',
    display: 'swap',
    axes: ['SOFT', 'opsz'],
})

const cormorant = Cormorant_Garamond({
    subsets: ['latin'],
    variable: '--font-cormorant',
    display: 'swap',
    weight: ['300', '400', '500', '600', '700'],
    style: ['normal', 'italic'],
})

const ibmPlexMono = IBM_Plex_Mono({
    subsets: ['latin'],
    variable: '--font-mono',
    display: 'swap',
    weight: ['400', '500'],
})

export const metadata: Metadata = {
    metadataBase: new URL('https://postmebooth.com'),
    title: {
        default: 'PostMeBooth | Luxury Photo Booth Los Angeles',
        template: '%s | PostMeBooth',
    },
    description: 'Sony a7IV studio portraits, instant delivery, and private gallery access. The premium Los Angeles photo booth for corporate events, weddings, and nightlife.',
    keywords: ['photo booth Los Angeles', 'luxury photo booth', 'corporate photo booth LA', 'wedding photo booth Los Angeles', 'photobooth rental Los Angeles'],
    openGraph: {
        title: 'PostMeBooth | Luxury Photo Booth Los Angeles',
        description: 'Sony a7IV studio portraits, instant delivery, and private gallery access. Premium photo booth for Los Angeles events.',
        url: 'https://postmebooth.com',
        siteName: 'PostMeBooth',
        images: [
            {
                url: 'https://postmebooth.com/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'PostMeBooth | Luxury Photo Booth Los Angeles',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'PostMeBooth | Luxury Photo Booth Los Angeles',
        description: 'Sony a7IV studio portraits, instant delivery, and private gallery access. Premium photo booth for Los Angeles events.',
        creator: '@postmebooth',
        images: ['https://postmebooth.com/og-image.jpg'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-image-preview': 'large',
            'max-snippet': -1,
            'max-video-preview': -1,
        },
    },
}

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { MobileStickyCTA } from "@/components/layout/mobile-sticky-cta"
import JsonLd from "@/components/json-ld"

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={`${inter.variable} ${playfair.variable} ${fraunces.variable} ${cormorant.variable} ${ibmPlexMono.variable}`}>
            <body className="font-sans bg-background text-primary min-h-screen flex flex-col">
                <Header />
                <div className="flex-grow pt-0 pb-20 lg:pb-0"> {/* Add padding for sticky CTA on mobile */}
                    {children}
                </div>
                <MobileStickyCTA />
                <Footer />
                <JsonLd />
            </body>
        </html>
    )
}
