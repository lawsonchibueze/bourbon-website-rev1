import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-sm px-3 py-1 label-tag",
  {
    variants: {
      variant: {
        light: "bg-white/10 text-white border border-white/25",
        dark: "bg-primary-container text-white",
        red: "bg-secondary text-on-secondary",
        outline: "border border-secondary text-secondary",
      },
    },
    defaultVariants: { variant: "light" },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
