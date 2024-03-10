import bcrypt from "bcrypt";

export async function hashPassword(password: string) {
  if (!password) {
    return null;
  }

  try {
    const salt = 10;
    const hashed = await bcrypt.hash(password, salt);

    return hashed;
  } catch (error) {
    return null;
  }
}
