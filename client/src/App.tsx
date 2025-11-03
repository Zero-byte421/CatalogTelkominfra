import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import Applications from "@/pages/Applications";
import ApplicationDetail from "@/pages/ApplicationDetail";
import Login from "@/pages/Login";
import NotFound from "@/pages/not-found";

function Router() {
  const [location] = useLocation();

  return (
    <>
      <Header />
      <AnimatePresence mode="wait" initial={false}>
        <Switch location={location} key={location}>
          <Route path="/" component={Home} />
          <Route path="/applications" component={Applications} />
          <Route path="/applications/:id" component={ApplicationDetail} />
          <Route path="/login" component={Login} />
          <Route component={NotFound} />
        </Switch>
      </AnimatePresence>
      <Footer />
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
