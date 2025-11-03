import AppCard from "@/components/AppCard";
import { applications } from "@/data/applications";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedPage from "@/components/AnimatedPage";

export default function Applications() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredApps = applications.filter(app =>
    app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    app.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    app.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <AnimatedPage>
      <div className="min-h-screen pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-page-title">
              Application List
            </h1>
            <p className="text-lg text-muted-foreground mb-8" data-testid="text-page-description">
              Browse and access all available applications from our comprehensive catalog
            </p>

            <div className="relative max-w-xl">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search applications..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                data-testid="input-search-apps"
              />
            </div>
          </div>

          {filteredApps.length === 0 ? (
            <div className="text-center py-16" data-testid="text-no-results">
              <p className="text-lg text-muted-foreground">
                No applications found matching your search.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
              {filteredApps.map((app, index) => (
                <ScrollReveal key={app.id} delay={index * 0.1}>
                  <AppCard app={app} />
                </ScrollReveal>
              ))}
            </div>
          )}
        </div>
      </div>
    </AnimatedPage>
  );
}
