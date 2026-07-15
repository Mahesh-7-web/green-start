"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Leaf, Menu, X, LogOut, User } from "lucide-react";
import { useState, useEffect } from "react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/pricing", label: "Pricing" },
  { href: "/compare", label: "Compare" },
];

function getLoggedInUser(): { name: string; email: string } | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem("greenstart_user");
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);

  useEffect(() => {
    setUser(getLoggedInUser());
  }, []);

  function handleLogout() {
    localStorage.removeItem("greenstart_user");
    window.location.reload();
  }

  return (
    <header className="sticky top-0 z-50 border-b border-green-100 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold text-green-800">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-green-700 text-white">
            <Leaf className="h-5 w-5" />
          </span>
          <span className="text-lg">Green Start</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                pathname === link.href
                  ? "bg-green-50 text-green-800"
                  : "text-gray-600 hover:bg-green-50 hover:text-green-800",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          {user && (
            <div className="flex items-center gap-2 rounded-full bg-green-50 px-3 py-1.5 border border-green-100">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-700 text-white">
                <User className="h-3.5 w-3.5" />
              </div>
              <span className="text-sm font-medium text-green-800 max-w-[120px] truncate">
                {user.name}
              </span>
            </div>
          )}
          {user ? (
            <button
              type="button"
              onClick={handleLogout}
              className={cn(
                buttonVariants({ variant: "outline" }),
                "border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700 gap-1.5"
              )}
            >
              <LogOut className="h-4 w-4" />
              Logout
            </button>
          ) : (
            <Link
              href="/pricing"
              className={buttonVariants({
                className: "bg-amber-600 text-white hover:bg-amber-700",
              })}
            >
              View Plans
            </Link>
          )}
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-gray-600 hover:bg-green-50 md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-green-100 bg-white px-4 py-3 md:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-lg px-3 py-2 text-sm font-medium",
                  pathname === link.href
                    ? "bg-green-50 text-green-800"
                    : "text-gray-600 hover:bg-green-50",
                )}
              >
                {link.label}
              </Link>
            ))}

            {user && (
              <div className="flex items-center gap-2 rounded-lg bg-green-50 px-3 py-2 mt-2 border border-green-100">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-700 text-white">
                  <User className="h-3.5 w-3.5" />
                </div>
                <span className="text-sm font-medium text-green-800">
                  {user.name}
                </span>
              </div>
            )}

            {user ? (
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  handleLogout();
                }}
                className="mt-2 flex items-center justify-center gap-1.5 rounded-lg bg-red-50 border border-red-200 px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-100 transition-colors"
              >
                <LogOut className="h-4 w-4" />
                Logout
              </button>
            ) : (
              <Link
                href="/pricing"
                onClick={() => setOpen(false)}
                className={buttonVariants({
                  className: "mt-2 bg-amber-600 text-white hover:bg-amber-700",
                })}
              >
                View Plans
              </Link>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}

