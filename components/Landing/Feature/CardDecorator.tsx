import { ReactNode } from "react";

/**
 * CardDecorator component creates a decorative container for icons
 *
 * Renders a grid-patterned background with a centered container for the icon
 * Used in feature cards to create a consistent visual style for feature icons
 *
 * @component
 * @param {Object} props - Component props
 * @param {ReactNode} props.children - The icon or content to display in the center
 * @returns {JSX.Element} The rendered card decorator
 * @author GABRIEL SINCE 2025
 */
export function CardDecorator({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <div className="relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:bg-white/5 dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px]"
      />
      <div
        aria-hidden
        className="bg-radial to-background absolute inset-0 from-transparent to-75%"
      />
      <div className="flex absolute inset-0 justify-center items-center m-auto border-t border-l bg-background size-12">
        {children}
      </div>
    </div>
  );
}
