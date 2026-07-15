import Link from "next/link";
import {
  Anchor,
  ArrowRight,
  Boxes,
  ClipboardCheck,
  Compass,
  HardHat,
  Radio,
  Route,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import HomeHero from "@/components/sections/home-hero";
import { Reveal, RevealStagger, StaggerItem } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { SiteImage } from "@/components/ui/site-image";

const capabilities = [
  {
    number: "01",
    title: "Marine operations support",
    description:
      "Vessel sourcing or deployment support, crew and cargo movement, and coordination around offshore schedules.",
    image: "/images/marine-hero-v2.png",
    alt: "Offshore support vessel underway toward an industrial port",
    icon: Anchor,
  },
  {
    number: "02",
    title: "Project logistics",
    description:
      "Procurement, expediting, shorebase coordination, cargo handling, and delivery planning from supplier to offshore location.",
    image: "/images/shorebase-logistics-v2.png",
    alt: "Organised shorebase logistics operation with a supply vessel alongside",
    icon: Boxes,
  },
  {
    number: "03",
    title: "Technical & industrial support",
    description:
      "Equipment sourcing, maintenance coordination, and mobilisation of qualified technical resources for field requirements.",
    image: "/stitch/stitch-16.jpg",
    alt: "Industrial process equipment prepared for technical support work",
    icon: Wrench,
  },
];

const process = [
  {
    number: "01",
    title: "Scope",
    copy: "Confirm objectives, location, interfaces, timing, and acceptance criteria.",
    icon: Compass,
  },
  {
    number: "02",
    title: "Plan",
    copy: "Define resources, responsibilities, logistics, controls, and reporting.",
    icon: ClipboardCheck,
  },
  {
    number: "03",
    title: "Mobilise",
    copy: "Coordinate people, assets, documents, equipment, and readiness checks.",
    icon: Route,
  },
  {
    number: "04",
    title: "Support & close",
    copy: "Maintain visibility through execution and provide agreed close-out records.",
    icon: Radio,
  },
];

const focusAreas = [
  {
    icon: ClipboardCheck,
    title: "Mobilisation readiness",
    copy: "Align documentation, interfaces, resources, and readiness checks before work begins.",
  },
  {
    icon: Route,
    title: "Supply-chain visibility",
    copy: "Create clear handoffs and reporting from vendor collection to shorebase and offshore delivery.",
  },
  {
    icon: HardHat,
    title: "Safe work coordination",
    copy: "Keep risk, responsibility, communication, and changing operational conditions visible to the team.",
  },
];

export default function Home() {
  return (
    <>
      <HomeHero />

      <section id="page-content" className="container-grid py-24 lg:py-32">
        <div className="grid items-center gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20">
          <Reveal className="relative">
            <SiteImage
              src="/images/marine-operations-team-v2.png"
              alt="Marine operations team reviewing a mobilisation plan on deck"
              wrapperClassName="aspect-[4/5] min-h-[520px] rounded-sm"
              sizes="(min-width: 1024px) 43vw, 100vw"
            />
            <div className="absolute -bottom-7 right-0 hidden w-[78%] bg-primary p-7 text-white shadow-2xl sm:block lg:-right-10">
              <p className="eyebrow text-tertiary">Operational discipline</p>
              <p className="mt-3 font-heading text-lg font-semibold leading-7">
                Clear planning. Coordinated execution. Dependable support from
                shorebase to offshore location.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <SectionHeading
              eyebrow="Built around operations"
              title="Practical support for complex marine work."
              description="Every offshore assignment depends on aligned people, assets, schedules, and safety expectations. We bring those workstreams together, maintain clear communication, and support delivery from shorebase preparation to offshore completion."
            />
            <div className="mt-9 grid gap-5 border-t border-outline-variant/70 pt-8 sm:grid-cols-2">
              <div>
                <ShieldCheck className="h-5 w-5 text-secondary" />
                <h3 className="mt-4 font-heading text-base font-bold text-primary">
                  Controls that fit the work
                </h3>
                <p className="mt-2 text-sm leading-6 text-on-surface-variant">
                  Responsibilities, interfaces, and reporting are defined around
                  the actual operating scope.
                </p>
              </div>
              <div>
                <Radio className="h-5 w-5 text-secondary" />
                <h3 className="mt-4 font-heading text-base font-bold text-primary">
                  Communication throughout
                </h3>
                <p className="mt-2 text-sm leading-6 text-on-surface-variant">
                  Teams stay informed as priorities, conditions, and delivery
                  requirements change.
                </p>
              </div>
            </div>
            <Button asChild variant="outlinePrimary" className="mt-9">
              <Link href="/about">
                How we work <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface-container-low py-24 lg:py-32">
        <div className="container-grid">
          <Reveal>
            <SectionHeading
              eyebrow="Capabilities"
              title="Connected support across the operation."
              description="Our capability areas are structured around the practical interfaces between marine assets, shorebase logistics, equipment, and technical resources."
              className="max-w-3xl"
            />
          </Reveal>

          <RevealStagger className="mt-14 grid gap-6 lg:grid-cols-3">
            {capabilities.map((capability) => (
              <StaggerItem
                key={capability.number}
                className="group overflow-hidden bg-white shadow-[0_16px_45px_rgba(4,19,33,0.06)]"
              >
                <div className="relative overflow-hidden">
                  <SiteImage
                    src={capability.image}
                    alt={capability.alt}
                    wrapperClassName="aspect-[4/3]"
                    sizes="(min-width: 1024px) 29vw, 100vw"
                    className="group-hover:scale-[1.035]"
                  />
                  <div className="absolute left-5 top-5 grid h-11 w-11 place-items-center bg-primary text-white shadow-lg">
                    <capability.icon className="h-5 w-5" />
                  </div>
                </div>
                <div className="p-7">
                  <p className="eyebrow text-secondary">{capability.number}</p>
                  <h3 className="mt-3 font-heading text-xl font-bold tracking-[-0.025em] text-primary">
                    {capability.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-on-surface-variant">
                    {capability.description}
                  </p>
                  <Link
                    href="/services"
                    className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-primary transition-colors hover:text-secondary"
                  >
                    View capability <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      <section className="relative overflow-hidden bg-primary-deep py-24 text-white lg:py-32">
        <div className="technical-grid absolute inset-0 opacity-55" />
        <div className="container-grid relative">
          <Reveal>
            <SectionHeading
              eyebrow="Delivery approach"
              title="One coordinated plan from scope to close-out."
              description="A clear operating rhythm helps the right people act on the right information at the right time."
              inverse
              className="max-w-3xl"
            />
          </Reveal>

          <RevealStagger className="mt-14 grid border-y border-white/12 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step) => (
              <StaggerItem
                key={step.number}
                className="relative border-white/12 px-6 py-8 sm:border-r lg:min-h-[260px] lg:px-7 lg:py-9"
              >
                <div className="flex items-center justify-between">
                  <step.icon className="h-5 w-5 text-tertiary" />
                  <span className="font-heading text-4xl font-bold text-white/10">
                    {step.number}
                  </span>
                </div>
                <h3 className="mt-10 font-heading text-lg font-bold">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-white/58">{step.copy}</p>
              </StaggerItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      <section className="grid lg:grid-cols-2">
        <Reveal className="min-h-[460px]">
          <SiteImage
            src="/images/shorebase-logistics-v2.png"
            alt="Supply vessel and organised cargo at a coastal shorebase"
            wrapperClassName="h-full min-h-[460px]"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </Reveal>
        <div className="flex items-center bg-white px-6 py-20 sm:px-10 lg:px-16 lg:py-24 xl:px-24">
          <Reveal>
            <SectionHeading
              eyebrow="Operational focus"
              title="Visibility where projects carry the most risk."
              description="We focus on the handoffs that can disrupt marine work: readiness, supply-chain movement, changing interfaces, and communication between shore and field teams."
            />
            <div className="mt-9 space-y-6">
              {focusAreas.map((item) => (
                <div
                  key={item.title}
                  className="grid grid-cols-[44px_1fr] gap-4 border-t border-outline-variant/60 pt-6"
                >
                  <div className="grid h-10 w-10 place-items-center bg-surface-container-low text-primary">
                    <item.icon className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-heading text-base font-bold text-primary">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-on-surface-variant">
                      {item.copy}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-secondary py-16 text-white lg:py-20">
        <Reveal className="container-grid flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="eyebrow text-white/65">Plan the next move</p>
            <h2 className="mt-3 max-w-3xl font-heading text-3xl font-bold tracking-[-0.035em] sm:text-4xl">
              Planning an offshore or marine requirement?
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-white/78">
              Share the location, scope, timing, and asset or logistics needs.
              We will review the requirement and confirm the appropriate next
              step.
            </p>
          </div>
          <Button asChild variant="outlineLight" size="lg" className="shrink-0">
            <Link href="/contact">
              Discuss your requirement <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </Reveal>
      </section>
    </>
  );
}
