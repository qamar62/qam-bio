import { Mail } from 'lucide-react'
import { Github, Linkedin, X } from './brand-icons'
import { profile } from '@/data/profile'

const nav = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'AI & Automation', href: '#ai' },
  { label: 'Experience', href: '#experience' },
  { label: 'Digital Card', href: '/qam-bio' },
  { label: 'Résumé', href: profile.cvUrl },
  { label: 'Contact', href: '#contact' },
]

export function Footer() {
  return (
    <footer className="px-4 pb-10">
      <div className="clay mx-auto max-w-6xl rounded-[2rem] p-8 lg:p-12">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-3">
              <span className="clay-sage flex h-11 w-11 items-center justify-center rounded-2xl font-display font-bold text-sage-foreground">
                {profile.initials}
              </span>
              <div>
                <p className="font-display text-lg font-bold text-foreground">
                  {profile.name}
                </p>
                <p className="text-sm text-muted-foreground">{profile.title}</p>
              </div>
            </div>
            <div className="clay-inset mt-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-foreground">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
              </span>
              {profile.availability}
            </div>
          </div>

          <nav aria-label="Footer">
            <ul className="grid grid-cols-2 gap-x-10 gap-y-3">
              {nav.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex gap-2">
            {[
              { href: profile.social.github, icon: Github, label: 'GitHub' },
              { href: profile.social.linkedin, icon: Linkedin, label: 'LinkedIn' },
              { href: profile.social.x, icon: X, label: 'X' },
              { href: profile.social.email, icon: Mail, label: 'Email' },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                aria-label={label}
                className="clay-sm flex h-11 w-11 items-center justify-center rounded-full text-foreground transition-colors hover:text-primary"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row">
          <p>
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <p>Designed &amp; built with care.</p>
        </div>
      </div>
    </footer>
  )
}
