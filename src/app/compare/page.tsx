import Link from "next/link";
import { ComparisonTable } from "@/components/ComparisonTable";
import { SubscribeModal } from "@/components/SubscribeModal";
import { subscriptionPlans } from "@/data/plans";
import { getItemCountForPlan } from "@/lib/plan-utils";

export default function ComparePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-green-900">Plan Comparison</h1>
        <p className="mt-2 text-gray-600">
          See exactly what each plan includes — items, daily quantities, and
          delivery frequency.
        </p>
      </div>

      <div className="mb-8 grid gap-4 sm:grid-cols-3">
        {subscriptionPlans.map((plan) => (
          <div
            key={plan.id}
            className="rounded-xl border border-green-100 bg-white p-5 text-center shadow-sm"
          >
            <h3 className="text-lg font-semibold text-green-900">
              {plan.name}
            </h3>
            <p className="mt-1 text-2xl font-bold text-green-800">
              ₹{plan.monthlyPrice}
              <span className="text-sm font-normal text-gray-500">/mo</span>
            </p>
            <p className="mt-1 text-sm text-gray-500">
              {getItemCountForPlan(plan.id)} items · {plan.deliveryDaysPerWeek}{" "}
              days/week
            </p>
          </div>
        ))}
      </div>

      <ComparisonTable />

      <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
        <SubscribeModal buttonText="Subscribe Now" />
        <Link
          href="/pricing"
          className="text-sm font-medium text-green-700 hover:text-green-900"
        >
          View full pricing details →
        </Link>
      </div>
    </div>
  );
}
