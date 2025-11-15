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
        { name: "Vitamine B12", price: "200 DH" },
        { name: "Folates (Acide folique)", price: "180 DH" },
        { name: "Vitamine D (25-OH)", price: "250 DH" },
        { name: "Magnésium", price: "60 DH" },
        { name: "Phosphore", price: "50 DH" },
        { name: "Calcium", price: "50 DH" },
        { name: "Sodium", price: "40 DH" },
        { name: "Potassium", price: "40 DH" },
        { name: "Chlore", price: "40 DH" },
        { name: "Protéines totales", price: "50 DH" },
        { name: "Albumine", price: "50 DH" },
        { name: "Préalbumine", price: "120 DH" },
        { name: "Lactate déshydrogénase (LDH)", price: "80 DH" },
        { name: "Créatine phosphokinase (CPK)", price: "100 DH" },
        { name: "Troponine I", price: "300 DH" },
        { name: "BNP (Brain Natriuretic Peptide)", price: "400 DH" },
        { name: "Homocystéine", price: "350 DH" },
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
        { name: "Insuline", price: "200 DH" },
        { name: "Peptide C", price: "250 DH" },
        { name: "IGF-1 (Facteur de croissance)", price: "350 DH" },
        { name: "Hormone de croissance (GH)", price: "300 DH" },
        { name: "Parathormone (PTH)", price: "300 DH" },
        { name: "Calcitonine", price: "350 DH" },
        { name: "17-Beta Œstradiol", price: "180 DH" },
        { name: "DHEA-S", price: "200 DH" },
        { name: "Androstènedione", price: "250 DH" },
        { name: "SHBG (Sex Hormone Binding Globulin)", price: "200 DH" },
        { name: "AMH (Hormone Anti-Müllérienne)", price: "400 DH" },
        { name: "Inhibine B", price: "450 DH" },
        { name: "β-HCG (Grossesse)", price: "120 DH" },
        { name: "β-HCG quantitative", price: "150 DH" },
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
        { name: "Alpha-fœtoprotéine (AFP)", price: "200 DH" },
        { name: "CA 27-29 (Cancer du sein)", price: "280 DH" },
        { name: "CA 50 (Cancer digestif)", price: "280 DH" },
        { name: "Chromogranine A", price: "400 DH" },
        { name: "Enolase (NSE)", price: "300 DH" },
        { name: "HE4 (Cancer de l'ovaire)", price: "350 DH" },
        { name: "Thyroglobuline", price: "250 DH" },
        { name: "Calcitonine (Cancer thyroïde)", price: "350 DH" },
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
        { name: "Herpès simplex 1 et 2 IgG/IgM", price: "250 DH" },
        { name: "Varicelle-Zona IgG/IgM", price: "200 DH" },
        { name: "Chlamydia trachomatis", price: "180 DH" },
        { name: "Mycoplasma pneumoniae", price: "200 DH" },
        { name: "Bordetella pertussis (Coqueluche)", price: "250 DH" },
        { name: "Salmonella (Widal et Félix)", price: "100 DH" },
        { name: "Brucella (Wright)", price: "80 DH" },
        { name: "Rickettsia (Fièvre boutonneuse)", price: "150 DH" },
        { name: "Leishmaniose", price: "200 DH" },
        { name: "Paludisme (Goutte épaisse)", price: "80 DH" },
        { name: "Test rapide Paludisme", price: "120 DH" },
        { name: "Hépatite A IgG/IgM", price: "150 DH" },
        { name: "Hépatite E IgG/IgM", price: "200 DH" },
        { name: "COVID-19 PCR", price: "300 DH" },
        { name: "COVID-19 Antigène", price: "150 DH" },
        { name: "COVID-19 Sérologie IgG/IgM", price: "200 DH" },
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
    },
    {
      category: "Immunologie et Allergologie",
      items: [
        { name: "IgE totales", price: "150 DH" },
        { name: "IgE spécifiques (par allergène)", price: "80 DH" },
        { name: "Panel allergènes alimentaires (10 tests)", price: "600 DH" },
        { name: "Panel allergènes respiratoires (10 tests)", price: "600 DH" },
        { name: "IgA", price: "100 DH" },
        { name: "IgG", price: "100 DH" },
        { name: "IgM", price: "100 DH" },
        { name: "Complément C3", price: "150 DH" },
        { name: "Complément C4", price: "150 DH" },
        { name: "Facteur rhumatoïde", price: "120 DH" },
        { name: "Anticorps anti-CCP", price: "300 DH" },
        { name: "Anticorps anti-nucléaires (AAN)", price: "200 DH" },
        { name: "Anticorps anti-DNA natif", price: "250 DH" },
        { name: "Anticorps anti-SSA/SSB", price: "300 DH" },
        { name: "Anticorps anti-Scl70", price: "250 DH" },
        { name: "Anticorps anti-centromère", price: "250 DH" },
        { name: "ANCA (c-ANCA, p-ANCA)", price: "350 DH" },
      ]
    },
    {
      category: "Microbiologie",
      items: [
        { name: "ECBU (Examen cytobactériologique des urines)", price: "80 DH" },
        { name: "Coproculture", price: "120 DH" },
        { name: "Hémoculture", price: "200 DH" },
        { name: "Prélèvement vaginal", price: "100 DH" },
        { name: "Prélèvement urétral", price: "100 DH" },
        { name: "Prélèvement de gorge", price: "80 DH" },
        { name: "Recherche de BK (Tuberculose)", price: "150 DH" },
        { name: "Culture de BK", price: "300 DH" },
        { name: "Antibiogramme", price: "100 DH" },
        { name: "Recherche de parasites intestinaux", price: "60 DH" },
        { name: "Scotch test (Oxyures)", price: "40 DH" },
        { name: "Recherche de Candida", price: "80 DH" },
        { name: "Streptocoque B (femme enceinte)", price: "120 DH" },
      ]
    },
    {
      category: "Parasitologie",
      items: [
        { name: "Examen parasitologique des selles", price: "60 DH" },
        { name: "Recherche d'amibes", price: "80 DH" },
        { name: "Recherche de Giardia", price: "100 DH" },
        { name: "Recherche de Cryptosporidium", price: "150 DH" },
        { name: "Recherche d'œufs et parasites", price: "60 DH" },
        { name: "Kyste hydatique (Sérologie)", price: "150 DH" },
        { name: "Bilharziose (Sérologie)", price: "180 DH" },
        { name: "Filariose (Sérologie)", price: "200 DH" },
      ]
    },
    {
      category: "Génétique et Biologie Moléculaire",
      items: [
        { name: "Caryotype", price: "800 DH" },
        { name: "Recherche de trisomie 21 (DPNI)", price: "1200 DH" },
        { name: "Mutation BRCA1/BRCA2", price: "2500 DH" },
        { name: "Facteur V Leiden", price: "400 DH" },
        { name: "Mutation du gène de la prothrombine", price: "400 DH" },
        { name: "HLA B27", price: "300 DH" },
        { name: "Électrophorèse de l'hémoglobine", price: "150 DH" },
        { name: "Recherche de mutations (par gène)", price: "800 DH" },
        { name: "PCR Chlamydia/Gonocoque", price: "350 DH" },
        { name: "PCR Mycoplasma/Ureaplasma", price: "300 DH" },
      ]
    },
    {
      category: "Analyses Spécialisées",
      items: [
        { name: "Électrophorèse des protéines", price: "120 DH" },
        { name: "Immunofixation", price: "300 DH" },
        { name: "Chaînes légères libres", price: "400 DH" },
        { name: "β2-microglobuline", price: "200 DH" },
        { name: "Haptoglobine", price: "120 DH" },
        { name: "Céruloplasmine", price: "150 DH" },
        { name: "Alpha-1-antitrypsine", price: "180 DH" },
        { name: "Angiotensine Converting Enzyme (ACE)", price: "200 DH" },
        { name: "Osmolalité sérique", price: "100 DH" },
        { name: "Osmolalité urinaire", price: "100 DH" },
        { name: "Clairance de la créatinine", price: "120 DH" },
        { name: "Microalbuminurie", price: "80 DH" },
        { name: "Protéinurie des 24h", price: "60 DH" },
      ]
    },
    {
      category: "Toxicologie",
      items: [
        { name: "Plombémie", price: "200 DH" },
        { name: "Dosage de l'alcool", price: "100 DH" },
        { name: "Recherche de drogues (urine)", price: "300 DH" },
        { name: "Dosage médicamenteux (par molécule)", price: "250 DH" },
        { name: "Paracétamol", price: "150 DH" },
        { name: "Salicylés", price: "150 DH" },
        { name: "Lithium", price: "120 DH" },
        { name: "Digoxine", price: "200 DH" },
        { name: "Théophylline", price: "180 DH" },
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-16 sm:pb-20 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              Tarification Transparente
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Nos <span className="text-gradient bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Tarifs</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-10 max-w-3xl mx-auto">
              Des analyses médicales de qualité à des prix transparents et compétitifs. 
              Découvrez nos tarifs détaillés pour tous types d'examens.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gradient-primary text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                Prendre Rendez-vous
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-4 rounded-full border-primary/20 hover:bg-primary/5 transition-all duration-300">
                Demander un Devis
              </Button>
            </div>
          </div>
        </div>
      </section>

      <main className="flex-1 pb-16">
        <div className="container mx-auto px-4">

          <div className="space-y-12">
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
