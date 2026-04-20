# Al-Saad Construction — Next.js Portfolio

Production-ready Next.js conversion of the Al-Saad Construction portfolio. Pixel-perfect reproduction of the original HTML design.

## Tech Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Google Fonts** — Playfair Display, Inter, Tajawal (via `next/font/google`)

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm / yarn / pnpm

### Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

```bash
npm run build
npm start
```

## Deploy to Vercel (recommended)

1. Push this repo to GitHub / GitLab / Bitbucket.
2. Go to [vercel.com](https://vercel.com) → **New Project** → import your repo.
3. Vercel auto-detects Next.js — click **Deploy**.

No environment variables required.

### Deploy to any static host (export)

Add to `next.config.ts`:

```ts
const nextConfig: NextConfig = {
  output: 'export',
}
```

Then:

```bash
npm run build
# Output is in the `out/` folder — upload it to Netlify, S3, etc.
```

## Project Structure

```
al-saad/
├── app/
│   ├── layout.tsx        # Root layout + metadata + fonts
│   ├── page.tsx          # Main page (composes all sections)
│   └── globals.css       # All original CSS + Tailwind directives
├── components/
│   ├── ClientInit.tsx    # All client-side JS (cursor, loader, animations)
│   ├── Cursor.tsx
│   ├── Loader.tsx
│   ├── MobileMenu.tsx
│   ├── Navbar.tsx
│   ├── HeroSection.tsx
│   ├── StatsSection.tsx
│   ├── AboutSection.tsx
│   ├── ProjectsSection.tsx
│   ├── UpcomingSection.tsx
│   ├── ServicesSection.tsx
│   ├── TimelineSection.tsx
│   ├── ContactSection.tsx
│   └── Footer.tsx
└── public/               # Static assets
```
"# al-saad" 
