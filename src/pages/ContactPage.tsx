import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, Clock, Send } from "lucide-react";

const ContactPage = () => {
  const faqs = [
    {
      question: "Quels types d'analyses proposez-vous?",
      answer: "Nous proposons des analyses d'hématologie, biochimie, microbiologie, hormonologie, immunologie et bilans complets de santé.",
    },
    {
      question: "Faut-il être à jeun pour les prélèvements?",
      answer: "Cela dépend du type d'analyse. Pour un bilan lipidique ou glycémique, un jeûne de 12h est requis. Nous vous informerons lors de la prise de rendez-vous.",
    },
    {
      question: "Sous quel délai reçoit-on les résultats?",
      answer: "La plupart des résultats sont disponibles sous 24-48h. Les analyses urgentes peuvent être traitées en quelques heures.",
    },
    {
      question: "Comment accéder à mes résultats?",
      answer: "Vos résultats sont disponibles en ligne sur notre plateforme sécurisée, ou vous pouvez les récupérer au laboratoire.",
    },
    {
      question: "Acceptez-vous les cartes d'assurance?",
      answer: "Oui, nous sommes conventionnés avec les principales mutuelles et l'AMO. Présentez votre carte lors du prélèvement.",
    },
    {
      question: "Proposez-vous des prélèvements à domicile?",
      answer: "Oui, nous offrons un service de prélèvement à domicile sur rendez-vous pour les personnes à mobilité réduite.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-12 sm:pb-16 md:pb-20 gradient-hero">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              Contactez-<span className="text-gradient">Nous</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Besoin d'informations sur nos analyses? Notre équipe est à votre disposition 
              pour répondre à toutes vos questions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 sm:py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16 md:mb-20">
            {[
              {
                icon: Phone,
                title: "Téléphone",
                description: "Appelez-nous pendant nos horaires d'ouverture",
                content: "+212 528-XX-XX-XX",
                href: "tel:+212528XXXXXX"
              },
              {
                icon: Mail,
                title: "Email",
                description: "Envoyez-nous un message",
                content: "contact@centrebiologie-agadir.ma",
                href: "mailto:contact@centrebiologie-agadir.ma"
              },
              {
                icon: MapPin,
                title: "Adresse",
                description: "Visitez notre laboratoire",
                content: "Avenue Hassan II, Agadir"
              }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <Card 
                  key={index} 
                  className="p-6 sm:p-8 hover-lift border-border/50 hover:border-primary/20 transition-all duration-300 text-center group"
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl gradient-primary flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-105 transition-transform">
                    <Icon className="text-white w-6 h-6 sm:w-7 sm:h-7" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">
                    {item.description}
                  </p>
                  {item.href ? (
                    <a 
                      href={item.href} 
                      className="text-sm sm:text-base text-primary hover:underline font-medium inline-block"
                    >
                      {item.content}
                    </a>
                  ) : (
                    <p className="text-sm sm:text-base font-medium text-foreground">
                      {item.content}
                    </p>
                  )}
                </Card>
              );
            })}
          </div>

          {/* Main Contact Form */}
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 max-w-6xl mx-auto">
            <Card className="p-6 sm:p-8 md:p-10 lg:p-12 shadow-card border-border/50">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-foreground">
                Envoyez-nous un Message
              </h2>
              
              <form className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="firstName" className="block text-sm font-medium text-foreground/90">
                      Prénom <span className="text-destructive">*</span>
                    </label>
                    <Input 
                      id="firstName" 
                      placeholder="Mohammed" 
                      className="h-10 sm:h-11 text-sm sm:text-base"
                      required 
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="lastName" className="block text-sm font-medium text-foreground/90">
                      Nom <span className="text-destructive">*</span>
                    </label>
                    <Input 
                      id="lastName" 
                      placeholder="Alami" 
                      className="h-10 sm:h-11 text-sm sm:text-base"
                      required 
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="email" className="block text-sm font-medium text-foreground/90">
                    Email <span className="text-destructive">*</span>
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="exemple@email.com" 
                    className="h-10 sm:h-11 text-sm sm:text-base"
                    required 
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground/90">
                    Téléphone <span className="text-destructive">*</span>
                  </label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    placeholder="+212 6XX-XXXXXX" 
                    className="h-10 sm:h-11 text-sm sm:text-base"
                    required 
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground/90">
                    Sujet <span className="text-destructive">*</span>
                  </label>
                  <Input 
                    id="subject" 
                    placeholder="Demande d'information" 
                    className="h-10 sm:h-11 text-sm sm:text-base"
                    required 
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="block text-sm font-medium text-foreground/90">
                    Message <span className="text-destructive">*</span>
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Décrivez votre demande..."
                    rows={5}
                    className="text-sm sm:text-base min-h-[120px]"
                    required
                  />
                </div>

                <div className="pt-2">
                  <Button 
                    size="lg" 
                    className="w-full gradient-primary text-white h-11 sm:h-12 text-sm sm:text-base font-medium group"
                  >
                    Envoyer le Message
                    <Send className="ml-2 group-hover:translate-x-1 transition-transform w-4 h-4 sm:w-5 sm:h-5" />
                  </Button>
                </div>

                <p className="text-xs sm:text-sm text-muted-foreground text-center">
                  Nous répondons généralement sous 24 heures
                </p>
              </form>
            </Card>

            <div className="space-y-6 sm:space-y-8">
              <Card className="p-6 sm:p-8 shadow-card border-border/50">
                <div className="space-y-6">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                      <MapPin className="text-white w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-base sm:text-lg mb-1.5 sm:mb-2 text-foreground">
                        Notre Adresse
                      </h3>
                      <div className="space-y-0.5 sm:space-y-1 text-sm sm:text-base">
                        <p className="text-muted-foreground">Avenue Hassan II</p>
                        <p className="text-muted-foreground">Agadir 80000</p>
                        <p className="text-muted-foreground">Maroc</p>
                      </div>
                    </div>
                  </div>

                  <div className="h-px bg-border/50 w-full"></div>

                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Phone className="text-white w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-base sm:text-lg mb-1.5 sm:mb-2 text-foreground">
                        Téléphone
                      </h3>
                      <div className="space-y-0.5 sm:space-y-1">
                        <a 
                          href="tel:+212528XXXXXX" 
                          className="text-sm sm:text-base text-muted-foreground hover:text-primary hover:underline block"
                        >
                          +212 528-XX-XX-XX
                        </a>
                        <a 
                          href="tel:+2126XXXXXXXX" 
                          className="text-sm sm:text-base text-muted-foreground hover:text-primary hover:underline block"
                        >
                          +212 6XX-XX-XX-XX
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="h-px bg-border/50 w-full"></div>

                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Mail className="text-white w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-base sm:text-lg mb-1.5 sm:mb-2 text-foreground">
                        Email
                      </h3>
                      <div className="space-y-0.5 sm:space-y-1">
                        <a 
                          href="mailto:contact@centrebiologie-agadir.ma" 
                          className="text-sm sm:text-base text-muted-foreground hover:text-primary hover:underline block break-all"
                        >
                          contact@centrebiologie-agadir.ma
                        </a>
                        <a 
                          href="mailto:resultats@centrebiologie-agadir.ma" 
                          className="text-sm sm:text-base text-muted-foreground hover:text-primary hover:underline block break-all"
                        >
                          resultats@centrebiologie-agadir.ma
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 sm:p-8 shadow-card border-border/50">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock className="text-white w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4 text-foreground">
                      Heures d'Ouverture
                    </h3>
                    <div className="space-y-2 sm:space-y-3 text-sm sm:text-base">
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Lundi - Vendredi</span>
                        <span className="font-medium text-foreground">8h00 - 19h00</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Samedi</span>
                        <span className="font-medium text-foreground">9h00 - 17h00</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Dimanche</span>
                        <span className="font-medium text-primary">Urgences</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-foreground">
              Questions Fréquentes
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground">
              Réponses rapides aux questions courantes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-6 shadow-card border-border/50 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold mb-3 text-foreground">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Card className="p-12 lg:p-16 text-center gradient-primary shadow-glow">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Prenez Rendez-vous
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Besoin d'analyses? Notre équipe est prête à vous accueillir.
            </p>
            <Button size="lg" variant="secondary" className="text-lg px-8" asChild>
              <Link to="/appointments">Réserver un RDV</Link>
            </Button>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;