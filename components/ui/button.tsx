import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group/button inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm font-body text-xs font-bold uppercase tracking-[0.12em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-secondary text-on-secondary shadow-[0_10px_30px_rgba(3,89,54,0.18)] hover:-translate-y-0.5 hover:bg-primary hover:shadow-[0_14px_34px_rgba(3,89,54,0.28)]",
        outlinePrimary:
          "border border-primary/30 bg-transparent text-primary hover:border-primary hover:bg-primary hover:text-on-primary",
        outlineLight:
          "border border-white/45 bg-white/5 text-white backdrop-blur-sm hover:border-white hover:bg-white hover:text-primary",
        ghost: "text-primary hover:bg-primary/5 hover:text-secondary",
        dark:
          "bg-primary text-on-primary shadow-[0_10px_30px_rgba(1,73,59,0.2)] hover:-translate-y-0.5 hover:bg-primary-deep",
      },
      size: {
        default: "h-11 px-6",
        sm: "h-9 px-4 text-[11px]",
        lg: "h-13 px-7 sm:px-8",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
