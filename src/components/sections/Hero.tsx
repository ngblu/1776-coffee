"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-deep overflow-hidden">
      {/* Decorative blue glow gradient */}
      <div aria-hidden="true" className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none">
        <svg viewBox="0 0 600 600" className="w-full h-full opacity-[0.15]" fill="var(--color-blue)">
          <ellipse cx="350" cy="200" rx="140" ry="90" filter="blur(30px)" opacity="0.5" />
          <ellipse cx="300" cy="240" rx="100" ry="60" filter="blur(20px)" opacity="0.35" />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-6 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left content */}
          <div className="flex-1 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-blue text-xs tracking-[0.2em] uppercase font-medium">
                EST. 2024 · COOKEVILLE, TN
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-4 font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white leading-tight"
            >
              Coffee Worth
              <br />
              the Revolution
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 text-white/50 text-lg md:text-xl max-w-lg"
            >
              Hand-crafted coffee in the heart of Cookeville. We source the finest
              beans and brew with purpose — every cup, a declaration of independence
              from ordinary coffee.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <a
                href="/menu"
                className="inline-flex items-center bg-blue text-white px-8 py-3 rounded-full font-medium transition-all hover:bg-blue-dark hover:shadow-lg"
              >
                View Menu
              </a>
              <a
                href="/order"
                className="inline-flex items-center border-2 border-blue/30 text-blue px-8 py-3 rounded-full font-medium transition-all hover:border-blue"
              >
                Order Online
              </a>
            </motion.div>
          </div>

          {/* Right: decorative coffee cup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 flex justify-center lg:justify-end"
            aria-hidden="true"
          >
            <svg
              viewBox="0 0 300 300"
              className="w-64 h-64 md:w-80 md:h-80"
              fill="none"
              stroke="white"
              strokeWidth="2"
            >
              {/* Cup body */}
              <path
                d="M80 120 L80 220 Q80 260 150 260 Q220 260 220 220 L220 120"
                strokeOpacity="0.1"
              />
              {/* Cup handle */}
              <path
                d="M220 140 Q260 140 260 170 Q260 200 220 200"
                strokeOpacity="0.1"
              />
              {/* Saucer */}
              <ellipse cx="150" cy="268" rx="90" ry="12" strokeOpacity="0.1" />
              {/* Steam wisps */}
              <path
                d="M110 100 Q105 80 115 60 Q120 45 110 30"
                stroke="var(--color-blue)"
                strokeOpacity="0.3"
                strokeWidth="1.5"
              />
              <path
                d="M150 90 Q145 70 155 50 Q160 35 150 20"
                stroke="var(--color-blue)"
                strokeOpacity="0.2"
                strokeWidth="1.5"
              />
              <path
                d="M190 100 Q185 85 192 70 Q198 55 190 40"
                stroke="var(--color-blue)"
                strokeOpacity="0.25"
                strokeWidth="1.5"
              />
              {/* Coffee surface */}
              <ellipse cx="150" cy="120" rx="68" ry="8" fill="white" fillOpacity="0.05" />
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
