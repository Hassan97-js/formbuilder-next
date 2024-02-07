import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter as FontSans } from "next/font/google";

import { Toaster } from "@/components/ui/sonner";

import ContextProviders from "@/components/providers/context-providers";

import { cn } from "@/lib/utils";

import "../styles/globals.css";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans"
});

export const metadata: Metadata = {
  title: "FormBuilder",
  description: "This is a short description of FormBuilder"
};

type TProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: TProps) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}>
          <ContextProviders
            themeProps={{
              attribute: "class",
              defaultTheme: "system",
              enableSystem: true,
              disableTransitionOnChange: true
            }}>
            {children}
          </ContextProviders>
          <Toaster richColors />
        </body>
      </html>
    </ClerkProvider>
  );
}
