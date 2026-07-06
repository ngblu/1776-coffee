import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Menu | 1776 Coffee",
  description:
    "Browse our handcrafted espresso drinks, brewed coffee, seasonal specials, teas, and fresh pastries at 1776 Coffee in Cookeville, TN.",
};

const menuCategories = [
  {
    name: "Espresso Drinks",
    items: [
      {
        name: "Americano",
        desc: "Espresso pulled over hot water for a clean, bold cup.",
        price: "$3.50",
      },
      {
        name: "Latte",
        desc: "Double espresso with steamed milk and a thin layer of microfoam.",
        price: "$4.75",
      },
      {
        name: "Cappuccino",
        desc: "Equal parts espresso, steamed milk, and thick foam. A classic.",
        price: "$4.50",
      },
      {
        name: "Mocha",
        desc: "Rich chocolate sauce with espresso and steamed milk, topped with whipped cream.",
        price: "$5.50",
      },
      {
        name: "Flat White",
        desc: "Double ristretto poured over velvety microfoam milk.",
        price: "$4.75",
      },
    ],
  },
  {
    name: "Brewed Coffee",
    items: [
      {
        name: "House Drip",
        desc: "Our signature 1776 blend, brewed fresh throughout the day.",
        price: "$3.00",
      },
      {
        name: "Pour Over",
        desc: "Single-origin coffee brewed to order with precision and care.",
        price: "$5.00",
      },
      {
        name: "Cold Brew",
        desc: "Steeped for 18 hours for a smooth, naturally sweet finish.",
        price: "$4.50",
      },
      {
        name: "Nitro Cold Brew",
        desc: "Cold brew infused with nitrogen for a creamy, stout-like texture.",
        price: "$5.50",
      },
      {
        name: "French Press",
        desc: "Full-immersion brew for two. Rich, bold, and worth the wait.",
        price: "$6.00",
      },
    ],
  },
  {
    name: "Seasonal Specials",
    items: [
      {
        name: "Maple Cinnamon Latte",
        desc: "Espresso with real maple syrup, cinnamon, and steamed oat milk.",
        price: "$5.75",
      },
      {
        name: "Honey Lavender Cortado",
        desc: "Equal parts espresso and milk with local honey and lavender.",
        price: "$5.25",
      },
      {
        name: "Pumpkin Spice Latte",
        desc: "House-made pumpkin sauce with espresso and steamed milk.",
        price: "$5.75",
      },
      {
        name: "Peppermint Mocha",
        desc: "Dark chocolate and peppermint syrup with espresso. Holiday favorite.",
        price: "$5.75",
      },
    ],
  },
  {
    name: "Tea & More",
    items: [
      {
        name: "Chai Latte",
        desc: "House-spiced chai concentrate with steamed milk.",
        price: "$4.75",
      },
      {
        name: "Matcha Latte",
        desc: "Ceremonial-grade matcha whisked with steamed milk.",
        price: "$5.50",
      },
      {
        name: "London Fog",
        desc: "Earl Grey tea with vanilla, lavender, and steamed milk.",
        price: "$4.75",
      },
      {
        name: "Hot Chocolate",
        desc: "Rich dark chocolate with steamed milk, topped with whipped cream.",
        price: "$4.00",
      },
      {
        name: "Hot Tea",
        desc: "Selection of premium loose-leaf teas. Ask about today's offerings.",
        price: "$3.50",
      },
    ],
  },
  {
    name: "Pastries & Food",
    items: [
      {
        name: "Butter Croissant",
        desc: "Flaky, golden, and made fresh daily by our local bakery partner.",
        price: "$4.00",
      },
      {
        name: "Cinnamon Roll",
        desc: "Warm, gooey, and generously iced. A morning classic.",
        price: "$5.50",
      },
      {
        name: "Avocado Toast",
        desc: "Sourdough with smashed avocado, cherry tomatoes, and everything seasoning.",
        price: "$8.00",
      },
      {
        name: "Blueberry Muffin",
        desc: "Bakery-fresh with a streusel top and bursting with berries.",
        price: "$4.50",
      },
      {
        name: "Bacon & Egg Biscuit",
        desc: "House-made biscuit with bacon, fried egg, and sharp cheddar.",
        price: "$7.00",
      },
    ],
  },
];

export default function MenuPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-espresso text-cream py-24 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">
            Our Menu
          </h1>
          <p className="text-cream/70 text-lg max-w-xl mx-auto">
            Handcrafted drinks and fresh food, made with care and served with
            purpose.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        {/* Mobile category pills */}
        <div className="md:hidden flex overflow-x-auto gap-2 pb-4 -mx-2 px-2 mb-12 scrollbar-hide">
          {menuCategories.map((cat) => (
            <a
              key={cat.name}
              href={`#${cat.name.toLowerCase().replace(/\s+/g, "-")}`}
              className="shrink-0 px-4 py-2 bg-white border border-wheat/40 rounded-full text-sm font-medium text-espresso/70 hover:border-amber/50 hover:text-amber transition-colors whitespace-nowrap"
            >
              {cat.name}
            </a>
          ))}
        </div>

        {/* Categories */}
        <div className="space-y-16">
          {menuCategories.map((cat) => (
            <div
              key={cat.name}
              id={cat.name.toLowerCase().replace(/\s+/g, "-")}
            >
              <h2 className="font-serif text-2xl text-espresso mb-1">
                {cat.name}
              </h2>
              <div className="w-12 h-0.5 bg-amber mb-8" />
              <div className="space-y-4">
                {cat.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex justify-between items-baseline gap-4 py-3 border-b border-wheat/20 last:border-0"
                  >
                    <div>
                      <h3 className="font-serif text-lg font-bold text-espresso">
                        {item.name}
                      </h3>
                      <p className="text-espresso/50 text-sm mt-0.5">
                        {item.desc}
                      </p>
                    </div>
                    <span className="text-amber font-bold shrink-0 text-lg">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
