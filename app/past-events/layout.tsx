import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Past Events | PostMeBooth Archive',
    description: 'Explore past events and guest portraits from PostMeBooth. Proof from real rooms in Los Angeles.',
    openGraph: {
        title: 'Past Events | PostMeBooth Archive',
        description: 'Explore past events and guest portraits from PostMeBooth. Proof from real rooms in Los Angeles.',
    },
}

export default function PastEventsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
