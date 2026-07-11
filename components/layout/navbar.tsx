"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About Us" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full bg-surface/95 backdrop-blur transition-shadow",
        scrolled && "shadow-[0_1px_0_0_rgba(0,0,0,0.08)]"
      )}
    >
      <div className="container-grid flex h-[72px] items-center justify-between">
        <Link
          href="/"
          className="font-heading text-lg font-bold tracking-tight text-primary"
        >
          BOURBON ENERGY SERVICES
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative py-2 text-sm font-medium text-on-surface transition-colors hover:text-secondary",
                  active && "text-secondary"
                )}
              >
                {link.label}
                {active && (
                  <span className="absolute -bottom-[1px] left-0 h-[2px] w-full bg-secondary" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Link href="/contact">
            <Button variant="primary" size="sm">
              Request a Quote
            </Button>
          </Link>
        </div>

        <button
          className="p-2 lg:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-outline-variant/40 bg-surface lg:hidden">
          <nav className="container-grid flex flex-col gap-1 py-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "py-3 text-sm font-medium",
                  pathname === link.href ? "text-secondary" : "text-on-surface"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="mt-2" onClick={() => setOpen(false)}>
              <Button variant="primary" size="sm" className="w-full">
                Request a Quote
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
