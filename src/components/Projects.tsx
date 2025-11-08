import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
// Lab-related images from Unsplash (free to use)
const project1 = "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80";
const project2 = "https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80";
const project3 = "https://images.unsplash.com/photo-1581595219315-a187dd40c322?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80";

export const Projects = () => {
  const analyses = [
    {
      image: project1,
      category: "Bilan de Routine",
      title: "Check-up Complet",
      description: "Bilan sanguin complet pour évaluer votre état de santé général : NFS, glycémie, bilan hépatique et rénal.",
      tags: ["Hématologie", "Biochimie", "Prévention"],
    },
    {
      image: project2,
      category: "Dépistage",
      title: "Bilan Cardiaque",
      description: "Analyses spécialisées pour évaluer les risques cardiovasculaires : cholestérol, triglycérides, CRP.",
      tags: ["Biochimie", "Prévention", "Cardiologie"],
    },
    {
      image: project3,
      category: "Suivi Spécialisé",
      title: "Bilan Hormonal",
      description: "Dosages hormonaux complets pour le diagnostic et suivi des troubles endocriniens et de fertilité.",
      tags: ["Hormonologie", "Endocrinologie", "Fertilité"],
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
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Nos <span className="text-gradient">Bilans</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Des bilans complets adaptés à vos besoins de santé, réalisés par des 
            professionnels qualifiés avec des équipements de dernière génération.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {analyses.map((analyse, index) => (
            <Card
              key={index}
              className="overflow-hidden hover-lift border-border/50 bg-card shadow-card group"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={analyse.image}
                  alt={analyse.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <Button size="sm" className="gradient-primary text-white">
                    Plus d'Infos
                    <CheckCircle2 size={16} className="ml-2" />
                  </Button>
                </div>
              </div>
              
              <div className="p-6">
                <div className="text-sm text-primary font-semibold mb-2">
                  {analyse.category}
                </div>
                <h3 className="text-2xl font-bold mb-3">{analyse.title}</h3>
                <p className="text-muted-foreground mb-4">{analyse.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {analyse.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="bg-secondary/30 rounded-3xl p-12">
          <h3 className="text-3xl font-bold mb-8 text-center">Bilans Populaires</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {bilansPopulaires.map((bilan, index) => (
              <div key={index} className="space-y-3">
                <h4 className="text-xl font-bold">{bilan.title}</h4>
                <p className="text-muted-foreground text-sm">{bilan.description}</p>
                <div className="text-primary font-semibold text-sm">{bilan.metric}</div>
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