"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const menuItems = [
  {
    name: "Signature Latte",
    description: "Velvety espresso with steamed milk and our house-made vanilla bean syrup.",
    price: "$5.50",
  },
  {
    name: "Cold Brew",
    description: "Slow-steeped for 20 hours — smooth, bold, and never bitter.",
    price: "$4.50",
  },
  {
    name: "Cappuccino",
    description: "Equal parts espresso, steamed milk, and airy foam. A timeless classic.",
    price: "$4.75",
  },
  {
    name: "Pour Over",
    description: "Single-origin beans brewed to order. Clean, bright, and nuanced.",
    price: "$5.00",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function MenuPreview() {
  return (
    <section id="menu" className="bg-deep py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-white">
            Our Menu
          </h2>
          <div className="w-16 h-1 bg-blue mx-auto mt-4" />
          <p className="mt-4 text-white/50 max-w-md mx-auto">
            Crafted with care — every drink tells a story.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {menuItems.map((item) => (
            <motion.div
              key={item.name}
              variants={itemVariants}
              className="bg-surface hover:bg-surface-hover rounded-2xl p-8 border border-white/5 shadow-none hover:shadow-lg hover:shadow-blue/5 transition-all"
            >
              {/* Coffee cup SVG icon */}
              <div className="mb-4 text-blue" aria-hidden="true">
                <svg
                  viewBox="0 0 40 40"
                  className="w-10 h-10"
                  fill="currentColor"
                  opacity="0.6"
                >
                  <path d="M8 14 L8 28 Q8 34 20 34 Q32 34 32 28 L32 14 Z" />
                  <path d="M32 16 Q36 16 36 20 Q36 24 32 24" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  <ellipse cx="20" cy="14" rx="11" ry="2" fill="var(--color-blue)" />
                </svg>
              </div>
              <h3 className="font-serif text-xl text-white">{item.name}</h3>
              <p className="mt-2 text-white/40 text-sm">{item.description}</p>
              <p className="mt-4 text-blue font-bold text-lg">{item.price}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <a
            href="/menu"
            className="inline-flex items-center gap-1 text-blue font-medium hover:text-blue-glow transition-colors"
          >
            Full Menu &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
