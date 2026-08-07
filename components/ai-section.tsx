'use client'

import { motion, useReducedMotion } from 'motion/react'
import {
  Bot,
  Database,
  MessageSquareReply,
  Network,
  User,
  Workflow,
  Wrench,
  type LucideIcon,
} from 'lucide-react'
import { SectionHeading } from './section-heading'
import { staggerContainer, staggerItem } from './reveal'

const flow: { label: string; icon: LucideIcon }[] = [
  { label: 'User', icon: User },
  { label: 'AI Agent', icon: Bot },
  { label: 'Tools', icon: Wrench },
  { label: 'APIs', icon: Network },
  { label: 'Database', icon: Database },
  { label: 'Automation', icon: Workflow },
  { label: 'Response', icon: MessageSquareReply },
]

const capabilities = [
  'LLMs',
  'AI Agents',
  'RAG-ready Systems',
  'MCP / Tool-Calling',
  'Claude / ChatGPT',
  'ElevenLabs',
  'n8n',
  'APIs',
  'Databases',
  'Voice AI',
  'Intelligent Workflows',
]

export function AISection() {
  const reduce = useReducedMotion()

  return (
    <section id="ai" className="px-4 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="AI Engineering"
          title="AI, automation & intelligent systems"
          description="I build systems that combine LLMs, agents, retrieval, and automation into reliable pipelines that run in production."
        />

        <div className="clay mt-14 rounded-[2rem] p-6 sm:p-10">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-primary" />
              <span className="text-sm font-semibold text-foreground">
                Agent Pipeline
              </span>
            </div>
            <span className="clay-inset rounded-full px-3 py-1 text-xs font-medium text-muted-foreground">
              live · orchestrated
            </span>
          </div>

          {/* Flow */}
          <motion.ol
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            className="mt-8 flex flex-col gap-3 lg:flex-row lg:items-stretch lg:gap-0"
          >
            {flow.map((node, index) => {
              const Icon = node.icon
              return (
                <motion.li
                  key={node.label}
                  variants={staggerItem}
                  className="flex items-center gap-3 lg:flex-1 lg:flex-col lg:gap-0"
                >
                  <div className="clay-sage flex w-full items-center gap-3 rounded-2xl px-4 py-3 lg:flex-col lg:gap-2 lg:px-2 lg:py-4 lg:text-center">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-background/40 text-sage-foreground">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="text-sm font-semibold text-sage-foreground">
                      {node.label}
                    </span>
                  </div>
                  {index < flow.length - 1 && (
                    <div className="relative flex h-6 w-full items-center justify-center lg:h-auto lg:w-6">
                      <span className="h-6 w-px bg-border lg:h-px lg:w-full" />
                      <motion.span
                        aria-hidden
                        className="absolute h-2 w-2 rounded-full bg-primary"
                        animate={
                          reduce
                            ? {}
                            : { y: [0, 24, 0], opacity: [0, 1, 0] }
                        }
                        transition={{
                          duration: 1.6,
                          repeat: Infinity,
                          delay: index * 0.25,
                          ease: 'easeInOut',
                        }}
                        style={{ left: '50%', translateX: '-50%' }}
                      />
                    </div>
                  )}
                </motion.li>
              )
            })}
          </motion.ol>

          {/* Capabilities */}
          <div className="mt-10 border-t border-border pt-8">
            <p className="text-sm font-semibold text-foreground">
              Combining
            </p>
            <ul className="mt-4 flex flex-wrap gap-2.5">
              {capabilities.map((cap) => (
                <li
                  key={cap}
                  className="clay-inset rounded-full px-4 py-2 text-sm font-medium text-foreground"
                >
                  {cap}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
