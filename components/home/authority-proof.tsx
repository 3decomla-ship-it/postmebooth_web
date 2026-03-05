"use client"

import { cn } from "@/lib/utils"

export function AuthorityProof() {
    const venues = [
        "EA Sports",
        "City Club LA",
        "Sofitel LA",
        "Equinox",
        "Run Club"
    ]

    return (
        <section className="bg-background py-16 md:py-24 px-6 lg:px-8 border-b border-white/5">
            <div className="mx-auto max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl sm:text-5xl font-serif font-bold text-primary mb-8 tracking-tight">
                            Trusted by teams that care about the room.
                        </h2>
                        <p className="text-secondary text-lg leading-[1.7] max-w-xl font-light">
                            Brand safe output, clean setup, fast flow, built for nightlife, corporate, and weddings.
                        </p>
                    </div>

                    <div className="flex flex-col gap-10">
                        {/* Logo Placeholders Removed for 'Trusted By' focus */}

                        {/* Proven At List */}
                        <div className="flex flex-col gap-5">
                            <div className="flex flex-wrap gap-x-12 gap-y-6 items-center">
                                {venues.map((venue, i) => (
                                    <div key={i} className="relative group cursor-default transition-all duration-500">
                                        <span className="text-xl sm:text-2xl font-serif font-bold text-secondary/40 group-hover:text-primary transition-colors duration-500">
                                            {venue}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
