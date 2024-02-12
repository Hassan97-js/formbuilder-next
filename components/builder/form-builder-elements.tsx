import { InputHTMLAttributes } from "react";
import { IconType } from "react-icons/lib";

import { TextField } from "./fields/text-field";

export type TFormBuilderElementTypes = "TextField";

export type TFormBuilderElement = {
  construct: (id: string) => TDesignerFormElement;
  type: TFormBuilderElementTypes;
  designerButton: {
    Icon: IconType;
    label: string;
  };
  DesignerComponent: React.FunctionComponent;
  FormComponent: React.FunctionComponent;
  PropertiesComponent: React.FunctionComponent;
};

export type TDesignerFormElement = {
  id: string;
  type: TFormBuilderElementTypes;
  otherAttributes?: InputHTMLAttributes<HTMLInputElement>;
};

type TFormBuilderElements = {
  [key in TFormBuilderElementTypes]: TFormBuilderElement;
};

export const FormBuilderElements = {
  TextField
} satisfies TFormBuilderElements;
