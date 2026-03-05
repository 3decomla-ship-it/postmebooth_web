"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface MagneticButtonProps {
    children: React.ReactNode
    className?: string
    /** How much the element follows the cursor. 0.0–1.0, default 0.3 */
    strength?: number
    /** Radius in px within which the magnet activates, default 100 */
    radius?: number
}

/**
 * Wraps any element and applies a magnetic hover effect:
 * within `radius` px the element drifts toward the cursor by `strength` × offset.
 * Resets on mouse leave with a spring easing.
 */
export function MagneticButton({
    children,
    className,
    strength = 0.3,
    radius = 100,
}: MagneticButtonProps) {
    const ref = React.useRef<HTMLDivElement>(null)
    const [pos, setPos] = React.useState({ x: 0, y: 0 })
    const [active, setActive] = React.useState(false)

    const handleMouseMove = React.useCallback(
        (e: MouseEvent) => {
            if (!ref.current) return
            const rect = ref.current.getBoundingClientRect()
            const cx = rect.left + rect.width / 2
            const cy = rect.top + rect.height / 2
            const dx = e.clientX - cx
            const dy = e.clientY - cy
            const dist = Math.sqrt(dx * dx + dy * dy)

            if (dist < radius) {
                setActive(true)
                setPos({ x: dx * strength, y: dy * strength })
            } else {
                setActive(false)
                setPos({ x: 0, y: 0 })
            }
        },
        [radius, strength]
    )

    React.useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove)
        return () => window.removeEventListener("mousemove", handleMouseMove)
    }, [handleMouseMove])

    const handleMouseLeave = () => {
        setActive(false)
        setPos({ x: 0, y: 0 })
    }

    return (
        <div
            ref={ref}
            onMouseLeave={handleMouseLeave}
            className={cn("inline-block", className)}
            style={{
                transform: `translate(${pos.x}px, ${pos.y}px)`,
                transition: active
                    ? "transform 0.15s ease-out"
                    : "transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
                willChange: "transform",
            }}
        >
            {children}
        </div>
    )
}
