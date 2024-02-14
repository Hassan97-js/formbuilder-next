"use client";

import { useEffect } from "react";

import { Button } from "@/components/ui/button";
import Link from "next/link";

type TProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

function Error({ error, reset }: TProps) {
  useEffect(() => {
    console.error(error.message);
  }, [error]);

  return (
    <div className="w-full flex flex-col gap-7 justify-center items-center">
      <h2 className="text-red-500/85 text-3xl font-bold">
        Something went wrong!
      </h2>
      <div className="flex gap-3 items-center">
        <Button onClick={() => reset()}>Try again</Button>
        <p>OR</p>
        <Button asChild>
          <Link href="/">Go back to Home</Link>
        </Button>
      </div>
    </div>
  );
}

export default Error;
