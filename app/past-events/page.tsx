import { EVENTS } from "@/lib/events.generated"
import { ArchiveGrid } from "@/components/archive/archive-grid"
import { HairlineDivider } from "@/components/ui/hairline-divider"

export default function PastEventsPage() {
    return (
        <main className="min-h-screen bg-[#050505]">
            {/* Hero */}
            <section
                className="bg-[#040404]"
                style={{ paddingTop: "clamp(120px, 14vw, 200px)", paddingBottom: "clamp(64px, 8vw, 100px)" }}
            >
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="flex justify-between items-start">
                        <p
                            className="uppercase tracking-[0.18em] text-[10px] mb-6"
                            style={{
                                fontFamily: "var(--font-mono)",
                                fontWeight: 500,
                                color: "rgba(197,160,89,0.7)",
                            }}
                        >
                            Proof from real rooms. Portrait first.
                        </p>
                    </div>
                    <h1
                        className="leading-[0.9] tracking-[-0.04em] text-[#F2EFE9] mb-6"
                        style={{
                            fontFamily: "var(--font-cormorant), Georgia, serif",
                            fontWeight: 300,
                            fontSize: "clamp(52px, 8vw, 104px)",
                        }}
                    >
                        The Archive
                    </h1>
                    <p
                        className="font-light"
                        style={{
                            fontSize: "15px",
                            color: "rgba(255,255,255,0.4)",
                            lineHeight: "1.8",
                            maxWidth: "50ch",
                        }}
                    >
                        Past events, guest portraits, and real-room proof from every type of event we serve.
                    </p>
                </div>
            </section>

            <HairlineDivider />

            {/* Grid with filters */}
            <ArchiveGrid events={EVENTS as unknown as import("@/lib/events.generated").ArchiveEvent[]} />

            <HairlineDivider />
        </main>
    )
}
