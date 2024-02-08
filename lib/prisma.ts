import { Pool, neonConfig } from "@neondatabase/serverless";

import { PrismaNeon } from "@prisma/adapter-neon";

import { PrismaClient } from "@prisma/client";

// import ws from "ws";
// neonConfig.webSocketConstructor = ws;

function createPrismaClient() {
  const connectionString = `${process.env.DATABASE_URL}`;

  const pool = new Pool({ connectionString });
  const adapter = new PrismaNeon(pool);

  return new PrismaClient({ adapter });
}

declare global {
  var prisma: undefined | ReturnType<typeof createPrismaClient>;
}

const prisma = global.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== "production") {
  global.prisma = prisma;
}

export default prisma;
