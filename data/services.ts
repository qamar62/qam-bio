export type Service = {
  id: string
  title: string
  description: string
  icon: string
}

export const services: Service[] = [
  {
    id: 'backend',
    title: 'Backend & APIs',
    description:
      'Django and DRF backends, REST API design, data modeling, authentication and payment gateways.',
    icon: 'Server',
  },
  {
    id: 'ai-apps',
    title: 'AI Applications',
    description:
      'LLM integrations, voice assistants and tool-calling agents wired into your existing systems.',
    icon: 'Sparkles',
  },
  {
    id: 'fullstack',
    title: 'Full-Stack Applications',
    description:
      'Scalable web applications built with Django, Next.js and React — designed, built and deployed end to end.',
    icon: 'Layers',
  },
  {
    id: 'automation',
    title: 'AI Automation',
    description:
      'Automated workflows, AI agents and business process automation using n8n and APIs.',
    icon: 'Workflow',
  },
  {
    id: 'infra',
    title: 'DevOps & Self-Hosting',
    description:
      'Proxmox, Docker, reverse proxies and CI/CD pipelines — infrastructure you actually own.',
    icon: 'Server',
  },
  {
    id: 'platforms',
    title: 'Business Platforms',
    description:
      'Booking engines, B2B portals, dashboards and management systems for real operations.',
    icon: 'LayoutDashboard',
  },
  {
    id: 'wordpress',
    title: 'Custom WordPress',
    description:
      'Hand-built themes with no page-builder bloat — fast, SEO-ready and easy to maintain.',
    icon: 'Layout',
  },
]

export type ProcessStep = {
  number: string
  title: string
  description: string
}

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Discover',
    description:
      'Understand the problem, users, and constraints before writing a line of code.',
  },
  {
    number: '02',
    title: 'Architect',
    description:
      'Design the data model, API surface, and AI layer for scale and clarity.',
  },
  {
    number: '03',
    title: 'Build',
    description:
      'Ship clean, tested full-stack code with a fast, accessible interface.',
  },
  {
    number: '04',
    title: 'Automate',
    description:
      'Wire in AI agents, workflows, and integrations that remove manual work.',
  },
  {
    number: '05',
    title: 'Deploy',
    description:
      'Containerize, monitor, and roll out reliably with CI/CD and observability.',
  },
]
