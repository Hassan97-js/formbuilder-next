import { type ReactNode } from "react";

import Logo from "@/components/logo";
import NavItems from "@/components/dashboard/nav-items";

type TProps = { children: ReactNode };

function DashboardLayout({ children }: TProps) {
  return (
    <div className="flex flex-col min-h-screen min-w-full bg-background">
      <nav className="flex justify-between items-center border-b  border-border h-[3.75rem] px-4 py-2">
        <Logo />
        <NavItems />
      </nav>
      <main className="flex w-full flex-grow">{children}</main>
    </div>
  );
}

export default DashboardLayout;
