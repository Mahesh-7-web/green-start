"use client";

import { useMemo, useState, useCallback } from "react";
import { ProductCard } from "@/components/ProductCard";
import { catalogItems, sproutsProducts, type ItemCategory } from "@/data/catalog";
import type { CatalogItem } from "@/data/catalog";
import { ShoppingCart, X, Waves, Sprout, Trash2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/components/LanguageContext";

type CartItem = { item: CatalogItem; qty: number };

const categoryLabels: Record<ItemCategory | "all", string> = {
  all: "All Products",
  sprouts: "🌱 Sprouts",
  groundnuts: "🥜 Groundnuts",
  nuts: "🌰 Nuts & Seeds",
  superfoods: "✨ Superfoods",
  grains: "🌾 Grains & Malt",
  fresh: "🍎 Fresh",
  snacks: "🥤 Snacks",
};

const filterCategories: Array<ItemCategory | "all"> = [
  "all",
  "sprouts",
  "groundnuts",
  "nuts",
  "grains",
  "fresh",
];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState<ItemCategory | "all">("sprouts");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const { t } = useLanguage();

  const filtered = useMemo(() => {
    if (activeCategory === "all") return catalogItems;
    return catalogItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const totalItems = cart.reduce((s, c) => s + c.qty, 0);
  const totalPrice = cart.reduce((s, c) => s + c.item.price * c.qty, 0);

  const handleAddToCart = useCallback((item: CatalogItem, qty: number) => {
    setCart((prev) => {
      const existing = prev.find((c) => c.item.id === item.id);
      if (existing) {
        return prev.map((c) =>
          c.item.id === item.id ? { ...c, qty: c.qty + qty } : c
        );
      }
      return [...prev, { item, qty }];
    });
  }, []);

  function removeFromCart(id: string) {
    setCart((prev) => prev.filter((c) => c.item.id !== id));
  }

  return (
    <div>
      {/* Coastal Hero Banner */}
      <section
        className="relative overflow-hidden wave-divider"
        style={{
          background: "linear-gradient(135deg, #0c4a6e 0%, #0d9488 50%, #065f46 100%)",
          minHeight: "220px",
        }}
      >
        {/* Animated wave stripes */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.05) 10px, rgba(255,255,255,0.05) 20px)",
          }}
        />

        {/* Coconut tree SVG (left) */}
        <div className="absolute left-4 bottom-0 opacity-20 select-none pointer-events-none hidden sm:block">
          <svg width="80" height="160" viewBox="0 0 80 160" fill="none">
            <rect x="36" y="60" width="8" height="100" rx="4" fill="#15803d" className="animate-palmSway" style={{transformOrigin:"50% 100%"}} />
            <ellipse cx="40" cy="55" rx="35" ry="20" fill="#16a34a" className="animate-palmSway" style={{transformOrigin:"40px 160px", animationDelay:"0.5s"}} />
            <ellipse cx="15" cy="65" rx="25" ry="12" fill="#15803d" className="animate-palmSway" style={{transformOrigin:"40px 160px", animationDelay:"0.3s"}} transform="rotate(-20 15 65)"/>
            <ellipse cx="65" cy="65" rx="25" ry="12" fill="#15803d" className="animate-palmSway" style={{transformOrigin:"40px 160px", animationDelay:"0.7s"}} transform="rotate(20 65 65)"/>
          </svg>
        </div>

        {/* Coconut tree SVG (right) */}
        <div className="absolute right-4 bottom-0 opacity-20 select-none pointer-events-none hidden sm:block">
          <svg width="80" height="160" viewBox="0 0 80 160" fill="none">
            <rect x="36" y="60" width="8" height="100" rx="4" fill="#15803d" className="animate-palmSway" style={{transformOrigin:"50% 100%", animationDelay:"1s"}} />
            <ellipse cx="40" cy="55" rx="35" ry="20" fill="#16a34a" className="animate-palmSway" style={{transformOrigin:"40px 160px", animationDelay:"1.5s"}} />
            <ellipse cx="15" cy="65" rx="25" ry="12" fill="#15803d" className="animate-palmSway" style={{transformOrigin:"40px 160px", animationDelay:"1.3s"}} transform="rotate(-20 15 65)"/>
            <ellipse cx="65" cy="65" rx="25" ry="12" fill="#15803d" className="animate-palmSway" style={{transformOrigin:"40px 160px", animationDelay:"1.7s"}} transform="rotate(20 65 65)"/>
          </svg>
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-4 py-12 sm:px-6 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Sprout className="h-5 w-5 text-emerald-300" />
              <span className="text-sm font-medium text-emerald-300 uppercase tracking-wider">
                Farm to Doorstep
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Fresh Sprouts Catalogue
            </h1>
            <p className="mt-2 text-cyan-100 max-w-md">
              {sproutsProducts.length} varieties of freshly grown sprouts — picked daily, delivered hygienically.
            </p>
          </div>

          {/* Cart Button */}
          <button
            type="button"
            id="cart-open-btn"
            onClick={() => setCartOpen(true)}
            className="relative flex items-center gap-2 rounded-2xl bg-white/15 border border-white/20 backdrop-blur px-5 py-3 text-white font-semibold hover:bg-white/25 transition-colors"
          >
            <ShoppingCart className="h-5 w-5" />
            My Cart
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-amber-500 text-xs font-bold text-white">
                {totalItems}
              </span>
            )}
          </button>
        </div>

        {/* Wave bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 40" preserveAspectRatio="none" className="w-full h-10">
            <path d="M0,20 C200,40 400,0 600,20 C800,40 1000,0 1200,20 L1200,40 L0,40 Z" fill="#f8faf6"/>
          </svg>
        </div>
      </section>

      {/* Filters + Products */}
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        {/* Category filters */}
        <div className="mb-8 flex flex-wrap gap-2">
          {filterCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "rounded-full px-4 py-1.5 text-sm font-medium transition-all",
                activeCategory === cat
                  ? "bg-green-700 text-white shadow-md"
                  : "bg-white text-gray-600 ring-1 ring-green-100 hover:bg-green-50 hover:text-green-800",
              )}
            >
              {categoryLabels[cat]}
            </button>
          ))}
        </div>

        {/* Product grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <ProductCard
              key={item.id}
              item={item}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="py-12 text-center text-gray-500">
            No items in this category.
          </p>
        )}
      </div>

      {/* Cart Drawer */}
      {cartOpen && (
        <div
          className="fixed inset-0 z-[150] flex justify-end"
          style={{ background: "rgba(0,0,0,0.5)", backdropFilter: "blur(3px)" }}
          onClick={(e) => e.target === e.currentTarget && setCartOpen(false)}
        >
          <div className="relative h-full w-full max-w-sm bg-white shadow-2xl flex flex-col animate-slideUp">
            {/* Drawer Header */}
            <div className="flex items-center justify-between p-5 border-b border-green-100">
              <div className="flex items-center gap-2">
                <ShoppingCart className="h-5 w-5 text-green-700" />
                <h2 className="font-bold text-green-900 text-lg">My Cart</h2>
                {totalItems > 0 && (
                  <span className="rounded-full bg-green-100 text-green-700 px-2 py-0.5 text-xs font-bold">
                    {totalItems} items
                  </span>
                )}
              </div>
              <button
                type="button"
                onClick={() => setCartOpen(false)}
                className="rounded-lg p-1.5 hover:bg-gray-100 transition-colors"
              >
                <X className="h-5 w-5 text-gray-500" />
              </button>
            </div>

            {/* Cart items */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {cart.length === 0 ? (
                <div className="flex flex-col items-center gap-3 py-16 text-center">
                  <ShoppingCart className="h-12 w-12 text-gray-200" />
                  <p className="text-gray-400 font-medium">Your cart is empty</p>
                  <p className="text-xs text-gray-300">Add sprouts to get started!</p>
                </div>
              ) : (
                cart.map(({ item, qty }) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-3 rounded-xl border border-green-50 bg-green-50/50 p-3"
                  >
                    <div
                      className={`h-10 w-10 rounded-lg bg-gradient-to-br ${
                        item.imageSlug in
                        { "green-gram": 1, "black-chickpea": 1, cowpea: 1 }
                          ? "from-green-400 to-emerald-600"
                          : "from-teal-400 to-cyan-600"
                      } flex-shrink-0`}
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-green-900 truncate">
                        {item.name}
                      </p>
                      <p className="text-xs text-gray-400">
                        {qty} × ₹{item.price} = ₹{item.price * qty}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeFromCart(item.id)}
                      className="rounded-lg p-1.5 hover:bg-red-50 text-gray-300 hover:text-red-400 transition-colors"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* Cart footer */}
            {cart.length > 0 && (
              <div className="border-t border-green-100 p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Subtotal</span>
                  <span className="font-bold text-green-900 text-lg">
                    ₹{totalPrice}
                  </span>
                </div>
                <button
                  type="button"
                  className="w-full rounded-xl bg-gradient-to-r from-green-700 to-emerald-600 py-3.5 text-sm font-bold text-white shadow-lg hover:brightness-110 transition-all"
                >
                  Proceed to Checkout
                </button>
                <p className="text-center text-xs text-gray-400 flex items-center justify-center gap-1">
                  <Waves className="h-3 w-3" />
                  Free delivery on orders above ₹299
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
