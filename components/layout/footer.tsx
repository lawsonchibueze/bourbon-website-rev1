import Link from "next/link";
import { ArrowUpRight, Mail, MapPinned, Phone } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { BrandMark } from "@/components/ui/brand-mark";

const nav = [
  { href: "/services", label: "Capabilities" },
  { href: "/projects", label: "Experience" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  {
    href: "https://www.linkedin.com/company/bourbon/",
    label: "LinkedIn",
    icon: FaLinkedinIn,
  },
  {
    href: "https://www.facebook.com/BourbonOffshore/",
    label: "Facebook",
    icon: FaFacebookF,
  },
  {
    href: "https://www.instagram.com/bourbonoffshore/",
    label: "Instagram",
    icon: FaInstagram,
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-primary-deep text-white">
      <div className="technical-grid absolute inset-0 opacity-40" />
      <div className="container-grid relative grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.55fr_0.9fr] lg:gap-16 lg:py-20">
        <div>
          <BrandMark inverse />
          <p className="mt-6 max-w-md text-sm leading-7 text-white/58">
            Marine, logistics, and technical support for offshore and industrial
            operations from early planning through mobilisation and close-out.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-3 border-b border-secondary pb-2 text-xs font-bold uppercase tracking-[0.14em] text-white transition-colors hover:text-tertiary"
          >
            Start a conversation <ArrowUpRight className="h-4 w-4" />
          </Link>
          <div className="mt-8">
            <p className="eyebrow text-white/40">Follow us</p>
            <div className="mt-4 flex items-center gap-3">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Follow Bourbon Energy Services on ${label}`}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/72 transition-colors hover:border-secondary hover:bg-secondary hover:text-primary-light"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
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

        <div className="sm:col-span-2 lg:col-span-1">
          <p className="eyebrow text-white/40">Contact</p>
          <address className="mt-6 space-y-4 text-sm leading-6 not-italic text-white/65">
            <p className="flex gap-3">
              <MapPinned className="mt-1 h-4 w-4 shrink-0 text-secondary" />
              50, Rue de Forbin, 13235 Marseille Cedex 02, France
            </p>
            <a
              href="tel:+33491130800"
              className="flex items-center gap-3 transition-colors hover:text-white"
            >
              <Phone className="h-4 w-4 shrink-0 text-secondary" />
              +33 (0)4 91 13 08 00
            </a>
            <a
              href="mailto:press@bourbon-online.com"
              className="flex items-center gap-3 transition-colors hover:text-white"
            >
              <Mail className="h-4 w-4 shrink-0 text-secondary" />
              press@bourbon-online.com
            </a>
          </address>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="container-grid py-6 text-[11px] leading-5 text-white/40">
          <p>© {new Date().getFullYear()} Bourbon Energy Services.</p>
        </div>
      </div>
    </footer>
  );
}
