"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function validate(): FormErrors {
    const e: FormErrors = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!form.email.trim()) {
      e.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = "Please enter a valid email.";
    }
    if (!form.message.trim()) e.message = "Message is required.";
    return e;
  }

  function handleSubmit(ev: FormEvent) {
    ev.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
    }
  }

  if (submitted) {
    return (
      <section className="bg-cream py-24">
        <div className="mx-auto max-w-xl px-6 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", duration: 0.5 }}
          >
            <CheckCircle className="text-amber size-16 mx-auto" aria-hidden="true" />
          </motion.div>
          <h2 className="mt-6 font-serif text-3xl text-espresso">
            Thanks! We&apos;ll be in touch.
          </h2>
          <p className="mt-3 text-espresso/60">
            Your message has been received. We typically respond within 24 hours.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-cream py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Left text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex-1"
          >
            <h2 className="font-serif text-4xl text-espresso">Get In Touch</h2>
            <p className="mt-4 text-espresso/70 leading-relaxed max-w-md">
              Have a question, want to book our space, or just want to say hello?
              We&apos;d love to hear from you. Fill out the form and we&apos;ll get
              back to you as soon as we can.
            </p>
          </motion.div>

          {/* Right form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex-1"
          >
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div>
                <label htmlFor="contact-name" className="sr-only">
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-white border border-espresso/10 rounded-xl px-5 py-3 text-espresso placeholder:text-espresso/30 focus:outline-none focus:border-amber focus:ring-2 focus:ring-amber/20 transition"
                />
                {errors.name && (
                  <p className="mt-1 text-brick text-sm">{errors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="contact-email" className="sr-only">
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-white border border-espresso/10 rounded-xl px-5 py-3 text-espresso placeholder:text-espresso/30 focus:outline-none focus:border-amber focus:ring-2 focus:ring-amber/20 transition"
                />
                {errors.email && (
                  <p className="mt-1 text-brick text-sm">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="contact-message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  placeholder="Your Message"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-white border border-espresso/10 rounded-xl px-5 py-3 text-espresso placeholder:text-espresso/30 focus:outline-none focus:border-amber focus:ring-2 focus:ring-amber/20 transition resize-none"
                />
                {errors.message && (
                  <p className="mt-1 text-brick text-sm">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="bg-amber text-cream px-8 py-3 rounded-full font-medium transition-all hover:bg-amber/90 hover:shadow-lg"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
