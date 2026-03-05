"use client"

import Link from "next/link"
import { useState } from "react"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { FadeIn, FadeInStagger, ClipReveal } from "@/components/ui/fade-in"
import { MagneticButton } from "@/components/ui/magnetic-button"
import { Button } from "@/components/ui/button"

const HONEYBOOK_URL = "https://postmebooth.hbportal.co/public/book-postmebooth/1-Inquiry_form"

const differenceItems = [
    {
        num: "01",
        title: "They'll post it themselves.",
        body: "Flattering studio light. Full-frame glass. A portrait so good, guests share it before they leave. That's your brand, spreading without any effort from you.",
    },
    {
        num: "02",
        title: "Zero Friction Delivery",
        body: "No app. No email thread the next day. SMS or email, live while they're still in the room. The memory hits before the buzz wears off.",
    },
    {
        num: "03",
        title: "Zero friction. All feel.",
        body: "Guests don't use what feels awkward. Ours gets used. Simple flow, no props, no pressure. Just real moments that look genuinely good.",
    },
]

const deliverablesLeft = [
    "Studio-quality Photos",
    "GIFs / Boomerangs",
    "Instant SMS or email",
]
const deliverablesRight = [
    "Private Online Gallery",
    "Branded Custom Overlay",
]

export function DifferenceDeliverables() {
    return (
        <section className="bg-[#050505] px-6 lg:px-8 border-t border-white/5" style={{ paddingTop: "var(--section-pad)", paddingBottom: "var(--section-pad)" }}>
            <div className="mx-auto max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">

                    {/* ── Left Column: Numbered Editorial List ── */}
                    <div>
                        <FadeIn className="mb-16">
                            <p className="text-xs uppercase tracking-[0.25em] text-accent font-semibold mb-5">
                                The Difference
                            </p>
                            <h2 className="font-display text-[clamp(2.4rem,5vw,3.8rem)] font-light tracking-tight text-[#F5F5F5] leading-[1.05]">
                                The difference<br />
                                <em className="text-[#B8B8B8] font-light">you can see</em>
                            </h2>
                        </FadeIn>

                        <div className="space-y-0">
                            {differenceItems.map((item, i) => (
                                <FadeIn key={item.num}>
                                    <div className="group">
                                        {/* Rule above each item */}
                                        <div className="champagne-rule" />

                                        <div className="flex gap-8 py-10">
                                            {/* Oversized counter */}
                                            <div className="flex-none w-14">
                                                <div className="overflow-hidden">
                                                    <ClipReveal delay={i * 0.1}>
                                                        <span
                                                            className="text-5xl font-display font-light select-none block"
                                                            style={{
                                                                background: "linear-gradient(135deg, #D4AF6A 0%, #C5A059 50%, #B38B45 100%)",
                                                                WebkitBackgroundClip: "text",
                                                                WebkitTextFillColor: "transparent",
                                                                backgroundClip: "text",
                                                            }}
                                                        >
                                                            {item.num}
                                                        </span>
                                                    </ClipReveal>
                                                </div>
                                            </div>

                                            <div className="flex-1">
                                                <h3 className="font-display text-xl font-semibold text-[#F5F5F5] mb-3 group-hover:text-champagne-mid transition-colors duration-300">
                                                    {item.title}
                                                </h3>
                                                <p className="text-[#B8B8B8] leading-relaxed text-[0.95rem]">
                                                    {item.body}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </FadeIn>
                            ))}
                            {/* Final bottom rule */}
                            <div className="champagne-rule" />
                        </div>
                    </div>

                    {/* ── Right Column: Deliverables ── */}
                    <div className="flex flex-col justify-center">
                        <FadeIn>
                            <div className="border-l border-[#C5A059]/30 pl-10">
                                <p className="text-xs uppercase tracking-[0.25em] text-accent font-semibold mb-6">
                                    What Guests Receive
                                </p>
                                <h3 className="font-display text-[clamp(1.8rem,3.5vw,2.8rem)] font-light text-[#F5F5F5] leading-tight mb-4">
                                    Every shot.<br />
                                    <em className="text-[#B8B8B8]">Delivered instantly.</em>
                                </h3>
                                <p className="text-[#B8B8B8] mb-10 leading-relaxed text-sm">
                                    Powered by Booth.Events so sharing is automatic and the gallery stays clean long after your event.
                                </p>

                                {/* 2-column deliverables grid */}
                                <div className="grid grid-cols-2 gap-x-8 gap-y-0">
                                    <div>
                                        {deliverablesLeft.map((item, i) => (
                                            <div key={item}>
                                                <div className="champagne-rule" />
                                                <div className="flex items-center gap-3 py-4">
                                                    <span
                                                        className="h-1.5 w-1.5 flex-none rounded-full"
                                                        style={{ background: "linear-gradient(135deg, #D4AF6A, #B38B45)" }}
                                                    />
                                                    <span className="text-[#F5F5F5] text-sm">{item}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div>
                                        {deliverablesRight.map((item) => (
                                            <div key={item}>
                                                <div className="champagne-rule" />
                                                <div className="flex items-center gap-3 py-4">
                                                    <span
                                                        className="h-1.5 w-1.5 flex-none rounded-full"
                                                        style={{ background: "linear-gradient(135deg, #D4AF6A, #B38B45)" }}
                                                    />
                                                    <span className="text-[#F5F5F5] text-sm">{item}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="champagne-rule mt-0" />

                                <p className="text-white/40 text-xs sm:text-sm font-light mt-1 text-center font-mono tracking-wide">
                                    Portrait-first output built for mobile and reposts.
                                </p>
                            </div>
                        </FadeIn>
                    </div>
                </div>

                {/* ── CTA Strip ── */}
                <FadeIn className="mt-24 pt-16 border-t border-white/5">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
                        <div className="max-w-xl">
                            <h2 className="font-display text-[clamp(2rem,4.5vw,3.2rem)] font-light tracking-tight text-[#F5F5F5] leading-tight mb-4">
                                A photo experience that<br />
                                <em className="text-[#B8B8B8]">actually adds to the event.</em>
                            </h2>
                            <p className="text-[#B8B8B8] text-sm">
                                Send your date + city. We'll confirm availability fast.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 flex-none">
                            <MagneticButton strength={0.2} radius={90}>
                                <Link href={HONEYBOOK_URL} target="_blank">
                                    <Button
                                        size="lg"
                                        className="bg-[#F5F5F5] text-black hover:bg-[#F5F5F5]/90 font-semibold px-10 h-13 w-full sm:w-auto tracking-widest text-xs uppercase"
                                    >
                                        Check Availability
                                    </Button>
                                </Link>
                            </MagneticButton>
                            <p className="text-xs text-[#B8B8B8] uppercase tracking-wider font-medium whitespace-nowrap">
                                Takes 60 seconds · Fast reply
                            </p>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    )
}
