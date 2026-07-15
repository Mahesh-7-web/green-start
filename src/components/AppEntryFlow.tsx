"use client";

import { useState, useEffect, useCallback } from "react";
import { Leaf, LogIn, UserPlus, Eye, EyeOff, Sprout, ArrowRight } from "lucide-react";

/* ───────── localStorage helpers ───────── */
const STORAGE_KEY = "greenstart_user";

type StoredUser = { name: string; email: string };

function getStoredUser(): StoredUser | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as StoredUser) : null;
  } catch {
    return null;
  }
}

function storeUser(user: StoredUser) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
}

function getAccounts(): Record<string, { name: string; password: string }> {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem("greenstart_accounts");
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function saveAccount(email: string, name: string, password: string) {
  const accounts = getAccounts();
  accounts[email] = { name, password };
  localStorage.setItem("greenstart_accounts", JSON.stringify(accounts));
}

/* ───────── Phase type ───────── */
type Phase = "splash" | "auth" | "main";

/* ───────── Floating Leaf Particle ───────── */
function FloatingLeaves() {
  const leaves = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    delay: `${Math.random() * 4}s`,
    duration: `${3 + Math.random() * 4}s`,
    size: 14 + Math.random() * 18,
    opacity: 0.15 + Math.random() * 0.25,
  }));

  return (
    <>
      {leaves.map((l) => (
        <Leaf
          key={l.id}
          className="absolute text-green-300 pointer-events-none"
          style={{
            left: l.left,
            top: l.top,
            width: l.size,
            height: l.size,
            opacity: l.opacity,
            animation: `float ${l.duration} ease-in-out ${l.delay} infinite`,
          }}
        />
      ))}
    </>
  );
}

/* ═══════════════════════════════════════════
   PHASE 1 — Splash Screen
   ═══════════════════════════════════════════ */
function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFading(true), 3500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (fading) {
      const timer = setTimeout(onComplete, 500);
      return () => clearTimeout(timer);
    }
  }, [fading, onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden ${
        fading ? "animate-fadeOut" : "animate-fadeIn"
      }`}
      style={{
        background:
          "linear-gradient(135deg, #064e3b 0%, #065f46 25%, #047857 50%, #059669 75%, #10b981 100%)",
      }}
      onClick={() => setFading(true)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") setFading(true);
      }}
      aria-label="Welcome screen — click or press Enter to continue"
    >
      {/* Floating leaves */}
      <FloatingLeaves />

      {/* Top decorative line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-300/60 to-transparent" />

      {/* Logo / Icon */}
      <div
        className="relative mb-8 animate-slideUp"
        style={{ animationDelay: "0.2s", opacity: 0 }}
      >
        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 animate-pulseGlow">
          <Sprout className="h-12 w-12 text-emerald-200" />
        </div>
      </div>

      {/* Brand */}
      <div
        className="relative mb-10 animate-slideUp"
        style={{ animationDelay: "0.4s", opacity: 0 }}
      >
        <h1 className="text-2xl font-bold tracking-widest text-emerald-100 uppercase">
          Green Start
        </h1>
      </div>

      {/* Marquee container */}
      <div className="relative w-full overflow-hidden py-6">
        {/* Gradient edges */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-24 bg-gradient-to-r from-[#047857] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-24 bg-gradient-to-l from-[#047857] to-transparent" />

        {/* Marquee text */}
        <div className="animate-marquee whitespace-nowrap animate-marqueeGlow">
          <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-wide">
            Welcome ! &nbsp; Make Your Life Green &amp; Better
          </span>
          <span className="mx-16 text-3xl sm:text-4xl md:text-5xl font-extrabold text-emerald-200/80 tracking-wide">
            🌱
          </span>
          <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-wide">
            Welcome ! &nbsp; Make Your Life Green &amp; Better
          </span>
        </div>
      </div>

      {/* Subtitle */}
      <p
        className="mt-8 text-sm text-emerald-200/70 tracking-wider uppercase animate-slideUp"
        style={{ animationDelay: "0.8s", opacity: 0 }}
      >
        Tap anywhere to continue
      </p>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-300/60 to-transparent" />
    </div>
  );
}

/* ═══════════════════════════════════════════
   PHASE 2 — Auth Dashboard (Login / Sign Up)
   ═══════════════════════════════════════════ */
function AuthScreen({ onAuthenticated }: { onAuthenticated: (user: StoredUser) => void }) {
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Simulated delay for realistic feel
    setTimeout(() => {
      if (mode === "signup") {
        if (!name.trim() || !email.trim() || !password.trim()) {
          setError("Please fill in all fields.");
          setLoading(false);
          return;
        }
        if (password.length < 4) {
          setError("Password must be at least 4 characters.");
          setLoading(false);
          return;
        }
        const accounts = getAccounts();
        if (accounts[email]) {
          setError("An account with this email already exists. Please log in.");
          setLoading(false);
          return;
        }
        saveAccount(email, name, password);
        const user = { name, email };
        storeUser(user);
        onAuthenticated(user);
      } else {
        if (!email.trim() || !password.trim()) {
          setError("Please fill in all fields.");
          setLoading(false);
          return;
        }
        const accounts = getAccounts();
        const account = accounts[email];
        if (!account) {
          setError("No account found with this email. Please sign up first.");
          setLoading(false);
          return;
        }
        if (account.password !== password) {
          setError("Incorrect password. Please try again.");
          setLoading(false);
          return;
        }
        const user = { name: account.name, email };
        storeUser(user);
        onAuthenticated(user);
      }
    }, 600);
  }

  function switchMode() {
    setMode((prev) => (prev === "login" ? "signup" : "login"));
    setError("");
    setName("");
    setEmail("");
    setPassword("");
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fadeIn"
      style={{
        background:
          "linear-gradient(160deg, #022c22 0%, #064e3b 30%, #065f46 60%, #047857 100%)",
      }}
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-1/4 -right-1/4 h-[600px] w-[600px] rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, #10b981 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute -bottom-1/4 -left-1/4 h-[500px] w-[500px] rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, #34d399 0%, transparent 70%)",
          }}
        />
        <FloatingLeaves />
      </div>

      {/* Auth Card */}
      <div className="relative w-full max-w-md animate-slideUp">
        {/* Card */}
        <div
          className="rounded-3xl border border-white/10 p-8 sm:p-10 backdrop-blur-xl"
          style={{
            background:
              "linear-gradient(145deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
            boxShadow:
              "0 25px 60px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)",
          }}
        >
          {/* Logo */}
          <div className="flex flex-col items-center mb-8">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/20 border border-emerald-400/30 mb-4">
              <Sprout className="h-8 w-8 text-emerald-300" />
            </div>
            <h2 className="text-2xl font-bold text-white tracking-tight">
              {mode === "login" ? "Welcome Back" : "Join Green Start"}
            </h2>
            <p className="mt-1 text-sm text-emerald-200/60">
              {mode === "login"
                ? "Sign in to access your healthy morning plan"
                : "Start your healthy morning journey today"}
            </p>
          </div>

          {/* Mode Toggle */}
          <div className="flex rounded-xl bg-white/5 p-1 mb-6 border border-white/5">
            <button
              type="button"
              onClick={() => mode !== "login" && switchMode()}
              className={`flex-1 flex items-center justify-center gap-2 rounded-lg py-2.5 text-sm font-medium transition-all duration-300 ${
                mode === "login"
                  ? "bg-emerald-500/20 text-emerald-200 shadow-sm border border-emerald-400/20"
                  : "text-white/40 hover:text-white/60"
              }`}
            >
              <LogIn className="h-4 w-4" />
              Login
            </button>
            <button
              type="button"
              onClick={() => mode !== "signup" && switchMode()}
              className={`flex-1 flex items-center justify-center gap-2 rounded-lg py-2.5 text-sm font-medium transition-all duration-300 ${
                mode === "signup"
                  ? "bg-emerald-500/20 text-emerald-200 shadow-sm border border-emerald-400/20"
                  : "text-white/40 hover:text-white/60"
              }`}
            >
              <UserPlus className="h-4 w-4" />
              Sign Up
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === "signup" && (
              <div>
                <label
                  htmlFor="auth-name"
                  className="block text-xs font-medium text-emerald-200/70 mb-1.5 uppercase tracking-wider"
                >
                  Full Name
                </label>
                <input
                  id="auth-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/25 outline-none transition-all focus:border-emerald-400/50 focus:bg-white/10 focus:ring-2 focus:ring-emerald-400/20"
                />
              </div>
            )}

            <div>
              <label
                htmlFor="auth-email"
                className="block text-xs font-medium text-emerald-200/70 mb-1.5 uppercase tracking-wider"
              >
                Email Address
              </label>
              <input
                id="auth-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/25 outline-none transition-all focus:border-emerald-400/50 focus:bg-white/10 focus:ring-2 focus:ring-emerald-400/20"
              />
            </div>

            <div>
              <label
                htmlFor="auth-password"
                className="block text-xs font-medium text-emerald-200/70 mb-1.5 uppercase tracking-wider"
              >
                Password
              </label>
              <div className="relative">
                <input
                  id="auth-password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 pr-11 text-sm text-white placeholder:text-white/25 outline-none transition-all focus:border-emerald-400/50 focus:bg-white/10 focus:ring-2 focus:ring-emerald-400/20"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((p) => !p)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 transition-colors"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Error */}
            {error && (
              <div className="rounded-lg bg-red-500/10 border border-red-400/20 px-4 py-2.5 text-sm text-red-300 animate-fadeIn">
                {error}
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="relative w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 py-3.5 text-sm font-semibold text-white shadow-lg shadow-emerald-500/25 transition-all hover:shadow-emerald-500/40 hover:brightness-110 disabled:opacity-60 disabled:cursor-not-allowed mt-2"
            >
              {loading ? (
                <div className="h-5 w-5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
              ) : (
                <>
                  {mode === "login" ? "Sign In" : "Create Account"}
                  <ArrowRight className="h-4 w-4" />
                </>
              )}
            </button>
          </form>

          {/* Footer */}
          <p className="mt-6 text-center text-xs text-white/30">
            {mode === "login" ? (
              <>
                Don&apos;t have an account?{" "}
                <button
                  type="button"
                  onClick={switchMode}
                  className="text-emerald-300/70 hover:text-emerald-300 underline underline-offset-2 transition-colors"
                >
                  Sign up free
                </button>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <button
                  type="button"
                  onClick={switchMode}
                  className="text-emerald-300/70 hover:text-emerald-300 underline underline-offset-2 transition-colors"
                >
                  Sign in
                </button>
              </>
            )}
          </p>
        </div>

        {/* Bottom text */}
        <p className="mt-4 text-center text-xs text-emerald-300/30">
          🌱 Healthy mornings start here
        </p>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   Main Wrapper Component
   ═══════════════════════════════════════════ */
export function AppEntryFlow({ children }: { children: React.ReactNode }) {
  const [phase, setPhase] = useState<Phase>("splash");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check if user is already logged in
    const user = getStoredUser();
    if (user) {
      setPhase("main");
    }
  }, []);

  const handleSplashComplete = useCallback(() => {
    setPhase("auth");
  }, []);

  const handleAuthenticated = useCallback((user: StoredUser) => {
    // Small delay for UX smoothness
    setTimeout(() => {
      setPhase("main");
    }, 200);
  }, []);

  // Avoid hydration mismatch — render nothing on server
  if (!mounted) {
    return null;
  }

  return (
    <>
      {phase === "splash" && <SplashScreen onComplete={handleSplashComplete} />}
      {phase === "auth" && <AuthScreen onAuthenticated={handleAuthenticated} />}
      {phase === "main" && <div className="animate-fadeIn">{children}</div>}
    </>
  );
}
