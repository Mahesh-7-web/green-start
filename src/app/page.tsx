import Link from "next/link";
import { ArrowRight, Dumbbell, Sunrise, Heart } from "lucide-react";
import { ProductCard } from "@/components/ProductCard";
import { SubscribeModal } from "@/components/SubscribeModal";
import { buttonVariants } from "@/components/ui/button";
import { getFeaturedItems } from "@/lib/plan-utils";

const audiences = [
  {
    icon: Dumbbell,
    title: "Gym Users",
    description:
      "High-protein sprouts, groundnuts, and eggs to fuel workouts and recovery.",
  },
  {
    icon: Sunrise,
    title: "Morning Habit",
    description:
      "Build a consistent healthy morning routine with fresh items delivered to your door.",
  },
  {
    icon: Heart,
    title: "General Wellness",
    description:
      "Diabetic-friendly, fiber-rich foods for anyone starting a healthier lifestyle.",
  },
];

export default function HomePage() {
  const featured = getFeaturedItems();

  return (
    <div>
      <section className="bg-gradient-to-br from-green-800 via-green-700 to-green-900 text-white">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-medium text-green-200">
              Green Start
            </p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Start Your Healthy Morning
            </h1>
            <p className="mt-4 text-lg text-green-100">
              Fresh sprouts, groundnuts, and curated morning eatables — delivered
              on a plan that fits your lifestyle. Choose Basic, Pro, or Max.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/pricing"
                className={buttonVariants({
                  className:
                    "bg-amber-500 text-white hover:bg-amber-600 h-10 px-5",
                })}
              >
                View Plans
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
              <Link
                href="/products"
                className={buttonVariants({
                  variant: "outline",
                  className:
                    "border-white/30 bg-white/10 text-white hover:bg-white/20 h-10 px-5",
                })}
              >
                Browse Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-center text-2xl font-bold text-green-900">
          Built For Every Morning Warrior
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-center text-gray-600">
          Whether you hit the gym, wake up early, or just want to eat better —
          we have a plan for you.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {audiences.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-green-100 bg-white p-6 shadow-sm"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-700">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-green-900">{item.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-bold text-green-900">
                Featured Morning Items
              </h2>
              <p className="mt-1 text-gray-600">
                Sprouts and groundnuts at the heart of every plan.
              </p>
            </div>
            <Link
              href="/products"
              className="hidden text-sm font-medium text-green-700 hover:text-green-900 sm:block"
            >
              View all →
            </Link>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="rounded-2xl bg-gradient-to-r from-green-700 to-green-800 px-8 py-12 text-center text-white">
          <h2 className="text-2xl font-bold">Ready to Transform Your Mornings?</h2>
          <p className="mx-auto mt-3 max-w-lg text-green-100">
            Plans start at just ₹500/month. Higher plans unlock more items and
            larger daily quantities.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/pricing"
              className={buttonVariants({
                className:
                  "bg-amber-500 text-white hover:bg-amber-600 h-10 px-5",
              })}
            >
              See Pricing
            </Link>
            <Link
              href="/compare"
              className={buttonVariants({
                variant: "outline",
                className:
                  "border-white/30 bg-white/10 text-white hover:bg-white/20 h-10 px-5",
              })}
            >
              Compare Plans
            </Link>
          </div>
          <div className="mt-6">
            <SubscribeModal
              buttonText="Request Early Access"
              buttonClassName="bg-white text-green-800 hover:bg-green-50 mx-auto"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
