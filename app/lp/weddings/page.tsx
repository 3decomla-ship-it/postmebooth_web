"use client"

import Link from "next/link"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Box, Camera, Frame, MonitorPlay, Smartphone } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { FinalCta } from "@/components/home/final-cta"
import { MagneticButton } from "@/components/ui/magnetic-button"
import { LpProofSection } from "@/components/lp/lp-proof-section"

const WEDDING_PROOF_IMAGES = [
    "/events/wedding-jasmineandadrian-cityla/template/0037-wedding_-d1-template.jpg",
    "/events/wedding-jasmineandadrian-cityla/template/0093-wedding_-d1-template.jpg",
    "/events/wedding-jasmineandadrian-cityla/gif/0322-wedding_-d1.mp4",
    "/events/wedding-jasmineandadrian-cityla/template/0260-wedding_-d1-template.jpg",
    "/events/wedding-jasmineandadrian-cityla/template/0325-wedding_-d1-template.jpg",
    "/events/wedding-jasmineandadrian-cityla/template/0367-wedding_-d1-template.jpg",
]

const WEDDING_LOOP = {
    src: "/events/wedding-jasmineandadrian-cityla/gif/0380-wedding_-d1.mp4",
    poster: "/events/wedding-jasmineandadrian-cityla/front/0370-wedding_-d1-template.jpg",
}

const HONEYBOOK_URL = "https://postmebooth.hbportal.co/public/book-postmebooth/1-Inquiry_form"

/* Softer spring for wedding elegance */
const SPRING = { stiffness: 55, damping: 24, mass: 1.3 }

export default function WeddingsPage() {
    const heroRef = useRef<HTMLDivElement>(null)
    const heroInView = useInView(heroRef, { once: true, amount: 0.15 })
    const comfortRef = useRef<HTMLDivElement>(null)
    const comfortInView = useInView(comfortRef, { once: true, amount: 0.15 })
    const deliverablesRef = useRef<HTMLDivElement>(null)
    const deliverablesInView = useInView(deliverablesRef, { once: true, amount: 0.2 })
    const plannerRef = useRef<HTMLDivElement>(null)
    const plannerInView = useInView(plannerRef, { once: true, amount: 0.2 })
    const faqRef = useRef<HTMLDivElement>(null)
    const faqInView = useInView(faqRef, { once: true, amount: 0.2 })

    return (
        <main className="bg-[#040404] min-h-screen flex flex-col overflow-hidden text-[#F5F5F5]">
            {/* HERO - SOFT EDITORIAL */}
            <section className="relative flex min-h-[85vh] flex-col items-center justify-center px-6 pt-32 pb-24 border-b border-white/5">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-white/[0.03] via-[#040404] to-[#040404] opacity-80 pointer-events-none" />

                <div ref={heroRef}>
                    <motion.p
                        className="mb-8 uppercase tracking-[0.2em] font-mono text-[10px] font-medium text-[rgba(212,196,168,0.5)] text-center"
                        initial={{ opacity: 0, y: 14 }}
                        animate={heroInView ? { opacity: 1, y: 0 } : {}}
                        transition={SPRING}
                    >
                        WEDDINGS & PRIVATE ESTATES · LOS ANGELES
                    </motion.p>

                    <motion.h1
                        className="max-w-4xl mb-6 text-center text-balance font-serif font-light text-[clamp(40px,7vw,90px)] leading-[1.05] tracking-tight text-[#F2EFE9]"
                        initial={{ opacity: 0, y: 28 }}
                        animate={heroInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ ...SPRING, delay: 0.1 }}
                    >
                        A visual record that matches<br />the design of your room.
                    </motion.h1>

                    <motion.p
                        className="max-w-2xl mb-12 text-center text-balance text-[15px] sm:text-[17px] text-[rgba(242,239,233,0.5)] leading-relaxed font-light mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={heroInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ ...SPRING, delay: 0.2 }}
                    >
                        Your wedding shouldn&apos;t feature a neon plastic photo tower. We built an open air studio that blends into luxury spaces. You get flattering, editorial quality portraits that actually belong in your gallery.
                    </motion.p>

                    <motion.div
                        className="flex justify-center"
                        initial={{ opacity: 0, y: 16 }}
                        animate={heroInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ ...SPRING, delay: 0.3 }}
                    >
                        <MagneticButton strength={0.2} radius={100}>
                            <Link href={HONEYBOOK_URL} target="_blank">
                                <button className="relative overflow-hidden transition-shadow duration-500 shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:shadow-[0_0_40px_rgba(255,255,255,0.15)] px-10 h-14 font-mono text-[11px] font-medium tracking-[0.16em] uppercase text-[#F5F5F5] bg-transparent border border-white/20 hover:border-white/40">
                                    SECURE A DATE
                                </button>
                            </Link>
                        </MagneticButton>
                    </motion.div>
                </div>
            </section>

            {/* SECTION 2: Designed for Guests (3 Comfort Cards) */}
            <section className="py-24 px-6 border-b border-white/5">
                <div ref={comfortRef} className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { title: "Flattering Light", desc: "Custom strobe positioning means even, soft light that hides blemishes and makes everyone feel confident stepping in." },
                        { title: "Open Space", desc: "No claustrophobic black curtains. The open air footprint fits large groups easily and invites the whole room to watch." },
                        { title: "Immediate Gratification", desc: "No waiting. The moment it clicks, they get an SMS or email link with the pristine master file ready to save." },
                    ].map((item, i) => (
                        <motion.div
                            key={item.title}
                            className="bg-[#050505] border border-white/5 p-10 sm:p-12 hover:border-white/10 transition-colors duration-500"
                            initial={{ opacity: 0, y: 28 }}
                            animate={comfortInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ ...SPRING, delay: i * 0.12 }}
                        >
                            <h3 className="text-xl font-serif text-[#C5A059] mb-4">{item.title}</h3>
                            <p className="text-sm text-[rgba(242,239,233,0.6)] leading-relaxed font-light">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* SECTION 3: What guests receive (5 item row) */}
            <section className="py-24 px-6 border-b border-white/5 bg-[#080808]">
                <div ref={deliverablesRef} className="max-w-7xl mx-auto">
                    <motion.h2
                        className="text-center font-mono text-[10px] uppercase tracking-[0.2em] text-[#C5A059] mb-16"
                        initial={{ opacity: 0, y: 16 }}
                        animate={deliverablesInView ? { opacity: 1, y: 0 } : {}}
                        transition={SPRING}
                    >
                        The Deliverables
                    </motion.h2>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center divide-x divide-white/5">
                        {[
                            { icon: Camera, title: "Photos", sub: "High Res Stills" },
                            { icon: MonitorPlay, title: "GIFs", sub: "Optional Motion" },
                            { icon: Smartphone, title: "SMS + Email", sub: "Direct to Phone" },
                            { icon: Box, title: "Gallery", sub: "Private Link" },
                            { icon: Frame, title: "Overlay", sub: "Optional Branding" },
                        ].map((item, i) => (
                            <motion.div
                                key={item.title}
                                className={`flex flex-col items-center px-4 ${i === 4 ? "border-l-0 md:border-l border-white/5" : ""}`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={deliverablesInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ ...SPRING, delay: i * 0.08 }}
                            >
                                <item.icon className="w-5 h-5 text-white/30 mb-4" />
                                <h4 className="text-[11px] font-mono tracking-widest uppercase text-white mb-2">{item.title}</h4>
                                <p className="text-xs text-white/40 font-light">{item.sub}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 4: Planner Friendly */}
            <section className="py-24 px-6 border-b border-[rgba(255,255,255,0.03)]">
                <div ref={plannerRef} className="max-w-4xl mx-auto text-center">
                    <motion.h2
                        className="text-2xl font-serif text-[#F2EFE9] mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        animate={plannerInView ? { opacity: 1, y: 0 } : {}}
                        transition={SPRING}
                    >
                        Built for the run of show.
                    </motion.h2>
                    <ul className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
                        {[
                            { num: "1", title: "Quick Setup.", desc: "We are completely built and tested in under an hour." },
                            { num: "2", title: "Small Footprint.", desc: "Elegant monolith design hides cables. 8x8 space is all we need." },
                            { num: "3", title: "Clean Operation.", desc: "Professional attendants dress in black. Zero intrusive behavior." },
                        ].map((item, i) => (
                            <motion.li
                                key={item.num}
                                className="flex gap-4 items-start"
                                initial={{ opacity: 0, y: 20 }}
                                animate={plannerInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ ...SPRING, delay: 0.08 + i * 0.1 }}
                            >
                                <span className="font-serif italic text-xl text-[#C5A059] opacity-50">{item.num}</span>
                                <p className="text-sm text-white/50 leading-relaxed font-light mt-1"><strong className="text-white font-medium block mb-1">{item.title}</strong>{item.desc}</p>
                            </motion.li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* SECTION 5: FAQ (Wedding Specific) */}
            <section className="py-24 px-6 border-b border-white/5">
                <div ref={faqRef} className="max-w-3xl mx-auto">
                    <motion.h2
                        className="text-center font-mono text-[10px] uppercase tracking-[0.2em] text-[#C5A059] mb-12"
                        initial={{ opacity: 0, y: 16 }}
                        animate={faqInView ? { opacity: 1, y: 0 } : {}}
                        transition={SPRING}
                    >
                        Logistics
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={faqInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ ...SPRING, delay: 0.1 }}
                    >
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1" className="border-b border-white/10">
                                <AccordionTrigger className="text-[14px] tracking-wide font-medium text-white hover:text-[#C5A059] py-5">How much space do you need?</AccordionTrigger>
                                <AccordionContent className="text-sm text-white/50 leading-relaxed pb-6 h-[auto]">
                                    Ideally an 8x8 foot square, placed near an outlet. The backdrop is highly configurable.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2" className="border-b border-white/10">
                                <AccordionTrigger className="text-[14px] tracking-wide font-medium text-white hover:text-[#C5A059] py-5">When do you set up?</AccordionTrigger>
                                <AccordionContent className="text-sm text-white/50 leading-relaxed pb-6 h-[auto]">
                                    We coordinate with your planner to arrive 90 minutes before your cocktail hour or reception entry to ensure everything is perfect.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3" className="border-b border-white/10">
                                <AccordionTrigger className="text-[14px] tracking-wide font-medium text-white hover:text-[#C5A059] py-5">Do guests have to wait for photos?</AccordionTrigger>
                                <AccordionContent className="text-sm text-white/50 leading-relaxed pb-6 h-[auto]">
                                    No. Because there is no printer to jam or wait on, the line moves rapidly. Photos are transmitted to their phones instantly.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-4" className="border-b border-white/10">
                                <AccordionTrigger className="text-[14px] tracking-wide font-medium text-white hover:text-[#C5A059] py-5">Can we add our names and wedding date?</AccordionTrigger>
                                <AccordionContent className="text-sm text-white/50 leading-relaxed pb-6 h-[auto]">
                                    Yes. A subtle, elegant typographic overlay is included. We will mock this up for your approval beforehand.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-5" className="border-b border-white/5">
                                <AccordionTrigger className="text-[14px] tracking-wide font-medium text-white hover:text-[#C5A059] py-5">How do we lock in our date?</AccordionTrigger>
                                <AccordionContent className="text-sm text-white/50 leading-relaxed pb-6 h-[auto]">
                                    Submit an inquiry. We will send a formal proposal. A signed agreement and retainer secure the calendar.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </motion.div>
                </div>
            </section>

            {/* PROOF */}
            <LpProofSection
                images={WEDDING_PROOF_IMAGES}
                loop={WEDDING_LOOP}
                heading="From a Real Wedding"
            />

            {/* FINAL CTA */}
            <FinalCta title="Secure a date" />
        </main>
    )
}
