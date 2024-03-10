"use client";

import { useDndMonitor, useDroppable } from "@dnd-kit/core";

import DesignerSidebar from "./designer-sidebar";
import {
  FormBuilderElements,
  type TFormBuilderElementTypes
} from "./form-builder-elements";
import DesignerElementWrapper from "./designer-element-wrapper";

import { useDesigner } from "@/context/designer-context";
import generateUUID from "@/utils/generate-uuid";
import { cn } from "@/utils";

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

        addElement(newElement);
      }
    }
  });

  return (
    <div className="flex flex-col-reverse lg:flex-row w-full h-full gap-5 p-6">
      <div
        ref={setNodeRef}
        className={cn(
          "bg-background max-w-[112.5rem] w-full m-auto rounded-xl flex flex-col flex-[2] items-center justify-start overflow-y-auto h-[70.25rem]",
          {
            "ring-2 ring-primary/20": isOver
          }
        )}>
        {!isOver && elements.length === 0 && (
          <p className="text-3xl text-muted-foreground flex items-center justify-center flex-grow font-bold text-center">
            Drop here
          </p>
        )}
        {isOver && (
          <div className="p-4 w-full h-[7.5rem] rounded-md bg-primary/20"></div>
        )}
        {elements.length > 0 && (
          <div className="flex flex-col w-full gap-2 p-5">
            {elements.map((el) => {
              return (
                <DesignerElementWrapper
                  key={el.id}
                  element={el}
                />
              );
            })}
          </div>
        )}
      </div>

      <DesignerSidebar />
    </div>
  );
}

export default Designer;
