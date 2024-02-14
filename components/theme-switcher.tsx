"use client";

import { useTheme } from "next-themes";
import { Monitor, MoonIcon, SunIcon } from "lucide-react";

import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";
import useHasMounted from "../hooks/use-has-mounted";

function ThemeSwitcher() {
  const { setTheme, theme } = useTheme();
  const hasMounted = useHasMounted();

  if (!hasMounted) {
    return null;
  }

  return (
    <Tabs defaultValue={theme}>
      <TabsList className="border">
        <TabsTrigger value="light" onClick={() => setTheme("light")}>
          <SunIcon className="w-[1.2rem] h-[1.2rem]" />
        </TabsTrigger>
        <TabsTrigger value="dark" onClick={() => setTheme("dark")}>
          <MoonIcon className="w-[1.2rem] h-[1.2rem]" />
        </TabsTrigger>
        <TabsTrigger value="system" onClick={() => setTheme("system")}>
          <Monitor className="w-[1.2rem] h-[1.2rem]" />
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
}

export default ThemeSwitcher;
