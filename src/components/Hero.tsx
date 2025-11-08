import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
// Lab-related hero image from Unsplash (free to use)
const heroImage = "https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center gradient-hero pt-20">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20">
              <Sparkles size={16} />
              <span className="text-sm font-medium">Laboratoire d'Analyses Médicales</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Votre Santé
              <span className="text-gradient block">Notre Priorité</span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Centre de biologie Agadir est un laboratoire d'analyses médicales moderne offrant 
              des services de diagnostic de haute qualité avec des résultats rapides et fiables.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gradient-primary text-white group" asChild>
                <Link to="/appointments">
                  Prendre Rendez-vous
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/services">Nos Services</Link>
              </Button>
            </div>
            
            <div className="flex gap-12 pt-8">
              <div>
                <div className="text-4xl font-bold text-gradient">50 000+</div>
                <div className="text-muted-foreground">Analyses Réalisées</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gradient">30+</div>
                <div className="text-muted-foreground">Professionnels</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gradient">15+</div>
                <div className="text-muted-foreground">Années d'Expérience</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 gradient-primary opacity-20 blur-3xl rounded-full"></div>
            <img
              src={heroImage}
              alt="Laboratoire d'Analyses Médicales Agadir"
              className="relative rounded-2xl shadow-glow hover-lift w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
