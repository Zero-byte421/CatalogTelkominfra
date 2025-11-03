import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { ArrowRight, ChevronDown } from "lucide-react";
import AppCard from "@/components/AppCard";
import FeatureCard from "@/components/FeatureCard";
import { applications, features } from "@/data/applications";
import heroBackground from "@assets/generated_images/Hero_background_gradient_tech_125cc335.png";
import { useEffect, useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedPage from "@/components/AnimatedPage";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [, setLocation] = useLocation();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight - 80,
      behavior: "smooth"
    });
  };

  return (
    <AnimatedPage>
      <div className="min-h-screen">
        <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url(${heroBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
        data-testid="section-hero"
      >
        <div className={`max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center z-10 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6" data-testid="text-hero-title">
            One app to simplify your life
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto" data-testid="text-hero-subtitle">
            With a clean design, powerful features, and fast performance, 
            AppCatalog helps you stay organized, boost productivity, and 
            stay connected effortlessly.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              onClick={() => setLocation("/applications")}
              size="lg"
              className="gap-2 text-lg px-8 py-6"
              data-testid="link-hero-applications"
            >
              Explore Applications
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button
              onClick={() => setLocation("/login")}
              size="lg"
              variant="outline"
              className="gap-2 text-lg px-8 py-6 backdrop-blur-md bg-white/10 border-white/20 text-white hover:bg-white/20"
              data-testid="link-hero-login"
            >
              Login with SSO
            </Button>
          </div>
        </div>

        <button
          onClick={scrollToContent}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80 hover:text-white transition-all animate-bounce"
          aria-label="Scroll to content"
          data-testid="button-scroll-down"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </section>

      <section className="py-16 md:py-24 lg:py-32 bg-background" data-testid="section-features">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-features-title">
                Your Everyday Companion
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-features-subtitle">
                Discover powerful features designed to enhance your productivity and streamline your workflow
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <ScrollReveal key={feature.icon} delay={index * 0.1}>
                <FeatureCard {...feature} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 lg:py-32 bg-card" data-testid="section-applications">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-apps-preview-title">
                Application Preview
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-apps-preview-subtitle">
                Explore our comprehensive suite of applications designed for your business needs
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
            {applications.slice(0, 3).map((app, index) => (
              <ScrollReveal key={app.id} delay={index * 0.15}>
                <AppCard app={app} />
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.4}>
            <div className="text-center">
              <Button
                onClick={() => setLocation("/applications")}
                size="lg"
                variant="outline"
                className="gap-2"
                data-testid="link-view-all-apps"
              >
                View All Applications
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 md:py-24 lg:py-32 bg-primary/5" data-testid="section-cta">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="text-cta-title">
              Ready to get started?
            </h2>
            <p className="text-lg text-muted-foreground mb-8" data-testid="text-cta-description">
              Access all applications with a single sign-on. Fast, secure, and seamless.
            </p>
            <Button
              onClick={() => setLocation("/login")}
              size="lg"
              className="gap-2 text-lg px-8 py-6"
              data-testid="link-cta-login"
            >
              Login with SSO
              <ArrowRight className="w-5 h-5" />
            </Button>
          </ScrollReveal>
        </div>
      </section>
      </div>
    </AnimatedPage>
  );
}
