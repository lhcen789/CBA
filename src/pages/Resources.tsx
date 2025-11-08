import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { FileText, Video, Book, Download, Search, Heart, Activity, Stethoscope } from "lucide-react";

const Resources = () => {
  const guides = [
    {
      icon: FileText,
      title: "Guide Complet des Analyses Sanguines",
      description: "Comprenez vos résultats d'analyses sanguines",
      type: "Guide PDF",
      pages: "45 pages",
      category: "Hématologie",
    },
    {
      icon: FileText,
      title: "Préparer Votre Bilan de Santé",
      description: "Conseils et recommandations avant vos analyses",
      type: "Guide PDF",
      pages: "28 pages",
      category: "Prévention",
    },
    {
      icon: FileText,
      title: "Comprendre les Analyses Biochimiques",
      description: "Interprétation des paramètres biochimiques",
      type: "Guide PDF",
      pages: "52 pages",
      category: "Biochimie",
    },
  ];

  const videos = [
    {
      title: "Comment se préparer à un prélèvement sanguin",
      duration: "5 min",
      category: "Conseils",
      views: "8.5K",
    },
    {
      title: "Comprendre vos résultats d'analyses",
      duration: "12 min",
      category: "Éducation",
      views: "12.3K",
    },
    {
      title: "L'importance du bilan de santé annuel",
      duration: "8 min",
      category: "Prévention",
      views: "6.7K",
    },
    {
      title: "Dépistage précoce des maladies",
      duration: "10 min",
      category: "Prévention",
      views: "9.2K",
    },
  ];

  const healthTopics = [
    {
      title: "Diabète et Glycémie",
      description: "Surveillance et prévention du diabète",
      topics: ["HbA1c", "Glycémie à jeun", "HGPO", "Prévention"],
      icon: Activity,
    },
    {
      title: "Santé Cardiovasculaire",
      description: "Bilan lipidique et santé du cœur",
      topics: ["Cholestérol", "Triglycérides", "HDL/LDL", "Prévention"],
      icon: Heart,
    },
    {
      title: "Bilans de Grossesse",
      description: "Suivi médical de la grossesse",
      topics: ["Toxoplasmose", "Rubéole", "Trisomie", "Suivi complet"],
      icon: Stethoscope,
    },
  ];

  const whitepapers = [
    {
      title: "L'Importance du Dépistage Précoce",
      description: "Prévention et détection des maladies chroniques",
      published: "Janvier 2025",
      pages: "24 pages",
    },
    {
      title: "Innovations en Biologie Médicale",
      description: "Les nouvelles technologies d'analyses",
      published: "Décembre 2024",
      pages: "32 pages",
    },
    {
      title: "Santé Préventive: Guide Complet",
      description: "Stratégies de prévention et suivi médical",
      published: "Novembre 2024",
      pages: "40 pages",
    },
  ];

  const healthTips = [
    {
      icon: "💉",
      title: "Avant le Prélèvement",
      tips: [
        "Jeûne de 12h si nécessaire",
        "Bien s'hydrater",
        "Éviter l'effort intense",
        "Apporter votre ordonnance",
      ],
    },
    {
      icon: "📋",
      title: "Comprendre Vos Résultats",
      tips: [
        "Consultez votre médecin",
        "Notez les valeurs anormales",
        "Comparez avec anciens bilans",
        "Posez des questions",
      ],
    },
    {
      icon: "🏥",
      title: "Suivi Régulier",
      tips: [
        "Bilan annuel recommandé",
        "Dépistage selon l'âge",
        "Historique médical",
        "Prévention active",
      ],
    },
  ];

  const categories = ["Tous", "Hématologie", "Biochimie", "Prévention", "Conseils", "Éducation"];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Ressources <span className="text-gradient">Santé</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Découvrez notre collection de guides, conseils et informations pour mieux 
              comprendre vos analyses médicales et votre santé.
            </p>
            
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                <Input
                  placeholder="Rechercher des ressources..."
                  className="pl-12 h-14 text-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className={index === 0 ? "gradient-primary text-white" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Downloadable Guides */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Guides Téléchargeables</h2>
            <p className="text-xl text-muted-foreground">
              Guides détaillés pour comprendre vos analyses
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {guides.map((guide, index) => {
              const Icon = guide.icon;
              return (
                <Card key={index} className="p-8 hover-lift shadow-card border-border/50">
                  <div className="w-16 h-16 rounded-xl gradient-primary flex items-center justify-center mb-6">
                    <Icon className="text-white" size={32} />
                  </div>
                  
                  <Badge className="mb-4">{guide.category}</Badge>
                  <h3 className="text-2xl font-bold mb-3">{guide.title}</h3>
                  <p className="text-muted-foreground mb-6">{guide.description}</p>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                    <span>{guide.type}</span>
                    <span>•</span>
                    <span>{guide.pages}</span>
                  </div>
                  
                  <Button className="w-full gradient-primary text-white">
                    <Download size={18} className="mr-2" />
                    Télécharger Gratuitement
                  </Button>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Video Tutorials */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Vidéos Éducatives</h2>
            <p className="text-xl text-muted-foreground">
              Apprenez grâce à nos vidéos explicatives
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {videos.map((video, index) => (
              <Card key={index} className="hover-lift shadow-card border-border/50 overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <Video size={48} className="text-primary" />
                </div>
                <div className="p-6">
                  <Badge className="mb-3">{video.category}</Badge>
                  <h3 className="text-lg font-bold mb-2">{video.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span>{video.duration}</span>
                    <span>•</span>
                    <span>{video.views} vues</span>
                  </div>
                  <Button variant="outline" className="w-full">
                    Regarder
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Health Topics */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Thèmes Santé</h2>
            <p className="text-xl text-muted-foreground">
              Informations par domaine médical
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {healthTopics.map((topic, index) => {
              const Icon = topic.icon;
              return (
                <Card key={index} className="p-8 hover-lift shadow-card border-border/50">
                  <div className="w-16 h-16 rounded-xl gradient-primary flex items-center justify-center mb-6">
                    <Icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{topic.title}</h3>
                  <p className="text-muted-foreground mb-6">{topic.description}</p>
                  
                  <div className="space-y-2">
                    {topic.topics.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Health Tips */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Conseils Pratiques</h2>
            <p className="text-xl text-muted-foreground">
              Recommandations pour vos analyses
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {healthTips.map((section, index) => (
              <Card key={index} className="p-8 shadow-card border-border/50">
                <div className="text-5xl mb-6 text-center">{section.icon}</div>
                <h3 className="text-2xl font-bold mb-6 text-center">{section.title}</h3>
                <ul className="space-y-3">
                  {section.tips.map((tip, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <span className="text-foreground/80">{tip}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Whitepapers */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Publications & Rapports</h2>
            <p className="text-xl text-muted-foreground">
              Recherches et tendances en santé
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {whitepapers.map((paper, index) => (
              <Card key={index} className="p-8 hover-lift shadow-card border-border/50">
                <Book size={32} className="text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">{paper.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm">{paper.description}</p>
                <div className="flex items-center gap-3 text-sm text-muted-foreground mb-6">
                  <span>{paper.published}</span>
                  <span>•</span>
                  <span>{paper.pages}</span>
                </div>
                <Button variant="outline" className="w-full">
                  Lire Plus
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <Card className="p-12 lg:p-16 text-center gradient-primary shadow-glow">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Restez Informé
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Inscrivez-vous à notre newsletter pour recevoir nos derniers guides, 
              conseils santé et actualités médicales.
            </p>
            <div className="max-w-md mx-auto flex gap-3">
              <Input
                placeholder="Votre adresse email"
                className="h-12 bg-white/10 border-white/30 text-white placeholder:text-white/60"
              />
              <Button size="lg" variant="secondary">
                S'inscrire
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Resources;