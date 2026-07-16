"use client";

import { useState } from "react";
import Image from "next/image";
import { ShoppingCart, Minus, Plus, Leaf, Info } from "lucide-react";
import type { CatalogItem } from "@/data/catalog";
import { useLanguage } from "@/components/LanguageContext";

type ProductCardProps = {
  item: CatalogItem;
  onAddToCart?: (item: CatalogItem, qty: number) => void;
};

const sproutGradients: Record<string, string> = {
  "green-gram": "from-green-400 to-emerald-600",
  "black-chickpea": "from-amber-800 to-stone-700",
  "white-chickpea": "from-amber-200 to-yellow-400",
  "black-gram": "from-gray-700 to-slate-900",
  cowpea: "from-teal-400 to-cyan-600",
  "finger-millet": "from-amber-600 to-orange-700",
  wheat: "from-yellow-500 to-amber-600",
  peanut: "from-orange-400 to-amber-500",
  "horse-gram": "from-red-700 to-rose-800",
  mustard: "from-yellow-300 to-lime-500",
  groundnuts: "from-amber-500 to-orange-600",
  almonds: "from-amber-200 to-amber-400",
  fruits: "from-rose-400 to-pink-500",
  ragi: "from-stone-500 to-amber-700",
};

export function ProductCard({ item, onAddToCart }: ProductCardProps) {
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const { t } = useLanguage();

  const gradient = sproutGradients[item.imageSlug] ?? "from-green-400 to-green-700";

  function handleAdd() {
    onAddToCart?.(item, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  }

  return (
    <div className="group relative flex flex-col rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-300 border border-green-50 hover:-translate-y-1">
      {/* Image area */}
      <div className={`relative h-48 bg-gradient-to-br ${gradient} overflow-hidden`}>
        <Image
          src={`/sprouts/${item.imageSlug}.png`}
          alt={item.name}
          fill
          className="object-cover mix-blend-overlay opacity-80 group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, 33vw"
          onError={() => {}}
        />
        {/* Price badge */}
        <div className="absolute top-3 right-3 rounded-full bg-white/90 backdrop-blur px-3 py-1 text-sm font-bold text-green-800 shadow">
          ₹{item.price}
          <span className="text-xs font-normal text-gray-500">/250g</span>
        </div>
        {/* Category pill */}
        <div className="absolute bottom-3 left-3 rounded-full bg-black/30 backdrop-blur px-2.5 py-1 text-xs font-medium text-white flex items-center gap-1">
          <Leaf className="h-3 w-3" />
          {item.category === "sprouts" ? "Sprouts" : item.category}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-4 gap-3">
        <div>
          <h3 className="font-bold text-green-900 text-base leading-snug">
            {item.name}
          </h3>
          <p className="mt-1 text-xs text-gray-500 leading-relaxed line-clamp-2">
            {item.description}
          </p>
        </div>

        {/* Nutritional info toggle */}
        <button
          type="button"
          onClick={() => setShowInfo((p) => !p)}
          className="flex items-center gap-1 text-xs text-teal-600 font-medium hover:text-teal-800 transition-colors w-fit"
        >
          <Info className="h-3.5 w-3.5" />
          {showInfo ? "Hide" : "Nutritional Benefits"}
        </button>

        {showInfo && (
          <div className="rounded-xl bg-teal-50 border border-teal-100 px-3 py-2.5 text-xs text-teal-800 leading-relaxed animate-fadeIn">
            {item.nutritionalBenefits}
          </div>
        )}

        {/* Benefits tags */}
        <div className="flex flex-wrap gap-1">
          {item.benefits.map((b) => (
            <span
              key={b}
              className="rounded-full bg-green-50 border border-green-100 px-2 py-0.5 text-[10px] font-medium text-green-700"
            >
              {b}
            </span>
          ))}
        </div>

        {/* Quantity + Cart */}
        <div className="mt-auto flex items-center gap-2">
          {/* Qty stepper */}
          <div className="flex items-center rounded-xl border border-green-200 overflow-hidden">
            <button
              type="button"
              onClick={() => setQty((q) => Math.max(1, q - 1))}
              className="px-3 py-2 text-green-700 hover:bg-green-50 transition-colors text-sm font-bold"
              aria-label="Decrease quantity"
            >
              <Minus className="h-3.5 w-3.5" />
            </button>
            <span className="px-3 py-2 text-sm font-semibold text-green-900 min-w-[32px] text-center border-x border-green-200">
              {qty}
            </span>
            <button
              type="button"
              onClick={() => setQty((q) => q + 1)}
              className="px-3 py-2 text-green-700 hover:bg-green-50 transition-colors text-sm font-bold"
              aria-label="Increase quantity"
            >
              <Plus className="h-3.5 w-3.5" />
            </button>
          </div>

          {/* Add to cart */}
          <button
            type="button"
            onClick={handleAdd}
            className={`flex-1 flex items-center justify-center gap-1.5 rounded-xl py-2 text-sm font-semibold transition-all ${
              added
                ? "bg-emerald-500 text-white"
                : "bg-green-700 text-white hover:bg-green-800"
            }`}
          >
            <ShoppingCart className={`h-4 w-4 ${added ? "animate-cartBounce" : ""}`} />
            {added ? "Added! ✓" : t.addToCart}
          </button>
        </div>

        {/* Total price */}
        <p className="text-xs text-gray-400 text-right">
          Total:{" "}
          <span className="font-semibold text-green-800">
            ₹{item.price * qty}
          </span>
        </p>
      </div>
    </div>
  );
}
