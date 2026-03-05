"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const FAQS = [
    {
        question: "How much space do you need?",
        answer: "Enough room for the booth setup and a clear guest line. We’ll confirm layout based on your venue.",
    },
    {
        question: "How long is setup?",
        answer: "We arrive early and set up before guests are in the way. Exact timing depends on venue access.",
    },
    {
        question: "How does delivery work?",
        answer: "Guests receive their photos instantly via SMS or email. After the event, you get a private gallery link.",
    },
    {
        question: "What areas do you serve?",
        answer: "Los Angeles and surrounding areas.",
    },
    {
        question: "What’s the booking process?",
        answer: "Start with an inquiry through HoneyBook. We’ll confirm details and send options to lock the date.",
    },
]

export function FaqPreview() {
    return (
        <section className="bg-[#050505] py-16 md:py-24 px-6 lg:px-8 border-t border-white/5">
            <div className="mx-auto max-w-7xl grid lg:grid-cols-3 gap-12 lg:gap-24">
                {/* Header Column */}
                <div>
                    <h2
                        className="font-serif text-[#F5F5F5] mb-4"
                        style={{
                            fontSize: "clamp(32px, 4vw, 52px)",
                            fontWeight: 300,
                            letterSpacing: "-0.02em",
                            lineHeight: 1.0,
                        }}
                    >
                        FAQ
                    </h2>
                    <p
                        className="mb-8"
                        style={{
                            fontSize: "14px",
                            color: "rgba(255,255,255,0.35)",
                            lineHeight: 1.7,
                            fontWeight: 300,
                        }}
                    >
                        Quick answers. No back and forth.
                    </p>
                    <Link
                        href="/faq"
                        className="inline-flex items-center gap-2 transition-colors"
                        style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: "10px",
                            fontWeight: 500,
                            letterSpacing: "0.14em",
                            textTransform: "uppercase",
                            color: "rgba(197,160,89,0.75)",
                        }}
                        onMouseEnter={e =>
                            (e.currentTarget.style.color = "rgba(197,160,89,1)")
                        }
                        onMouseLeave={e =>
                            (e.currentTarget.style.color = "rgba(197,160,89,0.75)")
                        }
                    >
                        View full FAQ <ArrowRight className="h-3 w-3" />
                    </Link>
                </div>

                {/* Accordion Column */}
                <div className="lg:col-span-2">
                    <Accordion type="single" collapsible className="w-full">
                        {FAQS.map((faq, idx) => (
                            <AccordionItem
                                key={idx}
                                value={`item-${idx}`}
                                style={{ borderColor: "rgba(255,255,255,0.08)" }}
                            >
                                <AccordionTrigger
                                    className="text-left hover:no-underline"
                                    style={{
                                        fontFamily:
                                            "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
                                        fontSize: "clamp(17px, 2vw, 21px)",
                                        fontWeight: 300,
                                        letterSpacing: "-0.01em",
                                        color: "#F2EFE9",
                                    }}
                                >
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent
                                    style={{
                                        fontSize: "14px",
                                        color: "rgba(255,255,255,0.45)",
                                        lineHeight: 1.8,
                                        fontWeight: 300,
                                        paddingBottom: "24px",
                                    }}
                                >
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    )
}
