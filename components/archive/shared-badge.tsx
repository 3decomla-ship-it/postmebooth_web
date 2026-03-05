"use client"

/**
 * SharedBadge — evergreen social proof line
 * "● SHARED" + IG icon + TikTok icon
 * Uses the shared-pulse-dot animation from globals.css
 */
export function SharedBadge() {
    return (
        <div className="flex items-center gap-3" aria-label="Shared on social media">
            {/* Pulse dot */}
            <span
                className="shared-pulse-dot inline-block w-[6px] h-[6px] rounded-full"
                style={{ background: "var(--color-emerald-signal)" }}
                aria-hidden="true"
            />

            {/* Label */}
            <span
                className="uppercase tracking-[0.18em] text-[9px]"
                style={{
                    fontFamily: "var(--font-mono)",
                    fontWeight: 500,
                    color: "rgba(255,255,255,0.35)",
                }}
            >
                Shared
            </span>

            {/* IG icon */}
            <svg
                width="12" height="12" viewBox="0 0 24 24" fill="none"
                stroke="rgba(255,255,255,0.25)" strokeWidth="1.5"
                strokeLinecap="round" strokeLinejoin="round"
                aria-label="Instagram"
            >
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="5" />
                <circle cx="17.5" cy="6.5" r="1" fill="rgba(255,255,255,0.25)" stroke="none" />
            </svg>

            {/* TikTok icon */}
            <svg
                width="12" height="12" viewBox="0 0 24 24" fill="rgba(255,255,255,0.25)"
                aria-label="TikTok"
            >
                <path d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48z" />
            </svg>
        </div>
    )
}
