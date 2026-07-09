import React from 'react'
import { FaServer, FaRobot, FaCloud, FaCodeBranch, FaLaptopCode } from 'react-icons/fa'

const groups = [
  {
    label: 'Backend & API',
    icon: <FaServer />,
    items: [
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
    label: 'AI Automation & Integration',
    icon: <FaRobot />,
    items: [
      'LLM APIs',
      'Voice AI (ElevenLabs)',
      'n8n Workflows',
      'Claude / ChatGPT',
      'MCP / Tool-Calling',
      'RAG-ready Systems',
    ],
  },
  {
    label: 'Cloud & Infrastructure',
    icon: <FaCloud />,
    items: [
      'Proxmox',
      'Docker',
      'AWS (EC2 / S3)',
      'Google Cloud',
      'Linux Admin',
      'Reverse Proxy / SSL',
    ],
  },
  {
    label: 'CI/CD & Code Quality',
    icon: <FaCodeBranch />,
    items: ['Jenkins', 'SonarQube', 'Nexus Registry', 'Git / GitHub', 'CI/CD Pipelines'],
  },
  {
    label: 'Full-Stack & Frontend',
    icon: <FaLaptopCode />,
    items: ['Next.js', 'React', 'JavaScript', 'HTML / CSS', 'ntfy (Push)'],
  },
]

const Skills = () => {
  return (
    <div name="skills" className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {groups.map((group, index) => (
          <div
            key={index}
            className="p-6 transition-all duration-300 hover:-translate-y-1"
            style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: '16px',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--gold)')}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
          >
            <div className="flex items-center gap-3 mb-4">
              <span
                className="flex h-9 w-9 items-center justify-center text-lg"
                style={{
                  background: 'var(--gold-dim)',
                  color: 'var(--gold)',
                  borderRadius: '10px',
                }}
              >
                {group.icon}
              </span>
              <h3
                className="text-base font-bold"
                style={{ fontFamily: "'Syne', sans-serif", color: 'var(--text)' }}
              >
                {group.label}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 text-xs transition-colors duration-200"
                  style={{
                    color: 'var(--text-dim)',
                    border: '1px solid var(--border)',
                    borderRadius: '8px',
                    fontFamily: "'DM Mono', monospace",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--gold)'
                    e.currentTarget.style.background = 'var(--gold-dim)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--text-dim)'
                    e.currentTarget.style.background = 'transparent'
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills
