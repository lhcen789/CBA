import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { Link } from "react-router-dom";

const BilanPrenuptial = () => {
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
          
          <Badge className="mb-4">Prévention</Badge>
          
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Le Bilan Prénuptial: Préparez votre Avenir
          </h1>
          
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-8">
            <div className="flex items-center gap-2">
              <User size={16} />
              <span>Dr. Amina Benali</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>5 Décembre 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span>7 min de lecture</span>
            </div>
          </div>
          
          <img
            src="/placeholder.svg"
            alt="Bilan prénuptial"
            className="w-full h-[400px] object-cover rounded-lg mb-8"
          />
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground mb-6">
              Le bilan prénuptial est une étape importante pour commencer sa vie de couple en toute sérénité. 
              Découvrez son importance et les analyses qu'il comprend.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Qu'est-ce qu'un bilan prénuptial?</h2>
            <p className="mb-4">
              Le bilan prénuptial est un ensemble d'analyses médicales effectuées avant le mariage. 
              Il vise à détecter d'éventuelles maladies transmissibles ou héréditaires et à évaluer 
              l'état de santé général des futurs époux.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Pourquoi est-il important?</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>Détecter des maladies infectieuses transmissibles</li>
              <li>Identifier des facteurs génétiques pouvant affecter la descendance</li>
              <li>Prévenir la transmission de maladies héréditaires</li>
              <li>Évaluer la fertilité du couple</li>
              <li>Permettre un conseil médical personnalisé</li>
              <li>Établir un état de santé de référence</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Analyses incluses dans le bilan prénuptial</h2>
            
            <p className="mb-4 mt-6">
              <strong>1. Sérologies infectieuses:</strong>
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>VIH:</strong> Dépistage du virus du SIDA</li>
              <li><strong>Hépatite B et C:</strong> Maladies du foie transmissibles</li>
              <li><strong>Syphilis (TPHA/VDRL):</strong> Infection sexuellement transmissible</li>
              <li><strong>Toxoplasmose:</strong> Important pour la future grossesse</li>
              <li><strong>Rubéole:</strong> Crucial pour les femmes en âge de procréer</li>
            </ul>
            
            <p className="mb-4 mt-6">
              <strong>2. Groupe sanguin et rhésus:</strong>
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Détermination du groupe sanguin (A, B, AB, O)</li>
              <li>Détermination du facteur rhésus (+ ou -)</li>
              <li>Important en cas d'incompatibilité fœto-maternelle</li>
            </ul>
            
            <p className="mb-4 mt-6">
              <strong>3. Numération Formule Sanguine (NFS):</strong>
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Dépistage d'anémies</li>
              <li>Évaluation de l'immunité</li>
              <li>Détection de troubles hématologiques</li>
            </ul>
            
            <p className="mb-4 mt-6">
              <strong>4. Électrophorèse de l'hémoglobine:</strong>
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Dépistage de la drépanocytose</li>
              <li>Détection des thalassémies</li>
              <li>Important dans les régions à risque</li>
            </ul>
            
            <p className="mb-4 mt-6">
              <strong>5. Glycémie:</strong>
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Dépistage du diabète</li>
              <li>Important avant une grossesse</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Pour les femmes spécifiquement</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>Frottis cervico-vaginal (si activité sexuelle)</li>
              <li>Dosage de la TSH (thyroïde)</li>
              <li>Bilan hormonal si nécessaire</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Quand effectuer ce bilan?</h2>
            <p className="mb-4">
              Idéalement, le bilan prénuptial devrait être effectué:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>3 à 6 mois avant le mariage</li>
              <li>Cela laisse le temps pour des vaccinations si nécessaires</li>
              <li>Permet une prise en charge en cas d'anomalie détectée</li>
              <li>Donne le temps pour un conseil génétique si requis</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Confidentialité</h2>
            <p className="mb-4">
              Les résultats du bilan prénuptial sont strictement confidentiels. Chaque personne reçoit 
              ses propres résultats et décide de les partager ou non avec son futur conjoint. 
              Cette confidentialité est essentielle pour respecter la vie privée de chacun.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Après le bilan</h2>
            <p className="mb-4">
              En fonction des résultats:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Des vaccinations peuvent être recommandées</li>
              <li>Un suivi médical peut être mis en place</li>
              <li>Un conseil génétique peut être proposé</li>
              <li>Des traitements préventifs peuvent être prescrits</li>
            </ul>
            
            <div className="bg-primary/10 p-6 rounded-lg mt-8">
              <h3 className="text-xl font-bold mb-2">Planifiez votre bilan prénuptial</h3>
              <p className="mb-4">
                Notre laboratoire propose des bilans prénuptiaux complets avec conseil médical personnalisé.
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

export default BilanPrenuptial;
