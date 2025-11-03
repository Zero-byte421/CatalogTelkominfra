import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Shield, Lock, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import AnimatedPage from "@/components/AnimatedPage";

export default function Login() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "SSO Login Initiated",
        description: "Redirecting to authentication provider...",
      });
      console.log("SSO login attempted with:", email);
    }, 1500);
  };

  return (
    <AnimatedPage>
      <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold" data-testid="text-login-title">
                Login SSO
              </h1>
            </div>
            
            <p className="text-lg text-muted-foreground mb-8" data-testid="text-login-description">
              Securely access your account with Single Sign-On (SSO). 
              One login for all your services — fast, safe, and seamless.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Single Sign-On</h3>
                  <p className="text-sm text-muted-foreground">
                    Access all applications with one set of credentials
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Enterprise Security</h3>
                  <p className="text-sm text-muted-foreground">
                    Protected by industry-standard encryption and authentication
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Seamless Access</h3>
                  <p className="text-sm text-muted-foreground">
                    Quick and easy authentication across all platforms
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Card className="p-8 md:p-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Lock className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold" data-testid="text-form-title">
                Sign in to your account
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="email" data-testid="label-email">
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="mt-2"
                  data-testid="input-email"
                />
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full"
                disabled={isLoading}
                data-testid="button-submit-login"
              >
                {isLoading ? "Authenticating..." : "Sign in with SSO"}
              </Button>
            </form>

            <div className="mt-8 pt-8 border-t text-center">
              <p className="text-sm text-muted-foreground">
                Need help? Contact{" "}
                <span className="text-primary cursor-pointer hover:underline">
                  IT Support
                </span>
              </p>
            </div>
          </Card>
        </div>
      </div>
      </div>
    </AnimatedPage>
  );
}
