import { Lock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { CatalogItem } from "@/data/catalog";
import { categoryLabels } from "@/data/catalog";
import { getPlanLabel } from "@/lib/plan-utils";

const categoryColors: Record<CatalogItem["category"], string> = {
  sprouts: "bg-green-100 text-green-800",
  groundnuts: "bg-amber-100 text-amber-800",
  nuts: "bg-orange-100 text-orange-800",
  superfoods: "bg-purple-100 text-purple-800",
  grains: "bg-yellow-100 text-yellow-800",
  fresh: "bg-red-100 text-red-800",
  snacks: "bg-lime-100 text-lime-800",
};

const categoryEmoji: Record<CatalogItem["category"], string> = {
  sprouts: "🌱",
  groundnuts: "🥜",
  nuts: "🌰",
  superfoods: "✨",
  grains: "🌾",
  fresh: "🍎",
  snacks: "🥤",
};

type ProductCardProps = {
  item: CatalogItem;
};

export function ProductCard({ item }: ProductCardProps) {
  return (
    <Card className="flex h-full flex-col border-green-100 transition-shadow hover:shadow-md">
      <CardHeader>
        <div className="mb-2 flex items-start justify-between gap-2">
          <span className="text-3xl" role="img" aria-hidden>
            {categoryEmoji[item.category]}
          </span>
          <Badge className={categoryColors[item.category]}>
            {categoryLabels[item.category]}
          </Badge>
        </div>
        <CardTitle className="text-lg text-green-900">{item.name}</CardTitle>
        <CardDescription>{item.description}</CardDescription>
      </CardHeader>
      <CardContent className="mt-auto space-y-3">
        <div className="flex flex-wrap gap-1.5">
          {item.benefits.map((benefit) => (
            <Badge
              key={benefit}
              variant="outline"
              className="border-green-200 text-green-700"
            >
              {benefit}
            </Badge>
          ))}
        </div>
        <div className="flex items-center gap-2 rounded-lg bg-green-50 px-3 py-2 text-sm">
          <Lock className="h-3.5 w-3.5 text-green-600" />
          <span className="text-green-800">
            From <strong>{getPlanLabel(item.minPlan)}</strong> plan
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
