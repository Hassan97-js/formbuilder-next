"use client";

import { Button } from "../ui/button";

import { signOut } from "next-auth/react";

function NavItems() {
  return (
    <div className="flex items-center gap-5">
      {/* <button>User Button</button> */}

      <Button
        onClick={() => signOut({ callbackUrl: "/auth/sign-in" })}
        variant="outline">
        Sign out
      </Button>
    </div>
  );
}

export default NavItems;
