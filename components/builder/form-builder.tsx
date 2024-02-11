"use client";

import { DndContext } from "@dnd-kit/core";
import { Form as TForm } from "@prisma/client";

import Designer from "./designer";
import PreviewDialogButton from "../buttons/preview-dialog-button";
import SaveFormButton from "../buttons/save-form-button";
import PublishFormButton from "../buttons/publish-form-button";

type TProps = {
  form: TForm;
};

export default function FormBuilder({ form }: TProps) {
  return (
    <div className="flex flex-col w-full">
      <nav className="flex justify-between border-b-2 p-4 gap-3 items-center h-[4.6875rem]">
        <h2 className="truncate font-medium">
          <span className="text-muted-foreground mr-2">Form:</span>
          {form.name}
        </h2>
        <div className="flex items-center gap-2">
          <PreviewDialogButton />
          {!form.published && (
            <>
              <SaveFormButton />
              <PublishFormButton />
            </>
          )}
        </div>
      </nav>
      <div className="flex w-full flex-1 items-center justify-center relative h-[12.5rem] bg-accent bg-[url(/paper.svg)] dark:bg-[url(/paper-dark.svg)]">
        <DndContext>
          <Designer />
        </DndContext>
      </div>
    </div>
  );
}
