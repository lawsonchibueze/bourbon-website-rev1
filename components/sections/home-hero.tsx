"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
// import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const slides = [
  {
    src: "/stitch/stitch-01.jpg",
    alt: "Bourbon Energy Services offshore support vessel underway",
    // eyebrow: "Offshore Leadership",
    title: "Powering Energy Operations With Precision.",
    copy: "Reliable offshore, marine and industrial solutions for a changing energy sector. We bridge the gap between complex engineering and operational excellence.",
    primaryCta: { label: "Explore Our Services", href: "/services" },
    secondaryCta: { label: "Request a Quote", href: "/contact" },
  },
  {
    src: "/stitch/stitch-02.jpg",
    alt: "Aerial view of Bourbon Energy Services marine logistics terminal",
    // eyebrow: "Marine Logistics",
    title: "Global Supply Chains, Engineered for Certainty.",
    copy: "End-to-end logistics and technical procurement keep offshore projects on schedule, from port to platform.",
    primaryCta: { label: "View Our Projects", href: "/projects" },
    secondaryCta: { label: "Request a Quote", href: "/contact" },
  },
  {
    src: "/stitch/stitch-03.jpg",
    alt: "Offshore platform at dusk supported by Bourbon Energy Services",
    // eyebrow: "Industrial Excellence",
    title: "Uncompromising Standards. Zero-Harm Operations.",
    copy: "Three decades of technical integrity across the world's most demanding offshore and industrial environments.",
    primaryCta: { label: "About Bourbon", href: "/about" },
    secondaryCta: { label: "Request a Quote", href: "/contact" },
  },
];

const SLIDE_DURATION = 6500;

export default function HomeHero() {
  const [index, setIndex] = useState(0);
  const [progressKey, setProgressKey] = useState(0);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % slides.length);
    setProgressKey((k) => k + 1);
  }, []);

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + slides.length) % slides.length);
    setProgressKey((k) => k + 1);
  }, []);

  useEffect(() => {
    const id = setTimeout(next, SLIDE_DURATION);
    return () => clearTimeout(id);
  }, [progressKey, next]);

  const slide = slides[index];

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Bourbon Energy Services highlights"
      className="relative h-[560px] w-full overflow-hidden bg-primary-deep lg:h-[700px]"
    >
      <AnimatePresence mode="sync">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={index === 0}
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Brand overlay: Primary Navy -> Transparent */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-deep/85 via-primary-deep/40 to-primary-deep/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/70 via-transparent to-transparent" />

      {/* Content */}
      <div className="container-grid relative flex h-full items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl text-white"
          >
            {/* <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-secondary" />
              <span className="label-tag text-white/75">{slide.eyebrow}</span>
            </div> */}
            <h1 className="font-heading mt-5 text-4xl font-bold leading-[1.12] lg:text-[52px] lg:leading-[1.1]">
              {slide.title}
            </h1>
            <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-white/80 lg:text-base">
              {slide.copy}
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link href={slide.primaryCta.href}>
                <Button variant="primary" size="lg" className="cursor-pointer">
                  {slide.primaryCta.label}
                </Button>
              </Link>
              <Link href={slide.secondaryCta.href}>
                <Button
                  variant="outlineLight"
                  size="lg"
                  className="cursor-pointer"
                >
                  {slide.secondaryCta.label}
                </Button>
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Scroll indicator */}
      {/* <div className="absolute inset-x-0 bottom-9 flex flex-col items-center gap-3">
        <p className="label-tag text-white/70">Scroll to Explore</p>
        <span className="relative block h-8 w-px overflow-hidden bg-white/20">
          <motion.span
            key={progressKey}
            initial={{ y: "-100%" }}
            animate={{ y: "100%" }}
            transition={{ duration: SLIDE_DURATION / 1000, ease: "linear" }}
            className="absolute inset-0 bg-secondary"
          />
        </span>
      </div> */}

      {/* Slide indicators */}
      {/* <div className="absolute bottom-9 left-1/2 hidden -translate-x-1/2 items-center gap-2 sm:flex lg:left-20 lg:translate-x-0"></div> */}

      {/* Prev / Next controls */}
      <div className="absolute bottom-8 right-6 flex items-center gap-3 lg:right-20">
        {/* <button
          aria-label="Previous slide"
          onClick={prev}
          className="flex h-10 w-10 items-center justify-center rounded border border-white/25 bg-white/5 text-white backdrop-blur-sm transition-colors hover:bg-white/15"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button
          aria-label="Next slide"
          onClick={next}
          className="flex h-10 w-10 items-center justify-center rounded border border-white/25 bg-white/5 text-white backdrop-blur-sm transition-colors hover:bg-white/15"
        >
          <ChevronRight className="h-4 w-4" />
        </button> */}
        {slides.map((s, i) => (
          <button
            key={s.title}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === index}
            onClick={() => {
              setIndex(i);
              setProgressKey((k) => k + 1);
            }}
            className={`h-1.5 rounded-full transition-all ${
              i === index ? "w-8 bg-secondary" : (
                "w-1.5 bg-white/40 hover:bg-white/60"
              )
            }`}
          />
        ))}
      </div>
    </section>
  );
}
