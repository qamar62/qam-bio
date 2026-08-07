import React, { useEffect, useState } from 'react';
import { upload } from '@vercel/blob/client';

const emptyForm = {
  title: '',
  url: '',
  description: '',
  type: 'django',
  category: '',
  tech: '',
};

const Admin = () => {
  const [password, setPassword] = useState('');
  const [authed, setAuthed] = useState(false);
  const [authError, setAuthError] = useState('');

  const [form, setForm] = useState(emptyForm);
  const [imageFile, setImageFile] = useState(null);
  const [projects, setProjects] = useState([]);
  const [status, setStatus] = useState('idle'); // idle | saving | loading
  const [message, setMessage] = useState('');

  const loadProjects = async () => {
    try {
      const res = await fetch('/api/projects', { cache: 'no-store' });
      const data = await res.json();
      setProjects(Array.isArray(data) ? data : []);
    } catch (e) {
      setProjects([]);
    }
  };

  useEffect(() => {
    loadProjects();
  }, []);

  // Verify password by attempting an authorized no-op (a DELETE with no id returns 400 if authed, 401 if not)
  const handleLogin = async (e) => {
    e.preventDefault();
    setAuthError('');
    try {
      const res = await fetch('/api/projects', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json', 'x-admin-password': password },
        body: JSON.stringify({}),
      });
      if (res.status === 401) {
        setAuthError('Incorrect password.');
        return;
      }
      // 400 (missing id) or 200 both mean the password was accepted
      setAuthed(true);
    } catch (err) {
      setAuthError('Could not reach the server. If running locally, use `vercel dev`.');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    if (!form.title.trim()) {
      setMessage('Please enter a title.');
      return;
    }
    setStatus('saving');
    try {
      let imageUrl = '';
      if (imageFile) {
        const blob = await upload(imageFile.name, imageFile, {
          access: 'public',
          handleUploadUrl: '/api/upload',
          clientPayload: password,
        });
        imageUrl = blob.url;
      }

      const res = await fetch('/api/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-admin-password': password },
        body: JSON.stringify({ ...form, image: imageUrl }),
      });
      if (!res.ok) throw new Error(`Save failed (${res.status})`);

      setForm(emptyForm);
      setImageFile(null);
      if (document.getElementById('image-input')) document.getElementById('image-input').value = '';
      setMessage('✓ Project added.');
      await loadProjects();
    } catch (err) {
      setMessage(err.message || 'Something went wrong.');
    } finally {
      setStatus('idle');
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this project?')) return;
    try {
      const res = await fetch(`/api/projects?id=${encodeURIComponent(id)}`, {
        method: 'DELETE',
        headers: { 'x-admin-password': password },
      });
      if (!res.ok) throw new Error('Delete failed');
      await loadProjects();
    } catch (err) {
      setMessage(err.message || 'Delete failed.');
    }
  };

  const field = {
    width: '100%',
    background: 'var(--surface-2)',
    border: '1px solid var(--border)',
    borderRadius: '8px',
    color: 'var(--text)',
    padding: '12px 14px',
    fontFamily: "'DM Mono', monospace",
    outline: 'none',
  };
  const labelStyle = { color: 'var(--text-dim)', fontFamily: "'DM Mono', monospace", fontSize: 13, marginBottom: 6, display: 'block' };

  // ---- Login screen ----
  if (!authed) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4" style={{ background: 'var(--deep)' }}>
        <form
          onSubmit={handleLogin}
          className="w-full max-w-sm p-8"
          style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '18px' }}
        >
          <h1 className="text-2xl font-bold mb-2" style={{ fontFamily: "'Syne', sans-serif", color: 'var(--text)' }}>
            Admin
          </h1>
          <p className="mb-6 text-sm" style={{ color: 'var(--text-dim)', fontFamily: "'DM Mono', monospace" }}>
            Enter your password to manage projects.
          </p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            autoFocus
            style={field}
          />
          {authError && (
            <p className="mt-3 text-sm" style={{ color: '#ff6b6b', fontFamily: "'DM Mono', monospace" }}>{authError}</p>
          )}
          <button
            type="submit"
            className="w-full mt-5 py-3 font-bold tracking-wide"
            style={{ background: 'var(--gold)', color: 'var(--deep)', borderRadius: '8px', fontFamily: "'Syne', sans-serif" }}
          >
            LOG IN
          </button>
        </form>
      </div>
    );
  }

  // ---- Dashboard ----
  return (
    <div className="min-h-screen px-4 py-10 md:px-10" style={{ background: 'var(--deep)' }}>
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold" style={{ fontFamily: "'Syne', sans-serif", color: 'var(--text)' }}>
            Project Admin
          </h1>
          <a href="/" className="text-sm" style={{ color: 'var(--gold)', fontFamily: "'DM Mono', monospace" }}>
            ← Back to site
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Add form */}
          <form
            onSubmit={handleSubmit}
            className="p-6 space-y-4 h-fit"
            style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '18px' }}
          >
            <h2 className="text-lg font-bold" style={{ fontFamily: "'Syne', sans-serif", color: 'var(--text)' }}>
              Add a project
            </h2>

            <div>
              <label style={labelStyle}>Title *</label>
              <input name="title" value={form.title} onChange={handleChange} placeholder="e.g. Bakery Website" style={field} />
            </div>

            <div>
              <label style={labelStyle}>URL</label>
              <input name="url" value={form.url} onChange={handleChange} placeholder="https://example.qaam.work" style={field} />
            </div>

            <div>
              <label style={labelStyle}>Description</label>
              <textarea name="description" value={form.description} onChange={handleChange} rows={3} placeholder="Short description" style={{ ...field, resize: 'vertical' }} />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label style={labelStyle}>Section</label>
                <select name="type" value={form.type} onChange={handleChange} style={field}>
                  <option value="django">Django & Full-Stack</option>
                  <option value="wordpress">WordPress</option>
                </select>
              </div>
              <div>
                <label style={labelStyle}>Category tag</label>
                <input name="category" value={form.category} onChange={handleChange} placeholder="e.g. Custom Theme" style={field} />
              </div>
            </div>

            <div>
              <label style={labelStyle}>Tech (comma separated)</label>
              <input name="tech" value={form.tech} onChange={handleChange} placeholder="WordPress, PHP, SEO" style={field} />
            </div>

            <div>
              <label style={labelStyle}>Image (optional — placeholder used if empty)</label>
              <input id="image-input" type="file" accept="image/*" onChange={(e) => setImageFile(e.target.files?.[0] || null)} style={{ ...field, padding: '10px' }} />
            </div>

            {message && (
              <p className="text-sm" style={{ color: message.startsWith('✓') ? 'var(--gold)' : '#ff6b6b', fontFamily: "'DM Mono', monospace" }}>
                {message}
              </p>
            )}

            <button
              type="submit"
              disabled={status === 'saving'}
              className="w-full py-3 font-bold tracking-wide disabled:opacity-60"
              style={{ background: 'var(--gold)', color: 'var(--deep)', borderRadius: '8px', fontFamily: "'Syne', sans-serif" }}
            >
              {status === 'saving' ? 'SAVING…' : 'ADD PROJECT'}
            </button>
          </form>

          {/* Existing list */}
          <div>
            <h2 className="text-lg font-bold mb-4" style={{ fontFamily: "'Syne', sans-serif", color: 'var(--text)' }}>
              Added projects ({projects.length})
            </h2>
            <div className="space-y-3">
              {projects.length === 0 && (
                <p className="text-sm" style={{ color: 'var(--text-dim)', fontFamily: "'DM Mono', monospace" }}>
                  No custom projects yet. Add one on the left.
                </p>
              )}
              {projects.map((p) => (
                <div
                  key={p.id}
                  className="flex items-center gap-4 p-3"
                  style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '12px' }}
                >
                  <img
                    src={p.image || '/placeholder.svg'}
                    alt={p.title}
                    className="w-16 h-12 object-cover rounded-md flex-shrink-0"
                    style={{ border: '1px solid var(--border)' }}
                  />
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold truncate" style={{ color: 'var(--text)', fontFamily: "'Syne', sans-serif" }}>{p.title}</p>
                    <p className="text-xs truncate" style={{ color: 'var(--text-dim)', fontFamily: "'DM Mono', monospace" }}>
                      {p.type} · {p.url || 'no link'}
                    </p>
                  </div>
                  <button
                    onClick={() => handleDelete(p.id)}
                    className="text-xs px-3 py-1.5 flex-shrink-0"
                    style={{ color: '#ff6b6b', border: '1px solid var(--border)', borderRadius: '8px', fontFamily: "'DM Mono', monospace" }}
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
