"use server";

// import { signIn, signOut } from "@/auth";
// import { AuthError } from "next-auth";
import { redirect } from "next/navigation";

type TProvider = "google" | "github" | "credentials";
type TCredentials = {
  email: string;
  password: string;
};

// export async function signInAction(
//   provider: TProvider,
//   credentials?: TCredentials
// ) {
//   if (provider === "github") {
//     await signIn("github", {
//       redirectTo: "/"
//     });
//   }

//   if (provider === "google") {
//     await signIn("google", {
//       redirectTo: "/"
//     });
//   }

//   try {
//     if (credentials && provider === "credentials") {
//       await signIn("credentials", {
//         ...credentials,
//         redirectTo: "/"
//       });
//     }
//   } catch (error) {
//     if (error instanceof AuthError) {
//       return redirect(`http://localhost:3000/auth/sign-in?error=${error.name}`);
//     }

//     throw error;
//   }
// }

// export async function signOutAction() {
//   await signOut({
//     redirectTo: "/auth/sign-in"
//   });
// }
