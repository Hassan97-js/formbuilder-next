import { Button } from "../ui/button";
import { MdOutlinePublish } from "react-icons/md";

export default function PublishFormButton() {
  return (
    <Button
      variant="none"
      className="text-white bg-gradient-to-r from-indigo-500 to-cyan-500 gap-2">
      <MdOutlinePublish className="w-4 h-4 mt-[1px]" />
      Publish
    </Button>
  );
}
