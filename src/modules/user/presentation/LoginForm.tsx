"use client";

import { login } from "#/modules/user/application/actions/session";
import { useUserActions } from "#/modules/user/application/hooks/useUserStore";
import { User } from "#/modules/user/domain/entities/user";
import { Button } from "#/shared/components/ui/button";
import { Checkbox } from "#/shared/components/ui/checkbox";
import { Input } from "#/shared/components/ui/input";
import { Label } from "#/shared/components/ui/label";
import { ActionResult } from "#/shared/core/application/actionResult";
import { useToast } from "#/shared/hooks/use-toast";
import { HttpError } from "#/shared/utils/httpClient";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { useFormState, useFormStatus } from "react-dom";

const LoginForm: React.FC = () => {
  const [state, loginAction] = useFormState(
    login,
    null as unknown as ActionResult<User, HttpError>,
  );
  const [isChecked, setIsChecked] = useState(false);
  const router = useRouter();
  const { toast } = useToast();
  const { setUser } = useUserActions();

  useEffect(() => {
    if (state) {
      if (state.isSuccess) {
        router.push("/");
        setUser(state.data);
      }

      if (state.isFailure) {
        toast({
          title: "Terjadi kesalahan",
          description: state.error.message,
          variant: "destructive",
        });
      }
    }
  }, [router, setUser, state, toast]);

  return (
    <form className="relative mt-9 space-y-4" action={loginAction}>
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
        <Checkbox
          checked={isChecked}
          onClick={() => setIsChecked((checked) => !checked)}
          defaultChecked="indeterminate"
          name="remember-me"
          id="remember-me"
        />
        <Label htmlFor="remember-me" className="opacity-50 font-semibold">
          Remember Password
        </Label>
      </div>

      <LoginButton />
    </form>
  );
};

const LoginButton: React.FC = () => {
  const { pending } = useFormStatus();

  return (
    <Button aria-disabled={pending} type="submit" className="w-full">
      {pending ? "Loading..." : "Login"}
    </Button>
  );
};

export default LoginForm;
