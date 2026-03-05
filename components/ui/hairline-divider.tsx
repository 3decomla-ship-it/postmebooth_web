"use client"

import { useEffect, useRef, useState } from "react"

/**
 * GoldDivider — ambient section breath
 *
 * Design principle (luxury / elite sites):
 *   Dividers are ATMOSPHERE, not events.
 *   They are always present, always softly glowing — never animated in,
 *   never announcing themselves. The gold warmth is felt, not noticed.
 *
 * Three layers:
 *   1. Base rule  — always-on champagne gradient, full width
 *   2. Drift glow — slow sinusoidal pulse (9s period) drifting left↔right
 *                   giving the line a living, breathing quality
 *   3. Cursor glow — responds when mouse is nearby, satisfying micro-reward
 *
 * No scroll triggers. No wipe. No pop. Just warmth.
 */
export function HairlineDivider() {
    /* cursor-tracked glow position (0–100%) */
    const [glowX, setGlowX] = useState(50)

    /* ambient drift — sine wave, 9s period */
    const [driftX, setDriftX] = useState(30)

    /* offset each instance so multiple dividers drift out of phase */
    const phaseRef = useRef(Math.random() * Math.PI * 2)

    useEffect(() => {
        const handleMove = (e: MouseEvent) => {
            setGlowX((e.clientX / window.innerWidth) * 100)
        }
        window.addEventListener("mousemove", handleMove, { passive: true })
        return () => window.removeEventListener("mousemove", handleMove)
    }, [])

    useEffect(() => {
        let raf: number
        const start = performance.now()
        const PERIOD_MS = 9000

        const tick = (now: number) => {
            const t = ((now - start) % PERIOD_MS) / PERIOD_MS
            const phase = phaseRef.current
            // Each divider instance has a unique phase offset → they drift independently
            setDriftX(50 + 34 * Math.sin(t * 2 * Math.PI + phase))
            raf = requestAnimationFrame(tick)
        }
        raf = requestAnimationFrame(tick)
        return () => cancelAnimationFrame(raf)
    }, [])

    return (
        <div
            aria-hidden="true"
            style={{
                position: "relative",
                width: "100%",
                height: "1px",
                overflow: "visible",
                /* Outer breathing room is handled by section padding, not here */
            }}
        >
            {/* ── 1. Base champagne rule — always visible ── */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    background: `linear-gradient(90deg,
                        transparent      0%,
                        rgba(197,160,89,0.04)  8%,
                        rgba(197,160,89,0.18) 28%,
                        rgba(197,160,89,0.22) 50%,
                        rgba(197,160,89,0.18) 72%,
                        rgba(197,160,89,0.04) 92%,
                        transparent     100%
                    )`,
                }}
            />

            {/* ── 2. Ambient drifting glow — slow, alive, always on ── */}
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    height: "100%",
                    width: "260px",
                    left: `calc(${driftX}% - 130px)`,
                    /* rAF drives this, no CSS transition needed */
                    background: `radial-gradient(ellipse 100% 100% at center,
                        rgba(212,196,168,0.52) 0%,
                        rgba(197,160,89,0.20) 45%,
                        transparent 100%
                    )`,
                    pointerEvents: "none",
                }}
            />

            {/* ── 3. Cursor hotspot — micro-reward on interaction ── */}
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    height: "100%",
                    width: "300px",
                    left: `calc(${glowX}% - 150px)`,
                    transition: "left 0.08s linear",
                    background: `radial-gradient(ellipse 100% 100% at center,
                        rgba(220,200,160,0.72) 0%,
                        rgba(197,160,89,0.24) 40%,
                        transparent 100%
                    )`,
                    pointerEvents: "none",
                }}
            />

            {/* ── 4. Vertical bloom — very soft glow above & below ── */}
            <div
                style={{
                    position: "absolute",
                    inset: "-5px 8% -5px 8%",
                    background: `linear-gradient(90deg,
                        transparent,
                        rgba(197,160,89,0.07) 35%,
                        rgba(197,160,89,0.11) 50%,
                        rgba(197,160,89,0.07) 65%,
                        transparent
                    )`,
                    filter: "blur(5px)",
                    pointerEvents: "none",
                }}
            />
        </div>
    )
}
