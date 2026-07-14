"use client";

import { cn } from "@/lib/utils";

type BillingPeriod = "monthly" | "yearly";

type PricingToggleProps = {
  value: BillingPeriod;
  onChange: (value: BillingPeriod) => void;
};

export function PricingToggle({ value, onChange }: PricingToggleProps) {
  return (
    <div className="inline-flex items-center gap-3 rounded-full border border-green-200 bg-white p-1 shadow-sm">
      <button
        type="button"
        onClick={() => onChange("monthly")}
        className={cn(
          "rounded-full px-4 py-2 text-sm font-medium transition-colors",
          value === "monthly"
            ? "bg-green-700 text-white"
            : "text-gray-600 hover:text-green-800",
        )}
      >
        Monthly
      </button>
      <button
        type="button"
        onClick={() => onChange("yearly")}
        className={cn(
          "rounded-full px-4 py-2 text-sm font-medium transition-colors",
          value === "yearly"
            ? "bg-green-700 text-white"
            : "text-gray-600 hover:text-green-800",
        )}
      >
        Yearly
        <span className="ml-1 text-xs text-amber-600">Save ~17%</span>
      </button>
    </div>
  );
}

export type { BillingPeriod };
