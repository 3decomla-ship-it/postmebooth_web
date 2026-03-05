import { AlertCircle, Smartphone, Clock } from "lucide-react"

export function PainAgitation() {
    return (
        <section className="bg-[#050505] py-16 md:py-24 px-6 lg:px-8 border-b border-white/5">
            <div className="mx-auto max-w-4xl text-center">
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#F5F5F5] mb-16">
                    The problem isn’t your event. <span className="text-[#C8B08A] italic">It’s the capture.</span>
                </h2>

                <div className="flex flex-col items-center">
                    <div className="bg-[#141414] p-4 rounded-full mb-6 border border-white/5">
                        <Smartphone className="h-6 w-6 text-[#F5F5F5]/60" />
                    </div>
                    <p className="text-[#B8B8B8] leading-relaxed">
                        Guests take blurry phone pics, nothing gets posted, and the moment is lost.
                    </p>
                </div>

                <div className="flex flex-col items-center">
                    <div className="bg-[#141414] p-4 rounded-full mb-6 border border-white/5">
                        <AlertCircle className="h-6 w-6 text-[#F5F5F5]/60" />
                    </div>
                    <p className="text-[#B8B8B8] leading-relaxed">
                        Photographers can feel awkward or slow the vibe, making guests stiff.
                    </p>
                </div>

                <div className="flex flex-col items-center">
                    <div className="bg-[#141414] p-4 rounded-full mb-6 border border-white/5">
                        <Clock className="h-6 w-6 text-[#F5F5F5]/60" />
                    </div>
                    <p className="text-[#B8B8B8] leading-relaxed">
                        No instant deliverables means the night disappears by morning.
                    </p>
                </div>
            </div>
        </section>
    )
}
