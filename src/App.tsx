import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import AboutPage from "./pages/AboutPage";
import Blog from "./pages/Blog";
import Careers from "./pages/Careers";
import ContactPage from "./pages/ContactPage";
import Resources from "./pages/Resources";
import LogoProcessor from "./pages/LogoProcessor";
import Pricing from "./pages/Pricing";
import FAQ from "./pages/FAQ";
import TeamPage from "./pages/TeamPage";
import Appointments from "./pages/Appointments";
import Testimonials from "./pages/Testimonials";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/logo-processor" element={<LogoProcessor />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
