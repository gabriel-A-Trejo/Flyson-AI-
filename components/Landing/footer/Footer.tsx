import Logo from "@/components/shared/Logo";
import Link from "next/link";

/**
 * Footer section component for the landing page
 *
 * Displays the site logo and copyright information
 *
 * @component
 * @returns {JSX.Element} The rendered footer section
 * @author GABRIEL SINCE 2025
 */
export default function FooterSection() {
  return (
    <footer className="py-7 border-t">
      <div className="px-6 mx-auto max-w-5xl">
        <Link href="/" aria-label="go home" className="block mx-auto size-fit">
          <Logo />
        </Link>

        <span className="block text-sm text-center text-muted-foreground">
          © {new Date().getFullYear()} flyson.ai, All rights reserved
        </span>
      </div>
    </footer>
  );
}
