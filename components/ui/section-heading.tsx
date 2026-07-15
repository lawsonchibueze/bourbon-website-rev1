import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  inverse = false,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  inverse?: boolean;
  className?: string;
}) {
  return (
    <div className={cn(align === "center" && "mx-auto text-center", className)}>
      <div
        className={cn(
          "flex items-center gap-3",
          align === "center" && "justify-center",
        )}
      >
        {/* <span className="h-px w-8 bg-secondary" /> */}
        {/* <span
          className={cn(
            "eyebrow",
            inverse ? "text-white/65" : "text-secondary",
          )}
        >
          {eyebrow}
        </span> */}
      </div>
      <h2
        className={cn(
          "mt-5 max-w-3xl font-heading text-3xl font-bold leading-[1.12] tracking-[-0.035em] sm:text-4xl lg:text-[48px]",
          inverse ? "text-white" : "text-primary",
          align === "center" && "mx-auto",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-5 max-w-2xl text-[15px] leading-7",
            inverse ? "text-white/65" : "text-on-surface-variant",
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
