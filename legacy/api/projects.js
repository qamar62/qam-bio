import { list, put } from '@vercel/blob';

const DATA_KEY = 'projects.json';

async function readProjects() {
  try {
    const { blobs } = await list({ prefix: DATA_KEY });
    const found = blobs.find((b) => b.pathname === DATA_KEY);
    if (!found) return [];
    const res = await fetch(found.url, { cache: 'no-store' });
    if (!res.ok) return [];
    const data = await res.json();
    return Array.isArray(data) ? data : [];
  } catch (e) {
    return [];
  }
}

async function writeProjects(projects) {
  await put(DATA_KEY, JSON.stringify(projects), {
    access: 'public',
    contentType: 'application/json',
    addRandomSuffix: false,
    allowOverwrite: true,
  });
}

function isAuthed(req) {
  const pw = req.headers['x-admin-password'];
  return Boolean(process.env.ADMIN_PASSWORD) && pw === process.env.ADMIN_PASSWORD;
}

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');

  // Public: list projects
  if (req.method === 'GET') {
    const projects = await readProjects();
    return res.status(200).json(projects);
  }

  // All writes require the admin password
  if (!isAuthed(req)) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  if (req.method === 'POST') {
    const body = req.body || {};
    const title = (body.title || '').trim();
    const url = (body.url || '').trim();
    if (!title) return res.status(400).json({ error: 'Title is required' });

    const tech = Array.isArray(body.tech)
      ? body.tech
      : String(body.tech || '')
          .split(',')
          .map((t) => t.trim())
          .filter(Boolean);

    const project = {
      id: (globalThis.crypto?.randomUUID && globalThis.crypto.randomUUID()) || String(Date.now()),
      title,
      url,
      description: (body.description || '').trim(),
      type: body.type === 'wordpress' ? 'wordpress' : 'django',
      category: (body.category || '').trim(),
      tech,
      image: (body.image || '').trim(),
      createdAt: new Date().toISOString(),
    };

    const projects = await readProjects();
    projects.unshift(project);
    await writeProjects(projects);
    return res.status(201).json(project);
  }

  if (req.method === 'DELETE') {
    const id = req.query.id || (req.body && req.body.id);
    if (!id) return res.status(400).json({ error: 'id is required' });
    const projects = await readProjects();
    const next = projects.filter((p) => p.id !== id);
    await writeProjects(next);
    return res.status(200).json({ ok: true, removed: projects.length - next.length });
  }

  res.setHeader('Allow', 'GET, POST, DELETE');
  return res.status(405).json({ error: 'Method not allowed' });
}
