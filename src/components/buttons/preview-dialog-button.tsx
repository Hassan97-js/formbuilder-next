import { Eye } from "lucide-react";

import { Button } from "../ui/button";

function PreviewDialogButton() {
  return (
    <Button
      variant="outline"
      className="gap-2">
      <Eye className="w-4 h-4 mt-[1px]" />
      Preview
    </Button>
  );
}

export default PreviewDialogButton;
