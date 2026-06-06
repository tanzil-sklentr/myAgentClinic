# Changelog

All notable changes to this project, grouped by date (most recent first).

## 2026-06-05

- Scaffolded the AgentClinic app: Next.js (App Router) + TypeScript + Tailwind,
  with Prisma connected to MySQL.
- Built the Phase 0 walking skeleton — a DB-backed home page that reads the
  seeded `ClinicInfo` row (name + tagline) and renders it as a styled banner.
- Extracted the page shell into `Header`, `Main`, and `Footer` components, each
  in its own file under `components/layout/`, composed by `MainLayout`.
- Marked Phase 0 complete and updated the specs to require the layout components
  to live in their own files.
