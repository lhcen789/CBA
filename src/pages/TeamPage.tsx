import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Mail } from "lucide-react";

export default function TeamPage() {
  const team = [
    {
      name: "Dr. Yassin Zemrani",
      role: "Biologiste",
      speciality: "Hématologie",
      bio: "20 ans d'expérience en analyses médicales. Diplômée de la Faculté de Médecine de Casablanca, spécialisée en hématologie.",
      expertise: ["Hématologie", "Immunologie", "Management"],
      education: "Doctorat en Biologie Médicale, Université Hassan II",
      certifications: ["Certification ISO 15189", "Formation continue CNOPS"]
    },
    {
      name: "Dr. Youssef Alami",
      role: "Biologiste Senior",
      speciality: "Biochimie",
      bio: "Expert en biochimie clinique avec 15 ans d'expérience. Formé en France et au Maroc dans les meilleures institutions.",
      expertise: ["Biochimie", "Toxicologie", "Diabétologie"],
      education: "PhD Biochimie, Université Paris-Sud",
      certifications: ["European Specialist in Clinical Chemistry", "Diabétologie"]
    },
    {
      name: "Dr. Fatima Zahra Idrissi",
      role: "Biologiste",
      speciality: "Microbiologie",
      bio: "Spécialisée en microbiologie et parasitologie. Passionnée par la recherche et le diagnostic précis des infections.",
      expertise: ["Microbiologie", "Parasitologie", "Virologie"],
      education: "Doctorat Microbiologie, Faculté des Sciences Rabat",
      certifications: ["Biosécurité niveau 3", "Antibiogramme"]
    },
    {
      name: "Karima Mansouri",
      role: "Technicienne en Chef",
      speciality: "Analyses Générales",
      bio: "15 ans d'expérience technique. Responsable de la qualité et de la formation du personnel technique.",
      expertise: ["Prélèvements", "Automates", "Contrôle qualité"],
      education: "DUT Analyses Biologiques et Biochimiques",
      certifications: ["Technicienne certifiée", "Prélèvements pédiatriques"]
    },
    {
      name: "Mohamed Chakir",
      role: "Responsable Qualité",
      speciality: "Assurance Qualité",
      bio: "Expert en systèmes de management de la qualité dans les laboratoires médicaux. Garant de l'accréditation du laboratoire.",
      expertise: ["Normes ISO", "Accréditation", "Audits"],
      education: "Master Management Qualité, ISCAE",
      certifications: ["Auditeur ISO 15189", "Lead Auditor"]
    },
    {
      name: "Sarah Benjelloun",
      role: "Accueil & Coordination",
      speciality: "Relation Patient",
      bio: "Coordinatrice dévouée assurant un accueil chaleureux et une expérience patient optimale. Interface entre patients et équipe médicale.",
      expertise: ["Accueil patients", "Planning", "Urgences"],
      education: "BTS Gestion PME-PMI",
      certifications: ["Formation Relation Patient", "Premiers secours"]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      <main className="flex-1 pt-20 sm:pt-24 pb-12 sm:pb-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center space-y-3 sm:space-y-4 mb-10 sm:mb-12 md:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Notre <span className="text-gradient">Équipe</span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Des professionnels qualifiés et dévoués à votre service
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
            {team.map((member) => (
              <Card 
                key={member.name} 
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50 hover:border-primary/20"
              >
                <CardHeader className="p-5 sm:p-6">
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-bold text-foreground">{member.name}</h3>
                      <p className="text-sm text-primary font-medium mt-1">{member.role}</p>
                      <Badge variant="secondary" className="mt-2 text-xs sm:text-sm">
                        {member.speciality}
                      </Badge>
                    </div>
                    <div className="flex gap-2">
                      <a 
                        href="#" 
                        className="p-2 text-muted-foreground hover:text-primary hover:bg-accent/50 rounded-full transition-colors"
                        aria-label={`Contact ${member.name} sur LinkedIn`}
                      >
                        <Linkedin size={18} />
                      </a>
                      <a 
                        href={`mailto:${member.name.split(' ').join('.').toLowerCase()}@cba.ma`} 
                        className="p-2 text-muted-foreground hover:text-primary hover:bg-accent/50 rounded-full transition-colors"
                        aria-label={`Envoyer un email à ${member.name}`}
                      >
                        <Mail size={18} />
                      </a>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-5 sm:p-6 pt-0 space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                  
                  <div className="bg-muted/30 p-3 sm:p-4 rounded-lg">
                    <h4 className="font-semibold text-sm mb-1.5 text-foreground/90">Formation</h4>
                    <p className="text-xs text-muted-foreground">{member.education}</p>
                  </div>

                  <div className="bg-muted/30 p-3 sm:p-4 rounded-lg">
                    <h4 className="font-semibold text-sm mb-2 text-foreground/90">Expertises</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {member.expertise.map((exp) => (
                        <Badge 
                          key={exp} 
                          variant="secondary" 
                          className="text-[10px] sm:text-xs px-2 py-0.5 bg-background/70"
                        >
                          {exp}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="bg-muted/30 p-3 sm:p-4 rounded-lg">
                    <h4 className="font-semibold text-sm mb-2 text-foreground/90">Certifications</h4>
                    <ul className="text-xs text-muted-foreground space-y-1.5">
                      {member.certifications.map((cert) => (
                        <li key={cert} className="flex items-start">
                          <span className="text-primary mr-1.5">•</span>
                          <span>{cert}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 bg-card p-6 sm:p-8 rounded-xl border border-border/50">
            <div className="text-center p-4 sm:p-6 bg-background/50 rounded-lg hover:shadow-sm transition-shadow">
              <div className="text-3xl sm:text-4xl font-bold text-gradient mb-2">25+</div>
              <div className="text-sm sm:text-base text-muted-foreground">Professionnels Qualifiés</div>
            </div>
            <div className="text-center p-4 sm:p-6 bg-background/50 rounded-lg hover:shadow-sm transition-shadow">
              <div className="text-3xl sm:text-4xl font-bold text-gradient mb-2">150+</div>
              <div className="text-sm sm:text-base text-muted-foreground">Années d'Expérience</div>
            </div>
            <div className="text-center p-4 sm:p-6 bg-background/50 rounded-lg hover:shadow-sm transition-shadow">
              <div className="text-3xl sm:text-4xl font-bold text-gradient mb-2">100%</div>
              <div className="text-sm sm:text-base text-muted-foreground">Accréditation Qualité</div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
