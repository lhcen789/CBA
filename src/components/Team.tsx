import { Card } from "@/components/ui/card";
import { Linkedin, Twitter, Mail } from "lucide-react";

export const Team = () => {
  const team = [
    {
      name: "Dr. Amina Benali",
      role: "Biologiste Directrice",
      bio: "20 ans d'expérience en biologie médicale. Spécialisée en hématologie et biochimie clinique.",
      expertise: ["Hématologie", "Biochimie", "Gestion Laboratoire"],
    },
    {
      name: "Dr. Karim El Mansouri",
      role: "Biologiste Senior",
      bio: "Expert en microbiologie et immunologie. Diplômé de la Faculté de Médecine de Casablanca.",
      expertise: ["Microbiologie", "Immunologie", "Sérologie"],
    },
    {
      name: "Fatima Zahra Alami",
      role: "Technicienne Spécialisée",
      bio: "Technicienne de laboratoire certifiée avec expertise en analyses automatisées.",
      expertise: ["Analyses Auto", "Contrôle Qualité", "Hématologie"],
    },
    {
      name: "Hassan Idrissi",
      role: "Responsable Technique",
      bio: "15 ans d'expérience en gestion d'équipements biomédicaux et maintenance.",
      expertise: ["Équipements Médicaux", "Assurance Qualité", "Formation"],
    },
    {
      name: "Samira Benjelloun",
      role: "Biologiste",
      bio: "Spécialisée en hormonologie et biologie de la reproduction.",
      expertise: ["Hormonologie", "Fertilité", "Endocrinologie"],
    },
    {
      name: "Dr. Youssef Chakir",
      role: "Médecin Consultant",
      bio: "Médecin interniste collaborant pour l'interprétation des résultats complexes.",
      expertise: ["Médecine Interne", "Diagnostic", "Conseil Médical"],
    },
  ];

  return (
    <section id="team" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Notre <span className="text-gradient">Équipe</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Une équipe de professionnels qualifiés et dévoués à votre service, 
            garantissant précision et fiabilité dans chaque analyse.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {team.map((member, index) => (
            <Card
              key={index}
              className="p-6 hover-lift border-border/50 bg-card shadow-card"
            >
              <div className="w-20 h-20 rounded-full gradient-primary mb-4 flex items-center justify-center">
                <span className="text-3xl font-bold text-white">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
              <div className="text-primary font-semibold mb-3">{member.role}</div>
              <p className="text-muted-foreground mb-4">{member.bio}</p>
              
              <div className="space-y-1 mb-4">
                {member.expertise.map((skill, idx) => (
                  <div key={idx} className="text-sm text-foreground/70">
                    • {skill}
                  </div>
                ))}
              </div>
              
              <div className="flex gap-3">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Mail size={20} />
                </a>
              </div>
            </Card>
          ))}
        </div>

        <div className="bg-card rounded-3xl p-12 shadow-card">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-gradient mb-2">30+</div>
              <div className="text-lg text-muted-foreground">Professionnels</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gradient mb-2">50 000+</div>
              <div className="text-lg text-muted-foreground">Analyses par An</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gradient mb-2">99%</div>
              <div className="text-lg text-muted-foreground">Taux de Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};