export function ProofFast() {
    return (
        <section className="bg-[#0B0B0B] py-16 md:py-24 px-6 lg:px-8 border-b border-white/5">
            <div className="mx-auto max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#F5F5F5] mb-4">
                        Real reactions. Real rooms.
                    </h2>
                </div>

                {/* Testimonials */}
                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    {[
                        {
                            quote: "The photos were actually good. Like, people posted them immediately.",
                            author: "Sarah J.",
                            role: "Event Planner, LA"
                        },
                        {
                            quote: "Zero technical issues. Set up was fast, flow was smooth.",
                            author: "Mike T.",
                            role: "Venue Manager"
                        },
                        {
                            quote: "It just looks better than the typical iPad booth. Fits the vibe.",
                            author: "Jessica L.",
                            role: "Marketing Director"
                        }
                    ].map((item, idx) => (
                        <div key={idx} className="bg-[#141414] p-8 rounded-xl border border-white/5">
                            <p className="text-[#F5F5F5] text-lg italic mb-6">"{item.quote}"</p>
                            <div>
                                <p className="text-[#F5F5F5] font-bold text-sm">{item.author}</p>
                                <p className="text-[#B8B8B8] text-xs uppercase tracking-wider">{item.role}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mini Portrait Grid */}
                <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                    {[1, 2, 3, 4, 5, 6].map((idx) => (
                        <div key={idx} className="aspect-[9/16] bg-[#050505] rounded-lg overflow-hidden border border-white/5 relative group">
                            {/* Placeholder for images */}
                            <div className="absolute inset-0 bg-[#141414] animate-pulse" />
                            <div className="absolute inset-0 flex items-center justify-center text-[#B8B8B8]/10 font-bold text-2xl">
                                {idx}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
