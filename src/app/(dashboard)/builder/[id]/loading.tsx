import { TbFidgetSpinner } from "react-icons/tb";

function Loading() {
  return (
    <div className="flex justify-center items-center w-full min-h-screen">
      <TbFidgetSpinner className="animate-spin h-12 w-12" />
    </div>
  );
}

export default Loading;
