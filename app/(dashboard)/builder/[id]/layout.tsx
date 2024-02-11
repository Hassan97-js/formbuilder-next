import { type ReactNode } from "react";

type TProps = {
  children: ReactNode;
};

export default function FormBuilderLayout({ children }: TProps) {
  return <div className="flex w-full flex-1 mx-auto">{children}</div>;
}
