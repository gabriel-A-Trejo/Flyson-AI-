import { steps } from "@/constants/step";
import { StepCard } from "./StepCard";

/**
 * HowItWorks section component
 * Displays the step-by-step process of using the platform
 *
 * @author GABRIEL SINCE 2025
 * @returns {JSX.Element} The rendered HowItWorks section
 */
export default function HowItWorks() {
  return (
    <section className="py-12  md:py-20">
      <div className="px-6 mx-auto space-y-8 max-w-5xl md:space-y-16">
        <div className="relative z-10 mx-auto space-y-6 max-w-xl text-center md:space-y-12">
          <h2 className="text-4xl font-medium text-balance lg:text-5xl">
            How It Works
          </h2>
        </div>

        <div className="grid relative gap-8 mx-auto max-w-4xl sm:grid-cols-2 lg:grid-cols-2">
          {steps.map((step) => (
            <StepCard key={step.number} step={step} />
          ))}
        </div>
      </div>
    </section>
  );
}
