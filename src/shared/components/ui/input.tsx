import * as React from "react";

import { cn } from "#/shared/lib/utils";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "block w-full rounded-md border border-slate-200 bg-white px-2 py-3 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-primary placeholder:text-slate-500 focus:ring-primary focus:outline-none focus:ring-offset-1 focus:ring-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
