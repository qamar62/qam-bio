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
    position: 'Lead Software Engineer — Python / Django, Cloud & AI Automation',
    period: 'Mar 2025 — Present',
    location: 'Dubai, UAE',
    summary:
      'Designing, building and running Five Vertex Tourism\'s technology platforms end to end — from database design and REST APIs to cloud infrastructure and AI integrations.',
    achievements: [
      'Architected and built four production platforms on one shared stack — B2C booking website (five.tours), B2B travel-agent portal, financial management application and a Flutter mobile app',
      'Designed the B2B/B2C booking engine and REST APIs for tours, activities, tickets, transfers, availability, pricing, customers and bookings, with scope-based API-key authentication',
      'Built the financial and business management system — transactions, revenue reporting, booking analytics and management dashboards',
      'Developed an AI Trip Designer using Claude tool-calling over live PostgreSQL inventory, streamed via Server-Sent Events from Django with Redis session state',
      'Built Fiva, a live multilingual voice assistant (voice.five.tours) using Pipecat, faster-whisper, the Claude API and Kokoro TTS',
      'Created a custom MCP server (Django/DRF) exposing booking, customer and analytics APIs as secure AI tools',
      'Automated lead handling, notifications and CRM workflows with n8n and API integrations',
      'Ran cloud and DevOps — Proxmox, Docker, Cloudflare Tunnel, MinIO, GlitchTip, Jenkins CI/CD, SonarQube, plus AWS and Google Cloud',
    ],
    tech: ['Django', 'DRF', 'PostgreSQL', 'Redis', 'Celery', 'Next.js', 'Flutter', 'Claude API', 'n8n', 'Docker', 'Proxmox'],
  },
  {
    id: 'exp-arabian-nights-dev',
    company: 'Arabian Nights Tours',
    position: 'Backend Developer — Python / Django',
    period: '2020 — Mar 2025',
    location: 'Dubai, UAE',
    summary:
      'Built and maintained the business-critical backend services behind booking engines, reporting, operations and customer-facing processes.',
    achievements: [
      'Integrated AI chatbot and LLM-based automation into booking and customer-support workflows',
      'Built backend services with Python, Django and REST APIs for booking engines, reporting and operations',
      'Designed relational data models in PostgreSQL, with Redis and Celery for caching and asynchronous tasks',
      'Developed travel systems, booking engines, internal dashboards and operational management platforms',
      'Deployed and operated production applications on AWS (EC2, S3) and Google Cloud VM, later moving core workloads to self-hosted Proxmox',
      'Integrated payment gateways and third-party APIs',
    ],
    tech: ['Python', 'Django', 'DRF', 'PostgreSQL', 'Redis', 'Celery', 'AWS', 'Google Cloud'],
  },
  {
    id: 'exp-arabian-nights-web',
    company: 'Arabian Nights Tours',
    position: 'Web & Digital Marketing Executive',
    period: '2012 — 2019',
    location: 'Dubai, UAE',
    summary:
      'Ran the company\'s websites and digital marketing — the foundation for moving into backend development from 2020.',
    achievements: [
      'Managed WordPress and Shopify websites — themes, plugins, tour and package uploads, content and on-page SEO',
      'Ran digital marketing campaigns across Google Ads, Facebook and Instagram, with tracking via Google Analytics and Tag Manager',
      'Handled web hosting, domains, SSL and website maintenance alongside the operations team',
    ],
    tech: ['WordPress', 'Shopify', 'SEO / SEM', 'Google Ads', 'Meta Ads', 'Google Analytics'],
  },
  {
    id: 'exp-al-nasir',
    company: 'Al Nasir Travel',
    position: 'Web & Online Operations Executive',
    period: '2008 — 2012',
    location: 'Pakistan',
    summary:
      'Supported online business operations through website management, digital systems setup and service promotion.',
    achievements: [
      'Improved online visibility and the technical structure of business websites',
      'Managed web updates, content publishing and online customer acquisition support',
    ],
    tech: ['HTML / CSS', 'WordPress', 'cPanel'],
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
    id: 'edu-emba',
    institution: 'National Institute of Business Management',
    qualification: 'Executive MBA — Hospitality & Tourism',
    period: '2017 — 2018',
  },
  {
    id: 'edu-bba',
    institution: 'Virtual University',
    qualification: 'Bachelor of Business Administration (BBA)',
    period: '2009 — 2012',
  },
  {
    id: 'edu-ics',
    institution: 'Government College',
    qualification: 'ICS — Intermediate in Computer Science',
    period: '2008',
  },
]
