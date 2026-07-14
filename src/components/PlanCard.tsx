import { Check, Lock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { SubscriptionPlan } from "@/data/plans";
import {
  formatPrice,
  getItemCountForPlan,
  getYearlySavingsPercent,
} from "@/lib/plan-utils";
import type { BillingPeriod } from "./PricingToggle";
import { SubscribeModal } from "./SubscribeModal";

type PlanCardProps = {
  plan: SubscriptionPlan;
  billingPeriod: BillingPeriod;
};

export function PlanCard({ plan, billingPeriod }: PlanCardProps) {
  const price =
    billingPeriod === "monthly" ? plan.monthlyPrice : plan.yearlyPrice;
  const itemCount = getItemCountForPlan(plan.id);
  const savings = getYearlySavingsPercent(plan);

  return (
    <Card
      className={`relative flex flex-col border-2 ${
        plan.popular
          ? "border-amber-400 shadow-lg shadow-amber-100"
          : "border-green-100"
      }`}
    >
      {plan.popular && (
        <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-white hover:bg-amber-500">
          Most Popular
        </Badge>
      )}
      <CardHeader>
        <CardTitle className="text-2xl text-green-900">{plan.name}</CardTitle>
        <CardDescription>{plan.tagline}</CardDescription>
        <div className="pt-2">
          <span className="text-4xl font-bold text-green-800">
            {formatPrice(price)}
          </span>
          <span className="text-sm text-gray-500">
            /{billingPeriod === "monthly" ? "month" : "year"}
          </span>
          {billingPeriod === "yearly" && (
            <p className="mt-1 text-sm text-amber-700">
              Save {savings}% vs monthly billing
            </p>
          )}
        </div>
      </CardHeader>
      <CardContent className="flex-1 space-y-3">
        <div className="flex items-center gap-2 text-sm text-gray-700">
          <Check className="h-4 w-4 text-green-600" />
          <span>{itemCount} healthy items included</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-700">
          <Check className="h-4 w-4 text-green-600" />
          <span>{plan.deliveryDaysPerWeek} days/week delivery</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-700">
          <Check className="h-4 w-4 text-green-600" />
          <span>{plan.targetUser}</span>
        </div>
        {plan.id !== "max" && (
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Lock className="h-4 w-4" />
            <span>Upgrade for more items & quantity</span>
          </div>
        )}
      </CardContent>
      <CardFooter>
        <SubscribeModal
          defaultPlan={plan.id}
          buttonText={`Subscribe to ${plan.name}`}
          buttonClassName={
            plan.popular
              ? "bg-amber-600 hover:bg-amber-700"
              : "bg-green-700 hover:bg-green-800"
          }
        />
      </CardFooter>
    </Card>
  );
}
