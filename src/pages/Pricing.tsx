import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";

export default function Pricing() {
  const analysisCategories = [
    {
      category: "Hématologie",
      items: [
        { name: "Numération Formule Sanguine (NFS)", price: "120 DH" },
        { name: "Vitesse de Sédimentation (VS)", price: "50 DH" },
        { name: "Groupe Sanguin (ABO, Rh)", price: "100 DH" },
        { name: "Temps de Saignement (TS)", price: "60 DH" },
        { name: "Temps de Céphaline Activée (TCA)", price: "80 DH" },
        { name: "Temps de Quick (TP)", price: "80 DH" },
        { name: "Fibrinogène", price: "120 DH" },
        { name: "D-Dimères", price: "300 DH" },
      ]
    },
    {
      category: "Biochimie",
      items: [
        { name: "Glycémie à jeun", price: "40 DH" },
        { name: "HbA1c (Hémoglobine glyquée)", price: "150 DH" },
        { name: "Cholestérol total", price: "50 DH" },
        { name: "HDL Cholestérol", price: "50 DH" },
        { name: "LDL Cholestérol", price: "60 DH" },
        { name: "Triglycérides", price: "50 DH" },
        { name: "Créatinine", price: "50 DH" },
        { name: "Urée", price: "50 DH" },
        { name: "Acide urique", price: "50 DH" },
        { name: "Bilirubine totale et conjuguée", price: "60 DH" },
        { name: "Transaminases (TGO, TGP)", price: "80 DH" },
        { name: "Gamma GT", price: "60 DH" },
        { name: "Phosphatases alcalines", price: "60 DH" },
        { name: "Amylase", price: "80 DH" },
        { name: "Lipase", price: "100 DH" },
        { name: "Protéine C Réactive (CRP)", price: "100 DH" },
        { name: "Fer sérique", price: "70 DH" },
        { name: "Ferritine", price: "150 DH" },
        { name: "Transferrine", price: "120 DH" },
        { name: "Capacité totale de fixation du fer (CTFH)", price: "80 DH" },
      ]
    },
    {
      category: "Hormonologie",
      items: [
        { name: "TSH Ultra-sensible", price: "150 DH" },
        { name: "T3 libre", price: "180 DH" },
        { name: "T4 libre", price: "150 DH" },
        { name: "Cortisol", price: "180 DH" },
        { name: "ACTH", price: "250 DH" },
        { name: "FSH", price: "150 DH" },
        { name: "LH", price: "150 DH" },
        { name: "Prolactine", price: "180 DH" },
        { name: "Progestérone", price: "180 DH" },
        { name: "Œstradiol", price: "180 DH" },
        { name: "Testostérone totale", price: "200 DH" },
        { name: "Testostérone libre", price: "250 DH" },
        { name: "PSA total", price: "200 DH" },
        { name: "PSA libre", price: "200 DH" },
      ]
    },
    {
      category: "Marqueurs Tumoraux",
      items: [
        { name: "ACE (Antigène Carcino-Embryonnaire)", price: "200 DH" },
        { name: "CA 15-3 (Cancer du sein)", price: "250 DH" },
        { name: "CA 19-9 (Cancer digestif)", price: "250 DH" },
        { name: "CA 125 (Cancer de l'ovaire)", price: "250 DH" },
        { name: "CA 72-4 (Cancer de l'estomac)", price: "300 DH" },
        { name: "CYFRA 21-1 (Cancer du poumon)", price: "300 DH" },
        { name: "NSE (Neuron Specific Enolase)", price: "300 DH" },
        { name: "SCC (Cancer du col utérin)", price: "300 DH" },
      ]
    },
    {
      category: "Infectiologie",
      items: [
        { name: "Sérologie VIH", price: "150 DH" },
        { name: "Ag HBs (Hépatite B)", price: "120 DH" },
        { name: "Ac anti-HBc", price: "120 DH" },
        { name: "Ac anti-HBs", price: "120 DH" },
        { name: "Ac anti-VHC (Hépatite C)", price: "200 DH" },
        { name: "TPHA (Syphilis)", price: "100 DH" },
        { name: "VDRL (Syphilis)", price: "80 DH" },
        { name: "Toxoplasmose IgG/IgM", price: "200 DH" },
        { name: "Rubéole IgG/IgM", price: "200 DH" },
        { name: "CMV IgG/IgM", price: "250 DH" },
        { name: "EBV VCA IgG/IgM", price: "300 DH" },
      ]
    },
    {
      category: "Bilans Prénataux",
      items: [
        { name: "Bilan prénuptial complet", price: "800 DH" },
        { name: "Bilan du 1er trimestre", price: "900 DH" },
        { name: "Test de O'Sullivan (Diabète gestationnel)", price: "120 DH" },
        { name: "Test de charge en glucose (HGPO)", price: "150 DH" },
        { name: "Bilan de la toxoplasmose", price: "200 DH" },
        { name: "Bilan de la rubéole", price: "200 DH" },
      ]
    },
    {
      category: "Bilans Spéciaux",
      items: [
        { name: "Bilan de base (NFS, Glycémie, Créatinine, Cholestérol)", price: "250 DH" },
        { name: "Bilan lipidique complet", price: "200 DH" },
        { name: "Bilan hépatique complet", price: "300 DH" },
        { name: "Bilan rénal complet", price: "250 DH" },
        { name: "Bilan thyroïdien complet (TSH, T3, T4)", price: "400 DH" },
        { name: "Bilan inflammatoire (VS, CRP, NFS)", price: "300 DH" },
        { name: "Bilan martial complet (Fer, Ferritine, Transferrine)", price: "350 DH" },
        { name: "Bilan rhumatologique complet", price: "600 DH" },
      ]
    }
  ];

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
      price: "999 DH",
      description: "Analyses approfondies pour une évaluation complète",
      features: [
        "NFS complète",
        "Bilan lipidique complet",
        "Bilan hépatique",
        "Bilan rénal",
        "HbA1c",
        "Vitamine D",
        "CRP",
        "Résultats en 24h",
        "Rapport détaillé avec commentaires"
      ],
      popular: true
    },
    {
      name: "Bilan Premium",
      price: "1,999 DH",
      description: "Check-up complet avec suivi personnalisé",
      features: [
        "Toutes les analyses du Bilan Complet",
        "Marqueurs tumoraux de base",
        "Bilan thyroïdien complet",
        "Bilan martial complet",
        "Sérologies infectieuses",
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

          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Nos Forfaits</h2>
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
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">Tarifs des Analyses Détailés</h2>
              <div className="space-y-8">
                {analysisCategories.map((category, index) => (
                  <div key={index} className="bg-card rounded-lg border p-6">
                    <h3 className="text-xl font-semibold mb-4 text-primary">{category.category}</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left py-2 px-4">Analyse</th>
                            <th className="text-right py-2 px-4">Prix (DH)</th>
                          </tr>
                        </thead>
                        <tbody>
                          {category.items.map((item, itemIndex) => (
                            <tr key={itemIndex} className="border-b hover:bg-muted/50">
                              <td className="py-3 px-4">{item.name}</td>
                              <td className="py-3 px-4 text-right font-medium">{item.price}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-muted/30 p-6 rounded-lg border">
              <h3 className="text-xl font-semibold mb-4">Informations importantes</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Tous les prix sont affichés en Dirhams Marocains (DH)</li>
                <li>• Les résultats sont généralement disponibles sous 24 à 48 heures</li>
                <li>• Des frais de prélèvement à domicile peuvent s'appliquer (100-200 DH selon la zone)</li>
                <li>• Les tarifs sont susceptibles de modification sans préavis</li>
                <li>• Paiement accepté en espèces et par carte bancaire</li>
                <li>• Des réductions sont disponibles pour les personnes à faible revenu sur présentation de justificatifs</li>
              </ul>
              <div className="mt-6">
                <Button asChild variant="outline">
                  <Link to="/contact">Demander un devis personnalisé</Link>
                </Button>
              </div>
            </div>
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
