"use client";

import { useState } from "react";
import { X, Sprout, CheckCircle2, Send } from "lucide-react";
import { useLanguage } from "./LanguageContext";

type Props = {
  trigger: React.ReactNode;
};

export function RequestSproutsModal({ trigger }: Props) {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    sproutName: "",
    quantity: "",
    reason: "",
    name: "",
    phone: "",
    email: "",
  });

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      // Save to localStorage
      const existing = JSON.parse(
        localStorage.getItem("sprout_requests") || "[]"
      );
      existing.push({ ...form, date: new Date().toISOString() });
      localStorage.setItem("sprout_requests", JSON.stringify(existing));
      setLoading(false);
      setSubmitted(true);
    }, 700);
  }

  function handleClose() {
    setOpen(false);
    setSubmitted(false);
    setForm({
      sproutName: "",
      quantity: "",
      reason: "",
      name: "",
      phone: "",
      email: "",
    });
  }

  return (
    <>
      <span onClick={() => setOpen(true)}>{trigger}</span>

      {open && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)" }}
        >
          <div
            className="relative w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl animate-slideUp"
            style={{
              background: "linear-gradient(145deg, #064e3b, #065f46)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            {/* Header */}
            <div className="relative px-8 pt-8 pb-6 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/20 border border-emerald-400/30">
                  <Sprout className="h-5 w-5 text-emerald-300" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">
                    {t.requestSprouts}
                  </h2>
                  <p className="text-sm text-emerald-200/60">
                    Can&apos;t find what you need? Let us know!
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={handleClose}
                className="absolute right-6 top-6 rounded-lg p-1.5 text-white/40 hover:bg-white/10 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Content */}
            <div className="px-8 py-6 max-h-[70vh] overflow-y-auto">
              {submitted ? (
                <div className="flex flex-col items-center gap-4 py-8 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20">
                    <CheckCircle2 className="h-8 w-8 text-emerald-300" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Request Received! 🌱
                  </h3>
                  <p className="text-emerald-200/70 max-w-sm">
                    Thank you for your request. We will review it and try to
                    add{" "}
                    <span className="text-emerald-300 font-medium">
                      {form.sproutName}
                    </span>{" "}
                    to our collection soon!
                  </p>
                  <button
                    type="button"
                    onClick={handleClose}
                    className="mt-2 rounded-xl bg-emerald-500 px-6 py-2.5 text-sm font-semibold text-white hover:bg-emerald-400 transition-colors"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Sprout Name */}
                  <div>
                    <label className="block text-xs font-medium text-emerald-200/70 mb-1.5 uppercase tracking-wider">
                      Sprout / Product Name *
                    </label>
                    <input
                      name="sproutName"
                      required
                      value={form.sproutName}
                      onChange={handleChange}
                      placeholder="e.g. Lentil Sprouts, Sunflower Sprouts..."
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/25 outline-none focus:border-emerald-400/50 focus:ring-2 focus:ring-emerald-400/20 transition-all"
                    />
                  </div>

                  {/* Quantity */}
                  <div>
                    <label className="block text-xs font-medium text-emerald-200/70 mb-1.5 uppercase tracking-wider">
                      Preferred Quantity
                    </label>
                    <select
                      name="quantity"
                      value={form.quantity}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-emerald-400/50 focus:ring-2 focus:ring-emerald-400/20 transition-all"
                      style={{ backgroundColor: "#065f46" }}
                    >
                      <option value="">Select quantity</option>
                      <option value="100g">100g / serving</option>
                      <option value="250g">250g / serving</option>
                      <option value="500g">500g / serving</option>
                      <option value="1kg">1 kg</option>
                      <option value="custom">Custom / Bulk</option>
                    </select>
                  </div>

                  {/* Reason */}
                  <div>
                    <label className="block text-xs font-medium text-emerald-200/70 mb-1.5 uppercase tracking-wider">
                      Why do you want this? (Optional)
                    </label>
                    <textarea
                      name="reason"
                      value={form.reason}
                      onChange={handleChange}
                      rows={2}
                      placeholder="Health goals, dietary requirements..."
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/25 outline-none focus:border-emerald-400/50 focus:ring-2 focus:ring-emerald-400/20 transition-all resize-none"
                    />
                  </div>

                  {/* Contact */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-emerald-200/70 mb-1.5 uppercase tracking-wider">
                        Your Name *
                      </label>
                      <input
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Full name"
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/25 outline-none focus:border-emerald-400/50 focus:ring-2 focus:ring-emerald-400/20 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-emerald-200/70 mb-1.5 uppercase tracking-wider">
                        Phone / WhatsApp
                      </label>
                      <input
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/25 outline-none focus:border-emerald-400/50 focus:ring-2 focus:ring-emerald-400/20 transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-emerald-200/70 mb-1.5 uppercase tracking-wider">
                      Email (Optional)
                    </label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/25 outline-none focus:border-emerald-400/50 focus:ring-2 focus:ring-emerald-400/20 transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 py-3.5 text-sm font-semibold text-white shadow-lg shadow-emerald-500/25 hover:brightness-110 disabled:opacity-60 transition-all mt-2"
                  >
                    {loading ? (
                      <div className="h-5 w-5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Submit Request
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
