"use client"

import { useState } from "react"
import { EventCard } from "./event-card"
import type { ArchiveEvent } from "@/lib/events.generated"

const FILTER_TAGS = ["All", "Corporate", "Nightlife", "Weddings"] as const
type TagType = (typeof FILTER_TAGS)[number]

const TAG_TO_TYPE: Record<string, ArchiveEvent["type"] | undefined> = {
    All: undefined,
    Corporate: "corporate",
    Nightlife: "nightlife",
    Weddings: "weddings",
}

/**
 * ArchiveGrid — filterable portrait-first 9:16 card grid.
 * Reuses existing design tokens (mono font, champagne accent, dark surfaces).
 */
interface ArchiveGridProps {
    events: ArchiveEvent[]
}

export function ArchiveGrid({ events }: ArchiveGridProps) {
    const [activeTag, setActiveTag] = useState<TagType>("All")

    const filtered =
        activeTag === "All"
            ? events
            : events.filter((e) => e.type === TAG_TO_TYPE[activeTag])

    return (
        <>
            {/* Filter chips — sticky below header */}
            <div
                className="bg-[#050505] sticky top-[60px] lg:top-[72px] z-30 border-b"
                style={{ borderColor: "rgba(255,255,255,0.05)" }}
            >
                <div className="mx-auto max-w-7xl px-6 lg:px-8 py-4 flex gap-3 flex-wrap items-center">
                    {FILTER_TAGS.map((tag) => (
                        <button
                            key={tag}
                            onClick={() => setActiveTag(tag)}
                            className="transition-all duration-300"
                            style={{
                                fontFamily: "var(--font-mono)",
                                fontSize: "10px",
                                fontWeight: 500,
                                letterSpacing: "0.14em",
                                textTransform: "uppercase",
                                padding: "8px 16px",
                                border: `1px solid ${activeTag === tag ? "rgba(200,176,138,0.5)" : "rgba(255,255,255,0.08)"}`,
                                background: activeTag === tag ? "rgba(200,176,138,0.08)" : "transparent",
                                color: activeTag === tag ? "rgba(200,176,138,1)" : "rgba(255,255,255,0.5)",
                                cursor: "pointer",
                            }}
                        >
                            {tag}
                        </button>
                    ))}

                    <span
                        className="ml-auto"
                        style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: "10px",
                            fontWeight: 500,
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                            color: "rgba(255,255,255,0.2)",
                        }}
                    >
                        {filtered.length} event{filtered.length !== 1 ? "s" : ""}
                    </span>
                </div>
            </div>

            {/* Portrait grid */}
            <section
                className="bg-[#050505]"
                style={{ paddingTop: "clamp(48px, 6vw, 80px)", paddingBottom: "clamp(80px, 10vw, 140px)" }}
            >
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4">
                        {filtered.map((event, i) => (
                            <EventCard key={event.id} event={event} index={i} />
                        ))}
                    </div>

                    {filtered.length === 0 && (
                        <p
                            className="text-center py-24"
                            style={{
                                fontFamily: "var(--font-mono)",
                                fontSize: "11px",
                                letterSpacing: "0.12em",
                                textTransform: "uppercase",
                                color: "rgba(255,255,255,0.25)",
                            }}
                        >
                            No events in this category yet.
                        </p>
                    )}
                </div>
            </section>
        </>
    )
}
