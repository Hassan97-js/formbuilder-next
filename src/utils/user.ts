"use server";

import { hashPassword } from "./hash";
import db from "./prisma";

export async function getUserByEmail(email: string) {
  if (!email) {
    return null;
  }

  try {
    const user = await db.user.findUnique({
      where: {
        email
      }
    });

    return user;
  } catch (error) {
    return null;
  }
}

export async function saveUserToDB(email: string, password: string) {
  if (!email || !password) {
    return null;
  }

  try {
    const hash = await hashPassword(password);

    console.log(hash);

    const newUser = await db.user.create({
      data: {
        email,
        password: hash
      }
    });

    return newUser;
  } catch (error) {
    return null;
  }
}
