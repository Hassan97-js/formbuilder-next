"use client";

import { MdTextFields } from "react-icons/md";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  type TDesignerFormElement,
  type TFormBuilderElement,
  type TFormBuilderElementTypes
} from "../form-builder-elements";

const type: TFormBuilderElementTypes = "TextField";

type TDesignerComponentProps = {
  element: TDesignerFormElement;
};

export const TextField: TFormBuilderElement = {
  construct: (id: string) => ({
    id,
    type,
    otherAttributes: {
      label: "Text field",
      description: "Description text",
      required: false,
      placeholder: "Placeholder text here"
    }
  }),
  designerButton: {
    Icon: MdTextFields,
    label: "Text Field"
  },
  type: "TextField",
  FormComponent,
  DesignerComponent,
  PropertiesComponent
};

function FormComponent() {
  return <div className="text-white">Form Component</div>;
}

function DesignerComponent({ element }: TDesignerComponentProps) {
  const label = element.otherAttributes?.label;
  const isRequired = element.otherAttributes?.required;
  const placeholder = element.otherAttributes?.placeholder;
  const description = element.otherAttributes?.description;

  return (
    <div className="flex flex-col gap-2 w-full">
      <Label className="select-none">
        {label}
        {isRequired && "*"}
      </Label>
      <Input
        required={isRequired}
        readOnly
        disabled
        placeholder={placeholder}
      />
      {description && (
        <p className="text-muted-foreground text-sm ml-[3px] select-none">
          {description}
        </p>
      )}
    </div>
  );
}

function PropertiesComponent() {
  return <div>Properties Component</div>;
}
