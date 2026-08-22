# Muna K.C. — Portfolio

A premium, editorial Data Science & Machine Learning portfolio built with Next.js
(App Router) and Tailwind CSS v4.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Build for production

```bash
npm run build
npm run start
```

The project builds to fully static pages (`next build` produces 11 statically
generated routes), so it can also be deployed to any static or Node hosting
provider (Vercel, Netlify, etc.).

## Project structure

- `app/` — routes (App Router). Each folder under `app/` is a real route:
  `/`, `/about`, `/skills`, `/projects`, `/projects/[slug]`, `/experience`,
  `/education`, `/contact`.
- `components/` — shared UI: navigation, footer, project cards, the hero
  visual, page headers, contact form.
- `lib/data.ts` — a single source of truth for all site content (name, bio,
  skills, projects, experience, education). Edit this file to update copy
  without touching component code.
- `app/globals.css` — design tokens (colors, fonts) as CSS variables, plus a
  couple of small utility classes (`.eyebrow`, `.grid-bg`, `.reveal`).

## Fonts

Inter, IBM Plex Mono, and DM Serif Display are self-hosted via the
`@fontsource/*` packages (no external requests to Google Fonts at runtime or
build time).

## Things to plug in when you have them

- **Resume PDF**: currently the site says "Resume available on request" and
  links to the Contact page instead of a download, since no PDF was
  supplied. Once you have a resume PDF, drop it in `public/resume.pdf` and
  update the Resume links in `components/Nav.tsx`, `app/page.tsx`, and
  `app/contact/page.tsx` to point to `/resume.pdf` with a `download`
  attribute.
- **Contact form backend**: the form currently opens the visitor's email
  client via a `mailto:` link (no fake backend). If you want real in-page
  form submissions, connect a service like Formspree, Resend, or a small API
  route, then update `components/ContactForm.tsx`.
- **Real project metrics/screenshots**: anywhere the site says "available in
  the repository," you can fill in real evaluation numbers or screenshots
  once they're ready — edit `lib/data.ts` (`sections` on each project) and
  `components/ProjectDetail.tsx`.
