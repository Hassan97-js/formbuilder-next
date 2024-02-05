"use server";

import { currentUser as getCurrentUser } from "@clerk/nextjs";

import prisma from "@/lib/prisma";

export async function getFormStats() {
  const user = await getCurrentUser();

  if (!user) {
    throw new Error("Unauthorized");
  }

  const stats = await prisma?.form.aggregate({
    _sum: {
      visits: true,
      submissions: true
    },
    where: {
      userId: user.id
    }
  });

  const visits = stats?._sum.visits || 0;
  const submissions = stats?._sum.submissions || 0;

  let submissionsRate = 0;

  if (visits > 0) {
    submissionsRate = Math.round((submissions / visits) * 100);
  }

  const bounceRate = 100 - submissionsRate;

  return {
    submissions,
    visits,
    submissionsRate,
    bounceRate
  };
}
