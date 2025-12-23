import { cn } from "@/lib/utils";

type DividerProps = {
  className?: string;
};

export default function Divider({ className }: DividerProps) {
  return (
    <div
      className={cn(
        "h-px w-full bg-gradient-to-r from-transparent via-emerald-200 to-transparent",
        className
      )}
    />
  );
}
