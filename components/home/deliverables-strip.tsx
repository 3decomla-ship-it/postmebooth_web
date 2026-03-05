import { Smartphone, Mail, Image as ImageIcon, Zap, Layers } from "lucide-react"

export function DeliverablesStrip() {
    return (
        <section className="bg-[#050505] py-16 md:py-24 px-6 lg:px-8 border-b border-white/5">
            <div className="mx-auto max-w-7xl">
                <div className="text-center mb-16">
                    <p
                        className="mb-4"
                        style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: "10px",
                            fontWeight: 500,
                            letterSpacing: "0.18em",
                            textTransform: "uppercase",
                            color: "rgba(197,160,89,0.65)",
                        }}
                    >
                        What Every Guest Walks Away With
                    </p>
                    <h2
                        className="font-serif text-[#F5F5F5]"
                        style={{
                            fontSize: "clamp(32px, 4vw, 54px)",
                            fontWeight: 300,
                            letterSpacing: "-0.02em",
                            lineHeight: 1.05,
                        }}
                    >
                        The Deliverable.
                    </h2>
                    <p
                        className="mt-4 mx-auto"
                        style={{
                            fontSize: "15px",
                            color: "rgba(255,255,255,0.38)",
                            maxWidth: "38ch",
                            lineHeight: 1.7,
                            fontWeight: 300,
                        }}
                    >
                        Snap. Send. Seen. Before the song ends.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {[
                        {
                            icon: Smartphone,
                            title: "Instant SMS",
                            desc: "Photo on their phone before the next song. Zero friction.",
                        },
                        {
                            icon: Mail,
                            title: "SMS or email",
                            desc: "Delivered to the pocket. They'll repost before they leave.",
                        },
                        {
                            icon: ImageIcon,
                            title: "Full-Frame Portraits",
                            desc: "Sony glass. Studio light. The shot that makes them say 'wait, send me that.'",
                        },
                        {
                            icon: Zap,
                            title: "Motion GIFs",
                            desc: "Loopable. Shareable. Built for stories and feeds.",
                        },
                        {
                            icon: Layers,
                            title: "Event Overlays",
                            desc: "Your name. Your date. Your brand on every frame.",
                        },
                    ].map((item, idx) => (
                        <div
                            key={idx}
                            className="flex flex-col items-center text-center p-6 hover:border-[#C5A059]/20 transition-colors group"
                            style={{
                                background: "rgba(255,255,255,0.02)",
                                border: "0.5px solid rgba(255,255,255,0.07)",
                            }}
                        >
                            <item.icon
                                className="h-7 w-7 mb-4 group-hover:scale-110 transition-transform"
                                style={{ color: "rgba(197,160,89,0.7)" }}
                            />
                            <h3
                                className="mb-1.5"
                                style={{
                                    fontFamily: "var(--font-mono)",
                                    fontSize: "10px",
                                    fontWeight: 500,
                                    letterSpacing: "0.14em",
                                    textTransform: "uppercase",
                                    color: "#F2EFE9",
                                }}
                            >
                                {item.title}
                            </h3>
                            <p
                                style={{
                                    fontSize: "12px",
                                    color: "rgba(255,255,255,0.35)",
                                    lineHeight: 1.6,
                                    fontWeight: 300,
                                }}
                            >
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
