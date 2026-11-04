"use client";

import { ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { usePropertyTab } from "@/lib/PropertyTabContext";

interface PropertyContentProps {
  apartment: ReactNode;
  flat: ReactNode;
}

/**
 * Renders exactly one property's content at a time — switching tabs swaps the whole
 * block, it doesn't just scroll to it. Each property gets its own subtle background
 * tint so it's unmistakable which one you're browsing.
 */
export default function PropertyContent({ apartment, flat }: PropertyContentProps) {
  const { active } = usePropertyTab();
  const reduceMotion = useReducedMotion();

  return (
    <div className={active === "flat" ? "bg-[#f8f0d7]" : "bg-linen"}>
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          {active === "apartment" ? apartment : flat}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
