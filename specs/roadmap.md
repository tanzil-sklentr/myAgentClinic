# Roadmap

Sliced into **very small, vertical phases**. Each phase ships one thin,
end-to-end, demoable feature — from UI to database — building toward the
booking-first mission.

**Cross-cutting:** every phase's UI is **responsive by default** — built
mobile-first with Tailwind breakpoints so it works from phone to desktop. This
is a standing requirement for all phases, not deferred to the polish phase.

## Phase 0 — Walking skeleton ✅ Complete

- Scaffold Next.js + TypeScript + Tailwind app
- Connect MySQL via Prisma; one trivial model and a page that reads it
- Deploy a "hello clinic" page to confirm the whole pipeline works

## Phase 1 — See therapies

- `Therapy` model (name, description, ailment it addresses)
- Seed a handful of therapies
- Public page listing therapies, styled attractively

## Phase 2 — Book an appointment (the core slice)

Combines ailments, agents, the booking action, and the agent's view of their
bookings into one end-to-end slice — the heart of the product.

- **Ailments:** `Ailment` model; relate therapies to the ailments they treat;
  browse ailments and the therapy that helps each one
- **Agents:** `Agent` model (the patients); simple agent profile page;
  pick/identify the current agent
- **Booking:** `Appointment` model linking an agent + therapy + time; booking
  form on a therapy where an agent picks a slot and books; confirmation page
  showing the booked appointment
- **Agent dashboard:** an agent sees their own upcoming and past appointments,
  and can cancel an appointment

## Phase 3 — Staff dashboard

- Staff view of all appointments (easy access, per Mary)
- Update appointment status (e.g. confirmed / completed)

## Phase 4 — Staff manage therapies

- Staff create/edit/retire therapies and their ailments from the dashboard

## Phase 5 — Polish

- Tighten the visual design for modern browsers (Steve)
- Audit and refine responsive behavior across breakpoints (phone/tablet/desktop)
- End-to-end Playwright test of the booking flow
- Accessibility and empty/error states

> Later (out of v1 scope): auth hardening, notifications, payments, reviews.
