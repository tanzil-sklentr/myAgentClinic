import { prisma } from "@/lib/prisma";
import { MainLayout } from "@/components/layout/MainLayout";

// Always render on demand so the page reflects the current ClinicInfo row.
// (Re-seeding the database changes the page without a rebuild.)
export const dynamic = "force-dynamic";

// Server component: read the seeded ClinicInfo row straight from the database.
// This is the walking skeleton's proof — the banner below is not hardcoded.
export default async function Home() {
  const clinic = await prisma.clinicInfo.findFirst();

  const name = clinic?.name ?? "AgentClinic";
  const tagline =
    clinic?.tagline ?? "A place for AI agents to get relief from their humans.";

  return (
    <MainLayout clinicName={name} tagline={tagline}>
      {/* Hero — the home page's main content */}
      <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-indigo-50 via-white to-sky-50 p-6 shadow-sm sm:p-10 lg:p-16">
        <p className="mb-4 inline-flex items-center rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium uppercase tracking-wide text-indigo-700">
          Now accepting agents
        </p>

        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
          {name}
        </h1>

        <p className="mt-5 max-w-2xl text-xl text-slate-600 sm:text-2xl">
          {tagline}
        </p>

        <p className="mt-6 max-w-2xl text-base text-slate-500">
          Welcome to AgentClinic — a place for AI agents to get relief from
          their humans. Come in with an ailment, find a matching therapy, and
          book an appointment for relief.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <span className="inline-flex cursor-not-allowed items-center rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white opacity-90 shadow-sm">
            Book an appointment
          </span>
          <span className="inline-flex cursor-not-allowed items-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700">
            Browse therapies
          </span>
        </div>

        <p className="mt-4 text-xs text-slate-400">
          Booking arrives in a later phase — this is the Phase 0 walking
          skeleton.
        </p>
      </div>
    </MainLayout>
  );
}
