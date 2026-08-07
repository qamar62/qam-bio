import { CheckCircle2, Code2, MapPin } from 'lucide-react'
import { careerHighlights, metrics, profile } from '@/data/profile'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

const focuses = [
  'Backend architecture & REST API design',
  'AI automation, LLM & voice integration',
  'Self-hosted infrastructure & CI/CD',
]

export function About() {
  return (
    <section id="about" className="px-4 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="About"
          title="A decade of shipping production backends"
          description="I build the systems businesses actually run on — then wire AI into them so the manual work goes away."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal className="clay flex flex-col justify-between rounded-3xl p-8 lg:p-10">
            <div>
              <p className="text-lg leading-relaxed text-foreground text-pretty">
                {profile.intro}
              </p>
              <p className="mt-5 leading-relaxed text-muted-foreground text-pretty">
                {profile.introSecondary}
              </p>
            </div>

            <ul className="mt-8 flex flex-col gap-3">
              {focuses.map((focus) => (
                <li
                  key={focus}
                  className="flex items-center gap-3 text-foreground"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                  <span className="font-medium">{focus}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary" />
              {profile.location}
            </div>
          </Reveal>

          <Reveal delay={0.1} className="clay-sage rounded-3xl p-8 lg:p-10">
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sage-foreground/10 text-sage-foreground">
                <Code2 className="h-6 w-6" />
              </span>
              <div>
                <p className="font-display text-lg font-bold text-sage-foreground">
                  Developer Profile
                </p>
                <p className="text-sm text-sage-foreground/70">
                  {profile.title}
                </p>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-2xl bg-background/35 p-5 text-center backdrop-blur-sm"
                >
                  <p className="font-display text-3xl font-bold text-sage-foreground">
                    {metric.value}
                  </p>
                  <p className="mt-1 text-xs font-medium text-sage-foreground/75">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 border-t border-sage-foreground/15 pt-6">
              <p className="text-sm font-semibold text-sage-foreground">
                Career Highlights
              </p>
              <ul className="mt-4 flex flex-col gap-3">
                {careerHighlights.map((item) => (
                  <li key={item.year} className="flex items-center gap-4">
                    <span className="font-display text-lg font-bold text-sage-foreground">
                      {item.year}
                    </span>
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-sage-foreground/50" />
                    <span className="text-sm text-sage-foreground/80">
                      {item.role}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
