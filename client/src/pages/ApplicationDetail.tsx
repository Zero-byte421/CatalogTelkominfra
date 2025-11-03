import { useRoute, useLocation } from "wouter";
import { applications } from "@/data/applications";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ArrowLeft, ExternalLink, CheckCircle2 } from "lucide-react";
import AnimatedPage from "@/components/AnimatedPage";

export default function ApplicationDetail() {
  const [, params] = useRoute("/applications/:id");
  const [, setLocation] = useLocation();
  const app = applications.find(a => a.id === params?.id);

  if (!app) {
    return (
      <div className="min-h-screen pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4" data-testid="text-not-found">Application Not Found</h1>
          <Button
            onClick={() => setLocation("/applications")}
            className="gap-2"
            data-testid="link-back-to-apps"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Applications
          </Button>
        </div>
      </div>
    );
  }

  return (
    <AnimatedPage>
      <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <Button
          onClick={() => setLocation("/applications")}
          variant="ghost"
          className="gap-2 mb-8 -ml-3"
          data-testid="link-back-breadcrumb"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Applications
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="flex items-start gap-4 mb-6">
              <div className="w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0 bg-muted">
                <img 
                  src={app.icon} 
                  alt={`${app.name} icon`}
                  className="w-full h-full object-cover"
                  data-testid={`img-detail-icon-${app.id}`}
                />
              </div>
              <div>
                <h1 className="text-4xl font-bold mb-2" data-testid={`text-detail-name-${app.id}`}>
                  {app.name}
                </h1>
                <Badge variant="secondary" data-testid={`badge-detail-category-${app.id}`}>
                  {app.category}
                </Badge>
              </div>
            </div>

            <p className="text-lg text-muted-foreground mb-8" data-testid={`text-detail-description-${app.id}`}>
              {app.description}
            </p>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4" data-testid="text-features-heading">Key Features</h2>
              <ul className="space-y-3">
                {app.features.map((feature, index) => (
                  <li 
                    key={index} 
                    className="flex items-start gap-3"
                    data-testid={`text-feature-${index}`}
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4" data-testid="text-access-heading">Access URL</h2>
              <Card className="p-4">
                <a 
                  href={app.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline break-all"
                  data-testid={`link-detail-url-${app.id}`}
                >
                  {app.url}
                </a>
              </Card>
            </div>

            <Button
              onClick={() => window.open(app.url, "_blank", "noopener,noreferrer")}
              size="lg"
              className="w-full gap-2"
              data-testid={`link-detail-open-app-${app.id}`}
            >
              Open Application
              <ExternalLink className="w-5 h-5" />
            </Button>
          </div>

          <div>
            <Card className="p-8">
              <h2 className="text-2xl font-semibold mb-6" data-testid="text-preview-heading">Application Preview</h2>
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-4">
                <img 
                  src={app.icon} 
                  alt={`${app.name} preview`}
                  className="w-32 h-32 object-contain opacity-50"
                />
              </div>
              <p className="text-sm text-muted-foreground text-center">
                Click "Open Application" to access the full interface
              </p>
            </Card>

            <Card className="p-8 mt-6">
              <h3 className="text-xl font-semibold mb-4" data-testid="text-sso-heading">Single Sign-On</h3>
              <p className="text-muted-foreground mb-6">
                This application supports SSO authentication. Use your corporate credentials to access securely.
              </p>
              <Button
                onClick={() => setLocation("/login")}
                variant="outline"
                className="w-full"
                data-testid="link-detail-login"
              >
                Login with SSO
              </Button>
            </Card>
          </div>
        </div>
      </div>
      </div>
    </AnimatedPage>
  );
}
