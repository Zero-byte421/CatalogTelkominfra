import { LayoutDashboard, Sparkles, Shield, RefreshCw } from "lucide-react";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const iconMap = {
  dashboard: LayoutDashboard,
  personalize: Sparkles,
  secure: Shield,
  sync: RefreshCw
};

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  const IconComponent = iconMap[icon as keyof typeof iconMap] || LayoutDashboard;

  return (
    <div className="text-center p-6 md:p-8" data-testid={`card-feature-${icon}`}>
      <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-primary/10 rounded-2xl mb-6">
        <IconComponent className="w-8 h-8 md:w-10 md:h-10 text-primary" data-testid={`icon-feature-${icon}`} />
      </div>
      <h3 className="text-xl md:text-2xl font-semibold mb-3" data-testid={`text-feature-title-${icon}`}>
        {title}
      </h3>
      <p className="text-muted-foreground max-w-prose mx-auto" data-testid={`text-feature-description-${icon}`}>
        {description}
      </p>
    </div>
  );
}
