'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Menu, X } from 'lucide-react'
import { profile } from '@/data/profile'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'AI & Automation', href: '#ai' },
  { label: 'Card', href: '/qam-bio' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4">
      <motion.nav
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`clay mt-3 flex w-full max-w-5xl items-center justify-between rounded-full px-3 transition-all duration-500 ${
          scrolled ? 'py-1.5' : 'py-2.5'
        }`}
        aria-label="Primary"
      >
        <a
          href="#home"
          className="clay-sage ml-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-display text-sm font-bold text-sage-foreground"
          aria-label={`${profile.name} — home`}
        >
          {profile.initials}
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-full px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent/40 hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="clay-sage hidden rounded-full px-5 py-2.5 text-sm font-semibold text-sage-foreground clay-hover sm:inline-block"
          >
            Let&apos;s Talk
          </a>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="clay-sm flex h-10 w-10 items-center justify-center rounded-full text-foreground lg:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-md lg:hidden"
          >
            <motion.div
              initial={{ scale: 0.94, y: 16, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.94, y: 16, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="clay absolute inset-x-4 top-4 rounded-3xl p-5"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-lg font-bold text-foreground">
                  {profile.name}
                </span>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="clay-sm flex h-10 w-10 items-center justify-center rounded-full"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <ul className="mt-6 flex flex-col gap-1">
                {links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-2xl px-4 py-3 text-lg font-medium text-foreground transition-colors hover:bg-accent/40"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="clay-sage mt-4 block rounded-2xl px-4 py-3.5 text-center font-semibold text-sage-foreground"
              >
                Let&apos;s Connect
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
