import Link from "next/link"
import { Check, ArrowRight } from "lucide-react"
import { Section } from "@/components/ui/section"
import { FadeIn } from "@/components/ui/fade-in"
import { Metadata } from 'next'
import { HairlineDivider } from "@/components/ui/hairline-divider"

export const metadata: Metadata = {
    title: 'Services | PostMeBooth Los Angeles',
    description: 'Corporate, nightlife, and wedding photo booth services in Los Angeles. Studio-quality portraits with instant delivery.',
    openGraph: {
        title: 'Services | PostMeBooth Los Angeles',
        description: 'Corporate, nightlife, and wedding photo booth services in Los Angeles. Studio-quality portraits with instant delivery.',
    },
}

function Divider() {
    return (
        <div style={{ padding: "0 clamp(24px, 5vw, 96px)", maxWidth: "1280px", margin: "0 auto" }}>
            <HairlineDivider />
        </div>
    )
}

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-[#050505]">
            {/* Hero */}
            <section
                className="relative flex flex-col items-center justify-center px-6 text-center bg-[#050505] border-b border-white/5"
                style={{ paddingTop: "clamp(120px, 15vw, 200px)", paddingBottom: "clamp(80px, 10vw, 120px)" }}
            >
                <h1
                    className="leading-[0.9] tracking-[-0.03em] text-[#F5F5F5] mb-4"
                    style={{
                        fontFamily: "var(--font-cormorant), Georgia, serif",
                        fontWeight: 300,
                        fontSize: "clamp(48px, 8vw, 96px)",
                    }}
                >
                    Services
                </h1>
                <h2 className="text-2xl md:text-3xl text-[#C5A059] italic mb-6 font-light" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>
                    Pick your lane. We’ll handle the rest.
                </h2>
                <p className="max-w-xl text-[15px] md:text-[16px] text-[#B8B8B8] leading-[1.7] font-light">
                    Every booking includes studio-quality portraits and instant delivery.
                </p>
            </section>

            {/* Choose Your Event Type */}
            <section className="bg-[#050505] px-6 lg:px-8 py-20 pb-32">
                <div className="mx-auto max-w-7xl grid gap-6 md:grid-cols-3">
                    {/* Corporate Card */}
                    <Link href="/lp/corporate" className="group block relative overflow-hidden" style={{ aspectRatio: "3/4" }}>
                        <img
                            src="/events/easports-battleflied6-friendsandfamily/raw/0038-ripple_studios-d1.jpg"
                            alt="Corporate"
                            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-70"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                        <div className="absolute bottom-6 left-6 right-6">
                            <h3 className="text-2xl font-light text-[#F5F5F5] mb-2 leading-tight" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>
                                Corporate events + brand activations
                            </h3>
                            <p className="text-[#B8B8B8] text-sm font-light mb-4 leading-snug pr-4">
                                Clean, brand-safe output for teams, sponsors, and campaigns.
                            </p>
                            <div className="flex items-center text-[#C5A059] text-[10px] font-semibold uppercase tracking-[0.18em] gap-2 transition-transform group-hover:translate-x-1" style={{ fontFamily: "var(--font-mono)" }}>
                                Explore corporate <ArrowRight className="h-3 w-3" />
                            </div>
                        </div>
                    </Link>

                    {/* Nightlife Card */}
                    <Link href="/lp/nightlife" className="group block relative overflow-hidden" style={{ aspectRatio: "3/4" }}>
                        <img
                            src="/events/spice-dayrave/raw/0067-Spice_-d1.jpg"
                            alt="Nightlife"
                            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-70"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                        <div className="absolute bottom-6 left-6 right-6">
                            <h3 className="text-2xl font-light text-[#F5F5F5] mb-2 leading-tight" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>
                                Nightlife + venues
                            </h3>
                            <p className="text-[#B8B8B8] text-sm font-light mb-4 leading-snug pr-4">
                                Fast flow, flattering flash, repost-ready results.
                            </p>
                            <div className="flex items-center text-[#C5A059] text-[10px] font-semibold uppercase tracking-[0.18em] gap-2 transition-transform group-hover:translate-x-1" style={{ fontFamily: "var(--font-mono)" }}>
                                Explore nightlife <ArrowRight className="h-3 w-3" />
                            </div>
                        </div>
                    </Link>

                    {/* Weddings Card */}
                    <Link href="/lp/weddings" className="group block relative overflow-hidden" style={{ aspectRatio: "3/4" }}>
                        <img
                            src="/events/wedding-jasmineandadrian-cityla/template/0260-wedding_-d1-template.jpg"
                            alt="Weddings"
                            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-70"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                        <div className="absolute bottom-6 left-6 right-6">
                            <h3 className="text-2xl font-light text-[#F5F5F5] mb-2 leading-tight" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>
                                Weddings + celebrations
                            </h3>
                            <p className="text-[#B8B8B8] text-sm font-light mb-4 leading-snug pr-4">
                                Timeless portraits with a smooth guest experience.
                            </p>
                            <div className="flex items-center text-[#C5A059] text-[10px] font-semibold uppercase tracking-[0.18em] gap-2 transition-transform group-hover:translate-x-1" style={{ fontFamily: "var(--font-mono)" }}>
                                Explore weddings <ArrowRight className="h-3 w-3" />
                            </div>
                        </div>
                    </Link>
                </div>
            </section>

            <Divider />

            {/* What Every Booking Includes */}
            <section className="bg-[#050505] px-6 py-24 border-b border-white/5">
                <div className="mx-auto max-w-3xl text-center mb-16">
                    <p className="uppercase tracking-[0.18em] text-[10px] mb-4 text-[#C5A059]" style={{ fontFamily: "var(--font-mono)" }}>
                        Standard Inclusions
                    </p>
                    <h2 className="text-4xl md:text-5xl font-light text-[#F5F5F5] mb-6" style={{ fontFamily: "var(--font-cormorant), Georgia, serif", letterSpacing: "-0.02em" }}>
                        What you get <span className="italic" style={{ color: "#C5A059" }}>every time.</span>
                    </h2>
                </div>

                <div className="mx-auto max-w-4xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-8">
                    {[
                        "Studio-quality photos",
                        "GIFs and boomerangs",
                        "Instant SMS or email delivery",
                        "QR code sharing",
                        "Private gallery after the event",
                        "Optional overlays (clean + brand-safe)"
                    ].map((item, idx) => (
                        <div key={idx} className="flex items-start gap-4 p-6 border border-white/5 bg-[#080808]">
                            <div className="mt-1 bg-white/5 p-1 rounded-sm">
                                <Check className="h-3 w-3 text-[#C5A059]" />
                            </div>
                            <p className="text-[#F2EFE9] text-[14px] font-light leading-snug">{item}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Final CTA Band */}
        </main>
    )
}
