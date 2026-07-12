import Image, { ImageProps } from "next/image";
import { cn } from "@/lib/utils";

interface SiteImageProps extends Omit<ImageProps, "alt"> {
  alt: string;
  overlay?: "none" | "bottom" | "full" | "left";
  className?: string;
  wrapperClassName?: string;
}

/**
 * Wraps next/image with the brand's standard gradient overlay treatment
 * (Primary Navy -> Transparent), per DESIGN.md "Image Overlays".
 */
export function SiteImage({
  alt,
  overlay = "none",
  className,
  wrapperClassName,
  fill = true,
  sizes = "100vw",
  ...props
}: SiteImageProps) {
  return (
    <div className={cn("relative overflow-hidden", wrapperClassName)}>
      <Image
        alt={alt}
        fill={fill}
        sizes={sizes}
        className={cn("object-cover", className)}
        {...props}
      />
      {overlay === "bottom" && (
        <div className="absolute inset-0 bg-linear-to-t from-primary-deep/85 via-primary-deep/20 to-transparent" />
      )}
      {overlay === "full" && (
        <div className="absolute inset-0 bg-primary-deep/55" />
      )}
      {overlay === "left" && (
        <div className="absolute inset-0 bg-linear-to-r from-primary-deep/90 via-primary-deep/40 to-transparent" />
      )}
    </div>
  );
}
