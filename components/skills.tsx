'use client'

import { motion } from 'motion/react'
import {
  Bot,
  Cloud,
  GitBranch,
  Layout,
  Server,
  Sparkles,
  type LucideIcon,
} from 'lucide-react'
import { skillCategories } from '@/data/skills'
import { SectionHeading } from './section-heading'
import { staggerContainer, staggerItem } from './reveal'

const iconByCategory: Record<string, LucideIcon> = {
  ai: Bot,
  backend: Server,
  cloud: Cloud,
  cicd: GitBranch,
  frontend: Layout,
}

export function Skills() {
  return (
    <section id="skills" className="px-4 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Skills"
          title="The stack I design, build and operate with"
          description="Organised the way I actually work — from the AI automation layer down to the self-hosted infrastructure it runs on."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {skillCategories.map((category, index) => {
            const Icon = iconByCategory[category.id] ?? Sparkles
            const highlight = index === 0
            return (
              <motion.div
                key={category.id}
                variants={staggerItem}
                className={`rounded-3xl p-7 clay-hover ${
                  highlight ? 'clay-sage lg:row-span-2' : 'clay'
                }`}
              >
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
                    highlight
                      ? 'bg-sage-foreground/10 text-sage-foreground'
                      : 'bg-primary/10 text-primary'
                  }`}
                >
                  <Icon className="h-6 w-6" />
                </span>
                <h3
                  className={`mt-5 font-display text-xl font-bold ${
                    highlight ? 'text-sage-foreground' : 'text-foreground'
                  }`}
                >
                  {category.title}
                </h3>
                <p
                  className={`mt-2 text-sm leading-relaxed ${
                    highlight
                      ? 'text-sage-foreground/75'
                      : 'text-muted-foreground'
                  }`}
                >
                  {category.description}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className={`rounded-full px-3 py-1.5 text-sm font-medium transition-transform hover:-translate-y-0.5 ${
                        highlight
                          ? 'bg-background/40 text-sage-foreground'
                          : 'clay-inset text-foreground'
                      }`}
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
