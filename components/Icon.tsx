import { type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type IconProps = {
  icon: LucideIcon;
  size?: number;
  strokeWidth?: number;
  className?: string;
};

export default function Icon({
  icon: IconComponent,
  size = 18,
  strokeWidth = 2,
  className,
}: IconProps) {
  return (
    <IconComponent
      aria-hidden
      focusable={false}
      size={size}
      strokeWidth={strokeWidth}
      className={cn(
        "text-emerald-700/80 dark:text-emerald-200/80 transition-colors duration-200",
        "group-hover:text-emerald-800 dark:group-hover:text-emerald-100",
        className
      )}
    />
  );
}
