import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { Link } from "react-router-dom";

const PreventionInfectionsUrinaires = () => {
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
          
          <Badge className="mb-4">Microbiologie</Badge>
          
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Prévention des Infections Urinaires
          </h1>
          
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-8">
            <div className="flex items-center gap-2">
              <User size={16} />
              <span>Dr. Hassan Idrissi</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>8 Décembre 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span>5 min de lecture</span>
            </div>
          </div>
          
          <img
            src="/placeholder.svg"
            alt="Infections urinaires"
            className="w-full h-[400px] object-cover rounded-lg mb-8"
          />
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground mb-6">
              Les infections urinaires sont fréquentes, surtout chez les femmes. Découvrez comment les prévenir 
              et l'importance de l'ECBU pour un diagnostic rapide.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Qu'est-ce qu'une infection urinaire?</h2>
            <p className="mb-4">
              Une infection urinaire (IU) est une infection qui peut toucher n'importe quelle partie du système urinaire: 
              reins, uretères, vessie ou urètre. La plupart des infections touchent les voies urinaires inférieures 
              (vessie et urètre).
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Symptômes courants</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>Besoin fréquent et urgent d'uriner</li>
              <li>Sensation de brûlure lors de la miction</li>
              <li>Urine trouble ou malodorante</li>
              <li>Présence de sang dans les urines</li>
              <li>Douleur pelvienne chez les femmes</li>
              <li>Fièvre (si l'infection atteint les reins)</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Conseils de prévention</h2>
            <p className="mb-4">
              <strong>1. Hydratation:</strong>
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Buvez au moins 1,5 à 2 litres d'eau par jour</li>
              <li>L'eau aide à éliminer les bactéries de l'appareil urinaire</li>
            </ul>
            
            <p className="mb-4 mt-6">
              <strong>2. Hygiène personnelle:</strong>
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Essuyez-vous toujours d'avant en arrière après être allé aux toilettes</li>
              <li>Prenez une douche plutôt qu'un bain</li>
              <li>Nettoyez la zone génitale avant les rapports sexuels</li>
              <li>Urinez après les rapports sexuels</li>
            </ul>
            
            <p className="mb-4 mt-6">
              <strong>3. Habitudes urinaires:</strong>
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>N'attendez pas pour aller aux toilettes</li>
              <li>Videz complètement votre vessie</li>
              <li>Évitez de vous retenir trop longtemps</li>
            </ul>
            
            <p className="mb-4 mt-6">
              <strong>4. Vêtements:</strong>
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Portez des sous-vêtements en coton</li>
              <li>Évitez les pantalons trop serrés</li>
              <li>Changez rapidement de maillot de bain mouillé</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">L'ECBU: Examen clé</h2>
            <p className="mb-4">
              L'Examen Cytobactériologique des Urines (ECBU) est l'analyse de référence pour diagnostiquer 
              une infection urinaire. Il permet de:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Identifier la bactérie responsable de l'infection</li>
              <li>Déterminer l'antibiotique le plus efficace</li>
              <li>Confirmer la guérison après traitement</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Quand consulter?</h2>
            <p className="mb-4">
              Consultez immédiatement si vous présentez:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Fièvre élevée</li>
              <li>Douleurs lombaires intenses</li>
              <li>Nausées et vomissements</li>
              <li>Symptômes qui persistent malgré un traitement</li>
              <li>Infections urinaires récurrentes (plus de 3 par an)</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Facteurs de risque</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>Être une femme (urètre plus court)</li>
              <li>Activité sexuelle</li>
              <li>Ménopause</li>
              <li>Grossesse</li>
              <li>Diabète</li>
              <li>Calculs rénaux</li>
              <li>Système immunitaire affaibli</li>
            </ul>
            
            <div className="bg-primary/10 p-6 rounded-lg mt-8">
              <h3 className="text-xl font-bold mb-2">Suspicion d'infection urinaire?</h3>
              <p className="mb-4">
                Notre laboratoire réalise des ECBU avec résultats rapides pour un traitement adapté.
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

export default PreventionInfectionsUrinaires;
