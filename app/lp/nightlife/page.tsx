"use client"

import Link from "next/link"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Smartphone, Zap, MoveRight, Users, SignalHigh, Camera } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { FinalCta } from "@/components/home/final-cta"
import { MagneticButton } from "@/components/ui/magnetic-button"
import { LpProofSection } from "@/components/lp/lp-proof-section"

const NIGHTLIFE_PROOF_IMAGES = [
    "/events/spice-dayrave/raw/0022-Spice_-d1.jpg",
    "/events/dsrpt-noiselab-episode4/template/0130-NOIZE_LAB_004-d1-template.jpg",
    "/events/jstaparty-newyears/gif/0173-nye-d1.mp4",
    "/events/wya/raw/0029-WYA-d1.jpg",
    "/events/la-maison-olivera/gif/0115-Gabe_Oliveiras_25th_birthday-d1.mp4",
    "/events/posion-mansionparty/raw/0042-poison_-d1.jpg",
]

const NIGHTLIFE_LOOP = {
    src: "/events/dsrpt-noiselab-episode4/gif/0354-NOIZE_LAB_004-d1.mp4",
    poster: "/events/dsrpt-noiselab-episode4/front/0100-NOIZE_LAB_004-d1-template.jpg",
}

const HONEYBOOK_URL = "https://postmebooth.hbportal.co/public/book-postmebooth/1-Inquiry_form"

const SPRING = { stiffness: 70, damping: 22, mass: 1.1 }

const NIGHTLIFE_ARCHIVE_DESKTOP = [
    "/events/spice-dayrave/raw/0022-Spice_-d1.jpg",
    "/events/posion-mansionparty/raw/0016-poison_-d1.jpg",
    "/events/wya/raw/0016-WYA-d1.jpg",
    "/events/slowhrs-cozychoas-photoshoot-party/raw/0003-COZY_CHAOS-d1.jpg",
    "/events/jstaparty-newyears/raw/0025-nye-d1.jpg",
    "/events/la-maison-olivera/template/0052-Gabe_Oliveiras_25th_birthday-d1-template.jpg",
]

const NIGHTLIFE_ARCHIVE_MOBILE = [
    "/events/spice-dayrave/raw/0133-Spice_-d1.jpg",
    "/events/posion-mansionparty/raw/0042-poison_-d1.jpg",
]

export default function NightlifePage() {
    const heroRef = useRef<HTMLDivElement>(null)
    const heroInView = useInView(heroRef, { once: true, amount: 0.15 })
    const loopRef = useRef<HTMLDivElement>(null)
    const loopInView = useInView(loopRef, { once: true, amount: 0.15 })
    const pillarsRef = useRef<HTMLDivElement>(null)
    const pillarsInView = useInView(pillarsRef, { once: true, amount: 0.2 })
    const archiveRef = useRef<HTMLDivElement>(null)
    const archiveInView = useInView(archiveRef, { once: true, amount: 0.2 })
    const faqRef = useRef<HTMLDivElement>(null)
    const faqInView = useInView(faqRef, { once: true, amount: 0.2 })

    return (
        <main className="bg-[#040404] min-h-screen flex flex-col overflow-hidden text-[#F5F5F5]">
            {/* HERO - ENERGY + MOTION VIBE */}
            <section className="relative flex min-h-[90vh] flex-col items-center justify-center px-6 pt-32 pb-24 border-b border-white/5">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_60%_at_50%_30%,_rgba(197,160,89,0.06)_0%,_transparent_70%)] pointer-events-none" />

                <div ref={heroRef}>
                    <motion.p
                        className="mb-6 uppercase tracking-[0.2em] font-mono text-[10px] font-bold text-[#C5A059] text-center"
                        initial={{ opacity: 0, y: 16 }}
                        animate={heroInView ? { opacity: 1, y: 0 } : {}}
                        transition={SPRING}
                    >
                        NIGHTLIFE & EVENTS · LOS ANGELES
                    </motion.p>

                    <motion.h1
                        className="max-w-4xl mb-12 text-center text-balance font-serif font-light text-[clamp(48px,8vw,110px)] leading-[0.9] tracking-tight text-[#F2EFE9]"
                        initial={{ opacity: 0, y: 32 }}
                        animate={heroInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ ...SPRING, delay: 0.08 }}
                    >
                        Built for the <br /><span className="text-[#C5A059] italic pr-2">Fast Room.</span>
                    </motion.h1>

                    {/* Visual Stack (3 cascading portrait mockups) */}
                    <motion.div
                        className="relative w-full max-w-2xl h-[400px] mb-16 flex justify-center items-center mx-auto"
                        initial={{ opacity: 0, scale: 0.92 }}
                        animate={heroInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ ...SPRING, delay: 0.16 }}
                    >
                        {/* Left Background Card */}
                        <div className="absolute left-1/2 -translate-x-[90%] rotate-[-6deg] w-[200px] sm:w-[260px] aspect-[2/3] bg-[#0A0A0A] border border-white/10 shadow-2xl overflow-hidden grayscale opacity-40">
                            <img src="/events/dsrpt-noiselab-episode3/front/0166-NOIZE_LAB-d1-template.jpg" alt="Nightlife photo booth by PostMeBooth" className="w-full h-full object-cover" />
                        </div>
                        {/* Right Background Card */}
                        <div className="absolute left-1/2 translate-x-[10%] rotate-[8deg] w-[200px] sm:w-[260px] aspect-[2/3] bg-[#0A0A0A] border border-white/10 shadow-2xl overflow-hidden grayscale opacity-40">
                            <img src="/events/dsrpt-ericbellinger-cover-releaseparty/front/0035-Eric_-_ep006-d1-template.jpg" alt="Nightlife photo booth by PostMeBooth" className="w-full h-full object-cover" />
                        </div>
                        {/* Center Foreground Card */}
                        <div className="absolute left-1/2 -translate-x-1/2 rotate-[-1deg] w-[220px] sm:w-[280px] aspect-[2/3] bg-[#0B0B0C] border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden scale-105 z-10 transition-transform duration-700 hover:scale-[1.08] hover:rotate-0">
                            <img src="/events/dsrpt-noiselab-episode4/front/0100-NOIZE_LAB_004-d1-template.jpg" alt="Nightlife photo booth by PostMeBooth" className="w-full h-full object-cover" />
                            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent" />
                        </div>
                    </motion.div>

                    <motion.div
                        className="flex flex-col items-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={heroInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ ...SPRING, delay: 0.28 }}
                    >
                        <MagneticButton strength={0.3} radius={100}>
                            <Link href={HONEYBOOK_URL} target="_blank">
                                <button className="relative overflow-hidden transition-all duration-300 shadow-[0_0_40px_rgba(197,160,89,0.35)] hover:shadow-[0_0_60px_rgba(197,160,89,0.6)] px-12 h-16 font-mono text-[12px] font-bold tracking-[0.18em] uppercase text-[#0B0B0C] bg-[#C5A059] mb-4 scale-100 hover:scale-105">
                                    <span className="absolute inset-0 bg-[linear-gradient(110deg,transparent_20%,rgba(255,255,255,0.6)_50%,transparent_80%)] bg-[length:200%_100%] animate-[cta-shimmer_3s_ease-in-out_infinite] pointer-events-none" />
                                    SECURE THE DATE
                                </button>
                            </Link>
                        </MagneticButton>
                        <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-[rgba(242,239,233,0.4)]">Inquiry required. Confirmation within 24 hours.</p>
                    </motion.div>
                </div>
            </section>

            {/* SECTION 2: The Moment Loop (3 Vertical Tiles) */}
            <section className="py-24 px-6 border-b border-white/5 bg-[#0A0A0A]">
                <div ref={loopRef} className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6">
                    {[
                        { icon: Camera, num: "01", title: "The Flash", desc: "Studio strobes cut through the dark room. Crisp borders, deep contrast." },
                        { icon: Zap, num: "02", title: "The Motion", desc: "GIFs and boomerangs capture the energy. Made for IG stories and TikTok." },
                        { icon: Smartphone, num: "03", title: "The Drop", desc: "Instant SMS or email delivery. They leave the booth with the media in their pocket." },
                    ].map((item, i) => (
                        <motion.div
                            key={item.num}
                            className="flex-1 bg-[#050505] border border-white/5 p-8 flex flex-col justify-between aspect-square md:aspect-auto md:min-h-[300px] hover:border-[#C5A059]/30 transition-colors duration-500"
                            initial={{ opacity: 0, y: 32 }}
                            animate={loopInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ ...SPRING, delay: i * 0.1 }}
                        >
                            <item.icon className="w-6 h-6 text-[#C5A059]" />
                            <div>
                                <h3 className="text-[14px] font-mono tracking-widest uppercase text-white mb-2">{item.num} / {item.title}</h3>
                                <p className="text-sm text-white/50 font-light leading-relaxed">{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* SECTION 3: Crowd-Proof Pillars */}
            <section className="py-24 px-6 border-b border-white/5">
                <div ref={pillarsRef} className="max-w-5xl mx-auto">
                    <motion.h2
                        className="text-center font-mono text-[10px] uppercase tracking-[0.2em] text-[#C5A059] mb-16"
                        initial={{ opacity: 0, y: 16 }}
                        animate={pillarsInView ? { opacity: 1, y: 0 } : {}}
                        transition={SPRING}
                    >
                        Nightlife Standard
                    </motion.h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16">
                        {[
                            { icon: MoveRight, title: "Fast Flow", desc: "High volume is our baseline. Quick capture, quick delivery, line keeps moving." },
                            { icon: Zap, title: "Low Light Ready", desc: "Pro strobes freeze motion perfectly, even in a pitch black club environment." },
                            { icon: SignalHigh, title: "Instant Delivery", desc: "Independent cellular capability means files send immediately, avoiding venue WiFi drops." },
                            { icon: Users, title: "No Awkwardness", desc: "Open air design and professional attendants ensure guests feel confident and guided." },
                        ].map((item, i) => (
                            <motion.div
                                key={item.title}
                                className="flex gap-4"
                                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                                animate={pillarsInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ ...SPRING, delay: 0.06 + i * 0.08 }}
                            >
                                <item.icon className="w-5 h-5 text-white/40 shrink-0 mt-1" />
                                <div>
                                    <h3 className="text-lg font-serif text-[#F2EFE9] mb-2">{item.title}</h3>
                                    <p className="text-sm text-white/50 leading-relaxed font-light">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 4: Mini-Archive Strip */}
            <section className="w-full flex justify-center overflow-hidden py-16 bg-[#040404] border-b border-white/5">
                <div ref={archiveRef} className="flex gap-4 px-6 w-full max-w-[1440px] items-center justify-center">
                    {NIGHTLIFE_ARCHIVE_DESKTOP.map((src, i) => (
                        <motion.div
                            key={i}
                            className="group relative w-[16vw] max-w-[200px] aspect-[2/3] bg-[#0A0A0A] overflow-hidden hidden sm:block"
                            initial={{ opacity: 0, y: 24, scale: 0.95 }}
                            animate={archiveInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                            transition={{ ...SPRING, delay: i * 0.06 }}
                        >
                            <img src={src} alt="PostMeBooth nightlife archive" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" />
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <span className="font-mono text-[9px] text-[#C5A059] tracking-widest uppercase">Nightlife</span>
                            </div>
                        </motion.div>
                    ))}
                    {NIGHTLIFE_ARCHIVE_MOBILE.map((src, i) => (
                        <div key={`m${i}`} className="group relative w-[40vw] aspect-[2/3] bg-[#0A0A0A] overflow-hidden sm:hidden">
                            <img src={src} alt="PostMeBooth nightlife archive" className="w-full h-full object-cover grayscale" />
                        </div>
                    ))}
                </div>
            </section>

            {/* PROOF */}
            <LpProofSection
                images={NIGHTLIFE_PROOF_IMAGES}
                loop={NIGHTLIFE_LOOP}
                heading="Proof from Real Events"
            />

            {/* SECTION 5: FAQ (Nightlife Specific) */}
            <section className="py-24 px-6 border-b border-white/5">
                <div ref={faqRef} className="max-w-3xl mx-auto">
                    <motion.h2
                        className="text-3xl font-serif text-[#F2EFE9] mb-12 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={faqInView ? { opacity: 1, y: 0 } : {}}
                        transition={SPRING}
                    >
                        Logistics & Tech
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={faqInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ ...SPRING, delay: 0.1 }}
                    >
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1" className="border-b border-white/10">
                                <AccordionTrigger className="text-[14px] tracking-wide font-medium text-white hover:text-[#C5A059] py-5">How long does setup take?</AccordionTrigger>
                                <AccordionContent className="text-sm text-white/50 leading-relaxed pb-6 h-[auto]">
                                    We arrive 90 minutes before operational time. Breakdown takes approximately 45 minutes. We do not disrupt the room.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2" className="border-b border-white/10">
                                <AccordionTrigger className="text-[14px] tracking-wide font-medium text-white hover:text-[#C5A059] py-5">What is the exact footprint?</AccordionTrigger>
                                <AccordionContent className="text-sm text-white/50 leading-relaxed pb-6 h-[auto]">
                                    Minimum 8x8 feet. The open air design allows us to tuck into corners or align against walls flush to keep paths clear.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3" className="border-b border-white/10">
                                <AccordionTrigger className="text-[14px] tracking-wide font-medium text-white hover:text-[#C5A059] py-5">Do you need a dedicated power drop?</AccordionTrigger>
                                <AccordionContent className="text-sm text-white/50 leading-relaxed pb-6 h-[auto]">
                                    Yes. One standard 110V 15A outlet within 20 feet of the installation. Do not share this circuit with audio equipment.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-4" className="border-b border-white/10">
                                <AccordionTrigger className="text-[14px] tracking-wide font-medium text-white hover:text-[#C5A059] py-5">WiFi isn&apos;t great. Will it work?</AccordionTrigger>
                                <AccordionContent className="text-sm text-white/50 leading-relaxed pb-6 h-[auto]">
                                    We use independent cellular networks. If the venue is subterranean with zero cellular, we will require the venue WiFi password.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-5" className="border-b border-white/5">
                                <AccordionTrigger className="text-[14px] tracking-wide font-medium text-white hover:text-[#C5A059] py-5">How does delivery work?</AccordionTrigger>
                                <AccordionContent className="text-sm text-white/50 leading-relaxed pb-6 h-[auto]">
                                    Guests enter their number or email on the screen. The file drops to their phone instantly. Digital only, no clutter.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </motion.div>
                </div>
            </section>

            {/* FINAL CTA */}
            <FinalCta title="Secure the date" />
        </main>
    )
}
