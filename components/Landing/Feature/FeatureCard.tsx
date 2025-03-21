import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Feature } from "../../../lib/types";
import { CardDecorator } from "./CardDecorator";

/**
 * FeatureCard component displays an individual feature with icon, title, and description
 *
 * @component
 * @param {Object} props - Component props
 * @param {LucideIcon} props.icon - The Lucide icon component to display
 * @param {string} props.title - The feature title
 * @param {string} props.description - The feature description
 * @param {'live' | 'coming'} props.status - The feature status (live or coming soon)
 * @param {Object} props.color - Color configuration for the feature
 * @param {string} props.color.text - Text color class
 * @param {string} props.color.hover - Hover color class
 * @returns {JSX.Element} Rendered feature card
 * @author GABRIEL SINCE 2025
 */
export function FeatureCard({
  icon: Icon,
  title,
  description,
  status,
  color,
}: Readonly<Feature>) {
  return (
    <Card className="overflow-hidden relative transition-all group hover:shadow-lg">
      <CardHeader className="pb-3">
        <div className="flex flex-col items-center">
          <CardDecorator>
            <Icon
              className={`${color.text} transition-colors size-6 group-hover:${color.hover}`}
              aria-hidden
            />
          </CardDecorator>
          <span
            className={`mt-4 px-4 py-1.5 text-xs font-medium text-white ${
              status === "live" ? "bg-green-500" : "bg-zinc-500"
            } rounded-full shadow-sm`}
          >
            {status === "live" ? "Live" : "Coming soon"}
          </span>
          <h3 className="mt-6 text-lg font-bold text-center">{title}</h3>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-center opacity-80">{description}</p>
      </CardContent>
    </Card>
  );
}
