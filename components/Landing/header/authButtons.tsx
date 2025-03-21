import React from "react";
import Link from "next/link";

/**
 * Authentication buttons component
 *
 * Displays Sign In and Sign Up buttons for user authentication
 * Used in the header to provide quick access to authentication pages
 *
 * @component
 * @returns {JSX.Element} The rendered authentication buttons
 * @author GABRIEL SINCE 2025
 */
const authButtons = () => {
  return (
    <section className="flex items-center mr-6">
      <Link
        href="/signin"
        className="px-4 py-2 text-black bg-white rounded-lg hover:bg-gray-100"
      >
        Sign In
      </Link>
      <Link
        href="/signup"
        className="px-4 py-2 text-white rounded-lg bg-zinc-900 hover:bg-zinc-800"
      >
        Sign Up
      </Link>
    </section>
  );
};

export default authButtons;
