import { useState } from "react";
import { useDroppable } from "@dnd-kit/core";
import { BiSolidTrash } from "react-icons/bi";

import {
  FormBuilderElements,
  type TDesignerFormElement
} from "./form-builder-elements";
import { Button } from "@/components/ui/button";

import { useDesigner } from "@/context/designer-context";
import { cn } from "@/lib/utils";

type TProps = {
  element: TDesignerFormElement;
};

function DesignerElementWrapper({ element }: TProps) {
  const { removeElement } = useDesigner();

  const [isMouseOver, setIsMouseOver] = useState(false);

  const topHalf = useDroppable({
    id: element.id + "-top",
    data: {
      type: element.type,
      elementId: element.id,
      isTopHalfDesignerElement: true
    }
  });

  const bottomHalf = useDroppable({
    id: element.id + "-bottom",
    data: {
      type: element.type,
      elementId: element.id,
      isBottomHalfDesignerElement: true
    }
  });

  const DesignerElement = FormBuilderElements[element.type].DesignerComponent;

  return (
    <div
      className="relative h-[120px] flex flex-col text-foreground hover:cursor-pointer rounded-md ring-1 ring-accent ring-inset"
      onMouseEnter={() => setIsMouseOver(true)}
      onMouseLeave={() => setIsMouseOver(false)}>
      <div
        ref={topHalf.setNodeRef}
        className="absolute w-full h-1/2 rounded-t-md"
      />
      <div
        ref={bottomHalf.setNodeRef}
        className="absolute w-full h-1/2 bottom-0 rounded-b-md"
      />

      {isMouseOver && (
        <>
          <div className="absolute right-0 h-full">
            <Button
              onClick={() => removeElement(element.id)}
              variant="destructive"
              className="h-full relative z-10 rounded-tl-none rounded-bl-none">
              <BiSolidTrash className="h-4 w-4" />
            </Button>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse">
            <p className="text-white text-sm">
              Click for properties or drag to move
            </p>
          </div>
        </>
      )}
      <div
        className={cn(
          "flex items-center w-full h-[7.5rem] rounded-md bg-accent/40 px-4 py-2 pointer-events-none opacity-100",
          {
            "opacity-30": isMouseOver
          }
        )}>
        <DesignerElement element={element} />
      </div>
    </div>
  );
}

export default DesignerElementWrapper;
