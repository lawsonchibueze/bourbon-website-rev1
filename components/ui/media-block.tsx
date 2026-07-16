import { cn } from "@/lib/utils";

/**
 * Stylised stand-in for photography. Renders a forest/industrial gradient
 * with a fine structural grid + diagonal hatch, matching the brand's
 * "technical schematic" language in place of real photography.
 */
export function MediaBlock({
  className,
  tone = "navy",
  label,
}: {
  className?: string;
  tone?: "navy" | "steel" | "deep" | "red";
  label?: string;
}) {
  const tones: Record<string, string> = {
    navy: "from-[#0b6d50] via-[#035936] to-[#01493b]",
    steel: "from-[#3a4552] via-[#2a323c] to-[#181d22]",
    deep: "from-[#035936] via-[#01493b] to-[#012f28]",
    red: "from-[#138661] via-[#087451] to-[#035936]",
  };

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-gradient-to-br",
        tones[tone],
        className
      )}
    >
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.18]"
        aria-hidden
      >
        <defs>
          <pattern
            id={`grid-${tone}`}
            width="28"
            height="28"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 28 0 L 0 0 0 28"
              fill="none"
              stroke="white"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#grid-${tone})`} />
      </svg>
      <svg
        className="absolute -bottom-8 -right-8 h-2/3 w-2/3 opacity-[0.12]"
        viewBox="0 0 200 200"
        aria-hidden
      >
        <circle cx="100" cy="100" r="90" fill="none" stroke="white" strokeWidth="1" />
        <circle cx="100" cy="100" r="60" fill="none" stroke="white" strokeWidth="1" />
        <line x1="0" y1="100" x2="200" y2="100" stroke="white" strokeWidth="1" />
        <line x1="100" y1="0" x2="100" y2="200" stroke="white" strokeWidth="1" />
      </svg>
      {label && (
        <span className="absolute bottom-3 left-3 label-tag text-white/40">
          {label}
        </span>
      )}
    </div>
  );
}
