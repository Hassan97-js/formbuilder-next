"use client";

import { type ReactNode } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

import { type ThemeProviderProps } from "next-themes/dist/types";

export default function ContextProviders({
  children,
  themeProps
}: {
  themeProps: ThemeProviderProps;
  children: ReactNode;
}) {
  return <NextThemesProvider {...themeProps}>{children}</NextThemesProvider>;
}
