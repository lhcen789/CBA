import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Activity, Droplet, Heart, Baby, Microscope, Shield } from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: Droplet,
      title: "Hématologie",
      description: "Analyses complètes du sang : NFS, VS, groupage sanguin, bilan de coagulation.",
      features: ["Numération Formule Sanguine", "Groupe Sanguin", "Hémostase", "Bilan Anémie"],
    },
    {
      icon: Activity,
      title: "Biochimie",
      description: "Dosages biochimiques pour évaluer le fonctionnement des organes vitaux.",
      features: ["Bilan Hépatique", "Bilan Rénal", "Bilan Lipidique", "Glycémie & HbA1c"],
    },
    {
      icon: Microscope,
      title: "Microbiologie",
      description: "Identification des agents infectieux et tests de sensibilité aux antibiotiques.",
      features: ["ECBU", "Coproculture", "Hémoculture", "Antibiogramme"],
    },
    {
      icon: Heart,
      title: "Hormonologie",
      description: "Dosages hormonaux pour le suivi endocrinien et de la fertilité.",
      features: ["Bilan Thyroïdien", "Hormones Sexuelles", "Bilan Fertilité", "Diabète"],
    },
    {
      icon: Shield,
      title: "Immunologie",
      description: "Tests immunologiques et sérologiques pour détecter infections et anticorps.",
      features: ["Sérologies Virales", "Marqueurs Tumoraux", "Auto-Anticorps", "Allergies"],
    },
    {
      icon: Baby,
      title: "Bilan Prénatal",
      description: "Suivi complet de la grossesse avec analyses spécialisées.",
      features: ["Toxoplasmose", "Rubéole", "Trisomie 21", "Glycémie Gestationelle"],
    },
  ];

  return (
    <section id="services" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Nos <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Un large éventail d'analyses médicales réalisées avec précision et rapidité 
            pour répondre à tous vos besoins de diagnostic.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="p-8 hover-lift border-border/50 bg-card shadow-card"
              >
                <div className="w-16 h-16 rounded-xl gradient-primary flex items-center justify-center mb-6">
                  <Icon className="text-white" size={32} />
                </div>
                
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-foreground/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/services">En Savoir Plus</Link>
                </Button>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};