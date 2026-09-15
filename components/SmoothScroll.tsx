"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Inertia-based smooth scrolling for regular wheel/touch scrolling — CSS
 * `scroll-behavior: smooth` alone only covers anchor-link jumps, not everyday
 * scrolling. Also smooths our in-page anchor links (nav, hero CTAs, footer).
 */
export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      autoRaf: true,
      anchors: { offset: -88 },
    });

    return () => lenis.destroy();
  }, []);

  return null;
}
