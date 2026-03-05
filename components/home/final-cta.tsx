"use client"

import Link from "next/link"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const SPRING = { stiffness: 80, damping: 25, mass: 1.2 }

interface FinalCtaProps {
    title?: string;
}

export function FinalCta({ title = "Secure your date." }: FinalCtaProps) {
    const ref = useRef<HTMLDivElement>(null)
    const inView = useInView(ref, { once: true, amount: 0.2 })

    return (
        <section
            className="bg-[#050505] px-6 lg:px-8 border-t border-white/[0.05]"
            style={{ paddingTop: "clamp(100px, 14vw, 200px)", paddingBottom: "clamp(100px, 14vw, 200px)" }}
        >
            <div ref={ref} className="mx-auto max-w-4xl text-center">
                {/* Main headline */}
                <motion.h2
                    initial={{ opacity: 0, y: 32 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ ...SPRING, delay: 0.08 }}
                    className="leading-[0.9] tracking-[-0.03em] text-[#F5F5F5] mb-8"
                    style={{
                        fontFamily: "var(--font-cormorant), Georgia, serif",
                        fontWeight: 300,
                        fontSize: "clamp(52px, 9vw, 112px)",
                    }}
                >
                    {title}
                </motion.h2>

                {/* Sub */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ ...SPRING, delay: 0.16 }}
                    className="text-[16px] text-[#B8B8B8] mb-12 font-light max-w-lg mx-auto leading-[1.7]"
                >
                    Studio quality output. Instant delivery. Clean setup.
                </motion.p>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ ...SPRING, delay: 0.24 }}
                >
                    <Link
                        href="https://postmebooth.hbportal.co/public/book-postmebooth/1-Inquiry_form"
                        target="_blank"
                    >
                        <button
                            className="h-16 px-12 text-[13px] font-medium uppercase tracking-[0.14em] transition-all duration-300"
                            id="request-invitation-final"
                            style={{
                                fontFamily: "var(--font-mono)",
                                background: "#C5A059",
                                color: "#0B0B0C",
                                boxShadow: "0 0 40px rgba(197,160,89,0.3), 0 0 80px rgba(197,160,89,0.12)",
                                border: "none",
                            }}
                            onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 0 60px rgba(197,160,89,0.55), 0 0 120px rgba(197,160,89,0.2)")}
                            onMouseLeave={e => (e.currentTarget.style.boxShadow = "0 0 40px rgba(197,160,89,0.3), 0 0 80px rgba(197,160,89,0.12)")}
                        >
                            SECURE A DATE
                        </button>
                    </Link>
                </motion.div>

                {/* Fine print */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ ...SPRING, delay: 0.36 }}
                    className="mt-8 text-[11px] uppercase tracking-[0.12em]"
                    style={{
                        fontFamily: "var(--font-mono)",
                        color: "rgba(255,255,255,0.18)",
                    }}
                >
                    Inquiry required. Confirmation within 24 hours.
                </motion.p>
            </div>
        </section>
    )
}
