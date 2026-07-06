import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | 1776 Coffee",
  description:
    "Terms of service for 1776 Coffee website and services.",
};

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-24">
      <h1 className="font-serif text-4xl font-bold text-espresso mb-2">
        Terms of Service
      </h1>
      <p className="text-espresso/40 text-sm mb-12">
        Last updated: July 2026
      </p>

      <div className="prose prose-espresso max-w-none space-y-8 text-espresso/70 leading-relaxed">
        <section>
          <h2 className="font-serif text-2xl font-bold text-espresso mb-4">
            Acceptance of Terms
          </h2>
          <p>
            By accessing and using the 1776 Coffee website, you agree to be
            bound by these Terms of Service. If you do not agree with any part
            of these terms, please do not use our website.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-bold text-espresso mb-4">
            Use of Website
          </h2>
          <p>
            Our website is provided for informational purposes. You may browse
            our menu, learn about our story, and find our location. You agree
            not to use the website for any unlawful purpose or in violation of
            these terms.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-bold text-espresso mb-4">
            Intellectual Property
          </h2>
          <p>
            All content on this website — including text, graphics, logos, and
            images — is the property of 1776 Coffee and is protected by
            applicable intellectual property laws. You may not reproduce or
            distribute our content without permission.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-bold text-espresso mb-4">
            Limitation of Liability
          </h2>
          <p>
            1776 Coffee is not liable for any damages arising from the use of
            this website. The information provided is for general purposes only
            and may change without notice.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-bold text-espresso mb-4">
            Changes to Terms
          </h2>
          <p>
            We reserve the right to modify these terms at any time. Changes
            will be effective immediately upon posting. Continued use of the
            website constitutes acceptance of the updated terms.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-bold text-espresso mb-4">
            Contact
          </h2>
          <p>
            For questions about these terms, please visit us in Cookeville, TN
            or reach out through our website.
          </p>
        </section>
      </div>
    </div>
  );
}
