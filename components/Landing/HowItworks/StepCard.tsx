import { StepCardProps } from "@/lib/types";

/**
 * StepCard component displays an individual step in the "How It Works" section
 *
 * Renders a card with step number, title, and description
 * Applies dynamic styling based on the step's color configuration
 *
 * @component
 * @param {Object} props - Component props
 * @param {Step} props.step - The step data to display
 * @returns {JSX.Element} The rendered step card
 * @author GABRIEL SINCE 2025
 */
export function StepCard({ step }: Readonly<StepCardProps>) {
  return (
    <div
      className={`relative p-8 space-y-6 rounded-xl border backdrop-blur-sm transition-all bg-white/50 group hover:shadow-xl ${step.color.border} dark:bg-gray-900/50 ${step.color.dark.border}`}
    >
      <div className="flex gap-4 items-center">
        <div
          className={`flex justify-center items-center bg-gradient-to-br ${step.color.base} rounded-full ring-4 ${step.color.ring} size-12 ${step.color.dark.from} ${step.color.dark.to} ${step.color.dark.ring}`}
        >
          <span
            className={`text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${step.color.gradient}`}
          >
            {step.number}
          </span>
        </div>
        <h3
          className={`text-lg font-semibold transition-colors group-hover:${step.color.hover}`}
        >
          {step.title}
        </h3>
      </div>
      <p className="pl-16 text-sm text-gray-600 dark:text-gray-300">
        {step.description}
      </p>
    </div>
  );
}
