'use client'

import { useEffect, useState } from 'react'
import type { Project } from '@/data/projects'
import {
  normalizeStoredProject,
  type StoredProject,
} from '@/lib/stored-projects'
import { ProjectCard } from './project-card'
import { Reveal } from './reveal'

/**
 * Projects added through /admin. Rendered on the client so the statically
 * generated page keeps its SEO-friendly HTML while still picking up new
 * entries without a redeploy.
 */
export function DynamicProjects() {
  const [extra, setExtra] = useState<Project[]>([])

  useEffect(() => {
    let active = true

    fetch('/api/projects', { cache: 'no-store' })
      .then((res) => (res.ok ? res.json() : []))
      .then((data: StoredProject[]) => {
        if (active && Array.isArray(data)) {
          setExtra(data.map(normalizeStoredProject))
        }
      })
      .catch(() => {
        /* the section simply stays empty */
      })

    return () => {
      active = false
    }
  }, [])

  if (extra.length === 0) return null

  return (
    <div className="mt-20">
      <Reveal className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
        <h3 className="font-display text-2xl font-bold tracking-tight text-foreground">
          Recently Added
        </h3>
        <span className="hidden h-px flex-1 bg-border sm:block" />
        <p className="text-sm text-muted-foreground">Fresh out of the workshop</p>
      </Reveal>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {extra.map((project, i) => (
          <ProjectCard key={project.id} project={project} delay={i * 0.04} />
        ))}
      </div>
    </div>
  )
}
