"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const PILLARS = [
    {
        num: "01",
        title: "Editorial quality",
        desc: "Studio lighting and a full frame look guests actually want to share.",
    },
    {
        num: "02",
        title: "Instant delivery",
        desc: "Guests receive their photos via SMS or email while the moment is still hot.",
    },
    {
        num: "03",
        title: "Brand safe overlays",
        desc: "Clean frames when you want them. Nothing cheesy. Nothing off brand.",
    },
    {
        num: "04",
        title: "The archive after",
        desc: "A private gallery link that keeps the night organized.",
    },
]

export function TheDifference() {
    const ref = useRef<HTMLDivElement>(null)
    const inView = useInView(ref, { once: true, amount: 0.2 })

    return (
        <section
            ref={ref}
            className="bg-[#050505]"
            style={{ paddingTop: "clamp(80px, 10vw, 120px)", paddingBottom: "clamp(80px, 10vw, 120px)" }}
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mb-16 text-center lg:text-left">
                    <h2
                        className="text-[#F5F5F5] font-light tracking-[-0.02em] mb-4"
                        style={{
                            fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
                            fontSize: "clamp(42px, 6vw, 72px)",
                            lineHeight: 1.0,
                        }}
                    >
                        Why PostMeBooth works
                    </h2>
                    <p className="text-[#C8B08A] font-serif italic text-xl sm:text-2xl">
                        Premium output. Minimal friction. Built to be posted.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 border-t border-b border-white/[0.08]">
                    {PILLARS.map((pillar, i) => (
                        <motion.div
                            key={pillar.num}
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                            className={`flex flex-col gap-6 p-10 lg:p-16 
                                ${i % 2 === 0 ? "md:border-r border-white/[0.08]" : ""} 
                                ${i < 2 ? "border-b border-white/[0.08]" : ""}
                            `}
                        >
                            <span
                                style={{
                                    fontFamily: "var(--font-mono)",
                                    fontSize: "10px",
                                    fontWeight: 500,
                                    letterSpacing: "0.18em",
                                    color: "rgba(197,160,89,0.7)",
                                }}
                            >
                                {pillar.num}
                            </span>
                            <h3
                                className="transition-colors duration-300"
                                style={{
                                    fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
                                    fontSize: "32px",
                                    fontWeight: 300,
                                    letterSpacing: "-0.02em",
                                    color: "#F2EFE9",
                                    lineHeight: 1.1,
                                }}
                                onMouseEnter={e => e.currentTarget.style.color = "rgba(212,196,168,0.9)"}
                                onMouseLeave={e => e.currentTarget.style.color = "#F2EFE9"}
                            >
                                {pillar.title}
                            </h3>
                            <p
                                style={{
                                    fontSize: "15px",
                                    color: "rgba(242,239,233,0.55)",
                                    lineHeight: 1.6,
                                    fontWeight: 300,
                                    maxWidth: "28ch",
                                }}
                            >
                                {pillar.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
