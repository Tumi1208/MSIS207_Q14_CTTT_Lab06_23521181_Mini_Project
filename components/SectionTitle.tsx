import { cn } from "@/lib/utils";
import Badge from "./Badge";

type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        "space-y-3",
        align === "center" ? "text-center items-center flex flex-col" : ""
      )}
    >
      {eyebrow ? (
        <Badge variant="soft" className="tracking-wide">
          {eyebrow}
        </Badge>
      ) : null}
      <h2 className="text-3xl sm:text-4xl font-bold leading-tight">{title}</h2>
      {description ? (
        <p className="max-w-2xl text-base sm:text-lg text-slate-600">
          {description}
        </p>
      ) : null}
    </div>
  );
}
