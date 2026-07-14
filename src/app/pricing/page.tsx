"use client";

import { useState } from "react";
import Link from "next/link";
import { PlanCard } from "@/components/PlanCard";
import { PricingToggle } from "@/components/PricingToggle";
import { subscriptionPlans } from "@/data/plans";

export default function PricingPage() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">(
    "monthly",
  );

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-green-900">
          Choose Your Plan
        </h1>
        <p className="mx-auto mt-2 max-w-xl text-gray-600">
          Basic, Pro, and Max — each tier includes more items and larger daily
          quantities. All prices in Indian Rupees.
        </p>
        <div className="mt-6 flex justify-center">
          <PricingToggle value={billingPeriod} onChange={setBillingPeriod} />
        </div>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-3">
        {subscriptionPlans.map((plan) => (
          <PlanCard key={plan.id} plan={plan} billingPeriod={billingPeriod} />
        ))}
      </div>

      <div className="mt-12 rounded-xl border border-green-100 bg-white p-6 text-center">
        <p className="text-sm text-gray-600">
          Not sure which plan fits you?{" "}
          <Link
            href="/compare"
            className="font-medium text-green-700 hover:text-green-900"
          >
            Compare all plans side by side →
          </Link>
        </p>
      </div>
    </div>
  );
}
