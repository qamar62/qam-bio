'use client'

import { useState, type FormEvent } from 'react'
import { AlertCircle, CheckCircle2, Loader2, Mail, Send } from 'lucide-react'
import { Github, Linkedin } from './brand-icons'
import { profile } from '@/data/profile'
import { Reveal } from './reveal'

const projectTypes = [
  'Backend / API',
  'AI Automation',
  'Full-Stack App',
  'WordPress Site',
  'DevOps / Infrastructure',
  'Other',
]

/** n8n workflow that fans the submission out to email + notifications. */
const CONTACT_WEBHOOK =
  'https://wflow.qaam.work/webhook/deb1ee16-9d1e-43c1-b1fb-e0096a493218'

type Status = 'idle' | 'sending' | 'success' | 'error'

export function Contact() {
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const name = String(data.get('name') ?? '').trim()
    const email = String(data.get('email') ?? '').trim()
    const message = String(data.get('message') ?? '').trim()
    const type = String(data.get('type') ?? '').trim()

    if (!name || !email || !message) {
      setStatus('error')
      setError('Please fill in your name, email and message.')
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('error')
      setError('Please enter a valid email address.')
      return
    }

    try {
      setStatus('sending')
      setError('')
      const res = await fetch(CONTACT_WEBHOOK, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          subject: type || 'Portfolio contact',
          message,
          source: 'qaam.work portfolio',
          submittedAt: new Date().toISOString(),
        }),
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      setStatus('success')
    } catch {
      setStatus('error')
      setError(
        `Could not send right now. Please try again or email ${profile.email}.`,
      )
    }
  }

  const sending = status === 'sending'

  return (
    <section id="contact" className="px-4 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="clay-sage rounded-[2.5rem] p-8 sm:p-12 lg:p-16">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
            <div>
              <h2 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-balance text-sage-foreground sm:text-5xl">
                Have an idea? Let&apos;s build something that ships.
              </h2>
              <p className="mt-5 max-w-md leading-relaxed text-sage-foreground/80 text-pretty">
                Whether it&apos;s a Django backend, an AI automation that removes
                manual work, a REST API, or infrastructure you actually own —
                tell me what you&apos;re trying to build.
              </p>

              <div className="mt-8 flex flex-col gap-3">
                {[
                  { icon: Mail, label: profile.email, href: profile.social.email },
                  { icon: Linkedin, label: 'LinkedIn', href: profile.social.linkedin },
                  { icon: Github, label: 'GitHub', href: profile.social.github },
                ].map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                    className="flex w-fit items-center gap-3 rounded-2xl bg-background/30 px-4 py-3 font-medium text-sage-foreground transition-transform hover:-translate-y-0.5"
                  >
                    <Icon className="h-5 w-5" />
                    {label}
                  </a>
                ))}
              </div>
            </div>

            <div className="clay rounded-3xl p-6 sm:p-8">
              {status === 'success' ? (
                <div className="flex h-full flex-col items-center justify-center py-12 text-center">
                  <CheckCircle2 className="h-14 w-14 text-primary" />
                  <p className="mt-4 font-display text-2xl font-bold text-foreground">
                    Message sent
                  </p>
                  <p className="mt-2 text-muted-foreground text-pretty">
                    Thanks for reaching out — I&apos;ll get back to you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="clay-sm mt-6 rounded-full px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:text-primary"
                  >
                    Send another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Name" htmlFor="name">
                      <input
                        id="name"
                        name="name"
                        required
                        autoComplete="name"
                        className="clay-inset w-full rounded-xl bg-transparent px-4 py-3 text-foreground outline-none placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
                        placeholder="Your name"
                      />
                    </Field>
                    <Field label="Email" htmlFor="email">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        className="clay-inset w-full rounded-xl bg-transparent px-4 py-3 text-foreground outline-none placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
                        placeholder="you@email.com"
                      />
                    </Field>
                  </div>

                  <Field label="Project type" htmlFor="type">
                    <select
                      id="type"
                      name="type"
                      className="clay-inset w-full rounded-xl bg-transparent px-4 py-3 text-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      defaultValue={projectTypes[0]}
                    >
                      {projectTypes.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </Field>

                  <Field label="Message" htmlFor="message">
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      className="clay-inset w-full resize-none rounded-xl bg-transparent px-4 py-3 text-foreground outline-none placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
                      placeholder="Tell me about your project..."
                    />
                  </Field>

                  {status === 'error' && error && (
                    <p
                      role="alert"
                      className="flex items-start gap-2 text-sm font-medium text-destructive"
                    >
                      <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={sending}
                    className="clay-sage mt-2 inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 font-semibold text-sage-foreground clay-hover disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {sending ? 'Sending…' : 'Send Message'}
                    {sending ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <Send className="h-4 w-4" />
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string
  htmlFor: string
  children: React.ReactNode
}) {
  return (
    <label htmlFor={htmlFor} className="flex flex-col gap-2">
      <span className="text-sm font-semibold text-foreground">{label}</span>
      {children}
    </label>
  )
}
