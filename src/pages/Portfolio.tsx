import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const equipment = [
    {
      category: "Hématologie",
      title: "Automate d'Hématologie",
      description: "Analyseur automatique de dernière génération pour NFS complète avec lecture morphologique avancée.",
      specifications: "Capacité de 120 tests/heure avec identification automatique des anomalies cellulaires. Technologie de cytométrie en flux multi-paramétrique pour une précision optimale.",
      tags: ["NFS", "Réticulocytes", "Morphologie", "Cytométrie"],
      results: [
        "Précision analytique >99%",
        "120 échantillons/heure",
        "Contrôle qualité automatisé",
        "Résultats en 60 secondes",
      ],
    },
    {
      category: "Biochimie",
      title: "Spectrophotomètre Automatisé",
      description: "Système d'analyse biochimique multi-paramétrique de haute performance avec gestion intelligente.",
      specifications: "Automate capable d'analyser plus de 200 paramètres biochimiques avec une grande sensibilité. Technologie photométrique avancée et gestion automatisée des réactifs.",
      tags: ["Glycémie", "Lipides", "Enzymes", "Électrolytes"],
      results: [
        "200+ paramètres disponibles",
        "Sensibilité analytique exceptionnelle",
        "Calibration automatique",
        "Interface laboratoire complète",
      ],
    },
    {
      category: "Microbiologie",
      title: "Système d'Identification Bactérienne",
      description: "Plateforme complète d'identification microbienne et d'antibiogramme automatisé.",
      specifications: "Système combinant identification biochimique, spectrométrie de masse et antibiogramme. Base de données de plus de 3000 micro-organismes avec mises à jour régulières.",
      tags: ["ECBU", "Hémoculture", "Antibiogramme", "Identification"],
      results: [
        "Identification en 24-48h",
        "3000+ micro-organismes",
        "Antibiogramme complet",
        "Détection résistances",
      ],
    },
  ];

  const additionalEquipment = [
    {
      title: "PCR en Temps Réel",
      category: "Biologie Moléculaire",
      description: "Détection et quantification d'ADN/ARN avec haute sensibilité",
      metric: "Résultats en 2h",
    },
    {
      title: "Système ELISA",
      category: "Immunologie",
      description: "Dosages immunologiques automatisés haute précision",
      metric: "96 tests/série",
    },
    {
      title: "Microscope Digital",
      category: "Cytologie",
      description: "Observation haute résolution avec capture d'images",
      metric: "Grossissement 1000x",
    },
    {
      title: "Centrifugeuse Réfrigérée",
      category: "Préparation",
      description: "Séparation optimale des composants sanguins",
      metric: "4°C température",
    },
    {
      title: "Analyseur d'Hémostase",
      category: "Coagulation",
      description: "Exploration complète de la coagulation",
      metric: "Précision maximale",
    },
    {
      title: "Système Immuno-Enzymatique",
      category: "Hormonologie",
      description: "Dosages hormonaux de haute sensibilité",
      metric: "Traçabilité totale",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24 gradient-hero overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/10"></div>
        <div className="absolute top-0 right-0 w-72 sm:w-80 md:w-[28rem] h-72 sm:h-80 md:h-[28rem] bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-60 sm:w-72 md:w-[26rem] h-60 sm:h-72 md:h-[26rem] bg-secondary/20 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-6 sm:space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 w-fit mx-auto text-sm font-medium">
              Technologies & Laboratoire
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              Nos <span className="text-gradient">Équipements</span> de Pointe
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Découvrez notre parc technologique certifié, sélectionné pour assurer la précision, la rapidité et la fiabilité de chaque analyse réalisée au laboratoire.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto">
              {[{
                value: "15+",
                label: "Automates Modernes"
              }, {
                value: "500+",
                label: "Paramètres Disponibles"
              }, {
                value: "99%",
                label: "Précision Vérifiée"
              }].map((item, index) => (
                <div
                  key={index}
                  className="rounded-2xl bg-background/80 backdrop-blur-sm border border-border/40 shadow-lg shadow-primary/5 p-5 sm:p-6"
                >
                  <div className="text-3xl sm:text-4xl font-bold text-gradient mb-2">
                    {item.value}
                  </div>
                  <div className="text-sm sm:text-base text-muted-foreground">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Equipment */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Équipements Principaux</h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Technologies de pointe pour des résultats fiables
            </p>
          </div>

          <div className="space-y-16 md:space-y-32">
            {equipment.map((item, index) => (
              <div key={index} className="space-y-8 md:space-y-12">
                <Card className="overflow-hidden shadow-glow border-border/50">
                  <div className="grid lg:grid-cols-2">
                    <div className="relative aspect-[4/3] lg:aspect-auto bg-secondary/30 flex items-center justify-center">
                      <div className="text-6xl md:text-8xl">🔬</div>
                    </div>
                    
                    <div className="p-6 md:p-8 lg:p-12 flex flex-col justify-center">
                      <Badge className="w-fit mb-4">{item.category}</Badge>
                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">{item.title}</h3>
                      
                      <p className="text-lg text-muted-foreground mb-6">{item.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {item.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <Button className="gradient-primary text-white w-fit" asChild>
                        <Link to="/services">En Savoir Plus</Link>
                      </Button>
                    </div>
                  </div>
                </Card>

                <div className="grid lg:grid-cols-2 gap-8">
                  <Card className="p-8 shadow-card border-border/50">
                    <h4 className="text-2xl font-bold mb-6">Spécifications Techniques</h4>
                    <p className="text-foreground/80 leading-relaxed mb-6">
                      {item.specifications}
                    </p>
                    
                    <h4 className="text-xl font-bold mb-4">Performances</h4>
                    <ul className="space-y-3">
                      {item.results.map((result, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                          <span className="text-foreground/80">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                  
                  <Card className="p-8 shadow-card border-border/50 bg-secondary/30">
                    <h4 className="text-2xl font-bold mb-6">Avantages</h4>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-1">
                          ✓
                        </div>
                        <div>
                          <div className="font-semibold mb-1">Fiabilité Maximale</div>
                          <div className="text-sm text-muted-foreground">Contrôles qualité rigoureux</div>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-1">
                          ✓
                        </div>
                        <div>
                          <div className="font-semibold mb-1">Rapidité</div>
                          <div className="text-sm text-muted-foreground">Résultats en temps optimal</div>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-1">
                          ✓
                        </div>
                        <div>
                          <div className="font-semibold mb-1">Précision</div>
                          <div className="text-sm text-muted-foreground">Technologies de pointe</div>
                        </div>
                      </li>
                    </ul>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* More Equipment */}
      <section className="py-12 md:py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Équipements Complémentaires</h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Une gamme complète pour tous types d'analyses
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalEquipment.map((item, index) => (
              <Card key={index} className="p-6 hover-lift shadow-card border-border/50">
                <Badge className="mb-3">{item.category}</Badge>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{item.description}</p>
                <div className="text-primary font-semibold">{item.metric}</div>
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
              Besoin d'une Analyse?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Notre équipement de pointe garantit la précision et la rapidité de vos résultats.
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

export default Portfolio;