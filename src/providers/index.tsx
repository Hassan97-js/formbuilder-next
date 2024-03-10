"use client";

import { type ReactNode } from "react";

import { Toaster } from "@/components/ui/sonner";

type TContextProvidersProps = {
  children: ReactNode;
};

export function Providers({ children }: TContextProvidersProps) {
  return (
    <>
      {children}
      <Toaster richColors />
    </>
  );
}
