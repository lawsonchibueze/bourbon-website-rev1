import Link from "next/link";
import { cn } from "@/lib/utils";

export function BrandMark({
  inverse = false,
  className,
}: {
  inverse?: boolean;
  className?: string;
}) {
  return (
    <Link
      href="/"
      aria-label="Bourbon Energy Services home"
      className={cn("group inline-flex items-center gap-3", className)}
    >
      <span className="relative grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded-sm bg-secondary text-white shadow-[0_8px_24px_rgba(211,33,45,0.22)]">
        <span className="absolute -left-2 top-1/2 h-px w-14 -rotate-45 bg-white/35" />
        <span className="font-heading text-base font-extrabold tracking-tight">BE</span>
      </span>
      <span className="leading-none">
        <span
          className={cn(
            "block font-heading text-[13px] font-extrabold tracking-[0.08em]",
            inverse ? "text-white" : "text-primary",
          )}
        >
          BOURBON ENERGY
        </span>
        <span
          className={cn(
            "mt-1 block text-[9px] font-semibold uppercase tracking-[0.26em]",
            inverse ? "text-white/55" : "text-on-surface-variant/70",
          )}
        >
          Marine &amp; Offshore Support
        </span>
      </span>
    </Link>
  );
}
