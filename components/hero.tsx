'use client'

import { motion, type Variants } from 'motion/react'
import { ArrowUpRight, Download, Mail } from 'lucide-react'
import { Github, Linkedin } from './brand-icons'
import { profile } from '@/data/profile'
import { HeroVisual } from './hero-visual'

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}
const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden px-4 pt-32 pb-16 sm:pt-36 lg:pt-40 lg:pb-24"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div
            variants={item}
            className="clay-sm inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-foreground"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
            </span>
            {profile.availability}
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 font-display text-5xl font-bold leading-[0.95] tracking-tight text-balance sm:text-6xl lg:text-7xl"
          >
            <span className="block text-foreground">Building</span>
            <span className="block text-gradient-sage">Intelligent</span>
            <span className="block text-foreground">Digital Systems.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty"
          >
            <span className="font-semibold text-foreground">{profile.name}</span>{' '}
            — {profile.title}. {profile.tagline}
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="clay-sage group inline-flex items-center gap-2 rounded-full px-6 py-3.5 font-semibold text-sage-foreground clay-hover"
            >
              View My Work
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="clay inline-flex items-center gap-2 rounded-full px-6 py-3.5 font-semibold text-foreground clay-hover"
            >
              Let&apos;s Connect
            </a>
            <a
              href={profile.cvUrl}
              className="clay-sm inline-flex items-center gap-2 rounded-full px-6 py-3.5 font-semibold text-foreground transition-colors hover:text-primary"
            >
              <Download className="h-4 w-4" />
              Download CV
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-8 flex items-center gap-3">
            <span className="text-sm text-muted-foreground">Find me on</span>
            <div className="flex gap-2">
              {[
                { href: profile.social.github, icon: Github, label: 'GitHub' },
                { href: profile.social.linkedin, icon: Linkedin, label: 'LinkedIn' },
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
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="order-first lg:order-last"
        >
          <HeroVisual />
        </motion.div>
      </div>
    </section>
  )
}
