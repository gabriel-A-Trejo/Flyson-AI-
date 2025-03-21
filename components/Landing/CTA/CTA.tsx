import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="py-16 h-screen">
      <div className="px-6 py-12 mx-auto max-w-5xl rounded-3xl md:py-20 lg:py-32">
        <div className="text-center">
          <h2 className="text-4xl font-semibold text-balance lg:text-5xl">
            Take the Stress Out of Travel Planning!
          </h2>
          <p className="mt-4">
            Let AI handle the details—just enjoy your trip.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-12">
            <Button asChild size="lg">
              <Link href="/signUp">
                <span>Get Started</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
