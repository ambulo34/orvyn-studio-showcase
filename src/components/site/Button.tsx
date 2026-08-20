import { Link } from "@tanstack/react-router";
import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

export const actionVariants = cva(
  "group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-300 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        solid:
          "bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground",
        outline:
          "border border-border text-foreground hover:border-foreground/40 hover:bg-surface-2",
        accent: "bg-accent text-accent-foreground hover:brightness-110",
        ghost: "text-foreground hover:text-accent",
      },
      size: {
        md: "h-11 px-6",
        lg: "h-13 px-8 text-[0.95rem]",
      },
    },
    defaultVariants: { variant: "solid", size: "md" },
  },
);

type Variants = VariantProps<typeof actionVariants>;

export function ActionLink({
  to,
  hash,
  href,
  children,
  className,
  variant,
  size,
  ...rest
}: {
  to?: string;
  hash?: string;
  href?: string;
  children: ReactNode;
  className?: string;
} & Variants &
  Omit<ComponentProps<"a">, "href" | "className" | "children">) {
  const classes = cn(actionVariants({ variant, size }), className);
  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }
  const { target: _target, ...linkRest } = rest;
  return (
    <Link to={to ?? "/"} {...(hash ? { hash } : {})} className={classes} {...linkRest}>
      {children}
    </Link>
  );
}

export function ActionButton({
  className,
  variant,
  size,
  ...props
}: ComponentProps<"button"> & Variants) {
  return <button className={cn(actionVariants({ variant, size }), className)} {...props} />;
}
