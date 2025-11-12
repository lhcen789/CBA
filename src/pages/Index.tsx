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
      <section className="py-12 sm:py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
              Pourquoi Nous Choisir ?
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Des avantages qui font la différence pour votre santé
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {advantages.map((advantage, index) => (
              <Card 
                key={index} 
                className="group p-5 sm:p-6 lg:p-8 text-center hover-lift border-border transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full gradient-primary flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                  <advantage.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-foreground">
                  {advantage.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {advantage.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Projects />
      
      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
              Témoignages de Nos Patients
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              Ce que disent nos patients satisfaits
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="p-6 sm:p-7 lg:p-8 hover-lift border-border transition-all duration-300 hover:shadow-lg flex flex-col h-full"
              >
                <div className="flex mb-3 sm:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-xl sm:text-2xl text-primary">★</span>
                  ))}
                </div>
                <p className="text-foreground/90 mb-5 sm:mb-6 text-sm sm:text-base leading-relaxed flex-grow italic">
                  "{testimonial.content}"
                </p>
                <div className="mt-auto pt-4 border-t border-border/30">
                  <p className="font-bold text-foreground text-base sm:text-lg">{testimonial.name}</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Team />
      
      {/* FAQ Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
              Questions Fréquentes
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              Trouvez les réponses à vos questions
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <Card 
                key={index} 
                className="p-5 sm:p-6 border-border hover:shadow-md transition-shadow duration-300"
              >
                <details className="group">
                  <summary className="flex justify-between items-center cursor-pointer">
                    <h3 className="text-lg sm:text-xl font-bold text-foreground">
                      {faq.question}
                    </h3>
                    <div className="w-6 h-6 flex items-center justify-center text-primary">
                      <svg 
                        className="w-4 h-4 transition-transform duration-300 group-open:rotate-180" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M19 9l-7 7-7-7" 
                        />
                      </svg>
                    </div>
                  </summary>
                  <div className="pt-4 mt-2 text-muted-foreground border-t border-border/30">
                    <p className="text-sm sm:text-base">{faq.answer}</p>
                  </div>
                </details>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-6">
              Vous ne trouvez pas de réponse à votre question ?
            </p>
            <Button 
              asChild 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary/10"
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
