# Validation — Phase 0: Walking Skeleton

How we know the skeleton works and the branch can merge.

## Acceptance criteria

- [ ] `pnpm install` succeeds from a clean clone.
- [ ] With `DATABASE_URL` set to a local MySQL database, `prisma migrate`
      creates the `ClinicInfo` table.
- [ ] The seed script inserts exactly one `ClinicInfo` row.
- [ ] `pnpm dev` starts the app with no errors.
- [ ] The home page renders the clinic **name** and **tagline** read **from the
      database** (not hardcoded) — changing the seeded row and re-seeding changes
      what the page shows.
- [ ] The banner is styled with Tailwind (not unstyled HTML).
- [ ] The home page is a minimal AgentClinic landing page — the default Next.js
      starter content is gone, replaced with the `ClinicInfo` banner and a
      one-line welcome framing the clinic.

## Pipeline proof (the point of Phase 0)

- [ ] Edit the seeded `tagline`, re-run the seed, reload the page → the new
      tagline appears. This confirms UI → Prisma → MySQL is wired end to end.

## Quality gates

- [ ] `tsc --noEmit` passes (no type errors).
- [ ] ESLint passes with no errors.
- [ ] `.env` is git-ignored; `.env.example` documents `DATABASE_URL`.

## Docs

- [ ] `README.md` lists the steps to run locally: install, set env, migrate,
      seed, dev — reproducible by a course student or at a demo booth.

## Out of scope (do not block merge on)

- Deployment/hosting, automated tests, and any agents/ailments/therapies/
  booking features — those belong to later phases.

## Merge condition

All acceptance criteria and quality gates above are checked, and the home page
demonstrably reads the seeded `ClinicInfo` row from MySQL.
