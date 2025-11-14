import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { Link } from "react-router-dom";

const TestsCovid19 = () => {
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
          
          <Badge className="mb-4">Virologie</Badge>
          
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Tests COVID-19: PCR vs Antigénique
          </h1>
          
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-8">
            <div className="flex items-center gap-2">
              <User size={16} />
              <span>Dr. Amina Benali</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>28 Novembre 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span>11 min de lecture</span>
            </div>
          </div>
          
          <img
            src="/placeholder.svg"
            alt="Tests COVID-19"
            className="w-full h-[400px] object-cover rounded-lg mb-8"
          />
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground mb-6">
              Face au COVID-19, plusieurs types de tests sont disponibles. Découvrez leurs différences, 
              avantages et quand utiliser chacun d'eux.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Les différents types de tests</h2>
            <p className="mb-4">
              Il existe principalement trois catégories de tests pour le COVID-19:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Tests virologiques:</strong> Détectent la présence du virus (PCR, antigénique)</li>
              <li><strong>Tests sérologiques:</strong> Détectent les anticorps (après infection ou vaccination)</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Test PCR (RT-PCR)</h2>
            
            <p className="mb-4 mt-6">
              <strong>Comment ça marche?</strong>
            </p>
            <p className="mb-4">
              Le test PCR (Polymerase Chain Reaction) détecte le matériel génétique (ARN) du virus SARS-CoV-2. 
              Il amplifie des fragments d'ARN viral pour les rendre détectables.
            </p>
            
            <p className="mb-4 mt-6">
              <strong>Prélèvement:</strong>
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Écouvillon nasopharyngé (profond dans le nez)</li>
              <li>Parfois: prélèvement salivaire</li>
            </ul>
            
            <p className="mb-4 mt-6">
              <strong>Avantages:</strong>
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Très haute sensibilité (détecte même de faibles quantités de virus)</li>
              <li>Test de référence, le plus fiable</li>
              <li>Détecte l'infection précocement</li>
              <li>Peut identifier les variants</li>
            </ul>
            
            <p className="mb-4 mt-6">
              <strong>Inconvénients:</strong>
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Résultats en 24-48 heures généralement</li>
              <li>Nécessite un laboratoire équipé</li>
              <li>Plus coûteux</li>
              <li>Prélèvement parfois inconfortable</li>
            </ul>
            
            <p className="mb-4 mt-6">
              <strong>Quand utiliser le PCR?</strong>
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Symptômes de COVID-19</li>
              <li>Contact avec un cas confirmé</li>
              <li>Avant une hospitalisation</li>
              <li>Test de confirmation après un test antigénique positif</li>
              <li>Voyages internationaux nécessitant un PCR</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Test Antigénique (TDR/TAG)</h2>
            
            <p className="mb-4 mt-6">
              <strong>Comment ça marche?</strong>
            </p>
            <p className="mb-4">
              Le test antigénique détecte les protéines du virus (antigènes) présentes dans les sécrétions 
              nasales. C'est un test immunologique rapide.
            </p>
            
            <p className="mb-4 mt-6">
              <strong>Prélèvement:</strong>
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Écouvillon nasal (moins profond que le PCR)</li>
            </ul>
            
            <p className="mb-4 mt-6">
              <strong>Avantages:</strong>
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Résultats en 15-30 minutes</li>
              <li>Moins coûteux</li>
              <li>Ne nécessite pas de laboratoire spécialisé</li>
              <li>Prélèvement moins inconfortable</li>
              <li>Idéal pour dépistage de masse</li>
            </ul>
            
            <p className="mb-4 mt-6">
              <strong>Inconvénients:</strong>
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Moins sensible que le PCR (surtout en début d'infection)</li>
              <li>Peut donner des faux négatifs si charge virale faible</li>
              <li>Nécessite confirmation par PCR en cas de doute</li>
            </ul>
            
            <p className="mb-4 mt-6">
              <strong>Quand utiliser l'antigénique?</strong>
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Dépistage rapide en cas de symptômes récents</li>
              <li>Contact récent avec un cas positif</li>
              <li>Avant un événement ou rassemblement</li>
              <li>Dépistage en entreprise ou école</li>
              <li>Quand un résultat rapide est nécessaire</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Test Sérologique</h2>
            
            <p className="mb-4 mt-6">
              <strong>Comment ça marche?</strong>
            </p>
            <p className="mb-4">
              Détecte les anticorps (IgM, IgG) produits par le système immunitaire en réponse au virus.
            </p>
            
            <p className="mb-4 mt-6">
              <strong>Prélèvement:</strong>
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Prise de sang</li>
            </ul>
            
            <p className="mb-4 mt-6">
              <strong>Utilité:</strong>
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Savoir si vous avez été infecté par le passé</li>
              <li>Évaluer la réponse immunitaire post-vaccination</li>
              <li>Études épidémiologiques</li>
            </ul>
            
            <p className="mb-4 mt-6">
              <strong>Limites:</strong>
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Ne détecte pas une infection en cours</li>
              <li>Les anticorps n'apparaissent qu'après 1-2 semaines</li>
              <li>Ne convient pas pour le diagnostic aigu</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Tableau comparatif</h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2">Critère</th>
                    <th className="text-left p-2">PCR</th>
                    <th className="text-left p-2">Antigénique</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-2">Délai de résultat</td>
                    <td className="p-2">24-48h</td>
                    <td className="p-2">15-30 min</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Sensibilité</td>
                    <td className="p-2">Très élevée</td>
                    <td className="p-2">Moyenne</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Coût</td>
                    <td className="p-2">Plus élevé</td>
                    <td className="p-2">Moins cher</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Usage</td>
                    <td className="p-2">Diagnostic confirmé</td>
                    <td className="p-2">Dépistage rapide</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Interpréter les résultats</h2>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Positif:</strong> Infection active confirmée. Isolement requis.</li>
              <li><strong>Négatif:</strong> Pas d'infection détectée. Attention aux faux négatifs si test trop précoce.</li>
              <li><strong>Douteux/Invalide:</strong> Test à refaire.</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Recommandations</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>Privilégier le PCR en cas de symptômes ou contact à risque</li>
              <li>L'antigénique convient pour un dépistage rapide</li>
              <li>Ne pas négliger les gestes barrières même avec un test négatif</li>
              <li>En cas de doute, consulter un professionnel de santé</li>
            </ul>
            
            <div className="bg-primary/10 p-6 rounded-lg mt-8">
              <h3 className="text-xl font-bold mb-2">Besoin d'un test COVID-19?</h3>
              <p className="mb-4">
                Notre laboratoire propose les tests PCR et antigéniques avec résultats rapides.
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

export default TestsCovid19;
