import { LandingMetadata } from "@/config/metadata/landingMetadata";
import { Metadata } from "next";
import HeroSection from "../../../components/Landing/Hero/HeroSection";
import Feature from "../../../components/Landing/Feature/Feature";

import HowItWorks from "@/components/Landing/HowItworks/HowItWork";
import CallToAction from "@/components/Landing/CTA/CTA";

export const metadata: Metadata = LandingMetadata;

/**
 * Landing page component for the application
 *
 * Assembles the main sections of the landing page:
 * - Hero section with main value proposition
 * - Features section showcasing platform capabilities
 * - How It Works section explaining the user flow
 * - Call to Action section for user conversion
 *
 * @component
 * @returns {JSX.Element} The complete landing page
 * @author Gabriel Trejo
 * @copyright 2025 Gabriel Trejo
 */
const landingPageSection = () => {
  return (
    <>
      <HeroSection />
      <Feature />
      <HowItWorks />
      <CallToAction />
    </>
  );
};

export default landingPageSection;
