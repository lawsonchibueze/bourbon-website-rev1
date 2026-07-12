"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Anchor, Fuel, Factory } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MediaBlock } from "@/components/ui/media-block";
import { SiteImage } from "@/components/ui/site-image";
import { Reveal, RevealStagger, revealItem } from "@/components/motion/reveal";
import HomeHero from "@/components/sections/home-hero";

const solutions = [
  {
    n: "01",
    title: "Offshore Marine Support",
    desc: "Advanced vessel operations for deep-water exploration and production support.",
    icon: Anchor,
    tone: "deep" as const,
    image: "/stitch/stitch-10.jpg",
  },
  {
    n: "02",
    title: "Oil & Gas Logistics",
    desc: "Seamless supply chain management and technical procurement for complex energy projects.",
    icon: Fuel,
    tone: "navy" as const,
    image: "/stitch/stitch-09.jpg",
  },
  {
    n: "03",
    title: "Industrial & Energy Solutions",
    desc: "Integrated maintenance and technical services for onshore energy infrastructure.",
    icon: Factory,
    tone: "deep" as const,
    image: "/stitch/stitch-06.jpg",
  },
];

const stats = [
  { value: "10+", label: "Years of Expertise" },
  { value: "50+", label: "Global Projects" },
  { value: "24/7", label: "Operational Support" },
  { value: "100%", label: "Safety Compliance" },
];

const insights = [
  {
    date: "March 12, 2024",
    title: "The Future of Marine Logistics in Renewable Energy",
    desc: "Exploring how offshore support vessels are adapting to the growing offshore wind sector.",
    image: "/stitch/stitch-01.jpg",
  },
  {
    date: "February 28, 2024",
    title: "Optimizing Fuel Efficiency for Deep-Water Fleets",
    desc: "New AI-driven routing protocols are helping our fleet reduce emissions and operational costs.",
    image: "/stitch/stitch-12.jpg",
  },
  {
    date: "January 15, 2024",
    title: "Safety Benchmarks for 2024 Operations",
    desc: "Our updated safety framework targets zero-incident performance across all industrial sites.",
    image: "/stitch/stitch-02.jpg",
  },
];

export default function Home() {
  return (
    <>
      <HomeHero />

      {/* Legacy of Reliability */}
      <section className="container-grid grid grid-cols-1 gap-12 py-24 lg:grid-cols-2 lg:gap-16 lg:py-32">
        <Reveal>
          <span className="label-tag text-secondary">
            Established Excellence
          </span>
          <h2 className="font-heading mt-4 text-3xl font-bold leading-tight text-primary lg:text-[40px] lg:leading-[1.1]">
            A Legacy of Reliability in Challenging Environments
          </h2>
          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-on-surface-variant">
            Bourbon Energy Services provides specialized marine and logistical
            support for the global energy industry. From deep-water exploration
            to industrial infrastructure maintenance, our technical expertise
            ensures your operations remain safe, efficient, and uninterrupted.
          </p>
          <Link href="/about" className="mt-8 inline-block">
            <Button variant="outlinePrimary" size="lg">
              Learn About Us
            </Button>
          </Link>
        </Reveal>
        <Reveal delay={0.15}>
          <SiteImage
            src="/stitch/stitch-27.jpg"
            alt="Bourbon Energy Services technical crew reviewing field operations plans"
            wrapperClassName="aspect-[4/3] w-full rounded-lg"
          />
        </Reveal>
      </section>

      {/* Core Solutions */}
      <section className="bg-surface-container py-24 lg:py-32">
        <div className="container-grid">
          <Reveal className="mb-14 text-center">
            <span className="label-tag text-secondary">What We Do</span>
            <h2 className="font-heading mt-3 text-3xl font-bold text-primary lg:text-4xl">
              Core Solutions
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[15px] text-on-surface-variant">
              Tailored engineering and marine support services designed for the
              rigors of the modern energy landscape.
            </p>
          </Reveal>

          <RevealStagger className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {solutions.map((s) => (
              <motion.div key={s.n} variants={revealItem}>
                <SolutionCard {...s} />
              </motion.div>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* Precision by the numbers */}
      <section className="bg-primary py-20 text-white lg:py-24">
        <div className="container-grid text-center">
          <Reveal>
            <span className="label-tag text-on-primary-container">
              By the Numbers
            </span>
            <h2 className="font-heading mt-3 text-3xl font-bold lg:text-4xl">
              Precision by the Numbers
            </h2>
            <div className="mx-auto mt-4 h-[2px] w-14 bg-secondary" />
          </Reveal>
          <RevealStagger className="mt-14 grid grid-cols-2 gap-10 lg:grid-cols-4">
            {stats.map((s) => (
              <motion.div key={s.label} variants={revealItem}>
                <p className="font-heading text-4xl font-extrabold text-secondary lg:text-5xl">
                  {s.value}
                </p>
                <p className="label-tag mt-3 text-white/70">{s.label}</p>
              </motion.div>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* Case Study */}
      <section className="grid grid-cols-1 lg:grid-cols-2">
        <Reveal>
          <SiteImage
            src="/stitch/stitch-26.jpg"
            alt="Offshore support vessel operating in the Gulf of Mexico"
            wrapperClassName="h-full min-h-[420px] w-full"
          />
        </Reveal>
        <Reveal
          delay={0.1}
          className="flex items-center bg-surface-container-low"
        >
          <div className="px-8 py-16 lg:px-16">
            <span className="label-tag text-secondary">Case Study</span>
            <h3 className="font-heading mt-4 text-2xl font-bold leading-tight text-primary lg:text-[28px]">
              Offshore Logistics Support: Gulf Expansion Project
            </h3>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-on-surface-variant">
              Successfully managed the end-to-end logistical chain for a major
              deep-water drilling operation, reducing turnaround times by 15%
              through precision vessel scheduling and technical coordination.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-6 border-t border-outline-variant/50 pt-6 max-w-sm">
              <div>
                <p className="label-tag text-outline">Location</p>
                <p className="mt-1 text-sm font-medium text-on-surface">
                  Gulf of Mexico
                </p>
              </div>
              <div>
                <p className="label-tag text-outline">Scope</p>
                <p className="mt-1 text-sm font-medium text-on-surface">
                  Technical Marine Support
                </p>
              </div>
            </div>
            <Link
              href="/projects"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:gap-3 transition-all"
            >
              View Project Case Study <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </section>

      {/* Quote band */}
      <section className="relative overflow-hidden bg-primary-deep py-24 text-center text-white lg:py-32">
        <SiteImage
          src="/stitch/stitch-05.jpg"
          alt="Offshore platform silhouetted at dusk"
          overlay="full"
          wrapperClassName="absolute inset-0"
          className="opacity-60"
        />
        <Reveal className="container-grid relative">
          <p className="font-heading mx-auto max-w-3xl text-2xl font-bold italic leading-snug lg:text-4xl">
            &ldquo;Safety is not a department. It is how we operate.&rdquo;
          </p>
          <div className="mx-auto mt-6 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-secondary" />
            <span className="label-tag text-white/60">
              Our Commitment to Zero Harm
            </span>
            <span className="h-px w-10 bg-secondary" />
          </div>
        </Reveal>
      </section>

      {/* Technical Insights */}
      <section className="container-grid py-24 lg:py-32">
        <Reveal className="mb-12 flex items-end justify-between">
          <div>
            <span className="label-tag text-secondary">Insights</span>
            <h2 className="font-heading mt-3 text-3xl font-bold text-primary lg:text-4xl">
              Technical Insights
            </h2>
          </div>
          <Link
            href="#"
            className="hidden items-center gap-2 text-sm font-semibold text-secondary hover:gap-3 transition-all sm:flex"
          >
            View All News <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>

        <RevealStagger className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {insights.map((post) => (
            <motion.article key={post.title} variants={revealItem}>
              <SiteImage
                src={post.image}
                alt={post.title}
                wrapperClassName="aspect-[16/10] w-full rounded"
              />
              <p className="label-tag mt-5 text-secondary">{post.date}</p>
              <h3 className="font-heading mt-2 text-lg font-bold leading-snug text-primary">
                {post.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-on-surface-variant">
                {post.desc}
              </p>
            </motion.article>
          ))}
        </RevealStagger>
      </section>

      {/* CTA */}
      <section className="bg-surface-container-high py-20">
        <Reveal className="container-grid flex flex-col items-center gap-8 text-center">
          <h2 className="font-heading max-w-2xl text-2xl font-bold text-primary lg:text-3xl">
            Need a reliable partner for your next energy project?
          </h2>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link href="/contact">
              <Button variant="dark" size="lg">
                Talk to Our Team
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="primary" size="lg">
                Request a Quote
              </Button>
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}

function SolutionCard({
  n,
  title,
  desc,
  icon: Icon,
  tone,
  image,
}: {
  n: string;
  title: string;
  desc: string;
  icon: typeof Anchor;
  tone: "navy" | "steel" | "deep" | "red";
  image: string | null;
}) {
  return (
    <div className="group relative flex h-[420px] flex-col justify-end overflow-hidden rounded-lg">
      {image ?
        <SiteImage
          src={image}
          alt={title}
          wrapperClassName="absolute inset-0"
        />
      : <MediaBlock tone={tone} className="absolute inset-0" />}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
      <span className="absolute left-6 top-6 font-heading text-4xl font-extrabold text-white/25">
        {n}
      </span>
      <Icon className="absolute right-6 top-6 h-6 w-6 text-white/50" />
      <div className="relative z-10 p-6">
        <h3 className="font-heading text-xl font-bold text-white">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-white/70">{desc}</p>
        <Link
          href="/services"
          className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-secondary transition-all group-hover:gap-3"
        >
          View Details <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
