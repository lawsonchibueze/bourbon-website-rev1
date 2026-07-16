import Link from "next/link";
import { ArrowDownRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { SiteImage } from "@/components/ui/site-image";

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
}: {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <section className="relative isolate min-h-[520px] overflow-hidden bg-primary-deep text-white lg:min-h-[610px]">
      <SiteImage
        src={image}
        alt={imageAlt}
        wrapperClassName="absolute inset-0 -z-10"
        className="scale-[1.02]"
        loading="eager"
        fetchPriority="high"
        sizes="100vw"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(1,47,40,0.96)_0%,rgba(1,73,59,0.78)_45%,rgba(1,73,59,0.23)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-primary-deep/75 to-transparent" />
      <div className="container-grid flex min-h-[520px] items-center pb-16 pt-28 lg:min-h-[610px] lg:pt-32">
        <Reveal className="max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-9 bg-secondary" />
            <span className="eyebrow text-white/65">{eyebrow}</span>
          </div>
          <h1 className="mt-6 max-w-3xl font-heading text-4xl font-bold leading-[1.02] tracking-[-0.045em] sm:text-5xl lg:text-[68px]">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-white/72 lg:text-lg lg:leading-8">
            {description}
          </p>
        </Reveal>
      </div>
      <Link
        href="#page-content"
        className="absolute bottom-7 right-6 hidden items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-white/60 transition-colors hover:text-white sm:flex lg:right-12"
      >
        Explore <ArrowDownRight className="h-4 w-4 text-secondary" />
      </Link>
    </section>
  );
}
