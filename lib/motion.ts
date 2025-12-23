import type { Variants } from "framer-motion";

const transition = {
  duration: 0.5,
  ease: [0.22, 1, 0.36, 1],
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: { opacity: 1, scale: 1, transition },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.08,
    },
  },
};

export const hoverLift: Variants = {
  rest: { y: 0, boxShadow: "var(--shadow)", borderColor: "rgba(22,163,74,0.08)" },
  hover: {
    y: -6,
    boxShadow: "0 28px 80px rgba(16, 94, 60, 0.18)",
    borderColor: "rgba(16, 185, 129, 0.35)",
    transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] },
  },
};

export const reducedVariants: Variants = {
  hidden: { opacity: 1, y: 0, scale: 1 },
  visible: { opacity: 1, y: 0, scale: 1 },
};
