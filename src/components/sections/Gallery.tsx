"use client";

import { motion } from "framer-motion";

const photos = [
  "Photo 1",
  "Photo 2",
  "Photo 3",
  "Photo 4",
  "Photo 5",
  "Photo 6",
];

export default function Gallery() {
  return (
    <section className="bg-wheat/30 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="font-serif text-4xl text-espresso">Follow the Journey</h2>
          <div className="w-16 h-1 bg-amber mx-auto mt-4" />
          <p className="mt-4 text-amber font-medium">@1776coffee</p>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((label, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group relative bg-espresso/10 rounded-2xl aspect-square overflow-hidden cursor-pointer hover:scale-[1.02] transition-transform"
            >
              {/* Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center text-espresso/20 font-serif text-lg">
                {label}
              </div>
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-amber/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-cream text-3xl font-light">+</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-amber font-medium hover:underline"
          >
            Follow Us on Instagram &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
