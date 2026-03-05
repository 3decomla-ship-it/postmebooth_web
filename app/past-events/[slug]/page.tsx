import { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { EVENTS, getEventBySlug } from "@/lib/events.generated"
import type { ArchiveEvent } from "@/lib/events.generated"
import { EventDetailClient } from "./client"

const HONEYBOOK_URL = "https://postmebooth.hbportal.co/public/book-postmebooth/1-Inquiry_form"

/* ── Static generation ─────────────────────────────────────────────── */

export function generateStaticParams() {
    return EVENTS.map((e) => ({ slug: e.id }))
}

type Props = {
    params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params
    const event = getEventBySlug(slug)
    if (!event) return { title: "Event Not Found" }

    const typeLabel = event.type.charAt(0).toUpperCase() + event.type.slice(1)
    const title = `${event.title} | ${typeLabel} Event`
    const description = `${event.title} — ${typeLabel} event captured by PostMeBooth in Los Angeles. ${event.totalImageCount} portraits, studio quality.`

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            images: event.cover ? [{ url: event.cover }] : [],
        },
    }
}

/* ── Page ───────────────────────────────────────────────────────────── */

export default async function EventDetailPage({ params }: Props) {
    const { slug } = await params
    const event = getEventBySlug(slug) as ArchiveEvent | undefined
    if (!event) notFound()

    const typeLabel = event.type.toUpperCase()

    return (
        <main className="min-h-screen bg-[#050505]">
            {/* Hero */}
            <section className="relative" style={{ height: "clamp(400px, 60vh, 700px)" }}>
                {/* Cover media */}
                {isVideo(event.cover) ? (
                    <video
                        src={event.cover!}
                        muted
                        loop
                        playsInline
                        autoPlay
                        preload="metadata"
                        className="absolute inset-0 w-full h-full object-cover"
                        style={{ opacity: 0.5 }}
                    />
                ) : (
                    <img
                        src={event.cover || event.templateImages[0] || ""}
                        alt={event.title}
                        className="absolute inset-0 w-full h-full object-cover"
                        style={{ opacity: 0.5 }}
                    />
                )}

                {/* Gradient overlay */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: "linear-gradient(to bottom, rgba(5,5,5,0.3) 0%, rgba(5,5,5,0.6) 60%, rgba(5,5,5,1) 100%)",
                    }}
                />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 z-10 pb-12 px-6 lg:px-8">
                    <div className="mx-auto max-w-7xl">
                        {/* Type chip */}
                        <span
                            className="inline-block mb-4 text-[8px] uppercase tracking-[0.2em] px-2.5 py-1 border"
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

                        <h1
                            className="leading-[0.92] tracking-[-0.03em] text-[#F5F5F5] mb-3"
                            style={{
                                fontFamily: "var(--font-cormorant), Georgia, serif",
                                fontWeight: 300,
                                fontSize: "clamp(40px, 7vw, 88px)",
                            }}
                        >
                            {event.title}
                        </h1>

                        {event.venue && (
                            <p
                                className="text-[10px] uppercase tracking-[0.14em] mb-2"
                                style={{
                                    fontFamily: "var(--font-mono)",
                                    fontWeight: 500,
                                    color: "rgba(255,255,255,0.4)",
                                }}
                            >
                                {event.venue}{event.city ? ` — ${event.city}` : ""}
                            </p>
                        )}

                        <div className="flex items-center gap-6 mt-4">
                            <Link
                                href={HONEYBOOK_URL}
                                target="_blank"
                                className="inline-flex px-6 py-3 text-[11px] tracking-[0.14em] uppercase transition-all duration-300"
                                style={{
                                    fontFamily: "var(--font-mono)",
                                    fontWeight: 500,
                                    background: "#C5A059",
                                    color: "#0B0B0C",
                                }}
                            >
                                SECURE A DATE
                            </Link>
                            <Link
                                href="/past-events"
                                className="text-[10px] uppercase tracking-[0.14em] transition-colors hover:text-[#C8B08A]"
                                style={{
                                    fontFamily: "var(--font-mono)",
                                    fontWeight: 500,
                                    color: "rgba(255,255,255,0.35)",
                                }}
                            >
                                ← Back to Archive
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Client-rendered sections (motion + gallery + shared badge) */}
            <EventDetailClient event={event} />
        </main>
    )
}

function isVideo(path: string | null): boolean {
    if (!path) return false
    return /\.(mp4|webm|mov)$/i.test(path)
}
