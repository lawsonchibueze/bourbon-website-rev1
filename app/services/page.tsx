import type { Metadata } from "next";
import Link from "next/link";
import {
  Anchor,
  ArrowRight,
  Boxes,
  Check,
  ClipboardList,
  Container,
  FileCheck2,
  HardHat,
  Radio,
  Route,
  Ship,
  Truck,
  Users,
  Wrench,
} from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { SiteImage } from "@/components/ui/site-image";
import { Button } from "@/components/ui/button";
import { Reveal, RevealStagger, StaggerItem } from "@/components/motion/reveal";

export const metadata: Metadata = {
  title: "Capabilities",
  description:
    "Marine operations support, project logistics, and technical coordination for offshore and industrial requirements.",
};

const marineServices = [
  { icon: Ship, label: "Vessel sourcing and charter coordination" },
  { icon: Anchor, label: "Platform supply support" },
  { icon: Users, label: "Crew-transfer coordination" },
  { icon: Container, label: "Cargo and deck-load planning" },
  { icon: Truck, label: "Port and shorebase coordination" },
  { icon: Radio, label: "Marine operations reporting" },
];

const logisticsServices = [
  { icon: Boxes, label: "Technical procurement and expediting" },
  { icon: Route, label: "Vendor and delivery coordination" },
  { icon: Wrench, label: "Equipment sourcing" },
  { icon: ClipboardList, label: "Maintenance support coordination" },
  { icon: HardHat, label: "Technical personnel mobilisation" },
  { icon: FileCheck2, label: "Documentation and close-out support" },
];

const framework = [
  {
    n: "01",
    title: "Scope",
    desc: "Confirm the objective, operating location, interfaces, schedule, constraints, and acceptance criteria.",
  },
  {
    n: "02",
    title: "Plan",
    desc: "Define resources, responsibilities, logistics, controls, communications, and reporting expectations.",
  },
  {
    n: "03",
    title: "Mobilise",
    desc: "Coordinate people, assets, equipment, documents, permits, and readiness checks before execution.",
  },
  {
    n: "04",
    title: "Support & close",
    desc: "Maintain visibility through the work and provide the agreed records, handover, and close-out support.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Capabilities"
        title="Marine and technical support, coordinated around your operation."
        description="We help clients plan and coordinate the people, assets, equipment, and logistics required for offshore and industrial work."
        image="/images/shorebase-logistics-v2.png"
        imageAlt="Organised offshore logistics shorebase with a supply vessel alongside"
      />

      <section id="page-content" className="container-grid py-24 lg:py-32">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <Reveal>
            <SiteImage
              src="/images/marine-hero-v2.png"
              alt="Modern offshore support vessel underway"
              wrapperClassName="aspect-[5/4] rounded-sm"
              sizes="(min-width: 1024px) 48vw, 100vw"
            />
          </Reveal>
          <Reveal delay={0.12}>
            <SectionHeading
              eyebrow="Capability 01"
              title="Marine operations support"
              description="Support for vessel requirements, offshore movements, and the interfaces between shorebase and field operations. Assets, availability, and technical specifications are confirmed against each enquiry."
            />
            <div className="mt-9 grid gap-x-8 sm:grid-cols-2">
              {marineServices.map((item) => (
                <div
                  key={item.label}
                  className="flex gap-3 border-t border-outline-variant/65 py-4"
                >
                  <item.icon className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                  <span className="text-sm font-medium leading-6 text-on-surface">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface-container-low py-24 lg:py-32">
        <div className="container-grid grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          <Reveal className="lg:order-2">
            <SiteImage
              src="/images/shorebase-logistics-v2.png"
              alt="Supply vessel and project cargo at a coastal shorebase"
              wrapperClassName="aspect-[5/4] rounded-sm"
              sizes="(min-width: 1024px) 48vw, 100vw"
            />
          </Reveal>
          <Reveal delay={0.12} className="lg:order-1">
            <SectionHeading
              eyebrow="Capability 02"
              title="Project logistics & technical support"
              description="Coordinated sourcing and field support designed to keep project materials, equipment, and technical resources aligned with the work programme."
            />
            <div className="mt-9 grid gap-x-8 sm:grid-cols-2">
              {logisticsServices.map((item) => (
                <div
                  key={item.label}
                  className="flex gap-3 border-t border-outline-variant/65 py-4"
                >
                  <item.icon className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                  <span className="text-sm font-medium leading-6 text-on-surface">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-primary-deep py-24 text-white lg:py-32">
        <div className="technical-grid absolute inset-0 opacity-55" />
        <div className="container-grid relative">
          <Reveal>
            <SectionHeading
              eyebrow="Operating model"
              title="A disciplined framework for every requirement."
              description="The work changes from project to project. The need for clear scope, controls, communication, and close-out does not."
              align="center"
              inverse
            />
          </Reveal>

          <RevealStagger className="mt-14 grid gap-px overflow-hidden border border-white/12 bg-white/12 sm:grid-cols-2 lg:grid-cols-4">
            {framework.map((step) => (
              <StaggerItem
                key={step.n}
                className="bg-primary-deep p-7 lg:min-h-72.5"
              >
                <div className="flex items-center justify-between">
                  <span className="grid h-10 w-10 place-items-center border border-white/18 font-heading text-xs font-bold text-tertiary">
                    {step.n}
                  </span>
                  {/* <Check className="h-4 w-4 text-secondary" /> */}
                </div>
                <h3 className="mt-12 font-heading text-xl font-bold">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-white/58">
                  {step.desc}
                </p>
              </StaggerItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      <section className="container-grid py-20 lg:py-24">
        <Reveal className="relative overflow-hidden bg-surface-bright px-6 py-12 shadow-[0_20px_60px_rgba(4,19,33,0.07)] sm:px-10 lg:flex lg:items-center lg:justify-between lg:gap-12 lg:px-14 lg:py-14">
          <div className="absolute inset-y-0 left-0 w-1 bg-secondary" />
          <div>
            {/* <p className="eyebrow text-secondary">Commercial enquiry</p> */}
            <h2 className="mt-3 max-w-2xl font-heading text-2xl font-bold tracking-[-0.03em] text-primary sm:text-3xl">
              Need support around a specific operating requirement?
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-on-surface-variant">
              Share the location, timing, service need, and key technical or
              logistics constraints. We will help structure the next step.
            </p>
          </div>
          <Button
            asChild
            variant="dark"
            size="lg"
            className="mt-8 shrink-0 lg:mt-0"
          >
            <Link href="/contact">
              Discuss your scope <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </Reveal>
      </section>
    </>
  );
}
