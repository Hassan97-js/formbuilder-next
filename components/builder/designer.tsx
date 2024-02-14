"use client";

import { useDndMonitor, useDroppable } from "@dnd-kit/core";

import DesignerSidebar from "./designer-sidebar";
import {
  FormBuilderElements,
  type TFormBuilderElementTypes
} from "./form-builder-elements";

import { useDesigner } from "@/context/designer-context";
import { cn, generateUUID } from "@/lib/utils";

function Designer() {
  const { addElement, elements } = useDesigner();
  const { setNodeRef, isOver } = useDroppable({
    id: "designer-drop-area",
    data: {
      isDesignerDropArea: true
    }
  });

  useDndMonitor({
    onDragEnd: (e) => {
      const { active, over } = e;
      if (!active || !over) {
        return;
      }

      const current = active?.data?.current;
      const isDesignerButton = current?.isDesignerButtonElement;

      if (isDesignerButton) {
        const type = current?.type as TFormBuilderElementTypes;
        const newElement = FormBuilderElements[type].construct(generateUUID());

        addElement(0, newElement);
      }

      console.log("[DRAG-END-EVENT]", e);
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
        {elements.length > 0 && (
          <div className="flex flex-col text-background w-full gap-2 p-4">
            {elements.map((el) => {
              return <DesignerElement key={el.id} element={element} />;
            })}
          </div>
        )}
      </div>

      <DesignerSidebar />
    </div>
  );
}

export default Designer;
