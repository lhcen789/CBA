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
    {
      question: "Comment prendre rendez-vous?",
      answer: "Vous pouvez prendre rendez-vous par téléphone, via notre site web, ou directement au laboratoire. Nous recommandons la prise de rendez-vous pour éviter l'attente.",
    },
    {
      question: "Quels documents dois-je apporter?",
      answer: "Apportez votre ordonnance médicale, votre carte d'identité, votre carte d'assurance maladie et votre carte de mutuelle si vous en avez une.",
    },
    {
      question: "Puis-je faire des analyses sans ordonnance?",
      answer: "Certaines analyses de dépistage peuvent être réalisées sans ordonnance, mais elles ne seront pas remboursées par l'assurance maladie. Consultez-nous pour plus d'informations.",
    },
    {
      question: "Combien coûtent les analyses?",
      answer: "Les tarifs varient selon le type d'analyse. Les examens prescrits sont remboursés par l'AMO et les mutuelles. Nous fournissons un devis gratuit sur demande.",
    },
    {
      question: "Que faire si mes résultats sont anormaux?",
      answer: "Consultez rapidement votre médecin traitant avec vos résultats. En cas d'urgence, nous vous orienterons vers les services appropriés.",
    },
    {
      question: "Gardez-vous mes résultats en archive?",
      answer: "Oui, nous conservons vos résultats pendant 5 ans minimum. Vous pouvez demander des copies à tout moment pour votre suivi médical.",
    },
    {
      question: "Faites-vous des analyses pour les enfants?",
      answer: "Oui, nous réalisons tous types d'analyses pédiatriques. Nos techniciens sont formés pour les prélèvements chez les enfants avec un maximum de douceur.",
    },
    {
      question: "Proposez-vous des bilans de santé complets?",
      answer: "Oui, nous proposons différents types de bilans : bilan de santé général, bilan cardiovasculaire, bilan hormonal, bilan préventif selon l'âge et les facteurs de risque.",
    },
    {
      question: "Puis-je manger ou boire avant certaines analyses?",
      answer: "Pour la plupart des analyses, seule l'eau est autorisée pendant le jeûne. Évitez l'alcool 48h avant et le tabac 2h avant le prélèvement.",
    },
    {
      question: "Combien de temps dure un prélèvement?",
      answer: "Un prélèvement sanguin standard dure 5-10 minutes. Prévoyez 15-30 minutes au total incluant l'accueil et les formalités administratives.",
    },
    {
      question: "Proposez-vous des analyses spécialisées?",
      answer: "Oui, nous réalisons des analyses spécialisées en endocrinologie, cardiologie, oncologie, immunologie et bien d'autres domaines. Consultez-nous pour vos besoins spécifiques.",
    },
    {
      question: "Comment interpréter mes résultats d'analyses?",
      answer: "Vos résultats incluent les valeurs de référence. Cependant, seul votre médecin peut les interpréter dans votre contexte clinique. N'hésitez pas à lui poser des questions.",
    },
    {
      question: "Effectuez-vous des analyses génétiques?",
      answer: "Nous proposons certains tests génétiques sur prescription médicale. Ces analyses nécessitent un consentement éclairé et un conseil génétique approprié.",
    },
    {
      question: "Quels sont vos tarifs pour les analyses courantes?",
      answer: "Nos tarifs respectent la nomenclature officielle. Les analyses prescrites sont remboursées selon les taux en vigueur. Contactez-nous pour un devis personnalisé.",
    },
    {
      question: "Puis-je avoir mes résultats par téléphone?",
      answer: "Pour des raisons de confidentialité, nous ne communiquons pas les résultats par téléphone. Ils sont disponibles en ligne ou à retirer au laboratoire avec une pièce d'identité.",
    },
    {
      question: "Que faire en cas d'urgence médicale?",
      answer: "En cas d'urgence médicale, contactez immédiatement le SAMU (15) ou rendez-vous aux urgences. Notre laboratoire n'assure pas les urgences médicales.",
    },
    {
      question: "Comment garantissez-vous la qualité de vos analyses?",
      answer: "Notre laboratoire est accrédité et participe à des contrôles qualité externes réguliers. Nos équipements sont maintenus selon les normes les plus strictes.",
    },
    {
      question: "Acceptez-vous les patients sans rendez-vous?",
      answer: "Oui, mais nous recommandons fortement la prise de rendez-vous pour éviter l'attente, surtout pour les analyses nécessitant un jeûne.",
    },
    {
      question: "Quelles précautions prenez-vous pour l'hygiène?",
      answer: "Nous appliquons des protocoles d'hygiène stricts : désinfection systématique, matériel à usage unique, port d'équipements de protection individuelle.",
    },
    {
      question: "Puis-je faire plusieurs analyses en même temps?",
      answer: "Oui, la plupart des analyses peuvent être réalisées sur le même prélèvement. Cela évite les ponctions multiples et optimise votre temps.",
    },
    {
      question: "Réalisez-vous des analyses pour les entreprises?",
      answer: "Oui, nous proposons des bilans de santé au travail, des dépistages collectifs et des analyses dans le cadre de la médecine du travail.",
    },
    {
      question: "Comment puis-je récupérer d'anciens résultats?",
      answer: "Nous conservons vos résultats pendant 5 ans minimum. Vous pouvez les récupérer sur présentation d'une pièce d'identité ou via votre espace patient en ligne.",
    },
    {
      question: "Proposez-vous des consultations de conseil?",
      answer: "Nos biologistes peuvent vous expliquer vos résultats sur rendez-vous. Pour un suivi médical complet, consultez votre médecin traitant.",
    },
    {
      question: "Que faire si j'ai peur des piqûres?",
      answer: "Prévenez notre équipe de votre appréhension. Nos techniciens sont habitués et sauront vous rassurer. Nous utilisons des aiguilles très fines pour minimiser l'inconfort.",
    },
    {
      question: "Puis-je venir avec un accompagnant?",
      answer: "Oui, un accompagnant peut vous accompagner, surtout pour les enfants, personnes âgées ou en cas d'anxiété. L'espace d'attente peut accueillir les accompagnants.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-16 sm:pb-20 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              Nous Contacter
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Contactez-<span className="text-gradient bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Nous</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-10 max-w-3xl mx-auto">
              Besoin d'informations sur nos analyses? Notre équipe est à votre disposition 
              pour répondre à toutes vos questions et vous accompagner.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gradient-primary text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300" asChild>
                <Link to="/appointments">Prendre Rendez-vous</Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="px-8 py-4 rounded-full border-primary/20 hover:bg-primary/5 transition-all duration-300"
                onClick={() => document.getElementById('contact-faq')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Voir la FAQ
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info - Single Card */}
      <section className="py-12 sm:py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 max-w-6xl mx-auto mb-12">
            <Card className="p-6 sm:p-7 lg:p-8 border-border/50 hover:border-primary/20 transition-all duration-300">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0">
                  <Phone className="text-white w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-base sm:text-lg text-foreground mb-1">Téléphone</h3>
                  <div className="space-y-1">
                    <a href="tel:+212528XXXXXX" className="text-primary hover:underline text-sm sm:text-base font-medium">+212 528-XX-XX-XX</a>
                    <p className="text-xs sm:text-sm text-muted-foreground">Lun–Sam, 8h–19h</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 sm:p-7 lg:p-8 border-border/50 hover:border-primary/20 transition-all duration-300">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0">
                  <Mail className="text-white w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-base sm:text-lg text-foreground mb-1">Email</h3>
                  <div className="space-y-1">
                    <a href="mailto:contact@centrebiologie-agadir.ma" className="text-primary hover:underline text-sm sm:text-base font-medium break-all">contact@centrebiologie-agadir.ma</a>
                    <p className="text-xs sm:text-sm text-muted-foreground">Réponse sous 24h</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 sm:p-7 lg:p-8 border-border/50 hover:border-primary/20 transition-all duration-300">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-white w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-base sm:text-lg text-foreground mb-1">Adresse</h3>
                  <p className="text-sm sm:text-base text-foreground">42 Av. Kadi Ayad, Agadir 80000</p>
                  <div className="pt-3">
                    <Button variant="outline" asChild className="text-sm">
                      <a href="https://www.google.com/maps?q=42%20Av.%20Kadi%20Ayad,%20Agadir%2080000" target="_blank" rel="noopener noreferrer">Itinéraire</a>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
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
              <Card className="p-0 overflow-hidden shadow-card border-border/50">
                <div className="h-[320px] sm:h-[380px] md:h-[420px] w-full">
                  <iframe
                    title="Laboratoire CBA - Plan d'accès"
                    src="https://www.google.com/maps?q=42%20Av.%20Kadi%20Ayad,%20Agadir%2080000&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
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
      <section id="contact-faq" className="py-12 sm:py-16 md:py-20 bg-secondary/30">
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