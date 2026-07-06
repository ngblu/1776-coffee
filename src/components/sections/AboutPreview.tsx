"use client";

import { motion } from "framer-motion";

export default function AboutPreview() {
  return (
    <section id="about" className="bg-deep py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left: image placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 w-full"
          >
            <div className="rounded-2xl bg-surface border border-white/5 aspect-square flex items-center justify-center">
              <svg
                viewBox="0 0 120 120"
                className="w-24 h-24 text-blue/30"
                fill="currentColor"
                aria-hidden="true"
              >
                {/* Coffee bean illustration */}
                <ellipse cx="45" cy="55" rx="22" ry="36" transform="rotate(-20 45 55)" />
                <ellipse cx="75" cy="55" rx="22" ry="36" transform="rotate(20 75 55)" />
                <path
                  d="M52 30 Q60 42 58 50"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </div>
          </motion.div>

          {/* Right: content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <span className="text-blue text-xs tracking-[0.2em] uppercase font-medium">
              OUR STORY
            </span>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl text-white leading-tight">
              Rooted in Craft,
              <br />
              Driven by Community
            </h2>
            <p className="mt-6 text-white/50 leading-relaxed">
              Founded in 2024, 1776 Coffee was born from a simple belief: great
              coffee should be both exceptional and accessible. We source our beans
              from responsible growers and roast in small batches to bring out the
              unique character of every origin.
            </p>
            <p className="mt-4 text-white/50 leading-relaxed">
              More than a coffee house, we&apos;re a gathering place. From students
              cramming for exams to friends catching up, our space is your space.
              Every cup we serve is an invitation to slow down, connect, and savor
              the moment.
            </p>
            <div className="mt-8">
              <a
                href="/about"
                className="inline-flex items-center gap-1 text-blue font-medium hover:underline"
              >
                Learn More &rarr;
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
