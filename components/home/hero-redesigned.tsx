"use client"

import Link from "next/link"
import { useRef, useCallback, useState } from "react"
import { motion, useInView, useScroll, useTransform, useSpring, useMotionValue, MotionValue } from "framer-motion"
import { MagneticButton } from "@/components/ui/magnetic-button"
import { BlurText } from "@/components/ui/blur-text"

/* ─── Spring: Silk-Touch (slow start, heavy stop) ─── */
const SPRING_CFG = { stiffness: 60, damping: 20, mass: 1.2 }

const HONEYBOOK_URL =
    "https://postmebooth.hbportal.co/public/book-postmebooth/1-Inquiry_form"

/* ─── Themed service images from real archive events ──────── */
const CARD_CONFIGS = [
    /* BACK card — Nightlife, top-left, tilted CW */
    {
        src: "/events/dsrpt-noiselab-episode4/front/0100-NOIZE_LAB_004-d1-template.jpg",
        alt: "Nightlife event photography by PostMeBooth",
        label: "Nightlife",
        href: "/lp/nightlife",
        top: "2%",
        left: "2%",
        width: "56%",
        rotate: "-5deg",
        zIndex: 1,
        opacity: 0.72,
        delay: 0.30,
    },
    /* FRONT card — Weddings, bottom-right area, tilted slightly CW */
    {
        src: "/events/wedding-jasmineandadrian-cityla/front/0370-wedding_-d1-template.jpg",
        alt: "Wedding event photography by PostMeBooth",
        label: "Weddings",
        href: "/lp/weddings",
        top: "28%",
        left: "36%",
        width: "60%",
        rotate: "4deg",
        zIndex: 2,
        opacity: 0.82,
        delay: 0.18,
    },
    /* CENTER HERO card — Corporate, centered, on top, largest */
    {
        src: "/events/easports-battleflied6-friendsandfamily/front/0165-ripple_studios-d1-template.jpg",
        alt: "Corporate event photography by PostMeBooth",
        label: "Corporate",
        href: "/lp/corporate",
        top: "8%",
        left: "18%",
        width: "64%",
        rotate: "0deg",
        zIndex: 3,
        opacity: 1.0,
        delay: 0.08,
    },
]

/* ─── Transition presets ─── */
const TAKEOVER_TRANSITION = { duration: 0.36, ease: [0.25, 0.46, 0.45, 0.94] } as const
const RECEDE_TRANSITION = { duration: 0.28, ease: [0.4, 0, 0.6, 1] } as const
const RESTORE_TRANSITION = { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] } as const

function StaggeredCardReel({
    inView,
    parallaxY,
}: {
    inView: boolean
    parallaxY: MotionValue<number>
}) {
    const containerRef = useRef<HTMLDivElement>(null)

    /* Which card label is currently hovered (null = none) */
    const [hoveredLabel, setHoveredLabel] = useState<string | null>(null)

    /* Raw mouse motion values */
    const rawX = useMotionValue(0)
    const rawY = useMotionValue(0)

    /* Spring the raw values so they drift smoothly back to 0 on mouse-leave */
    const smoothX = useSpring(rawX, { stiffness: 28, damping: 28, mass: 1 })
    const smoothY = useSpring(rawY, { stiffness: 28, damping: 28, mass: 1 })

    /* Map -0.5→0.5 range to subtle tilt degrees */
    const tiltY = useTransform(smoothX, [-0.5, 0.5], [-5, 5])
    const tiltX = useTransform(smoothY, [-0.5, 0.5], [4, -4])

    const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        const rect = containerRef.current?.getBoundingClientRect()
        if (!rect) return
        rawX.set((e.clientX - rect.left) / rect.width - 0.5)
        rawY.set((e.clientY - rect.top) / rect.height - 0.5)
    }, [rawX, rawY])

    const handlePanelLeave = useCallback(() => {
        rawX.set(0)
        rawY.set(0)
        setHoveredLabel(null)
    }, [rawX, rawY])

    return (
        <motion.div
            ref={containerRef}
            className="relative lg:w-[48%] hidden lg:flex items-center"
            style={{ y: parallaxY, perspective: "1100px", perspectiveOrigin: "50% 40%" }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handlePanelLeave}
        >
            {/* 3D tilt group */}
            <motion.div
                style={{
                    rotateX: tiltX,
                    rotateY: tiltY,
                    position: "relative",
                    width: "100%",
                    height: "clamp(480px, 72vh, 660px)",
                }}
            >
                {CARD_CONFIGS.map((card) => {
                    const isHovered = hoveredLabel === card.label
                    const isReceding = hoveredLabel !== null && !isHovered

                    /* ── Per-card animated values ───────────────────── */
                    /* zIndex lives on the Link (outermost stacking context), not animateProps */
                    const computedZIndex = isHovered ? 20 : card.zIndex
                    const animateProps = !inView
                        ? { opacity: 0, y: 48, scale: 1 }
                        : isHovered
                            ? {
                                opacity: 1,
                                scale: 1.13,
                                y: -22,
                                boxShadow: `
                                inset 0 0 0 1px rgba(212,196,168,0.55),
                                0 48px 140px rgba(0,0,0,0.85),
                                0 20px 60px rgba(0,0,0,0.65),
                                0 0 80px rgba(197,160,89,0.18)
                            `,
                            }
                            : isReceding
                                ? {
                                    opacity: 0.18,
                                    scale: 0.91,
                                    y: 10,
                                    boxShadow: `
                                inset 0 0 0 0.5px rgba(212,196,168,0.08),
                                0 8px 32px rgba(0,0,0,0.5)
                            `,
                                }
                                : {
                                    opacity: card.opacity,
                                    scale: 1,
                                    y: 0,
                                    boxShadow: `
                                inset 0 0 0 0.5px rgba(212,196,168,0.22),
                                0 32px 96px rgba(0,0,0,0.7),
                                0 8px 24px rgba(0,0,0,0.45)
                            `,
                                }

                    const transitionProps = isHovered
                        ? TAKEOVER_TRANSITION
                        : isReceding
                            ? RECEDE_TRANSITION
                            : { ...RESTORE_TRANSITION, delay: !inView ? card.delay : 0 }

                    return (
                        <Link
                            key={card.label}
                            href={card.href}
                            aria-label={`View ${card.label} services`}
                            style={{
                                position: "absolute",
                                top: card.top,
                                left: card.left,
                                width: card.width,
                                display: "block",
                                zIndex: computedZIndex,
                                transition: "z-index 0s",
                            }}
                            onMouseEnter={() => setHoveredLabel(card.label)}
                            onMouseLeave={() => setHoveredLabel(null)}
                        >
                            <motion.div
                                animate={animateProps}
                                transition={transitionProps}
                                style={{
                                    position: "relative",
                                    width: "100%",
                                    aspectRatio: "2/3",
                                    rotate: card.rotate,
                                    overflow: "hidden",
                                    background: "#080808",
                                    willChange: "transform, opacity",
                                    cursor: "pointer",
                                }}
                            >
                                {/* Photo */}
                                <img
                                    src={card.src}
                                    alt={card.alt}
                                    style={{
                                        position: "absolute",
                                        inset: 0,
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                        display: "block",
                                    }}
                                    loading={card.zIndex === 3 ? "eager" : "lazy"}
                                />

                                {/* Vignette overlay */}
                                <motion.div
                                    aria-hidden="true"
                                    animate={{ opacity: isHovered ? 0.6 : 1 }}
                                    transition={isHovered ? TAKEOVER_TRANSITION : RESTORE_TRANSITION}
                                    style={{
                                        position: "absolute",
                                        inset: 0,
                                        background: "linear-gradient(to bottom, rgba(0,0,0,0.22) 0%, transparent 28%, rgba(0,0,0,0.62) 100%)",
                                        pointerEvents: "none",
                                    }}
                                />

                                {/* Event label */}
                                <motion.div
                                    animate={{ opacity: isHovered ? 1 : 0.7 }}
                                    transition={TAKEOVER_TRANSITION}
                                    style={{ position: "absolute", bottom: "13px", left: "13px" }}
                                >
                                    <span
                                        style={{
                                            fontFamily: "var(--font-mono)",
                                            fontSize: "9px",
                                            fontWeight: 600,
                                            letterSpacing: "0.2em",
                                            textTransform: "uppercase",
                                            color: isHovered
                                                ? "rgba(212,196,168,1)"
                                                : "rgba(212,196,168,0.7)",
                                            transition: "color 0.3s ease",
                                        }}
                                    >
                                        {card.label}
                                    </span>
                                </motion.div>
                            </motion.div>
                        </Link>
                    )
                })}
            </motion.div>
        </motion.div>
    )
}


export function HeroRedesigned() {
    const sectionRef = useRef<HTMLElement>(null)
    const inView = useInView(sectionRef, { once: true, amount: 0.15 })

    /* Parallax: frame drifts at 0.05× scroll speed */
    const { scrollY } = useScroll()
    const rawParallax = useTransform(scrollY, [0, 800], [0, 40]) // 0.05 × 800 = 40px
    const parallaxY = useSpring(rawParallax, { stiffness: 60, damping: 20, mass: 1.2 })

    return (
        <section
            ref={sectionRef}
            className="relative min-h-screen flex flex-col overflow-hidden bg-[#040404]"
            style={{ paddingTop: "clamp(96px, 10vw, 140px)" }}
        >
            {/* ── Technical signal: top-right corner ──────────── */}

            {/* ── Ambient radial glow ──────────────────────────── */}
            <div
                className="absolute inset-0 -z-10 pointer-events-none"
                style={{
                    background:
                        "radial-gradient(ellipse 55% 55% at 75% 40%, rgba(197,160,89,0.04) 0%, transparent 70%)",
                }}
            />

            {/* ── Main grid ────────────────────────────────────── */}
            <div className="mx-auto max-w-[1440px] w-full px-6 lg:px-12 flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-0 pb-16">

                {/* LEFT: Editorial headline ───────────────────── */}
                <div className="relative z-10 flex flex-col justify-center lg:w-[58%] lg:pr-16">

                    {/* Eyebrow */}
                    <motion.p
                        initial={{ opacity: 0, y: 14 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ ...SPRING_CFG, delay: 0 }}
                        style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: "10px",
                            fontWeight: 500,
                            letterSpacing: "0.18em",
                            textTransform: "uppercase",
                            color: "rgba(212,196,168,0.65)",
                            marginBottom: "clamp(20px, 3vw, 36px)",
                        }}
                    >
                        FOR LOS ANGELES ROOMS THAT MATTER
                    </motion.p>

                    {/* Massive headline — Cormorant 300 / -0.04em */}
                    <h1
                        style={{
                            fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
                            fontWeight: 300,
                            fontSize: "clamp(48px, 7.5vw, 128px)",
                            lineHeight: 0.92,
                            letterSpacing: "-0.04em",
                            color: "#F2EFE9",
                            marginBottom: "clamp(32px, 5vw, 56px)",
                        }}
                    >
                        {/* Line 1 */}
                        <span className="block" style={{ whiteSpace: "nowrap" }}>
                            <BlurText
                                text="THE LOOK."
                                delay={35}
                                duration={0.65}
                                animateBy="chars"
                                style={{ color: "#F2EFE9" }}
                            />
                        </span>
                        {/* Line 2 */}
                        <span className="block" style={{ whiteSpace: "nowrap" }}>
                            <BlurText
                                text="THE ROOM."
                                delay={45}
                                duration={0.65}
                                animateBy="chars"
                                style={{ color: "#F2EFE9" }}
                            />
                        </span>
                        {/* Line 3 — gold italic */}
                        <span className="block" style={{ whiteSpace: "nowrap" }}>
                            <BlurText
                                text="CAPTURED CLEAN."
                                delay={55}
                                duration={0.7}
                                animateBy="chars"
                                style={{ color: "#C5A059", fontStyle: "italic" }}
                            />
                        </span>
                    </h1>

                    {/* Sub-copy */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ ...SPRING_CFG, delay: 0.42 }}
                        style={{
                            fontSize: "clamp(14px, 1.4vw, 17px)",
                            color: "rgba(242,239,233,0.65)",
                            lineHeight: 1.75,
                            maxWidth: "44ch",
                            fontWeight: 300,
                            marginBottom: "clamp(36px, 5vw, 52px)",
                        }}
                    >
                        Full frame portraits and instant delivery. Guests repost. You get a private, organized archive after.
                        <br /><br />
                        <span style={{ color: "rgba(212,196,168,0.78)" }}>
                            SMS or email delivery · Private gallery · Brand safe overlays
                        </span>
                    </motion.p>

                    {/* Magnetic CTA ────────────────────────────── */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ ...SPRING_CFG, delay: 0.54 }}
                    >
                        <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                            <MagneticButton strength={0.28} radius={100}>
                                <Link href={HONEYBOOK_URL} target="_blank">
                                    <button
                                        id="hero-request-access"
                                        className="relative overflow-hidden"
                                        style={{
                                            height: "56px",
                                            padding: "0 44px",
                                            fontFamily: "var(--font-mono)",
                                            fontSize: "11px",
                                            fontWeight: 500,
                                            letterSpacing: "0.16em",
                                            textTransform: "uppercase",
                                            color: "#0B0B0C",
                                            background: "#C5A059",
                                            border: "none",
                                            cursor: "pointer",
                                            /* Glow */
                                            boxShadow: "0 0 32px rgba(197,160,89,0.28)",
                                            transition: "box-shadow 0.3s ease",
                                            position: "relative",
                                        }}
                                        onMouseEnter={e => {
                                            e.currentTarget.style.boxShadow = "0 0 52px rgba(197,160,89,0.55)"
                                        }}
                                        onMouseLeave={e => {
                                            e.currentTarget.style.boxShadow = "0 0 32px rgba(197,160,89,0.28)"
                                        }}
                                    >
                                        <span
                                            aria-hidden="true"
                                            style={{
                                                position: "absolute",
                                                inset: 0,
                                                backgroundImage:
                                                    "linear-gradient(110deg, transparent 20%, rgba(255,255,255,0.55) 50%, transparent 80%)",
                                                backgroundSize: "200% 100%",
                                                animation: "cta-shimmer 5s ease-in-out infinite",
                                                pointerEvents: "none",
                                            }}
                                        />
                                        SECURE A DATE
                                    </button>
                                </Link>
                            </MagneticButton>

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
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-50 group-hover:opacity-100 transition-opacity group-hover:translate-x-1 duration-300">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </Link>
                        </div>

                        {/* Sub-label under button */}
                        <p
                            style={{
                                marginTop: "18px",
                                fontFamily: "var(--font-mono)",
                                fontSize: "11px",
                                fontWeight: 500,
                                letterSpacing: "0.14em",
                                textTransform: "uppercase",
                                color: "rgba(242,239,233,0.45)",
                            }}
                        >
                            Inquiry required. Confirmation within 24 hours.
                        </p>
                    </motion.div>


                </div>


                {/* RIGHT: Staggered card scatter ──────────────────── */}
                <StaggeredCardReel inView={inView} parallaxY={parallaxY} />
            </div>

            {/* ── Full-width bottom hairline ────────────────────── */}
            <div
                aria-hidden="true"
                style={{
                    width: "100%",
                    height: "0.5px",
                    background:
                        "linear-gradient(90deg, transparent 0%, rgba(212,196,168,0.15) 30%, rgba(212,196,168,0.15) 70%, transparent 100%)",
                }}
            />
        </section>
    )
}
