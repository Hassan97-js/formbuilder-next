import { Button } from "../ui/button";

import { HiSave } from "react-icons/hi";

function SaveFormButton() {
  return (
    <Button
      variant="outline"
      className="gap-2">
      <HiSave className="w-4 h-4 mt-[1px]" />
      Save
    </Button>
  );
}

export default SaveFormButton;
