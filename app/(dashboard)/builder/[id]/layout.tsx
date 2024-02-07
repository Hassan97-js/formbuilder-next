import { type ReactNode } from "react";

type TProps = {
  children: ReactNode;
};

export default function FormBuilderLayout({ children }: TProps) {
  return <div>{children}</div>;
}
