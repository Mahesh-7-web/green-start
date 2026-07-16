import Link from "next/link";
import { Leaf } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-green-100 bg-green-900 text-green-50">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div className="flex items-start gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green-700 flex-shrink-0 mt-0.5">
              <Leaf className="h-4 w-4" />
            </span>
            <div>
              <p className="font-semibold text-white">Green Start</p>
              <p className="mt-1 text-sm text-green-200 leading-relaxed">
                Healthy mornings, delivered fresh from our farm to your doorstep.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-green-400 mb-3">
              Quick Links
            </p>
            <div className="flex flex-col gap-2 text-sm text-green-200">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <Link href="/products" className="hover:text-white transition-colors">Products</Link>
              <Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link>
              <Link href="/compare" className="hover:text-white transition-colors">Compare Plans</Link>
              <Link href="/help" className="hover:text-white transition-colors">Help Centre</Link>
            </div>
          </div>

          {/* Support */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-green-400 mb-3">
              Support
            </p>
            <div className="flex flex-col gap-2 text-sm text-green-200">
              <Link href="/help" className="hover:text-white transition-colors">Contact Us</Link>
              <Link href="/help#faq" className="hover:text-white transition-colors">FAQs</Link>
              <Link href="/help#contact" className="hover:text-white transition-colors">Report an Issue</Link>
            </div>
            <div className="mt-4 text-xs text-green-300 space-y-1">
              <p>📞 +91 98765 43210</p>
              <p>✉️ hello@greenstart.in</p>
              <p>🕐 Mon–Sat, 6 AM – 8 PM</p>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-green-700/50 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-green-300">
            © {new Date().getFullYear()} Green Start. All rights reserved.
          </p>
          <p className="text-xs text-green-400">
            🌱 Growing fresh, delivering happiness
          </p>
        </div>
      </div>
    </footer>
  );
}
