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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Centre de biologie Agadir" className="h-20 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-foreground/80 hover:text-primary transition-colors text-sm"
              >
                {link.label}
              </Link>
            ))}
            <ThemeToggle />
            <Button className="gradient-primary text-white" asChild>
              <Link to="/appointments">Prendre RDV</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button
                  className="text-foreground"
                  aria-label="Toggle menu"
                >
                  <Menu size={24} />
                </button>
              </SheetTrigger>
              <SheetContent side="left" className="w-full sm:w-80">
                <SheetHeader>
                  <SheetTitle className="text-left">
                    <img src={logo} alt="Centre de biologie Agadir" className="h-16 w-auto" />
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-6 mt-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-foreground/80 hover:text-primary transition-colors text-lg font-medium"
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Button className="gradient-primary text-white w-full mt-4" asChild>
                    <Link to="/appointments">Prendre RDV</Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};
