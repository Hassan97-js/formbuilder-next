"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { BsFileEarmarkPlus } from "react-icons/bs";
import { TbFidgetSpinner } from "react-icons/tb";
import { toast } from "sonner";
import { useState } from "react";

import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "./ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

import { createForm } from "@/actions/form.actions";
import {
  createFormSchema,
  type TCreateForm
} from "@/constants/validators/form.validator";

function CreateFormButton() {
  const [isOpen, setIsOpen] = useState(false);

  const form = useForm<TCreateForm>({
    resolver: zodResolver(createFormSchema),
    defaultValues: {
      name: "",
      description: ""
    }
  });

  async function handleCreateForm(values: TCreateForm) {
    try {
      // const formId = await createForm(values);
      await createForm(values);

      toast.success("Form has been created", {
        dismissible: true,
        position: "top-right"
      });

      setIsOpen(false);

      form.reset();
      // router.push(`/builder/${formId}`);
    } catch (error) {
      if (error instanceof Error) {
        return toast.error(error.message, {
          dismissible: true,
          position: "top-right"
        });
      }

      toast.error("Something went wrong, Please try again later", {
        dismissible: true,
        position: "top-right"
      });
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="group border border-primary/20 h-full w-full items-center justify-center flex flex-col hover:border-primary border-dashed gap-4 py-12">
          <BsFileEarmarkPlus className="h-8 w-8 text-muted-foreground group-hover:text-primary" />
          <p className="font-bold text-base md:text-lg text-muted-foreground group-hover:text-primary">
            Create New Form
          </p>
        </Button>
      </DialogTrigger>
      <DialogContent onInteractOutside={() => form.reset()}>
        <DialogHeader>
          <DialogTitle>Create form</DialogTitle>
          <DialogDescription>Start collecting feedback</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleCreateForm)}
            className="flex flex-col gap-3">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea {...field} rows={5} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />

            <Button
              type="submit"
              disabled={form.formState.isSubmitting}
              className="w-full mt-2">
              {form.formState.isSubmitting ? (
                <TbFidgetSpinner className="animate-spin" />
              ) : (
                "Save"
              )}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default CreateFormButton;
