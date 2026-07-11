"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Ship,
  Users,
  Route,
  Anchor,
  PackageCheck,
  Wrench,
  Truck,
  HardHat,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteImage } from "@/components/ui/site-image";
import { Reveal, RevealStagger, revealItem } from "@/components/motion/reveal";

const marine = [
  { icon: Ship, label: "Vessel Charter" },
  { icon: Users, label: "Crew Transfer" },
  { icon: Route, label: "Logistics & Supply Chain" },
  { icon: Anchor, label: "Platform Support" },
  { icon: PackageCheck, label: "Supply Handling" },
];

const industrial = [
  {
    icon: Truck,
    title: "Equipment Supply",
    desc: "Global procurement of heavy machinery.",
  },
  {
    icon: Wrench,
    title: "Maintenance",
    desc: "Preventative and corrective field repairs.",
  },
  {
    icon: PackageCheck,
    title: "Procurement",
    desc: "Strategic sourcing and vendor management.",
  },
  {
    icon: HardHat,
    title: "Manpower",
    desc: "Highly skilled technical personnel.",
  },
];

const framework = [
  {
    n: "01",
    title: "Understand",
    desc: "Defining technical requirements and assessing operational constraints to establish a clear project scope.",
  },
  {
    n: "02",
    title: "Plan",
    desc: "Developing rigorous logistics schedules, safety protocols, and asset allocation strategies for peak efficiency.",
  },
  {
    n: "03",
    title: "Execute",
    desc: "Deployment of marine assets and specialized personnel under strictly managed industrial standards.",
  },
  {
    n: "04",
    title: "Deliver",
    desc: "Final handover, comprehensive reporting, and post-operational analysis to ensure total client satisfaction.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary-deep py-24 text-white lg:py-32">
        <SiteImage
          src="/stitch/stitch-15.jpg"
          alt="Bourbon Energy Services vessel underway at sea"
          overlay="left"
          wrapperClassName="absolute inset-0"
          priority
        />
        <div className="container-grid relative max-w-2xl">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-secondary" />
              <span className="label-tag text-white/70">
                Offshore Leadership
              </span>
            </div>
            <h1 className="font-heading mt-5 text-4xl font-bold leading-[1.1] lg:text-6xl">
              Integrated Solutions for Energy Operations
            </h1>
            <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-white/70">
              Powering global energy infrastructure through technical precision,
              specialized marine assets, and an uncompromising commitment to
              safety and operational excellence.
            </p>
            <Link href="#framework" className="mt-9 inline-block">
              <Button variant="primary" size="lg">
                Explore Services
              </Button>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Division 01 */}
      <section className="container-grid grid grid-cols-1 gap-12 py-24 lg:grid-cols-2 lg:gap-16 lg:py-32">
        <Reveal>
          <SiteImage
            src="/stitch/stitch-16.jpg"
            alt="Marine terminal used by Bourbon Energy Services"
            wrapperClassName="aspect-[4/3] w-full rounded-lg"
          />
        </Reveal>
        <Reveal delay={0.12}>
          <span className="label-tag text-secondary">Division 01</span>
          <h2 className="font-heading mt-3 text-3xl font-bold text-primary lg:text-4xl">
            Offshore &amp; Marine Services
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-on-surface-variant">
            Bourbon Energy Services provides a comprehensive suite of maritime
            assets designed for the most demanding offshore environments. From
            deep-sea logistics to delicate platform maneuvers, our fleet is
            crewed by experts who prioritize safety and efficiency.
          </p>
          <ul className="mt-8 space-y-0">
            {marine.map((item) => (
              <li
                key={item.label}
                className="flex items-center gap-4 border-t border-outline-variant/50 py-4 last:border-b"
              >
                <item.icon className="h-5 w-5 text-secondary" />
                <span className="label-tag text-on-surface">{item.label}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      {/* Division 02 */}
      <section className="bg-surface-container-low py-24 lg:py-32">
        <div className="container-grid grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <span className="label-tag text-secondary">Division 02</span>
            <h2 className="font-heading mt-3 text-3xl font-bold text-primary lg:text-4xl">
              Energy &amp; Industrial Solutions
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-on-surface-variant">
              Our industrial division bridges the gap between complex
              engineering requirements and field execution. We provide technical
              manpower and procurement services that ensure your project stays
              on schedule and within technical specification.
            </p>
            <RevealStagger className="mt-8 grid grid-cols-2 gap-4">
              {industrial.map((item) => (
                <motion.div
                  key={item.title}
                  variants={revealItem}
                  className="border-l-2 border-secondary bg-surface-container-lowest p-5"
                >
                  <item.icon className="h-5 w-5 text-primary" />
                  <p className="font-heading mt-3 text-sm font-bold text-primary">
                    {item.title}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-on-surface-variant">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </RevealStagger>
          </Reveal>
          <Reveal delay={0.12}>
            <SiteImage
              src="/stitch/stitch-17.jpg"
              alt="Industrial process piping and equipment"
              wrapperClassName="aspect-[4/3] w-full rounded-lg"
            />
          </Reveal>
        </div>
      </section>

      {/* Framework */}
      <section id="framework" className="bg-primary py-24 text-white lg:py-32">
        <div className="container-grid">
          <Reveal className="text-center">
            <h2 className="font-heading text-3xl font-bold lg:text-4xl">
              Our Operational Framework
            </h2>
            <div className="mx-auto mt-4 h-[2px] w-14 bg-secondary" />
          </Reveal>

          <div className="relative mt-16">
            <div className="absolute left-0 right-0 top-7 hidden h-px bg-white/15 lg:block" />
            <RevealStagger className="relative grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {framework.map((step) => (
                <motion.div
                  key={step.n}
                  variants={revealItem}
                  className="text-center"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded border border-white/25 bg-primary-deep font-heading text-lg font-bold">
                    {step.n}
                  </div>
                  <h3 className="label-tag mt-5">{step.title}</h3>
                  <p className="mx-auto mt-3 max-w-[220px] text-sm leading-relaxed text-white/60">
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </RevealStagger>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-grid py-20">
        <Reveal className="relative flex flex-col items-start gap-6 overflow-hidden bg-surface-container-highest p-10 sm:flex-row sm:items-center sm:justify-between lg:p-16">
          <div>
            <h2 className="font-heading text-2xl font-bold text-primary lg:text-3xl">
              Have a project in mind?
            </h2>
            <p className="mt-3 max-w-md text-[15px] text-on-surface-variant">
              Speak with our operations team to discuss customized solutions for
              your offshore and energy requirements.
            </p>
          </div>
          <Link href="/contact">
            <Button variant="dark" size="lg" className="shrink-0">
              Contact Operations <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </Link>
        </Reveal>
      </section>
    </>
  );
}
