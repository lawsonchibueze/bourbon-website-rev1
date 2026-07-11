import Link from "next/link";
import { Share2, Globe } from "lucide-react";

const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About Us" },
  { href: "/projects", label: "Projects" },
];

const legal = [
  { href: "#", label: "Privacy Policy" },
  { href: "#", label: "Terms of Service" },
  { href: "#", label: "Compliance" },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container-grid grid grid-cols-1 gap-10 py-16 lg:grid-cols-3">
        <div>
          <p className="font-heading text-lg font-bold tracking-tight">
            BOURBON ENERGY SERVICES
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
            Global leaders in offshore marine services, technical engineering,
            and energy logistics. Committed to safety, precision, and
            sustainability.
          </p>
        </div>

        <div>
          <p className="label-tag text-white/50">Navigation</p>
          <ul className="mt-4 space-y-3">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-white/80 transition-colors hover:text-secondary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="label-tag text-white/50">Legal</p>
          <ul className="mt-4 space-y-3">
            {legal.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-sm text-white/80 transition-colors hover:text-secondary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-grid flex flex-col items-center justify-between gap-4 py-6 text-xs text-white/50 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} Bourbon Energy Services. All
            rights reserved. Precision in offshore energy.
          </p>
          <div className="flex items-center gap-4">
            <Globe className="h-4 w-4" />
            <Share2 className="h-4 w-4" />
          </div>
        </div>
      </div>
    </footer>
  );
}
