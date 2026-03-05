"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { MagneticButton } from "@/components/ui/magnetic-button"
import { Menu, X } from "lucide-react"
import { Logo } from "@/components/logo"

const HONEYBOOK_URL = "https://postmebooth.hbportal.co/public/book-postmebooth/1-Inquiry_form"

const navigation = [
    { name: "Services", href: "/services" },
    { name: "Past Events", href: "/past-events" },
    { name: "FAQ", href: "/faq" },
]

export function Header() {
    const pathname = usePathname()
    const isLandingPage = pathname?.startsWith('/lp/')
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
    const [scrolled, setScrolled] = React.useState(false)

    // Only show header CTA if we're not on the home page OR we've scrolled down
    const showDesktopCTA = isLandingPage || pathname !== '/' || scrolled

    React.useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40)
        window.addEventListener("scroll", onScroll, { passive: true })
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500 glass-nav"
            )}
        >
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <Logo asLink className={cn(
                        "transition-colors duration-300",
                        scrolled ? "text-white hover:text-accent" : "text-white hover:text-accent"
                    )} />
                </div>

                {/* Mobile menu button */}
                {!isLandingPage && (
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center p-2.5 text-secondary hover:text-white transition-colors"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            <span className="sr-only">Open main menu</span>
                            {mobileMenuOpen ? (
                                <X className="h-6 w-6" aria-hidden="true" />
                            ) : (
                                <Menu className="h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                )}

                {/* Desktop navigation */}
                {!isLandingPage && (
                    <div className="hidden lg:flex lg:gap-x-10">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={cn(
                                    "relative text-sm font-medium tracking-wide leading-6 transition-colors duration-300 group",
                                    pathname === item.href ? "text-accent" : "text-secondary hover:text-white"
                                )}
                            >
                                {item.name}
                                {/* Sliding underline */}
                                <span className={cn(
                                    "absolute -bottom-0.5 left-0 h-px bg-gradient-to-r from-[#D4AF6A] to-[#B38B45]",
                                    "transition-all duration-300 ease-out",
                                    pathname === item.href
                                        ? "w-full"
                                        : "w-0 group-hover:w-full"
                                )} />
                            </Link>
                        ))}
                    </div>
                )}

                <div className={cn("flex flex-1 justify-end", showDesktopCTA ? (isLandingPage ? "flex" : "hidden lg:flex") : "hidden")}>
                    <MagneticButton strength={0.25} radius={80}>
                        <Link href={HONEYBOOK_URL} target="_blank">
                            <Button
                                size="sm"
                                variant="outline"
                                className="border-white/15 text-[#F5F5F5] hover:bg-white/5 hover:text-[#C5A059] hover:border-white/25 transition-all duration-300 font-medium tracking-widest text-xs uppercase"
                            >
                                Secure a Date
                            </Button>
                        </Link>
                    </MagneticButton>
                </div>
            </nav>

            {/* Mobile menu */}
            {!isLandingPage && mobileMenuOpen && (
                <div className="lg:hidden" role="dialog" aria-modal="true">
                    <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm" />
                    <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background px-6 py-6 sm:max-w-sm border-l border-white/10">
                        <div className="flex items-center justify-between">
                            <Logo asLink className="text-white" onClick={() => setMobileMenuOpen(false)} />
                            <button
                                type="button"
                                className="-m-2.5 p-2.5 text-secondary hover:text-white transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                <X className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="mt-8 flow-root">
                            <div className="-my-6 divide-y divide-white/10">
                                <div className="space-y-1 py-6">
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className={cn(
                                                "-mx-3 block px-3 py-3 text-base font-medium leading-7 hover:bg-white/5 transition-colors tracking-wide",
                                                pathname === item.href ? "text-accent" : "text-white"
                                            )}
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                                <div className="py-6">
                                    <Link
                                        href={HONEYBOOK_URL}
                                        target="_blank"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        <Button className="w-full bg-white text-black hover:bg-white/90 tracking-widest text-xs uppercase">
                                            Secure a Date
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </header>
    )
}
