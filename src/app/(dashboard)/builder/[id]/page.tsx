import { notFound, redirect } from "next/navigation";

import FormBuilder from "@/components/builder/form-builder";

// import { getFormById } from "@/actions/form.actions";

type TProps = {
  params: {
    id: string;
  };
};

async function FormBuilderByIdPage({ params: { id } }: TProps) {
  // const form = await getFormById(id);

  // if (!form) {
  //   return notFound();
  // }

  // return <FormBuilder form={form} />;

  return <div>Form Builder</div>;
}

export default FormBuilderByIdPage;
