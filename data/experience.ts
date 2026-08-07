export type Experience = {
  id: string
  company: string
  position: string
  period: string
  location: string
  summary: string
  achievements: string[]
  tech: string[]
}

// Sourced from the live V1 portfolio (career highlights + timeline).
// Where V1 did not name an employer, a neutral label is used — edit freely.
export const experiences: Experience[] = [
  {
    id: 'exp-five-vertex',
    company: 'Five Vertex Tourism',
    position: 'Backend Engineer — AI Automation & DevOps',
    period: '2025 — Present',
    location: 'Dubai, UAE',
    summary:
      'Building and operating the production backend behind the Five Tours booking platform, the B2B agent portal and the Five Motion Sports commerce platform — plus the AI automation layer that sits on top of them.',
    achievements: [
      'Built a full travel reservation engine with payment gateway integration, CRM and operations dashboards',
      'Shipped a multilingual AI voice assistant (ElevenLabs + LLM APIs) wired directly into booking logic',
      'Automated internal operations with n8n workflows and Claude / ChatGPT tool-calling',
      'Runs self-hosted infrastructure on Proxmox and Docker with CI/CD via Jenkins, SonarQube and Nexus',
    ],
    tech: ['Django', 'DRF', 'PostgreSQL', 'Redis', 'Celery', 'n8n', 'Proxmox', 'Docker'],
  },
  {
    id: 'exp-arabian-nights',
    company: 'Arabian Nights Tours',
    position: 'Senior Web Developer & Digital Marketing',
    period: '2017 — 2024',
    location: 'Dubai, UAE',
    summary:
      'Led web development and digital marketing for a tourism operator, delivering customer-facing booking experiences alongside the backend systems and integrations behind them.',
    achievements: [
      'Delivered responsive booking and content platforms end to end',
      'Integrated third-party travel, payment and Google APIs',
      'Introduced CI/CD pipelines and raised overall code quality standards',
      'Owned SEO and digital marketing performance alongside engineering',
    ],
    tech: ['Python', 'Django', 'React', 'PostgreSQL', 'WordPress', 'Google APIs'],
  },
  {
    id: 'exp-it-ops',
    company: 'Multi-Organisation IT Operations', // TODO: replace with the real employer name
    position: 'Backend Developer / Technical Ops Engineer',
    period: '2012 — 2016',
    location: 'Pakistan',
    summary:
      'Ran IT operations and web development across multiple organisations — from infrastructure and support through to building the internal tools each team depended on.',
    achievements: [
      'Managed IT solutions and web development for multiple organisations in parallel',
      'Designed relational data models and built secure authentication flows',
      'Administered Linux servers, reverse proxies and SSL',
    ],
    tech: ['Python', 'Django', 'PHP', 'MySQL', 'Linux', 'Git'],
  },
  {
    id: 'exp-web-ops',
    company: 'Web & Online Operations', // TODO: replace with the real employer name
    position: 'Web & Online Operations Executive',
    period: '2008 — 2012',
    location: 'Pakistan',
    summary:
      'Started out running online operations and building websites — the foundation for a decade of backend and infrastructure work.',
    achievements: [
      'Built and maintained business websites and landing pages',
      'Handled day-to-day online operations, content and hosting',
      'Established Git-based workflows for site delivery',
    ],
    tech: ['HTML / CSS', 'JavaScript', 'PHP', 'WordPress', 'cPanel'],
  },
]

export type Education = {
  id: string
  institution: string
  qualification: string
  period: string
}

export const education: Education[] = [
  {
    id: 'edu-bba',
    institution: 'Virtual University',
    qualification: 'Bachelor in Business',
    period: '2013',
  },
  {
    id: 'edu-ics',
    institution: 'Government College',
    qualification: 'ICS — Intermediate in Computer Science',
    period: '2008',
  },
]
