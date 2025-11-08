import { Lightbulb, Rocket, Users, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";

export const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Précision",
      description: "Des analyses précises et fiables grâce à des équipements de pointe.",
    },
    {
      icon: Rocket,
      title: "Rapidité",
      description: "Résultats rapides pour un diagnostic et traitement efficaces.",
    },
    {
      icon: Users,
      title: "Proximité",
      description: "Un service personnalisé et une écoute attentive de nos patients.",
    },
    {
      icon: Zap,
      title: "Excellence",
      description: "Des standards de qualité élevés dans tous nos services.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            À Propos de Notre <span className="text-gradient">Laboratoire</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Centre de biologie Agadir est un laboratoire d'analyses médicales moderne équipé 
            des dernières technologies. Notre équipe de biologistes et techniciens qualifiés 
            assure des analyses de haute qualité pour votre santé.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card
                key={index}
                className="p-6 hover-lift border-border/50 bg-card shadow-card"
              >
                <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4">
                  <Icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>
            );
          })}
        </div>

        <div className="mt-20 grid md:grid-cols-3 gap-8 text-center">
          <div className="p-8 rounded-2xl bg-secondary">
            <div className="text-5xl font-bold text-gradient mb-2">99%</div>
            <div className="text-lg text-muted-foreground">Satisfaction Patients</div>
          </div>
          <div className="p-8 rounded-2xl bg-secondary">
            <div className="text-5xl font-bold text-gradient mb-2">24h</div>
            <div className="text-lg text-muted-foreground">Résultats en Urgence</div>
          </div>
          <div className="p-8 rounded-2xl bg-secondary">
            <div className="text-5xl font-bold text-gradient mb-2">200+</div>
            <div className="text-lg text-muted-foreground">Types d'Analyses</div>
          </div>
        </div>
      </div>
    </section>
  );
};
