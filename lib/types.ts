import { LucideIcon } from "lucide-react";

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  status: "live" | "coming";
  color: {
    text: string;
    hover: string;
  };
}

export interface Step {
  number: number;
  title: string;
  description: string;
  color: {
    base: string;
    hover: string;
    ring: string;
    border: string;
    gradient: string;
    dark: {
      from: string;
      to: string;
      ring: string;
      border: string;
    };
  };
}

export interface StepCardProps {
  step: Step;
}
