import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Projects } from "@/components/Projects";
import { Team } from "@/components/Team";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { CheckCircle, Clock, Shield, Award } from "lucide-react";

const Index = () => {
  const testimonials = [
    {
      name: "Sarah El Amrani",
      role: "Patiente",
      content: "Service impeccable et résultats rapides. Le personnel est très professionnel et accueillant.",
      rating: 5
    },
    {
      name: "Mohammed Benali",
      role: "Patient régulier",
      content: "Je fais confiance au Centre de biologie Agadir depuis 5 ans. Toujours précis et fiables.",
      rating: 5
    },
    {
      name: "Fatima Zahra",
      role: "Patiente",
      content: "Équipement moderne et équipe compétente. Je recommande vivement ce laboratoire.",
      rating: 5
    }
  ];

  const advantages = [
    {
      icon: Clock,
      title: "Résultats Rapides",
      description: "Obtenez vos résultats en 24h pour la plupart des analyses"
    },
    {
      icon: Shield,
      title: "Confidentialité",
      description: "Respect total de la confidentialité de vos données médicales"
    },
    {
      icon: Award,
      title: "Qualité Certifiée",
      description: "Laboratoire certifié aux normes internationales"
    },
    {
      icon: CheckCircle,
      title: "Prix Transparents",
      description: "Tarifs clairs et accessibles pour tous les examens"
    }
  ];

  const faqs = [
    {
      question: "Comment prendre rendez-vous ?",
      answer: "Vous pouvez prendre rendez-vous par téléphone au 0528-123456 ou directement en ligne via notre formulaire de contact."
    },
    {
      question: "Faut-il être à jeun pour les analyses ?",
      answer: "Cela dépend du type d'analyse. Pour la plupart des bilans sanguins, un jeûne de 12h est recommandé. Notre équipe vous informera lors de la prise de rendez-vous."
    },
    {
      question: "Quand puis-je récupérer mes résultats ?",
      answer: "Les délais varient selon le type d'analyse. En général, les résultats sont disponibles sous 24 à 48h. Les analyses urgentes peuvent être traitées en quelques heures."
    },
    {
      question: "Acceptez-vous les assurances ?",
      answer: "Oui, nous acceptons la plupart des assurances médicales. Nous vous conseillons de vérifier avec votre assurance avant votre visite."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Services />
      
      {/* Advantages Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center mb-10 sm:mb-14 md:mb-16 lg:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 md:mb-4 text-foreground">
              Pourquoi Nous Choisir ?
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Des avantages qui font la différence pour votre santé
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-8 max-w-6xl mx-auto">
            {advantages.map((advantage, index) => (
              <Card 
                key={index} 
                className="group p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8 text-center hover-lift border-border/50 transition-all duration-300 hover:shadow-md hover:border-primary/20"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full gradient-primary flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                  <advantage.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-foreground">
                  {advantage.title}
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
                  {advantage.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Projects />
      
      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center mb-10 sm:mb-14 md:mb-16 lg:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 md:mb-4 text-foreground">
              Témoignages de Nos Patients
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
              Ce que disent nos patients satisfaits
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8 max-w-7xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="p-5 sm:p-6 md:p-7 lg:p-8 hover-lift border-border/50 transition-all duration-300 hover:shadow-md hover:border-primary/20 flex flex-col h-full"
              >
                <div className="flex mb-3 sm:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-lg sm:text-xl text-primary">★</span>
                  ))}
                </div>
                <p className="text-foreground/90 mb-4 sm:mb-5 text-sm sm:text-base leading-relaxed flex-grow italic">
                  "{testimonial.content}"
                </p>
                <div className="mt-auto pt-3 sm:pt-4 border-t border-border/30">
                  <p className="font-bold text-foreground text-sm sm:text-base md:text-lg">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Team />
      
      {/* FAQ Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center mb-10 sm:mb-14 md:mb-16 lg:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 md:mb-4 text-foreground">
              Questions Fréquentes
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
              Trouvez les réponses à vos questions
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <Card 
                key={index} 
                className="p-4 sm:p-5 md:p-6 border-border/50 hover:shadow-md hover:border-primary/20 transition-all duration-300"
              >
                <details className="group">
                  <summary className="flex justify-between items-center cursor-pointer">
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold sm:font-bold text-foreground pr-2">
                      {faq.question}
                    </h3>
                    <div className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 flex items-center justify-center text-primary">
                      <svg 
                        className="w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-300 group-open:rotate-180" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          d="M19 9l-7 7-7-7" 
                        />
                      </svg>
                    </div>
                  </summary>
                  <div className="pt-3 sm:pt-4 mt-2 text-muted-foreground border-t border-border/30">
                    <p className="text-xs sm:text-sm md:text-base">{faq.answer}</p>
                  </div>
                </details>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button 
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10"
              asChild
            >
              <Link to="/contact">
                Contactez-nous
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
