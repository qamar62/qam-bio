import { list, put } from '@vercel/blob'
import { NextResponse, type NextRequest } from 'next/server'
import type { StoredProject } from '@/lib/stored-projects'

export const dynamic = 'force-dynamic'

const DATA_KEY = 'projects.json'

async function readProjects(): Promise<StoredProject[]> {
  try {
    const { blobs } = await list({ prefix: DATA_KEY })
    const found = blobs.find((b) => b.pathname === DATA_KEY)
    if (!found) return []
    const res = await fetch(found.url, { cache: 'no-store' })
    if (!res.ok) return []
    const data = await res.json()
    return Array.isArray(data) ? data : []
  } catch {
    return []
  }
}

async function writeProjects(projects: StoredProject[]) {
  await put(DATA_KEY, JSON.stringify(projects), {
    access: 'public',
    contentType: 'application/json',
    addRandomSuffix: false,
    allowOverwrite: true,
  })
}

function isAuthed(req: NextRequest) {
  const pw = req.headers.get('x-admin-password')
  return Boolean(process.env.ADMIN_PASSWORD) && pw === process.env.ADMIN_PASSWORD
}

const noStore = { 'Cache-Control': 'no-store' }

export async function GET() {
  const projects = await readProjects()
  return NextResponse.json(projects, { headers: noStore })
}

export async function POST(req: NextRequest) {
  if (!isAuthed(req)) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401, headers: noStore },
    )
  }

  const body = await req.json().catch(() => ({}))
  const title = String(body.title ?? '').trim()
  if (!title) {
    return NextResponse.json(
      { error: 'Title is required' },
      { status: 400, headers: noStore },
    )
  }

  const tech = Array.isArray(body.tech)
    ? body.tech
    : String(body.tech ?? '')
        .split(',')
        .map((t: string) => t.trim())
        .filter(Boolean)

  const project: StoredProject = {
    id: globalThis.crypto?.randomUUID?.() ?? String(Date.now()),
    title,
    url: String(body.url ?? '').trim(),
    description: String(body.description ?? '').trim(),
    type: body.type === 'wordpress' ? 'wordpress' : 'django',
    category: String(body.category ?? '').trim(),
    tech,
    image: String(body.image ?? '').trim(),
    createdAt: new Date().toISOString(),
  }

  const projects = await readProjects()
  projects.unshift(project)
  await writeProjects(projects)

  return NextResponse.json(project, { status: 201, headers: noStore })
}

export async function DELETE(req: NextRequest) {
  if (!isAuthed(req)) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401, headers: noStore },
    )
  }

  const body = await req.json().catch(() => ({}))
  const id = req.nextUrl.searchParams.get('id') ?? body?.id
  if (!id) {
    return NextResponse.json(
      { error: 'id is required' },
      { status: 400, headers: noStore },
    )
  }

  const projects = await readProjects()
  const next = projects.filter((p) => p.id !== id)
  await writeProjects(next)

  return NextResponse.json(
    { ok: true, removed: projects.length - next.length },
    { headers: noStore },
  )
}
