import { type IconType } from "react-icons/lib";

import { TextField } from "./fields/text-field";

export type TBuilderElementTypes = "TextField";

export type TBuilderElement = {
  construct: (id: string) => FormElementInstance;
  type: TBuilderElementTypes;
  designerButton: {
    icon: IconType;
    label: string;
  };
  DesignerComponent: React.FunctionComponent;
  FormComponent: React.FunctionComponent;
  PropertiesComponent: React.FunctionComponent;
};

export type FormElementInstance = {
  id: string;
  type: TBuilderElementTypes;
  otherAttributes?: Record<string, unknown>;
};

type TBuilderElements = {
  [key in TBuilderElementTypes]: TBuilderElement;
};

export const FormElements = {
  TextField
} satisfies TBuilderElements;
