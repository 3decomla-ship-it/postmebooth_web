"use client"

import { useRef, useState } from "react"
import { motion, useSpring, useInView } from "framer-motion"

const SPRING = { stiffness: 80, damping: 25, mass: 1.2 }

const cards = [
    {
        num: "01",
        headline: "Full-Frame Standard.",
        body: "Sony a7IV portraits. Every frame is lit, composed, and flattering.",
        mono: "Full-Frame · Sony FE Optics · Portrait Mode",
    },
    {
        num: "02",
        headline: "Delivered Instantly.",
        body: "On their phone before the next song starts. SMS or Email. No app required.",
        mono: "SMS · Email · Online Gallery Link",
    },
    {
        num: "03",
        headline: "Invisible Setup.",
        body: "Self-guided. Fully silent. Guests find it. We stay out of the way.",
        mono: "No Attendant Required · 8x8 Footprint",
    },
    {
        num: "04",
        headline: "Stays Private.",
        body: "Password-protected gallery. Your event archive is yours to share or keep.",
        mono: "Private Link · 90-Day Access · Password Protected",
    },
]

export function WhyReel() {
    const sectionRef = useRef<HTMLDivElement>(null)
    const constraintsRef = useRef<HTMLDivElement>(null)
    const inView = useInView(sectionRef, { once: true, amount: 0.2 })
    const [dragged, setDragged] = useState(false)

    return (
        <section
            ref={sectionRef}
            className="bg-[#050505] overflow-hidden"
            style={{ paddingTop: "clamp(80px, 10vw, 160px)", paddingBottom: "clamp(80px, 10vw, 160px)" }}
        >
            {/* Section Header */}
            <motion.div
                className="px-6 lg:px-8 mb-14"
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
                    Why PostMeBooth · 04 Reasons · Drag to explore
                </p>
                <h2
                    className="text-[clamp(48px,7vw,96px)] leading-[0.9] tracking-[-0.03em] text-[#F5F5F5]"
                    style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 300 }}
                >
                    Why we're<br />
                    <span className="italic text-[#C5A059]">different.</span>
                </h2>
            </motion.div>

            {/* Draggable Reel */}
            <div ref={constraintsRef} className="overflow-hidden">
                <motion.div
                    className="flex gap-4 px-6 lg:px-8 cursor-grab select-none"
                    drag="x"
                    dragConstraints={constraintsRef}
                    dragTransition={{ bounceStiffness: 100, bounceDamping: 30 }}
                    whileTap={{ cursor: "grabbing" }}
                    onDragStart={() => setDragged(true)}
                    style={{ width: "max-content" }}
                >
                    {cards.map((card, i) => (
                        <motion.div
                            key={card.num}
                            initial={{ opacity: 0, y: 40 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ ...SPRING, delay: i * 0.08 }}
                            whileHover={{ scale: 1.02 }}
                            className="relative flex-none w-[300px] sm:w-[360px] h-[440px] sm:h-[520px] border border-white/[0.08] flex flex-col justify-between p-8"
                            style={{
                                background: "linear-gradient(145deg, #0D0D0D 0%, #111111 100%)",
                            }}
                        >
                            {/* Card Number */}
                            <span
                                className="text-[80px] leading-none font-light select-none"
                                style={{
                                    fontFamily: "var(--font-cormorant), Georgia, serif",
                                    color: "rgba(197,160,89,0.12)",
                                    fontWeight: 300,
                                    letterSpacing: "-0.04em",
                                }}
                            >
                                {card.num}
                            </span>

                            {/* Card Content */}
                            <div>
                                <h3
                                    className="text-[clamp(28px,4vw,42px)] leading-[1.0] mb-3"
                                    style={{
                                        fontFamily: "var(--font-cormorant), Georgia, serif",
                                        fontWeight: 300,
                                        letterSpacing: "-0.02em",
                                        color: "#F5F5F5",
                                    }}
                                >
                                    {card.headline}
                                </h3>
                                <p
                                    className="text-[18px] text-[#B8B8B8] mb-6 leading-[1.5]"
                                    style={{ fontWeight: 300 }}
                                >
                                    {card.body}
                                </p>
                                {/* IBM Plex Mono technical spec */}
                                <p
                                    className="uppercase tracking-[0.1em] text-[10px]"
                                    style={{
                                        fontFamily: "var(--font-mono)",
                                        fontWeight: 500,
                                        color: "rgba(197,160,89,0.6)",
                                    }}
                                >
                                    {card.mono}
                                </p>
                            </div>

                            {/* Champagne corner accent */}
                            <div
                                className="absolute bottom-0 right-0 w-16 h-16 pointer-events-none"
                                style={{
                                    background: "linear-gradient(225deg, rgba(197,160,89,0.1) 0%, transparent 70%)",
                                }}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Drag Hint */}
            <motion.div
                className="px-6 lg:px-8 mt-8 flex items-center gap-3"
                animate={dragged ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.6 }}
            >
                <motion.span
                    className="text-[11px] uppercase tracking-[0.12em]"
                    style={{
                        fontFamily: "var(--font-mono)",
                        fontWeight: 500,
                        color: "rgba(255,255,255,0.25)",
                        animation: "drag-hint 2.4s ease-in-out infinite",
                    }}
                >
                    ← Drag to explore
                </motion.span>
            </motion.div>
        </section>
    )
}
