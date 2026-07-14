import { Check, Minus } from "lucide-react";
import { catalogItems } from "@/data/catalog";
import { subscriptionPlans } from "@/data/plans";
import { getPlanLabel } from "@/lib/plan-utils";

export function ComparisonTable() {
  return (
    <div className="overflow-x-auto rounded-xl border border-green-100 bg-white shadow-sm">
      <table className="w-full min-w-[640px] text-left text-sm">
        <thead>
          <tr className="border-b border-green-100 bg-green-50">
            <th className="px-4 py-4 font-semibold text-green-900">Item</th>
            {subscriptionPlans.map((plan) => (
              <th
                key={plan.id}
                className="px-4 py-4 text-center font-semibold text-green-900"
              >
                {plan.name}
                <div className="mt-1 text-xs font-normal text-gray-500">
                  {plan.deliveryDaysPerWeek} days/week
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {catalogItems.map((item) => (
            <tr
              key={item.id}
              className="border-b border-green-50 hover:bg-green-50/50"
            >
              <td className="px-4 py-3 font-medium text-gray-800">
                {item.name}
                <div className="text-xs font-normal text-gray-500">
                  Min: {getPlanLabel(item.minPlan)}
                </div>
              </td>
              {subscriptionPlans.map((plan) => {
                const qty = item.quantities[plan.id];
                return (
                  <td key={plan.id} className="px-4 py-3 text-center">
                    {qty ? (
                      <span className="inline-flex items-center gap-1 text-green-700">
                        <Check className="h-4 w-4" />
                        {qty}
                      </span>
                    ) : (
                      <span className="inline-flex items-center justify-center text-gray-300">
                        <Minus className="h-4 w-4" />
                      </span>
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr className="bg-green-50 font-semibold text-green-900">
            <td className="px-4 py-4">Monthly Price</td>
            {subscriptionPlans.map((plan) => (
              <td key={plan.id} className="px-4 py-4 text-center">
                ₹{plan.monthlyPrice}
              </td>
            ))}
          </tr>
          <tr className="bg-green-50 font-semibold text-green-900">
            <td className="px-4 py-4">Yearly Price</td>
            {subscriptionPlans.map((plan) => (
              <td key={plan.id} className="px-4 py-4 text-center">
                ₹{plan.yearlyPrice.toLocaleString("en-IN")}
              </td>
            ))}
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
