import { useDraggable } from "@dnd-kit/core";

import { Button } from "@/components/ui/button";
import { TFormBuilderElement } from "../form-builder-elements";
import { cn } from "@/utils";

type TProps = {
  formElement: TFormBuilderElement;
};

function SidebarButtonElement({ formElement }: TProps) {
  const { Icon, label } = formElement.designerButton;

  const { setNodeRef, listeners, attributes, isDragging } = useDraggable({
    id: `designer-button-${formElement.type}`,
    data: {
      type: formElement.type,
      isDesignerButtonElement: true
    }
  });

  return (
    <Button
      ref={setNodeRef}
      variant="outline"
      className={cn("cursor-grab gap-1 w-max h-max py-3 px-5", {
        "cursor-grabbing ring-2 ring-primary": isDragging
      })}
      {...listeners}
      {...attributes}>
      <Icon className="w-4 h-4 mt-[1px]" />
      <p className="select-none text-xs">{label}</p>
    </Button>
  );
}

export function SidebarButtonDragOverlay({ formElement }: TProps) {
  const { Icon, label } = formElement.designerButton;

  const { setNodeRef } = useDraggable({
    id: `designer-button-${formElement.type}`,
    data: {
      type: formElement.type,
      isDesignerButtonElement: true
    }
  });

  return (
    <Button
      ref={setNodeRef}
      variant="outline"
      className="cursor-grab gap-1 w-max h-max py-3 px-5">
      <Icon className="w-4 h-4 mt-[1px]" />
      <p className="select-none text-xs">{label}</p>
    </Button>
  );
}

export default SidebarButtonElement;
