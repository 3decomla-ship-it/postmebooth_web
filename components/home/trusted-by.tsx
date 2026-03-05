"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const SPRING = { stiffness: 70, damping: 22, mass: 1.1 }

export function TrustedBy() {
    const ref = useRef<HTMLDivElement>(null)
    const inView = useInView(ref, { once: true, amount: 0.3 })

    return (
        <section
            ref={ref}
            className="bg-[#050505] border-b border-white/[0.05]"
            style={{ paddingTop: "clamp(64px, 8vw, 100px)", paddingBottom: "clamp(64px, 8vw, 100px)" }}
        >
            <div className="mx-auto max-w-5xl px-6 lg:px-8 text-center">
                {/* Label */}
                <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={SPRING}
                    className="uppercase tracking-[0.18em] text-[11px] mb-2"
                    style={{
                        fontFamily: "var(--font-mono)",
                        fontWeight: 500,
                        color: "rgba(255,255,255,0.38)",
                    }}
                >
                    Trusted by
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ ...SPRING, delay: 0.1 }}
                    className="text-sm font-light mb-10 text-white/50"
                    style={{ fontFamily: "var(--font-mono)" }}
                >
                    Corporate, nightlife, and private events across Los Angeles.
                </motion.p>

                {/* Logo image row */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ ...SPRING, delay: 0.15 }}
                    className="flex justify-center mt-4"
                >
                    <img
                        src="/logos/trustedby_logos.png"
                        alt="Trusted by EA Sports, City Club LA, Sofitel Los Angeles, Equinox Run Club"
                        className="max-w-md w-full h-auto object-contain"
                        style={{
                            opacity: 0.6,
                        }}
                        draggable={false}
                    />
                </motion.div>

                {/* Hairline below */}
                <motion.div
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={inView ? { scaleX: 1, opacity: 1 } : {}}
                    transition={{ ...SPRING, delay: 0.4 }}
                    className="mt-12 mx-auto"
                    style={{
                        height: "0.5px",
                        width: "120px",
                        background: "linear-gradient(90deg, transparent, rgba(197,160,89,0.35), transparent)",
                        transformOrigin: "center",
                    }}
                />
            </div>
        </section>
    )
}
