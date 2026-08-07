'use client'

import { motion, useReducedMotion } from 'motion/react'
import {
  Bot,
  Braces,
  Cloud,
  Cpu,
  Database,
  Network,
  Workflow,
} from 'lucide-react'

type FloatCard = {
  label: string
  sub: string
  icon: typeof Bot
  className: string
  sage?: boolean
  delay: number
  range: number
}

const cards: FloatCard[] = [
  {
    label: 'AI Agent',
    sub: 'LangGraph',
    icon: Bot,
    className: 'left-[6%] top-[8%]',
    sage: true,
    delay: 0,
    range: 14,
  },
  {
    label: 'Python',
    sub: 'Django · DRF',
    icon: Braces,
    className: 'right-[4%] top-[2%]',
    delay: 0.4,
    range: 12,
  },
  {
    label: 'REST API',
    sub: 'Integrations',
    icon: Network,
    className: 'left-[0%] top-[52%]',
    delay: 0.8,
    range: 16,
  },
  {
    label: 'PostgreSQL',
    sub: 'Redis cache',
    icon: Database,
    className: 'right-[2%] top-[46%]',
    sage: true,
    delay: 0.2,
    range: 13,
  },
  {
    label: 'n8n',
    sub: 'Automation',
    icon: Workflow,
    className: 'left-[14%] bottom-[4%]',
    delay: 1,
    range: 15,
  },
  {
    label: 'Cloud',
    sub: 'Docker · CI/CD',
    icon: Cloud,
    className: 'right-[12%] bottom-[2%]',
    delay: 0.6,
    range: 12,
  },
]

export function HeroVisual() {
  const reduce = useReducedMotion()

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[440px]">
      {/* Central core */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-1/2 top-1/2 flex h-40 w-40 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-2 rounded-[2rem] clay-sage"
      >
        <motion.div
          animate={reduce ? {} : { rotate: 360 }}
          transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
        >
          <Cpu className="h-12 w-12 text-sage-foreground" strokeWidth={1.4} />
        </motion.div>
        <span className="font-display text-sm font-semibold text-sage-foreground">
          AI Core
        </span>
        <span className="text-xs text-sage-foreground/70">Full-Stack + LLM</span>
      </motion.div>

      {/* Orbit ring */}
      <motion.div
        aria-hidden
        animate={reduce ? {} : { rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-primary/25"
      />
      <motion.div
        aria-hidden
        animate={reduce ? {} : { rotate: -360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        className="absolute left-1/2 top-1/2 h-[22rem] w-[22rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-primary/15"
      />

      {/* Floating cards */}
      {cards.map((card) => {
        const Icon = card.icon
        return (
          <motion.div
            key={card.label}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: reduce ? 0 : [0, -card.range, 0],
            }}
            transition={{
              opacity: { duration: 0.6, delay: card.delay },
              scale: { duration: 0.6, delay: card.delay },
              y: {
                duration: 4 + card.range / 6,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: card.delay,
              },
            }}
            className={`absolute flex items-center gap-2.5 rounded-2xl px-3.5 py-2.5 ${
              card.sage ? 'clay-sage' : 'clay'
            } ${card.className}`}
          >
            <span
              className={`flex h-8 w-8 items-center justify-center rounded-xl ${
                card.sage
                  ? 'bg-sage-foreground/10 text-sage-foreground'
                  : 'bg-primary/10 text-primary'
              }`}
            >
              <Icon className="h-4 w-4" />
            </span>
            <span className="flex flex-col leading-tight">
              <span
                className={`text-sm font-semibold ${
                  card.sage ? 'text-sage-foreground' : 'text-foreground'
                }`}
              >
                {card.label}
              </span>
              <span
                className={`text-[11px] ${
                  card.sage ? 'text-sage-foreground/70' : 'text-muted-foreground'
                }`}
              >
                {card.sub}
              </span>
            </span>
          </motion.div>
        )
      })}
    </div>
  )
}
