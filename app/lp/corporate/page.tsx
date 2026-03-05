"use client"

import Link from "next/link"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Shield, Zap, BarChart, Camera, Image as ImageIcon, Send, Palette, UserCheck, Smartphone } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { FinalCta } from "@/components/home/final-cta"
import { MagneticButton } from "@/components/ui/magnetic-button"
import { LpProofSection } from "@/components/lp/lp-proof-section"

const CORPORATE_PROOF_IMAGES = [
    "/events/easports-battleflied6-friendsandfamily/raw/0038-ripple_studios-d1.jpg",
    "/events/flair-runclub-eqinox-v1/gif/0016-EQUINOX_RUN_CLUB-d1.mp4",
    "/events/activepear-fashionshow/template/0080-active_pear_fashion_show_-d1-template.jpg",
    "/events/easports-battleflied6-friendsandfamily/raw/0137-ripple_studios-d1.jpg",
    "/events/flair-runclub-eqinox-v1/raw/0074-EQUINOX_RUN_CLUB-d1.jpg",
    "/events/flair-runclub-eqinox-v2/template/0046-FLAIR_-d1-template.jpg",
]

const CORPORATE_LOOP = {
    src: "/events/easports-battleflied6-friendsandfamily/gif/0126-ripple_studios-d1.mp4",
    poster: "/events/easports-battleflied6-friendsandfamily/front/0165-ripple_studios-d1-template.jpg",
}

const HONEYBOOK_URL = "https://postmebooth.hbportal.co/public/book-postmebooth/1-Inquiry_form"

const SPRING = { stiffness: 70, damping: 22, mass: 1.1 }


export default function CorporatePage() {
    const heroRef = useRef<HTMLDivElement>(null)
    const heroInView = useInView(heroRef, { once: true, amount: 0.15 })
    const gridRef = useRef<HTMLDivElement>(null)
    const gridInView = useInView(gridRef, { once: true, amount: 0.15 })
    const whyRef = useRef<HTMLDivElement>(null)
    const whyInView = useInView(whyRef, { once: true, amount: 0.2 })
    const processRef = useRef<HTMLDivElement>(null)
    const processInView = useInView(processRef, { once: true, amount: 0.2 })
    const faqRef = useRef<HTMLDivElement>(null)
    const faqInView = useInView(faqRef, { once: true, amount: 0.2 })

    return (
        <main className="bg-[#040404] min-h-screen flex flex-col overflow-hidden text-[#F5F5F5]">
            {/* HERO - EXECUTIVE DECK SPLIT */}
            <section className="relative flex min-h-[90vh] items-center justify-center px-6 pt-32 pb-24 border-b border-white/5">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_55%_55%_at_50%_40%,_rgba(197,160,89,0.04)_0%,_transparent_70%)] pointer-events-none" />

                <div ref={heroRef} className="mx-auto max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center z-10">
                    {/* Left: Copy Stack */}
                    <motion.div
                        className="flex flex-col text-left"
                        initial={{ opacity: 0, y: 32 }}
                        animate={heroInView ? { opacity: 1, y: 0 } : {}}
                        transition={SPRING}
                    >
                        <p className="mb-8 uppercase tracking-[0.18em] font-mono text-[10px] font-medium text-[rgba(212,196,168,0.65)]">
                            CORPORATE & BRAND ACTIVATION · LOS ANGELES
                        </p>
                        <h1 className="mb-6 text-balance font-serif font-light text-[clamp(42px,5vw,80px)] leading-[0.95] tracking-tight text-[#F2EFE9]">
                            Executive Level<br /><span className="text-[#C5A059] italic">Portraits.</span>
                        </h1>
                        <p className="mb-10 text-balance text-[15px] sm:text-[17px] text-[rgba(242,239,233,0.65)] leading-relaxed font-light max-w-lg">
                            We replace the standard iPad setup with a full frame Sony a7IV and professional strobes. The result is clean, high resolution output delivered instantly, ensuring your brand looks premium from the room to the feed.
                        </p>
                        <div className="flex items-center gap-6">
                            <MagneticButton strength={0.28} radius={100}>
                                <Link href={HONEYBOOK_URL} target="_blank">
                                    <button className="relative overflow-hidden transition-shadow duration-300 shadow-[0_0_32px_rgba(197,160,89,0.28)] hover:shadow-[0_0_52px_rgba(197,160,89,0.55)] px-10 h-14 font-mono text-[11px] font-medium tracking-[0.16em] uppercase text-[#0B0B0C] bg-[#C5A059]">
                                        <span className="absolute inset-0 bg-[linear-gradient(110deg,transparent_20%,rgba(255,255,255,0.55)_50%,transparent_80%)] bg-[length:200%_100%] animate-[cta-shimmer_5s_ease-in-out_infinite] pointer-events-none" />
                                        SECURE A DATE
                                    </button>
                                </Link>
                            </MagneticButton>
                        </div>
                    </motion.div>

                    {/* Right: Proof Panel */}
                    <motion.div
                        className="relative border border-white/10 bg-[#0B0B0C]/40 backdrop-blur-md p-8 sm:p-10"
                        initial={{ opacity: 0, y: 40 }}
                        animate={heroInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ ...SPRING, delay: 0.15 }}
                    >
                        <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#C5A059] mb-6">Trusted By</p>
                        <div className="mb-10">
                            <motion.div
                                initial={{ opacity: 0, y: 12 }}
                                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ ...SPRING, delay: 0.2 }}
                            >
                                <img
                                    src="/logos/trustedby_logos.png"
                                    alt="Trusted by EA Sports, City Club LA, Sofitel Los Angeles, Equinox Run Club"
                                    className="w-full max-w-xs h-auto object-contain"
                                    style={{
                                        opacity: 0.6,
                                    }}
                                    draggable={false}
                                />
                            </motion.div>
                        </div>
                        <div className="w-full h-px bg-[linear-gradient(90deg,rgba(255,255,255,0.1)_0%,transparent_100%)] mb-8" />
                        <ul className="space-y-6">
                            {[
                                { icon: Shield, title: "Brand Safe Operation", desc: "Discrete footprint. Professional attendants. Zero friction." },
                                { icon: Zap, title: "Instant Delivery", desc: "SMS or email routes directly to phones for immediate social sharing." },
                                { icon: BarChart, title: "Data & Analytics", desc: "Track engagement, captures, and gallery shares post-event." },
                            ].map((item, i) => (
                                <motion.li
                                    key={item.title}
                                    className="flex gap-4 items-start"
                                    initial={{ opacity: 0, x: -16 }}
                                    animate={heroInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ ...SPRING, delay: 0.3 + i * 0.08 }}
                                >
                                    <item.icon className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                                    <div>
                                        <h4 className="text-[13px] font-medium tracking-widest uppercase text-white mb-1">{item.title}</h4>
                                        <p className="text-sm text-white/50 leading-relaxed font-light">{item.desc}</p>
                                    </div>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </section>

            {/* SECTION 2: What You Get (6 Grid) */}
            <section className="py-24 px-6 border-b border-white/5">
                <div ref={gridRef} className="max-w-7xl mx-auto">
                    <motion.h2
                        className="text-3xl font-serif text-[#F2EFE9] mb-12 text-center lg:text-left"
                        initial={{ opacity: 0, y: 24 }}
                        animate={gridInView ? { opacity: 1, y: 0 } : {}}
                        transition={SPRING}
                    >
                        What&apos;s Included
                    </motion.h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { icon: Camera, title: "Studio Lighting", desc: "Professional strobes ensure flattering, crisp output in any condition." },
                            { icon: ImageIcon, title: "High Res Photos", desc: "Captured on a full frame sensor for magazine quality detail." },
                            { icon: Zap, title: "GIFs & Boomerangs", desc: "Optional motion formats to drive higher engagement." },
                            { icon: Smartphone, title: "Instant SMS / Email", desc: "Immediate delivery ensures guests post while the event is hot." },
                            { icon: Palette, title: "Custom Overlays", desc: "Brand safe watermarks or logos overlaid on every capture." },
                            { icon: Send, title: "Digital Gallery", desc: "A post event private link with all assets organized." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                className="p-8 bg-[#0B0B0C] border border-white/5 hover:border-[#C5A059]/20 transition-colors duration-500"
                                initial={{ opacity: 0, y: 24 }}
                                animate={gridInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ ...SPRING, delay: 0.05 + i * 0.06 }}
                            >
                                <item.icon className="w-5 h-5 text-[#C5A059] mb-5" />
                                <h3 className="text-[13px] font-medium tracking-widest uppercase text-white mb-2">{item.title}</h3>
                                <p className="text-sm text-white/50 leading-relaxed font-light">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 3: Why It Works (3 Blocks) */}
            <section className="py-24 px-6 border-b border-white/5 bg-[#080808]">
                <div ref={whyRef} className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
                        {[
                            { title: "Optics Matter", desc: "Top-tier visual output reflects directly on your brand\u0027s perceived value. No cheap webcams." },
                            { title: "Frictionless Flow", desc: "Guests tap their number and step away. We keep the line moving without sacrificing quality." },
                            { title: "White-Glove Staff", desc: "Our attendants act as an extension of your hospitality team, keeping the space clean." },
                        ].map((item, i) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 24 }}
                                animate={whyInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ ...SPRING, delay: i * 0.1 }}
                            >
                                <h3 className="text-xl font-serif text-[#F2EFE9] mb-3">{item.title}</h3>
                                <p className="text-sm text-white/50 leading-relaxed font-light">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 4: Process Timeline */}
            <section className="py-24 px-6 border-b border-[rgba(255,255,255,0.03)] bg-gradient-to-b from-transparent to-[#050505]">
                <div ref={processRef} className="max-w-5xl mx-auto">
                    <motion.h2
                        className="text-center font-mono text-[10px] uppercase tracking-[0.2em] text-[#C5A059] mb-16"
                        initial={{ opacity: 0, y: 16 }}
                        animate={processInView ? { opacity: 1, y: 0 } : {}}
                        transition={SPRING}
                    >
                        The Process
                    </motion.h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { step: "01 INQUIRE", text: "Submit details. We reply within 24 hours with exact availability." },
                            { step: "02 CONFIRM", text: "Lock in the date. We coordinate logistics with your event producer." },
                            { step: "03 RUN OF SHOW", text: "We arrive early, set up silently, and execute perfectly." },
                            { step: "04 DELIVERY", text: "Instant sharing during the event, full gallery link the following day." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                className="relative border-l border-white/10 pl-6 lg:pl-0 lg:border-l-0 lg:border-t lg:pt-6"
                                initial={{ opacity: 0, y: 20 }}
                                animate={processInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ ...SPRING, delay: 0.08 + i * 0.1 }}
                            >
                                <div className="absolute left-[-2.5px] top-0 w-[4px] h-[4px] bg-[#C5A059] lg:top-[-2.5px] lg:left-0" />
                                <h3 className="text-[11px] font-mono tracking-[0.15em] uppercase text-white mb-3">{item.step}</h3>
                                <p className="text-sm text-white/50 leading-relaxed font-light">{item.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 5: FAQ */}
            <section className="py-24 px-6 border-b border-white/5">
                <div ref={faqRef} className="max-w-3xl mx-auto">
                    <motion.h2
                        className="text-3xl font-serif text-[#F2EFE9] mb-12 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={faqInView ? { opacity: 1, y: 0 } : {}}
                        transition={SPRING}
                    >
                        Logistics & Support
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={faqInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ ...SPRING, delay: 0.1 }}
                    >
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1" className="border-b border-white/10">
                                <AccordionTrigger className="text-[14px] tracking-wide font-medium text-white hover:text-[#C5A059] py-5">What footprint do you require?</AccordionTrigger>
                                <AccordionContent className="text-sm text-white/50 leading-relaxed pb-6 h-[auto]">
                                    Our standard open air setup requires an 8x8 foot space and access to a standard 110V dedicated power outlet within 20 feet.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2" className="border-b border-white/10">
                                <AccordionTrigger className="text-[14px] tracking-wide font-medium text-white hover:text-[#C5A059] py-5">Can you add our brand logo to the photos?</AccordionTrigger>
                                <AccordionContent className="text-sm text-white/50 leading-relaxed pb-6 h-[auto]">
                                    Yes. We provide custom, brand safe overlays for all output (both photos and GIFs).
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3" className="border-b border-white/10">
                                <AccordionTrigger className="text-[14px] tracking-wide font-medium text-white hover:text-[#C5A059] py-5">Do you need venue WiFi?</AccordionTrigger>
                                <AccordionContent className="text-sm text-white/50 leading-relaxed pb-6 h-[auto]">
                                    We bring an independent cellular network for instant SMS or email delivery. If the venue has poor cellular reception, we will request access to venue WiFi to ensure immediate sharing.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-4" className="border-b border-white/10">
                                <AccordionTrigger className="text-[14px] tracking-wide font-medium text-white hover:text-[#C5A059] py-5">Is delivery digital only?</AccordionTrigger>
                                <AccordionContent className="text-sm text-white/50 leading-relaxed pb-6 h-[auto]">
                                    Yes. We are exclusively optimized for digital delivery. Instant digital routing ensures higher throughput and immediate social sharing.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-5" className="border-b border-white/5">
                                <AccordionTrigger className="text-[14px] tracking-wide font-medium text-white hover:text-[#C5A059] py-5">Do you provide analytics?</AccordionTrigger>
                                <AccordionContent className="text-sm text-white/50 leading-relaxed pb-6 h-[auto]">
                                    Yes, upon request we can provide an aggregate estimate of captures and shares generated during your activation.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </motion.div>
                </div>
            </section>

            {/* PROOF */}
            <LpProofSection
                images={CORPORATE_PROOF_IMAGES}
                loop={CORPORATE_LOOP}
                heading="Proof from Real Activations"
            />

            {/* FINAL CTA */}
            <FinalCta title="Secure your date" />
        </main>
    )
}
