import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Microscope, Users, Award, Target } from "lucide-react";

const AboutPage = () => {
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
              Notre Histoire
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              À Propos du <span className="text-gradient bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Centre</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-10 max-w-3xl mx-auto">
              Un laboratoire d'analyses médicales de référence au cœur d'Agadir, alliant expertise, 
              technologie de pointe et service humain depuis plus de 15 ans.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gradient-primary text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                Découvrir nos Services
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-4 rounded-full border-primary/20 hover:bg-primary/5 transition-all duration-300">
                Rencontrer l'Équipe
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <div className="space-y-4 sm:space-y-6">
              <Badge className="text-xs sm:text-sm bg-primary/10 text-primary hover:bg-primary/20">
                Notre Mission
              </Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground leading-tight">
                Votre Santé, Notre Engagement
              </h2>
              <div className="space-y-3 sm:space-y-4 text-muted-foreground">
                <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                  Le Centre de biologie Agadir est votre partenaire de confiance pour tous vos besoins en analyses médicales. 
                  Fondé sur des valeurs d'excellence et d'humanité, nous mettons notre expertise au service de votre santé 
                  depuis plus de 15 ans.
                </p>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                  Notre laboratoire dispose des équipements les plus modernes et nos biologistes qualifiés suivent 
                  régulièrement des formations pour rester à la pointe des avancées scientifiques.
                </p>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                  Que ce soit pour un bilan de routine, un suivi médical ou des analyses spécialisées, nous sommes 
                  là pour vous accompagner avec professionnalisme et bienveillance.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6">
              {[
                { value: "15+", label: "Années d'Expérience" },
                { value: "50K+", label: "Analyses Réalisées" },
                { value: "25+", label: "Professionnels" },
                { value: "98%", label: "Satisfaction Client" }
              ].map((stat, index) => (
                <Card 
                  key={index}
                  className="p-4 sm:p-5 md:p-6 text-center hover-lift border-border/50 hover:border-primary/20 transition-all duration-300"
                >
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient mb-1 sm:mb-2">
                    {stat.value}
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    {stat.label}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-foreground">
              Nos Valeurs
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Les principes qui guident notre travail au quotidien
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                title: "Excellence",
                description: "Standards de qualité les plus élevés dans toutes nos analyses",
                icon: Target
              },
              {
                title: "Précision",
                description: "Technologie de pointe pour des résultats fiables à 100%",
                icon: Microscope
              },
              {
                title: "Expertise",
                description: "Équipe de biologistes hautement qualifiés et certifiés",
                icon: Award
              },
              {
                title: "Humanité",
                description: "Écoute, bienveillance et accompagnement personnalisé",
                icon: Users
              }
            ].map((value, index) => (
              <Card 
                key={index} 
                className="p-5 sm:p-6 text-center hover-lift border-border/50 hover:border-primary/20 transition-all duration-300 group"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full gradient-primary flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-105 transition-transform">
                  <value.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 text-foreground">
                  {value.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10 sm:mb-12">
              <Badge className="text-xs sm:text-sm bg-primary/10 text-primary hover:bg-primary/20 mb-3 sm:mb-4">
                Notre Vision
              </Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-foreground">
                L'Excellence au Service de Votre Santé
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Être le laboratoire de référence au Maroc, reconnu pour la qualité irréprochable de nos analyses, 
                notre innovation technologique et notre engagement envers le bien-être de nos patients.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-10 sm:mt-12">
              {[
                {
                  icon: "🔬",
                  title: "Innovation Continue",
                  description: "Adoption des technologies d'analyse les plus avancées pour des résultats toujours plus précis"
                },
                {
                  icon: "📚",
                  title: "Formation Continue",
                  description: "Équipe constamment formée aux dernières avancées de la médecine de laboratoire"
                },
                {
                  icon: "🤝",
                  title: "Réseau Médical",
                  description: "Partenariats avec les meilleurs établissements de santé de la région"
                }
              ].map((item, index) => (
                <Card 
                  key={index}
                  className="p-5 sm:p-6 text-center hover-lift border-border/50 hover:border-primary/20 transition-all duration-300 h-full flex flex-col"
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-primary/20 transition-colors">
                    <span className="text-2xl sm:text-3xl">{item.icon}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground flex-1">
                    {item.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-foreground">
              Certifications & Accréditations
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Conformité aux normes internationales de qualité
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {[
              "ISO 15189",
              "ISO 9001",
              "Agrément Ministère de la Santé",
              "Certifié COFRAC"
            ].map((cert, index) => (
              <Card 
                key={index} 
                className="p-5 sm:p-6 text-center hover-lift border-border/50 hover:border-primary/20 transition-all duration-300 group"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full gradient-primary flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-105 transition-transform">
                  <span className="text-white font-bold text-xl sm:text-2xl">✓</span>
                </div>
                <p className="font-medium sm:font-semibold text-foreground text-sm sm:text-base">
                  {cert}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <div className="space-y-4 sm:space-y-6">
              <Badge className="text-xs sm:text-sm bg-primary/10 text-primary hover:bg-primary/20">
                Notre Mission
              </Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground leading-tight">
                Votre Santé, Notre Engagement
              </h2>
              <div className="space-y-3 sm:space-y-4 text-muted-foreground">
                <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                  Le Centre de biologie Agadir est votre partenaire de confiance pour tous vos besoins en analyses médicales. 
                  Fondé sur des valeurs d'excellence et d'humanité, nous mettons notre expertise au service de votre santé 
                  depuis plus de 15 ans.
                </p>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                  Notre laboratoire dispose des équipements les plus modernes et nos biologistes qualifiés suivent 
                  régulièrement des formations pour rester à la pointe des avancées scientifiques.
                </p>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                  Que ce soit pour un bilan de routine, un suivi médical ou des analyses spécialisées, nous sommes 
                  là pour vous accompagner avec professionnalisme et bienveillance.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6">
              {[
                { value: "15+", label: "Années d'Expérience" },
                { value: "50K+", label: "Analyses Réalisées" },
                { value: "25+", label: "Professionnels" },
                { value: "98%", label: "Satisfaction Client" }
              ].map((stat, index) => (
                <Card 
                  key={index}
                  className="p-4 sm:p-5 md:p-6 text-center hover-lift border-border/50 hover:border-primary/20 transition-all duration-300"
                >
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient mb-1 sm:mb-2">
                    {stat.value}
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    {stat.label}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
