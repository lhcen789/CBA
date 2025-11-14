import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FileText, Video, Book, Download, Search, Heart, Activity, Stethoscope, Calendar, Clock, MessageSquare, BookOpen, CheckCircle, ChevronDown, Send } from "lucide-react";

const Resources: React.FC = () => {
  const guides = [
    {
      icon: FileText,
      title: "Guide Complet des Analyses Sanguines",
      description: "Comprenez vos résultats d'analyses sanguines",
      type: "Guide PDF",
      pages: "45 pages",
      category: "Hématologie",
      downloadUrl: "/guides/guide-analyses-sanguines.pdf",
      filename: "Guide_Analyses_Sanguines_CBA.pdf"
    },
    {
      icon: FileText,
      title: "Préparer Votre Bilan de Santé",
      description: "Conseils et recommandations avant vos analyses",
      type: "Guide PDF",
      pages: "28 pages",
      category: "Prévention",
      downloadUrl: "/guides/guide-bilan-sante.pdf",
      filename: "Guide_Bilan_Sante_CBA.pdf"
    },
    {
      icon: FileText,
      title: "Comprendre les Analyses Biochimiques",
      description: "Interprétation des paramètres biochimiques",
      type: "Guide PDF",
      pages: "52 pages",
      category: "Biochimie",
      downloadUrl: "/guides/guide-analyses-biochimiques.pdf",
      filename: "Guide_Analyses_Biochimiques_CBA.pdf"
    },
    {
      icon: FileText,
      title: "Dépistage Précoce du Diabète",
      description: "Guide complet sur le dépistage et la prévention du diabète",
      type: "Guide PDF",
      pages: "38 pages",
      category: "Prévention",
      downloadUrl: "/guides/guide-diabete-depistage.pdf",
      filename: "Guide_Diabete_Depistage_CBA.pdf"
    },
    {
      icon: FileText,
      title: "Santé Cardiovasculaire",
      description: "Bilan lipidique et prévention des maladies cardiaques",
      type: "Guide PDF",
      pages: "42 pages",
      category: "Cardiologie",
      downloadUrl: "/guides/guide-sante-cardiovasculaire.pdf",
      filename: "Guide_Sante_Cardiovasculaire_CBA.pdf"
    },
    {
      icon: FileText,
      title: "Analyses de Grossesse",
      description: "Suivi médical complet pendant la grossesse",
      type: "Guide PDF",
      pages: "35 pages",
      category: "Gynécologie",
      downloadUrl: "/guides/guide-grossesse-analyses.pdf",
      filename: "Guide_Grossesse_Analyses_CBA.pdf"
    },
    {
      icon: FileText,
      title: "Bilan Thyroïdien Complet",
      description: "Comprendre le fonctionnement de votre thyroïde",
      type: "Guide PDF",
      pages: "29 pages",
      category: "Endocrinologie",
      downloadUrl: "/guides/guide-thyroide-bilan.pdf",
      filename: "Guide_Thyroide_Bilan_CBA.pdf"
    },
    {
      icon: FileText,
      title: "Fonction Rénale et Urologie",
      description: "Évaluation complète de la santé de vos reins",
      type: "Guide PDF",
      pages: "33 pages",
      category: "Néphrologie",
      downloadUrl: "/guides/guide-fonction-renale.pdf",
      filename: "Guide_Fonction_Renale_CBA.pdf"
    },
    {
      icon: FileText,
      title: "Vitamines et Minéraux",
      description: "Bilan nutritionnel et carences vitaminiques",
      type: "Guide PDF",
      pages: "31 pages",
      category: "Nutrition",
      downloadUrl: "/guides/guide-vitamines-mineraux.pdf",
      filename: "Guide_Vitamines_Mineraux_CBA.pdf"
    },
  ];

  const videos = [
    {
      title: "Comment se préparer à un prélèvement sanguin",
      duration: "5 min",
      category: "Conseils",
      views: "8.5K",
      description: "Guide pratique pour bien préparer votre prise de sang",
      thumbnail: "/images/blood-analysis.svg",
      videoId: "prep-prelevement",
    },
    {
      title: "Comprendre vos résultats d'analyses",
      duration: "12 min",
      category: "Éducation",
      views: "12.3K",
      description: "Décryptage des principaux paramètres sanguins",
      thumbnail: "/images/blood-analysis.svg",
      videoId: "comprendre-resultats",
    },
    {
      title: "L'importance du bilan de santé annuel",
      duration: "8 min",
      category: "Prévention",
      views: "6.7K",
      description: "Pourquoi faire un bilan de santé régulier",
      thumbnail: "/images/heart-health.svg",
      videoId: "bilan-annuel",
    },
    {
      title: "Dépistage précoce du diabète",
      duration: "10 min",
      category: "Prévention",
      views: "9.2K",
      description: "Tests de dépistage et facteurs de risque",
      thumbnail: "/images/diabetes-screening.svg",
      videoId: "depistage-diabete",
    },
    {
      title: "Bilan thyroïdien expliqué",
      duration: "7 min",
      category: "Endocrinologie",
      views: "5.8K",
      description: "TSH, T3, T4 : comprendre vos hormones thyroïdiennes",
      thumbnail: "/images/thyroid-health.svg",
      videoId: "bilan-thyroide",
    },
    {
      title: "Santé cardiovasculaire et cholestérol",
      duration: "9 min",
      category: "Cardiologie",
      views: "7.4K",
      description: "Bilan lipidique et prévention des maladies cardiaques",
      thumbnail: "/images/heart-health.svg",
      videoId: "sante-cardio",
    },
    {
      title: "Analyses de grossesse trimestre par trimestre",
      duration: "15 min",
      category: "Gynécologie",
      views: "11.2K",
      description: "Suivi médical complet pendant la grossesse",
      thumbnail: "/images/pregnancy-tests.svg",
      videoId: "analyses-grossesse",
    },
    {
      title: "Fonction rénale : créatinine et DFG",
      duration: "6 min",
      category: "Néphrologie",
      views: "4.3K",
      description: "Évaluer la santé de vos reins",
      thumbnail: "/images/kidney-function.svg",
      videoId: "fonction-renale",
    },
    {
      title: "Vitamines et carences nutritionnelles",
      duration: "11 min",
      category: "Nutrition",
      views: "6.9K",
      description: "Dépistage des carences en vitamines et minéraux",
      thumbnail: "/images/vitamin-d.svg",
      videoId: "vitamines-carences",
    },
    {
      title: "Système immunitaire et défenses",
      duration: "8 min",
      category: "Immunologie",
      views: "5.1K",
      description: "Comprendre vos analyses immunologiques",
      thumbnail: "/images/immune-system.svg",
      videoId: "systeme-immunitaire",
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

  const categories = ["Tous", "Hématologie", "Biochimie", "Prévention", "Cardiologie", "Gynécologie", "Endocrinologie", "Néphrologie", "Nutrition", "Immunologie", "Conseils", "Éducation", "Recherche"];

  // State for FAQ accordion
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Download function with tracking
  const handleDownload = (downloadUrl: string, filename: string, title: string) => {
    // Create download link
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = filename;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Track download (in a real app, this would send to analytics)
    console.log(`Guide téléchargé: ${title} - ${filename}`);
    
    // Show success message (optional)
    // You could add a toast notification here
  };

  const faqs = [
    {
      question: "Comment me préparer pour une prise de sang ?",
      answer: "Il est généralement recommandé d'être à jeun depuis 8 à 12 heures avant une prise de sang. Évitez également l'alcool et le tabac dans les heures précédant le prélèvement. N'oubliez pas d'apporter votre ordonnance et votre carte vitale."
    },
    {
      question: "Combien de temps pour obtenir mes résultats ?",
      answer: "Les délais d'obtention des résultats varient selon les analyses. Les résultats d'hématologie sont généralement disponibles sous 24 à 48h. Pour des analyses plus spécifiques, cela peut prendre jusqu'à une semaine. Vous serez informé par SMS ou par email lorsque vos résultats seront disponibles sur votre espace personnel."
    },
    {
      question: "Puis-je avoir accès à mes anciens résultats ?",
      answer: "Oui, tous vos résultats sont archivés dans votre espace personnel sécurisé. Vous pouvez y accéder à tout moment et les télécharger au format PDF. Nous conservons vos résultats pendant 10 ans conformément à la réglementation en vigueur."
    },
    {
      question: "Comment interpréter mes résultats d'analyse ?",
      answer: "Vos résultats sont accompagnés de valeurs de référence. Cependant, seul votre médecin est habilité à les interpréter dans le cadre de votre situation médicale. Nous vous recommandons de prendre rendez-vous avec votre médecin pour une explication détaillée de vos résultats."
    }
  ];

  const testimonials = [
    {
      name: "Sophie M.",
      role: "Patient",
      content: "Très satisfaite de la qualité des services. Les résultats sont rapides et l'équipe est très professionnelle. La plateforme en ligne est très pratique pour suivre mes résultats.",
      rating: 5
    },
    {
      name: "Thomas D.",
      role: "Patient régulier",
      content: "Je fais confiance à ce laboratoire depuis des années pour mes bilans de santé. Les prélèvements sont effectués avec professionnalisme et les résultats sont toujours précis et détaillés.",
      rating: 5
    },
    {
      name: "Amélie R.",
      role: "Nouvelle patiente",
      content: "Première expérience très positive. Accueil chaleureux et prise en charge rapide. J'ai particulièrement apprécié la possibilité de prendre rendez-vous en ligne.",
      rating: 4
    }
  ];

  const researchArticles = [
    {
      title: "Nouveaux biomarqueurs dans le dépistage précoce du cancer",
      author: "Dr. Martin Dubois",
      date: "15 Mars 2025",
      summary: "Étude sur les avancées récentes dans le dépistage précoce des cancers par analyse sanguine.",
      category: "Recherche"
    },
    {
      title: "Impact de l'alimentation sur les marqueurs inflammatoires",
      author: "Pr. Sophie Laurent",
      date: "2 Mars 2025",
      summary: "Analyse approfondie des relations entre habitudes alimentaires et marqueurs biologiques de l'inflammation.",
      category: "Nutrition"
    },
    {
      title: "Avancées dans le diagnostic des maladies auto-immunes",
      author: "Dr. Jean-Luc Bernard",
      date: "20 Février 2025",
      summary: "Nouveaux tests et approches diagnostiques pour les maladies auto-immunes rares.",
      category: "Immunologie"
    }
  ];

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
                  
                  <Button 
                    className="w-full gradient-primary text-white"
                    onClick={() => handleDownload(guide.downloadUrl, guide.filename, guide.title)}
                  >
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
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video, index) => (
              <Card key={index} className="hover-lift shadow-card border-border/50 overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center relative overflow-hidden">
                  {video.thumbnail ? (
                    <img 
                      src={video.thumbnail} 
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <Video size={48} className="text-primary" />
                  )}
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors cursor-pointer">
                      <Video size={24} className="text-primary ml-1" />
                    </div>
                  </div>
                  <div className="absolute top-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-sm">
                    {video.duration}
                  </div>
                </div>
                <div className="p-6">
                  <Badge className="mb-3">{video.category}</Badge>
                  <h3 className="text-lg font-bold mb-2">{video.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{video.description}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span>{video.views} vues</span>
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full hover:bg-primary hover:text-white transition-colors"
                    onClick={() => {
                      // In a real app, this would open a video player or navigate to video page
                      console.log(`Playing video: ${video.title} (ID: ${video.videoId})`);
                      alert(`Lecture de la vidéo: ${video.title}\n\nDans une application réelle, ceci ouvrirait le lecteur vidéo.`);
                    }}
                  >
                    <Video size={16} className="mr-2" />
                    Regarder la vidéo
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
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Conseils Santé</h2>
            <p className="text-xl text-muted-foreground">
              Astuces et recommandations pour vos analyses
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {healthTips.map((tip, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{tip.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{tip.title}</h3>
                <ul className="space-y-2">
                  {tip.tips.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Témoignages</h2>
            <p className="text-xl text-muted-foreground">
              Ce que nos patients disent de nous
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