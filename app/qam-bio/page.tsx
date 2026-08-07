import type { Metadata } from 'next'
import { digitalCard, profile } from '@/data/profile'
import { BioCard } from './bio-card'

export const metadata: Metadata = {
  title: 'Digital Card',
  description: `${profile.name} — ${profile.title}. Save my contact details, or reach me by phone, email or LinkedIn.`,
  alternates: { canonical: digitalCard.url },
  openGraph: {
    title: `${profile.name} | Digital Card`,
    description: `${profile.title} · ${digitalCard.tagline}`,
    url: digitalCard.url,
    images: [{ url: profile.avatar }],
  },
}

export default function DigitalCardPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-12">
      <BioCard />
    </main>
  )
}
