import { FormBuilderElements } from "./form-builder-elements";
import SidebarButtonElement from "./sidebar/sidebar-button-element";

function DesignerSidebar() {
  return (
    <aside className="lg:max-w-[25rem] flex flex-col flex-grow gap-2 bg-background overflow-y-auto rounded-xl p-4 flex-1">
      <h2 className="font-bold text-base mb-5">Draggable Elements</h2>
      <SidebarButtonElement formElement={FormBuilderElements.TextField} />
    </aside>
  );
}

export default DesignerSidebar;
