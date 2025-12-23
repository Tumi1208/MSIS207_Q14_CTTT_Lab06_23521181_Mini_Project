type DecorativeProps = {
  variant?: "zigzag" | "halo";
  className?: string;
  floating?: boolean;
};

export default function Decorative({
  variant = "zigzag",
  className,
  floating = true,
}: DecorativeProps) {
  const motionClass = floating ? "float-slow" : "";
  if (variant === "halo") {
    return (
      <svg
        className={`${motionClass} ${className ?? ""}`}
        viewBox="0 0 300 300"
        fill="none"
        aria-hidden
      >
        <circle
          cx="150"
          cy="150"
          r="120"
          stroke="url(#halo)"
          strokeWidth="18"
          strokeDasharray="12 18"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id="halo" x1="0" y1="0" x2="300" y2="300">
            <stop stopColor="#8ee0bf" />
            <stop offset="1" stopColor="#4fb98f" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  return (
    <svg
      className={`${motionClass} ${className ?? ""}`}
      viewBox="0 0 160 40"
      fill="none"
      role="presentation"
    >
      <path
        d="M2 20c14-16 27 16 41 0s27 16 41 0 27 16 41 0 27 16 41 0"
        stroke="#65c89f"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}
