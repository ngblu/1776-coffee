import type { Metadata } from "next";
import { Leaf, Flame, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Story | 1776 Coffee",
  description:
    "Learn about the origins of 1776 Coffee in Cookeville, TN — our passion for craft coffee, our space, and our commitment to community.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-deep to-surface py-24 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-4">
            Our Story
          </h1>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Born from a belief that great coffee is worth the effort — and that
            everyone deserves a place to belong.
          </p>
        </div>
      </section>

      {/* The Beginning */}
      <section className="py-24 bg-deep">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
              The Beginning
            </h2>
            <div className="space-y-4 text-white/50 leading-relaxed">
              <p>
                1776 Coffee was founded on a simple idea: that the spirit of
                independence and craftsmanship that built this nation belongs in
                every cup. We opened our doors in Cookeville, Tennessee with a
                refurbished espresso machine, a handful of single-origin beans,
                and a deep conviction that coffee could be more than a morning
                ritual — it could be a gathering place.
              </p>
              <p>
                Our name reflects our commitment to purpose. Just as 1776 marked
                a declaration of independence, our shop declares independence
                from rushed, mass-produced coffee. Every drink we serve is made
                with intention.
              </p>
              <p>
                From day one, we&apos;ve focused on three things: sourcing the
                best beans we can find, treating every customer like a neighbor,
                and building a space where the community feels at home.
              </p>
            </div>
          </div>
          <div className="bg-surface border border-white/5 rounded-3xl aspect-[4/5] flex items-center justify-center">
            <div className="text-center text-white/20">
              <div className="font-serif text-6xl mb-2">1776</div>
              <div className="text-sm tracking-widest uppercase">Cookeville, TN</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Coffee */}
      <section className="py-24 bg-surface">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 bg-surface-hover rounded-3xl p-12">
            <div className="grid grid-cols-3 gap-6 text-center">
              {[
                { icon: Leaf, label: "Sustainably Sourced" },
                { icon: Flame, label: "Small-Batch Roasted" },
                { icon: Clock, label: "Fresh Every Day" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex flex-col items-center gap-3">
                  <div className="w-14 h-14 rounded-full bg-blue/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-blue" />
                  </div>
                  <span className="text-xs font-medium text-white/40">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
              Our Coffee
            </h2>
            <div className="space-y-4 text-white/50 leading-relaxed">
              <p>
                We source our beans from farms that share our values: quality
                first, fair partnerships, and sustainable practices. Every
                origin we carry tells a story — from the highlands of Ethiopia
                to the volcanic soil of Guatemala.
              </p>
              <p>
                Our roasting is done in small batches, allowing us to dial in
                the perfect profile for each bean. We roast to highlight what
                makes each origin special — not to mask it behind a dark roast.
              </p>
              <p>
                The result? Coffee that&apos;s vibrant, complex, and
                unmistakably fresh. We believe you&apos;ll taste the difference.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Space */}
      <section className="py-24 bg-deep">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
              Our Space
            </h2>
            <div className="space-y-4 text-white/50 leading-relaxed">
              <p>
                Walk through our doors and you&apos;ll find worn leather chairs,
                communal tables made from reclaimed Tennessee oak, and the
                constant hum of conversation. We designed our space to feel like
                a home away from home — warm lighting, exposed brick, and plenty
                of outlets.
              </p>
              <p>
                Whether you&apos;re here to work, catch up with friends, or
                simply enjoy a quiet moment with a book and a latte,
                there&apos;s a seat for you. Our baristas know the regulars by
                name — and their orders by heart.
              </p>
              <p>
                On weekends, we host local musicians and open mic nights. The
                coffee is always fresh, and the WiFi is always free.
              </p>
            </div>
          </div>
          <div className="bg-surface border border-white/5 rounded-3xl aspect-[4/5] flex items-center justify-center">
            <div className="text-center text-white/20">
              <div className="font-serif text-4xl mb-2">☕</div>
              <div className="text-sm tracking-widest uppercase">Our Home</div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-16 bg-deep">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-blue/10 border border-blue/20 rounded-3xl py-12 px-8 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
              Join Us
            </h2>
            <p className="text-white/50 text-lg max-w-xl mx-auto mb-8">
              Stop by for a cup, stay for the community. We can&apos;t wait to
              meet you.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-white/50 text-sm mb-8">
              <span className="px-4 py-2 bg-surface rounded-full">Mon–Fri: 6am–6pm</span>
              <span className="px-4 py-2 bg-surface rounded-full">Sat: 7am–5pm</span>
              <span className="px-4 py-2 bg-surface rounded-full">Sun: 8am–3pm</span>
            </div>
            <a
              href="/order"
              className="inline-flex items-center px-8 py-3 bg-blue text-white font-semibold rounded-full hover:bg-blue-dark transition-colors"
            >
              Order Ahead
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
