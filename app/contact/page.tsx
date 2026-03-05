
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Instagram, ExternalLink } from "lucide-react"
import Link from "next/link"
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Inquire | PostMeBooth Los Angeles',
    description: 'Secure your date with Los Angeles\' premier luxury photo booth. Minimal footprint, studio lighting, instant delivery.',
}

export default function ContactPage() {
    return (
        <main className="bg-[#050505] min-h-screen text-[#F5F5F5]">
            {/* Hero */}
            <section className="pt-32 pb-12 text-center px-6 border-b border-white/5">
                <h1 className="text-4xl font-bold tracking-tight md:text-6xl font-serif text-[#F5F5F5] mb-6">
                    Hold your date.
                </h1>
                <p className="max-w-xl mx-auto text-lg text-[#B8B8B8] font-light">
                    Fewer than 12 events per quarter. Tell us your date and venue and we&apos;ll confirm availability within 24 hours.
                </p>
            </section>

            <section className="py-24 px-6 lg:px-8">
                <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-12">
                    {/* Contact Info Side */}
                    <div className="lg:col-span-4 space-y-12">
                        <div>
                            <h3 className="text-xl font-bold font-serif text-[#F5F5F5] mb-8">Direct Contact</h3>
                            <div className="space-y-6">
                                <div className="flex items-center text-[#B8B8B8] group">
                                    <div className="h-10 w-10 rounded-full bg-[#141414] border border-white/5 flex items-center justify-center mr-4 group-hover:border-[#C8B08A]/50 transition-colors">
                                        <Mail className="h-5 w-5 text-[#C8B08A]" />
                                    </div>
                                    <span className="text-lg">postmebooth@gmail.com</span>
                                </div>
                                <div className="flex items-center text-[#B8B8B8] group">
                                    <div className="h-10 w-10 rounded-full bg-[#141414] border border-white/5 flex items-center justify-center mr-4 group-hover:border-[#C8B08A]/50 transition-colors">
                                        <Instagram className="h-5 w-5 text-[#C8B08A]" />
                                    </div>
                                    <span className="text-lg">@postmebooth</span>
                                </div>
                                <div className="flex items-center text-[#B8B8B8] group">
                                    <div className="h-10 w-10 rounded-full bg-[#141414] border border-white/5 flex items-center justify-center mr-4 group-hover:border-[#C8B08A]/50 transition-colors">
                                        <MapPin className="h-5 w-5 text-[#C8B08A]" />
                                    </div>
                                    <span className="text-lg">Los Angeles, CA</span>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 bg-[#0B0B0B] border border-white/5 rounded-xl">
                            <h4 className="font-bold text-[#F5F5F5] mb-2">Prefer to open in a new tab?</h4>
                            <p className="text-sm text-[#B8B8B8] mb-6">
                                If the form isn't loading or you prefer a full screen experience.
                            </p>
                            <Link href="https://postmebooth.hbportal.co/public/book-postmebooth/1-Inquiry_form" target="_blank">
                                <Button variant="outline" className="w-full border-white/10 text-[#F5F5F5] hover:bg-white/5 bg-transparent">
                                    Open Booking Form <ExternalLink className="ml-2 h-4 w-4" />
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* HoneyBook Embed Side */}
                    <div className="lg:col-span-8">
                        <IframeContainer />
                    </div>
                </div>
            </section>
        </main>
    )
}

function IframeContainer() {
    return (
        <div className="bg-[#141414] rounded-xl overflow-hidden h-[850px] w-full shadow-2xl relative border border-white/5">
            <iframe
                src="https://postmebooth.hbportal.co/public/book-postmebooth/1-Inquiry_form"
                title="PostMeBooth Inquiry Form"
                className="w-full h-full border-0 relative z-10"
                allow="camera; microphone; autoplay; encrypted-media;"
            />
        </div>
    )
}
