import Link from "next/link";
import { Leaf } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-green-100 bg-green-900 text-green-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green-700">
            <Leaf className="h-4 w-4" />
          </span>
          <div>
            <p className="font-semibold">Green Start</p>
            <p className="text-sm text-green-200">
              Healthy mornings, delivered fresh.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-green-200">
          <Link href="/products" className="hover:text-white">
            Products
          </Link>
          <Link href="/pricing" className="hover:text-white">
            Pricing
          </Link>
          <Link href="/compare" className="hover:text-white">
            Compare Plans
          </Link>
        </div>
        <p className="text-sm text-green-300">
          © {new Date().getFullYear()} Green Start. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
