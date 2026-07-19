import Link from "next/link";
import { ArrowRight, Sprout, Leaf, Droplets, Heart, Shield, Truck, Star } from "lucide-react";
import { ProductCard } from "@/components/ProductCard";
import { SubscribeModal } from "@/components/SubscribeModal";
import { buttonVariants } from "@/components/ui/button";
import { getFeaturedItems } from "@/lib/plan-utils";
import { RequestSproutsModal } from "@/components/RequestSproutsModal";

const benefits = [
  {
    icon: Leaf,
    title: "100% Fresh & Organic",
    desc: "Every sprout is grown fresh daily with zero chemicals or pesticides.",
    color: "from-green-400 to-emerald-500",
    bg: "bg-green-50",
    border: "border-green-100",
    text: "text-green-800",
  },
  {
    icon: Shield,
    title: "Hygienically Grown",
    desc: "Clean sprouting process in sanitised, food-safe facilities.",
    color: "from-teal-400 to-cyan-500",
    bg: "bg-teal-50",
    border: "border-teal-100",
    text: "text-teal-800",
  },
  {
    icon: Star,
    title: "Rich in Nutrients",
    desc: "Packed with proteins, vitamins, minerals, and digestive enzymes.",
    color: "from-amber-400 to-orange-500",
    bg: "bg-amber-50",
    border: "border-amber-100",
    text: "text-amber-800",
  },
  {
    icon: Droplets,
    title: "No Preservatives",
    desc: "Pure sprouts with absolutely nothing artificial added. Ever.",
    color: "from-blue-400 to-cyan-500",
    bg: "bg-blue-50",
    border: "border-blue-100",
    text: "text-blue-800",
  },
  {
    icon: Truck,
    title: "Farm-to-Home Delivery",
    desc: "Direct from our farm to your doorstep the same morning.",
    color: "from-purple-400 to-violet-500",
    bg: "bg-purple-50",
    border: "border-purple-100",
    text: "text-purple-800",
  },
  {
    icon: Heart,
    title: "Healthy Lifestyle Choice",
    desc: "The perfect start for a balanced, energetic, disease-free life.",
    color: "from-rose-400 to-pink-500",
    bg: "bg-rose-50",
    border: "border-rose-100",
    text: "text-rose-800",
  },
];

export default function HomePage() {
  const featured = getFeaturedItems();

  return (
    <div>
      {/* ── Coastal Hero ── */}
      <section
        className="relative overflow-hidden"
        style={{
          background:
            "linear-gradient(160deg, #0c4a6e 0%, #0d9488 40%, #065f46 80%, #064e3b 100%)",
          minHeight: "520px",
        }}
      >
        {/* Animated ocean shimmer */}
        <div
          className="absolute inset-0 animate-oceanShimmer opacity-20"
        />

        {/* Decorative sand/wave texture */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 20% 80%, rgba(255,255,255,0.3) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(255,255,255,0.15) 0%, transparent 50%)",
          }}
        />

        {/* Left coconut tree */}
        <div className="absolute left-0 bottom-0 opacity-25 select-none pointer-events-none hidden md:block">
          <svg width="120" height="260" viewBox="0 0 120 260" fill="none">
            <rect x="54" y="100" width="12" height="160" rx="6" fill="#15803d" />
            <ellipse cx="60" cy="90" rx="55" ry="32" fill="#16a34a" className="animate-palmSway" style={{ transformOrigin: "60px 260px" }} />
            <ellipse cx="20" cy="110" rx="40" ry="18" fill="#15803d" className="animate-palmSway" style={{ transformOrigin: "60px 260px", animationDelay: "0.4s" }} transform="rotate(-25 20 110)" />
            <ellipse cx="100" cy="110" rx="40" ry="18" fill="#15803d" className="animate-palmSway" style={{ transformOrigin: "60px 260px", animationDelay: "0.8s" }} transform="rotate(25 100 110)" />
            <circle cx="55" cy="96" r="6" fill="#ca8a04" />
            <circle cx="63" cy="93" r="5" fill="#a16207" />
            <circle cx="60" cy="100" r="5" fill="#ca8a04" />
          </svg>
        </div>

        {/* Right coconut tree */}
        <div className="absolute right-0 bottom-0 opacity-25 select-none pointer-events-none hidden md:block">
          <svg width="120" height="260" viewBox="0 0 120 260" fill="none">
            <rect x="54" y="100" width="12" height="160" rx="6" fill="#15803d" />
            <ellipse cx="60" cy="90" rx="55" ry="32" fill="#16a34a" className="animate-palmSway" style={{ transformOrigin: "60px 260px", animationDelay: "1.2s" }} />
            <ellipse cx="20" cy="110" rx="40" ry="18" fill="#15803d" className="animate-palmSway" style={{ transformOrigin: "60px 260px", animationDelay: "1.6s" }} transform="rotate(-25 20 110)" />
            <ellipse cx="100" cy="110" rx="40" ry="18" fill="#15803d" className="animate-palmSway" style={{ transformOrigin: "60px 260px", animationDelay: "2s" }} transform="rotate(25 100 110)" />
            <circle cx="55" cy="96" r="6" fill="#ca8a04" />
            <circle cx="63" cy="93" r="5" fill="#a16207" />
            <circle cx="60" cy="100" r="5" fill="#ca8a04" />
          </svg>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <div className="max-w-2xl">
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/20 border border-emerald-400/30">
                <Sprout className="h-4 w-4 text-emerald-300" />
              </div>
              <p className="text-sm font-medium text-emerald-300 uppercase tracking-wider">
                Green Start
              </p>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Start Your{" "}
              <span className="text-emerald-300">Healthy</span>{" "}
              Morning
            </h1>
            <p className="mt-5 text-lg text-cyan-100/80 max-w-lg leading-relaxed">
              Fresh sprouts delivered daily — farm-grown, hygienically packed, and bursting with nutrition.
              10 varieties to choose from.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/products"
                className={buttonVariants({
                  className:
                    "bg-amber-500 text-white hover:bg-amber-400 h-11 px-6 text-base font-semibold shadow-lg shadow-amber-500/30",
                })}
              >
                Shop Sprouts
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/pricing"
                className={buttonVariants({
                  variant: "outline",
                  className:
                    "border-white/30 bg-white/10 text-white hover:bg-white/20 h-11 px-6 text-base",
                })}
              >
                View Plans
              </Link>
              <RequestSproutsModal
                trigger={
                  <button
                    type="button"
                    className="flex items-center gap-2 rounded-lg border border-teal-400/30 bg-teal-500/10 text-teal-200 hover:bg-teal-500/20 h-11 px-5 text-base font-medium transition-colors"
                  >
                    <Sprout className="h-4 w-4" />
                    Request a Sprout
                  </button>
                }
              />
            </div>
          </div>
        </div>

        {/* Wave bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-12 sm:h-16">
            <path
              d="M0,30 C240,60 480,0 720,30 C960,60 1200,0 1440,30 L1440,60 L0,60 Z"
              fill="#f8faf6"
            />
          </svg>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="text-center mb-12">
          <span className="inline-block rounded-full bg-teal-50 border border-teal-100 px-4 py-1 text-xs font-semibold text-teal-700 uppercase tracking-wider mb-3">
            Why Choose Us
          </span>
          <h2 className="text-3xl font-bold text-green-900">
            Why Choose Our Sprouts?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-gray-500">
            We grow every batch with care, delivering farm-fresh goodness straight to your doorstep.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b) => (
            <div
              key={b.title}
              className={`group rounded-2xl border ${b.border} ${b.bg} p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
            >
              <div
                className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${b.color} text-white shadow-md group-hover:scale-110 transition-transform`}
              >
                <b.icon className="h-6 w-6" />
              </div>
              <h3 className={`font-bold text-base ${b.text}`}>{b.title}</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Featured Products ── */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-green-900">
                Featured Sprouts
              </h2>
              <p className="mt-1 text-gray-500">
                Our most popular picks, freshly grown daily.
              </p>
            </div>
            <Link
              href="/products"
              className="hidden text-sm font-medium text-green-700 hover:text-green-900 sm:block"
            >
              View all →
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div
          className="rounded-3xl px-8 py-14 text-center text-white relative overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, #0c4a6e 0%, #0d9488 50%, #065f46 100%)",
          }}
        >
          {/* Wave decoration */}
          <div className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 15px, rgba(255,255,255,0.05) 15px, rgba(255,255,255,0.05) 30px)",
            }}
          />
          <div className="relative z-10">
            <h2 className="text-3xl font-bold">Ready to Transform Your Mornings?</h2>
            <p className="mx-auto mt-3 max-w-lg text-cyan-100/80">
              Plans start at just ₹500/month. Or shop individual packs with no commitment.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href="/pricing"
                className={buttonVariants({
                  className: "bg-amber-500 text-white hover:bg-amber-400 h-11 px-6 font-semibold",
                })}
              >
                See Pricing
              </Link>
              <Link
                href="/products"
                className={buttonVariants({
                  variant: "outline",
                  className: "border-white/30 bg-white/10 text-white hover:bg-white/20 h-11 px-6",
                })}
              >
                Shop Now
              </Link>
            </div>
            <div className="mt-5">
              <SubscribeModal
                buttonText="Request Early Access"
                buttonClassName="bg-white text-green-800 hover:bg-green-50 mx-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
