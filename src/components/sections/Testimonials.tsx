"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "The Signature Latte is hands down the best in town. I've been coming here since they opened and it just keeps getting better. The atmosphere is perfect for getting work done or meeting friends.",
    name: "Sarah M.",
    detail: "Regular since day one",
  },
  {
    quote:
      "Finally, a coffee shop in Cookeville that takes its craft seriously. The pour over here rivals anything I've had in Nashville. The baristas genuinely care about every cup they make.",
    name: "David R.",
    detail: "Weekend regular",
  },
  {
    quote:
      "1776 isn't just about great coffee — it's about community. I've met more neighbors here than anywhere else. The warm, welcoming vibe keeps me coming back every morning.",
    name: "Jennifer K.",
    detail: "Local resident",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-cream py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="font-serif text-4xl text-espresso text-center">
          What Our Guests Say
        </h2>

        <div className="mt-12 flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 md:grid md:grid-cols-3 md:overflow-visible md:snap-none md:pb-0">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-espresso/5 min-w-[300px] md:min-w-0 snap-start flex-shrink-0 md:flex-shrink flex flex-col"
            >
              <Quote className="text-amber/30 size-10" aria-hidden="true" />
              <p className="mt-4 text-espresso/70 italic flex-1 leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 pt-4 border-t border-espresso/5">
                <p className="text-espresso font-medium text-sm">{t.name}</p>
                <p className="text-espresso/40 text-sm mt-0.5">{t.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
