import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Eye,
  Handshake,
  Leaf,
  Scale,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { SiteImage } from "@/components/ui/site-image";
import { Button } from "@/components/ui/button";
import { Reveal, RevealStagger, StaggerItem } from "@/components/motion/reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "A disciplined marine support partner focused on clear planning, responsible coordination, and dependable communication.",
};

const principles = [
  {
    icon: ShieldCheck,
    title: "Safety awareness",
    copy: "Identify risk early, clarify responsibilities, and support work in line with applicable project and regulatory requirements.",
  },
  {
    icon: Scale,
    title: "Integrity",
    copy: "Communicate capability, constraints, progress, and changes clearly so decisions are based on the real operating picture.",
  },
  {
    icon: CheckCircle2,
    title: "Accountability",
    copy: "Own agreed actions, maintain traceable records, and keep commitments visible throughout the work.",
  },
  {
    icon: Handshake,
    title: "Collaboration",
    copy: "Work across client, supplier, vessel, shorebase, and field interfaces as one coordinated delivery team.",
  },
];

const hseApproach = [
  "Risk identification and role clarity during planning",
  "Mobilisation readiness and documentation checks",
  "Clear reporting, escalation, and change communication",
  "Incident learning and continual improvement",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="A disciplined partner for marine operations."
        description="We bring marine, logistics, and technical workstreams together around a clear operational plan. Our focus is straightforward: understand the requirement, coordinate responsibly, and communicate clearly throughout delivery."
        image="/images/marine-operations-team-v2.png"
        imageAlt="Marine operations team coordinating work on the deck of a support vessel"
      />

      <section id="page-content" className="container-grid py-24 lg:py-32">
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal>
            <SectionHeading
              eyebrow="Built for coordinated delivery"
              title="The operating plan comes before the promise."
              description="Strong marine support starts with a realistic understanding of the work: what must move, who is responsible, which interfaces matter, where risk sits, and how progress will be communicated. We structure our involvement around that operating picture."
            />
            <p className="mt-6 max-w-2xl text-[15px] leading-7 text-on-surface-variant">
              Our role is to help clients connect the relevant marine,
              logistics, equipment, and technical resources without losing
              visibility between shorebase preparation and offshore execution.
            </p>
            <Button asChild variant="outlinePrimary" className="mt-9">
              <Link href="/services">
                Explore capabilities <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </Reveal>

          <Reveal delay={0.12} className="relative">
            <SiteImage
              src="/images/marine-operations-team-v2.png"
              alt="Operations team reviewing vessel mobilisation documents"
              wrapperClassName="aspect-[4/5] rounded-sm"
              sizes="(min-width: 1024px) 49vw, 100vw"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary-deep/95 via-primary-deep/75 to-transparent p-7 pt-20 text-white">
              <p className="eyebrow text-tertiary">Our role</p>
              <p className="mt-3 max-w-lg font-heading text-lg font-semibold leading-7">
                Align the workstreams, surface the interfaces, and keep the
                delivery team informed.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface-container-low py-24 lg:py-32">
        <div className="container-grid">
          <Reveal>
            <SectionHeading
              eyebrow="Our foundation"
              title="Purpose with an operational edge."
              description="The language is simple because the standard should be easy to understand and apply."
              align="center"
            />
          </Reveal>
          <RevealStagger className="mt-14 grid gap-6 lg:grid-cols-3">
            <StaggerItem className="bg-primary p-8 text-white lg:p-10">
              <Target className="h-6 w-6 text-tertiary" />
              <p className="eyebrow mt-10 text-white/45">Mission</p>
              <h3 className="mt-3 font-heading text-xl font-bold leading-8">
                Support marine and offshore operations through disciplined
                planning, responsive coordination, and responsible execution.
              </h3>
            </StaggerItem>
            <StaggerItem className="bg-white p-8 lg:p-10">
              <Eye className="h-6 w-6 text-secondary" />
              <p className="eyebrow mt-10 text-outline">Vision</p>
              <h3 className="mt-3 font-heading text-xl font-bold leading-8 text-primary">
                Be a trusted support partner for clients operating in complex
                marine environments.
              </h3>
            </StaggerItem>
            <StaggerItem className="bg-primary-deep p-8 text-white lg:p-10">
              <Users className="h-6 w-6 text-tertiary" />
              <p className="eyebrow mt-10 text-white/45">Working style</p>
              <h3 className="mt-3 font-heading text-xl font-bold leading-8">
                Clear ownership, practical communication, collaborative
                problem-solving, and continuous improvement.
              </h3>
            </StaggerItem>
          </RevealStagger>
        </div>
      </section>

      <section className="container-grid py-24 lg:py-32">
        <Reveal>
          <SectionHeading
            eyebrow="Values in practice"
            title="How we aim to show up on every assignment."
            className="max-w-3xl"
          />
        </Reveal>
        <RevealStagger className="mt-14 grid gap-px overflow-hidden border border-outline-variant/65 bg-outline-variant/65 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((principle) => (
            <StaggerItem key={principle.title} className="bg-white p-7 lg:min-h-[280px]">
              <principle.icon className="h-5 w-5 text-secondary" />
              <h3 className="mt-10 font-heading text-lg font-bold text-primary">
                {principle.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-on-surface-variant">
                {principle.copy}
              </p>
            </StaggerItem>
          ))}
        </RevealStagger>
      </section>

      <section className="grid bg-primary-deep text-white lg:grid-cols-2">
        <Reveal className="min-h-[500px]">
          <SiteImage
            src="/images/marine-hero-v2.png"
            alt="Offshore support vessel operating at dawn"
            wrapperClassName="h-full min-h-[500px]"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </Reveal>
        <div className="technical-grid flex items-center px-6 py-20 sm:px-10 lg:px-16 lg:py-24 xl:px-24">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-secondary" />
              <span className="eyebrow text-white/60">
                Safety &amp; environmental responsibility
              </span>
            </div>
            <h2 className="mt-5 font-heading text-3xl font-bold tracking-[-0.035em] sm:text-4xl">
              Risk is managed through preparation, communication, and learning.
            </h2>
            <p className="mt-5 text-[15px] leading-7 text-white/65">
              We aim to identify risk early, define responsibilities clearly,
              and support work in accordance with applicable client,
              regulatory, and project requirements.
            </p>
            <ul className="mt-8 space-y-4">
              {hseApproach.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-6 text-white/75">
                  <Leaf className="mt-1 h-4 w-4 shrink-0 text-tertiary" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="bg-secondary py-16 text-white lg:py-20">
        <Reveal className="container-grid flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="eyebrow text-white/65">Work with us</p>
            <h2 className="mt-3 max-w-3xl font-heading text-3xl font-bold tracking-[-0.035em] sm:text-4xl">
              Bring us the operating requirement. We will help structure the
              next step.
            </h2>
          </div>
          <Button asChild variant="outlineLight" size="lg" className="shrink-0">
            <Link href="/contact">
              Start a conversation <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </Reveal>
      </section>
    </>
  );
}
