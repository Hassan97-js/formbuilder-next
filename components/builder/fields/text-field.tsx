"use client";

import { MdTextFields } from "react-icons/md";

import {
  type TBuilderElement,
  type TBuilderElementTypes
} from "../form-builder-elements";

const type: TBuilderElementTypes = "TextField";

export const TextField: TBuilderElement = {
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
    icon: MdTextFields,
    label: "Text Field"
  },
  type: "TextField",
  FormComponent: () => <div>Form Component</div>,
  DesignerComponent: () => <div>Designer Component</div>,
  PropertiesComponent: () => <div>Properties Component</div>
};
