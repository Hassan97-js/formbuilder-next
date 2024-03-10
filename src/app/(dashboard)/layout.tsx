import { type ReactNode } from "react";

import Logo from "@/components/logo";
import NavItems from "@/components/dashboard/nav-items";

type TProps = { children: ReactNode };

function DashboardLayout({ children }: TProps) {
  return (
    <div className="flex flex-col h-full w-full bg-background">
      <nav className="flex justify-between items-center border-b border-border px-4 py-2 min-h-16">
        <Logo />
        <NavItems />
      </nav>

      <main className="flex w-full flex-1 h-full">{children}</main>
    </div>
  );
}

export default DashboardLayout;
