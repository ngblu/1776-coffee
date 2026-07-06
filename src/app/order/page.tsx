"use client";

import { useState, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus, X, ShoppingBag, Check } from "lucide-react";

const categories = ["All", "Espresso", "Brewed", "Seasonal", "Tea", "Food"] as const;
type Category = (typeof categories)[number];

interface MenuItem {
  id: string;
  name: string;
  desc: string;
  price: number;
  category: Exclude<Category, "All">;
}

const menuItems: MenuItem[] = [
  // Espresso
  { id: "americano", name: "Americano", desc: "Espresso pulled over hot water for a clean, bold cup.", price: 3.5, category: "Espresso" },
  { id: "latte", name: "Latte", desc: "Double espresso with steamed milk and a thin layer of microfoam.", price: 4.75, category: "Espresso" },
  { id: "cappuccino", name: "Cappuccino", desc: "Equal parts espresso, steamed milk, and thick foam.", price: 4.5, category: "Espresso" },
  { id: "mocha", name: "Mocha", desc: "Rich chocolate sauce with espresso and steamed milk.", price: 5.5, category: "Espresso" },
  { id: "flat-white", name: "Flat White", desc: "Double ristretto poured over velvety microfoam milk.", price: 4.75, category: "Espresso" },
  { id: "cortado", name: "Cortado", desc: "Equal parts espresso and warm steamed milk.", price: 4.25, category: "Espresso" },

  // Brewed
  { id: "house-drip", name: "House Drip", desc: "Our signature 1776 blend, brewed fresh throughout the day.", price: 3.0, category: "Brewed" },
  { id: "pour-over", name: "Pour Over", desc: "Single-origin coffee brewed to order with precision.", price: 5.0, category: "Brewed" },
  { id: "cold-brew", name: "Cold Brew", desc: "Steeped for 18 hours for a smooth, naturally sweet finish.", price: 4.5, category: "Brewed" },
  { id: "nitro", name: "Nitro Cold Brew", desc: "Cold brew infused with nitrogen for a creamy texture.", price: 5.5, category: "Brewed" },
  { id: "french-press", name: "French Press", desc: "Full-immersion brew for two. Rich and bold.", price: 6.0, category: "Brewed" },

  // Seasonal
  { id: "maple-latte", name: "Maple Cinnamon Latte", desc: "Espresso with real maple syrup, cinnamon, and oat milk.", price: 5.75, category: "Seasonal" },
  { id: "honey-cortado", name: "Honey Lavender Cortado", desc: "Equal parts espresso and milk with local honey and lavender.", price: 5.25, category: "Seasonal" },
  { id: "pumpkin-latte", name: "Pumpkin Spice Latte", desc: "House-made pumpkin sauce with espresso and steamed milk.", price: 5.75, category: "Seasonal" },
  { id: "peppermint-mocha", name: "Peppermint Mocha", desc: "Dark chocolate and peppermint syrup with espresso.", price: 5.75, category: "Seasonal" },

  // Tea
  { id: "chai-latte", name: "Chai Latte", desc: "House-spiced chai concentrate with steamed milk.", price: 4.75, category: "Tea" },
  { id: "matcha-latte", name: "Matcha Latte", desc: "Ceremonial-grade matcha whisked with steamed milk.", price: 5.5, category: "Tea" },
  { id: "london-fog", name: "London Fog", desc: "Earl Grey tea with vanilla, lavender, and steamed milk.", price: 4.75, category: "Tea" },
  { id: "hot-chocolate", name: "Hot Chocolate", desc: "Rich dark chocolate with steamed milk.", price: 4.0, category: "Tea" },
  { id: "hot-tea", name: "Hot Tea", desc: "Selection of premium loose-leaf teas.", price: 3.5, category: "Tea" },

  // Food
  { id: "croissant", name: "Butter Croissant", desc: "Flaky, golden, and made fresh daily.", price: 4.0, category: "Food" },
  { id: "cinnamon-roll", name: "Cinnamon Roll", desc: "Warm, gooey, and generously iced.", price: 5.5, category: "Food" },
  { id: "avocado-toast", name: "Avocado Toast", desc: "Sourdough with smashed avocado and cherry tomatoes.", price: 8.0, category: "Food" },
  { id: "blueberry-muffin", name: "Blueberry Muffin", desc: "Bakery-fresh with streusel top.", price: 4.5, category: "Food" },
  { id: "bacon-biscuit", name: "Bacon & Egg Biscuit", desc: "House-made biscuit with bacon, egg, and cheddar.", price: 7.0, category: "Food" },
];

type CartItem = {
  item: MenuItem;
  quantity: number;
};

export default function OrderPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [showSuccess, setShowSuccess] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const filteredItems = useMemo(() => {
    if (activeCategory === "All") return menuItems;
    return menuItems.filter((i) => i.category === activeCategory);
  }, [activeCategory]);

  const addToCart = (item: MenuItem) => {
    setCart((prev) => {
      const existing = prev.find((ci) => ci.item.id === item.id);
      if (existing) {
        return prev.map((ci) =>
          ci.item.id === item.id ? { ...ci, quantity: ci.quantity + 1 } : ci
        );
      }
      return [...prev, { item, quantity: 1 }];
    });
    setCartOpen(true);
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart((prev) => {
      const updated = prev.map((ci) =>
        ci.item.id === id
          ? { ...ci, quantity: Math.max(0, ci.quantity + delta) }
          : ci
      );
      return updated.filter((ci) => ci.quantity > 0);
    });
  };

  const removeItem = (id: string) => {
    setCart((prev) => prev.filter((ci) => ci.item.id !== id));
  };

  const subtotal = cart.reduce((sum, ci) => sum + ci.item.price * ci.quantity, 0);
  const tax = subtotal * 0.0925;
  const total = subtotal + tax;

  const handlePlaceOrder = () => {
    if (cart.length === 0) return;
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      setCart([]);
      setCartOpen(false);
    }, 3000);
  };

  const cartItemCount = cart.reduce((sum, ci) => sum + ci.quantity, 0);

  return (
    <div className="bg-deep min-h-screen">
      {/* Header */}
      <section className="py-16 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-white font-serif text-3xl md:text-4xl font-bold mb-3">
            Order Ahead
          </h1>
          <p className="text-white/50 text-lg">
            Skip the line. We&apos;ll have it ready.
          </p>
        </div>
      </section>

      {/* Category filter pills */}
      <div className="max-w-7xl mx-auto px-6 mb-10">
        <div className="flex overflow-x-auto gap-2 pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`shrink-0 rounded-full px-5 py-2 text-sm font-medium transition-colors whitespace-nowrap ${
                activeCategory === cat
                  ? "bg-blue text-white"
                  : "bg-surface text-white/60 hover:bg-surface-hover hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Main content area */}
      <div className="max-w-7xl mx-auto px-6 pb-24 flex flex-col lg:flex-row gap-8">
        {/* Menu grid */}
        <div className="flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  className="bg-surface rounded-2xl p-6 border border-white/5 hover:border-blue/30 transition-colors cursor-pointer group"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-white font-serif text-lg">
                        {item.name}
                      </h3>
                      <p className="text-white/40 text-sm mt-1">
                        {item.desc}
                      </p>
                      <p className="text-blue font-bold mt-3">
                        ${item.price.toFixed(2)}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => addToCart(item)}
                    className="mt-4 bg-blue/10 text-blue border border-blue/20 rounded-full px-4 py-1.5 text-sm font-medium hover:bg-blue hover:text-white transition-colors"
                  >
                    Add to Order
                  </button>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Mobile cart toggle button */}
        <button
          onClick={() => setCartOpen(!cartOpen)}
          className="lg:hidden fixed bottom-6 right-6 z-40 bg-blue text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg shadow-blue/30"
        >
          <ShoppingBag size={22} />
          {cartItemCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-white text-blue text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
              {cartItemCount}
            </span>
          )}
        </button>

        {/* Desktop sidebar / Mobile drawer */}
        <div
          className={`${
            cartOpen
              ? "fixed inset-0 z-50 lg:static lg:inset-auto"
              : "hidden lg:block"
          }`}
        >
          {/* Mobile overlay */}
          {cartOpen && (
            <div
              className="fixed inset-0 bg-black/60 lg:hidden"
              onClick={() => setCartOpen(false)}
            />
          )}
          <div
            className={`${
              cartOpen
                ? "fixed bottom-0 left-0 right-0 max-h-[70vh] overflow-y-auto rounded-t-3xl lg:static lg:rounded-2xl lg:max-h-none lg:overflow-visible"
                : ""
            } bg-surface border-l border-white/10 p-6 w-full lg:w-96 lg:shrink-0`}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-white font-serif text-xl">Your Order</h2>
              <button
                onClick={() => setCartOpen(false)}
                className="lg:hidden text-white/40 hover:text-white"
              >
                <X size={20} />
              </button>
            </div>

            {cart.length === 0 ? (
              <p className="text-white/40 text-sm text-center py-8">
                Your order is empty. Add some items to get started!
              </p>
            ) : (
              <>
                <AnimatePresence>
                  {cart.map((ci) => (
                    <motion.div
                      key={ci.item.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="flex items-center gap-3 py-3 border-b border-white/5"
                    >
                      <div className="flex-1 min-w-0">
                        <p className="text-white text-sm font-medium truncate">
                          {ci.item.name}
                        </p>
                        <p className="text-white/40 text-xs">
                          ${ci.item.price.toFixed(2)} each
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(ci.item.id, -1)}
                          className="w-7 h-7 rounded-full bg-surface-hover flex items-center justify-center text-white/60 hover:text-white transition-colors"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="text-white text-sm w-6 text-center">
                          {ci.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(ci.item.id, 1)}
                          className="w-7 h-7 rounded-full bg-surface-hover flex items-center justify-center text-white/60 hover:text-white transition-colors"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(ci.item.id)}
                        className="text-white/20 hover:text-red-400 transition-colors ml-1"
                      >
                        <X size={16} />
                      </button>
                    </motion.div>
                  ))}
                </AnimatePresence>

                <div className="mt-6 space-y-2 text-sm">
                  <div className="flex justify-between text-white/50">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-white/50">
                    <span>Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-white font-bold text-base pt-2 border-t border-white/10">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>

                <button
                  onClick={handlePlaceOrder}
                  className="mt-6 bg-blue text-white rounded-full w-full py-3 font-medium hover:bg-blue-dark transition-colors"
                >
                  Place Order
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Success modal */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-6"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-surface rounded-3xl p-8 text-center max-w-sm w-full border border-blue/20"
            >
              <div className="w-16 h-16 rounded-full bg-blue/20 flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-blue" />
              </div>
              <h2 className="text-white font-serif text-xl mb-2">
                Order placed!
              </h2>
              <p className="text-white/50 text-sm">
                We&apos;ll text you when it&apos;s ready.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
