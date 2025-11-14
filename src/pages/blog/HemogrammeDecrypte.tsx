import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { Link } from "react-router-dom";

const HemogrammeDecrypte = () => {
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
          
          <Badge className="mb-4">Hématologie</Badge>
          
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            L'Hémogramme Décrypté
          </h1>
          
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-8">
            <div className="flex items-center gap-2">
              <User size={16} />
              <span>Dr. Hassan Idrissi</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>1 Décembre 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span>9 min de lecture</span>
            </div>
          </div>
          
          <img
            src="/placeholder.svg"
            alt="Hémogramme"
            className="w-full h-[400px] object-cover rounded-lg mb-8"
          />
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground mb-6">
              L'hémogramme, aussi appelé NFS (Numération Formule Sanguine), est l'analyse sanguine la plus prescrite. 
              Découvrez comment interpréter chaque paramètre.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Qu'est-ce qu'un hémogramme?</h2>
            <p className="mb-4">
              L'hémogramme est une analyse qui étudie les cellules du sang: globules rouges, globules blancs 
              et plaquettes. C'est un examen de routine qui donne des informations précieuses sur votre état de santé général.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Les globules rouges (érythrocytes)</h2>
            <p className="mb-4">
              <strong>Rôle:</strong> Transporter l'oxygène des poumons vers tous les organes.
            </p>
            
            <p className="mb-4 mt-6">
              <strong>Paramètres mesurés:</strong>
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Nombre de globules rouges:</strong> 4,5-5,5 millions/mm³ (hommes), 4-5 millions/mm³ (femmes)</li>
              <li><strong>Hémoglobine (Hb):</strong> 13-17 g/dL (hommes), 12-16 g/dL (femmes)</li>
              <li><strong>Hématocrite (Ht):</strong> 40-54% (hommes), 36-46% (femmes)</li>
              <li><strong>VGM (Volume Globulaire Moyen):</strong> 80-100 fL</li>
              <li><strong>TCMH (Teneur Corpusculaire Moyenne en Hémoglobine):</strong> 27-32 pg</li>
              <li><strong>CCMH (Concentration Corpusculaire Moyenne en Hémoglobine):</strong> 32-36 g/dL</li>
            </ul>
            
            <p className="mb-4 mt-6">
              <strong>Anomalies courantes:</strong>
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Anémie:</strong> Diminution du nombre de globules rouges ou d'hémoglobine</li>
              <li><strong>Polyglobulie:</strong> Augmentation du nombre de globules rouges</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Les globules blancs (leucocytes)</h2>
            <p className="mb-4">
              <strong>Rôle:</strong> Défendre l'organisme contre les infections.
            </p>
            
            <p className="mb-4 mt-6">
              <strong>Nombre total:</strong> 4000-10000/mm³
            </p>
            
            <p className="mb-4 mt-6">
              <strong>Formule leucocytaire (répartition des différents types):</strong>
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Neutrophiles:</strong> 40-75% (1800-7500/mm³) - Combattent les infections bactériennes</li>
              <li><strong>Lymphocytes:</strong> 20-40% (1000-4000/mm³) - Immunité spécifique, combattent virus</li>
              <li><strong>Monocytes:</strong> 2-10% (200-1000/mm³) - Phagocytose, défense générale</li>
              <li><strong>Éosinophiles:</strong> 1-6% (50-500/mm³) - Allergies et parasites</li>
              <li><strong>Basophiles:</strong> 0-2% (25-100/mm³) - Réactions allergiques</li>
            </ul>
            
            <p className="mb-4 mt-6">
              <strong>Anomalies courantes:</strong>
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Leucocytose:</strong> Augmentation des globules blancs (infection, inflammation)</li>
              <li><strong>Leucopénie:</strong> Diminution des globules blancs (immunodépression)</li>
              <li><strong>Neutropénie:</strong> Baisse des neutrophiles (risque d'infections)</li>
              <li><strong>Lymphocytose:</strong> Augmentation des lymphocytes (infection virale)</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Les plaquettes (thrombocytes)</h2>
            <p className="mb-4">
              <strong>Rôle:</strong> Coagulation du sang et arrêt des saignements.
            </p>
            
            <p className="mb-4 mt-6">
              <strong>Paramètres:</strong>
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Nombre de plaquettes:</strong> 150000-400000/mm³</li>
              <li><strong>VMP (Volume Plaquettaire Moyen):</strong> 7-11 fL</li>
            </ul>
            
            <p className="mb-4 mt-6">
              <strong>Anomalies:</strong>
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Thrombopénie:</strong> Diminution des plaquettes (risque de saignements)</li>
              <li><strong>Thrombocytose:</strong> Augmentation des plaquettes (risque de thrombose)</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Causes des anomalies</h2>
            
            <p className="mb-4 mt-6">
              <strong>Anémie peut être due à:</strong>
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Carence en fer (anémie ferriprive)</li>
              <li>Carence en vitamine B12 ou folates</li>
              <li>Saignements chroniques</li>
              <li>Maladies chroniques (rein, foie)</li>
              <li>Maladies hématologiques</li>
            </ul>
            
            <p className="mb-4 mt-6">
              <strong>Augmentation des globules blancs peut indiquer:</strong>
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Infection bactérienne ou virale</li>
              <li>Inflammation</li>
              <li>Stress physique intense</li>
              <li>Prise de certains médicaments</li>
              <li>Rarement: leucémie</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Préparation à l'examen</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>Généralement pas de jeûne nécessaire</li>
              <li>Venir de préférence le matin</li>
              <li>Éviter l'effort intense avant le prélèvement</li>
              <li>Signaler tout traitement en cours</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Quand répéter un hémogramme?</h2>
            <p className="mb-4">
              Un contrôle peut être nécessaire:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Pour suivre l'évolution d'une anomalie</li>
              <li>Après un traitement</li>
              <li>En cas de symptômes persistants (fatigue, infections répétées)</li>
              <li>Bilan de routine annuel</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
            <p className="mb-4">
              L'hémogramme est un examen simple mais très informatif. Une anomalie ne signifie pas forcément 
              une maladie grave. Seul votre médecin peut interpréter les résultats en fonction de votre 
              contexte clinique global.
            </p>
            
            <div className="bg-primary/10 p-6 rounded-lg mt-8">
              <h3 className="text-xl font-bold mb-2">Besoin d'un hémogramme?</h3>
              <p className="mb-4">
                Notre laboratoire réalise des hémogrammes complets avec résultats rapides et fiables.
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

export default HemogrammeDecrypte;
