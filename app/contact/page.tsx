"use client";

import { useState, FormEvent } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { SiteImage } from "@/components/ui/site-image";
import { Reveal } from "@/components/motion/reveal";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary-deep py-24 text-white lg:py-28">
        <SiteImage
          src="/stitch/stitch-27.jpg"
          alt="Bourbon Energy Services operations center"
          overlay="full"
          wrapperClassName="absolute inset-0"
          className="opacity-50"
          priority
        />
        <div className="container-grid relative max-w-2xl">
          <Reveal>
            <h1 className="font-heading text-4xl font-extrabold lg:text-6xl">
              CONNECT WITH PRECISION.
            </h1>
            <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-white/70">
              Partner with a leader in offshore energy. Our teams are standing
              by to support your global operations with safety and
              uncompromising technical excellence.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Details + form */}
      <section className="container-grid grid grid-cols-1 gap-12 py-24 lg:grid-cols-[1fr_1.4fr] lg:gap-16 lg:py-28">
        <Reveal>
          <div className="border-l-2 border-secondary pl-5">
            <h2 className="font-heading text-2xl font-bold text-primary">
              Global Headquarters
            </h2>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-on-surface-variant">
            Strategic operations serving the global offshore market from our hub
            in Marseille.
          </p>

          <div className="mt-8 space-y-6">
            <ContactRow icon={MapPin} label="Address">
              148 Avenue du Prado,
              <br /> 13008 Marseille, France
            </ContactRow>
            <ContactRow icon={Phone} label="Phone">
              +33 (0)4 91 13 21 10
            </ContactRow>
            <ContactRow icon={Mail} label="Email">
              contact@bourbonenergy.com
            </ContactRow>
            <ContactRow icon={Clock} label="Operational Hours">
              Mon - Fri: 08:00 - 18:00 (CET)
              <br /> Emergency Support: 24/7
            </ContactRow>
          </div>

          <div className="relative mt-8 aspect-[4/3] w-full overflow-hidden rounded">
            <SiteImage
              src="/stitch/stitch-21.jpg"
              alt="Map of Bourbon Energy Services Marseille headquarters"
              wrapperClassName="h-full w-full"
            />
            <button className="absolute bottom-3 left-3 flex cursor-pointer items-center gap-2 bg-primary-deep px-4 py-2 label-tag text-white">
              View on Google Maps <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </Reveal>

        <Reveal delay={0.12} className="bg-surface-container-low p-8 lg:p-10">
          <h3 className="font-heading text-xl font-bold text-primary">
            Service Enquiry
          </h3>

          {submitted ?
            <div className="mt-10 flex flex-col items-center gap-4 py-10 text-center">
              <CheckCircle2 className="h-10 w-10 text-secondary" />
              <p className="font-heading text-lg font-bold text-primary">
                Enquiry sent
              </p>
              <p className="max-w-sm text-sm text-on-surface-variant">
                Thank you — our operations team will respond within one business
                day.
              </p>
            </div>
          : <form onSubmit={handleSubmit} className="mt-7 space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <Field label="Full Name">
                  <Input placeholder="Jean Dupont" required />
                </Field>
                <Field label="Company">
                  <Input placeholder="Energy Corp International" />
                </Field>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <Field label="Email Address">
                  <Input
                    type="email"
                    placeholder="j.dupont@company.com"
                    required
                  />
                </Field>
                <Field label="Phone Number">
                  <Input type="tel" placeholder="+33 00 00 00 00" />
                </Field>
              </div>
              <Field label="Primary Service Interest">
                <Select defaultValue="Offshore Support Vessels">
                  <option>Offshore Support Vessels</option>
                  <option>Oil &amp; Gas Logistics</option>
                  <option>Industrial &amp; Energy Solutions</option>
                  <option>HSE Consulting</option>
                </Select>
              </Field>
              <Field label="Detailed Message">
                <Textarea placeholder="Provide details about your project requirements..." />
              </Field>
              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full sm:w-auto"
              >
                Send Enquiry
              </Button>
            </form>
          }
        </Reveal>
      </section>

      {/* Careers */}
      <section className="grid grid-cols-1 bg-primary lg:grid-cols-2">
        <Reveal>
          <SiteImage
            src="/stitch/stitch-19.jpg"
            alt="Bourbon Energy Services operations control room"
            wrapperClassName="h-full min-h-[320px] w-full"
          />
        </Reveal>
        <Reveal delay={0.1} className="flex items-center">
          <div className="px-8 py-16 text-white lg:px-16">
            <h3 className="font-heading text-2xl font-bold lg:text-3xl">
              Build Your Career With Us
            </h3>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-white/70">
              We are looking for the next generation of engineers, vessel
              operators, and technical experts to lead the energy transition.
              Join a culture built on safety, integrity, and innovation.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button variant="primary" size="default">
                View Open Roles <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
              <Button variant="outlineLight" size="default">
                Send Your CV
              </Button>
            </div>
            <p className="label-tag mt-8 text-white/40">
              Global Opportunities Across 5 Continents
            </p>
          </div>
        </Reveal>
      </section>
    </>
  );
}

function ContactRow({
  icon: Icon,
  label,
  children,
}: {
  icon: typeof MapPin;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <Icon className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
      <div>
        <p className="label-tag text-outline">{label}</p>
        <p className="mt-1 text-sm text-on-surface">{children}</p>
      </div>
    </div>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="label-tag text-on-surface-variant">{label}</span>
      <div className="mt-2">{children}</div>
    </label>
  );
}
