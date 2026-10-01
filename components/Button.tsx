import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "dark";
  size?: "sm" | "md" | "lg";
  target?: string;
  rel?: string;
}

const variantStyles: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-accent text-zinc-950 font-medium hover:bg-accent-hover active:bg-accent-dark transition-colors",
  secondary:
    "bg-surface text-zinc-900 border border-line font-medium hover:bg-zinc-100 transition-colors",
  outline:
    "bg-transparent text-zinc-900 border border-line font-medium hover:bg-surface transition-colors",
  ghost:
    "bg-transparent text-zinc-700 hover:text-zinc-950 hover:bg-surface transition-colors font-medium",
  dark:
    "bg-zinc-900 text-white font-medium hover:bg-zinc-800 active:bg-zinc-950 transition-colors",
};

const sizeStyles: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "text-xs px-3.5 py-1.5 rounded-lg gap-1.5",
  md: "text-sm px-5 py-2.5 rounded-xl gap-2",
  lg: "text-base px-6 py-3 rounded-xl gap-2.5",
};

export const Button = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(function Button(
  {
    href,
    variant = "primary",
    size = "md",
    className,
    children,
    target,
    rel,
    ...props
  },
  ref
) {
  const combinedClassName = cn(
    "inline-flex items-center justify-center font-sans select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none transition-all duration-150",
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");

    if (isExternal) {
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          target={target ?? (href.startsWith("http") ? "_blank" : undefined)}
          rel={rel ?? (href.startsWith("http") ? "noopener noreferrer" : undefined)}
          className={combinedClassName}
        >
          {children}
        </a>
      );
    }

    return (
      <Link
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        className={combinedClassName}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      className={combinedClassName}
      {...props}
    >
      {children}
    </button>
  );
});

export default Button;
