import { GitBranch, GitFork, Star, Users } from 'lucide-react'
import { Github } from './brand-icons'
import { profile } from '@/data/profile'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

type GitHubUser = {
  public_repos: number
  followers: number
  avatar_url: string
  bio: string | null
}

type GitHubRepo = {
  id: number
  name: string
  html_url: string
  description: string | null
  language: string | null
  stargazers_count: number
  forks_count: number
  fork: boolean
  pushed_at: string
}

const API = 'https://api.github.com'
// Cache for an hour so the section stays fresh without hammering the API.
const revalidate = { next: { revalidate: 3600 } }

async function getGitHub() {
  try {
    const [userRes, repoRes] = await Promise.all([
      fetch(`${API}/users/${profile.githubHandle}`, revalidate),
      fetch(
        `${API}/users/${profile.githubHandle}/repos?per_page=100&sort=pushed`,
        revalidate,
      ),
    ])

    if (!userRes.ok || !repoRes.ok) return null

    const user: GitHubUser = await userRes.json()
    const allRepos: GitHubRepo[] = await repoRes.json()
    if (!Array.isArray(allRepos)) return null

    const owned = allRepos.filter((r) => !r.fork)
    const stars = owned.reduce((sum, r) => sum + r.stargazers_count, 0)
    const languages = [
      ...new Set(owned.map((r) => r.language).filter(Boolean) as string[]),
    ]

    return {
      user,
      stars,
      languages,
      repos: owned.slice(0, 4),
    }
  } catch {
    return null
  }
}

export async function GitHubSection() {
  const data = await getGitHub()
  if (!data) return null

  const { user, stars, languages, repos } = data

  const stats = [
    { label: 'Public Repos', value: String(user.public_repos), icon: GitBranch },
    { label: 'Followers', value: String(user.followers), icon: Users },
    { label: 'Stars Earned', value: String(stars), icon: Star },
  ]

  return (
    <section id="github" className="px-4 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Open Source"
          title="Building in the open"
          description="Live from the GitHub API — the repositories I have pushed to most recently."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <Reveal className="clay flex flex-col rounded-3xl p-7 lg:p-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="clay-sage flex h-11 w-11 items-center justify-center rounded-2xl text-sage-foreground">
                  <Github className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-display text-lg font-bold text-foreground">
                    @{profile.githubHandle}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Recently active repositories
                  </p>
                </div>
              </div>
              <a
                href={profile.social.github}
                target="_blank"
                rel="noreferrer"
                className="clay-sm rounded-full px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:text-primary"
              >
                Follow
              </a>
            </div>

            <ul className="mt-6 flex flex-col gap-3">
              {repos.map((repo) => (
                <li key={repo.id}>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="clay-inset block rounded-2xl p-4 transition-transform hover:-translate-y-0.5"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <p className="font-semibold text-foreground">
                        {repo.name}
                      </p>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        {repo.language && (
                          <span className="font-medium text-primary">
                            {repo.language}
                          </span>
                        )}
                        <span className="flex items-center gap-1">
                          <Star className="h-3.5 w-3.5" />
                          {repo.stargazers_count}
                        </span>
                        <span className="flex items-center gap-1">
                          <GitFork className="h-3.5 w-3.5" />
                          {repo.forks_count}
                        </span>
                      </div>
                    </div>
                    {repo.description && (
                      <p className="mt-1.5 text-sm text-muted-foreground text-pretty">
                        {repo.description}
                      </p>
                    )}
                  </a>
                </li>
              ))}
            </ul>

            {languages.length > 0 && (
              <ul className="mt-5 flex flex-wrap gap-2">
                {languages.slice(0, 8).map((lang) => (
                  <li
                    key={lang}
                    className="clay-sm rounded-full px-3 py-1 text-xs font-medium text-foreground"
                  >
                    {lang}
                  </li>
                ))}
              </ul>
            )}
          </Reveal>

          <div className="grid gap-6">
            {stats.map((stat) => {
              const Icon = stat.icon
              return (
                <Reveal
                  key={stat.label}
                  className="clay rounded-3xl p-6 clay-hover"
                >
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </span>
                    <div>
                      <p className="font-display text-2xl font-bold text-foreground">
                        {stat.value}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
