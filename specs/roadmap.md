# Roadmap

Sliced into **very small, vertical phases**. Each phase ships one thin,
end-to-end, demoable feature — from UI to database — building toward the
booking-first mission.

## Phase 0 — Walking skeleton

- Scaffold Next.js + TypeScript + Tailwind app
- Connect MySQL via Prisma; one trivial model and a page that reads it
- Deploy a "hello clinic" page to confirm the whole pipeline works

## Phase 1 — See therapies

- `Therapy` model (name, description, ailment it addresses)
- Seed a handful of therapies
- Public page listing therapies, styled attractively

## Phase 2 — See ailments

- `Ailment` model; relate therapies to the ailments they treat
- Browse ailments and the therapy that helps each one

## Phase 3 — Agents exist

- `Agent` model (the patients)
- Simple agent profile page; pick/identify the current agent

## Phase 4 — Book an appointment (the core slice)

- `Appointment` model linking an agent + therapy + time
- Booking form on a therapy: agent picks a slot and books
- Confirmation page showing the booked appointment

## Phase 5 — Agent dashboard

- An agent sees their own upcoming and past appointments
- Cancel an appointment

## Phase 6 — Staff dashboard

- Staff view of all appointments (easy access, per Mary)
- Update appointment status (e.g. confirmed / completed)

## Phase 7 — Staff manage therapies

- Staff create/edit/retire therapies and their ailments from the dashboard

## Phase 8 — Polish

- Tighten the visual design for modern browsers (Steve)
- End-to-end Playwright test of the booking flow
- Accessibility and empty/error states

> Later (out of v1 scope): auth hardening, notifications, payments, reviews.
