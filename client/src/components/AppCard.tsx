import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { useLocation } from "wouter";
import type { Application } from "@shared/schema";

interface AppCardProps {
  app: Application;
}

export default function AppCard({ app }: AppCardProps) {
  const [, setLocation] = useLocation();

  return (
    <Card className="overflow-hidden hover-elevate active-elevate-2 transition-all duration-300 hover:shadow-xl group" data-testid={`card-app-${app.id}`}>
      <div className="p-6 md:p-8">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-muted">
            <img 
              src={app.icon} 
              alt={`${app.name} icon`}
              className="w-full h-full object-cover"
              data-testid={`img-app-icon-${app.id}`}
            />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-xl font-semibold mb-1 truncate" data-testid={`text-app-name-${app.id}`}>
              {app.name}
            </h3>
            <Badge variant="secondary" className="text-xs" data-testid={`badge-category-${app.id}`}>
              {app.category}
            </Badge>
          </div>
        </div>

        <p className="text-sm text-muted-foreground mb-6 line-clamp-3" data-testid={`text-app-description-${app.id}`}>
          {app.description}
        </p>

        <div className="flex flex-wrap gap-2 justify-between items-center">
          <Button
            onClick={() => setLocation(`/applications/${app.id}`)}
            variant="outline"
            size="sm"
            data-testid={`link-app-details-${app.id}`}
          >
            View Details
          </Button>
          <Button
            onClick={() => window.open(app.url, "_blank", "noopener,noreferrer")}
            size="sm"
            className="gap-2"
            data-testid={`link-app-open-${app.id}`}
          >
            Open App
            <ExternalLink className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
}
