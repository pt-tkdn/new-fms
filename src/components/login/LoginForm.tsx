"use client";

import { Button } from "#/shared/components/ui/button";
import { Checkbox } from "#/shared/components/ui/checkbox";
import { Input } from "#/shared/components/ui/input";
import { Label } from "#/shared/components/ui/label";
import { useRouter } from "next/navigation";

const LoginForm: React.FC = () => {
  const router = useRouter();
  return (
    <form
      className="relative mt-9 space-y-4"
      onSubmit={(e) => {
        e.preventDefault();
        router.push("/");
      }}
    >
      <div className="space-y-2">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <Input name="email" id="email" type="email" />
      </div>
      <div className="space-y-2">
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700"
        >
          Password
        </label>
        <Input name="password" id="password" type="password" />
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <Label htmlFor="terms" className="opacity-50 font-semibold">
          Remember Password
        </Label>
      </div>
      <Button type="submit" className="w-full">
        Login
      </Button>
    </form>
  );
};

export default LoginForm;
