import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Link } from "react-router-dom";
import { Star, Quote } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Fatima Z.",
      location: "Agadir",
      rating: 5,
      date: "Il y a 2 semaines",
      analysis: "Bilan Complet",
      comment: "Service impeccable ! L'équipe est très professionnelle et à l'écoute. Les résultats sont arrivés rapidement et le personnel a pris le temps de m'expliquer chaque détail. Je recommande vivement ce laboratoire.",
      verified: true
    },
    {
      name: "Mohammed A.",
      location: "Agadir",
      rating: 5,
      date: "Il y a 1 mois",
      analysis: "Prélèvement à domicile",
      comment: "Excellente expérience avec le service de prélèvement à domicile. La technicienne était ponctuelle, professionnelle et très douce. Mon père âgé a apprécié cette attention particulière.",
      verified: true
    },
    {
      name: "Sarah K.",
      location: "Inezgane",
      rating: 5,
      date: "Il y a 3 semaines",
      analysis: "Bilan Premium",
      comment: "J'ai fait mon check-up annuel ici et je suis très satisfaite. Le laboratoire est moderne, propre, et l'accueil est chaleureux. Les résultats en ligne sont un vrai plus !",
      verified: true
    },
    {
      name: "Karim B.",
      location: "Agadir",
      rating: 4,
      date: "Il y a 1 semaine",
      analysis: "Analyses spécifiques",
      comment: "Très bon laboratoire avec du matériel de pointe. J'ai dû faire des analyses complexes et tout s'est bien passé. Seul petit bémol : un peu d'attente malgré le rendez-vous, mais ça valait le coup.",
      verified: true
    },
    {
      name: "Amina L.",
      location: "Agadir",
      rating: 5,
      date: "Il y a 2 mois",
      analysis: "Bilan de Base",
      comment: "Premier laboratoire où je me sens vraiment écoutée. Les biologistes prennent le temps de répondre aux questions et le personnel est très aimable. Tarifs raisonnables et qualité au rendez-vous.",
      verified: true
    },
    {
      name: "Youssef M.",
      location: "Ait Melloul",
      rating: 5,
      date: "Il y a 3 semaines",
      analysis: "Suivi diabète",
      comment: "Je viens régulièrement pour mon suivi diabétique. L'équipe connaît bien mon dossier et me conseille toujours de manière personnalisée. C'est rassurant d'être entre de bonnes mains.",
      verified: true
    },
    {
      name: "Nadia H.",
      location: "Agadir",
      rating: 5,
      date: "Il y a 1 mois",
      analysis: "Analyses pédiatriques",
      comment: "Mes enfants ont eu besoin d'analyses et l'équipe a été extraordinaire avec eux. Très patients, ils ont su les mettre en confiance. Aucune larme ! Merci pour cette belle attention.",
      verified: true
    },
    {
      name: "Rachid T.",
      location: "Agadir",
      rating: 4,
      date: "Il y a 2 semaines",
      analysis: "Bilan hépatique",
      comment: "Laboratoire sérieux et bien équipé. Les prélèvements sont indolores et rapides. J'apprécie particulièrement la possibilité de consulter mes résultats en ligne à toute heure.",
      verified: true
    },
    {
      name: "Latifa S.",
      location: "Agadir",
      rating: 5,
      date: "Il y a 1 semaine",
      analysis: "Bilan thyroïdien",
      comment: "Accueil excellent, professionnalisme remarquable. Dr. Benali a pris le temps de m'expliquer mes résultats en détail. On sent vraiment qu'on est entre des mains expertes. Top !",
      verified: true
    }
  ];

  const stats = [
    { value: "4.9/5", label: "Note moyenne" },
    { value: "500+", label: "Avis clients" },
    { value: "98%", label: "Taux de satisfaction" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h1 className="text-4xl md:text-5xl font-bold">
              Avis de nos <span className="text-gradient">Patients</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Découvrez ce que nos patients disent de notre laboratoire
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
            {stats.map((stat) => (
              <Card key={stat.label} className="text-center">
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-gradient mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarFallback className="bg-primary text-primary-foreground">
                          {testimonial.name.substring(0, 2).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="font-semibold">{testimonial.name}</p>
                          {testimonial.verified && (
                            <Badge variant="secondary" className="text-xs">
                              ✓ Vérifié
                            </Badge>
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                      </div>
                    </div>
                    <Quote className="h-8 w-8 text-primary/20" />
                  </div>
                  
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < testimonial.rating
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{testimonial.date}</span>
                    <Badge variant="outline" className="text-xs">
                      {testimonial.analysis}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {testimonial.comment}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 bg-card p-8 rounded-lg border text-center max-w-2xl mx-auto">
            <h3 className="text-xl font-bold mb-2">Vous avez déjà visité notre laboratoire ?</h3>
            <p className="text-muted-foreground mb-4">
              Partagez votre expérience pour aider d'autres patients
            </p>
            <Button className="gradient-primary text-white" asChild>
              <Link to="/contact">Laisser un avis</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
