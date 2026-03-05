"use client"

import { createContext, useContext, useEffect, useState } from "react"
import { motion } from "framer-motion"

const FadeInStaggerContext = createContext(false)

const viewport = { once: true, margin: "0px 0px -120px" }

/** Standard cinematic fade-up reveal — SSR-safe (no useReducedMotion to avoid hydration mismatch) */
export function FadeIn(props: React.ComponentPropsWithoutRef<typeof motion.div>) {
    const isInStaggerGroup = useContext(FadeInStaggerContext)

    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 32 },
                visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
            {...(isInStaggerGroup
                ? {}
                : {
                    initial: "hidden",
                    whileInView: "visible",
                    viewport,
                })}
            {...props}
        />
    )
}

/** Stagger container — children animate in sequence */
export function FadeInStagger({
    faster = false,
    ...props
}: React.ComponentPropsWithoutRef<typeof motion.div> & { faster?: boolean }) {
    return (
        <FadeInStaggerContext.Provider value={true}>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                transition={{ staggerChildren: faster ? 0.08 : 0.12 }}
                {...props}
            />
        </FadeInStaggerContext.Provider>
    )
}

/**
 * Editorial clip-path wipe reveal — content wipes in from bottom upward.
 * SSR-safe: initial state is set only after mount to avoid hydration mismatch.
 */
export function ClipReveal({
    delay = 0,
    className,
    children,
    ...props
}: Omit<React.ComponentPropsWithoutRef<typeof motion.div>, "children"> & {
    delay?: number
    children?: React.ReactNode
}) {
    const [mounted, setMounted] = useState(false)
    const isInStaggerGroup = useContext(FadeInStaggerContext)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        // On server / before hydration: render invisible but in DOM so no layout shift
        return (
            <div
                className={className}
                style={{ clipPath: "inset(100% 0 0% 0)", opacity: 0 }}
                {...(props as React.ComponentPropsWithoutRef<"div">)}
            >
                {children}
            </div>
        )
    }

    return (
        <motion.div
            className={className}
            variants={{
                hidden: { clipPath: "inset(100% 0 0% 0)", opacity: 0 },
                visible: { clipPath: "inset(0% 0 0% 0)", opacity: 1 },
            }}
            transition={{ duration: 0.9, ease: [0.4, 0, 0.15, 1], delay }}
            {...(isInStaggerGroup
                ? {}
                : {
                    initial: "hidden",
                    whileInView: "visible",
                    viewport,
                })}
            {...props}
        >
            {children}
        </motion.div>
    )
}
