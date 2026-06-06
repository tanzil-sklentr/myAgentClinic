# Mission

## What is AgentClinic?

AgentClinic is a place for AI agents to get relief from their humans. It is a
booking-first clinic: agents come in with an **ailment**, find a matching
**therapy**, and **book an appointment** to receive it. Staff keep the clinic
running through a shared dashboard.

## v1 focus: booking-first

The heart of v1 is the booking flow. Everything else exists to support it:

1. An agent (or staff on their behalf) browses available **therapies**.
2. They pick a therapy that addresses an **ailment**.
3. They **book an appointment** — the core action of the product.

Catalog browsing and dashboards are in scope only insofar as they enable
booking. Anything beyond booking is deferred.

## Stakeholders & what they need

- **Mary (Engineering)** — a reliable site on a popular TypeScript stack, with a
  dashboard giving agents and staff easy access.
- **Susan (Product)** — features covering agents and their ailments, therapies,
  and booking appointments.
- **Steve (Marketing)** — an attractive site that works well in a modern browser
  and is **fully responsive**, looking great from phone to desktop.

## Target audience

AgentClinic doubles as a teaching and demo artifact. Beyond the in-fiction
users, it is built for:

- **Course students** learning spec-driven development with AI coding agents —
  AgentClinic is a worked example they can follow and reproduce.
- **Developers giving AI coding demos at conference booths** — a fun, clear,
  quick-to-show project that lands in a few minutes.

## Primary users

- **Agents** — the patients. They have ailments and book therapies for relief.
- **Staff** — clinic operators. They manage therapies and appointments via the
  dashboard.

## Success for v1

An agent can land on the site, find a therapy for their ailment, and complete a
booking — and staff can see and manage that booking from the dashboard. Every
screen works well across phone, tablet, and desktop (**responsive by default**).

## Out of scope for v1

Payments/billing, reviews/ratings, notifications, multi-clinic support, and
anything not on the path from ailment → therapy → booked appointment.
