import bcrypt from "bcrypt";
import { type AuthOptions } from "next-auth";
import { type Adapter } from "next-auth/adapters";
import { PrismaAdapter } from "@auth/prisma-adapter";

import Credentials from "next-auth/providers/credentials";
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";

import db from "@/utils/prisma";

import { getUserByEmail, saveUserToDB } from "@/utils/user";

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
      async authorize(credentials) {
        const user = await getUserByEmail(credentials?.email);

        if (user) {
          const isMatch = bcrypt.compareSync(
            String(credentials?.password),
            String(user.password)
          );

          if (isMatch) {
            return user;
          }

          return null;
        }

        if (!user) {
          const newUser = await saveUserToDB(
            credentials?.email,
            credentials?.password
          );

          return newUser;
        }

        return null;
      }
    })
  ],
  callbacks: {
    jwt({ token, user, account }) {
      if (account) {
        token.id = user.id;
      }

      return token;
    },
    session({ token, session }) {
      if (token.id) {
        session.user.id = token.id;
      }

      return session;
    }
  },
  pages: {
    signIn: "/auth/sign-in",
    error: "/auth/error",
    signOut: "/"
  },
  adapter: PrismaAdapter(db) as Adapter
} satisfies AuthOptions;
