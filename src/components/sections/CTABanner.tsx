"use client";

import { motion } from "framer-motion";

export default function CTABanner() {
  return (
    <section className="relative bg-blue py-20 overflow-hidden">
      {/* Diagonal stripe pattern */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.05) 10px, rgba(255,255,255,0.05) 20px)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-serif text-4xl md:text-5xl text-white"
        >
          Ready for Something Exceptional?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 text-white/70 max-w-xl mx-auto text-lg"
        >
          Skip the ordinary. Experience coffee crafted with intention, in a
          space built for connection.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 flex flex-wrap justify-center gap-4"
        >
          <a
            href="/order"
            className="inline-flex items-center bg-white text-blue rounded-full px-10 py-4 font-semibold shadow-lg transition-all hover:bg-white/90 hover:shadow-xl animate-pulse"
          >
            Order Online
          </a>
          <a
            href="/menu"
            className="inline-flex items-center border-2 border-white/40 text-white px-10 py-4 rounded-full font-semibold transition-all hover:border-white"
          >
            View Menu
          </a>
        </motion.div>
      </div>
    </section>
  );
}
