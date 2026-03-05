"use client"

import { useRef, CSSProperties } from "react"
import { motion, useInView } from "framer-motion"

interface BlurTextProps {
    text: string
    /** Delay between each character in ms (default: 40) */
    delay?: number
    /** Total animation duration per char in seconds (default: 0.6) */
    duration?: number
    /** Split by 'chars' or 'words' (default: 'chars') */
    animateBy?: "chars" | "words"
    className?: string
    style?: CSSProperties
    /** Framer-motion useInView threshold (default: 0.1) */
    threshold?: number
    /** Run animation once (default: true) */
    once?: boolean
}

export function BlurText({
    text,
    delay = 40,
    duration = 0.6,
    animateBy = "chars",
    className = "",
    style,
    threshold = 0.1,
    once = true,
}: BlurTextProps) {
    const ref = useRef<HTMLSpanElement>(null)
    const inView = useInView(ref, { once, amount: threshold })

    const elements = animateBy === "chars" ? text.split("") : text.split(" ")

    return (
        <span
            ref={ref}
            className={className}
            style={{ display: "inline-block", ...style }}
            aria-label={text}
        >
            {elements.map((seg, i) => (
                <motion.span
                    key={i}
                    style={{ display: "inline-block", willChange: "transform, opacity, filter" }}
                    aria-hidden
                    initial={{ opacity: 0, filter: "blur(12px)", y: 16 }}
                    animate={
                        inView
                            ? { opacity: 1, filter: "blur(0px)", y: 0 }
                            : { opacity: 0, filter: "blur(12px)", y: 16 }
                    }
                    transition={{
                        duration,
                        delay: (i * delay) / 1000,
                        ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                >
                    {seg === " " ? "\u00A0" : seg}
                    {animateBy === "words" && i < elements.length - 1 && "\u00A0"}
                </motion.span>
            ))}
        </span>
    )
}
