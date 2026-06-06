# Tech Stack

Chosen for Mary's goals: a **popular, reliable TypeScript stack** with a
dashboard, and Steve's goal of an attractive site in modern browsers.

## Core

- **Language:** TypeScript (end to end)
- **Framework:** Next.js (App Router, React Server Components) — full-stack,
  most popular React framework, strong reliability and DX
- **Runtime:** Node.js (LTS)

## Data

- **Database:** MySQL (developed locally against DBngin's MySQL 8)
- **ORM:** Prisma — type-safe schema and queries
- **Migrations:** Prisma Migrate

## UI

- **Styling:** Tailwind CSS — fast, consistent, modern look
- **Components:** React + a headless component library (e.g. shadcn/ui) for an
  attractive, accessible dashboard
- **Responsive design:** **mobile-first and fully responsive** — every screen is
  built to work from small phones to large desktops, using Tailwind's responsive
  breakpoints (`sm`/`md`/`lg`/`xl`). Layouts use fluid containers and adapt
  spacing, type scale, and structure across viewports.
- **Target:** modern evergreen browsers (Chrome, Edge, Firefox, Safari), across
  phone, tablet, and desktop viewports

## Quality & tooling

- **Linting/format:** ESLint + Prettier
- **Type checking:** `tsc --noEmit` in CI
- **Testing:** **Vitest** is the validation test runner — each phase's
  `validation.md` acceptance criteria are backed by Vitest tests, run via the
  `test` script in `package.json` (`pnpm test`). Playwright covers the
  end-to-end booking flow.
- **Package manager:** pnpm

## Hosting (target)

- **App:** Vercel (first-class Next.js support)
- **Database:** managed MySQL (e.g. PlanetScale / RDS / Cloud SQL)

## Conventions

- Server Actions / route handlers for mutations (e.g. creating a booking)
- Environment config via `.env` (never committed); typed env access
- Schema is the source of truth for agents, ailments, therapies, appointments
- **Responsive by default:** every page/component is built mobile-first with
  Tailwind breakpoints; no fixed-width, desktop-only layouts
