import { notFound, redirect } from "next/navigation";

import FormBuilder from "@/components/builder/form-builder";

import { getFormById } from "@/utils/actions/builder";

type TProps = {
  params: {
    id: string;
  };
};

async function FormBuilderPage({ params: { id } }: TProps) {
  const form = await getFormById(id);

  if (!form) {
    return notFound();
  }

  return <FormBuilder form={form} />;
}

export default FormBuilderPage;
