import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Manrope, Space_Grotesk } from 'next/font/google'
import { profile } from '@/data/profile'
import './globals.css'

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
  display: 'swap',
})

// Single source of truth — keep in sync with data/profile.ts
const SITE_URL = profile.website

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Qamar Ibrahim | Senior Python / Django Backend Engineer',
    template: '%s | Qamar Ibrahim',
  },
  description:
    'Qamar Ibrahim is a Senior Python / Django backend engineer with 10+ years building REST APIs, AI automation, voice assistants and self-hosted infrastructure.',
  keywords: [
    'Qamar Ibrahim',
    'Python Django Developer',
    'Backend Engineer',
    'Django REST Framework',
    'AI Automation Engineer',
    'DevOps Engineer',
    'PostgreSQL',
    'Celery',
    'Redis',
    'Next.js',
    'React',
    'n8n',
    'MCP',
    'REST APIs',
    'Docker',
    'Proxmox',
    'Dubai',
  ],
  authors: [{ name: 'Qamar Ibrahim', url: SITE_URL }],
  creator: 'Qamar Ibrahim',
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'Qamar Ibrahim',
    title: 'Qamar Ibrahim | Senior Python / Django Backend Engineer',
    description:
      'Production backends, AI automation systems, scalable REST APIs and self-hosted infrastructure — built and operated end to end.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Qamar Ibrahim | Senior Python / Django Backend Engineer',
    description:
      'Production backends, AI automation, scalable REST APIs and self-hosted infrastructure.',
    creator: '@qamar62',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#ece4d6',
  width: 'device-width',
  initialScale: 1,
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${SITE_URL}/#person`,
      name: 'Qamar Ibrahim',
      url: SITE_URL,
      jobTitle: 'Senior Python / Django Backend Engineer',
      email: 'mailto:qam600@gmail.com',
      telephone: '+971529733130',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Dubai',
        addressCountry: 'AE',
      },
      worksFor: { '@type': 'Organization', name: 'Five Vertex Tourism' },
      description:
        'Senior Python / Django backend engineer with 10+ years building REST APIs, AI automation, voice assistants and self-hosted infrastructure.',
      knowsAbout: [
        'Python',
        'Django',
        'Django REST Framework',
        'PostgreSQL',
        'Redis',
        'Celery',
        'Next.js',
        'React',
        'AI Automation',
        'LLM Integration',
        'n8n Automation',
        'REST APIs',
        'Docker',
        'Proxmox',
        'CI/CD',
      ],
      sameAs: [
        'https://github.com/qamar62',
        'https://www.linkedin.com/in/iamqam/',
        'https://x.com/qamar62',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'Qamar Ibrahim — Senior Python / Django Backend Engineer',
      publisher: { '@id': `${SITE_URL}/#person` },
      inLanguage: 'en-US',
    },
    {
      '@type': 'ProfessionalService',
      name: 'Qamar Ibrahim — Backend & AI Automation Engineering',
      url: SITE_URL,
      description:
        'Django backends, REST APIs, AI automation, self-hosted infrastructure and custom WordPress builds.',
      provider: { '@id': `${SITE_URL}/#person` },
      areaServed: 'Worldwide',
      serviceType: [
        'Backend & API Development',
        'AI Automation & LLM Integration',
        'DevOps & Self-Hosted Infrastructure',
        'Full-Stack Web Development',
      ],
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${spaceGrotesk.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
