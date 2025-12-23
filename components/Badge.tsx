import { cn } from "@/lib/utils";

type BadgeProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "solid" | "soft" | "outline";
};

export default function Badge({
  children,
  className,
  variant = "solid",
}: BadgeProps) {
  const base =
    "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide";

  const styles: Record<NonNullable<BadgeProps["variant"]>, string> = {
    solid: "bg-emerald-500 text-white shadow-sm",
    soft: "bg-emerald-100 text-emerald-800 border border-emerald-200",
    outline:
      "border border-emerald-500/50 text-emerald-700 bg-white/70 backdrop-blur",
  };

  return <span className={cn(base, styles[variant], className)}>{children}</span>;
}
