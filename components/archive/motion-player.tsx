"use client"

import { useEffect, useRef, useState } from "react"

/**
 * MotionPlayer — seamless video loop with reduced-motion support
 *
 * autoplay + muted + loop + playsInline, preload=metadata, poster from cover,
 * no controls UI. Respects prefers-reduced-motion: shows poster image instead.
 */
interface MotionPlayerProps {
    src: string
    poster?: string
    className?: string
}

export function MotionPlayer({ src, poster, className = "" }: MotionPlayerProps) {
    const videoRef = useRef<HTMLVideoElement>(null)
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

    useEffect(() => {
        const mql = window.matchMedia("(prefers-reduced-motion: reduce)")
        setPrefersReducedMotion(mql.matches)
        const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches)
        mql.addEventListener("change", handler)
        return () => mql.removeEventListener("change", handler)
    }, [])

    // If reduced motion, show poster image
    if (prefersReducedMotion && poster) {
        return (
            <img
                src={poster}
                alt="Event moment"
                className={`w-full h-full object-cover ${className}`}
                loading="lazy"
            />
        )
    }

    return (
        <video
            ref={videoRef}
            src={src}
            poster={poster}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className={`w-full h-full object-cover ${className}`}
            style={{ display: "block" }}
            aria-label="Event motion clip"
        />
    )
}
