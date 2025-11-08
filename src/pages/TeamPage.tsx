import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Mail } from "lucide-react";

export default function TeamPage() {
  const team = [
    {
      name: "Dr. Amina Benali",
      role: "Directrice & Biologiste",
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
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h1 className="text-4xl md:text-5xl font-bold">
              Notre <span className="text-gradient">Équipe</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Des professionnels qualifiés et dévoués à votre service
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {team.map((member) => (
              <Card key={member.name} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-xl font-bold">{member.name}</h3>
                      <p className="text-sm text-primary font-semibold">{member.role}</p>
                      <Badge variant="secondary" className="mt-2">
                        {member.speciality}
                      </Badge>
                    </div>
                    <div className="flex gap-2">
                      <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                        <Linkedin size={20} />
                      </a>
                      <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                        <Mail size={20} />
                      </a>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                  
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Formation</h4>
                    <p className="text-xs text-muted-foreground">{member.education}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm mb-2">Expertises</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((exp) => (
                        <Badge key={exp} variant="outline" className="text-xs">
                          {exp}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm mb-2">Certifications</h4>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      {member.certifications.map((cert) => (
                        <li key={cert}>• {cert}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8 bg-card p-8 rounded-lg border">
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient mb-2">25+</div>
              <div className="text-muted-foreground">Professionnels Qualifiés</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient mb-2">150+</div>
              <div className="text-muted-foreground">Années d'Expérience Cumulées</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient mb-2">100%</div>
              <div className="text-muted-foreground">Accréditation Qualité</div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
