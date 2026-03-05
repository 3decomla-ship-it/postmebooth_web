"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Instagram, Mail, MapPin } from "lucide-react"
import { Logo } from "@/components/logo"

const navigation = {
    main: [
        { name: 'Services', href: '/services' },
        { name: 'Past Events', href: '/past-events' },
        { name: 'FAQ', href: '/faq' },
    ],
}

const HONEYBOOK_URL = "https://postmebooth.hbportal.co/public/book-postmebooth/1-Inquiry_form"

export function Footer() {
    const pathname = usePathname()
    const isLandingPage = pathname?.startsWith('/lp/')

    return (
        <footer className="bg-background border-t border-white/5" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>
            <div className="mx-auto max-w-7xl px-6 pb-12 pt-16 lg:px-8 lg:pt-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Logo asLink className="text-primary" />
                        <p className="text-sm leading-[1.7] text-secondary max-w-xs font-light">
                            PostMeBooth &middot; Los Angeles
                        </p>
                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-accent">
                            <MapPin className="h-3.5 w-3.5" />
                            Los Angeles
                        </div>
                    </div>

                    {/* Navigation Column */}
                    <div>
                        <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-6">Navigate</h3>
                        <nav className="flex flex-col gap-3">
                            {!isLandingPage && navigation.main.map((item) => (
                                <Link key={item.name} href={item.href} className="text-sm font-medium leading-6 text-secondary hover:text-primary transition-colors duration-300">
                                    {item.name}
                                </Link>
                            ))}
                            <Link href={HONEYBOOK_URL} target="_blank" className="text-sm font-medium leading-6 text-secondary hover:text-accent transition-colors duration-300 uppercase">
                                SECURE A DATE
                            </Link>
                        </nav>
                    </div>

                    {/* Contact & Social Column */}
                    <div>
                        <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-6">Connect</h3>
                        <div className="flex flex-col gap-4">
                            <a href="mailto:postmebooth@gmail.com" className="flex items-center gap-3 text-sm text-secondary hover:text-primary transition-colors group">
                                <div className="h-9 w-9 rounded-full bg-surface border border-white/5 flex items-center justify-center group-hover:border-accent/30 transition-colors">
                                    <Mail className="h-4 w-4 text-accent" />
                                </div>
                                postmebooth@gmail.com
                            </a>
                            <a href="https://instagram.com/postmebooth" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-secondary hover:text-primary transition-colors group">
                                <div className="h-9 w-9 rounded-full bg-surface border border-white/5 flex items-center justify-center group-hover:border-accent/30 transition-colors">
                                    <Instagram className="h-4 w-4 text-accent" />
                                </div>
                                @postmebooth
                            </a>
                            {/* TikTok */}
                            <a href="https://tiktok.com/@postmebooth" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-secondary hover:text-primary transition-colors group">
                                <div className="h-9 w-9 rounded-full bg-surface border border-white/5 flex items-center justify-center group-hover:border-accent/30 transition-colors">
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-accent" aria-label="TikTok">
                                        <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z" />
                                    </svg>
                                </div>
                                @postmebooth
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-16 border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-xs leading-5 text-secondary/40 tracking-wide">
                        &copy; {new Date().getFullYear()} PostMeBooth. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2 mr-2">
                            <span className="relative flex h-1.5 w-1.5 items-center justify-center">
                                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-40 motion-safe:animate-ping" style={{ animationDuration: '3s' }}></span>
                                <span className="relative inline-flex rounded-full h-1 w-1 bg-emerald-500"></span>
                            </span>
                            <span className="text-[10px] font-bold tracking-[0.2em] text-secondary uppercase">SHARED</span>
                        </div>
                        <a href="https://instagram.com/postmebooth" target="_blank" rel="noopener noreferrer" className="text-secondary/40 hover:text-accent transition-colors">
                            <Instagram className="h-4 w-4" />
                        </a>
                        <a href="https://tiktok.com/@postmebooth" target="_blank" rel="noopener noreferrer" className="text-secondary/40 hover:text-accent transition-colors">
                            <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-label="TikTok">
                                <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
