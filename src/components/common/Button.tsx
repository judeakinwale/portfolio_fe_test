import { cn } from "@/lib/utils";
import React from "react";

type ButtonProps = {
  children?: React.ReactNode;
  className?: string;
  variant?:
    | "icon"
    // | "close"
    | "primary"
    | "secondary"
    // | "small"
    // | "large"
    // | "full";
} & React.ComponentPropsWithoutRef<"a">;

const Button = React.forwardRef<HTMLAnchorElement, ButtonProps>(
  ({ children, className, variant, ...props }, ref) => {
    const baseClasses =
      "inline-block px-8 py-4 bg-background border-4 border-accent text-foreground font-archivo text-xl uppercase transition-all duration-150 ease-out disabled:opacity-50 disabled:cursor-not-allowed";

    const variantClasses = () => {
      switch (variant) {
        case "icon":
          return "min-w-8 justify-center gap-2 px-1 hover:bg-white/5 border border-white/10";
        case "primary":
          return "shadow-[6px_6px_0_var(--color-accent)] hover:translate-x-1.5 hover:translate-y-1.5 hover:shadow-none hover:bg-accent hover:text-background";
        case "secondary":
          return "hover:bg-foreground hover:text-background hover:border-foreground";
        default:
          return "";
      }
    };

    return (
      <a
        ref={ref}
        className={cn(`${baseClasses} ${variantClasses()}`, className)}
        {...props}
      >
        {children}
      </a>
    );
  }
);

Button.displayName = "Button";

export default Button;
