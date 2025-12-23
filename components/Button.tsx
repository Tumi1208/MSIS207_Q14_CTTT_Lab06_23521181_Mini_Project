import { cn } from "@/lib/utils";
import MotionButton from "./MotionButton";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "ghost";
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  loading?: boolean;
  disabled?: boolean;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all duration-150 pressable";

const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-emerald-500 text-white shadow-lg shadow-emerald-200 hover:bg-emerald-600 hover:-translate-y-0.5",
  ghost:
    "border border-emerald-300/70 text-emerald-800 bg-white/80 hover:bg-emerald-50/80",
};

export default function Button({
  children,
  className,
  variant = "primary",
  href,
  onClick,
  type = "button",
  loading = false,
  disabled = false,
}: ButtonProps) {
  const isDisabled = disabled || loading;
  const classes = cn(
    base,
    variants[variant],
    isDisabled ? "opacity-70 pointer-events-none" : "",
    className
  );

  return (
    <MotionButton
      className={classes}
      href={href}
      onClick={onClick}
      type={type}
      disabled={isDisabled}
      loading={loading}
    >
      {loading ? (
        <>
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-current/40 border-t-current" />
          {children}
        </>
      ) : (
        children
      )}
    </MotionButton>
  );
}
