import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Optional ref forwarding */
  ref?: React.Ref<HTMLButtonElement>;
}

/**
 * Thin wrapper around <button> that forwards all native props and refs.
 * Styles are always passed via `className` — this component adds none of its own.
 * Use this instead of a bare <button> so we have a single extensible surface.
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, type = "button", ...props }, ref) => {
    return (
      <button ref={ref} type={type} className={cn(className)} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;

