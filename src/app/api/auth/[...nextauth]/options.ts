import { type AuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";

export const authOptions = {
  session: {
    strategy: "jwt"
  },
  providers: [
    Github({
      clientId: process.env.AUTH_GITHUB_ID!,
      clientSecret: process.env.AUTH_GITHUB_SECRET!
    }),
    Google({
      clientId: process.env.AUTH_GOOGLE_ID!,
      clientSecret: process.env.AUTH_GOOGLE_SECRET!
    }),
    Credentials({
      name: "Credentials",
      credentials: {
        email: {
          label: "Name",
          placeholder: "John Doe",
          type: "text"
        },
        password: {
          label: "Password",
          placeholder: "******",
          type: "password"
        }
      },
      authorize(credentials) {
        // Todo: Get user from DB
        const user = {
          id: "1",
          name: "Hassan",
          email: "hassan@dev.com",
          password: "123123"
        };

        if (
          credentials?.email === user.email &&
          credentials.password === user.password
        ) {
          return user;
        }

        return null;
      }
    })
  ],
  pages: {
    signIn: "/auth/sign-in",
    error: "/auth/error",
    signOut: "/"
  }
} satisfies AuthOptions;
