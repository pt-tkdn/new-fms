"use client";

import { useFormStatus } from "react-dom";

import { Button } from "#/shared/components/ui/button";

const LoginButton: React.FC = () => {
  const { pending } = useFormStatus();
  console.log("pending", pending);

  return (
    <Button aria-disabled={pending} type="submit" className="w-full">
      {pending ? "Loading..." : "Login"}
    </Button>
  );
};

export default LoginButton;
