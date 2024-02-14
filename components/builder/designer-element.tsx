import { type TDesignerFormElement } from "./form-builder-elements";

type TProps = {
  element: TDesignerFormElement;
};

function DesignerElement({ element }: TProps) {
  console.log(element);

  return <div>Designer Element</div>;
}

export default DesignerElement;
