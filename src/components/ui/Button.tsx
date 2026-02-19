import Link from "next/link";
import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  href?: string;
}

export function Button({ variant = "primary", className = "", href, ...props }: ButtonProps) {
  const base = "btn-base";
  const styles = {
    primary: "bg-brand-blue text-slate-950 hover:bg-blue-400",
    secondary: "border border-slate-700 bg-slate-950/40 text-slate-100 hover:border-brand-blue",
    ghost: "text-slate-300 hover:text-white"
  };

  const classes = `${base} ${styles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {props.children}
      </Link>
    );
  }

  return <button className={classes} {...props} />;
}
