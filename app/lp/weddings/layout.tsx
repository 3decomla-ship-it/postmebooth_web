import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Wedding Photo Booth Rental | PostMeBooth Los Angeles',
    description: 'Luxury wedding photo booth rentals in Los Angeles. Full frame editorial portraits, elegant setups, and instant SMS or email delivery for guests.',
    openGraph: {
        title: 'Wedding Photo Booth Rental | PostMeBooth Los Angeles',
        description: 'Luxury wedding photo booth rentals in Los Angeles. Full frame editorial portraits, elegant setups, and instant SMS or email delivery for guests.',
        url: '/lp/weddings',
    },
}

export default function WeddingsLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>
}
