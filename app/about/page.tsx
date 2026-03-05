import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { HairlineDivider } from "@/components/ui/hairline-divider"
import { TrustedBy } from "@/components/home/trusted-by"

export const metadata: Metadata = {
    title: "About | PostMeBooth Los Angeles",
    description: "PostMeBooth is built for events that care how the night looks. Studio quality portraits with instant delivery.",
    openGraph: {
        title: "About | PostMeBooth Los Angeles",
        description: "PostMeBooth is built for events that care how the night looks. Studio quality portraits with instant delivery.",
        url: "https://postmebooth.com/about",
    },
}

const HONEYBOOK_URL = "https://postmebooth.hbportal.co/public/book-postmebooth/1-Inquiry_form"



export default function AboutPage() {
    return (
        <main className="min-h-screen bg-[#050505]">
            {/* Hero */}
            <section
                className="bg-[#040404]"
                style={{ paddingTop: "clamp(120px, 14vw, 200px)", paddingBottom: "clamp(80px, 10vw, 140px)" }}
            >
                <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center flex flex-col items-center">
                    <h1
                        className="leading-[0.9] tracking-[-0.04em] text-[#F2EFE9] mb-6"
                        style={{
                            fontFamily: "var(--font-cormorant), Georgia, serif",
                            fontWeight: 300,
                            fontSize: "clamp(52px, 8vw, 96px)",
                        }}
                    >
                        About PostMeBooth
                    </h1>

                    <h2
                        className="font-light italic mb-12"
                        style={{
                            fontSize: "clamp(24px, 4vw, 36px)",
                            color: "#C5A059",
                            fontFamily: "var(--font-cormorant), Georgia, serif",
                        }}
                    >
                        Built for events that care how the night looks.
                    </h2>

                    <div
                        className="max-w-2xl leading-[1.8] font-light space-y-6 text-left mb-12 mx-auto"
                        style={{ fontSize: "clamp(16px, 1.8vw, 19px)", color: "rgba(255,255,255,0.65)" }}
                    >
                        <p>
                            PostMeBooth exists because most events feel incredible in real life, then disappear the next day.
                        </p>
                        <p>
                            We built a booth experience that produces studio quality portraits and delivers them instantly, so guests actually share the moment while it’s happening.
                        </p>
                        <p>
                            The result is clean, premium output and an organized archive after the event. No chaos. No cheap look.
                        </p>
                    </div>

                    <p
                        className="uppercase tracking-[0.16em] text-[11px] mb-12"
                        style={{
                            fontFamily: "var(--font-mono)",
                            fontWeight: 500,
                            color: "rgba(197,160,89,0.8)",
                            borderTop: "1px solid rgba(197,160,89,0.2)",
                            borderBottom: "1px solid rgba(197,160,89,0.2)",
                            padding: "16px 0",
                            width: "100%",
                            maxWidth: "480px",
                        }}
                    >
                        Optics: Sony a7IV · Delivery: SMS or email · Gallery: Private link
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-6">
                        <Link href={HONEYBOOK_URL} target="_blank">
                            <button
                                className="h-[56px] px-10 text-[11px] font-medium uppercase tracking-[0.16em] transition-all hover:bg-[#D8C09A] hover:scale-105"
                                style={{
                                    fontFamily: "var(--font-mono)",
                                    background: "#C5A059",
                                    color: "#0B0B0C",
                                    border: "none",
                                    cursor: "pointer",
                                }}
                            >
                                SECURE A DATE
                            </button>
                        </Link>

                        <Link
                            href="/past-events"
                            className="group flex items-center gap-3"
                            style={{
                                fontFamily: "var(--font-mono)",
                                fontSize: "11px",
                                fontWeight: 500,
                                letterSpacing: "0.16em",
                                textTransform: "uppercase",
                                color: "rgba(242,239,233,0.7)",
                            }}
                        >
                            <span className="border-b border-transparent group-hover:border-[rgba(242,239,233,0.3)] transition-colors pb-1">
                                VIEW THE ARCHIVE
                            </span>
                            <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </section>

            <HairlineDivider />

            {/* Trusted By */}
            <section
                className="bg-[#0b0b0b] py-24"
            >
                <TrustedBy />
            </section>

            <HairlineDivider />

            {/* Final CTA */}
        </main>
    )
}
