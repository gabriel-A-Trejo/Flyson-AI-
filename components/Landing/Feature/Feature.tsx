import { features } from "@/constants/Feature";
import { FeatureCard } from "./FeatureCard";

/**
 * Features section component for the landing page
 *
 * Displays a grid of feature cards highlighting the platform's capabilities
 * Each feature is rendered using the FeatureCard component with data from features array
 *
 * @author GABRIEL SINCE 2025
 * @returns {JSX.Element} The rendered Features section
 */
export default function Features() {
  return (
    <section className="py-16 min-h-screen md:py-32 dark:bg-transparent">
      <div className="@container mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-4xl font-semibold text-balance lg:text-5xl">
            Plan Smarter. Travel Better.
          </h2>
          <p className="mt-4 text-lg opacity-80">
            Explore the tools designed to make trip planning seamless, tailored,
            and stress-free.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 mt-16 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
