import type { Project } from '@/data/projects'

/** Shape persisted by /api/projects (Vercel Blob). */
export type StoredProject = {
  id: string
  title: string
  url: string
  description: string
  type: 'django' | 'wordpress'
  category: string
  tech: string[]
  image: string
  createdAt: string
}

const ACCENTS: Record<StoredProject['type'], [string, string]> = {
  django: ['#F5C518', '#E08A00'],
  wordpress: ['#21759B', '#0F4C63'],
}

/** Turn an admin-added project into the shape ProjectCard renders. */
export function normalizeStoredProject(p: StoredProject): Project {
  const isWordpress = p.type === 'wordpress'
  const tech = Array.isArray(p.tech)
    ? p.tech
    : String(p.tech ?? '')
        .split(',')
        .map((t) => t.trim())
        .filter(Boolean)

  return {
    id: p.id,
    name: p.title,
    category: p.category || (isWordpress ? 'WordPress' : 'Project'),
    description: p.description || '',
    tech,
    icon: isWordpress ? 'Layers' : 'Server',
    accent: ACCENTS[isWordpress ? 'wordpress' : 'django'],
    group: isWordpress ? 'wordpress' : 'fullstack',
    liveUrl: p.url || undefined,
    privateLabel: p.url ? undefined : 'Coming soon',
  }
}
