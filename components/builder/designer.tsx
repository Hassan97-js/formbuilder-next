"use client";

import { useDroppable } from "@dnd-kit/core";

import DesignerSidebar from "./designer-sidebar";

export default function Designer() {
  const {} = useDroppable({
    id: "designer-drop-area",
    data: {
      isDesignerDropArea: true
    }
  });

  return (
    <div className="flex flex-col-reverse lg:flex-row w-full h-full gap-5 max-h-[68.75rem] p-6">
      <div className="bg-background max-w-[87.5rem] w-full m-auto rounded-xl flex flex-col flex-1 items-center justify-start overflow-y-auto h-full">
        <p className="text-3xl text-muted-foreground flex items-center justify-center flex-grow font-bold text-center">
          Drop here
        </p>
      </div>
      <DesignerSidebar />
    </div>
  );
}
