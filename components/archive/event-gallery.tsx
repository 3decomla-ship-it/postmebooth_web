"use client"

import { useState } from "react"

/**
 * EventGallery — image gallery with Template/Clean toggle.
 *
 * Adaptive layouts based on image count:
 * - ≤5: "Feature Story" layout (small grid + text)
 * - 6–20: normal grid
 * - 20+: curated 12 + "More from this room" strip (3 extra)
 */
interface EventGalleryProps {
    templateImages: string[]
    rawImages: string[]
    title: string
    cover?: string | null
}

export function EventGallery({ templateImages, rawImages, title, cover }: EventGalleryProps) {
    const hasRaw = rawImages.length > 0
    const [showClean, setShowClean] = useState(false)

    const activeImages = showClean ? rawImages : templateImages
    const totalCount = activeImages.length

    // Remove cover image from gallery to avoid duplicates
    const galleryImages = cover
        ? activeImages.filter((img) => img !== cover)
        : activeImages

    // Layout selection
    const isFeatureStory = galleryImages.length <= 5
    const isCurated = galleryImages.length > 20
    const curatedMain = isCurated ? galleryImages.slice(0, 12) : galleryImages
    const curatedExtra = isCurated ? galleryImages.slice(12, 15) : []

    return (
        <div>
            {/* Toggle */}
            {hasRaw && (
                <div className="flex items-center gap-3 mb-8">
                    <button
                        onClick={() => setShowClean(false)}
                        className="transition-all duration-300"
                        style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: "10px",
                            fontWeight: 500,
                            letterSpacing: "0.14em",
                            textTransform: "uppercase" as const,
                            padding: "8px 16px",
                            border: `1px solid ${!showClean ? "rgba(200,176,138,0.5)" : "rgba(255,255,255,0.08)"}`,
                            background: !showClean ? "rgba(200,176,138,0.08)" : "transparent",
                            color: !showClean ? "rgba(200,176,138,1)" : "rgba(255,255,255,0.4)",
                            cursor: "pointer",
                        }}
                    >
                        Template
                    </button>
                    <button
                        onClick={() => setShowClean(true)}
                        className="transition-all duration-300"
                        style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: "10px",
                            fontWeight: 500,
                            letterSpacing: "0.14em",
                            textTransform: "uppercase" as const,
                            padding: "8px 16px",
                            border: `1px solid ${showClean ? "rgba(200,176,138,0.5)" : "rgba(255,255,255,0.08)"}`,
                            background: showClean ? "rgba(200,176,138,0.08)" : "transparent",
                            color: showClean ? "rgba(200,176,138,1)" : "rgba(255,255,255,0.4)",
                            cursor: "pointer",
                        }}
                    >
                        Clean
                    </button>

                    <span
                        className="ml-auto"
                        style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: "9px",
                            fontWeight: 500,
                            letterSpacing: "0.12em",
                            textTransform: "uppercase" as const,
                            color: "rgba(255,255,255,0.2)",
                        }}
                    >
                        {totalCount} selects
                    </span>
                </div>
            )}

            {/* Gallery grid */}
            {isFeatureStory ? (
                /* Feature Story layout for small galleries */
                <div className="grid grid-cols-2 gap-2 lg:gap-3">
                    {galleryImages.map((img, i) => (
                        <div
                            key={img}
                            className={`relative overflow-hidden ${i === 0 ? "col-span-2" : ""}`}
                            style={{ aspectRatio: i === 0 ? "16 / 9" : "9 / 16" }}
                        >
                            <img
                                src={img}
                                alt={`${title} portrait ${i + 1}`}
                                loading="lazy"
                                className="w-full h-full object-cover"
                                style={{ opacity: 0.9 }}
                            />
                        </div>
                    ))}
                </div>
            ) : (
                /* Normal / Curated Grid */
                <>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 lg:gap-3">
                        {curatedMain.map((img, i) => (
                            <div
                                key={img}
                                className="relative overflow-hidden group"
                                style={{ aspectRatio: "9 / 16" }}
                            >
                                <img
                                    src={img}
                                    alt={`${title} portrait ${i + 1}`}
                                    loading="lazy"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    style={{ opacity: 0.9 }}
                                />
                            </div>
                        ))}
                    </div>

                    {/* "More from this room" strip */}
                    {isCurated && curatedExtra.length > 0 && (
                        <div className="mt-8">
                            <p
                                className="mb-4"
                                style={{
                                    fontFamily: "var(--font-mono)",
                                    fontSize: "10px",
                                    fontWeight: 500,
                                    letterSpacing: "0.14em",
                                    textTransform: "uppercase" as const,
                                    color: "rgba(255,255,255,0.3)",
                                }}
                            >
                                More from this room
                            </p>
                            <div className="flex gap-2 lg:gap-3 overflow-x-auto pb-4">
                                {curatedExtra.map((img, i) => (
                                    <div
                                        key={img}
                                        className="relative overflow-hidden flex-shrink-0"
                                        style={{ width: "180px", aspectRatio: "9 / 16" }}
                                    >
                                        <img
                                            src={img}
                                            alt={`${title} additional ${i + 1}`}
                                            loading="lazy"
                                            className="w-full h-full object-cover"
                                            style={{ opacity: 0.85 }}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </>
            )}
        </div>
    )
}
