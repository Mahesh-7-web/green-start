import type { PlanId } from "./plans";

export type ItemCategory =
  | "sprouts"
  | "groundnuts"
  | "nuts"
  | "superfoods"
  | "grains"
  | "fresh"
  | "snacks";

export type CatalogItem = {
  id: string;
  name: string;
  category: ItemCategory;
  description: string;
  benefits: string[];
  minPlan: PlanId;
  quantities: Record<PlanId, string | null>;
  featured?: boolean;
};

export const categoryLabels: Record<ItemCategory, string> = {
  sprouts: "Sprouts",
  groundnuts: "Groundnuts",
  nuts: "Nuts & Seeds",
  superfoods: "Superfoods",
  grains: "Grains & Malt",
  fresh: "Fresh & Protein",
  snacks: "Energy Snacks",
};

export const catalogItems: CatalogItem[] = [
  {
    id: "mixed-sprouts",
    name: "Mixed Sprouts",
    category: "sprouts",
    description:
      "A fresh blend of moong and chana sprouts — high in protein and fiber for a light, energizing start.",
    benefits: ["protein", "fiber", "gym"],
    minPlan: "basic",
    featured: true,
    quantities: {
      basic: "150g/day",
      pro: "250g/day",
      max: "400g/day",
    },
  },
  {
    id: "moong-sprouts",
    name: "Moong Sprouts",
    category: "sprouts",
    description:
      "Classic green moong sprouts, easy to digest and rich in vitamins and minerals.",
    benefits: ["protein", "fiber", "diabetic-friendly"],
    minPlan: "pro",
    quantities: {
      basic: null,
      pro: "200g/day",
      max: "300g/day",
    },
  },
  {
    id: "chana-sprouts",
    name: "Chana Sprouts",
    category: "sprouts",
    description:
      "Hearty chana sprouts packed with plant protein — ideal for sustained morning energy.",
    benefits: ["protein", "fiber", "gym"],
    minPlan: "pro",
    quantities: {
      basic: null,
      pro: "150g/day",
      max: "250g/day",
    },
  },
  {
    id: "roasted-groundnuts",
    name: "Roasted Groundnuts",
    category: "groundnuts",
    description:
      "Lightly roasted groundnuts for healthy fats and sustained energy without heaviness.",
    benefits: ["protein", "healthy-fats", "gym"],
    minPlan: "basic",
    featured: true,
    quantities: {
      basic: "50g/day",
      pro: "100g/day",
      max: "150g/day",
    },
  },
  {
    id: "soaked-groundnuts",
    name: "Soaked Groundnuts",
    category: "groundnuts",
    description:
      "Overnight-soaked groundnuts that are gentler on digestion and nutrient-rich.",
    benefits: ["protein", "fiber", "diabetic-friendly"],
    minPlan: "max",
    quantities: {
      basic: null,
      pro: null,
      max: "100g/day",
    },
  },
  {
    id: "soaked-almonds",
    name: "Soaked Almonds",
    category: "nuts",
    description:
      "Premium soaked almonds for brain health, skin glow, and morning vitality.",
    benefits: ["protein", "healthy-fats", "gym"],
    minPlan: "pro",
    quantities: {
      basic: null,
      pro: "30g/day",
      max: "50g/day",
    },
  },
  {
    id: "walnuts",
    name: "Walnuts",
    category: "nuts",
    description:
      "Omega-3 rich walnuts to support heart health and cognitive function.",
    benefits: ["healthy-fats", "brain-health"],
    minPlan: "max",
    quantities: {
      basic: null,
      pro: null,
      max: "30g/day",
    },
  },
  {
    id: "flax-chia-mix",
    name: "Flax & Chia Seeds Mix",
    category: "nuts",
    description:
      "A fiber-rich seed blend that supports digestion and keeps you full longer.",
    benefits: ["fiber", "omega-3", "diabetic-friendly"],
    minPlan: "max",
    quantities: {
      basic: null,
      pro: null,
      max: "20g/day",
    },
  },
  {
    id: "makhana",
    name: "Makhana (Fox Nuts)",
    category: "superfoods",
    description:
      "Light, crunchy makhana — low-calorie superfood perfect for weight-conscious eaters.",
    benefits: ["low-calorie", "protein", "gym"],
    minPlan: "pro",
    quantities: {
      basic: null,
      pro: "50g/day",
      max: "80g/day",
    },
  },
  {
    id: "dry-fruits-mix",
    name: "Dry Fruits Mix",
    category: "superfoods",
    description:
      "Dates, raisins, and apricots — natural sweetness with iron and antioxidants.",
    benefits: ["iron", "energy", "fiber"],
    minPlan: "pro",
    quantities: {
      basic: null,
      pro: "40g/day",
      max: "70g/day",
    },
  },
  {
    id: "ragi-malt",
    name: "Ragi Malt Mix",
    category: "grains",
    description:
      "Calcium-rich ragi malt — a warm, nourishing drink to power your morning.",
    benefits: ["calcium", "fiber", "diabetic-friendly"],
    minPlan: "max",
    quantities: {
      basic: null,
      pro: null,
      max: "1 serving/day",
    },
  },
  {
    id: "oats-porridge",
    name: "Oats Porridge Mix",
    category: "grains",
    description:
      "Ready-to-cook oats blend with nuts — slow-release carbs for gym-goers.",
    benefits: ["fiber", "gym", "energy"],
    minPlan: "max",
    quantities: {
      basic: null,
      pro: null,
      max: "1 serving/day",
    },
  },
  {
    id: "seasonal-fruits",
    name: "Seasonal Fruit Kit",
    category: "fresh",
    description:
      "Fresh seasonal fruits handpicked for vitamins, hydration, and natural energy.",
    benefits: ["vitamins", "hydration", "fiber"],
    minPlan: "basic",
    featured: true,
    quantities: {
      basic: "1 pc/day",
      pro: "2 pcs/day",
      max: "3 pcs/day",
    },
  },
  {
    id: "boiled-eggs",
    name: "Boiled Eggs",
    category: "fresh",
    description:
      "Farm-fresh boiled eggs — the ultimate gym protein add-on for muscle recovery.",
    benefits: ["protein", "gym", "muscle-recovery"],
    minPlan: "max",
    quantities: {
      basic: null,
      pro: null,
      max: "2/day",
    },
  },
  {
    id: "fresh-curd",
    name: "Fresh Curd Cup",
    category: "fresh",
    description:
      "Probiotic-rich fresh curd to support gut health and complement your morning meal.",
    benefits: ["probiotics", "protein", "gut-health"],
    minPlan: "max",
    quantities: {
      basic: null,
      pro: null,
      max: "200ml/day",
    },
  },
  {
    id: "coconut-laddoo",
    name: "Coconut-Jaggery Laddoo",
    category: "snacks",
    description:
      "Natural energy bites made with coconut and jaggery — no refined sugar.",
    benefits: ["energy", "natural-sweetener", "fiber"],
    minPlan: "max",
    quantities: {
      basic: null,
      pro: null,
      max: "2 pcs/day",
    },
  },
  {
    id: "green-smoothie-pack",
    name: "Green Smoothie Pack",
    category: "snacks",
    description:
      "Pre-portioned spinach, cucumber, and herb blend for a quick detox smoothie.",
    benefits: ["detox", "vitamins", "gym"],
    minPlan: "max",
    quantities: {
      basic: null,
      pro: null,
      max: "1 pack/day",
    },
  },
];
