import { Sparkles, Clock, Sliders, Map, Plane, Wallet } from "lucide-react";
import { Feature } from "../lib/types";

export const features: Feature[] = [
  {
    icon: Sparkles,
    title: "AI-Powered Personalized Itineraries",
    description:
      "Generates a fully customized, day-by-day itinerary in seconds.",
    status: "live",
    color: { text: "text-blue-500", hover: "text-blue-600" },
  },
  {
    icon: Clock,
    title: "Real-Time Adjustments & Smart Suggestions",
    description:
      "Auto-adjusts your itinerary based on weather, traffic, and closures.",
    status: "coming",
    color: { text: "text-purple-500", hover: "text-purple-600" },
  },
  {
    icon: Sliders,
    title: "Customizable Travel Plan",
    description:
      "Modify your trip plan effortlessly to fit your schedule and preferences.",
    status: "coming",
    color: { text: "text-indigo-500", hover: "text-indigo-600" },
  },
  {
    icon: Map,
    title: "Localized Travel Insights & Hidden Gems",
    description:
      "Access exclusive local events, culture tips, and insider deals.",
    status: "coming",
    color: { text: "text-emerald-500", hover: "text-emerald-600" },
  },
  {
    icon: Plane,
    title: "Smart Flight & Hotel Booking",
    description:
      "Find and book the best flights and hotels, customized to your budget and travel needs.",
    status: "coming",
    color: { text: "text-rose-500", hover: "text-rose-600" },
  },
  {
    icon: Wallet,
    title: "Budget Management & Cost Optimization",
    description: "Tracks spending and suggests smarter travel choices.",
    status: "coming",
    color: { text: "text-amber-500", hover: "text-amber-600" },
  },
];
