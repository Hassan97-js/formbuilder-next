import {
  FormBuilderElements,
  type TDesignerFormElement
} from "./form-builder-elements";

type TProps = {
  element: TDesignerFormElement;
};

function DesignerElementWrapper({ element }: TProps) {
  const DesignerElement = FormBuilderElements[element.type].DesignerComponent;

  return (
    <div className="flex items-center w-full h-[7.5rem] rounded-md bg-accent/40 px-4 py-2 pointer-events-none">
      <DesignerElement element={element} />
    </div>
  );
}

export default DesignerElementWrapper;
