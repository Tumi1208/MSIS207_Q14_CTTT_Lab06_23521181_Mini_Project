import Link from "next/link";
import { cn } from "@/lib/utils";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  href?: string;
};

export default function Card({ children, className, href }: CardProps) {
  const classes = cn(
    "glass rounded-3xl border border-emerald-100/80 p-6 shadow-xl ring-1 ring-white/60",
    "hover-lift",
    href ? "cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-300/60 focus:ring-offset-4 focus:ring-offset-white" : "",
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return <div className={classes}>{children}</div>;
}
