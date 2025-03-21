import Logo from "@/components/shared/Logo";
import Link from "next/link";
import React from "react";
import AuthButtons from "./authButtons";

/**
 * Header component for the landing page
 *
 * Displays the site logo and authentication buttons
 * Sticky positioned at the top of the page for consistent navigation
 *
 * @component
 * @returns {JSX.Element} The rendered header with logo and auth buttons
 * @author GABRIEL SINCE 2025
 */
const Header = () => {
  return (
    <header className="flex sticky top-0 z-50 justify-between items-center px-6 py-3 bg-transparent">
      <Link
        href="/"
        aria-label="Logo"
        className="inline-flex items-center hover:cursor-pointer"
      >
        <Logo />
      </Link>
      <section className="flex items-center">
        <AuthButtons />
      </section>
    </header>
  );
};

export default Header;
