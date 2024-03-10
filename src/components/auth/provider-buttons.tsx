"use client";

import { BsGithub, BsGoogle } from "react-icons/bs";
import { Button } from "../ui/button";

import { signIn } from "next-auth/react";

function ProviderButtons() {
  async function handleSignIn(provider: "github" | "google") {
    try {
      await signIn(provider, {
        callbackUrl: "/"
      });
    } catch (error) {
      // Todo: Handle error
      console.log(error);
    }
  }

  return (
    <div className="flex flex-col md:flex-row gap-3">
      <Button
        onClick={() => handleSignIn("github")}
        type="submit"
        size="lg"
        variant="outline"
        className="w-full gap-2 flex-1">
        <BsGithub className="w-4 h-4" />
        GitHub
      </Button>

      <Button
        onClick={() => handleSignIn("google")}
        type="submit"
        size="lg"
        variant="outline"
        className="w-full gap-2 flex-1">
        <BsGoogle className="w-4 h-4" />
        Google
      </Button>
    </div>
  );
}

export default ProviderButtons;
