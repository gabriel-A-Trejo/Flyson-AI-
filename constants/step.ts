import { Step } from "@/lib/types";

export const steps: Step[] = [
  {
    number: 1,
    title: "Enter Your Travel Preferences",
    description: "Select dates, budget, and interests...",
    color: {
      base: "from-blue-100 to-blue-50",
      hover: "text-blue-600",
      border: "hover:border-blue-100",
      gradient: "from-blue-600 to-blue-500",
      ring: "ring-blue-50",
      dark: {
        from: "dark:from-blue-900/30",
        to: "dark:to-blue-800/30",
        ring: "dark:ring-blue-900/10",
        border: "dark:hover:border-blue-900/50",
      },
    },
  },
  {
    number: 2,
    title: "Get an AI-Generated Itinerary",
    description: "Instantly receive a structured trip plan.",
    color: {
      base: "from-purple-100 to-purple-50",
      hover: "text-purple-600",
      border: "hover:border-purple-100",
      gradient: "from-purple-600 to-purple-500",
      ring: "ring-purple-50",
      dark: {
        from: "dark:from-purple-900/30",
        to: "dark:to-purple-800/30",
        ring: "dark:ring-purple-900/10",
        border: "dark:hover:border-purple-900/50",
      },
    },
  },
  {
    number: 3,
    title: "Customize Your Trip",
    description: "Swap, adjust, and let AI refine your schedule.",
    color: {
      base: "from-indigo-100 to-indigo-50",
      hover: "text-indigo-600",
      border: "hover:border-indigo-100",
      gradient: "from-indigo-600 to-indigo-500",
      ring: "ring-indigo-50",
      dark: {
        from: "dark:from-indigo-900/30",
        to: "dark:to-indigo-800/30",
        ring: "dark:ring-indigo-900/10",
        border: "dark:hover:border-indigo-900/50",
      },
    },
  },
  {
    number: 4,
    title: "Download & Go",
    description: "Export your itinerary as a PDF or email it.",
    color: {
      base: "from-green-100 to-green-50",
      hover: "text-green-600",
      border: "hover:border-green-100",
      gradient: "from-green-600 to-green-500",
      ring: "ring-green-50",
      dark: {
        from: "dark:from-green-900/30",
        to: "dark:to-green-800/30",
        ring: "dark:ring-green-900/10",
        border: "dark:hover:border-green-900/50",
      },
    },
  },
];
