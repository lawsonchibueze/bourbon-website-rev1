import Link from "next/link";
import Image from "next/image";
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
      className={cn("group inline-flex items-center", className)}
    >
      <span
        className={cn(
          "relative block h-14 w-[92px] shrink-0 overflow-hidden",
          inverse ? "bg-primary-deep" : "bg-surface-bright",
        )}
      >
        <Image
          src="/brand/alpha-logo-on-green.jpeg"
          alt=""
          width={1024}
          height={1024}
          sizes="116px"
          loading={inverse ? "lazy" : "eager"}
          fetchPriority={inverse ? "auto" : "high"}
          className="absolute left-1/2 top-1/2 h-[116px] w-[116px] max-w-none -translate-x-1/2 -translate-y-[48%] object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        />
      </span>
    </Link>
  );
}
