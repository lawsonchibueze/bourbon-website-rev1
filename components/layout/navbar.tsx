"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { BrandMark } from "@/components/ui/brand-mark";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Capabilities" },
  { href: "/projects", label: "Experience" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b border-outline-variant/55 bg-white/95 backdrop-blur-xl transition-shadow duration-300",
        scrolled && "shadow-[0_14px_40px_rgba(4,19,33,0.07)]",
      )}
      style={{ viewTransitionName: "site-header" }}
    >
      <div className="container-grid flex h-[82px] items-center justify-between gap-6">
        <BrandMark />

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "relative py-3 text-[12px] font-semibold tracking-[0.04em] text-on-surface-variant transition-colors hover:text-primary",
                  active && "text-primary",
                )}
              >
                {link.label}
                <span
                  className={cn(
                    "absolute inset-x-0 -bottom-[22px] h-0.5 origin-left bg-secondary transition-transform duration-300",
                    active ? "scale-x-100" : "scale-x-0",
                  )}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Button asChild variant="dark" size="sm">
            <Link href="/contact">
              Discuss a requirement <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </Button>
        </div>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-sm border border-outline-variant text-primary transition-colors hover:bg-surface-container-low focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary lg:hidden"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-outline-variant/55 bg-white lg:hidden"
          >
            <nav className="container-grid flex flex-col py-4" aria-label="Mobile">
              {links.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={pathname === link.href ? "page" : undefined}
                  className={cn(
                    "flex items-center justify-between border-b border-outline-variant/45 py-4 font-heading text-lg font-semibold text-primary",
                    pathname === link.href && "text-secondary",
                  )}
                >
                  <span>{link.label}</span>
                  <span className="font-body text-[10px] tracking-[0.16em] text-outline">
                    0{index + 1}
                  </span>
                </Link>
              ))}
              <Button asChild variant="dark" className="mt-5 w-full">
                <Link href="/contact" onClick={() => setOpen(false)}>
                  Discuss a requirement
                </Link>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
