import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full flex flex-col gap-7 justify-center items-center">
      <h2 className="text-5xl font-bold">Not Found</h2>
      <div className="flex flex-col gap-4">
        <h3 className="text-xl font-medium">Form not found</h3>
        <Button asChild>
          <Link href="/">Return to Home</Link>
        </Button>
      </div>
    </div>
  );
}
