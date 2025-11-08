import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Projects } from "@/components/Projects";
import { Team } from "@/components/Team";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
      <section className="py-12 md:py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Pourquoi Nous Choisir ?</h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Des avantages qui font la différence pour votre santé
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {advantages.map((advantage, index) => (
              <Card key={index} className="p-6 text-center hover-lift border-border">
                <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4">
                  <advantage.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{advantage.title}</h3>
                <p className="text-muted-foreground">{advantage.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Projects />
      
      {/* Testimonials Section */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Témoignages de Nos Patients</h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Ce que disent nos patients satisfaits
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 hover-lift border-border">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-2xl text-primary">★</span>
                  ))}
                </div>
                <p className="text-foreground mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Team />
      
      {/* FAQ Section */}
      <section className="py-12 md:py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Questions Fréquentes</h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Trouvez les réponses à vos questions
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-6 border-border">
                <h3 className="text-xl font-bold mb-3 text-foreground">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
