export type ProjectGroup = 'fullstack' | 'wordpress'

export type Project = {
  id: string
  name: string
  category: string
  description: string
  tech: string[]
  /** Lucide icon name — resolved in components/projects.tsx */
  icon: string
  /** [from, to] hex pair used for the icon tile gradient */
  accent: [string, string]
  group: ProjectGroup
  /** Empty when the project is private or internal */
  liveUrl?: string
  /** Shown instead of a link when there is no public URL */
  privateLabel?: string
  featured?: boolean
}

export const projects: Project[] = [
  // ── Django / Full-Stack ────────────────────────────────────────────────
  {
    id: 'five-tours',
    name: 'Five Tours — Booking Platform',
    category: 'Travel · Flagship',
    description:
      'End-to-end travel booking platform with a complete reservation engine, payment gateway integration, CRM and operations dashboards.',
    tech: ['Django', 'DRF', 'PostgreSQL', 'Redis', 'Celery', 'Next.js'],
    icon: 'Plane',
    accent: ['#F5C518', '#E08A00'],
    group: 'fullstack',
    liveUrl: 'https://five.tours',
    featured: true,
  },
  {
    id: 'five-tours-b2b',
    name: 'Five Tours B2B Portal',
    category: 'B2B Travel',
    description:
      'B2B travel portal with agent and admin dashboards, real-time inventory, quote generation and role-based access.',
    tech: ['Django', 'DRF', 'PostgreSQL', 'Redis'],
    icon: 'Globe',
    accent: ['#4FD1C5', '#2C7A7B'],
    group: 'fullstack',
    liveUrl: 'https://b2b.five.tours',
  },
  {
    id: 'five-motion-sports',
    name: 'Five Motion Sports',
    category: 'B2B Commerce',
    description:
      'Sports supply and B2B commerce platform covering product catalogue, MOQ / lead-time management and OEM workflows.',
    tech: ['Django', 'DRF', 'PostgreSQL', 'Celery', 'ntfy'],
    icon: 'Dumbbell',
    accent: ['#63B3ED', '#2B6CB0'],
    group: 'fullstack',
    liveUrl: 'https://fmsportz.com',
  },
  {
    id: 'khanz-restaurant',
    name: 'Khanz Restaurant',
    category: 'Restaurant',
    description:
      'Restaurant platform with menu management, online ordering and an operations backend built on Django.',
    tech: ['Django', 'PostgreSQL', 'REST API'],
    icon: 'UtensilsCrossed',
    accent: ['#F6AD55', '#C05621'],
    group: 'fullstack',
    liveUrl: 'https://khanz.qaam.work',
  },
  {
    id: 'property-management',
    name: 'Property Management Software',
    category: 'PropTech · Private',
    description:
      'Property & contract management system handling ~1,500 units — tenancy contracts, renewals, billing and reporting workflows.',
    tech: ['Django', 'DRF', 'PostgreSQL', 'Redis', 'Celery'],
    icon: 'Building2',
    accent: ['#B794F4', '#6B46C1'],
    group: 'fullstack',
    privateLabel: 'Private',
  },
  {
    id: 'ai-voice-assistant',
    name: 'Multilingual AI Voice Assistant',
    category: 'AI · Self-Hosted',
    description:
      'Real-time, multilingual conversational voice bot for booking and support — ElevenLabs TTS + LLM APIs wired to backend booking logic on self-hosted infrastructure.',
    tech: ['Python', 'LLM APIs', 'ElevenLabs', 'DRF', 'Proxmox'],
    icon: 'Mic',
    accent: ['#F687B3', '#B83280'],
    group: 'fullstack',
    privateLabel: 'Internal',
    featured: true,
  },
  {
    id: 'luxury-carpet',
    name: 'Luxury Carpet',
    category: 'Frontend · AI Chat',
    description:
      'Luxury carpet storefront for the Dubai market with an AI chat system powered by the Gemini API.',
    tech: ['Next.js', 'React', 'Gemini API'],
    icon: 'Layers',
    accent: ['#5E3B0D', '#0D985E'],
    group: 'fullstack',
    liveUrl: 'https://carpet-dusky.vercel.app',
  },

  // ── WordPress — Custom Themes ──────────────────────────────────────────
  {
    id: 'wp-home-interiors',
    name: 'Home Interiors — Carpets, Sofas & Beds',
    category: 'Custom Theme',
    description:
      'Custom-built WordPress theme for a home furnishing brand — carpets, sofas and beds — with a bespoke catalogue layout and enquiry flow.',
    tech: ['WordPress', 'Custom Theme', 'PHP', 'Responsive'],
    icon: 'Sofa',
    accent: ['#21759B', '#0F4C63'],
    group: 'wordpress',
    liveUrl: 'https://home.qaam.work',
  },
  {
    id: 'wp-plumbing',
    name: 'Plumbing & Electrical Services',
    category: 'Custom Theme',
    description:
      'Custom WordPress theme for an electrician & plumbing services company — service pages, booking call-to-actions and local SEO structure.',
    tech: ['WordPress', 'Custom Theme', 'PHP', 'SEO'],
    icon: 'Wrench',
    accent: ['#48BB78', '#22683F'],
    group: 'wordpress',
    liveUrl: 'https://plumber.qaam.work',
  },
  {
    id: 'wp-real-estate',
    name: 'Real Estate & Property Listings',
    category: 'Custom Theme',
    description:
      'Property listings WordPress site with search, filtering and agent profiles — custom theme and template design.',
    tech: ['WordPress', 'Custom Theme', 'Elementor'],
    icon: 'Home',
    accent: ['#4299E1', '#2A4E7C'],
    group: 'wordpress',
    liveUrl: 'https://realestate.qaam.work',
  },
  {
    id: 'wp-restaurant',
    name: 'Restaurant & Cafe',
    category: 'Custom Theme',
    description:
      'Restaurant WordPress theme with menu, reservations and gallery — mobile-first design and fast page loads.',
    tech: ['WordPress', 'Custom Theme', 'WooCommerce'],
    icon: 'UtensilsCrossed',
    accent: ['#ED8936', '#9C4221'],
    group: 'wordpress',
    liveUrl: 'https://dine.qaam.work',
  },
  {
    id: 'wp-salon',
    name: 'Beauty & Salon',
    category: 'Custom Theme',
    description:
      'Salon & spa WordPress site with service listings, online booking and a styled gallery — custom theme build.',
    tech: ['WordPress', 'Custom Theme', 'Booking'],
    icon: 'Scissors',
    accent: ['#ED64A6', '#8B2C63'],
    group: 'wordpress',
    liveUrl: 'https://salon.qaam.work',
  },
]

export const fullStackProjects = projects.filter((p) => p.group === 'fullstack')
export const wordpressProjects = projects.filter((p) => p.group === 'wordpress')
