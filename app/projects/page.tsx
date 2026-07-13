"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteImage } from "@/components/ui/site-image";
import { Reveal, RevealStagger, revealItem } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

type Category =
  | "All"
  | "Offshore"
  | "Marine Logistics"
  | "Industrial"
  | "Energy Support";

const filters: Category[] = [
  "All",
  "Offshore",
  "Marine Logistics",
  "Industrial",
  "Energy Support",
];

const projects: {
  category: Exclude<Category, "All">;
  title: string;
  location: string;
  image: string;
}[] = [
  {
    category: "Offshore",
    title: "Deepwater Platform Support",
    location: "Gulf of Guinea, Nigeria",
    image: "/stitch/stitch-03.jpg",
  },
  {
    category: "Industrial",
    title: "Refinery Infrastructure Upgrade",
    location: "Port Harcourt Complex",
    image: "/stitch/stitch-22.jpg",
  },
  {
    category: "Marine Logistics",
    title: "Coastal Supply Chain Operations",
    location: "Onne Logistics Base",
    image: "/stitch/stitch-20.jpg",
  },
  {
    category: "Energy Support",
    title: "Subsea Asset Inspection",
    location: "Bonga Field Operations",
    image: "/stitch/stitch-18.jpg",
  },
  {
    category: "Offshore",
    title: "Renewables Installation Phase I",
    location: "North Sea Project Area",
    image: "/stitch/stitch-22.jpg",
  },
  {
    category: "Industrial",
    title: "Integrated Maintenance Contract",
    location: "Warri Industrial Zone",
    image: "/stitch/stitch-23.jpg",
  },
];

const vessels = [
  {
    name: "Bourbon Liberty 200",
    type: "PSV (Platform Supply)",
    image: "/stitch/stitch-24.jpg",
    specs: [
      { label: "DWT", value: "1,500 MT" },
      { label: "Clear Deck", value: "415 m²" },
      { label: "Max Speed", value: "14.5 Knots" },
    ],
  },
  {
    name: "Bourbon Orca",
    type: "AHTS (Handling / Towing)",
    image: "/stitch/stitch-25.jpg",
    specs: [
      { label: "Bollard Pull", value: "180 MT" },
      { label: "BHP", value: "12,240" },
      { label: "Dynamic Pos", value: "DP2 System" },
    ],
  },
];

const stats = [
  { value: "98%", label: "Vessel Uptime" },
  { value: "15+", label: "Active Fields" },
  { value: "Zero", label: "LTI Target" },
  { value: "24/7", label: "Fleet Support" },
];

export default function ProjectsPage() {
  const [active, setActive] = useState<Category>("All");
  const visible =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary-deep py-24 text-white lg:py-32">
        <SiteImage
          src="/stitch/stitch-11.jpg"
          alt="Bourbon Energy Services vessel underway at sea"
          overlay="left"
          wrapperClassName="absolute inset-0"
          priority
        />
        <div className="container-grid relative max-w-2xl">
          <Reveal>
            <h1 className="font-heading text-4xl font-extrabold leading-[1.05] lg:text-6xl">
              PROVEN CAPABILITY ACROSS ENERGY OPERATIONS
            </h1>
            <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-white/70">
              Delivering precision-engineered solutions for the world&apos;s
              most demanding offshore and industrial energy environments. Our
              track record is built on safety, reliability, and technical
              excellence.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Filters */}
      <div className="border-b border-outline-variant/40 bg-surface-container-low">
        <div className="container-grid flex gap-8 overflow-x-auto py-5 text-sm">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={cn(
                "relative whitespace-nowrap pb-1 font-medium transition-colors",
                active === f ? "text-secondary" : (
                  "text-on-surface-variant hover:text-primary"
                ),
              )}
            >
              {f}
              {active === f && (
                <span className="absolute -bottom-[21px] left-0 h-[2px] w-full bg-secondary" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <section className="container-grid py-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3"
          >
            {visible.map((p) => (
              <div key={p.title}>
                <SiteImage
                  src={p.image}
                  alt={p.title}
                  wrapperClassName="aspect-[4/3] w-full rounded"
                />
                <p className="label-tag mt-4 text-secondary">{p.category}</p>
                <h3 className="font-heading mt-2 text-lg font-bold text-primary">
                  {p.title}
                </h3>
                <p className="mt-2 flex items-center gap-1.5 text-sm text-on-surface-variant">
                  <MapPin className="h-3.5 w-3.5" /> {p.location}
                </p>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* Asset Excellence */}
      <section className="bg-primary py-24 text-white lg:py-28">
        <div className="container-grid">
          <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="font-heading text-3xl font-bold lg:text-4xl">
                Asset Excellence
              </h2>
              <p className="mt-3 max-w-md text-[15px] text-white/60">
                Explore our state-of-the-art fleet and technical inventory
                available for global deployment. Precision-maintained and
                safety-certified.
              </p>
            </div>
            <div className="flex gap-2 text-xs">
              <span className="rounded-sm bg-secondary px-4 py-2 label-tag">
                Marine Vessels
              </span>
              <span className="rounded-sm border border-white/25 px-4 py-2 label-tag text-white/60">
                Support Equipment
              </span>
              <span className="rounded-sm border border-white/25 px-4 py-2 label-tag text-white/60">
                Industrial Equipment
              </span>
            </div>
          </Reveal>

          <RevealStagger className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {vessels.map((v) => (
              <motion.div
                key={v.name}
                variants={revealItem}
                className="grid grid-cols-1 gap-5 bg-primary-deep p-5 sm:grid-cols-[180px_1fr]"
              >
                <SiteImage
                  src={v.image}
                  alt={v.name}
                  wrapperClassName="aspect-[4/3] w-full rounded"
                />
                <div className="flex flex-col">
                  <p className="font-heading text-lg font-bold">{v.name}</p>
                  <p className="label-tag mt-1 text-white/50">{v.type}</p>
                  <div className="mt-4 grid grid-cols-3 gap-2">
                    {v.specs.map((s) => (
                      <div key={s.label}>
                        <p className="label-tag text-white/40">{s.label}</p>
                        <p className="mt-1 text-sm font-semibold">{s.value}</p>
                      </div>
                    ))}
                  </div>
                  <Button variant="primary" size="sm" className="mt-5 w-fit">
                    Availability Enquiry
                  </Button>
                </div>
              </motion.div>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-outline-variant/40 bg-surface-container-low py-16">
        <RevealStagger className="container-grid grid grid-cols-2 gap-8 text-center lg:grid-cols-4">
          {stats.map((s) => (
            <motion.div key={s.label} variants={revealItem}>
              <p className="font-heading text-3xl font-extrabold text-primary lg:text-4xl">
                {s.value}
              </p>
              <p className="label-tag mt-2 text-secondary">{s.label}</p>
            </motion.div>
          ))}
        </RevealStagger>
      </section>
    </>
  );
}
