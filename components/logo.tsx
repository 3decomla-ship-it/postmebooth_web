import Link from "next/link"
import { cn } from "@/lib/utils"

interface LogoProps {
    className?: string
    variant?: "default" | "icon"
    asLink?: boolean
    onClick?: () => void
}

export function Logo({ className, variant = "default", asLink = false, onClick }: LogoProps) {
    const content = (
        <div className={cn("relative flex items-center", className)}>
            {variant === "icon" ? (
                /* Compact icon — used in mobile/tight contexts */
                <svg width="28" height="20" viewBox="0 0 28 20" fill="none" aria-label="PostMeBooth">
                    <text x="0" y="15"
                        fontFamily="Georgia, serif"
                        fontWeight="700"
                        fontSize="15"
                        fill="#F2EFE9"
                        letterSpacing="1"
                    >P</text>
                    <text x="11" y="15"
                        fontFamily="Georgia, serif"
                        fontWeight="700"
                        fontSize="15"
                        fill="#C5A059"
                        letterSpacing="1"
                    >B</text>
                </svg>
            ) : (
                /* Full wordmark — pure SVG, always crisp on dark bg */
                <svg
                    width="160"
                    height="20"
                    viewBox="0 0 160 20"
                    fill="none"
                    aria-label="PostMeBooth"
                    style={{ display: "block", overflow: "visible" }}
                >
                    {/* POST ME — warm white, wide tracking */}
                    <text
                        x="0"
                        y="15"
                        fontFamily="Georgia, 'Cormorant Garamond', serif"
                        fontSize="14"
                        fontWeight="400"
                        fill="#F2EFE9"
                        letterSpacing="4"
                    >
                        POST ME
                    </text>
                    {/* separator dot in champagne */}
                    <circle cx="103" cy="9" r="1.8" fill="#C5A059" opacity="0.8" />
                    {/* BOOTH — champagne gold */}
                    <text
                        x="110"
                        y="15"
                        fontFamily="Georgia, 'Cormorant Garamond', serif"
                        fontSize="14"
                        fontWeight="400"
                        fill="#C5A059"
                        letterSpacing="4"
                    >
                        BOOTH
                    </text>
                </svg>
            )}
        </div>
    )

    if (asLink) {
        return (
            <Link href="/" className="flex items-center transition-opacity hover:opacity-75" onClick={onClick}>
                {content}
            </Link>
        )
    }

    return content
}
