export type SkillCategory = {
  id: string
  title: string
  description: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'ai',
    title: 'AI Automation & Integration',
    description: 'LLM integration, voice AI and workflow automation in production.',
    skills: [
      'LLM APIs',
      'Voice AI (ElevenLabs)',
      'n8n Workflows',
      'Claude / ChatGPT',
      'MCP / Tool-Calling',
      'RAG-ready Systems',
    ],
  },
  {
    id: 'backend',
    title: 'Backend & API',
    description: 'Scalable services, relational data modeling and REST APIs.',
    skills: [
      'Python',
      'Django',
      'Django REST Framework',
      'REST API Design',
      'PostgreSQL',
      'Redis',
      'Celery',
      'Flask',
      'Payment Gateways',
    ],
  },
  {
    id: 'cloud',
    title: 'Cloud & Infrastructure',
    description: 'Self-hosted and cloud infrastructure I run day to day.',
    skills: [
      'Proxmox',
      'Docker',
      'AWS (EC2 / S3)',
      'Google Cloud',
      'Linux Admin',
      'Reverse Proxy / SSL',
    ],
  },
  {
    id: 'cicd',
    title: 'CI/CD & Code Quality',
    description: 'Automated pipelines, quality gates and artifact management.',
    skills: [
      'Jenkins',
      'SonarQube',
      'Nexus Registry',
      'Git / GitHub',
      'CI/CD Pipelines',
    ],
  },
  {
    id: 'frontend',
    title: 'Full-Stack & Frontend',
    description: 'Fast, modern interfaces on top of the systems I build.',
    skills: ['Next.js', 'React', 'JavaScript', 'HTML / CSS', 'ntfy (Push)'],
  },
]
