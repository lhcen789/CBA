import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { Link } from "react-router-dom";

const FertiliteAnalysesEssentielles = () => {
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
          
          <Badge className="mb-4">Hormonologie</Badge>
          
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Fertilité: Les Analyses Essentielles
          </h1>
          
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-8">
            <div className="flex items-center gap-2">
              <User size={16} />
              <span>Dr. Karim Alami</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>25 Novembre 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span>6 min de lecture</span>
            </div>
          </div>
          
          <img
            src="/placeholder.svg"
            alt="Analyses de fertilité"
            className="w-full h-[400px] object-cover rounded-lg mb-8"
          />
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground mb-6">
              Pour les couples souhaitant concevoir, certaines analyses peuvent aider à évaluer la fertilité 
              et identifier d'éventuels obstacles à la conception.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Quand consulter pour un bilan de fertilité?</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>Après 12 mois de rapports réguliers sans contraception (femme &lt; 35 ans)</li>
              <li>Après 6 mois (femme &gt; 35 ans)</li>
              <li>Antécédents médicaux pouvant affecter la fertilité</li>
              <li>Cycles menstruels irréguliers</li>
              <li>Fausses couches répétées</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Bilan de fertilité féminine</h2>
            
            <p className="mb-4 mt-6">
              <strong>1. Bilan hormonal de base (J2-J4 du cycle):</strong>
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>FSH (Hormone Folliculo-Stimulante):</strong> Évalue la réserve ovarienne
                <ul className="list-circle pl-6">
                  <li>Normal: &lt; 10 UI/L</li>
                  <li>Élevé: réserve ovarienne diminuée</li>
                </ul>
              </li>
              <li><strong>LH (Hormone Lutéinisante):</strong> Contrôle l'ovulation
                <ul className="list-circle pl-6">
                  <li>Ratio LH/FSH important</li>
                  <li>Élevé dans le SOPK (Syndrome des Ovaires Polykystiques)</li>
                </ul>
              </li>
              <li><strong>Œstradiol (E2):</strong> Hormone ovarienne principale
                <ul className="list-circle pl-6">
                  <li>Évalue la fonction ovarienne</li>
                </ul>
              </li>
              <li><strong>Prolactine:</strong> Hormone de la lactation
                <ul className="list-circle pl-6">
                  <li>Si élevée: peut bloquer l'ovulation</li>
                </ul>
              </li>
              <li><strong>TSH:</strong> Hormone thyroïdienne
                <ul className="list-circle pl-6">
                  <li>Dysfonction thyroïdienne affecte la fertilité</li>
                </ul>
              </li>
            </ul>
            
            <p className="mb-4 mt-6">
              <strong>2. Hormone anti-Müllérienne (AMH):</strong>
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Marqueur de la réserve ovarienne</li>
              <li>Peut être dosée n'importe quel jour du cycle</li>
              <li>Valeurs normales: 1-3 ng/mL</li>
              <li>Basse: réserve ovarienne diminuée</li>
            </ul>
            
            <p className="mb-4 mt-6">
              <strong>3. Progestérone (J21 du cycle):</strong>
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Confirme l'ovulation</li>
              <li>Valeur &gt; 3 ng/mL: ovulation confirmée</li>
            </ul>
            
            <p className="mb-4 mt-6">
              <strong>4. Autres examens:</strong>
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Échographie pelvienne (compte des follicules antraux)</li>
              <li>Hystérosalpingographie (perméabilité des trompes)</li>
              <li>Glycémie et insuline (si SOPK suspecté)</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Bilan de fertilité masculine</h2>
            
            <p className="mb-4 mt-6">
              <strong>1. Spermogramme (examen principal):</strong>
            </p>
            <p className="mb-4">
              Analyse du sperme évaluant:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Volume:</strong> &gt; 1,5 mL</li>
              <li><strong>Concentration:</strong> &gt; 15 millions/mL</li>
              <li><strong>Mobilité:</strong> &gt; 40% de spermatozoïdes mobiles</li>
              <li><strong>Morphologie:</strong> &gt; 4% de formes normales</li>
              <li><strong>Vitalité:</strong> &gt; 58% de spermatozoïdes vivants</li>
            </ul>
            
            <p className="mb-4 mt-6">
              <strong>Conditions du prélèvement:</strong>
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Abstinence de 2-7 jours</li>
              <li>Recueil au laboratoire ou à domicile (délai &lt; 1h, T° 20-37°C)</li>
              <li>Répéter si résultats anormaux (1-3 mois d'intervalle)</li>
            </ul>
            
            <p className="mb-4 mt-6">
              <strong>2. Bilan hormonal masculin (si spermogramme anormal):</strong>
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Testostérone:</strong> Hormone masculine principale</li>
              <li><strong>FSH et LH:</strong> Évaluent la fonction testiculaire</li>
              <li><strong>Prolactine:</strong> Si élevée, peut affecter la production de spermatozoïdes</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Bilan du couple</h2>
            
            <p className="mb-4 mt-6">
              <strong>Tests communs:</strong>
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Sérologies infectieuses:</strong>
                <ul className="list-circle pl-6">
                  <li>VIH, Hépatite B et C</li>
                  <li>Syphilis</li>
                  <li>Rubéole (pour la femme)</li>
                  <li>Toxoplasmose (pour la femme)</li>
                </ul>
              </li>
              <li><strong>Groupe sanguin et rhésus:</strong> Important pour prévenir incompatibilité</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Causes fréquentes d'infertilité</h2>
            
            <p className="mb-4 mt-6">
              <strong>Chez la femme:</strong>
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Troubles de l'ovulation (SOPK, insuffisance ovarienne)</li>
              <li>Obstruction des trompes</li>
              <li>Endométriose</li>
              <li>Fibromes utérins</li>
              <li>Âge (réserve ovarienne diminue après 35 ans)</li>
            </ul>
            
            <p className="mb-4 mt-6">
              <strong>Chez l'homme:</strong>
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Oligospermie (concentration basse)</li>
              <li>Asthénospermie (mobilité réduite)</li>
              <li>Tératospermie (formes anormales)</li>
              <li>Varicocèle</li>
              <li>Infections</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Conseils pour optimiser la fertilité</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>Maintenir un poids santé (IMC 20-25)</li>
              <li>Alimentation équilibrée riche en antioxydants</li>
              <li>Arrêter le tabac et limiter l'alcool</li>
              <li>Activité physique régulière modérée</li>
              <li>Gérer le stress</li>
              <li>Éviter l'exposition à la chaleur excessive (hommes)</li>
              <li>Rapports réguliers pendant la période fertile</li>
              <li>Supplémentation en acide folique (femmes)</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Quand envisager la PMA?</h2>
            <p className="mb-4">
              La Procréation Médicalement Assistée peut être proposée:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Après échec de conception naturelle malgré traitements</li>
              <li>Obstruction tubaire bilatérale</li>
              <li>Infertilité masculine sévère</li>
              <li>Endométriose sévère</li>
              <li>Âge maternel avancé</li>
            </ul>
            
            <div className="bg-primary/10 p-6 rounded-lg mt-8">
              <h3 className="text-xl font-bold mb-2">Bilan de fertilité complet</h3>
              <p className="mb-4">
                Notre laboratoire propose tous les examens nécessaires au bilan de fertilité avec accompagnement personnalisé.
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

export default FertiliteAnalysesEssentielles;
