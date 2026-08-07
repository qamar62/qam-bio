'use client'

import { motion, useReducedMotion } from 'motion/react'
import {
  Boxes,
  Brain,
  Database,
  MonitorSmartphone,
  Server,
  Workflow,
  type LucideIcon,
} from 'lucide-react'
import { SectionHeading } from './section-heading'

type Layer = {
  title: string
  detail: string
  icon: LucideIcon
  accent: boolean
}

const layers: Layer[] = [
  {
    title: 'Frontend',
    detail: 'Next.js · React · TypeScript · Tailwind',
    icon: MonitorSmartphone,
    accent: false,
  },
  {
    title: 'API Layer',
    detail: 'REST · Auth · Rate limiting',
    icon: Boxes,
    accent: false,
  },
  {
    title: 'Backend',
    detail: 'Django · Python · Business logic',
    icon: Server,
    accent: true,
  },
  {
    title: 'Data',
    detail: 'PostgreSQL · Redis',
    icon: Database,
    accent: false,
  },
  {
    title: 'AI Layer',
    detail: 'LLMs · RAG · Agents · LangGraph',
    icon: Brain,
    accent: true,
  },
  {
    title: 'Automation',
    detail: 'n8n · APIs · MCP',
    icon: Workflow,
    accent: false,
  },
]

export function Architecture() {
  const reduce = useReducedMotion()

  return (
    <section id="architecture" className="px-4 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="How I Build"
          title="A layered production architecture"
          description="From interface to intelligence — every layer is designed to scale, observe, and evolve."
          align="center"
        />

        <div className="mx-auto mt-14 flex max-w-2xl flex-col items-center">
          {layers.map((layer, index) => {
            const Icon = layer.icon
            return (
              <div key={layer.title} className="w-full">
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`flex w-full items-center gap-4 rounded-2xl px-6 py-5 ${
                    layer.accent ? 'clay-sage' : 'clay'
                  }`}
                >
                  <span
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${
                      layer.accent
                        ? 'bg-background/40 text-sage-foreground'
                        : 'bg-primary/10 text-primary'
                    }`}
                  >
                    <Icon className="h-6 w-6" />
                  </span>
                  <div>
                    <p
                      className={`font-display text-lg font-bold ${
                        layer.accent ? 'text-sage-foreground' : 'text-foreground'
                      }`}
                    >
                      {layer.title}
                    </p>
                    <p
                      className={`text-sm ${
                        layer.accent
                          ? 'text-sage-foreground/75'
                          : 'text-muted-foreground'
                      }`}
                    >
                      {layer.detail}
                    </p>
                  </div>
                </motion.div>

                {index < layers.length - 1 && (
                  <div className="relative mx-auto flex h-10 w-px items-center justify-center bg-border">
                    <motion.span
                      aria-hidden
                      className="absolute h-2.5 w-2.5 rounded-full bg-primary"
                      animate={
                        reduce ? {} : { y: [-16, 16], opacity: [0, 1, 0] }
                      }
                      transition={{
                        duration: 1.8,
                        repeat: Infinity,
                        delay: index * 0.2,
                        ease: 'easeInOut',
                      }}
                    />
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
