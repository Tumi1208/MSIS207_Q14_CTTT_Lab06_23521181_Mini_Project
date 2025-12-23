"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useReducedMotionPref } from "@/hooks/useReducedMotionPref";
import type { ReactNode } from "react";

export default function Template({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const reduced = useReducedMotionPref();

  const initial = reduced ? false : { opacity: 0, y: 12 };
  const animate = reduced ? {} : { opacity: 1, y: 0 };
  const exit = reduced ? {} : { opacity: 0, y: -10 };

  return (
    <AnimatePresence mode="wait" initial={!reduced}>
      <motion.div
        key={pathname}
        initial={initial}
        animate={animate}
        exit={exit}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
