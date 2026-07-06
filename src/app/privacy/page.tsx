import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | 1776 Coffee",
  description:
    "1776 Coffee privacy policy — how we collect, use, and protect your information.",
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-24">
      <h1 className="font-serif text-4xl font-bold text-espresso mb-2">
        Privacy Policy
      </h1>
      <p className="text-espresso/40 text-sm mb-12">
        Last updated: July 2026
      </p>

      <div className="prose prose-espresso max-w-none space-y-8 text-espresso/70 leading-relaxed">
        <section>
          <h2 className="font-serif text-2xl font-bold text-espresso mb-4">
            Our Commitment to Privacy
          </h2>
          <p>
            At 1776 Coffee, we take your privacy seriously. This policy
            describes how we collect, use, and protect your personal
            information when you visit our website or interact with us in our
            shop.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-bold text-espresso mb-4">
            Information We Collect
          </h2>
          <p>
            We may collect basic information you voluntarily provide, such as
            your name and email address when you contact us or sign up for
            updates. We also collect anonymous usage data through standard web
            analytics to improve our website experience.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-bold text-espresso mb-4">
            How We Use Your Information
          </h2>
          <p>
            We use the information we collect to respond to your inquiries,
            send occasional updates if you&apos;ve opted in, and improve our
            services. We do not sell, trade, or share your personal information
            with third parties for marketing purposes.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-bold text-espresso mb-4">
            Cookies
          </h2>
          <p>
            Our website may use cookies for basic functionality and analytics.
            You can disable cookies in your browser settings at any time.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-bold text-espresso mb-4">
            Contact
          </h2>
          <p>
            If you have questions about this policy, please reach out to us at
            our shop in Cookeville, TN, or contact us through our website.
          </p>
        </section>
      </div>
    </div>
  );
}
