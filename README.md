# AI-Powered Knowledge Base (Mini)

An editorial, mint-accented knowledge base built with the Next.js App Router. Static docs pair with a simulated “Ask AI” flow so you can practice server actions, API routes, and middleware without real AI keys.

## Tech Stack
- Next.js 16 (App Router) + React 19 + TypeScript
- Tailwind CSS v4 with next/font (Playfair Display + Inter)
- Server Actions, API Routes, and demo Edge-style middleware
- next/image, loading skeletons, and responsive editorial UI

## Folder Structure
- `app/layout.tsx` — global shell with navbar/footer and fonts
- `app/page.tsx` — landing page + feature grid
- `app/docs` — docs listing, `[slug]` detail (SSG style), loading + 404
- `app/ask` — Ask AI hero and client form that calls a server action
- `app/actions/ask-ai.ts` — server action with simulated RAG delay
- `app/api/ask/route.ts` — API endpoint mirroring the Ask logic
- `content/docs.json` — mock knowledge base (6 docs)
- `components/*` — design system primitives and Ask form
- `middleware.ts` — in-memory rate limiter for `/api/ask` (demo-only)

## Running the Project
1) Install dependencies: `npm install`  
2) Start dev server: `npm run dev`  
3) Visit `http://localhost:3000`

Optional: `npm run lint` to check the codebase.

## Routes
- `/` — editorial landing with overview + CTAs
- `/docs` — static docs grid
- `/docs/[slug]` — doc detail pages with prose styling
- `/ask` — Ask the knowledge base (server action + skeleton UI)
- `/api/ask` — JSON API that reuses the same simulated answer logic
- `/about` — project context for Lab 6

## Notes
- AI behavior is **simulated**: answers come from keyword search over `docs.json` with a short artificial delay.
- Middleware rate limits `/api/ask` to 5 req/min per IP and resets on server restart (demo only).
- Designed for MSIS207 Lab 6 Mini Capstone with a focus on architecture, patterns, and UI polish.
