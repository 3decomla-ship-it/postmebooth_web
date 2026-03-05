import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Corporate Photo Booth Rental | PostMeBooth Los Angeles',
    description: 'Elevate your brand activation or holiday party with a studio-quality photo booth. Executive-level portraits and instant delivery for Los Angeles events.',
    openGraph: {
        title: 'Corporate Photo Booth Rental | PostMeBooth Los Angeles',
        description: 'Elevate your brand activation or holiday party with a studio-quality photo booth. Executive-level portraits and instant delivery for Los Angeles events.',
        url: '/lp/corporate',
    },
}

export default function CorporateLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>
}
