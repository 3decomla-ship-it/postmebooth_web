"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"

const HONEYBOOK_URL = "https://postmebooth.hbportal.co/public/book-postmebooth/1-Inquiry_form"

export function MobileStickyCTA() {
    const pathname = usePathname()

    // Hide on contact, LP pages (they have hero+final CTA), and past-events
    if (pathname === '/contact' || pathname.startsWith('/lp/') || pathname.startsWith('/past-events')) return null

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-background/95 backdrop-blur-md p-4 lg:hidden">
            <Link href={HONEYBOOK_URL} target="_blank" className="block w-full">
                <Button className="w-full text-base font-bold rounded-none shadow-[0_0_20px_rgba(245,230,202,0.3)] bg-accent text-surface hover:bg-accent-hover">
                    Secure a Date
                </Button>
            </Link>
        </div>
    )
}
