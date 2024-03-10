import { Button } from "../ui/button";
import { MdOutlinePublish } from "react-icons/md";

function PublishFormButton() {
  return (
    <Button
      variant="none"
      className="text-white bg-gradient-to-r from-indigo-500 to-cyan-500 gap-2 bg-[length:300%_100%] transition-all hover:bg-[length:100%_100%] shadow-sm">
      <MdOutlinePublish className="w-4 h-4 mt-[1px]" />
      Publish
    </Button>
  );
}

export default PublishFormButton;
