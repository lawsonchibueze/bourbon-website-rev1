import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { BrandMark } from "@/components/ui/brand-mark";

const nav = [
  { href: "/services", label: "Capabilities" },
  { href: "/projects", label: "Experience" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const capabilityLinks = [
  "Marine operations support",
  "Project logistics",
  "Technical & industrial support",
  "Mobilisation coordination",
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-primary-deep text-white">
      <div className="technical-grid absolute inset-0 opacity-40" />
      <div className="container-grid relative grid gap-12 py-16 lg:grid-cols-[1.25fr_0.65fr_0.9fr] lg:gap-16 lg:py-20">
        <div>
          <BrandMark inverse />
          <p className="mt-6 max-w-md text-sm leading-7 text-white/58">
            Marine, logistics, and technical support for offshore and industrial
            operations—from early planning through mobilisation and close-out.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-3 border-b border-secondary pb-2 text-xs font-bold uppercase tracking-[0.14em] text-white transition-colors hover:text-tertiary"
          >
            Start a conversation <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div>
          <p className="eyebrow text-white/40">Navigate</p>
          <ul className="mt-6 space-y-3">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-white/72 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow text-white/40">Capability areas</p>
          <ul className="mt-6 space-y-3 text-sm leading-6 text-white/58">
            {capabilityLinks.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="mt-7 flex items-center gap-3 border-t border-white/10 pt-6 text-sm text-white/65">
            <Mail className="h-4 w-4 text-secondary" />
            Commercial contact details pending verification
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="container-grid flex flex-col gap-3 py-6 text-[11px] leading-5 text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Bourbon Energy Services.</p>
          <p className="max-w-2xl sm:text-right">
            Service availability, asset specifications, schedules, and
            performance requirements are confirmed for each engagement and
            remain subject to contract.
          </p>
        </div>
      </div>
    </footer>
  );
}
