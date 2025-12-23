"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { useReducedMotionPref } from "@/hooks/useReducedMotionPref";
import { cn } from "@/lib/utils";

type MotionButtonProps = {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  loading?: boolean;
};

const transition = {
  duration: 0.4,
  ease: [0.22, 1, 0.36, 1],
};

export default function MotionButton({
  children,
  className,
  href,
  onClick,
  type = "button",
  disabled = false,
  loading = false,
}: MotionButtonProps) {
  const [hovered, setHovered] = useState(false);
  const reducedMotion = useReducedMotionPref();
  const isDisabled = disabled || loading;
  const showHighlight = hovered && !isDisabled && !reducedMotion;

  const content = (
    <div
      className={cn(
        "group relative inline-flex min-w-0 items-center justify-center overflow-hidden rounded-full cursor-pointer select-none",
        "transition-colors duration-200",
        isDisabled ? "cursor-not-allowed" : "",
        className
      )}
      onMouseEnter={() => !isDisabled && setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <AnimatePresence>
        {showHighlight ? (
          <motion.span
            layoutId="button-hover-bg"
            className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-100/80 via-emerald-50 to-emerald-100/70 shadow-[0_16px_40px_rgba(49,160,118,0.25)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition }}
            exit={{ opacity: 0, transition: { duration: 0.25, ease: "easeOut" } }}
          />
        ) : null}
      </AnimatePresence>

      <span
        className={cn(
          "relative z-10 flex items-center gap-2 font-semibold",
          reducedMotion
            ? "transition-none"
            : "transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:text-emerald-900"
        )}
      >
        {children}
      </span>
    </div>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="inline-block"
        aria-disabled={isDisabled}
        tabIndex={isDisabled ? -1 : undefined}
      >
        {content}
      </Link>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      className="inline-block"
      whileTap={reducedMotion || isDisabled ? undefined : { scale: 0.985 }}
    >
      {content}
    </motion.button>
  );
}
