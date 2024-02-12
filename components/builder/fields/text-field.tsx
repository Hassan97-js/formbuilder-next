"use client";

import { MdTextFields } from "react-icons/md";

import {
  type TFormBuilderElement,
  type TFormBuilderElementTypes
} from "../form-builder-elements";

const type: TFormBuilderElementTypes = "TextField";

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
  FormComponent: () => <div>Form Component</div>,
  DesignerComponent: () => <div>Designer Component</div>,
  PropertiesComponent: () => <div>Properties Component</div>
};
