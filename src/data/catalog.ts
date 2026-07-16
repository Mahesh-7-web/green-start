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
  nutritionalBenefits: string;
  price: number; // price per 250g in INR
  imageSlug: string; // used to look up image
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

export const sproutsProducts: CatalogItem[] = [
  {
    id: "green-gram-sprouts",
    name: "Green Gram Sprouts",
    category: "sprouts",
    description:
      "Classic moong sprouts — light, easy to digest, and bursting with plant protein and vitamins.",
    benefits: ["protein", "fiber", "vitamins"],
    nutritionalBenefits:
      "High in Vitamin C, folate, and plant protein. Supports digestion and immunity.",
    price: 45,
    imageSlug: "green-gram",
    minPlan: "basic",
    featured: true,
    quantities: { basic: "150g/day", pro: "250g/day", max: "400g/day" },
  },
  {
    id: "black-chickpea-sprouts",
    name: "Black Chickpea Sprouts",
    category: "sprouts",
    description:
      "Nutty and hearty kala chana sprouts — rich in iron and plant protein for sustained energy.",
    benefits: ["iron", "protein", "energy"],
    nutritionalBenefits:
      "Excellent source of iron, magnesium, and complex carbohydrates. Great for anaemia prevention.",
    price: 55,
    imageSlug: "black-chickpea",
    minPlan: "basic",
    featured: true,
    quantities: { basic: "100g/day", pro: "200g/day", max: "300g/day" },
  },
  {
    id: "white-chickpea-sprouts",
    name: "White Chickpea Sprouts",
    category: "sprouts",
    description:
      "Mild, creamy white chana sprouts packed with protein and fiber to keep you full and energized.",
    benefits: ["protein", "fiber", "gym"],
    nutritionalBenefits:
      "Rich in plant protein, zinc, and B-vitamins. Ideal for muscle building and energy.",
    price: 55,
    imageSlug: "white-chickpea",
    minPlan: "basic",
    quantities: { basic: "100g/day", pro: "200g/day", max: "300g/day" },
  },
  {
    id: "black-gram-sprouts",
    name: "Black Gram Sprouts",
    category: "sprouts",
    description:
      "Urad dal sprouts with a bold, earthy flavour — exceptional protein source for gym enthusiasts.",
    benefits: ["protein", "calcium", "gym"],
    nutritionalBenefits:
      "High in protein, calcium, and phosphorus. Supports bone health and muscle recovery.",
    price: 50,
    imageSlug: "black-gram",
    minPlan: "pro",
    quantities: { basic: null, pro: "150g/day", max: "250g/day" },
  },
  {
    id: "cowpea-sprouts",
    name: "Cowpea Sprouts",
    category: "sprouts",
    description:
      "Lobia sprouts with a gentle flavour — diabetic-friendly, high-fiber, and nutrient-dense.",
    benefits: ["fiber", "diabetic-friendly", "protein"],
    nutritionalBenefits:
      "Low glycaemic index, rich in folate and potassium. Excellent for blood sugar management.",
    price: 48,
    imageSlug: "cowpea",
    minPlan: "basic",
    quantities: { basic: "100g/day", pro: "200g/day", max: "300g/day" },
  },
  {
    id: "finger-millet-sprouts",
    name: "Finger Millet Sprouts",
    category: "sprouts",
    description:
      "Ragi sprouts — a calcium powerhouse with earthy goodness ideal for bone strength.",
    benefits: ["calcium", "fiber", "bone-health"],
    nutritionalBenefits:
      "Exceptionally high in calcium and amino acids. Supports bone density and natural energy.",
    price: 52,
    imageSlug: "finger-millet",
    minPlan: "pro",
    quantities: { basic: null, pro: "100g/day", max: "200g/day" },
  },
  {
    id: "wheat-sprouts",
    name: "Wheat Sprouts",
    category: "sprouts",
    description:
      "Germinated wheat sprouts with a sweet, grassy taste — rich in enzymes and antioxidants.",
    benefits: ["antioxidants", "fiber", "enzymes"],
    nutritionalBenefits:
      "Rich in Vitamin E, B-complex, and digestive enzymes. Detoxifying and energising.",
    price: 40,
    imageSlug: "wheat",
    minPlan: "basic",
    quantities: { basic: "100g/day", pro: "200g/day", max: "300g/day" },
  },
  {
    id: "peanut-sprouts",
    name: "Peanut Sprouts",
    category: "sprouts",
    description:
      "Sprouted groundnuts with elevated protein and resveratrol — a gym-lover's superfood.",
    benefits: ["protein", "healthy-fats", "gym"],
    nutritionalBenefits:
      "High in resveratrol, protein, and healthy fats. Boosts endurance and heart health.",
    price: 60,
    imageSlug: "peanut",
    minPlan: "pro",
    featured: true,
    quantities: { basic: null, pro: "100g/day", max: "150g/day" },
  },
  {
    id: "horse-gram-sprouts",
    name: "Horse Gram Sprouts",
    category: "sprouts",
    description:
      "Kulith sprouts — a traditional superfood known for weight management and metabolism boost.",
    benefits: ["weight-loss", "metabolism", "protein"],
    nutritionalBenefits:
      "Rich in polyphenols and protein. Supports weight management and kidney health.",
    price: 58,
    imageSlug: "horse-gram",
    minPlan: "pro",
    quantities: { basic: null, pro: "100g/day", max: "200g/day" },
  },
  {
    id: "mustard-sprouts",
    name: "Mustard Sprouts",
    category: "sprouts",
    description:
      "Spicy, peppery mustard sprouts rich in glucosinolates — powerful anti-inflammatory properties.",
    benefits: ["anti-inflammatory", "antioxidants", "detox"],
    nutritionalBenefits:
      "Contains glucosinolates and Vitamin K. Anti-inflammatory and cancer-protective compounds.",
    price: 65,
    imageSlug: "mustard",
    minPlan: "max",
    quantities: { basic: null, pro: null, max: "80g/day" },
  },
];

export const catalogItems: CatalogItem[] = [
  ...sproutsProducts,
  {
    id: "roasted-groundnuts",
    name: "Roasted Groundnuts",
    category: "groundnuts",
    description:
      "Lightly roasted groundnuts for healthy fats and sustained energy without heaviness.",
    benefits: ["protein", "healthy-fats", "gym"],
    nutritionalBenefits:
      "Rich in niacin, magnesium, and healthy monounsaturated fats. Supports heart health.",
    price: 70,
    imageSlug: "groundnuts",
    minPlan: "basic",
    featured: true,
    quantities: { basic: "50g/day", pro: "100g/day", max: "150g/day" },
  },
  {
    id: "soaked-almonds",
    name: "Soaked Almonds",
    category: "nuts",
    description:
      "Premium soaked almonds for brain health, skin glow, and morning vitality.",
    benefits: ["protein", "healthy-fats", "brain-health"],
    nutritionalBenefits:
      "High in Vitamin E, magnesium, and healthy fats. Boosts brain function and skin health.",
    price: 120,
    imageSlug: "almonds",
    minPlan: "pro",
    quantities: { basic: null, pro: "30g/day", max: "50g/day" },
  },
  {
    id: "seasonal-fruits",
    name: "Seasonal Fruit Kit",
    category: "fresh",
    description:
      "Fresh seasonal fruits handpicked for vitamins, hydration, and natural energy.",
    benefits: ["vitamins", "hydration", "fiber"],
    nutritionalBenefits:
      "Natural source of Vitamin C, antioxidants and dietary fiber. Hydrating and energising.",
    price: 80,
    imageSlug: "fruits",
    minPlan: "basic",
    featured: true,
    quantities: { basic: "1 pc/day", pro: "2 pcs/day", max: "3 pcs/day" },
  },
  {
    id: "ragi-malt",
    name: "Ragi Malt Mix",
    category: "grains",
    description:
      "Calcium-rich ragi malt — a warm, nourishing drink to power your morning.",
    benefits: ["calcium", "fiber", "diabetic-friendly"],
    nutritionalBenefits:
      "Exceptional calcium and amino acid content. Supports bone health and sustained energy.",
    price: 90,
    imageSlug: "ragi",
    minPlan: "max",
    quantities: { basic: null, pro: null, max: "1 serving/day" },
  },
];
