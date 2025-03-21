"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

/**
 * Hero section component for the landing page
 *
 * Displays the main value proposition with animated elements
 * Features a background image, headline, subheadline, description, and CTA button
 * Uses Framer Motion for entrance animations of each element
 *
 * @component
 * @returns {JSX.Element} The rendered hero section
 * @author GABRIEL SINCE 2025
 */

const HeroSection = () => {
  return (
    <section
      className="relative min-h-screen bg-center bg-no-repeat bg-cover"
      style={{
        backgroundImage: 'url("/backgroundImage.webp")',
      }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: -80 }}
        transition={{
          duration: 1.2,
          ease: "easeInOut",
        }}
        className="flex relative z-10 flex-col justify-center items-center px-4 mx-auto max-w-4xl min-h-screen text-center text-white sm:px-6 lg:px-8"
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeOut",
          }}
          className="mb-2 text-base font-semibold tracking-wide sm:text-lg"
        >
          1st AI Trip Planning in Vietnam
        </motion.h2>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.5,
            duration: 0.8,
            ease: "easeOut",
          }}
          className="mb-4 max-w-3xl text-4xl font-bold leading-tight sm:mb-6 sm:text-5xl lg:text-6xl"
        >
          Your Personalized Vietnam
          <br className="hidden sm:block" />
          Travel Plan
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.7,
            duration: 0.8,
            ease: "easeOut",
          }}
          className="px-4 mb-6 max-w-2xl text-base leading-relaxed opacity-90 sm:mb-8 sm:text-lg sm:px-0"
        >
          flyson.ai creates a custom AI-powered itinerary based on your
          preferences, budget, and travel style. No research, no stress—just a
          perfectly planned trip in seconds.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.9,
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          <Link
            href={"/signin"}
            className="flex gap-2 items-center px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-semibold text-black bg-white rounded-full transition-all hover:bg-gray-100 hover:gap-3 group"
          >
            Get Early Access
            <ArrowRight className="w-3 h-3 transition-transform sm:w-4 sm:h-4 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
