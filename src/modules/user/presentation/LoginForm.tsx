"use client";

import { useLogin } from "#/modules/user/application/hooks/useLogin";
import { Button } from "#/shared/components/ui/button";
import { Checkbox } from "#/shared/components/ui/checkbox";
import { Input } from "#/shared/components/ui/input";
import { Label } from "#/shared/components/ui/label";
import { useToast } from "#/shared/hooks/use-toast";
import { BaseHttpError, BaseHttpResponse } from "#/shared/utils/httpClient";
import { HTTPError } from "ky";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

const LoginForm: React.FC = () => {
  const router = useRouter();
  const { mutateAsync, isPending } = useLogin();
  const { toast } = useToast();

  const handleSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    try {
      const formData = new FormData(evt.currentTarget);
      const email = formData.get("email") as string;
      const password = formData.get("password") as string;
      const user = await mutateAsync({ email, password });
      router.push("/");
    } catch (error) {
      const err = error as HTTPError<Promise<BaseHttpResponse<BaseHttpError>>>;
      const httpErr = await err.response.json();
      if (httpErr.error) {
        return toast({
          title: "Ooops!",
          description: httpErr.error?.error_message,
        });
      }
      return toast({
        title: "Ooops!",
        description: "An error occurred",
      });
    }
  };

  return (
    <form className="relative mt-9 space-y-4" onSubmit={handleSubmit}>
      <div className="space-y-2">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <Input required name="email" id="email" type="email" />
      </div>
      <div className="space-y-2">
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700"
        >
          Password
        </label>
        <Input required name="password" id="password" type="password" />
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <Label htmlFor="terms" className="opacity-50 font-semibold">
          Remember Password
        </Label>
      </div>
      <Button disabled={isPending} type="submit" className="w-full">
        {isPending ? "Loading..." : "Login"}
      </Button>
    </form>
  );
};

export default LoginForm;
