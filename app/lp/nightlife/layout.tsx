import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Nightlife Photo Booth Rental | PostMeBooth Los Angeles',
    description: 'Studio quality photo booth rentals for Los Angeles nightlife. High energy, low light ready, and instant delivery to keep the room moving.',
    openGraph: {
        title: 'Nightlife Photo Booth Rental | PostMeBooth Los Angeles',
        description: 'Studio quality photo booth rentals for Los Angeles nightlife. High energy, low light ready, and instant delivery to keep the room moving.',
        url: '/lp/nightlife',
    },
}

export default function NightlifeLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>
}
