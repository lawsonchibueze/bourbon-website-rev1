import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Boxes,
  Check,
  ClipboardCheck,
  FileText,
  Gauge,
  Network,
  Ship,
  Wrench,
} from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { SiteImage } from "@/components/ui/site-image";
import { Button } from "@/components/ui/button";
import { Reveal, RevealStagger, StaggerItem } from "@/components/motion/reveal";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Representative marine, logistics, and technical support models structured around offshore operating requirements.",
};

const engagementModels = [
  {
    number: "01",
    eyebrow: "Marine operations",
    title: "Offshore supply coordination",
    summary:
      "A structured support model for moving cargo, equipment, and operational information between vendor, shorebase, vessel, and offshore location.",
    image: "/images/shorebase-logistics-v2.png",
    alt: "Offshore supply vessel receiving organised cargo at a shorebase",
    icon: Ship,
    scope: [
      "Requirement and interface mapping",
      "Cargo readiness and delivery sequencing",
      "Shorebase and vessel coordination",
      "Movement status and close-out records",
    ],
  },
  {
    number: "02",
    eyebrow: "Mobilisation",
    title: "Project logistics support",
    summary:
      "Coordinated procurement, expediting, equipment preparation, and mobilisation support aligned with the project work programme.",
    image: "/stitch/stitch-20.jpg",
    alt: "Project cargo staged for mobilisation at an industrial port",
    icon: Boxes,
    scope: [
      "Supplier and delivery coordination",
      "Documentation and readiness tracking",
      "Port, transport, and cargo interfaces",
      "Exception reporting and handover support",
    ],
  },
  {
    number: "03",
    eyebrow: "Technical support",
    title: "Field resource coordination",
    summary:
      "A delivery model for aligning technical personnel, equipment, maintenance needs, and supporting documentation around field work.",
    image: "/images/marine-operations-team-v2.png",
    alt: "Marine technical team reviewing field work plans",
    icon: Wrench,
    scope: [
      "Technical resource planning",
      "Equipment sourcing and readiness",
      "Field communication and reporting",
      "Handover and agreed close-out support",
    ],
  },
];

const evidence = [
  {
    icon: ClipboardCheck,
    title: "Defined need",
    copy: "The operational challenge, location, interfaces, and required outcome are made clear.",
  },
  {
    icon: Network,
    title: "Visible delivery model",
    copy: "Responsibilities, assets, suppliers, controls, and communication routes are documented.",
  },
  {
    icon: Gauge,
    title: "Measured outcome",
    copy: "Results are reported against an agreed baseline and only published with approval.",
  },
  {
    icon: FileText,
    title: "Traceable close-out",
    copy: "Records support handover, lessons learned, and the next operating decision.",
  },
];

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Experience"
        title="Support models shaped around the operating requirement."
        description="Every assignment has different assets, interfaces, schedules, and controls. We structure the work around those realities rather than force the requirement into a generic package."
        image="/images/offshore-vessel-dusk-hero.png"
        imageAlt="Offshore support vessel operating at dusk"
      />

      <section id="page-content" className="container-grid py-24 lg:py-32">
        <Reveal>
          <SectionHeading
            eyebrow="Representative engagement models"
            title="From shorebase preparation to offshore execution."
            description="The examples below describe how support can be structured. Final capability, asset availability, scope, location, and performance requirements are confirmed for each engagement."
            className="max-w-4xl"
          />
        </Reveal>

        <RevealStagger className="mt-14 space-y-8">
          {engagementModels.map((model, index) => (
            <StaggerItem
              key={model.number}
              className="grid overflow-hidden bg-surface-bright shadow-[0_18px_60px_rgba(4,19,33,0.07)] lg:grid-cols-[0.92fr_1.08fr]"
            >
              <div className={index % 2 === 1 ? "lg:order-2" : undefined}>
                <SiteImage
                  src={model.image}
                  alt={model.alt}
                  wrapperClassName="h-full min-h-[380px]"
                  sizes="(min-width: 1024px) 44vw, 100vw"
                />
              </div>
              <div className="p-7 sm:p-10 lg:p-12">
                <div className="flex items-center justify-between">
                  <div className="grid h-11 w-11 place-items-center bg-primary-container text-white">
                    <model.icon className="h-5 w-5" />
                  </div>
                  <span className="font-heading text-5xl font-bold text-primary/8">
                    {model.number}
                  </span>
                </div>
                {/* <p className="eyebrow mt-9 text-secondary">{model.eyebrow}</p> */}
                <h2 className="mt-3 font-heading text-2xl font-bold tracking-[-0.03em] text-primary sm:text-3xl">
                  {model.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-on-surface-variant">
                  {model.summary}
                </p>
                <ul className="mt-7 grid gap-x-6 sm:grid-cols-2">
                  {model.scope.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 border-t border-outline-variant/65 py-3 text-sm leading-6 text-on-surface"
                    >
                      <Check className="mt-1 h-3.5 w-3.5 shrink-0 text-secondary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </RevealStagger>
      </section>

      <section className="relative overflow-hidden bg-primary-deep py-24 text-white lg:py-32">
        <div className="technical-grid absolute inset-0 opacity-55" />
        <div className="container-grid relative">
          <Reveal>
            <SectionHeading
              eyebrow="Evidence-led delivery"
              title="Professional experience is documented, not decorated."
              description="A credible case study connects the operating need to the delivery model and the measured outcome. We only present project details where the underlying records and publication permissions are available."
              inverse
              className="max-w-4xl"
            />
          </Reveal>
          <RevealStagger className="mt-14 grid gap-px overflow-hidden border border-white/12 bg-white/12 sm:grid-cols-2 lg:grid-cols-4">
            {evidence.map((item) => (
              <StaggerItem
                key={item.title}
                className="bg-primary-deep p-7 lg:min-h-[250px]"
              >
                <item.icon className="h-5 w-5 text-tertiary" />
                <h3 className="mt-10 font-heading text-lg font-bold">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-white/58">
                  {item.copy}
                </p>
              </StaggerItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      <section className="container-grid py-24 lg:py-32">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <Reveal>
            <SiteImage
              src="/images/marine-hero-v2.png"
              alt="Modern offshore support vessel underway"
              wrapperClassName="aspect-[5/4] rounded-sm"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </Reveal>
          <Reveal delay={0.12}>
            <SectionHeading
              eyebrow="Asset access & deployment support"
              title="The asset is matched to the scope not the other way around."
              description="We help identify and coordinate suitable marine assets against the operating location, schedule, technical requirements, contracting model, and project interfaces."
            />
            <div className="mt-8 border-l-2 border-secondary bg-surface-container-low p-6">
              <p className="text-sm leading-7 text-on-surface-variant">
                Asset ownership, operating responsibility, availability,
                specifications, certification, and commercial terms are
                confirmed for each enquiry before commitment.
              </p>
            </div>
            <Button asChild variant="dark" className="mt-8">
              <Link href="/contact">
                Discuss an asset requirement <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>

      <section className="bg-secondary py-16 text-white lg:py-20">
        <Reveal className="container-grid flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="eyebrow text-white/65">Build the right scope</p>
            <h2 className="mt-3 max-w-3xl font-heading text-3xl font-bold tracking-[-0.035em] sm:text-4xl">
              Tell us what must move, where it must go, and when it must be
              ready.
            </h2>
          </div>
          <Button asChild variant="outlineLight" size="lg" className="shrink-0">
            <Link href="/contact">
              Start an enquiry <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </Reveal>
      </section>
    </>
  );
}
