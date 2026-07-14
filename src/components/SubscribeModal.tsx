"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { subscriptionPlans, type PlanId } from "@/data/plans";
import { cn } from "@/lib/utils";

type SubscribeModalProps = {
  defaultPlan?: PlanId;
  buttonText?: string;
  buttonClassName?: string;
};

export function SubscribeModal({
  defaultPlan = "pro",
  buttonText = "Subscribe Now",
  buttonClassName,
}: SubscribeModalProps) {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [plan, setPlan] = useState<PlanId>(defaultPlan);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  function handleOpenChange(next: boolean) {
    setOpen(next);
    if (!next) {
      setSubmitted(false);
      setName("");
      setPhone("");
      setPlan(defaultPlan);
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger
        render={
          <Button
            className={cn("w-full bg-green-700 hover:bg-green-800", buttonClassName)}
          />
        }
      >
        {buttonText}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Subscribe to Green Start</DialogTitle>
          <DialogDescription>
            Online payments coming soon. Leave your details and we&apos;ll contact
            you to activate your plan.
          </DialogDescription>
        </DialogHeader>

        {submitted ? (
          <div className="space-y-4 py-4 text-center">
            <div className="text-4xl">✅</div>
            <p className="font-medium text-green-800">
              Thank you, {name}! We&apos;ll reach you at {phone} shortly.
            </p>
            <p className="text-sm text-gray-500">
              Your selected plan:{" "}
              <strong>
                {subscriptionPlans.find((p) => p.id === plan)?.name}
              </strong>
            </p>
            <Button
              className="bg-green-700 hover:bg-green-800"
              onClick={() => handleOpenChange(false)}
            >
              Close
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="plan">Select Plan</Label>
              <select
                id="plan"
                value={plan}
                onChange={(e) => setPlan(e.target.value as PlanId)}
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"
              >
                {subscriptionPlans.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.name} — ₹{p.monthlyPrice}/mo or ₹
                    {p.yearlyPrice.toLocaleString("en-IN")}/yr
                  </option>
                ))}
              </select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                required
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                required
                type="tel"
                placeholder="+91 98765 43210"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-green-700 hover:bg-green-800"
            >
              Request Subscription
            </Button>
            <p className="text-center text-xs text-gray-400">
              Payment gateway integration coming in v2
            </p>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
