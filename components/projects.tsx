import { fullStackProjects, wordpressProjects } from '@/data/projects'
import { ProjectCard } from './project-card'
import { DynamicProjects } from './dynamic-projects'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

function GroupHeading({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <Reveal className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
      <h3 className="font-display text-2xl font-bold tracking-tight text-foreground">
        {title}
      </h3>
      <span className="hidden h-px flex-1 bg-border sm:block" />
      <p className="text-sm text-muted-foreground">{subtitle}</p>
    </Reveal>
  )
}

export function Projects() {
  return (
    <section id="projects" className="px-4 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Selected Work"
          title="Projects that run in production"
          description="Booking engines, B2B portals, AI assistants and custom WordPress builds — each one live, or running quietly behind the scenes."
        />

        <div className="mt-14">
          <GroupHeading
            title="Django & Full-Stack Applications"
            subtitle="Production backends, APIs & platforms"
          />
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {fullStackProjects.map((project, i) => (
              <ProjectCard key={project.id} project={project} delay={i * 0.04} />
            ))}
          </div>
        </div>

        <div className="mt-20">
          <GroupHeading
            title="WordPress — Custom Themes & Sites"
            subtitle="Hand-built themes, no page-builder bloat"
          />
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {wordpressProjects.map((project, i) => (
              <ProjectCard key={project.id} project={project} delay={i * 0.04} />
            ))}
          </div>
        </div>

        {/* Projects added at runtime through /admin */}
        <DynamicProjects />
      </div>
    </section>
  )
}
