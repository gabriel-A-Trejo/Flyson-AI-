/**
 * Imports Geist and Geist Mono fonts from Google Fonts using Next.js font optimization
 * @see https://nextjs.org/docs/app/building-your-application/optimizing/fonts
 */
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

/**
 * Configures Geist Sans font with variable font support
 * @constant {Object} geistSans - Geist Sans font configuration
 * @property {string} variable - CSS variable name for the font
 * @property {string[]} subsets - Font character subsets to load
 */
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

/**
 * Configures Geist Mono font with variable font support
 * @constant {Object} geistMono - Geist Mono font configuration
 * @property {string} variable - CSS variable name for the font
 * @property {string[]} subsets - Font character subsets to load
 */
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/**
 * Root layout component that wraps all pages
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components to render
 * @returns {JSX.Element} Root layout with configured fonts
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
