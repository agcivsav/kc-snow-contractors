# KC Snow Contractors

- `frontend/` — Next.js site (Netlify builds this)
- `Sanity/` — Sanity Studio

## Run the site

```bash
cd frontend
npm install
npm run dev
```

From repo root: `npm run dev`

## Run Studio

```bash
cd Sanity
npm install
npm run dev
```

## Netlify

`netlify.toml` sets `base = "frontend"` so Sanity Studio is never part of the site build.
Env vars live in `frontend/.env.local` (local) and Netlify site env (production).
