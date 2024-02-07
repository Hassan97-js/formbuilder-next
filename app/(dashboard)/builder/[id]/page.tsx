import { notFound } from "next/navigation";

import FormBuilder from "@/components/form/form-builder";

import { getFormById } from "@/actions/form.actions";

type TProps = {
  params: {
    id: string;
  };
};

export default async function FormBuilderByIdPage({ params: { id } }: TProps) {
  const form = await getFormById(id);

  if (!form) {
    return notFound();
  }

  return <FormBuilder form={form} />;
}
