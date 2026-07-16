"use client";

import { useState } from "react";
import {
  MessageCircle,
  Phone,
  Mail,
  Clock,
  ChevronDown,
  Send,
  CheckCircle2,
  HelpCircle,
  Waves,
} from "lucide-react";
import { useLanguage } from "@/components/LanguageContext";

const faqs = [
  {
    q: "How fresh are the sprouts when delivered?",
    a: "Our sprouts are harvested the same morning of delivery. We grow them in a controlled environment and pack them hygienically to ensure maximum freshness. Sprouts are typically delivered within 2–4 hours of harvesting.",
  },
  {
    q: "Do you add any preservatives or chemicals?",
    a: "Absolutely not. We grow all our sprouts 100% naturally with clean water and organic conditions. No preservatives, no additives, no chemicals — just pure, fresh sprouts.",
  },
  {
    q: "What is the shelf life of the sprouts?",
    a: "Our sprouts are best consumed on the day of delivery for maximum nutrition. They can be refrigerated and consumed within 2 days. We recommend eating them fresh for the best taste and health benefits.",
  },
  {
    q: "Can I request a sprout variety not listed?",
    a: "Yes! Use our 'Request Sprouts' feature from the navbar or home page. We review requests regularly and add new varieties based on demand. You'll be notified when it's available.",
  },
  {
    q: "What are the delivery timings?",
    a: "We deliver between 5:30 AM and 8:30 AM every day, including weekends. You can specify a delivery window in your subscription settings.",
  },
  {
    q: "Can I change or cancel my subscription?",
    a: "Yes, subscriptions can be paused or cancelled at any time from your account. Cancellations made before 8 PM are effective from the next morning.",
  },
  {
    q: "Are your sprouts suitable for diabetics?",
    a: "Yes! Sprouts like Green Gram, Cowpea, and Horse Gram have a low glycaemic index and are excellent for blood sugar management. We recommend consulting your doctor for personalised advice.",
  },
  {
    q: "Do you deliver to my area?",
    a: "We currently deliver within a 20 km radius of our farm. Enter your pin code on the checkout page to check availability. We are expanding to more areas every month!",
  },
];

type ContactType = "query" | "complaint" | "feedback" | "order";

export default function HelpPage() {
  const { t } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    type: "query" as ContactType,
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      const existing = JSON.parse(
        localStorage.getItem("contact_messages") || "[]"
      );
      existing.push({ ...form, date: new Date().toISOString() });
      localStorage.setItem("contact_messages", JSON.stringify(existing));
      setLoading(false);
      setSubmitted(true);
    }, 700);
  }

  return (
    <div>
      {/* Coastal Header */}
      <section
        className="relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #0c4a6e 0%, #0891b2 50%, #0d9488 100%)",
          minHeight: "200px",
        }}
      >
        <div
          className="absolute inset-0 animate-oceanShimmer opacity-15"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)",
          }}
        />
        <div className="relative z-10 mx-auto max-w-6xl px-4 py-14 sm:px-6 text-center text-white">
          <div className="flex justify-center mb-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 border border-white/20">
              <HelpCircle className="h-6 w-6 text-cyan-200" />
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold">{t.helpCentre}</h1>
          <p className="mt-3 text-cyan-100/80 max-w-md mx-auto">
            We&apos;re here to help. Find answers below or reach out directly.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 50" preserveAspectRatio="none" className="w-full h-10">
            <path
              d="M0,25 C360,50 720,0 1080,25 C1260,37.5 1380,12.5 1440,25 L1440,50 L0,50 Z"
              fill="#f8faf6"
            />
          </svg>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        {/* Support Info Cards */}
        <div className="grid gap-4 sm:grid-cols-3 mb-14">
          {[
            {
              icon: Phone,
              label: "Call Us",
              value: "+91 98765 43210",
              sub: "Mon–Sat, 6 AM – 8 PM",
              color: "bg-green-50 border-green-100",
              iconBg: "bg-green-700",
            },
            {
              icon: Mail,
              label: "Email Us",
              value: "hello@greenstart.in",
              sub: "Reply within 4 hours",
              color: "bg-teal-50 border-teal-100",
              iconBg: "bg-teal-600",
            },
            {
              icon: Clock,
              label: "Delivery Hours",
              value: "5:30 AM – 8:30 AM",
              sub: "All 7 days",
              color: "bg-amber-50 border-amber-100",
              iconBg: "bg-amber-600",
            },
          ].map((card) => (
            <div
              key={card.label}
              className={`flex items-start gap-4 rounded-2xl border p-5 ${card.color}`}
            >
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-xl ${card.iconBg} text-white flex-shrink-0`}
              >
                <card.icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-0.5">
                  {card.label}
                </p>
                <p className="font-bold text-green-900">{card.value}</p>
                <p className="text-xs text-gray-500 mt-0.5">{card.sub}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* FAQ Section */}
          <div id="faq">
            <h2 className="text-2xl font-bold text-green-900 mb-2 flex items-center gap-2">
              <HelpCircle className="h-6 w-6 text-teal-500" />
              {t.faq}
            </h2>
            <p className="text-gray-500 text-sm mb-6">
              Answers to the most common questions from our customers.
            </p>

            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-green-100 bg-white overflow-hidden shadow-sm"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between gap-3 px-5 py-4 text-left hover:bg-green-50/50 transition-colors"
                  >
                    <span className="font-medium text-green-900 text-sm leading-snug">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`h-4 w-4 text-green-500 flex-shrink-0 transition-transform ${
                        openFaq === i ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed border-t border-green-50 pt-3 animate-fadeIn">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div id="contact">
            <h2 className="text-2xl font-bold text-green-900 mb-2 flex items-center gap-2">
              <MessageCircle className="h-6 w-6 text-teal-500" />
              {t.contactUs}
            </h2>
            <p className="text-gray-500 text-sm mb-6">
              Send us a message and we&apos;ll get back to you within 4 hours.
            </p>

            <div className="rounded-3xl border border-green-100 bg-white p-6 shadow-sm">
              {submitted ? (
                <div className="flex flex-col items-center gap-4 py-10 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 border border-emerald-100">
                    <CheckCircle2 className="h-8 w-8 text-emerald-500" />
                  </div>
                  <h3 className="text-xl font-bold text-green-900">
                    Message Sent! 🌱
                  </h3>
                  <p className="text-gray-500 max-w-sm text-sm">
                    Thank you for reaching out. Our team will respond to your{" "}
                    <span className="font-medium text-green-700">{form.type}</span>{" "}
                    within 4 working hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: "", email: "", phone: "", type: "query", message: "" });
                    }}
                    className="mt-2 rounded-xl border border-green-200 px-5 py-2 text-sm font-medium text-green-700 hover:bg-green-50 transition-colors"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                        Your Name *
                      </label>
                      <input
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Full name"
                        className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-green-400 focus:ring-2 focus:ring-green-100 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                        Phone
                      </label>
                      <input
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-green-400 focus:ring-2 focus:ring-green-100 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                      Email *
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-green-400 focus:ring-2 focus:ring-green-100 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                      Type of Request
                    </label>
                    <select
                      name="type"
                      value={form.type}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-green-400 focus:ring-2 focus:ring-green-100 transition-all bg-white"
                    >
                      <option value="query">General Query</option>
                      <option value="complaint">Complaint</option>
                      <option value="feedback">Feedback</option>
                      <option value="order">Order Issue</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Describe your query, complaint, or feedback in detail..."
                      className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-green-400 focus:ring-2 focus:ring-green-100 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-green-700 to-teal-600 py-3.5 text-sm font-semibold text-white shadow-md hover:brightness-110 disabled:opacity-60 transition-all"
                  >
                    {loading ? (
                      <div className="h-5 w-5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* WhatsApp CTA */}
            <div className="mt-4 rounded-2xl border border-green-100 bg-green-50 px-5 py-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-600 text-white flex-shrink-0">
                <MessageCircle className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-green-900">
                  Prefer WhatsApp?
                </p>
                <p className="text-xs text-green-600">
                  Chat with us on +91 98765 43210 — typically reply in minutes!
                </p>
              </div>
              <Waves className="h-5 w-5 text-green-300 ml-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
