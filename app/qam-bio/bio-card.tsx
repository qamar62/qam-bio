'use client'

import { useState } from 'react'
import Image from 'next/image'
import QRCode from 'react-qr-code'
import { Check, Download, Globe, Mail, Phone, Share2 } from 'lucide-react'
import { Github, Linkedin, X } from '@/components/brand-icons'
import { digitalCard, profile } from '@/data/profile'

const links = [
  { key: 'linkedin', label: 'LinkedIn', href: profile.social.linkedin, Icon: Linkedin },
  { key: 'github', label: 'GitHub', href: profile.social.github, Icon: Github },
  { key: 'x', label: 'X', href: profile.social.x, Icon: X },
  { key: 'website', label: 'Website', href: profile.social.website, Icon: Globe },
  { key: 'phone', label: 'Call', href: `tel:${profile.phone}`, Icon: Phone },
  { key: 'email', label: 'Email', href: `mailto:${profile.email}`, Icon: Mail },
]

/** RFC 6350 vCard built from the same profile data the page renders. */
function buildVCard() {
  const note = [
    digitalCard.tagline,
    ...digitalCard.highlights,
    digitalCard.mission,
  ].join('\\n')

  return [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `FN:${profile.name}`,
    `EMAIL;TYPE=INTERNET:${profile.email}`,
    `TITLE:${profile.title}`,
    `ORG:${profile.organisation}`,
    `TEL;TYPE=CELL,VOICE,WORK:${profile.phone}`,
    `URL;TYPE=WORK:${profile.website}`,
    'ADR;TYPE=WORK:;;Dubai, UAE;;;;',
    `URL:${profile.social.linkedin}`,
    `URL:${profile.social.github}`,
    `URL:${profile.social.x}`,
    `NOTE:${note}`,
    'END:VCARD',
  ].join('\r\n')
}

export function BioCard() {
  const [toast, setToast] = useState('')

  function flash(text: string) {
    setToast(text)
    setTimeout(() => setToast(''), 2500)
  }

  function downloadVCard() {
    const blob = new Blob([buildVCard()], { type: 'text/vcard' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${profile.name.replace(/\s+/g, '_')}.vcf`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  async function shareCard() {
    const url = digitalCard.url
    try {
      if (navigator.share) {
        await navigator.share({ title: profile.name, text: profile.title, url })
        return
      }
      await navigator.clipboard.writeText(url)
      flash('Link copied to clipboard')
    } catch {
      /* the user dismissed the share sheet */
    }
  }

  return (
    <div className="w-full max-w-md">
      <div className="clay overflow-hidden rounded-[2rem] p-8 sm:p-10">
        <div className="flex flex-col items-center text-center">
          <div className="clay-sm rounded-full p-1.5">
            <Image
              src={profile.avatar}
              alt={profile.name}
              width={128}
              height={128}
              priority
              className="h-28 w-28 rounded-full object-cover sm:h-32 sm:w-32"
            />
          </div>

          <h1 className="mt-6 font-display text-3xl font-bold tracking-tight text-foreground text-balance">
            {profile.name}
          </h1>
          <p className="mt-1.5 font-medium text-primary">{profile.title}</p>
          <p className="mt-4 text-sm font-semibold text-foreground">
            {digitalCard.tagline}
          </p>
          <span className="clay-inset mt-4 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            {digitalCard.experience}
          </span>
        </div>

        <ul className="mt-8 flex flex-col gap-2.5">
          {digitalCard.highlights.map((item) => (
            <li key={item} className="flex gap-3 text-sm text-foreground">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              {item}
            </li>
          ))}
        </ul>

        <p className="mt-6 text-center text-sm italic text-muted-foreground text-pretty">
          {digitalCard.mission}
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {links.map(({ key, label, href, Icon }) => (
            <a
              key={key}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              aria-label={label}
              title={label}
              className="clay-sm flex h-12 w-12 items-center justify-center rounded-2xl text-foreground transition-all hover:-translate-y-0.5 hover:text-primary"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-center">
          <div className="clay-inset rounded-2xl p-4">
            <div className="rounded-xl bg-white p-3">
              <QRCode
                value={digitalCard.url}
                size={110}
                bgColor="#ffffff"
                fgColor="#2f3a34"
                level="H"
              />
            </div>
          </div>
          <p className="mt-3 text-xs text-muted-foreground">Scan to connect</p>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          <button
            type="button"
            onClick={downloadVCard}
            className="clay-sage clay-hover inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 font-semibold text-sage-foreground"
          >
            Save contact
            <Download className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={shareCard}
            className="clay-sm clay-hover inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 font-semibold text-foreground"
          >
            Share card
            <Share2 className="h-4 w-4" />
          </button>
        </div>

        <p className="mt-8 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} {profile.name} · {profile.organisation}
        </p>
      </div>

      {toast && (
        <div
          role="status"
          className="clay fixed bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-foreground"
        >
          <Check className="h-4 w-4 text-primary" />
          {toast}
        </div>
      )}
    </div>
  )
}
