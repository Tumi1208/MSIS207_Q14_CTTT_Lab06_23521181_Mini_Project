"use client";

import { motion } from "framer-motion";
import { fadeIn, fadeUp, scaleIn, reducedVariants } from "@/lib/motion";
import { useReducedMotionPref } from "@/hooks/useReducedMotionPref";
import { cn } from "@/lib/utils";

const variantMap = {
  fadeUp,
  fadeIn,
  scaleIn,
};

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  variant?: keyof typeof variantMap;
  delay?: number;
};

export default function Reveal({
  children,
  className,
  variant = "fadeUp",
  delay = 0,
}: RevealProps) {
  const reduced = useReducedMotionPref();
  const variants = reduced ? reducedVariants : variantMap[variant];

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={cn(className)}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
