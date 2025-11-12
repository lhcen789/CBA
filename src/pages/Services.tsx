import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Activity, Droplet, Microscope, TestTube, Heart, Stethoscope, Lightbulb, FileText, Palette, Code, CheckCircle, Rocket } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Activity,
      title: "Hématologie",
      description: "Analyses complètes du sang pour évaluer votre santé générale et détecter d'éventuelles anomalies.",
      longDescription: "Notre service d'hématologie utilise des automates de dernière génération pour réaliser des analyses précises et rapides. Nous effectuons la numération formule sanguine complète, l'étude morphologique des cellules sanguines, et tous les examens nécessaires au diagnostic des pathologies hématologiques.",
      offerings: [
        "Numération Formule Sanguine (NFS)",
        "Vitesse de Sédimentation (VS)",
        "Groupe Sanguin et Rhésus",
        "Réticulocytes",
        "Frottis Sanguin",
        "Hémoglobine Glyquée (HbA1c)",
        "Étude Morphologique",
        "Électrophorèse Hémoglobine",
      ],
      process: [
        "Prélèvement Sanguin",
        "Analyse Automatisée",
        "Contrôle Qualité",
        "Validation Biologiste",
        "Résultats en Ligne",
        "Interprétation Disponible",
      ],
    },
    {
      icon: Droplet,
      title: "Biochimie",
      description: "Dosages biochimiques pour évaluer le fonctionnement de vos organes et votre métabolisme.",
      longDescription: "Notre laboratoire de biochimie réalise des dosages de haute précision pour évaluer vos fonctions hépatiques, rénales, thyroïdiennes et métaboliques. Nous utilisons des techniques de pointe pour des résultats fiables et rapides.",
      offerings: [
        "Bilan Glycémique",
        "Bilan Lipidique Complet",
        "Fonction Rénale (Urée, Créatinine)",
        "Fonction Hépatique (Transaminases)",
        "Électrolytes Sanguins",
        "Protéines Totales et Albuminémie",
        "Enzymes Cardiaques",
        "Vitamines et Oligo-éléments",
      ],
      process: [
        "Prélèvement à Jeun",
        "Centrifugation",
        "Analyse Biochimique",
        "Double Contrôle",
        "Validation",
        "Communication Résultats",
      ],
    },
    {
      icon: Microscope,
      title: "Microbiologie",
      description: "Identification des agents infectieux et réalisation d'antibiogrammes pour un traitement adapté.",
      longDescription: "Notre service de microbiologie détecte et identifie les bactéries, champignons et parasites responsables d'infections. Nous réalisons des antibiogrammes pour guider le choix thérapeutique optimal.",
      offerings: [
        "Examen Cytobactériologique Urinaire (ECBU)",
        "Coproculture et Parasitologie",
        "Prélèvement Vaginal",
        "Hémocultures",
        "Antibiogramme",
        "Recherche de Germes Spécifiques",
        "Spermoculture",
        "Prélèvements ORL",
      ],
      process: [
        "Prélèvement Stérile",
        "Mise en Culture",
        "Incubation 24-48h",
        "Identification Bactérienne",
        "Antibiogramme",
        "Résultats et Conseils",
      ],
    },
    {
      icon: TestTube,
      title: "Hormonologie",
      description: "Dosages hormonaux pour évaluer vos fonctions endocriniennes et diagnostiquer les déséquilibres.",
      longDescription: "Notre laboratoire d'hormonologie réalise tous les dosages hormonaux nécessaires au diagnostic et au suivi des pathologies endocriniennes, de la fertilité et de la ménopause.",
      offerings: [
        "Bilan Thyroïdien Complet",
        "Hormones de Fertilité",
        "Bilan de Ménopause",
        "Cortisol et Stress",
        "Hormones Sexuelles",
        "Prolactine",
        "Hormone de Croissance",
        "Marqueurs Diabète",
      ],
      process: [
        "Rendez-vous Planifié",
        "Prélèvement Horaire Précis",
        "Technique Immunologique",
        "Dosage Précis",
        "Validation Spécialisée",
        "Interprétation Médicale",
      ],
    },
    {
      icon: Heart,
      title: "Immunologie",
      description: "Tests immunologiques pour détecter anticorps, allergies et maladies auto-immunes.",
      longDescription: "Notre service d'immunologie réalise des tests sérologiques, des bilans allergologiques et la recherche d'auto-anticorps pour le diagnostic des maladies auto-immunes et infectieuses.",
      offerings: [
        "Sérologies Virales (VIH, Hépatites)",
        "Marqueurs Tumoraux",
        "Auto-Anticorps",
        "Tests Allergiques",
        "Immunoglobulines",
        "Complément Sérique",
        "Protéine C Réactive (CRP)",
        "Facteur Rhumatoïde",
      ],
      process: [
        "Prélèvement Sanguin",
        "Technique ELISA/CLIA",
        "Analyse Immunologique",
        "Contrôle Interne",
        "Validation Immunologiste",
        "Résultats Sécurisés",
      ],
    },
    {
      icon: Stethoscope,
      title: "Bilans de Santé",
      description: "Bilans complets adaptés à vos besoins : check-up général, préopératoire, prénuptial.",
      longDescription: "Nous proposons des bilans de santé complets et personnalisés selon votre âge, vos besoins et votre situation. Des check-ups préventifs aux bilans spécialisés.",
      offerings: [
        "Bilan de Santé Complet",
        "Bilan Préopératoire",
        "Bilan Prénuptial",
        "Bilan de Fertilité",
        "Bilan Cardiaque",
        "Bilan Rénal",
        "Bilan Hépatique",
        "Bilan Thyroïdien",
      ],
      process: [
        "Consultation Conseil",
        "Choix du Bilan",
        "Prélèvements Nécessaires",
        "Analyses Complètes",
        "Synthèse Résultats",
        "Explications Détaillées",
      ],
    },
  ];

  const additionalServices = [
    {
      icon: Rocket,
      title: "Résultats en Ligne",
      description: "Accédez à vos résultats de manière sécurisée 24h/24 depuis chez vous.",
    },
    {
      icon: CheckCircle,
      title: "Prélèvement à Domicile",
      description: "Service de prélèvement à domicile pour votre confort (sur RDV).",
    },
    {
      icon: Lightbulb,
      title: "Conseils Personnalisés",
      description: "Notre équipe vous accompagne dans la compréhension de vos résultats.",
    },
    {
      icon: FileText,
      title: "Dossier Médical",
      description: "Historique complet de vos analyses accessible en ligne.",
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
              Nos <span className="text-gradient">Analyses</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Des analyses médicales complètes et précises réalisées par des professionnels qualifiés. 
              Équipements de pointe et résultats rapides pour votre santé.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              Nos Services d'Analyses
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Découvrez notre gamme complète d'analyses médicales réalisées avec précision et fiabilité.
            </p>
          </div>
          <div className="space-y-16 md:space-y-24">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
                  <div className={isEven ? "lg:order-1" : "lg:order-2"}>
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl gradient-primary flex items-center justify-center mb-6">
                      <Icon className="text-white" size={32} />
                    </div>
                    
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">{service.title}</h2>
                    <p className="text-base md:text-lg text-muted-foreground mb-4 md:mb-6">{service.description}</p>
                    <p className="text-foreground/80 leading-relaxed mb-6 md:mb-8">{service.longDescription}</p>
                    
                    <Button className="gradient-primary text-white" asChild>
                      <Link to="/appointments">Prendre Rendez-vous</Link>
                    </Button>
                  </div>
                  
                  <div className={isEven ? "lg:order-2" : "lg:order-1"}>
                    <Card className="p-8 shadow-card border-border/50">
                      <h3 className="text-2xl font-bold mb-6">Nos Prestations</h3>
                      <div className="grid md:grid-cols-2 gap-4 mb-8">
                        {service.offerings.map((offering, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                            <span className="text-foreground/80">{offering}</span>
                          </div>
                        ))}
                      </div>
                      
                      <h4 className="text-xl font-bold mb-4">Notre Processus</h4>
                      <div className="space-y-3">
                        {service.process.map((step, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">
                              {idx + 1}
                            </div>
                            <span className="text-foreground/80">{step}</span>
                          </div>
                        ))}
                      </div>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-12 md:py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Services Additionnels</h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Des services pratiques pour vous faciliter la vie
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {additionalServices.map((service, index) => (
              <Card key={index} className="p-6 hover-lift shadow-card border-border/50 text-center">
                <div className="w-16 h-16 rounded-xl gradient-primary flex items-center justify-center mx-auto mb-4">
                  <service.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <Card className="p-8 md:p-12 lg:p-16 text-center gradient-primary shadow-glow">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Besoin d'une Analyse?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Prenez rendez-vous dès maintenant pour vos analyses médicales. 
              Notre équipe est à votre disposition.
            </p>
            <Button size="lg" variant="secondary" className="text-lg px-8" asChild>
              <Link to="/appointments">Prendre Rendez-vous</Link>
            </Button>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
