"use client";

import { Button } from "#/shared/components/ui/button";
import { useFormStatus } from "react-dom";

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
