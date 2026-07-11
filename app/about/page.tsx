"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Target, Eye, Gem, ShieldCheck, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SiteImage } from "@/components/ui/site-image";
import { Reveal, RevealStagger, revealItem } from "@/components/motion/reveal";

const pillars = [
  {
    icon: Target,
    title: "Our Mission",
    desc: "To provide world-class offshore energy services through innovative engineering and a relentless focus on operational efficiency and safety.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    desc: "To be the global benchmark for sustainable offshore operations, leading the transition toward safer and smarter energy logistics.",
  },
  {
    icon: Gem,
    title: "Our Values",
    list: [
      "Technical Integrity",
      "Unwavering Safety",
      "Client Accountability",
      "Environmental Respect",
    ],
  },
];

const certifications = ["ISO 9001", "ISO 14001", "OHSAS 18001", "IMCA MEMBER"];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary-deep py-28 text-white lg:py-36">
        <SiteImage
          src="/stitch/stitch-11.jpg"
          alt="Offshore oil rigs at dusk representing Bourbon Energy Services operations"
          overlay="left"
          wrapperClassName="absolute inset-0"
          priority
        />
        <div className="container-grid relative max-w-3xl">
          <Reveal>
            <Badge variant="red">Established Leadership</Badge>
            <h1 className="font-heading mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight lg:text-6xl">
              BUILT ON EXPERTISE.
              <br />
              <span className="text-secondary">DRIVEN BY SAFETY.</span>
            </h1>
            <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-white/70">
              For over three decades, Bourbon Energy Services has pioneered
              mission-critical offshore operations, delivering uncompromising
              engineering precision to the global energy sector.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link href="/services">
                <Button variant="primary" size="lg">
                  Our Capabilities
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outlineLight" size="lg">
                  Contact an Expert
                </Button>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Decades of excellence */}
      <section className="container-grid grid grid-cols-1 gap-12 py-24 lg:grid-cols-2 lg:gap-16 lg:py-32">
        <Reveal>
          <div className="border-l-2 border-secondary pl-5">
            <h2 className="font-heading text-3xl font-bold leading-tight text-primary lg:text-4xl">
              Decades of Industrial Excellence
            </h2>
          </div>
          <p className="mt-6 text-[15px] leading-relaxed text-on-surface-variant">
            Founded at the intersection of maritime heritage and energy
            innovation, Bourbon Energy Services emerged as a response to the
            growing technical demands of offshore exploration. We recognized
            that the industry required more than just labor: it required a
            strategic partner capable of managing complex logistics with
            surgical precision.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-on-surface-variant">
            We don&apos;t just provide services; we build the infrastructure of
            modern energy, ensuring that every bolt, weld, and operation meets
            the highest international standards of industrial integrity.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-6 max-w-xs">
            <div>
              <p className="font-heading text-4xl font-extrabold text-primary">
                30+
              </p>
              <p className="label-tag mt-2 text-outline">Years Experience</p>
            </div>
            <div>
              <p className="font-heading text-4xl font-extrabold text-primary">
                500+
              </p>
              <p className="label-tag mt-2 text-outline">Projects Completed</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="relative">
          <SiteImage
            src="/stitch/stitch-12.jpg"
            alt="Bourbon Energy Services field crew on deck"
            wrapperClassName="aspect-[4/5] w-full rounded-lg"
          />
          <div className="absolute -bottom-6 -left-6 hidden max-w-xs bg-primary p-6 text-white shadow-lg sm:block">
            <p className="font-heading text-lg italic leading-snug">
              &ldquo;Precision is our baseline. Safety is our
              non-negotiable.&rdquo;
            </p>
          </div>
        </Reveal>
      </section>

      {/* Core Pillars */}
      <section className="bg-surface-container py-24 lg:py-32">
        <div className="container-grid">
          <Reveal className="mb-14 text-center">
            <span className="label-tag text-secondary">Our Foundation</span>
            <h2 className="font-heading mt-3 text-3xl font-bold text-primary lg:text-4xl">
              The Core Pillars
            </h2>
            <div className="mx-auto mt-4 h-[2px] w-14 bg-secondary" />
          </Reveal>

          <RevealStagger className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {pillars.map((p) => (
              <motion.div
                key={p.title}
                variants={revealItem}
                className="bg-surface-container-lowest p-8"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded bg-primary">
                  <p.icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="font-heading mt-6 text-xl font-bold text-primary">
                  {p.title}
                </h3>
                {p.desc && (
                  <p className="mt-3 text-sm leading-relaxed text-on-surface-variant">
                    {p.desc}
                  </p>
                )}
                {p.list && (
                  <ul className="mt-3 space-y-2">
                    {p.list.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-sm text-on-surface-variant"
                      >
                        <span className="h-1 w-1 rounded-full bg-secondary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* HSE */}
      <section className="container-grid py-24 lg:py-32">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <span className="label-tag text-secondary">
              Commitment to Excellence
            </span>
            <h2 className="font-heading mt-3 text-3xl font-bold leading-tight text-primary lg:text-[34px]">
              HSE &amp; Environmental Responsibility
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-on-surface-variant">
              At Bourbon Energy Services, Health, Safety, and Environment (HSE)
              are not merely regulatory requirements; they are the foundation of
              our operational philosophy. We operate under a
              &ldquo;Zero-Harm&rdquo; mandate, ensuring that every team member
              returns home safely and every ecosystem we touch remains
              preserved.
            </p>

            <div className="mt-8 space-y-6">
              <div className="flex gap-4 border-t border-outline-variant/50 pt-6">
                <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-secondary" />
                <div>
                  <h4 className="font-heading text-base font-bold text-primary">
                    Rigorous Compliance
                  </h4>
                  <p className="mt-1 text-sm leading-relaxed text-on-surface-variant">
                    Continuous auditing and adherence to ISO 45001 and ISO 14001
                    international standards across all global operations.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 border-t border-outline-variant/50 pt-6">
                <Leaf className="mt-1 h-5 w-5 shrink-0 text-secondary" />
                <div>
                  <h4 className="font-heading text-base font-bold text-primary">
                    Decarbonization Initiatives
                  </h4>
                  <p className="mt-1 text-sm leading-relaxed text-on-surface-variant">
                    Investing in hybrid-electric vessel technology and optimized
                    route planning to reduce our carbon footprint by 30% by
                    2030.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {certifications.map((c) => (
                <span
                  key={c}
                  className="rounded-sm border border-outline-variant bg-surface-container-lowest px-4 py-2 label-tag text-on-surface-variant"
                >
                  {c}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15} className="grid grid-cols-2 gap-4">
            <SiteImage
              src="/stitch/stitch-13.jpg"
              alt="Mooring operations aboard a Bourbon Energy Services vessel"
              wrapperClassName="col-span-2 aspect-[16/9] rounded"
            />
            <div className="flex aspect-square flex-col items-start justify-end bg-primary p-5 text-white">
              <p className="font-heading text-lg font-bold">1.2M</p>
              <p className="label-tag mt-1 text-white/70">Safe Man-Hours</p>
            </div>
            <SiteImage
              src="/stitch/stitch-14.jpg"
              alt="Offshore wind turbines supported by Bourbon Energy Services"
              wrapperClassName="aspect-square rounded"
            />
            <div className="col-span-2 flex items-center justify-between bg-secondary p-5 text-white">
              <p className="font-heading text-lg font-bold tracking-wide">
                ZERO INCIDENTS
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-24 text-center text-white lg:py-28">
        <Reveal className="container-grid">
          <h2 className="font-heading mx-auto max-w-2xl text-3xl font-extrabold leading-tight lg:text-5xl">
            EXPERIENCE INDUSTRIAL PRECISION
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[15px] text-white/70">
            Partner with a leader that prioritizes your project&apos;s integrity
            as much as you do. Let&apos;s discuss your offshore requirements.
          </p>
          <Link href="/contact" className="mt-9 inline-block">
            <Button variant="primary" size="lg">
              Start a Consultation
            </Button>
          </Link>
        </Reveal>
      </section>
    </>
  );
}
