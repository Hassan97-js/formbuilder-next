import { type InputHTMLAttributes } from "react";
import { type IconType } from "react-icons/lib";

import { TextField } from "./fields/text-field";

export type TFormBuilderElementTypes = "TextField";

export type TFormBuilderElement = {
  construct: (id: string) => TDesignerFormElement;
  type: TFormBuilderElementTypes;
  designerButton: {
    Icon: IconType;
    label: string;
  };
  DesignerComponent: React.FunctionComponent<{
    element: TDesignerFormElement;
  }>;
  FormComponent: React.FunctionComponent;
  PropertiesComponent: React.FunctionComponent;
};

export type TDesignerFormElement = {
  id: string;
  type: TFormBuilderElementTypes;
  otherAttributes?: InputHTMLAttributes<HTMLInputElement> & {
    label: string;
    description: string;
  };
};

type TFormBuilderElements = {
  [key in TFormBuilderElementTypes]: TFormBuilderElement;
};

export const FormBuilderElements = {
  TextField
} satisfies TFormBuilderElements;
