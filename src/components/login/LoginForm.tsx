"use client";

import { Checkbox } from "#/shared/components/ui/checkbox";
import { Input } from "#/shared/components/ui/input";
import { Label } from "#/shared/components/ui/label";
import { useRouter } from "next/navigation";

const LoginForm: React.FC = () => {
  const router = useRouter();
  return (
    <form
      className="mt-9 space-y-4"
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
      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
