# Plan — Phase 0: Walking Skeleton

Numbered task groups, in implementation order. Each group is a small, coherent
step toward a DB-backed page rendering a seeded `ClinicInfo` row.

## 1. Scaffold the app

1.1 Initialize a Next.js app (App Router, TypeScript) with pnpm.
1.2 Configure Tailwind CSS and confirm a styled element renders.
1.3 Add ESLint + Prettier; verify `tsc --noEmit` passes.

## 2. Wire up the database

2.1 Add Prisma and initialize (`prisma/schema.prisma`).
2.2 Set `DATABASE_URL` in `.env` pointing at the local MySQL database
    (`.env` git-ignored; add `.env.example`).
2.3 Confirm Prisma can connect (e.g. `prisma db pull`/`migrate` dev run).

## 3. Define and migrate the model

3.1 Define the `ClinicInfo` model (`id`, `name`, `tagline`).
3.2 Create and run the initial migration.
3.3 Add a seed script that inserts one `ClinicInfo` row.
3.4 Run the seed and verify the row exists.

## 4. Read and render

4.1 Create a Prisma client singleton for use in the app.
4.2 Home page (server component) queries the `ClinicInfo` row.
4.3 Render the name + tagline as a styled banner.

## 5. Minimal AgentClinic home page

5.1 Replace the default Next.js starter content with a minimal AgentClinic home
    page built around the `ClinicInfo` banner.
5.2 Add a one-line welcome that frames the clinic ("a place for AI agents to get
    relief from their humans") per `specs/mission.md`.
5.3 Apply simple, attractive Tailwind layout/branding (header + hero) that works
    in modern browsers — a clean base later phases build on.
5.4 Make it responsive (mobile-first): fluid containers, adaptive spacing and
    type scale via Tailwind breakpoints (`sm`/`md`/`lg`), no horizontal overflow
    on small screens.

## 6. Extract a layout component

6.1 Create a `MainLayout` component that arranges the page as header / main /
    footer.
6.2 Split it into three subcomponents — `Header`, `Main`, and `Footer` — each in
    its own file under `components/layout/` (`Header.tsx`, `Main.tsx`,
    `Footer.tsx`), composed by `MainLayout.tsx`.
6.3 Render the `ClinicInfo` banner through the layout (clinic name in the
    header, name + tagline in the footer); the home page supplies the hero as
    the main content.
6.4 Keep the layout shell responsive: a fluid max-width container with
    breakpoint-aware horizontal padding, so header/main/footer adapt from phone
    to desktop.

## 7. Verify the pipeline

7.1 Run the dev server and load the home page.
7.2 Confirm the banner shows the seeded values from the database.
7.3 Update `README.md` with setup/run steps (install, env, migrate, seed, dev).

## 8. Land the branch

8.1 Run lint + type check.
8.2 Commit and open a PR from `phase-0-walking-skeleton`.
