"use client";

import { type ReactNode, createContext, useState } from "react";
import { type TDesignerFormElement } from "@/components/builder/form-builder-elements";

type TProps = {
  children: ReactNode;
};

type TDesignerContext = {
  elements: TDesignerFormElement[];
  addElement: (index: number, element: TDesignerFormElement) => void;
};

export const DesignerContext = createContext<TDesignerContext | null>(null);

export default function DesignerContextProvider({ children }: TProps) {
  const [elements, setElements] = useState<TDesignerFormElement[]>([]);

  // Todo: Continue with handleAddElement
  function handleAddElement(index: number, element: TDesignerFormElement) {}

  const contextValue = {
    elements,
    addElement: handleAddElement
  } satisfies TDesignerContext;

  return (
    <DesignerContext.Provider value={contextValue}>
      {children}
    </DesignerContext.Provider>
  );
}
