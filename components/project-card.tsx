import {
  ArrowUpRight,
  Building2,
  Dumbbell,
  Globe,
  Home,
  Layers,
  Lock,
  Mic,
  Plane,
  Scissors,
  Server,
  Sofa,
  UtensilsCrossed,
  Wrench,
  type LucideIcon,
} from 'lucide-react'
import type { Project } from '@/data/projects'
import { Reveal } from './reveal'

export const iconMap: Record<string, LucideIcon> = {
  Plane,
  Globe,
  Dumbbell,
  UtensilsCrossed,
  Building2,
  Mic,
  Layers,
  Sofa,
  Wrench,
  Home,
  Scissors,
  Server,
}

export function ProjectCard({
  project,
  delay = 0,
}: {
  project: Project
  delay?: number
}) {
  const Icon = iconMap[project.icon] ?? Server
  const [from, to] = project.accent

  return (
    <Reveal
      as="article"
      delay={delay}
      className={`clay group flex flex-col rounded-3xl p-7 clay-hover ${
        project.featured ? 'md:col-span-2' : ''
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <span
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-white shadow-sm"
          style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
          aria-hidden
        >
          <Icon className="h-6 w-6" />
        </span>
        <span
          className="rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em]"
          style={{ color: to, backgroundColor: `${from}1f` }}
        >
          {project.category}
        </span>
      </div>

      <h3 className="mt-5 font-display text-xl font-bold tracking-tight text-foreground sm:text-2xl">
        {project.name}
      </h3>
      <p className="mt-3 flex-1 leading-relaxed text-muted-foreground text-pretty">
        {project.description}
      </p>

      {project.tech.length > 0 && (
        <ul className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <li
              key={t}
              className="clay-inset rounded-full px-3 py-1 text-xs font-medium text-foreground"
            >
              {t}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-6">
        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
            style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
          >
            Visit site
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        ) : (
          <span className="clay-inset inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-muted-foreground">
            <Lock className="h-3.5 w-3.5" />
            {project.privateLabel ?? 'Private'}
          </span>
        )}
      </div>
    </Reveal>
  )
}
