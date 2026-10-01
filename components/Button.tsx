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
    "bg-[#A4C4C8] text-zinc-950 font-semibold hover:bg-[#8eb6bb] active:bg-[#7fa7ac] shadow-sm hover:shadow-md transition-all",
  secondary:
    "bg-[#EBF3F4] text-[#1E3639] border border-[#C8DFE2] font-semibold hover:bg-[#DDECEE] transition-colors",
  outline:
    "bg-white/95 text-zinc-900 border border-zinc-200 hover:border-zinc-300 hover:bg-white font-medium shadow-xs transition-all",
  ghost:
    "bg-transparent text-zinc-700 hover:text-zinc-950 hover:bg-zinc-100 transition-colors font-medium",
  dark:
    "bg-[#1E3639] text-white font-semibold hover:bg-[#152729] active:bg-zinc-950 shadow-sm hover:shadow-md transition-all",
};

const sizeStyles: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "text-xs px-3.5 py-1.5 rounded-lg gap-1.5",
  md: "text-sm px-5 py-2.5 rounded-xl gap-2",
  lg: "text-base px-7 py-3.5 rounded-xl gap-2.5",
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
    "inline-flex items-center justify-center font-sans select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A4C4C8] focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none transition-all duration-200 cursor-pointer",
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
