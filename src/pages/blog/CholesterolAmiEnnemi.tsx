import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { Link } from "react-router-dom";

const CholesterolAmiEnnemi = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <article className="pt-40 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link to="/blog">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="mr-2" size={18} />
              Retour au Blog
            </Button>
          </Link>
          
          <Badge className="mb-4">Biochimie</Badge>
          
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Cholestérol: Ami ou Ennemi?
          </h1>
          
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-8">
            <div className="flex items-center gap-2">
              <User size={16} />
              <span>Dr. Karim Alami</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>3 Décembre 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span>12 min de lecture</span>
            </div>
          </div>
          
          <img
            src="/placeholder.svg"
            alt="Cholestérol"
            className="w-full h-[400px] object-cover rounded-lg mb-8"
          />
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground mb-6">
              Le cholestérol a souvent mauvaise réputation, mais il est en réalité essentiel à notre organisme. 
              Découvrez comment maintenir un équilibre optimal.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Qu'est-ce que le cholestérol?</h2>
            <p className="mb-4">
              Le cholestérol est une substance lipidique (grasse) présente dans toutes les cellules de notre corps. 
              Il joue plusieurs rôles vitaux:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Construction des membranes cellulaires</li>
              <li>Production d'hormones (testostérone, œstrogènes, cortisol)</li>
              <li>Synthèse de la vitamine D</li>
              <li>Production de bile pour la digestion des graisses</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Les deux types de cholestérol</h2>
            
            <p className="mb-4 mt-6">
              <strong>1. HDL - Le "bon" cholestérol:</strong>
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>HDL signifie High Density Lipoprotein (lipoprotéine de haute densité)</li>
              <li>Transporte le cholestérol des artères vers le foie pour élimination</li>
              <li>Protège contre les maladies cardiovasculaires</li>
              <li>Valeur optimale: supérieure à 0,4 g/L (1 mmol/L)</li>
              <li>Plus le HDL est élevé, mieux c'est!</li>
            </ul>
            
            <p className="mb-4 mt-6">
              <strong>2. LDL - Le "mauvais" cholestérol:</strong>
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>LDL signifie Low Density Lipoprotein (lipoprotéine de faible densité)</li>
              <li>Transporte le cholestérol du foie vers les cellules</li>
              <li>Peut s'accumuler dans les artères si en excès</li>
              <li>Valeur optimale: inférieure à 1,6 g/L (4,1 mmol/L)</li>
              <li>Un LDL élevé augmente le risque cardiovasculaire</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Comprendre vos résultats</h2>
            <p className="mb-4">
              <strong>Cholestérol total:</strong>
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Normal: moins de 2 g/L (5,2 mmol/L)</li>
              <li>Limite: 2 - 2,4 g/L</li>
              <li>Élevé: plus de 2,4 g/L</li>
            </ul>
            
            <p className="mb-4 mt-6">
              <strong>Ratio cholestérol total/HDL:</strong>
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Idéal: moins de 5</li>
              <li>Ce ratio est plus important que le cholestérol total seul</li>
            </ul>
            
            <p className="mb-4 mt-6">
              <strong>Triglycérides:</strong>
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Normal: moins de 1,5 g/L (1,7 mmol/L)</li>
              <li>Des triglycérides élevés augmentent aussi le risque cardiovasculaire</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Facteurs qui influencent le cholestérol</h2>
            
            <p className="mb-4 mt-6">
              <strong>Facteurs augmentant le mauvais cholestérol:</strong>
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Alimentation riche en graisses saturées (viandes grasses, produits laitiers entiers)</li>
              <li>Graisses trans (aliments transformés, fast-food)</li>
              <li>Sédentarité</li>
              <li>Surpoids et obésité</li>
              <li>Tabagisme</li>
              <li>Diabète</li>
              <li>Facteurs génétiques</li>
            </ul>
            
            <p className="mb-4 mt-6">
              <strong>Facteurs augmentant le bon cholestérol:</strong>
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Exercice physique régulier</li>
              <li>Perte de poids si nécessaire</li>
              <li>Arrêt du tabac</li>
              <li>Alimentation riche en oméga-3</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Comment maintenir un bon équilibre?</h2>
            
            <p className="mb-4 mt-6">
              <strong>1. Alimentation:</strong>
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Privilégier les graisses insaturées (huile d'olive, avocat, noix)</li>
              <li>Consommer des poissons gras (saumon, maquereau) riches en oméga-3</li>
              <li>Augmenter les fibres (fruits, légumes, céréales complètes)</li>
              <li>Limiter les viandes rouges et charcuteries</li>
              <li>Éviter les aliments transformés</li>
            </ul>
            
            <p className="mb-4 mt-6">
              <strong>2. Mode de vie:</strong>
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Pratiquer 30 minutes d'activité physique par jour</li>
              <li>Maintenir un poids santé</li>
              <li>Arrêter de fumer</li>
              <li>Limiter la consommation d'alcool</li>
              <li>Gérer le stress</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Quand consulter?</h2>
            <p className="mb-4">
              Un bilan lipidique est recommandé:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Tous les 5 ans à partir de 40 ans (hommes) et 50 ans (femmes)</li>
              <li>Plus fréquemment si vous avez des facteurs de risque</li>
              <li>Si vous avez des antécédents familiaux de maladies cardiovasculaires</li>
              <li>En cas de diabète, hypertension ou surpoids</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Traitement médical</h2>
            <p className="mb-4">
              Si les changements de mode de vie ne suffisent pas, des médicaments peuvent être prescrits:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Statines:</strong> Réduisent la production de cholestérol par le foie</li>
              <li><strong>Fibrates:</strong> Baissent les triglycérides et augmentent le HDL</li>
              <li><strong>Ézétimibe:</strong> Réduit l'absorption intestinale du cholestérol</li>
            </ul>
            
            <div className="bg-primary/10 p-6 rounded-lg mt-8">
              <h3 className="text-xl font-bold mb-2">Contrôlez votre cholestérol</h3>
              <p className="mb-4">
                Notre laboratoire propose des bilans lipidiques complets pour surveiller votre santé cardiovasculaire.
              </p>
              <Link to="/appointments">
                <Button className="gradient-primary text-white">
                  Prendre Rendez-vous
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </article>
      
      <Footer />
    </div>
  );
};

export default CholesterolAmiEnnemi;
