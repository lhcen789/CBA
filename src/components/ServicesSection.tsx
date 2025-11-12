import { TestTube2, Microscope, Stethoscope, Syringe, HeartPulse, Baby, Dna, Activity, Check } from "lucide-react";

export const ServicesSection = () => {
  const services = [
    {
      icon: TestTube2,
      title: "Analyses Biologiques",
      description: "Ensemble complet d'analyses sanguines, urinaires et biochimiques pour un diagnostic précis.",
      items: ["Hématologie", "Biochimie", "Hémostase", "Marqueurs tumoraux"]
    },
    {
      icon: Microscope,
      title: "Microbiologie",
      description: "Examens bactériologiques, mycologiques et parasitologiques avec des résultats rapides.",
      items: ["Hépatites virales", "Bactériologie", "Parasitologie", "Sérologies infectieuses"]
    },
    {
      icon: Stethoscope,
      title: "Médecine Générale",
      description: "Bilans de santé complets et examens de routine pour tous les âges.",
      items: ["Bilans de santé", "Médecine du travail", "Médecine scolaire", "Vaccinations"]
    },
    {
      icon: Syringe,
      title: "Prélèvements à Domicile",
      description: "Service de prélèvement à domicile sur rendez-vous pour plus de confort.",
      items: ["Sur rendez-vous", "Résultats par email", "Pris en charge par la CNSS"]
    },
    {
      icon: HeartPulse,
      title: "Cardiologie",
      description: "Bilans cardiaques complets pour évaluer votre santé cardiovasculaire.",
      items: ["Marqueurs cardiaques", "Bilan lipidique", "Épreuve d'effort"]
    },
    {
      icon: Baby,
      title: "Pédiatrie",
      description: "Des analyses spécialisées adaptées aux nourrissons et aux enfants.",
      items: ["Bilans néonatals", "Dépistage néonatal", "Suivi de croissance"]
    },
    {
      icon: Dna,
      title: "Génétique",
      description: "Tests génétiques et de biologie moléculaire pour un diagnostic précis.",
      items: ["Dépistage génétique", "Diagnostic prénatal", "Oncogénétique"]
    },
    {
      icon: Activity,
      title: "Endocrinologie",
      description: "Évaluation complète des fonctions hormonales et métaboliques.",
      items: ["Thyroïde", "Diabète", "Métabolisme osseux", "Fertilité"]
    }
  ];

  return (
    <section id="services" className="py-16 sm:py-20 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Nos <span className="text-gradient">Services</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
            Découvrez notre gamme complète de services d'analyses médicales réalisés avec précision et fiabilité
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="bg-card rounded-xl p-6 sm:p-7 border border-border/30 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 text-primary">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-center text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-primary mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
