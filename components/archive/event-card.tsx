"use client"

import Link from "next/link"
import type { ArchiveEvent } from "@/lib/events.generated"

/**
 * EventCard — portrait-first 9:16 card for the archive grid.
 * Cover image, mono type chip, title, optional venue, hover lift.
 */
interface EventCardProps {
    event: ArchiveEvent
    index?: number
}

/** Check if a path is a video file */
function isVideo(path: string | null): boolean {
    if (!path) return false
    return /\.(mp4|webm|mov)$/i.test(path)
}

export function EventCard({ event }: EventCardProps) {
    const typeLabel = event.type.toUpperCase()

    return (
        <Link
            href={`/past-events/${event.id}`}
            className="group relative block overflow-hidden cursor-pointer transition-transform duration-500 hover:-translate-y-1"
            style={{ aspectRatio: "9 / 16" }}
        >
            {/* Cover media */}
            {isVideo(event.cover) ? (
                <video
                    src={event.cover!}
                    muted
                    loop
                    playsInline
                    autoPlay
                    preload="metadata"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ opacity: 0.65 }}
                />
            ) : (
                <img
                    src={event.cover || event.templateImages[0] || ""}
                    alt={event.title}
                    loading="lazy"
                    draggable={false}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ opacity: 0.65 }}
                />
            )}

            {/* Gradient overlay */}
            <div
                className="absolute inset-0 transition-opacity duration-500"
                style={{
                    background: "linear-gradient(to bottom, rgba(8,8,8,0.1) 0%, transparent 35%, rgba(8,8,8,0.88) 100%)",
                }}
            />

            {/* Type chip */}
            <div className="absolute top-4 left-4 z-10 pointer-events-none">
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
                    {typeLabel}
                </span>
            </div>

            {/* Bottom text */}
            <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-5 z-10 pointer-events-none">
                <p
                    className="text-[#F5F5F5] leading-[1.2] mb-1"
                    style={{
                        fontFamily: "var(--font-cormorant), Georgia, serif",
                        fontWeight: 300,
                        fontSize: "clamp(15px, 1.8vw, 22px)",
                    }}
                >
                    {event.title}
                </p>
                {event.venue && (
                    <p
                        className="text-[8px] uppercase tracking-[0.15em]"
                        style={{
                            fontFamily: "var(--font-mono)",
                            color: "rgba(255,255,255,0.35)",
                            fontWeight: 500,
                        }}
                    >
                        {event.venue}
                    </p>
                )}
            </div>

            {/* Hover border */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#C8B08A]/25 transition-colors duration-500 pointer-events-none" />
        </Link>
    )
}
