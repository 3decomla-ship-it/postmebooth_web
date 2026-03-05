"use client"

import { MotionPlayer } from "@/components/archive/motion-player"
import { EventGallery } from "@/components/archive/event-gallery"
import { SharedBadge } from "@/components/archive/shared-badge"
import { HairlineDivider } from "@/components/ui/hairline-divider"
import type { ArchiveEvent } from "@/lib/events.generated"

interface EventDetailClientProps {
    event: ArchiveEvent
}

export function EventDetailClient({ event }: EventDetailClientProps) {
    const hasMotion = event.motion.length > 0
    const hasGallery = event.templateImages.length > 0 || event.rawImages.length > 0

    return (
        <>
            {/* Motion section */}
            {hasMotion && (
                <>
                    <HairlineDivider />
                    <section
                        className="bg-[#050505]"
                        style={{ paddingTop: "clamp(60px, 8vw, 100px)", paddingBottom: "clamp(40px, 5vw, 60px)" }}
                    >
                        <div className="mx-auto max-w-7xl px-6 lg:px-8">
                            <div className="flex items-center justify-between mb-6">
                                <p
                                    className="uppercase tracking-[0.14em] text-[10px]"
                                    style={{
                                        fontFamily: "var(--font-mono)",
                                        fontWeight: 500,
                                        color: "rgba(197,160,89,0.6)",
                                    }}
                                >
                                    Motion
                                </p>
                                <SharedBadge />
                            </div>

                            {/* Show up to 2 motion clips side by side — pick first + last for max visual variety */}
                            {(() => {
                                const clips = event.motion;
                                // Pick first and last to maximize visual difference
                                const selected = clips.length >= 3
                                    ? [clips[0], clips[clips.length - 1]]
                                    : clips.length === 2
                                        ? [clips[0], clips[1]]
                                        : [clips[0]];
                                return (
                                    <div className={`grid gap-3 ${selected.length > 1 ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1"}`}>
                                        {selected.map((src) => (
                                            <div
                                                key={src}
                                                className="relative overflow-hidden rounded-sm"
                                                style={{ aspectRatio: "9 / 16", maxHeight: "600px" }}
                                            >
                                                <MotionPlayer src={src} />
                                            </div>
                                        ))}
                                    </div>
                                );
                            })()}
                        </div>
                    </section>
                </>
            )}

            {/* Gallery section */}
            {hasGallery && (
                <>
                    <HairlineDivider />
                    <section
                        className="bg-[#050505]"
                        style={{ paddingTop: "clamp(60px, 8vw, 100px)", paddingBottom: "clamp(80px, 10vw, 140px)" }}
                    >
                        <div className="mx-auto max-w-7xl px-6 lg:px-8">
                            <p
                                className="uppercase tracking-[0.14em] text-[10px] mb-8"
                                style={{
                                    fontFamily: "var(--font-mono)",
                                    fontWeight: 500,
                                    color: "rgba(197,160,89,0.6)",
                                }}
                            >
                                Gallery
                            </p>

                            <EventGallery
                                templateImages={event.templateImages}
                                rawImages={event.rawImages}
                                title={event.title}
                                cover={event.cover}
                            />
                        </div>
                    </section>
                </>
            )}

            <HairlineDivider />
        </>
    )
}
