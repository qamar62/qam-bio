import { Briefcase, GraduationCap, MapPin } from 'lucide-react'
import { education, experiences } from '@/data/experience'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

export function Experience() {
  return (
    <section id="experience" className="px-4 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Experience"
          title="A track record of shipping"
          description="Roles and engagements where I delivered full-stack products, backend systems, and AI automation."
        />

        <div className="relative mt-14 pl-6 sm:pl-8">
          {/* Timeline line */}
          <span
            aria-hidden
            className="absolute left-0 top-2 bottom-2 w-px bg-border sm:left-1"
          />

          <div className="flex flex-col gap-8">
            {experiences.map((exp, index) => (
              <Reveal
                key={exp.id}
                delay={index * 0.05}
                className="relative"
                as="article"
              >
                {/* Node */}
                <span
                  aria-hidden
                  className="clay-sage absolute -left-6 top-6 flex h-6 w-6 items-center justify-center rounded-full sm:-left-8"
                >
                  <span className="h-2 w-2 rounded-full bg-sage-foreground" />
                </span>

                <div className="clay rounded-3xl p-7 lg:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                        <Briefcase className="h-5 w-5" />
                      </span>
                      <div>
                        <h3 className="font-display text-xl font-bold text-foreground">
                          {exp.position}
                        </h3>
                        <p className="text-sm font-medium text-primary">
                          {exp.company}
                        </p>
                      </div>
                    </div>
                    <div className="text-right text-sm text-muted-foreground">
                      <p className="clay-inset rounded-full px-3 py-1 font-medium">
                        {exp.period}
                      </p>
                      <p className="mt-2 flex items-center justify-end gap-1">
                        <MapPin className="h-3.5 w-3.5" />
                        {exp.location}
                      </p>
                    </div>
                  </div>

                  <p className="mt-5 leading-relaxed text-muted-foreground text-pretty">
                    {exp.summary}
                  </p>

                  <ul className="mt-4 flex flex-col gap-2">
                    {exp.achievements.map((a) => (
                      <li
                        key={a}
                        className="flex gap-2.5 text-sm text-foreground"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        {a}
                      </li>
                    ))}
                  </ul>

                  <ul className="mt-5 flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <li
                        key={t}
                        className="clay-inset rounded-full px-3 py-1 text-xs font-medium text-foreground"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <Reveal className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
            <h3 className="font-display text-2xl font-bold tracking-tight text-foreground">
              Education
            </h3>
            <span className="hidden h-px flex-1 bg-border sm:block" />
          </Reveal>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {education.map((item, index) => (
              <Reveal
                key={item.id}
                delay={index * 0.05}
                className="clay flex items-center gap-4 rounded-3xl p-7"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <GraduationCap className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-display text-lg font-bold text-foreground">
                    {item.qualification}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {item.institution} · {item.period}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
