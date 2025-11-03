import { useLocation } from "wouter";

export default function Footer() {
  const [, setLocation] = useLocation();

  return (
    <footer className="bg-card border-t" data-testid="footer-main">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">A</span>
              </div>
              <span className="text-xl font-bold">AppCatalog</span>
            </div>
            <p className="text-muted-foreground max-w-md">
              One app to simplify your life. With a clean design, powerful features, and fast performance, 
              AppCatalog helps you stay organized, boost productivity, and stay connected effortlessly.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4" data-testid="text-footer-quick-links">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => setLocation("/")}
                  className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors bg-transparent border-0 p-0 text-left"
                  data-testid="link-footer-home"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => setLocation("/applications")}
                  className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors bg-transparent border-0 p-0 text-left"
                  data-testid="link-footer-applications"
                >
                  Applications
                </button>
              </li>
              <li>
                <button
                  onClick={() => setLocation("/login")}
                  className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors bg-transparent border-0 p-0 text-left"
                  data-testid="link-footer-login"
                >
                  Login
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4" data-testid="text-footer-support">Support</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-muted-foreground">
                  Help Center
                </span>
              </li>
              <li>
                <span className="text-muted-foreground">
                  Documentation
                </span>
              </li>
              <li>
                <span className="text-muted-foreground">
                  Contact Us
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p data-testid="text-footer-copyright">
            © {new Date().getFullYear()} AppCatalog. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
