import FooterSection from "../../../components/Landing/footer/Footer";
import Header from "../../../components/Landing/header/Header";

/**
 * Layout component for the landing page
 *
 * Provides consistent header and footer across all landing page sections
 * Wraps the main content with navigation and footer elements
 *
 * @component
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - The page content to be rendered between header and footer
 * @returns {JSX.Element} The complete landing page layout with header, content, and footer
 * @author GABRIEL SINCE 2025
 */
export default function LandingPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
      <FooterSection />
    </>
  );
}
