'use client'

import { motion } from 'motion/react'
import { processSteps } from '@/data/services'
import { SectionHeading } from './section-heading'
import { staggerContainer, staggerItem } from './reveal'

export function Process() {
  return (
    <section id="process" className="px-4 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Process"
          title="How a project comes together"
          description="A clear, repeatable path from idea to a deployed, automated system."
          align="center"
        />

        <motion.ol
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5"
        >
          {processSteps.map((step, index) => (
            <motion.li
              key={step.number}
              variants={staggerItem}
              className={`clay rounded-3xl p-6 clay-hover ${
                index === 0 ? 'lg:mt-0' : index % 2 === 1 ? 'lg:mt-6' : ''
              }`}
            >
              <span className="clay-sage flex h-12 w-12 items-center justify-center rounded-2xl font-display text-lg font-bold text-sage-foreground">
                {step.number}
              </span>
              <h3 className="mt-5 font-display text-lg font-bold text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-pretty">
                {step.description}
              </p>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  )
}
