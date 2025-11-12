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
    <section id="team" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Notre <span className="text-gradient">Équipe</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
            Une équipe de professionnels qualifiés et dévoués à votre service, 
            garantissant précision et fiabilité dans chaque analyse.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {team.map((member, index) => (
            <Card
              key={index}
              className="p-5 sm:p-6 hover-lift border-border/50 bg-card shadow-sm hover:shadow-md transition-shadow duration-300 h-full flex flex-col"
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full gradient-primary flex-shrink-0 flex items-center justify-center">
                  <span className="text-2xl sm:text-3xl font-bold text-white">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground">{member.name}</h3>
                  <div className="text-sm sm:text-base text-primary font-semibold">{member.role}</div>
                </div>
              </div>
              
              <p className="text-sm sm:text-base text-muted-foreground mb-4 flex-grow">
                {member.bio}
              </p>
              
              <div className="space-y-1.5 mb-4">
                {member.expertise.map((skill, idx) => (
                  <div key={idx} className="text-xs sm:text-sm text-foreground/80 flex items-start">
                    <span className="text-primary mr-1.5">•</span>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex gap-3 mt-auto pt-2">
                <a 
                  href="#" 
                  className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-full transition-colors"
                  aria-label={`LinkedIn de ${member.name}`}
                >
                  <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-full transition-colors"
                  aria-label={`Twitter de ${member.name}`}
                >
                  <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                <a 
                  href={`mailto:${member.name.split(' ').join('.').toLowerCase()}@example.com`} 
                  className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-full transition-colors"
                  aria-label={`Email de ${member.name}`}
                >
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              </div>
            </Card>
          ))}
        </div>

        <div className="bg-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-sm">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 text-center">
            <div className="p-3 sm:p-4">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient mb-1 sm:mb-2">30+</div>
              <div className="text-sm sm:text-base md:text-lg text-muted-foreground">Professionnels</div>
            </div>
            <div className="p-3 sm:p-4">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient mb-1 sm:mb-2">50+</div>
              <div className="text-sm sm:text-base md:text-lg text-muted-foreground">Types d'Analyses</div>
            </div>
            <div className="col-span-2 sm:col-auto p-3 sm:p-4">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient mb-1 sm:mb-2">15+</div>
              <div className="text-sm sm:text-base md:text-lg text-muted-foreground">Années d'Expérience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};