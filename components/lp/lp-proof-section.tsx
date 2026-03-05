"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { MotionPlayer } from "@/components/archive/motion-player"

const SPRING = { stiffness: 70, damping: 22, mass: 1.1 }

interface LpProofSectionProps {
    /** 6 portrait image paths for the grid */
    images: string[]
    /** Optional autoplay MP4 loop */
    loop?: { src: string; poster?: string }
    /** Heading above the grid */
    heading?: string
}

export function LpProofSection({ images, loop, heading = "Real Rooms. Real Output." }: LpProofSectionProps) {
    const ref = useRef<HTMLDivElement>(null)
    const inView = useInView(ref, { once: true, amount: 0.15 })

    return (
        <section className="py-24 px-6 border-b border-white/5 bg-[#040404]">
            <div ref={ref} className="max-w-7xl mx-auto">
                {/* Section heading */}
                <motion.p
                    className="text-center font-mono text-[10px] uppercase tracking-[0.2em] text-[#C5A059] mb-6"
                    initial={{ opacity: 0, y: 14 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={SPRING}
                >
                    {heading}
                </motion.p>

                {/* Trusted-by logo image */}
                <motion.div
                    className="flex justify-center mb-16"
                    initial={{ opacity: 0, y: 12 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ ...SPRING, delay: 0.08 }}
                >
                    <img
                        src="/logos/trustedby_logos.png"
                        alt="Trusted by EA Sports, City Club LA, Sofitel Los Angeles, Equinox Run Club"
                        className="max-w-sm w-full h-auto object-contain"
                        style={{
                            opacity: 0.6,
                        }}
                        draggable={false}
                    />
                </motion.div>

                {/* Optional autoplay loop */}
                {loop && (
                    <motion.div
                        className="mx-auto max-w-3xl mb-16 overflow-hidden"
                        style={{ aspectRatio: "16 / 9" }}
                        initial={{ opacity: 0, y: 24, scale: 0.97 }}
                        animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                        transition={{ ...SPRING, delay: 0.12 }}
                    >

                        <MotionPlayer
                            src={loop.src}
                            poster={loop.poster}
                            className="w-full h-full"
                        />
                    </motion.div>
                )}

                {/* Portrait grid — 6 tiles (2x3 on mobile, 3x2 on desktop) */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {images.slice(0, 6).map((src, i) => (
                        <motion.div
                            key={src}
                            className="relative overflow-hidden bg-[#0A0A0A] group"
                            style={{ aspectRatio: "4 / 5" }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ ...SPRING, delay: 0.15 + i * 0.06 }}
                        >
                            {src.endsWith(".mp4") ? (
                                <video
                                    src={src}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                                />
                            ) : (
                                <img
                                    src={src}
                                    alt="PostMeBooth event portrait"
                                    loading="lazy"
                                    draggable={false}
                                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                                />
                            )}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
