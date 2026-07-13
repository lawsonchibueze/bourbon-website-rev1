import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-body text-sm font-semibold uppercase tracking-wider transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-secondary disabled:pointer-events-none disabled:opacity-50 rounded",
  {
    variants: {
      variant: {
        primary: "bg-secondary text-on-secondary hover:bg-[#a91820]",
        outlinePrimary:
          "border border-primary text-primary bg-transparent hover:bg-primary hover:text-on-primary",
        outlineLight:
          "border border-white/60 text-white bg-transparent hover:bg-white hover:text-primary",
        ghost: "text-primary hover:text-secondary",
        dark: "bg-primary text-on-primary hover:bg-primary-deep",
      },
      size: {
        default: "h-11 px-6 text-xs",
        sm: "h-9 px-4 text-xs",
        lg: "h-12 px-8 text-sm",
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
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
