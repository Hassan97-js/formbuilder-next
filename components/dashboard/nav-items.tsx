"use client";

import { UserButton } from "@clerk/nextjs";

import ThemeSwitcher from "../theme-switcher";

function NavItems() {
  return (
    <div className="flex items-center gap-5">
      <ThemeSwitcher />
      <div className="w-[1.875rem] h-[1.875rem]">
        <UserButton afterSignOutUrl="/sign-in" />
      </div>
    </div>
  );
}

export default NavItems;
