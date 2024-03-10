"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { redirect, useRouter } from "next/navigation";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

import {
  signInFormSchema,
  type TSignIn
} from "@/constants/validators/auth.validator";

import { signIn } from "next-auth/react";

function SignInForm() {
  const router = useRouter();
  const form = useForm<TSignIn>({
    resolver: zodResolver(signInFormSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  });

  async function handleSignIn(values: TSignIn) {
    try {
      const res = await signIn("credentials", {
        ...values,
        redirect: false
      });

      if (res?.ok) {
        router.push("/");
      } else {
        throw Error("Error: We Can't Sign In to Your Account");
      }
    } catch (error) {
      // Todo: Handle error
      if (error instanceof Error) {
        alert(error.message);
      }
      console.error(error);
    }
  }

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-3"
        onSubmit={form.handleSubmit(handleSignIn)}>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    autoComplete="off"
                    placeholder="name@example.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    autoComplete="off"
                    type="password"
                    placeholder="*******"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />

        <Button className="w-full mt-3">Sign in</Button>
      </form>
    </Form>
  );
}

export default SignInForm;
