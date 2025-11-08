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
      <section className="pt-24 md:pt-32 pb-12 md:pb-20 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Contactez-<span className="text-gradient">Nous</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Besoin d'informations sur nos analyses? Notre équipe est à votre disposition 
              pour répondre à toutes vos questions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-20">
            <Card className="p-8 hover-lift shadow-card border-border/50 text-center">
              <div className="w-16 h-16 rounded-xl gradient-primary flex items-center justify-center mx-auto mb-6">
                <Phone className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2">Téléphone</h3>
              <p className="text-muted-foreground mb-4 text-sm">Appelez-nous pendant nos horaires d'ouverture</p>
              <a href="tel:+212528XXXXXX" className="text-primary hover:underline font-semibold">
                +212 528-XX-XX-XX
              </a>
            </Card>

            <Card className="p-8 hover-lift shadow-card border-border/50 text-center">
              <div className="w-16 h-16 rounded-xl gradient-primary flex items-center justify-center mx-auto mb-6">
                <Mail className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-muted-foreground mb-4 text-sm">Envoyez-nous un message</p>
              <a href="mailto:contact@centrebiologie-agadir.ma" className="text-primary hover:underline font-semibold">
                contact@centrebiologie-agadir.ma
              </a>
            </Card>

            <Card className="p-8 hover-lift shadow-card border-border/50 text-center">
              <div className="w-16 h-16 rounded-xl gradient-primary flex items-center justify-center mx-auto mb-6">
                <MapPin className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2">Adresse</h3>
              <p className="text-muted-foreground mb-4 text-sm">Visitez notre laboratoire</p>
              <p className="font-semibold">Avenue Hassan II, Agadir</p>
            </Card>
          </div>

          {/* Main Contact Form */}
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="p-8 lg:p-12 shadow-card border-border/50">
              <h2 className="text-3xl font-bold mb-6">Envoyez-nous un Message</h2>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                      Prénom *
                    </label>
                    <Input id="firstName" placeholder="Mohammed" required />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                      Nom *
                    </label>
                    <Input id="lastName" placeholder="Alami" required />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <Input id="email" type="email" placeholder="exemple@email.com" required />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Téléphone *
                  </label>
                  <Input id="phone" type="tel" placeholder="+212 6XX-XXXXXX" required />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Sujet *
                  </label>
                  <Input id="subject" placeholder="Demande d'information" required />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Décrivez votre demande..."
                    rows={6}
                    required
                  />
                </div>

                <Button size="lg" className="w-full gradient-primary text-white group">
                  Envoyer le Message
                  <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  Nous répondons généralement sous 24 heures
                </p>
              </form>
            </Card>

            <div className="space-y-8">
              <Card className="p-8 shadow-card border-border/50">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Notre Adresse</h3>
                    <p className="text-muted-foreground">Avenue Hassan II</p>
                    <p className="text-muted-foreground">Agadir 80000</p>
                    <p className="text-muted-foreground">Maroc</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Téléphone</h3>
                    <p className="text-muted-foreground mb-1">+212 528-XX-XX-XX</p>
                    <p className="text-muted-foreground">+212 6XX-XX-XX-XX</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Email</h3>
                    <p className="text-muted-foreground mb-1">contact@centrebiologie-agadir.ma</p>
                    <p className="text-muted-foreground">resultats@centrebiologie-agadir.ma</p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 shadow-card border-border/50">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0">
                    <Clock className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-3">Horaires d'Ouverture</h3>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex justify-between gap-8">
                        <span>Lundi - Vendredi</span>
                        <span className="font-semibold">7h00 - 19h00</span>
                      </div>
                      <div className="flex justify-between gap-8">
                        <span>Samedi</span>
                        <span className="font-semibold">8h00 - 13h00</span>
                      </div>
                      <div className="flex justify-between gap-8">
                        <span>Dimanche</span>
                        <span className="font-semibold">Fermé</span>
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
      <section className="py-12 md:py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Questions Fréquentes</h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Réponses rapides aux questions courantes
            </p>
          </div>
          
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-6 shadow-card border-border/50">
                <h3 className="text-lg font-bold mb-3">{faq.question}</h3>
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