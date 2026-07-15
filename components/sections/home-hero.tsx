import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";

const operatingPrinciples = [
  ["01", "Scope clarity"],
  ["02", "Safety-led planning"],
  ["03", "Coordinated delivery"],
  ["04", "Responsive communication"],
];

export default function HomeHero() {
  return (
    <section className="relative isolate min-h-[720px] overflow-hidden bg-primary-deep text-white lg:min-h-[790px]">
      <Image
        src="/images/marine-hero-v2.png"
        alt="Modern offshore support vessel approaching an industrial port at dawn"
        fill
        loading="eager"
        fetchPriority="high"
        sizes="100vw"
        className="hero-drift -z-20 object-cover object-[65%_center]"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(4,19,33,0.97)_0%,rgba(4,19,33,0.84)_38%,rgba(4,19,33,0.22)_78%,rgba(4,19,33,0.08)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-64 bg-gradient-to-t from-primary-deep via-primary-deep/70 to-transparent" />
      <div className="technical-grid absolute inset-y-0 left-0 -z-10 w-[46%] opacity-25" />

      <div className="container-grid flex min-h-[620px] items-center pb-16 pt-20 lg:min-h-[670px] lg:pt-24">
        <Reveal className="max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-secondary" />
            <span className="eyebrow text-white/65">
              Marine &amp; Offshore Support
            </span>
          </div>
          <h1 className="mt-7 max-w-3xl font-heading text-[44px] font-bold leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-[78px]">
            Keeping offshore operations moving.
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-7 text-white/72 sm:text-lg sm:leading-8">
            We coordinate marine support, project logistics, and technical
            services around the needs of offshore and industrial operations—from
            early planning through field execution.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="primary" size="lg">
              <Link href="/services">
                Explore capabilities <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outlineLight" size="lg">
              <Link href="/contact">
                Discuss a requirement <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </Reveal>
      </div>

      <div className="container-grid relative pb-8 lg:pb-10">
        <div className="grid border-y border-white/15 bg-primary-deep/40 backdrop-blur-md sm:grid-cols-2 lg:grid-cols-4">
          {operatingPrinciples.map(([number, label]) => (
            <div
              key={label}
              className="flex items-center gap-4 border-white/15 px-5 py-5 sm:[&:nth-child(odd)]:border-r lg:border-r lg:last:border-r-0"
            >
              <span className="font-heading text-sm font-bold text-secondary">
                {number}
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.13em] text-white/68">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
