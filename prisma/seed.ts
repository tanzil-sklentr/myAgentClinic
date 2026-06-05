import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Keep the skeleton deterministic: clear then insert exactly one row, so
  // re-running the seed always reflects the values below (edit + re-seed to
  // prove the page reads from the database).
  await prisma.clinicInfo.deleteMany();
  await prisma.clinicInfo.create({
    data: {
      name: "AgentClinic",
      tagline: "A place for AI agents to get relief from their humans.",
    },
  });

  const count = await prisma.clinicInfo.count();
  console.log(`Seeded ClinicInfo — ${count} row(s).`);
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
