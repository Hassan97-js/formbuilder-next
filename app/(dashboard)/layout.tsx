import { type ReactNode } from "react";
import { UserButton } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

import Logo from "@/components/logo";
import ThemeSwitcher from "@/components/theme-switcher";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen min-w-full bg-background">
      <nav className="flex justify-between items-center border-b  border-border h-[3.75rem] px-4 py-2">
        <Logo />
        <div className="flex items-center gap-5">
          <ThemeSwitcher />
          <div className="w-[1.875rem] h-[1.875rem]">
            <UserButton afterSignOutUrl="/sign-in" />
          </div>
        </div>
      </nav>
      <main className="flex w-full flex-grow">{children}</main>
    </div>
  );
}
