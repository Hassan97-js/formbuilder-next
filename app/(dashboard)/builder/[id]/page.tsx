type TProps = {
  params: {
    id: string;
  };
};

export default function FormBuilderByIdPage({ params: { id } }: TProps) {
  console.log(id);

  return <div>Form Builder By Id Page</div>;
}
