import { type Form } from "@prisma/client";
import { formatDistance } from "date-fns";
import { Eye, HardDriveUpload } from "lucide-react";
import { BiRightArrowAlt } from "react-icons/bi";
import { FaEdit } from "react-icons/fa";

import { Skeleton } from "../ui/skeleton";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "../ui/card";
import { Badge } from "../ui/badge";

import { getForms } from "@/actions/form.actions";
import { Button } from "../ui/button";
import Link from "next/link";

export function FormCardSkeleton() {
  return <Skeleton className="border-2 border-primary/20 h-48 w-full" />;
}

export async function FormCards() {
  const forms = await getForms();

  return forms.map((form) => {
    return <FormCard key={form.id} form={form} />;
  });
}

export function FormCard({ form }: { form: Form }) {
  return (
    <Card className="min-h-48">
      <CardHeader className="space-y-3">
        <CardTitle className="flex items-center justify-between gap-10 capitalize max-w-full">
          <span className="truncate font-bold">{form.name}</span>
          {form.published && <Badge>Published</Badge>}
          {!form.published && <Badge variant="destructive">Draft</Badge>}
        </CardTitle>

        <CardDescription className="flex items-center justify-between text-muted-foreground text-sm">
          <span>
            {formatDistance(form.createdAt, new Date(), {
              addSuffix: true
            })}
          </span>

          {form.published && (
            <span className="flex items-center gap-2">
              <Eye className="w-4 h-4" />
              <span>{form.visits.toLocaleString()}</span>

              <HardDriveUpload className="w-4 h-4" />
              <span>{form.submissions.toLocaleString()}</span>
            </span>
          )}
        </CardDescription>
      </CardHeader>

      <CardContent className="truncate text-sm text-muted-foreground">
        {form.description || "No description"}
      </CardContent>

      <CardFooter>
        {form.published && (
          <Button asChild>
            <Link
              className="flex items-center gap-1 w-full"
              href={`/forms/${form.id}`}>
              <span>View submissions</span>{" "}
              <BiRightArrowAlt className="mt-[1px]" />
            </Link>
          </Button>
        )}

        {!form.published && (
          <Button variant="secondary" asChild>
            <Link
              className="flex items-center gap-2 w-full"
              href={`/builder/${form.id}`}>
              <span>Edit form</span> <FaEdit className="mt-[1px]" />
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
