"use client";

import { motion } from "framer-motion";
import { Clock, MapPin } from "lucide-react";

export default function Locations() {
  return (
    <section className="bg-espresso text-cream py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <span className="text-amber/80 text-xs tracking-[0.2em] uppercase font-medium">
              FIND US
            </span>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl text-cream leading-tight">
              Visit Our Coffee House
            </h2>
            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="text-amber shrink-0 size-5 mt-0.5" aria-hidden="true" />
                <p className="text-cream/70">
                  123 Main Street<br />
                  Cookeville, TN 38501
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="text-amber shrink-0 size-5" aria-hidden="true" />
                <div className="text-cream/70">
                  <p>Mon–Fri: 6:00 AM – 8:00 PM</p>
                  <p>Sat–Sun: 7:00 AM – 6:00 PM</p>
                </div>
              </div>
              <p className="text-cream/60 text-sm ml-8">(931) 555-1776</p>
            </div>
            <div className="mt-8">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-amber font-medium hover:underline"
              >
                Get Directions &rarr;
              </a>
            </div>
          </motion.div>

          {/* Right: map placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex-1 w-full"
          >
            <div className="rounded-2xl bg-cream/10 aspect-[4/3] flex items-center justify-center relative overflow-hidden">
              {/* Grid pattern */}
              <svg
                className="absolute inset-0 w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-cream/5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
              {/* Location pin */}
              <svg
                viewBox="0 0 40 56"
                className="w-10 h-14 relative z-10"
                fill="var(--color-amber)"
                aria-hidden="true"
              >
                <path d="M20 0 C9 0 0 9 0 20 C0 35 20 56 20 56 C20 56 40 35 40 20 C40 9 31 0 20 0 Z" />
                <circle cx="20" cy="20" r="8" fill="var(--color-cream)" />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
