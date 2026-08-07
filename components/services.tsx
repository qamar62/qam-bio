'use client'

import { motion } from 'motion/react'
import {
  Layers,
  Layout,
  LayoutDashboard,
  Server,
  Sparkles,
  Workflow,
  type LucideIcon,
} from 'lucide-react'
import { services } from '@/data/services'
import { SectionHeading } from './section-heading'
import { staggerContainer, staggerItem } from './reveal'

const icons: Record<string, LucideIcon> = {
  Sparkles,
  Layers,
  Workflow,
  Server,
  LayoutDashboard,
  Layout,
}

export function Services() {
  return (
    <section id="services" className="px-4 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Services"
          title="What I build"
          description="End-to-end delivery across AI products, full-stack platforms, and the automation that ties them together."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, index) => {
            const Icon = icons[service.icon] ?? Sparkles
            const wide = index === 0
            return (
              <motion.article
                key={service.id}
                variants={staggerItem}
                className={`clay rounded-3xl p-8 clay-hover ${
                  wide ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-xl font-bold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-2 leading-relaxed text-muted-foreground text-pretty">
                  {service.description}
                </p>
              </motion.article>
            )
          })}

          <motion.div
            variants={staggerItem}
            className="clay-sage flex flex-col justify-center rounded-3xl p-8"
          >
            <p className="font-display text-2xl font-bold leading-tight text-sage-foreground text-balance">
              Need something that blends software and AI?
            </p>
            <a
              href="#contact"
              className="mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-background/40 px-5 py-3 font-semibold text-sage-foreground transition-transform hover:-translate-y-0.5"
            >
              Start a project
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
