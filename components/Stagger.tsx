"use client";

import { motion } from "framer-motion";
import { staggerContainer, reducedVariants, fadeUp } from "@/lib/motion";
import { useReducedMotionPref } from "@/hooks/useReducedMotionPref";
import { cn } from "@/lib/utils";

type StaggerProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Stagger({ children, className }: StaggerProps) {
  const reduced = useReducedMotionPref();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={cn(className)}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduced = useReducedMotionPref();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={reduced ? reducedVariants : fadeUp}
    >
      {children}
    </motion.div>
  );
}
