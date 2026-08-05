import React, { useEffect, useState } from 'react'
import {
  FaPlane,
  FaGlobe,
  FaDumbbell,
  FaUtensils,
  FaBuilding,
  FaMicrophoneAlt,
  FaExternalLinkAlt,
  FaLock,
  FaWordpress,
  FaCouch,
  FaWrench,
  FaHome,
  FaCut,
  FaServer,
} from 'react-icons/fa'

const PLACEHOLDER = '/placeholder.svg'

const djangoProjects = [
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

const wordpressProjects = [
  {
    title: 'Home Interiors — Carpets, Sofas & Beds',
    category: 'Custom Theme',
    description:
      'Custom-built WordPress theme for a home furnishing brand — carpets, sofas and beds — with a bespoke catalogue layout and enquiry flow.',
    tech: ['WordPress', 'Custom Theme', 'PHP', 'Responsive'],
    icon: <FaCouch />,
    accent: ['#21759B', '#0F4C63'],
    link: 'https://home.qaam.work',
    linkLabel: 'Visit site',
  },
  {
    title: 'Plumbing & Electrical Services',
    category: 'Custom Theme',
    description:
      'Custom WordPress theme for an electrician & plumbing services company — service pages, booking call-to-actions and local SEO structure.',
    tech: ['WordPress', 'Custom Theme', 'PHP', 'SEO'],
    icon: <FaWrench />,
    accent: ['#48BB78', '#22683F'],
    link: 'https://plumber.qaam.work',
    linkLabel: 'Visit site',
  },
  {
    title: 'Real Estate & Property Listings',
    category: 'Custom Theme',
    description:
      'Property listings WordPress site with search, filtering and agent profiles — custom theme and template design.',
    tech: ['WordPress', 'Custom Theme', 'Elementor'],
    icon: <FaHome />,
    accent: ['#4299E1', '#2A4E7C'],
    link: 'https://realestate.qaam.work',
    linkLabel: 'Visit site',
  },
  {
    title: 'Restaurant & Cafe',
    category: 'Custom Theme',
    description:
      'Restaurant WordPress theme with menu, reservations and gallery — mobile-first design and fast page loads.',
    tech: ['WordPress', 'Custom Theme', 'WooCommerce'],
    icon: <FaUtensils />,
    accent: ['#ED8936', '#9C4221'],
    link: 'https://dine.qaam.work',
    linkLabel: 'Visit site',
  },
  {
    title: 'Beauty & Salon',
    category: 'Custom Theme',
    description:
      'Salon & spa WordPress site with service listings, online booking and a styled gallery — custom theme build.',
    tech: ['WordPress', 'Custom Theme', 'Booking'],
    icon: <FaCut />,
    accent: ['#ED64A6', '#8B2C63'],
    link: 'https://salon.qaam.work',
    linkLabel: 'Visit site',
  },
]

const ProjectCard = ({ project }) => {
  const hasLink = Boolean(project.link)
  return (
    <div
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
      {/* Image or icon / accent band */}
      <div
        className="relative h-28 flex items-center justify-center overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${project.accent[0]}22 0%, ${project.accent[1]}11 100%)`,
        }}
      >
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            onError={(e) => { e.currentTarget.src = PLACEHOLDER }}
          />
        ) : (
          <>
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
          </>
        )}
        {project.category && (
          <span
            className="absolute top-3 left-4 text-[11px] tracking-widest uppercase px-2 py-0.5 rounded"
            style={{
              color: project.accent[0],
              background: project.image ? 'rgba(10,15,20,0.7)' : 'transparent',
              fontFamily: "'DM Mono', monospace",
              letterSpacing: '0.12em',
            }}
          >
            {project.category}
          </span>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6">
        <h3
          className="text-lg font-bold mb-2"
          style={{ fontFamily: "'Syne', sans-serif", color: 'var(--text)' }}
        >
          {project.title}
        </h3>
        <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: 'var(--text-dim)' }}>
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
}

const GroupHeader = ({ icon, title, subtitle }) => (
  <div className="flex items-center gap-3 mb-6">
    <span
      className="flex h-10 w-10 items-center justify-center text-xl"
      style={{ background: 'var(--gold-dim)', color: 'var(--gold)', borderRadius: '12px' }}
    >
      {icon}
    </span>
    <div>
      <h3
        className="text-xl font-bold leading-tight"
        style={{ fontFamily: "'Syne', sans-serif", color: 'var(--text)' }}
      >
        {title}
      </h3>
      <p className="text-xs" style={{ color: 'var(--text-dim)', fontFamily: "'DM Mono', monospace" }}>
        {subtitle}
      </p>
    </div>
  </div>
)

// Normalize an admin-added project into the shape ProjectCard expects
const normalizeDynamic = (p) => {
  const isWp = p.type === 'wordpress'
  const accent = isWp ? ['#21759B', '#0F4C63'] : ['#F5C518', '#E08A00']
  const tech = Array.isArray(p.tech) ? p.tech : String(p.tech || '').split(',').map((t) => t.trim()).filter(Boolean)
  return {
    title: p.title,
    category: p.category || (isWp ? 'WordPress' : 'Project'),
    description: p.description || '',
    tech,
    image: p.image || '',
    icon: isWp ? <FaWordpress /> : <FaServer />,
    accent,
    link: p.url || '',
    linkLabel: p.url ? 'Visit site' : 'Coming soon',
  }
}

const Projects = () => {
  const [dynamic, setDynamic] = useState([])

  useEffect(() => {
    let active = true
    fetch('/api/projects', { cache: 'no-store' })
      .then((r) => (r.ok ? r.json() : []))
      .then((data) => {
        if (active && Array.isArray(data)) setDynamic(data)
      })
      .catch(() => {})
    return () => { active = false }
  }, [])

  const dynDjango = dynamic.filter((p) => p.type !== 'wordpress').map(normalizeDynamic)
  const dynWordpress = dynamic.filter((p) => p.type === 'wordpress').map(normalizeDynamic)

  const djangoAll = [...djangoProjects, ...dynDjango]
  const wordpressAll = [...wordpressProjects, ...dynWordpress]

  return (
    <div name="projects" className="w-full space-y-16">
      {/* Django / Full-Stack */}
      <div>
        <GroupHeader
          icon={<FaServer />}
          title="Django & Full-Stack Applications"
          subtitle="Production backends, APIs & platforms"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {djangoAll.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>

      {/* WordPress */}
      <div>
        <GroupHeader
          icon={<FaWordpress />}
          title="WordPress — Custom Themes & Sites"
          subtitle="Hand-built themes, no page-builder bloat"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {wordpressAll.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
