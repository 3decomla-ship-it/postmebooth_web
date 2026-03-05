import { HeroRedesigned } from "@/components/home/hero-redesigned"
import { TrustedBy } from "@/components/home/trusted-by"
import { TheDifference } from "@/components/home/the-difference"
import { ServicesPreview } from "@/components/home/services-preview"
import { PastEventsPreview } from "@/components/home/past-events-preview"
import { FaqPreview } from "@/components/home/faq-preview"
import { HairlineDivider } from "@/components/ui/hairline-divider"
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'PostMeBooth | Luxury Photo Booth in Los Angeles',
    description: 'Studio-quality photo booth portraits with instant SMS or email delivery and a private gallery after. Secure your date in Los Angeles.',
}

/** Thin inset wrapper for dividers — matches the site's content column width.
 *  An inset line reads as a design accent; a full-bleed line reads as a separator.
 */
function Divider() {
    return (
        <div style={{ padding: "0 clamp(24px, 5vw, 96px)", maxWidth: "1280px", margin: "0 auto" }}>
            <HairlineDivider />
        </div>
    )
}

export default function Home() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "PostMeBooth",
        "url": "https://postmebooth.com",
        "areaServed": "Los Angeles",
        "sameAs": [
            "https://instagram.com/postmebooth",
            "https://tiktok.com/@postmebooth"
        ]
    }

    return (
        <main className="min-h-screen bg-[#050505]">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
            />
            {/* A: HERO */}
            <HeroRedesigned />

            {/* B: TRUSTED BY */}
            <TrustedBy />

            <Divider />

            {/* C: THE DIFFERENCE */}
            <TheDifference />

            <Divider />

            {/* E: SERVICES PREVIEW */}
            <ServicesPreview />

            <Divider />

            {/* F: PAST EVENTS PREVIEW */}
            <PastEventsPreview />

            <Divider />

            {/* G: FAQ PREVIEW */}
            <FaqPreview />

            <Divider />

            {/* H: FINAL CTA */}
        </main>
    )
}
