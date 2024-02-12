"use client";

import { useDroppable } from "@dnd-kit/core";

import DesignerSidebar from "./designer-sidebar";

import { cn } from "@/lib/utils";
import { type TDesignerFormElement } from "./form-builder-elements";

export default function Designer() {
  const { setNodeRef, isOver } = useDroppable({
    id: "designer-drop-area",
    data: {
      isDesignerDropArea: true
    }
  });

  return (
    <div className="flex flex-col-reverse lg:flex-row w-full h-full gap-5 max-h-[68.75rem] p-6">
      <div
        ref={setNodeRef}
        className={cn(
          "bg-background max-w-[87.5rem] w-full m-auto rounded-xl flex flex-col flex-1 items-center justify-start overflow-y-auto h-full",
          {
            "ring-2 ring-primary/20": isOver
          }
        )}>
        {!isOver && (
          <p className="text-3xl text-muted-foreground flex items-center justify-center flex-grow font-bold text-center">
            Drop here
          </p>
        )}
        {isOver && (
          <div className="p-4 w-full h-[7.5rem] rounded-md bg-primary/20"></div>
        )}
      </div>

      <DesignerSidebar />
    </div>
  );
}
