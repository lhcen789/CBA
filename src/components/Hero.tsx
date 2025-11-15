import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Check, Shield, Award, Calendar, Users, Activity, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// Lab-related hero image from Unsplash (free to use)
const heroImage = "https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80";

export const Hero = () => {
  return (
    <section className="min-h-[calc(100vh-5rem)] flex items-center justify-center gradient-hero pt-2 sm:pt-4 md:pt-6">
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
          <div className="space-y-6 sm:space-y-8 max-w-2xl mx-auto lg:mx-0">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 text-primary border border-primary/20 w-fit">
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="text-xs sm:text-sm font-medium">Laboratoire d'Analyses Médicales</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Votre Santé
              <span className="text-gradient block mt-1 sm:mt-2">Notre Priorité</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
              Centre de Biologie Médicale Agadir est un établissement de santé moderne et équipé des dernières technologies, offrant une large gamme d'analyses médicales avec des résultats rapides et fiables. Notre laboratoire est dirigé par des professionnels qualifiés et expérimentés, garantissant un service de qualité supérieure.
            </p>

            {/* Key Features */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6">
              {[
                { icon: Check, text: 'Analyses biologiques' },
                { icon: Shield, text: 'Biologie de la reproduction' },
                { icon: Award, text: 'Équipe médicale qualifiée' },
                { icon: Calendar, text: 'Prélèvements à domicile' }
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="flex items-center gap-2 bg-background/50 backdrop-blur-sm rounded-lg p-2 sm:p-3 border border-border/20"
                  >
                    <div className="bg-primary/10 p-1.5 rounded-lg">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                    </div>
                    <span className="text-xs sm:text-sm font-medium">{item.text}</span>
                  </motion.div>
                );
              })}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex flex-nowrap items-center gap-2 sm:gap-3 md:gap-4 overflow-x-auto pb-2 -mx-2 px-2 sm:mx-0 sm:px-0 sm:pb-0">
                <Button 
                  size="lg" 
                  className="gradient-primary text-white group h-10 sm:h-12 px-4 sm:px-6 text-xs sm:text-base whitespace-nowrap flex-shrink-0" 
                  asChild
                >
                  <Link to="/appointments" className="flex items-center">
                    Prendre RDV
                    <ArrowRight className="ml-1.5 sm:ml-2 w-3.5 h-3.5 sm:w-5 sm:h-5 group-hover:translate-x-0.5 sm:group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="h-10 sm:h-12 px-4 sm:px-6 text-xs sm:text-base whitespace-nowrap flex-shrink-0"
                  asChild
                >
                  <Link to="/services" className="flex items-center">
                    Nos Services
                  </Link>
                </Button>
              </div>

              {/* Trust Badge */}
              <div className="flex items-center gap-3 bg-background/50 backdrop-blur-sm p-2 sm:p-3 rounded-lg border border-border/20">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-primary/10 border-2 border-background flex items-center justify-center">
                      <Users className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-xs font-medium">+5,000 patients</p>
                  <p className="text-[10px] text-muted-foreground">Nous font confiance</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative mt-8 sm:mt-10 lg:mt-0">
            <div className="absolute inset-0 gradient-primary opacity-20 blur-3xl -z-10 rounded-full"></div>
            <div className="relative overflow-hidden rounded-2xl shadow-glow hover:shadow-xl transition-shadow duration-300">
              <img
                src={heroImage}
                alt="Laboratoire d'Analyses Médicales Agadir"
                className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
