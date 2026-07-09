import React from 'react'
import {
  FaPlane,
  FaGlobe,
  FaDumbbell,
  FaUtensils,
  FaBuilding,
  FaMicrophoneAlt,
  FaExternalLinkAlt,
  FaLock,
} from 'react-icons/fa'

const projects = [
  {
    title: 'Five Tours — Booking Platform',
    category: 'Travel · Flagship',
    description:
      'End-to-end travel booking platform with a complete reservation engine, payment gateway integration, CRM and operations dashboards.',
    tech: ['Django', 'DRF', 'PostgreSQL', 'Redis', 'Celery', 'Next.js'],
    icon: <FaPlane />,
    accent: ['#F5C518', '#E08A00'],
    link: 'https://five.tours',
    linkLabel: 'Visit site',
  },
  {
    title: 'Five Tours B2B Portal',
    category: 'B2B Travel',
    description:
      'B2B travel portal with agent and admin dashboards, real-time inventory, quote generation and role-based access.',
    tech: ['Django', 'DRF', 'PostgreSQL', 'Redis'],
    icon: <FaGlobe />,
    accent: ['#4FD1C5', '#2C7A7B'],
    link: 'https://b2b.five.tours',
    linkLabel: 'Visit site',
  },
  {
    title: 'Five Motion Sports',
    category: 'B2B Commerce',
    description:
      'Sports supply and B2B commerce platform covering product catalogue, MOQ / lead-time management and OEM workflows.',
    tech: ['Django', 'DRF', 'PostgreSQL', 'Celery', 'ntfy'],
    icon: <FaDumbbell />,
    accent: ['#63B3ED', '#2B6CB0'],
    link: 'https://fmsportz.com',
    linkLabel: 'Visit site',
  },
  {
    title: 'Khanz Restaurant',
    category: 'Restaurant',
    description:
      'Restaurant platform with menu management, online ordering and an operations backend built on Django.',
    tech: ['Django', 'PostgreSQL', 'REST API'],
    icon: <FaUtensils />,
    accent: ['#F6AD55', '#C05621'],
    link: 'https://khanz.qaam.work',
    linkLabel: 'Visit site',
  },
  {
    title: 'Property Management Software',
    category: 'PropTech · Private',
    description:
      'Property & contract management system handling ~1,500 units — tenancy contracts, renewals, billing and reporting workflows.',
    tech: ['Django', 'DRF', 'PostgreSQL', 'Redis', 'Celery'],
    icon: <FaBuilding />,
    accent: ['#B794F4', '#6B46C1'],
    link: '',
    linkLabel: 'Private',
  },
  {
    title: 'Multilingual AI Voice Assistant',
    category: 'AI · Self-Hosted',
    description:
      'Real-time, multilingual conversational voice bot for booking and support — ElevenLabs TTS + LLM APIs wired to backend booking logic on self-hosted infrastructure.',
    tech: ['Python', 'LLM APIs', 'ElevenLabs', 'DRF', 'Proxmox'],
    icon: <FaMicrophoneAlt />,
    accent: ['#F687B3', '#B83280'],
    link: '',
    linkLabel: 'Internal',
  },
]

const Projects = () => {
  return (
    <div name="projects" className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => {
          const hasLink = Boolean(project.link)
          return (
            <div
              key={index}
              className="group relative flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1.5"
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: '18px',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 18px 40px -18px ${project.accent[0]}55`
                e.currentTarget.style.borderColor = project.accent[0]
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none'
                e.currentTarget.style.borderColor = 'var(--border)'
              }}
            >
              {/* Icon / accent band */}
              <div
                className="relative h-28 flex items-center justify-center overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${project.accent[0]}22 0%, ${project.accent[1]}11 100%)`,
                }}
              >
                <div
                  className="absolute inset-0 opacity-40"
                  style={{
                    backgroundImage:
                      'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.06) 0, transparent 40%)',
                  }}
                />
                <div
                  className="text-4xl transition-transform duration-300 group-hover:scale-110"
                  style={{ color: project.accent[0] }}
                >
                  {project.icon}
                </div>
                <span
                  className="absolute top-3 left-4 text-[11px] tracking-widest uppercase"
                  style={{
                    color: project.accent[0],
                    fontFamily: "'DM Mono', monospace",
                    letterSpacing: '0.12em',
                  }}
                >
                  {project.category}
                </span>
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col p-6">
                <h3
                  className="text-lg font-bold mb-2"
                  style={{ fontFamily: "'Syne', sans-serif", color: 'var(--text)' }}
                >
                  {project.title}
                </h3>
                <p
                  className="text-sm leading-relaxed mb-4 flex-1"
                  style={{ color: 'var(--text-dim)' }}
                >
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 text-[11px]"
                      style={{
                        background: 'var(--gold-dim)',
                        color: 'var(--gold)',
                        border: '1px solid var(--border)',
                        borderRadius: '6px',
                        fontFamily: "'DM Mono', monospace",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Link */}
                {hasLink ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300 self-start"
                    style={{ color: project.accent[0], fontFamily: "'DM Mono', monospace" }}
                  >
                    {project.linkLabel}
                    <FaExternalLinkAlt className="text-xs transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                ) : (
                  <span
                    className="inline-flex items-center gap-2 text-sm self-start"
                    style={{ color: 'var(--text-dim)', fontFamily: "'DM Mono', monospace" }}
                  >
                    <FaLock className="text-xs" />
                    {project.linkLabel}
                  </span>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Projects
