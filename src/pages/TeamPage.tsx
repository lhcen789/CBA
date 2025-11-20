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
      bio: "10 ans d'expérience en analyses médicales. Diplômée de la Faculté de Médecine de Marrakech, spécialisée en hématologie.",
      expertise: ["Hématologie", "Immunologie", "Management"],
      education: "Doctorat en Biologie Médicale, Université Hassan II",
      certifications: ["Certification ISO 15189", "Formation continue CNOPS"]
    },
    {
      name: "Dr. Moussa Et-tahery",
      role: "Biologiste Senior",
      speciality: "Bactériologie",
      bio: "Expert en biochimie clinique avec 10 ans d'expérience. Formé en US et au Maroc dans les meilleures institutions.",
      expertise: ["Biochimie", "Toxicologie", "Diabétologie"],
      education: "PhD Biochimie, Université Paris-Sud",
      certifications: ["European Specialist in Clinical Chemistry", "Diabétologie"]
    },
    {
      name: "Dr. Lahcen elmomou",
      role: "Biologiste",
      speciality: "Microbiologie",
      bio: "Spécialisée en microbiologie et parasitologie. Passionnée par la recherche et le diagnostic précis des infections.",
      expertise: ["Microbiologie", "Parasitologie", "Virologie"],
      education: "Doctorat Microbiologie, Faculté des Sciences Rabat",
      certifications: ["Biosécurité niveau 3", "Antibiogramme"]
    },
    {
      name: "Da. Mbark",
      role: "Technicienne en Chef",
      speciality: "Analyses Générales",
      bio: "15 ans d'expérience technique. Responsable de la qualité et de la formation du personnel technique.",
      expertise: ["Prélèvements", "Automates", "Contrôle qualité"],
      education: "DUT Analyses Biologiques et Biochimiques",
      certifications: ["Technicienne certifiée", "Prélèvements pédiatriques"]
    },
    {
      name: " HANNANNANANANAN",
      role: "Responsable Qualité",
      speciality: "Assurance Qualité",
      bio: "Expert en systèmes de management de la qualité dans les laboratoires médicaux. Garant de l'accréditation du laboratoire.",
      expertise: ["Normes ISO", "Accréditation", "Audits"],
      education: "Master Management Qualité, ISCAE",
      certifications: ["Auditeur ISO 15189", "Lead Auditor"]
    },
    {
      name: "HAHAHAHAHAHAHAH",
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
      <main className="flex-1">
        <section className="relative pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24 gradient-hero overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/10"></div>
          <div className="absolute top-0 right-0 w-60 sm:w-72 md:w-[26rem] h-60 sm:h-72 md:h-[26rem] bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-52 sm:w-64 md:w-[24rem] h-52 sm:h-64 md:h-[24rem] bg-secondary/20 rounded-full blur-3xl"></div>

          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 w-fit mx-auto text-sm font-medium">
                Notre Équipe Pluridisciplinaire
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                Des Spécialistes <span className="text-gradient">à Votre Écoute</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Une équipe expérimentée de biologistes, techniciens et coordinateurs qui travaillent ensemble pour garantir un accompagnement humain et des analyses de la plus haute qualité.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto">
                {[{
                  value: "25+",
                  label: "Professionnels Qualifiés"
                }, {
                  value: "150+",
                  label: "Années d'Expérience Cumulées"
                }, {
                  value: "100%",
                  label: "Engagement Qualité"
                }].map((item, index) => (
                  <div
                    key={index}
                    className="rounded-2xl bg-background/80 backdrop-blur-sm border border-border/40 shadow-lg shadow-primary/5 p-5 sm:p-6"
                  >
                    <div className="text-3xl sm:text-4xl font-bold text-gradient mb-2">
                      {item.value}
                    </div>
                    <div className="text-sm sm:text-base text-muted-foreground">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 md:py-20">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center space-y-3 sm:space-y-4 mb-10 sm:mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                Rencontrez Nos <span className="text-gradient">Spécialistes</span>
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                Chaque membre de l'équipe met son expertise au service de votre santé pour un accompagnement complet et personnalisé.
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

          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
