import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import logo from "@/assets/logo-main.png";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/about", label: "About" },
    { href: "/pricing", label: "Tarifs" },
    { href: "/team", label: "Équipe" },
    { href: "/testimonials", label: "Avis" },
    { href: "/faq", label: "FAQ" },
    { href: "/appointments", label: "Rendez-vous" },
    { href: "/blog", label: "Blog" },
    { href: "/careers", label: "Careers" },
    { href: "/resources", label: "Resources" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-lg border-b border-border shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img 
              src={logo} 
              alt="Centre de biologie Agadir" 
              className="h-16 w-auto sm:h-20" 
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-4">
            <div className="flex flex-wrap justify-center gap-1 xl:gap-2">
              {navLinks.slice(0, 6).map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="px-2 py-1.5 text-foreground/80 hover:text-primary transition-colors text-sm whitespace-nowrap"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-2 border-l border-border pl-2 ml-2">
              {navLinks.slice(6).map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="px-2 py-1.5 text-foreground/80 hover:text-primary transition-colors text-sm whitespace-nowrap"
                >
                  {link.label}
                </Link>
              ))}
              <ThemeToggle />
              <Button size="sm" className="gradient-primary text-white whitespace-nowrap" asChild>
                <Link to="/appointments">Prendre RDV</Link>
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-3">
            <Button 
              variant="ghost" 
              size="sm" 
              className="hidden sm:flex gradient-primary text-white whitespace-nowrap" 
              asChild
            >
              <Link to="/appointments">Prendre RDV</Link>
            </Button>
            <ThemeToggle />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:h-10 md:w-10">
                  <Menu size={20} className="text-foreground" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-full max-w-xs sm:max-w-sm overflow-y-auto">
                <SheetHeader className="text-left">
                  <SheetTitle>
                    <img 
                      src={logo} 
                      alt="Centre de biologie Agadir" 
                      className="h-14 w-auto" 
                    />
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-1 mt-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      onClick={() => setIsOpen(false)}
                      className="px-4 py-3 rounded-lg text-foreground/90 hover:bg-accent/50 hover:text-primary transition-colors text-base font-medium flex items-center"
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Button 
                    className="gradient-primary text-white w-full mt-4 py-6 text-base" 
                    asChild
                    onClick={() => setIsOpen(false)}
                  >
                    <Link to="/appointments">Prendre Rendez-vous</Link>
                  </Button>
                </nav>
                <div className="mt-8 pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-4 px-4">
                    Centre de Biologie Agadir - Votre santé, notre priorité
                  </p>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
    <div className="h-16 sm:h-20 lg:h-24"></div>
    </>
  );
};
