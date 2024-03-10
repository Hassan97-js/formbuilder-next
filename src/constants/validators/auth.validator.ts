import { z } from "zod";

export const signInFormSchema = z.object({
  email: z.string().email(),
  password: z.string()
});

export type TSignIn = z.infer<typeof signInFormSchema>;

export const signUpFormSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "Email must be minimun 2 characters long."
    })
    .max(20, {
      message: "Email must be maximum 20 characters long."
    }),
  email: z
    .string()
    .email()
    .min(4, {
      message: "Email must be minimun 4 characters long."
    })
    .max(20, {
      message: "Email must be maximum 20 characters long."
    }),
  password: z
    .string()
    .min(4, {
      message: "Password must be minimun 4 characters long."
    })
    .max(50, {
      message: "Password must be maximum 50 characters long."
    })
});

export type TSignUp = z.infer<typeof signUpFormSchema>;
