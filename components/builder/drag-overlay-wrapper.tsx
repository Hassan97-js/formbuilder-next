import { useState } from "react";
import { type Active, DragOverlay, useDndMonitor } from "@dnd-kit/core";

import { SidebarButtonDragOverlay } from "./sidebar/sidebar-button-element";
import {
  FormBuilderElements,
  TFormBuilderElementTypes
} from "./form-builder-elements";

export default function DragOverlayWrapper() {
  const [draggedItem, setDraggedItem] = useState<null | Active>(null);

  useDndMonitor({
    onDragStart: (e) => {
      setDraggedItem(e.active);
    },
    onDragCancel: () => setDraggedItem(null),
    onDragEnd: () => setDraggedItem(null)
  });

  if (!draggedItem) {
    return null;
  }

  const current = draggedItem?.data?.current;
  const isDesignerElement = current?.isDesignerButtonElement;

  let node = <div>Node drag overlay</div>;

  if (isDesignerElement) {
    const type = draggedItem?.data?.current?.type as TFormBuilderElementTypes;

    node = <SidebarButtonDragOverlay formElement={FormBuilderElements[type]} />;
  }

  return <DragOverlay>{node}</DragOverlay>;
}
