# Requirements — Phase 0: Walking Skeleton

## Goal

Prove the entire pipeline end to end: a Next.js + TypeScript app reads a row
from MySQL (via Prisma) and renders it on a styled page. This is the
"walking skeleton" from `specs/roadmap.md` — thin, but wired from UI to DB.

## Scope (in)

- Scaffold a Next.js app (App Router, React, TypeScript) per
  `specs/tech-stack.md`.
- Tailwind CSS configured and applied.
- Prisma connected to a local MySQL database.
- One trivial model, **`ClinicInfo`** (`name`, `tagline`), seeded with a single
  row.
- A home page that reads the `ClinicInfo` row from the database and renders it
  as a banner.
- A **minimal AgentClinic home page**: the default Next.js starter content is
  replaced with a clean, attractive landing page built around the `ClinicInfo`
  banner, including a one-line welcome that frames the clinic.
- A **layout component** (`MainLayout`) that arranges the page as header / main /
  footer, with the `Header`, `Main`, and `Footer` each kept in **its own file**
  under `components/layout/`.

## Scope (out)

- No agents, ailments, therapies, appointments, or booking yet (those are
  Phase 1+).
- No authentication, dashboards, or deploy/hosting (deploy is deferred).
- No tests beyond a manual run (formal e2e arrives in Phase 8).

## Decisions

- **Stack:** Next.js (App Router) + TypeScript + Tailwind, Prisma + MySQL,
  pnpm — as specified in `specs/tech-stack.md`.
- **Skeleton depth:** DB-backed page. The page must read from MySQL, not
  hardcode the value — that's what proves the pipeline.
- **Local database:** a **local MySQL install** on the host machine, reached
  via `DATABASE_URL` in `.env`. No Docker in this phase.
- **Proof slice:** the **`ClinicInfo` banner** — neutral content (clinic name +
  tagline) that naturally becomes the real site header in later phases, so no
  throwaway code.
- **Home page:** ships a minimal but presentable AgentClinic landing page (not
  the Next.js starter), so the skeleton looks like the product from day one —
  matching Steve's "attractive site" goal and making demos land quickly.
- **Component structure:** `Header`, `Main`, and `Footer` each live in their own
  file under `components/layout/`, composed by `MainLayout` — one component per
  file so each can grow independently in later phases without churn.

## Context

- Mission (`specs/mission.md`): booking-first clinic; also a teaching/demo
  artifact for course students and conference-booth demos — so the skeleton
  must be reproducible and quick to stand up.
- This is the foundation every later vertical slice builds on.

## Assumptions

- Developer has Node.js (LTS), pnpm, and a local MySQL server available.
- A database for the app can be created locally and referenced by
  `DATABASE_URL`.
