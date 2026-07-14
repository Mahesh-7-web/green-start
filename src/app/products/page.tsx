"use client";

import { useMemo, useState } from "react";
import { ProductCard } from "@/components/ProductCard";
import {
  catalogItems,
  categoryLabels,
  type ItemCategory,
} from "@/data/catalog";
import { cn } from "@/lib/utils";

const allCategories = Object.keys(categoryLabels) as ItemCategory[];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState<ItemCategory | "all">(
    "all",
  );

  const filtered = useMemo(() => {
    if (activeCategory === "all") return catalogItems;
    return catalogItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-green-900">Product Catalog</h1>
        <p className="mt-2 text-gray-600">
          {catalogItems.length} healthy morning items. Higher subscription plans
          unlock more items and larger daily quantities.
        </p>
      </div>

      <div className="mb-8 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setActiveCategory("all")}
          className={cn(
            "rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
            activeCategory === "all"
              ? "bg-green-700 text-white"
              : "bg-white text-gray-600 ring-1 ring-green-100 hover:bg-green-50",
          )}
        >
          All
        </button>
        {allCategories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActiveCategory(cat)}
            className={cn(
              "rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
              activeCategory === cat
                ? "bg-green-700 text-white"
                : "bg-white text-gray-600 ring-1 ring-green-100 hover:bg-green-50",
            )}
          >
            {categoryLabels[cat]}
          </button>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="py-12 text-center text-gray-500">
          No items in this category.
        </p>
      )}
    </div>
  );
}
