import { type ReactNode } from "react";

type TProps = {
  children: ReactNode;
};

function FormBuilderLayout({ children }: TProps) {
  return <div className="flex w-full flex-1 mx-auto">{children}</div>;
}

export default FormBuilderLayout;
