"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Animate a slight scale-in as well as fade/translate — used for hero-scale moments. */
  scale?: boolean;
  as?: "div" | "section";
}

/**
 * Fades + slides an element up into view the first time it scrolls into the viewport.
 * Mirrors the `.reveal` class from the original HTML artifact (expo-out easing).
 */
export default function Reveal({ children, className, delay = 0, scale = false, as = "div" }: RevealProps) {
  const reduceMotion = useReducedMotion();
  const Component = motion[as];

  if (reduceMotion) {
    const Static = as;
    return <Static className={className}>{children}</Static>;
  }

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y: 34, scale: scale ? 0.985 : 1 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 1.1, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </Component>
  );
}
