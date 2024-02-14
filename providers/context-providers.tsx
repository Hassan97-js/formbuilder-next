"use client";

import { type ReactNode } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

import { type ThemeProviderProps } from "next-themes/dist/types";

type TContextProvidersProps = {
  themeProps: ThemeProviderProps;
  children: ReactNode;
};

function ContextProviders({ children, themeProps }: TContextProvidersProps) {
  return <NextThemesProvider {...themeProps}>{children}</NextThemesProvider>;
}

export default ContextProviders;
