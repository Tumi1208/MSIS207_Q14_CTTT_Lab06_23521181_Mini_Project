import { type LucideIcon } from "lucide-react";
import Icon from "./Icon";
import { cn } from "@/lib/utils";

type FeaturePillProps = {
  icon: LucideIcon;
  label: string;
  className?: string;
  size?: number;
};

export default function FeaturePill({
  icon,
  label,
  className,
  size = 18,
}: FeaturePillProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-sm font-semibold text-emerald-800",
        "dark:border-emerald-200/20 dark:bg-emerald-300/10 dark:text-emerald-100",
        className
      )}
    >
      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/70 ring-1 ring-emerald-200/60 dark:bg-emerald-100/5">
        <Icon icon={icon} size={size} className="translate-y-[0.5px]" />
      </span>
      {label}
    </span>
  );
}
