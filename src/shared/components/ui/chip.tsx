import type { PropsWithChildren } from "react";

import type { ButtonProps } from "#/shared/components/ui/button";
import { Button } from "#/shared/components/ui/button";
import { cn } from "#/shared/lib/utils";

interface ChipProps extends PropsWithChildren, ButtonProps {}

const Chip: React.FC<ChipProps> = ({ children, className, ...props }) => {
  return (
    <Button
      {...props}
      variant="outline"
      className={cn("rounded-full px-3 py-1 h-auto", className)}
    >
      {children}
    </Button>
  );
};

export { Chip };
