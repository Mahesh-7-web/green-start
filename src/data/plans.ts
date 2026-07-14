export type PlanId = "basic" | "pro" | "max";

export type SubscriptionPlan = {
  id: PlanId;
  name: string;
  monthlyPrice: number;
  yearlyPrice: number;
  deliveryDaysPerWeek: number;
  itemLimit: number;
  tagline: string;
  targetUser: string;
  popular?: boolean;
};

export const subscriptionPlans: SubscriptionPlan[] = [
  {
    id: "basic",
    name: "Basic",
    monthlyPrice: 500,
    yearlyPrice: 5000,
    deliveryDaysPerWeek: 3,
    itemLimit: 3,
    tagline: "Starter morning box",
    targetUser: "Beginners building a light morning habit",
  },
  {
    id: "pro",
    name: "Pro",
    monthlyPrice: 1000,
    yearlyPrice: 10000,
    deliveryDaysPerWeek: 5,
    itemLimit: 6,
    tagline: "Active wellness box",
    targetUser: "Gym users with a consistent daily routine",
    popular: true,
  },
  {
    id: "max",
    name: "Max",
    monthlyPrice: 1500,
    yearlyPrice: 15000,
    deliveryDaysPerWeek: 6,
    itemLimit: 12,
    tagline: "Champion nutrition stack",
    targetUser: "Athletes and full wellness enthusiasts",
  },
];

export const planLabels: Record<PlanId, string> = {
  basic: "Basic",
  pro: "Pro",
  max: "Max",
};
