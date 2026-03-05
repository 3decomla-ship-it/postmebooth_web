import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Metadata } from 'next'
import { HairlineDivider } from "@/components/ui/hairline-divider"

export const metadata: Metadata = {
    title: 'FAQ | PostMeBooth Los Angeles',
    description: 'Quick answers about setup, delivery, overlays, and booking. Secure your date through HoneyBook.',
    openGraph: {
        title: 'FAQ | PostMeBooth Los Angeles',
        description: 'Quick answers about setup, delivery, overlays, and booking. Secure your date through HoneyBook.',
    },
}

export default function FAQPage() {
    const faqs = [
        {
            category: "Space & Setup",
            items: [
                { q: "How much space do you need?", a: "Enough room for the booth setup and a clear guest line. We’ll confirm layout based on your venue." },
                { q: "How long is setup?", a: "We arrive early and set up before guests are in the way. Exact timing depends on venue access." }
            ]
        },
        {
            category: "Output & Delivery",
            items: [
                { q: "Is delivery digital only?", a: "Yes. We optimize for digital: instant SMS or email sharing so guests can post immediately." },
                { q: "Do you offer GIFs or boomerangs?", a: "Yes. Motion formats are captured alongside still portraits." },
                { q: "Can we add a logo or event overlay?", a: "Yes. Clean, brand safe overlays are included to match your event." },
                { q: "How does delivery work?", a: "Guests get photos sent directly to their phones via SMS or email. You get a link to the complete private gallery after the event." }
            ]
        },
        {
            category: "Booking & Logistics",
            items: [
                { q: "What areas do you serve?", a: "Los Angeles, California. Travel beyond LA requires a custom quote." },
                { q: "What’s the booking process?", a: "Submit an inquiry to confirm availability. We’ll send a proposal, and a 50% retainer locks the date." }
            ]
        }
    ]

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.flatMap(cat => cat.items.map(item => ({
            "@type": "Question",
            "name": item.q,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.a
            }
        })))
    }

    return (
        <main className="bg-[#050505] min-h-screen text-[#F5F5F5]">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
            />
            {/* Hero */}
            <section
                className="relative flex flex-col items-center justify-center px-6 text-center bg-[#040404] border-b border-white/5"
                style={{ paddingTop: "clamp(120px, 15vw, 200px)", paddingBottom: "clamp(80px, 10vw, 120px)" }}
            >
                <p
                    className="uppercase tracking-[0.18em] text-[10px] mb-6 hidden"
                    style={{
                        fontFamily: "var(--font-mono)",
                        fontWeight: 500,
                        color: "rgba(197,160,89,0.7)",
                    }}
                >
                    Details & Logistics
                </p>
                <h1
                    className="leading-[0.9] tracking-[-0.04em] text-[#F2EFE9] mb-4"
                    style={{
                        fontFamily: "var(--font-cormorant), Georgia, serif",
                        fontWeight: 300,
                        fontSize: "clamp(48px, 8vw, 88px)",
                    }}
                >
                    FAQ
                </h1>
                <p
                    className="font-light"
                    style={{
                        fontSize: "20px",
                        color: "rgba(255,255,255,0.45)",
                        maxWidth: "48ch"
                    }}
                >
                    Everything you’d ask before booking.
                </p>
            </section>

            <HairlineDivider />

            <section
                className="bg-[#050505]"
                style={{ paddingTop: "clamp(64px, 8vw, 120px)", paddingBottom: "clamp(80px, 10vw, 160px)" }}
            >
                <div className="mx-auto max-w-4xl px-6 lg:px-8 space-y-24">
                    {faqs.map((cat, idx) => (
                        <div key={idx}>
                            <h2
                                className="mb-10 text-[#C8B08A] tracking-[0.16em] uppercase"
                                style={{
                                    fontFamily: "var(--font-mono)",
                                    fontSize: "11px",
                                    fontWeight: 500,
                                    borderBottom: "1px solid rgba(255,255,255,0.05)",
                                    paddingBottom: "16px",
                                }}
                            >
                                {cat.category}
                            </h2>
                            <Accordion type="multiple" className="w-full">
                                {cat.items.map((item, i) => (
                                    <AccordionItem key={i} value={`item-${idx}-${i}`} className="border-white/10 group">
                                        <AccordionTrigger
                                            className="text-left py-8 font-light hover:text-[#C8B08A] hover:no-underline transition-colors"
                                            style={{
                                                fontSize: "clamp(18px, 2vw, 24px)",
                                                letterSpacing: "-0.01em"
                                            }}
                                        >
                                            {item.q}
                                        </AccordionTrigger>
                                        <AccordionContent
                                            className="text-[#B8B8B8] pb-10 font-light"
                                            style={{
                                                fontSize: "16px",
                                                lineHeight: "1.7",
                                                maxWidth: "65ch"
                                            }}
                                        >
                                            {item.a}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                    ))}
                </div>
            </section>

            <HairlineDivider />

            {/* Final CTA */}
        </main>
    )
}
