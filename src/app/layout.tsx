import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";

import { Providers } from "@/providers";

import { cn } from "@/utils";

import "../styles/globals.css";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans"
});

export const metadata: Metadata = {
  title: "Formify",
  description: "This is a short description of Formify"
};

type TProps = Readonly<{
  children: React.ReactNode;
}>;

function RootLayout({ children }: TProps) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen font-sans antialiased dark",
          fontSans.variable
        )}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

export default RootLayout;
