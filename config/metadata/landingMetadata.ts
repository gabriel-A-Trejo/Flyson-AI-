import { Metadata } from "next";

export const LandingMetadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? "https://flyson.ai"),
  title: "Flyson AI | Your AI Travel Companion for Vietnam",
  description:
    "Plan your perfect Vietnam trip with Flyson AI. Get personalized itineraries, local insights, and smart travel recommendations powered by artificial intelligence.",
  keywords:
    "Vietnam travel, AI travel planner, personalized itinerary, travel companion, Vietnam tourism",
  openGraph: {
    title: "Flyson AI | Your AI Travel Companion for Vietnam",
    description:
      "Plan your perfect Vietnam trip with Flyson AI. Get personalized itineraries, local insights, and smart travel recommendations.",
    type: "website",
    url: "https://flyson.ai",
    images: [
      {
        url: "/Logo.webp",
        width: 1200,
        height: 630,
        alt: "Flyson AI Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Flyson AI | Your AI Travel Companion for Vietnam",
    description: "Plan your perfect Vietnam trip with Flyson AI.",
    images: ["/Logo.webp"],
  },
};
