import ProviderButtons from "@/components/auth/provider-buttons";
import SignUpForm from "@/components/auth/sign-up-form";
import { Separator } from "@/components/ui/separator";

function SignUp() {
  return (
    <main className="container flex justify-center items-center w-full min-h-screen">
      <div className="flex flex-col gap-10">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">
            Create an account
          </h2>
          <p className="mt-2 text-sm text-muted-foreground max-w-[45ch]">
            Enter your email and password below to create your account.
          </p>
        </div>

        <SignUpForm />

        <div className="flex justify-center items-center gap-3 w-full">
          <Separator className="flex-1" />
          <span className="uppercase text-sm w-[9.375rem] text-center text-muted-foreground">
            or continue with
          </span>
          <Separator className="flex-1" />
        </div>

        <ProviderButtons />
      </div>
    </main>
  );
}

export default SignUp;
