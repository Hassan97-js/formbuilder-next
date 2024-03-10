"use client";

import { type ReactNode, createContext, useState, useContext } from "react";
import { type TDesignerFormElement } from "@/components/builder/form-builder-elements";

type TProps = {
  children: ReactNode;
};

type TDesignerContext = {
  elements: TDesignerFormElement[];
  addElement: (element: TDesignerFormElement) => void;
  removeElement: (elementId: string) => void;
};

export const DesignerContext = createContext<TDesignerContext | null>(null);

export function DesignerContextProvider({ children }: TProps) {
  const [elements, setElements] = useState<TDesignerFormElement[]>([]);

  function handleAddElement(element: TDesignerFormElement) {
    setElements((prevElements) => {
      const elementsCopy = [...prevElements];
      elementsCopy.push(element);

      return elementsCopy;
    });
  }

  function handleRemoveElement(elementId: string) {
    setElements((prevElements) => {
      return prevElements.filter((el) => el.id !== elementId);
    });
  }

  const contextValue = {
    elements,
    addElement: handleAddElement,
    removeElement: handleRemoveElement
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
