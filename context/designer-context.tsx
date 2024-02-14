"use client";

import { type ReactNode, createContext, useState, useContext } from "react";
import { type TDesignerFormElement } from "@/components/builder/form-builder-elements";

type TProps = {
  children: ReactNode;
};

type TDesignerContext = {
  elements: TDesignerFormElement[];
  addElement: (index: number, element: TDesignerFormElement) => void;
};

export const DesignerContext = createContext<TDesignerContext | null>(null);

export function DesignerContextProvider({ children }: TProps) {
  const [elements, setElements] = useState<TDesignerFormElement[]>([]);

  function handleAddElement(index: number, element: TDesignerFormElement) {
    setElements((prevElements) => {
      const elementsCopy = [...prevElements];
      elementsCopy.splice(index, 0, element);

      return elementsCopy;
    });
  }

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

export function useDesigner() {
  const context = useContext(DesignerContext);

  if (!context) {
    throw Error("useDesigner must be used within DesignerContext Provider");
  }

  return context;
}
