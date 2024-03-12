"use server";

import { unstable_noStore as noStore, revalidatePath } from "next/cache";

import db from "@/utils/prisma";

import {
  createFormSchema,
  type TCreateForm
} from "@/constants/validators/form.validator";

import { getCurrentUser } from "../user";

export async function getFormStats() {
  noStore();

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
  let bounceRate = 0;

  if (visits > 0) {
    submissionsRate = Math.round((submissions / visits) * 100);
  }

  if (submissionsRate > 0) {
    bounceRate = 100 - submissionsRate;
  }

  return {
    submissions,
    visits,
    submissionsRate,
    bounceRate
  };
}

export async function createForm(values: TCreateForm) {
  try {
    const parsedValues = createFormSchema.safeParse(values);

    if (!parsedValues.success) {
      console.log(parsedValues.error.flatten());
      throw new Error("Invalid create form inputs");
    }

    const user = await getCurrentUser();

    if (!user) {
      throw new Error("Unauthorized");
    }

    const { name, description } = parsedValues.data;

    const form = await db.form.findFirst({
      where: {
        userId: user.id,
        name
      }
    });

    if (form) {
      throw new Error("Form name must be unique");
    }

    const newForm = await db.form.create({
      data: {
        userId: user.id,
        name,
        description
      }
    });

    if (!newForm) {
      throw new Error("Could not create the form");
    }

    revalidatePath("/");

    return newForm.id;
  } catch (error) {
    console.error(error);
    if (error instanceof Error) {
      throw error;
    }

    throw new Error("Internal Server Error");
  }
}

export async function getForms() {
  noStore();

  try {
    const user = await getCurrentUser();

    if (!user) {
      throw new Error("Unauthorized");
    }

    const forms = await db.form.findMany({
      where: {
        userId: user.id
      },
      orderBy: {
        createdAt: "desc"
      }
    });

    return forms;
  } catch (error) {
    console.error(error);

    throw new Error("Internal Server Error");
  }
}

export async function getFormById(id: string) {
  noStore();

  try {
    const user = await getCurrentUser();

    if (!user) {
      throw new Error("Unauthorized");
    }

    const form = await db.form.findUnique({
      where: {
        userId: user.id,
        id
      }
    });

    return form;
  } catch (error) {
    console.error(error);

    throw new Error("Internal Server Error");
  }
}
