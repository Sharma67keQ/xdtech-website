import Link from "next/link";
import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  href?: string;
}

export function Button({ variant = "primary", className = "", href, ...props }: ButtonProps) {
  const base = "btn-base";
  const styles = {
    primary:
      "bg-gradient-to-r from-lab-purple via-lab-blue to-lab-purple text-white shadow-glow hover:shadow-neon",
    secondary:
      "border border-white/15 bg-white/5 text-white hover:border-lab-blue hover:bg-white/10",
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
