import Link from "next/link";
import { cn } from "@/lib/utils";

export function BrandMark({
  inverse = false,
  className,
}: {
  inverse?: boolean;
  className?: string;
}) {
  const maskId = inverse
    ? "alpha-wordmark-mask-inverse"
    : "alpha-wordmark-mask-default";

  return (
    <Link
      href="/"
      aria-label="Bourbon Energy Services home"
      className={cn(
        "group inline-flex shrink-0 items-center transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-4 focus-visible:ring-offset-surface-bright",
        inverse ? "text-white" : "text-primary",
        className,
      )}
    >
      <svg
        viewBox="197 185 638 497"
        aria-hidden="true"
        className="h-14 w-[72px] overflow-visible sm:h-[60px] sm:w-[77px]"
      >
        <mask
          id={maskId}
          x="197"
          y="185"
          width="638"
          height="497"
          maskUnits="userSpaceOnUse"
          style={{ maskType: "luminance" }}
        >
          <image
            href="/brand/alpha-wordmark-mask.jpeg"
            x="0"
            y="0"
            width="1024"
            height="1024"
          />
        </mask>
        <rect
          x="197"
          y="185"
          width="638"
          height="497"
          fill="currentColor"
          mask={`url(#${maskId})`}
        />
      </svg>
    </Link>
  );
}
