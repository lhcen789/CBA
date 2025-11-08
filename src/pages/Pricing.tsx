import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";

export default function Pricing() {
  const packages = [
    {
      name: "Bilan de Base",
      price: "299 DH",
      description: "Analyses essentielles pour un suivi de santé général",
      features: [
        "Numération formule sanguine (NFS)",
        "Glycémie à jeun",
        "Cholestérol total",
        "Créatininémie",
        "Résultats en 24h",
        "Consultation des résultats en ligne"
      ]
    },
    {
      name: "Bilan Complet",
      price: "599 DH",
      description: "Analyses approfondies pour une évaluation complète",
      features: [
        "Toutes les analyses du Bilan de Base",
        "Bilan lipidique complet",
        "Bilan hépatique",
        "Bilan rénal",
        "HbA1c",
        "Vitamine D",
        "Résultats en 24h",
        "Rapport détaillé avec commentaires"
      ],
      popular: true
    },
    {
      name: "Bilan Premium",
      price: "999 DH",
      description: "Check-up complet avec suivi personnalisé",
      features: [
        "Toutes les analyses du Bilan Complet",
        "Marqueurs tumoraux",
        "Bilan thyroïdien complet",
        "Électrophorèse des protéines",
        "Bilan martial",
        "Consultation nutritionnelle incluse",
        "Résultats en urgence (12h)",
        "Suivi personnalisé pendant 3 mois"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h1 className="text-4xl md:text-5xl font-bold">
              Nos <span className="text-gradient">Tarifs</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Des bilans adaptés à vos besoins avec des prix transparents
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {packages.map((pkg) => (
              <Card key={pkg.name} className={pkg.popular ? "border-primary shadow-lg scale-105" : ""}>
                {pkg.popular && (
                  <div className="bg-primary text-primary-foreground text-center py-2 text-sm font-semibold rounded-t-lg">
                    Le plus populaire
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <CardDescription>{pkg.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-gradient">{pkg.price}</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full gradient-primary text-white" asChild>
                    <Link to="/appointments">Réserver ce bilan</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-card p-8 rounded-lg border">
            <h2 className="text-2xl font-bold mb-4">Informations importantes</h2>
            <div className="grid md:grid-cols-2 gap-6 text-muted-foreground">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Modes de paiement</h3>
                <ul className="space-y-1 text-sm">
                  <li>• Espèces</li>
                  <li>• Carte bancaire</li>
                  <li>• Chèque</li>
                  <li>• Mutuelles et assurances acceptées</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">À savoir</h3>
                <ul className="space-y-1 text-sm">
                  <li>• Prélèvement à domicile disponible (+50 DH)</li>
                  <li>• Analyses à jeun: prévoir 8-12h de jeûne</li>
                  <li>• Résultats disponibles en ligne</li>
                  <li>• Devis gratuit sur demande</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
