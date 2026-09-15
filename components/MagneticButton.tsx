"use client";

import { ReactNode } from "react";

interface MagneticButtonProps {
  href: string;
  children: ReactNode;
  className?: string;
  variant?: "primary" | "ghost" | "light";
  target?: string;
  rel?: string;
}

export default function MagneticButton({
  href,
  children,
  className = "",
  variant = "primary",
  target,
  rel,
}: MagneticButtonProps) {
  const base =
    "relative inline-flex items-center justify-center gap-2.5 rounded-sm px-8 py-4 text-[12.5px] font-semibold uppercase tracking-[0.14em] transition-colors duration-300";
  const styles =
    variant === "primary"
      ? "bg-ink text-paper hover:bg-accent-deep"
      : variant === "light"
      ? "bg-footer-paper text-footer-ink hover:bg-white"
      : "bg-transparent text-ink border border-ink/25 hover:border-ink";

  return (
    <a href={href} target={target} rel={rel} className={`${base} ${styles} ${className}`}>
      {children}
    </a>
  );
}
