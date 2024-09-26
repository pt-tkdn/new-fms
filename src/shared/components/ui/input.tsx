import * as React from "react";

import { cn } from "#/shared/lib/utils";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, prefix, suffix, ...props }, ref) => {
    return (
      <div
        className={cn(
          "group flex w-full h-11 gap-x-4 bg-white items-center border border-slate-200 rounded-md px-4 focus-within:text-primary focus-within:ring-2 focus-within:outline-none focus-within:ring-offset-0 focus-within:ring-primary",
          className
        )}
      >
        {prefix ? prefix : null}
        <input
          type={type}
          className="w-full outline-none bg-inherit text-slate-900"
          ref={ref}
          {...props}
        />
        {suffix ? suffix : null}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
