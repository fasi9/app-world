import Link from "next/link";
import type { AnchorHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-cyan text-navy hover:bg-cyan/90 focus-visible:outline-cyan",
  secondary:
    "border border-current text-foreground hover:bg-foreground/5 focus-visible:outline-foreground",
  ghost: "text-foreground hover:opacity-70 focus-visible:outline-foreground",
};

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: Variant;
  external?: boolean;
}

export function ButtonLink({
  href,
  variant = "primary",
  external,
  className = "",
  children,
  ...rest
}: ButtonLinkProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold tracking-tight transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";
  const classes = `${base} ${variantClasses[variant]} ${className}`;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...rest}>
      {children}
    </Link>
  );
}
