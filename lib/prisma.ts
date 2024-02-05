import { PrismaClient } from "@prisma/client";

function createPrismaClient() {
  return new PrismaClient();
}

declare global {
  var prisma: undefined | ReturnType<typeof createPrismaClient>;
}

const prisma = global.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== "production") {
  global.prisma = prisma;
}

export default prisma;
