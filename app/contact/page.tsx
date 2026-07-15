import type { Metadata } from "next";
import {
  CalendarClock,
  CheckCircle2,
  ClipboardList,
  MapPinned,
  ShieldAlert,
} from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { SiteImage } from "@/components/ui/site-image";
import { EnquiryForm } from "@/components/forms/enquiry-form";
import { Reveal, RevealStagger, StaggerItem } from "@/components/motion/reveal";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Prepare a structured marine, logistics, or technical support requirement for discussion with Bourbon Energy Services.",
};

const briefItems = [
  {
    icon: MapPinned,
    title: "Where",
    copy: "Operating country, port, shorebase, field area, and relevant routing constraints.",
  },
  {
    icon: CalendarClock,
    title: "When",
    copy: "Required mobilisation window, duration, milestones, and schedule sensitivities.",
  },
  {
    icon: ClipboardList,
    title: "What",
    copy: "Service need, cargo or asset details, interfaces, documentation, and expected outcome.",
  },
  {
    icon: ShieldAlert,
    title: "Controls",
    copy: "Known operating risks, client standards, permits, and reporting expectations.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us what your operation needs."
        description="Share the service, location, timing, and operational requirements needed to structure a useful first conversation."
        image="/images/marine-operations-team-v2.png"
        imageAlt="Marine operations team reviewing a work plan on deck"
      />

      <section id="page-content" className="bg-surface-container-low py-24 lg:py-32">
        <div className="container-grid grid gap-14 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
          <Reveal>
            <SectionHeading
              eyebrow="Before we mobilise"
              title="A better brief leads to a better operating plan."
              description="The most useful first conversation starts with the real operating context—not a generic request for a vessel, person, or piece of equipment."
            />
            <div className="mt-9 space-y-5">
              {briefItems.map((item) => (
                <div
                  key={item.title}
                  className="grid grid-cols-[42px_1fr] gap-4 border-t border-outline-variant/65 pt-5"
                >
                  <div className="grid h-10 w-10 place-items-center bg-primary text-white">
                    <item.icon className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-heading text-base font-bold text-primary">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-on-surface-variant">
                      {item.copy}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-9 border-l-2 border-secondary bg-white p-6">
              <p className="eyebrow text-secondary">Contact verification</p>
              <p className="mt-3 text-sm leading-7 text-on-surface-variant">
                Approved company address, telephone number, commercial email,
                and response hours will be published after legal and brand
                verification. No unverified contact details are displayed.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <EnquiryForm />
          </Reveal>
        </div>
      </section>

      <section className="grid bg-primary-deep text-white lg:grid-cols-2">
        <Reveal className="min-h-[460px]">
          <SiteImage
            src="/images/shorebase-logistics-v2.png"
            alt="Marine logistics shorebase preparing cargo for mobilisation"
            wrapperClassName="h-full min-h-[460px]"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </Reveal>
        <div className="technical-grid flex items-center px-6 py-20 sm:px-10 lg:px-16 xl:px-24">
          <Reveal>
            <p className="eyebrow text-tertiary">A useful first review</p>
            <h2 className="mt-5 font-heading text-3xl font-bold tracking-[-0.035em] sm:text-4xl">
              What happens after the requirement is received?
            </h2>
            <RevealStagger className="mt-8 space-y-5">
              {[
                "Confirm the scope and any missing operating information.",
                "Identify the relevant marine, logistics, or technical workstreams.",
                "Clarify availability, responsibilities, constraints, and the commercial next step.",
              ].map((item, index) => (
                <StaggerItem key={item} className="flex gap-4 border-t border-white/12 pt-5">
                  <span className="font-heading text-sm font-bold text-secondary">
                    0{index + 1}
                  </span>
                  <p className="text-sm leading-6 text-white/68">{item}</p>
                </StaggerItem>
              ))}
            </RevealStagger>
            <div className="mt-8 flex items-start gap-3 bg-white/6 p-5">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-tertiary" />
              <p className="text-sm leading-6 text-white/68">
                Capability, asset availability, schedules, and performance
                commitments are confirmed before engagement.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
