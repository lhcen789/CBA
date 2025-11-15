import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, X } from "lucide-react";
// Lab-related images from Unsplash (free to use)
const project1 = "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80";
const project2 = "https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80";
const project3 = "https://images.unsplash.com/photo-1581595219315-a187dd40c322?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80";

export const Projects = () => {
  const [activeAnalysis, setActiveAnalysis] = useState<number | null>(null);

  const analyses = [
    {
      image: project1,
      category: "Bilan de Routine",
      title: "Check-up Complet",
      description: "Bilan sanguin complet pour évaluer votre état de santé général : NFS, glycémie, bilan hépatique et rénal.",
      tags: ["Hématologie", "Biochimie", "Prévention"],
      details: [
        "Suivi des paramètres essentiels : cholestérol, glycémie, fonction rénale et hépatique.",
        "Interprétation personnalisée par un biologiste médical avec recommandations pratiques.",
        "Idéal pour un contrôle annuel ou avant une reprise d'activité sportive."
      ],
    },
    {
      image: project2,
      category: "Dépistage",
      title: "Bilan Cardiaque",
      description: "Analyses spécialisées pour évaluer les risques cardiovasculaires : cholestérol, triglycérides, CRP.",
      tags: ["Biochimie", "Prévention", "Cardiologie"],
      details: [
        "Évaluation complète du profil lipidique (HDL, LDL, triglycérides).",
        "Mesure des marqueurs inflammatoires et du risque d'accident cardio-vasculaire.",
        "Plan de suivi proposé en collaboration avec votre cardiologue."
      ],
    },
    {
      image: project3,
      category: "Suivi Spécialisé",
      title: "Bilan Hormonal",
      description: "Dosages hormonaux complets pour le diagnostic et suivi des troubles endocriniens et de fertilité.",
      tags: ["Hormonologie", "Endocrinologie", "Fertilité"],
      details: [
        "Analyses ciblées pour la thyroïde, l'axe corticotrope et les hormones sexuelles.",
        "Accompagnement des parcours de fertilité et de PMA avec protocoles adaptés.",
        "Compte-rendu détaillé avec recommandations de prise en charge."
      ],
    },
  ];

  const bilansPopulaires = [
    {
      title: "Bilan Préopératoire",
      description: "Analyses requises avant une intervention chirurgicale",
      metric: "Résultats en 24h",
    },
    {
      title: "Bilan Diabète",
      description: "Surveillance glycémique et HbA1c pour diabétiques",
      metric: "Suivi régulier",
    },
    {
      title: "Bilan Thyroïde",
      description: "Dosage TSH, T3, T4 pour troubles thyroïdiens",
      metric: "Diagnostic précis",
    },
    {
      title: "Bilan Grossesse",
      description: "Suivi complet de la grossesse mois par mois",
      metric: "Accompagnement total",
    },
  ];

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Nos <span className="text-gradient">Bilans</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
            Des bilans complets adaptés à vos besoins de santé, réalisés par des 
            professionnels qualifiés avec des équipements de dernière génération.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {analyses.map((analyse, index) => (
            <Card
              key={index}
              className="overflow-hidden hover-lift border-border/50 bg-card shadow-sm hover:shadow-md transition-shadow duration-300 group h-full flex flex-col"
            >
              <div className="relative overflow-hidden aspect-[4/3] w-full">
                <img
                  src={analyse.image}
                  alt={analyse.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 sm:p-6">
                  <Button 
                    size="sm" 
                    className="gradient-primary text-white text-xs sm:text-sm h-8 sm:h-9 px-3 sm:px-4"
                    onClick={() => setActiveAnalysis(index)}
                  >
                    Plus d'Infos
                    <CheckCircle2 className="ml-1.5 w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </Button>
                </div>
              </div>
              
              <div className="p-4 sm:p-5 md:p-6 flex-1 flex flex-col">
                <div className="text-xs sm:text-sm text-primary font-semibold mb-1.5 sm:mb-2">
                  {analyse.category}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-foreground">
                  {analyse.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4 flex-grow">
                  {analyse.description}
                </p>
                
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-auto pt-2">
                  {analyse.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1 bg-muted/40 rounded-full text-foreground/80 whitespace-nowrap"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {activeAnalysis !== null && (
          <div className="max-w-3xl mx-auto mb-12">
            <Card className="relative p-6 sm:p-8 border-border/60 shadow-lg">
              <button
                type="button"
                onClick={() => setActiveAnalysis(null)}
                className="absolute top-4 right-4 text-muted-foreground hover:text-primary transition-colors"
                aria-label="Fermer les informations"
              >
                <X className="w-5 h-5" />
              </button>

              <p className="text-sm font-semibold text-primary mb-2">
                {analyses[activeAnalysis].category}
              </p>
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                {analyses[activeAnalysis].title}
              </h3>
              <p className="text-muted-foreground mb-5">
                {analyses[activeAnalysis].description}
              </p>
              <ul className="space-y-3 text-sm sm:text-base text-foreground/90">
                {analyses[activeAnalysis].details?.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-primary"></span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Button asChild className="gradient-primary text-white">
                  <Link to="/appointments">Prendre Rendez-vous</Link>
                </Button>
              </div>
            </Card>
          </div>
        )}

        <div className="bg-secondary/30 rounded-3xl p-12">
          <h3 className="text-3xl font-bold mb-8 text-center">Bilans Populaires</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {bilansPopulaires.map((bilan, index) => (
            <div
              key={index}
              className="bg-muted/20 p-4 sm:p-5 md:p-6 rounded-lg border border-border/30 hover:border-primary/30 transition-colors group"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full gradient-primary flex items-center justify-center text-white text-lg sm:text-xl font-bold mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                {index + 1}
              </div>
              <h4 className="text-base sm:text-lg font-semibold mb-1.5 sm:mb-2 text-foreground">
                {bilan.title}
              </h4>
              <p className="text-xs sm:text-sm text-muted-foreground mb-2 sm:mb-3 leading-relaxed">
                {bilan.description}
              </p>
              <div className="text-xs sm:text-sm font-medium text-primary">
                {bilan.metric}
              </div>
            </div>
          ))}
        </div>
          
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="group">
              Voir Tous les Bilans
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};