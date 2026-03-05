"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const SPRING = { stiffness: 80, damping: 25, mass: 1.2 }

const OUTCOMES = [
    {
        num: "A",
        title: "A frame worth posting.",
        body: "Full frame portraits, not filters. Guests look the way they actually feel when the room is right.",
        mono: "Sony a7IV · Full Frame · Portrait Lighting",
    },
    {
        num: "B",
        title: "The room level rises.",
        body: "Our setup is minimal and silent. Guests feel it without seeing it. That's the point.",
        mono: "Sleek Tower · Self-Guided · No Props",
    },
    {
        num: "C",
        title: "An archive. Not a folder.",
        body: "Password protected gallery, ready when the night ends. High res files, 90 day access, private by default.",
        mono: "Online Gallery · Private Link · 90 Day Access",
    },
]

export function DreamOutcome() {
    const ref = useRef<HTMLDivElement>(null)
    const inView = useInView(ref, { once: true, amount: 0.2 })

    return (
        <section
            ref={ref}
            className="bg-[#080808] px-6 lg:px-8 border-b border-white/[0.05]"
            style={{ paddingTop: "clamp(80px, 10vw, 160px)", paddingBottom: "clamp(80px, 10vw, 160px)" }}
        >
            <div className="mx-auto max-w-7xl">
                {/* Header */}
                <motion.div
                    className="mb-16 max-w-2xl"
                    initial={{ opacity: 0, y: 32 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={SPRING}
                >
                    <p
                        className="uppercase tracking-[0.15em] text-[11px] mb-4"
                        style={{
                            fontFamily: "var(--font-mono)",
                            fontWeight: 500,
                            color: "rgba(197,160,89,0.8)",
                        }}
                    >
                        What every event leaves behind
                    </p>
                    <h2
                        className="leading-[0.9] tracking-[-0.03em] text-[#F5F5F5]"
                        style={{
                            fontFamily: "var(--font-cormorant), Georgia, serif",
                            fontWeight: 300,
                            fontSize: "clamp(42px, 6vw, 80px)",
                        }}
                    >
                        The night ends.<br />
                        <span className="italic" style={{ color: "#C5A059" }}>The frame stays.</span>
                    </h2>
                </motion.div>

                {/* Outcome rows — asymmetric editorial glide */}
                <div className="space-y-1">
                    {OUTCOMES.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: i % 2 === 0 ? -32 : 32 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ ...SPRING, delay: 0.12 + i * 0.1 }}
                            className="group flex flex-col lg:flex-row lg:items-end gap-4 lg:gap-16 py-10 border-b border-white/[0.05] hover:border-[rgba(197,160,89,0.15)] transition-colors duration-500"
                        >
                            {/* Number */}
                            <span
                                className="flex-none text-[52px] leading-none"
                                style={{
                                    fontFamily: "var(--font-cormorant), Georgia, serif",
                                    fontWeight: 300,
                                    color: "rgba(197,160,89,0.15)",
                                    letterSpacing: "-0.04em",
                                    minWidth: "2ch",
                                    transition: "color 0.4s",
                                }}
                            >
                                {item.num}
                            </span>

                            {/* Title */}
                            <h3
                                className="flex-none lg:w-[38%] text-[clamp(22px,3.5vw,38px)] leading-[1.1] tracking-[-0.02em] text-[#F5F5F5] group-hover:text-white transition-colors duration-300"
                                style={{
                                    fontFamily: "var(--font-cormorant), Georgia, serif",
                                    fontWeight: 300,
                                }}
                            >
                                {item.title}
                            </h3>

                            {/* Body + mono spec */}
                            <div className="flex-1">
                                <p className="text-[16px] text-[#B8B8B8] leading-[1.6] mb-3 font-light">
                                    {item.body}
                                </p>
                                <p
                                    className="uppercase tracking-[0.1em] text-[10px]"
                                    style={{
                                        fontFamily: "var(--font-mono)",
                                        fontWeight: 500,
                                        color: "rgba(197,160,89,0.5)",
                                    }}
                                >
                                    {item.mono}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Proof image */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ ...SPRING, delay: 0.45 }}
                    className="mt-16 relative aspect-[21/8] overflow-hidden border border-white/[0.06]"
                >
                    <img
                        src="/events/enjoyment-worldwide-sofihotel/raw/0078-Enjoyment_Worldwide-d1.jpg"
                        alt="Guests at a PostMeBooth event"
                        className="w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-transparent to-[#080808]" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#080808]/60" />

                    {/* Floating social proof card */}
                    <div className="absolute bottom-6 right-6 lg:right-12 max-w-[280px]">
                        <div
                            className="p-4 border border-white/10"
                            style={{ background: "rgba(10,10,10,0.92)", backdropFilter: "blur(16px)" }}
                        >
                            <p
                                style={{
                                    color: "rgba(242,239,233,0.88)",
                                    fontSize: "13px",
                                    lineHeight: 1.55,
                                    marginBottom: "14px",
                                    fontWeight: 300,
                                }}
                            >
                                &ldquo;On my phone before I reached the car. Already posted.&rdquo;
                            </p>

                            {/* SHARED badge — premium green live signal */}
                            <div className="flex items-center gap-2.5">
                                {/* Emerald pulse dot */}
                                <div
                                    aria-hidden="true"
                                    className="shared-pulse-dot"
                                    style={{
                                        width: "6px",
                                        height: "6px",
                                        borderRadius: "50%",
                                        background: "var(--color-emerald-signal)",
                                        boxShadow: "0 0 6px 1px var(--color-emerald-glow)",
                                        flexShrink: 0,
                                    }}
                                />

                                {/* SHARED label */}
                                <span
                                    style={{
                                        fontFamily: "var(--font-mono)",
                                        fontSize: "9px",
                                        fontWeight: 600,
                                        letterSpacing: "0.2em",
                                        textTransform: "uppercase",
                                        color: "rgba(242,239,233,0.55)",
                                    }}
                                >
                                    Shared
                                </span>

                                {/* Hairline separator */}
                                <div style={{ width: "1px", height: "10px", background: "rgba(255,255,255,0.1)", flexShrink: 0 }} />

                                {/* Instagram icon */}
                                <svg
                                    width="12" height="12" viewBox="0 0 24 24" fill="none"
                                    stroke="rgba(212,196,168,0.55)" strokeWidth="1.8"
                                    strokeLinecap="round" strokeLinejoin="round"
                                    aria-label="Instagram"
                                >
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                    <circle cx="12" cy="12" r="4" />
                                    <circle cx="17.5" cy="6.5" r="0.5" fill="rgba(212,196,168,0.55)" stroke="none" />
                                </svg>

                                {/* TikTok icon */}
                                <svg
                                    width="11" height="11" viewBox="0 0 24 24" fill="rgba(212,196,168,0.5)"
                                    aria-label="TikTok"
                                >
                                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V9.15a8.16 8.16 0 0 0 4.77 1.52V7.21a4.85 4.85 0 0 1-1-.52z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
