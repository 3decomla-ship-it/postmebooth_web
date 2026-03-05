"use client"

import Link from "next/link"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { EVENTS } from "@/lib/events.generated"
import type { ArchiveEvent } from "@/lib/events.generated"

const SPRING = { stiffness: 70, damping: 22, mass: 1.1 }

/** Show featured events first, then first 6 */
function getPreviewEvents(): ArchiveEvent[] {
    const all = EVENTS as unknown as ArchiveEvent[]
    const featured = all.filter((e) => e.featured)
    if (featured.length >= 6) return featured.slice(0, 6)
    const rest = all.filter((e) => !e.featured)
    return [...featured, ...rest].slice(0, 6)
}

/** Check if a path is a video file */
function isVideo(path: string | null): boolean {
    if (!path) return false
    return /\.(mp4|webm|mov)$/i.test(path)
}

export function PastEventsPreview() {
    const ref = useRef<HTMLDivElement>(null)
    const inView = useInView(ref, { once: true, amount: 0.15 })
    const events = getPreviewEvents()

    return (
        <section
            className="bg-[#080808] border-b border-white/[0.05]"
            style={{ paddingTop: "var(--section-pad)", paddingBottom: "var(--section-pad)" }}
        >
            <div ref={ref} className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    className="flex items-end justify-between mb-12"
                    initial={{ opacity: 0, y: 24 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={SPRING}
                >
                    <div>
                        <p
                            className="uppercase tracking-[0.14em] text-[11px] mb-3"
                            style={{
                                fontFamily: "var(--font-mono)",
                                fontWeight: 500,
                                color: "rgba(197,160,89,0.75)",
                            }}
                        >
                            Proof from real rooms. Portrait first.
                        </p>
                        <h2
                            className="leading-[0.92] tracking-[-0.03em] text-[#F5F5F5]"
                            style={{
                                fontFamily: "var(--font-cormorant), Georgia, serif",
                                fontWeight: 300,
                                fontSize: "clamp(36px, 5vw, 64px)",
                            }}
                        >
                            The Archive
                        </h2>
                    </div>

                    <Link
                        href="/past-events"
                        className="hidden lg:flex items-center gap-2 transition-all duration-300 group"
                        style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: "10px",
                            fontWeight: 500,
                            letterSpacing: "0.14em",
                            textTransform: "uppercase",
                            color: "rgba(197,160,89,0.6)",
                        }}
                        onMouseEnter={e => (e.currentTarget.style.color = "rgba(197,160,89,1)")}
                        onMouseLeave={e => (e.currentTarget.style.color = "rgba(197,160,89,0.6)")}
                    >
                        VIEW THE ARCHIVE <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>

                {/* Portrait grid — 6 real event cards */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 lg:gap-4">
                    {events.map((event, i) => (
                        <motion.div
                            key={event.id}
                            initial={{ opacity: 0, y: 32 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ ...SPRING, delay: 0.05 + i * 0.06 }}
                        >
                            <Link
                                href={`/past-events/${event.id}`}
                                className="group relative block overflow-hidden cursor-pointer"
                                style={{ aspectRatio: "9 / 16" }}
                            >
                                {/* Portrait image or video */}
                                {isVideo(event.cover) ? (
                                    <video
                                        src={event.cover!}
                                        muted
                                        loop
                                        playsInline
                                        autoPlay
                                        preload="metadata"
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        style={{ opacity: 0.6 }}
                                    />
                                ) : (
                                    <img
                                        src={event.cover || event.templateImages[0] || ""}
                                        alt={event.title}
                                        loading="lazy"
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        style={{ opacity: 0.6 }}
                                    />
                                )}

                                {/* Gradient overlay */}
                                <div
                                    className="absolute inset-0 transition-opacity duration-500"
                                    style={{
                                        background: "linear-gradient(to bottom, rgba(8,8,8,0.1) 0%, transparent 35%, rgba(8,8,8,0.85) 100%)",
                                    }}
                                />

                                {/* Tag chip */}
                                <div className="absolute top-4 left-4 z-10">
                                    <span
                                        className="text-[8px] uppercase tracking-[0.2em] px-2.5 py-1 border"
                                        style={{
                                            fontFamily: "var(--font-mono)",
                                            fontWeight: 500,
                                            color: "rgba(212,196,168,0.7)",
                                            borderColor: "rgba(212,196,168,0.2)",
                                            background: "rgba(8,8,8,0.6)",
                                            backdropFilter: "blur(6px)",
                                        }}
                                    >
                                        {event.type.toUpperCase()}
                                    </span>
                                </div>

                                {/* Bottom text */}
                                <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                                    <p
                                        className="text-[#F5F5F5] text-[13px] leading-[1.3] mb-1"
                                        style={{
                                            fontFamily: "var(--font-cormorant), Georgia, serif",
                                            fontWeight: 300,
                                        }}
                                    >
                                        {event.title}
                                    </p>
                                    {event.venue && (
                                        <p
                                            className="text-[8px] uppercase tracking-[0.15em]"
                                            style={{
                                                fontFamily: "var(--font-mono)",
                                                color: "rgba(255,255,255,0.3)",
                                                fontWeight: 500,
                                            }}
                                        >
                                            {event.venue}
                                        </p>
                                    )}
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Mobile CTA */}
                <div className="mt-8 text-center lg:hidden">
                    <Link
                        href="/past-events"
                        className="inline-flex items-center gap-2"
                        style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: "10px",
                            fontWeight: 500,
                            letterSpacing: "0.14em",
                            textTransform: "uppercase",
                            color: "rgba(197,160,89,0.7)",
                        }}
                    >
                        VIEW THE ARCHIVE <ArrowRight className="h-3 w-3" />
                    </Link>
                </div>
            </div>
        </section>
    )
}
