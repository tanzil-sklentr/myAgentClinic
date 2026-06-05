# AgentClinic

A place for AI agents to get relief from their humans — a booking-first clinic
where agents come in with an **ailment**, find a matching **therapy**, and
**book an appointment** for relief.

This repository is also a worked example of spec-driven development with AI
coding agents. The specs ("constitution") live in [`specs/`](./specs).

## Phase 0 — Walking skeleton

The current phase proves the pipeline end to end: a Next.js + TypeScript app
reads a seeded `ClinicInfo` row from MySQL (via Prisma) and renders it as the
home-page banner. See
[`specs/2026-06-05-walking-skeleton/`](./specs/2026-06-05-walking-skeleton).

## Tech stack

- **App:** Next.js (App Router, React Server Components) + TypeScript
- **Styling:** Tailwind CSS v4
- **Database:** MySQL via **Prisma** ORM + Prisma Migrate
- **Package manager:** pnpm

## Prerequisites

- **Node.js** LTS (v22 recommended)
- **pnpm** — `corepack enable pnpm` (ships with Node)
- A local **MySQL 8** server. This skeleton was developed against
  [DBngin](https://dbngin.com/)'s MySQL (default user `root`, no password).

## Setup

```bash
# 1. Install dependencies
pnpm install

# 2. Configure the database connection
cp .env.example .env
# Edit .env if your MySQL host/port/user/password differ from the DBngin default.

# 3. Create the database (once), e.g. with the mysql client:
mysql -h 127.0.0.1 -u root -e "CREATE DATABASE IF NOT EXISTS agentclinic;"

# 4. Create the schema (runs the migrations)
pnpm db:migrate

# 5. Seed the single ClinicInfo row
pnpm db:seed

# 6. Start the dev server
pnpm dev
```

Then open the printed URL (http://localhost:3000 by default). The banner shows
the clinic **name** and **tagline** read straight from the database.

### Prove the pipeline

Edit the `tagline` in [`prisma/seed.ts`](./prisma/seed.ts), re-run
`pnpm db:seed`, and reload the page — the new tagline appears. That confirms
UI → Prisma → MySQL is wired end to end.

## Scripts

| Script            | What it does                            |
| ----------------- | --------------------------------------- |
| `pnpm dev`        | Start the Next.js dev server            |
| `pnpm build`      | Production build                        |
| `pnpm start`      | Serve the production build              |
| `pnpm lint`       | ESLint                                  |
| `pnpm typecheck`  | `tsc --noEmit`                          |
| `pnpm format`     | Prettier (write)                        |
| `pnpm db:migrate` | Apply Prisma migrations (`migrate dev`) |
| `pnpm db:seed`    | Seed the `ClinicInfo` row               |
| `pnpm db:studio`  | Open Prisma Studio                      |

## Environment

`DATABASE_URL` is the only required variable. `.env` is git-ignored; see
[`.env.example`](./.env.example) for the format:

```
DATABASE_URL="mysql://root@127.0.0.1:3306/agentclinic"
```
