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
      <section className="pt-24 md:pt-32 pb-12 md:pb-20 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              À Propos du <span className="text-gradient">Centre de biologie Agadir</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Un laboratoire d'analyses médicales de référence au cœur d'Agadir, alliant expertise, technologie de pointe et service humain
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
            <div>
              <Badge className="mb-4 bg-primary text-primary-foreground">Notre Mission</Badge>
              <h2 className="text-4xl font-bold mb-6 text-foreground">Votre Santé, Notre Engagement</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Le Centre de biologie Agadir est votre partenaire de confiance pour tous vos besoins en analyses médicales. 
                Fondé sur des valeurs d'excellence et d'humanité, nous mettons notre expertise au service de votre santé 
                depuis plus de 15 ans.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Notre laboratoire dispose des équipements les plus modernes et nos biologistes qualifiés suivent 
                régulièrement des formations pour rester à la pointe des avancées scientifiques. Nous garantissons 
                la fiabilité et la rapidité de nos analyses, tout en offrant un service personnalisé et humain.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Que ce soit pour un bilan de routine, un suivi médical ou des analyses spécialisées, nous sommes 
                là pour vous accompagner avec professionnalisme et bienveillance.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="p-6 text-center shadow-card border-border">
                <div className="text-4xl font-bold text-gradient mb-2">15+</div>
                <p className="text-muted-foreground">Années d'Expérience</p>
              </Card>
              <Card className="p-6 text-center shadow-card border-border">
                <div className="text-4xl font-bold text-gradient mb-2">50K+</div>
                <p className="text-muted-foreground">Analyses Réalisées</p>
              </Card>
              <Card className="p-6 text-center shadow-card border-border">
                <div className="text-4xl font-bold text-gradient mb-2">25+</div>
                <p className="text-muted-foreground">Professionnels</p>
              </Card>
              <Card className="p-6 text-center shadow-card border-border">
                <div className="text-4xl font-bold text-gradient mb-2">98%</div>
                <p className="text-muted-foreground">Satisfaction Client</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 md:py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Nos Valeurs</h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Les principes qui guident notre travail au quotidien
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
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
              <Card key={index} className="p-8 text-center hover-lift shadow-card border-border">
                <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-primary text-primary-foreground">Notre Vision</Badge>
              <h2 className="text-4xl font-bold mb-6 text-foreground">L'Excellence au Service de Votre Santé</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Être le laboratoire de référence au Maroc, reconnu pour la qualité irréprochable de nos analyses, 
                notre innovation technologique et notre engagement envers le bien-être de nos patients.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <Card className="p-6 text-center shadow-card border-border hover-lift">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🔬</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">Innovation Continue</h3>
                <p className="text-muted-foreground">
                  Adoption des technologies d'analyse les plus avancées pour des résultats toujours plus précis
                </p>
              </Card>
              
              <Card className="p-6 text-center shadow-card border-border hover-lift">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">📚</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">Formation Continue</h3>
                <p className="text-muted-foreground">
                  Équipe constamment formée aux dernières avancées de la médecine de laboratoire
                </p>
              </Card>
              
              <Card className="p-6 text-center shadow-card border-border hover-lift">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🤝</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">Réseau Médical</h3>
                <p className="text-muted-foreground">
                  Partenariats avec les meilleurs établissements de santé de la région
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Certifications & Accréditations</h2>
            <p className="text-xl text-muted-foreground">
              Conformité aux normes internationales de qualité
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              "ISO 15189",
              "ISO 9001",
              "Agrément Ministère de la Santé",
              "Certifié COFRAC"
            ].map((cert, index) => (
              <Card key={index} className="p-6 text-center hover-lift shadow-card border-border">
                <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">✓</span>
                </div>
                <p className="font-semibold text-foreground">{cert}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Card className="p-12 lg:p-16 text-center gradient-primary shadow-glow">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Votre Santé Mérite l'Excellence
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Faites confiance à notre expertise et à notre engagement pour prendre soin de votre santé
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/appointments">
                <Button size="lg" variant="secondary" className="text-lg px-8">
                  Prendre Rendez-vous
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline" className="text-lg px-8 bg-white/10 text-white border-white/30 hover:bg-white/20">
                  Nos Services
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
