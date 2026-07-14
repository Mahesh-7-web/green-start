import { catalogItems, type CatalogItem } from "@/data/catalog";
import {
  planLabels,
  subscriptionPlans,
  type PlanId,
  type SubscriptionPlan,
} from "@/data/plans";

export function getItemsForPlan(planId: PlanId): CatalogItem[] {
  return catalogItems.filter((item) => item.quantities[planId] !== null);
}

export function getItemCountForPlan(planId: PlanId): number {
  return getItemsForPlan(planId).length;
}

export function formatPrice(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function getYearlySavings(plan: SubscriptionPlan): number {
  return plan.monthlyPrice * 12 - plan.yearlyPrice;
}

export function getYearlySavingsPercent(plan: SubscriptionPlan): number {
  const fullYear = plan.monthlyPrice * 12;
  return Math.round((getYearlySavings(plan) / fullYear) * 100);
}

export function getPlanById(planId: PlanId): SubscriptionPlan {
  const plan = subscriptionPlans.find((p) => p.id === planId);
  if (!plan) throw new Error(`Plan not found: ${planId}`);
  return plan;
}

export function getPlanLabel(planId: PlanId): string {
  return planLabels[planId];
}

export function getFeaturedItems(): CatalogItem[] {
  return catalogItems.filter((item) => item.featured);
}
