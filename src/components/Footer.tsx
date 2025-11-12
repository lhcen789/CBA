import { Linkedin, Twitter, Instagram, Facebook, Phone, Mail, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo-main.png";

export const Footer = () => {
  const links = {
    company: [
      { label: "À propos", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Équipe", href: "/team" },
      { label: "Carrières", href: "/careers" },
    ],
    services: [
      { label: "Analyses Médicales", href: "/services" },
      { label: "Biochimie", href: "/services" },
      { label: "Hématologie", href: "/services" },
      { label: "Microbiologie", href: "/services" },
      { label: "Immunologie", href: "/services" },
    ],
    resources: [
      { label: "Blog", href: "/blog" },
      { label: "Ressources", href: "/resources" },
      { label: "FAQ", href: "/faq" },
      { label: "Tarifs", href: "/pricing" },
      { label: "Rendez-vous", href: "/appointments" },
      { label: "Avis Clients", href: "/testimonials" },
    ],
    legal: [
      { label: "Mentions Légales", href: "#" },
      { label: "Politique de Confidentialité", href: "#" },
      { label: "CGU", href: "#" },
      { label: "Cookies", href: "#" },
    ],
  };

  return (
    <footer className="bg-secondary/30 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-6 gap-6 sm:gap-8 mb-10 sm:mb-12">
          {/* Logo and About Section */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-3 sm:mb-4">
              <img src={logo} alt="Centre de biologie Agadir" className="h-16 sm:h-20 md:h-24 w-auto" />
            </Link>
            <p className="text-muted-foreground text-sm sm:text-base mb-4 sm:mb-6 max-w-sm">
              Laboratoire d'analyses médicales moderne offrant des services de diagnostic 
              de haute qualité avec précision et rapidité. Accrédité et certifié pour votre sécurité.
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground flex items-center justify-center transition-colors" aria-label="Facebook">
                <Facebook className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground flex items-center justify-center transition-colors" aria-label="Twitter">
                <Twitter className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground flex items-center justify-center transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground flex items-center justify-center transition-colors" aria-label="Instagram">
                <Instagram className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div className="mb-4 sm:mb-0">
            <h4 className="font-bold mb-3 sm:mb-4 text-sm sm:text-base text-foreground">Entreprise</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              {links.company.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div className="mb-4 sm:mb-0">
            <h4 className="font-bold mb-3 sm:mb-4 text-sm sm:text-base text-foreground">Nos Services</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              {links.services.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div className="col-span-2 sm:col-span-1">
            <h4 className="font-bold mb-3 sm:mb-4 text-sm sm:text-base text-foreground">Ressources</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              {links.resources.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4 text-foreground">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm">
                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  Avenue Hassan II, Agadir<br />
                  80000 Maroc
                </span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Phone size={18} className="text-primary shrink-0" />
                <a href="tel:+212528123456" className="text-muted-foreground hover:text-primary transition-colors">
                  +212 528 12 34 56
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Mail size={18} className="text-primary shrink-0" />
                <a href="mailto:contact@biologie-agadir.ma" className="text-muted-foreground hover:text-primary transition-colors">
                  contact@biologie-agadir.ma
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <Clock size={18} className="text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  Lun - Ven: 8h - 19h<br />
                  Sam: 8h - 13h
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Links */}
        <div className="pt-6 border-t border-border/30 mb-6">
          <div className="flex flex-wrap gap-4 justify-center">
            {links.legal.map((link) => (
              <a key={link.label} href={link.href} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 border-t border-border/30">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
            <p className="text-xs sm:text-sm text-muted-foreground text-center sm:text-left">
              &copy; {new Date().getFullYear()} Centre de Biologie Agadir. Tous droits réservés.
            </p>
            <div className="flex items-center gap-3 sm:gap-4 flex-wrap justify-center">
              <Link to="#" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors whitespace-nowrap">
                Politique de confidentialité
              </Link>
              <Link to="#" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors whitespace-nowrap">
                Conditions d'utilisation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
