'use client'

import { useEffect, useState, type FormEvent } from 'react'
import Link from 'next/link'
import { upload } from '@vercel/blob/client'
import { ArrowLeft, Loader2, Lock, Trash2 } from 'lucide-react'
import type { StoredProject } from '@/lib/stored-projects'

const emptyForm = {
  title: '',
  url: '',
  description: '',
  type: 'django',
  category: '',
  tech: '',
}

const fieldClass =
  'clay-inset w-full rounded-xl bg-transparent px-4 py-3 text-foreground outline-none placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring'

function Label({ children }: { children: React.ReactNode }) {
  return (
    <span className="mb-2 block text-sm font-semibold text-foreground">
      {children}
    </span>
  )
}

export function AdminDashboard() {
  const [password, setPassword] = useState('')
  const [authed, setAuthed] = useState(false)
  const [authError, setAuthError] = useState('')

  const [form, setForm] = useState(emptyForm)
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [projects, setProjects] = useState<StoredProject[]>([])
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState('')

  async function loadProjects() {
    try {
      const res = await fetch('/api/projects', { cache: 'no-store' })
      const data = await res.json()
      setProjects(Array.isArray(data) ? data : [])
    } catch {
      setProjects([])
    }
  }

  useEffect(() => {
    loadProjects()
  }, [])

  /**
   * Verify the password with an authorized no-op: a DELETE without an id
   * returns 400 when authed and 401 when not.
   */
  async function handleLogin(e: FormEvent) {
    e.preventDefault()
    setAuthError('')
    try {
      const res = await fetch('/api/projects', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'x-admin-password': password,
        },
        body: JSON.stringify({}),
      })
      if (res.status === 401) {
        setAuthError('Incorrect password.')
        return
      }
      setAuthed(true)
    } catch {
      setAuthError('Could not reach the server.')
    }
  }

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setMessage('')
    if (!form.title.trim()) {
      setMessage('Please enter a title.')
      return
    }
    setSaving(true)
    try {
      let imageUrl = ''
      if (imageFile) {
        const blob = await upload(imageFile.name, imageFile, {
          access: 'public',
          handleUploadUrl: '/api/upload',
          clientPayload: password,
        })
        imageUrl = blob.url
      }

      const res = await fetch('/api/projects', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-admin-password': password,
        },
        body: JSON.stringify({ ...form, image: imageUrl }),
      })
      if (!res.ok) throw new Error(`Save failed (${res.status})`)

      setForm(emptyForm)
      setImageFile(null)
      const input = document.getElementById('image-input') as HTMLInputElement | null
      if (input) input.value = ''
      setMessage('✓ Project added.')
      await loadProjects()
    } catch (err) {
      setMessage(err instanceof Error ? err.message : 'Something went wrong.')
    } finally {
      setSaving(false)
    }
  }

  async function handleDelete(id: string) {
    if (!window.confirm('Delete this project?')) return
    try {
      const res = await fetch(`/api/projects?id=${encodeURIComponent(id)}`, {
        method: 'DELETE',
        headers: { 'x-admin-password': password },
      })
      if (!res.ok) throw new Error('Delete failed')
      await loadProjects()
    } catch (err) {
      setMessage(err instanceof Error ? err.message : 'Delete failed.')
    }
  }

  if (!authed) {
    return (
      <main className="flex min-h-screen items-center justify-center px-4">
        <form onSubmit={handleLogin} className="clay w-full max-w-sm rounded-3xl p-8">
          <span className="clay-sage flex h-12 w-12 items-center justify-center rounded-2xl text-sage-foreground">
            <Lock className="h-5 w-5" />
          </span>
          <h1 className="mt-5 font-display text-2xl font-bold text-foreground">
            Admin
          </h1>
          <p className="mt-1 mb-6 text-sm text-muted-foreground">
            Enter your password to manage projects.
          </p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            autoFocus
            className={fieldClass}
          />
          {authError && (
            <p role="alert" className="mt-3 text-sm font-medium text-destructive">
              {authError}
            </p>
          )}
          <button
            type="submit"
            className="clay-sage clay-hover mt-5 w-full rounded-xl px-6 py-3.5 font-semibold text-sage-foreground"
          >
            Log in
          </button>
        </form>
      </main>
    )
  }

  return (
    <main className="min-h-screen px-4 py-12 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h1 className="font-display text-3xl font-bold tracking-tight text-foreground">
            Project Admin
          </h1>
          <Link
            href="/"
            className="clay-sm inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to site
          </Link>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <form onSubmit={handleSubmit} className="clay h-fit rounded-3xl p-7">
            <h2 className="font-display text-lg font-bold text-foreground">
              Add a project
            </h2>

            <div className="mt-6 flex flex-col gap-4">
              <label>
                <Label>Title *</Label>
                <input
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                  placeholder="e.g. Bakery Website"
                  className={fieldClass}
                />
              </label>

              <label>
                <Label>URL</Label>
                <input
                  name="url"
                  value={form.url}
                  onChange={handleChange}
                  placeholder="https://example.qaam.work"
                  className={fieldClass}
                />
              </label>

              <label>
                <Label>Description</Label>
                <textarea
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Short description"
                  className={`${fieldClass} resize-y`}
                />
              </label>

              <div className="grid gap-4 sm:grid-cols-2">
                <label>
                  <Label>Section</Label>
                  <select
                    name="type"
                    value={form.type}
                    onChange={handleChange}
                    className={fieldClass}
                  >
                    <option value="django">Django &amp; Full-Stack</option>
                    <option value="wordpress">WordPress</option>
                  </select>
                </label>
                <label>
                  <Label>Category tag</Label>
                  <input
                    name="category"
                    value={form.category}
                    onChange={handleChange}
                    placeholder="e.g. Custom Theme"
                    className={fieldClass}
                  />
                </label>
              </div>

              <label>
                <Label>Tech (comma separated)</Label>
                <input
                  name="tech"
                  value={form.tech}
                  onChange={handleChange}
                  placeholder="WordPress, PHP, SEO"
                  className={fieldClass}
                />
              </label>

              <label>
                <Label>Image (optional)</Label>
                <input
                  id="image-input"
                  type="file"
                  accept="image/*"
                  onChange={(e) => setImageFile(e.target.files?.[0] ?? null)}
                  className={`${fieldClass} py-2.5 text-sm`}
                />
              </label>

              {message && (
                <p
                  className={`text-sm font-medium ${
                    message.startsWith('✓') ? 'text-primary' : 'text-destructive'
                  }`}
                >
                  {message}
                </p>
              )}

              <button
                type="submit"
                disabled={saving}
                className="clay-sage clay-hover inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 font-semibold text-sage-foreground disabled:cursor-not-allowed disabled:opacity-70"
              >
                {saving && <Loader2 className="h-4 w-4 animate-spin" />}
                {saving ? 'Saving…' : 'Add project'}
              </button>
            </div>
          </form>

          <div>
            <h2 className="font-display text-lg font-bold text-foreground">
              Added projects ({projects.length})
            </h2>
            <div className="mt-6 flex flex-col gap-3">
              {projects.length === 0 && (
                <p className="text-sm text-muted-foreground">
                  No custom projects yet. Add one on the left.
                </p>
              )}
              {projects.map((p) => (
                <div
                  key={p.id}
                  className="clay flex items-center gap-4 rounded-2xl p-4"
                >
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-semibold text-foreground">
                      {p.title}
                    </p>
                    <p className="truncate text-xs text-muted-foreground">
                      {p.type} · {p.url || 'no link'}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleDelete(p.id)}
                    aria-label={`Delete ${p.title}`}
                    className="clay-sm flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-destructive"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
