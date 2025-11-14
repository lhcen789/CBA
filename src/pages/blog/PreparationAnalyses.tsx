import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { Link } from "react-router-dom";

const PreparationAnalyses = () => {
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
          
          <Badge className="mb-4">Conseils</Badge>
          
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Préparation aux Analyses: Conseils Pratiques
          </h1>
          
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-8">
            <div className="flex items-center gap-2">
              <User size={16} />
              <span>Dr. Hassan Idrissi</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>22 Novembre 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span>15 min de lecture</span>
            </div>
          </div>
          
          <img
            src="/placeholder.svg"
            alt="Préparation aux analyses"
            className="w-full h-[400px] object-cover rounded-lg mb-8"
          />
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground mb-6">
              Une bonne préparation avant une prise de sang est essentielle pour obtenir des résultats fiables. 
              Découvrez tous nos conseils pratiques.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Le jeûne: indispensable ou pas?</h2>
            
            <p className="mb-4 mt-6">
              <strong>Analyses nécessitant le jeûne (8-12 heures):</strong>
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Glycémie à jeun:</strong> Mesure du taux de sucre dans le sang</li>
              <li><strong>Bilan lipidique complet:</strong> Cholestérol, triglycérides, HDL, LDL</li>
              <li><strong>Insulinémie:</strong> Dosage de l'insuline</li>
              <li><strong>Vitamine B9 (folates):</strong> Pour certains laboratoires</li>
            </ul>
            
            <p className="mb-4 mt-6">
              <strong>Analyses ne nécessitant PAS de jeûne:</strong>
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Numération Formule Sanguine (NFS)</li>
              <li>Groupe sanguin</li>
              <li>Sérologies (VIH, hépatites, toxoplasmose, rubéole)</li>
              <li>Hormones thyroïdiennes (TSH, T3, T4)</li>
              <li>Créatinine et urée</li>
              <li>Enzymes hépatiques (ASAT, ALAT)</li>
              <li>CRP (protéine inflammatoire)</li>
              <li>La plupart des dosages hormonaux</li>
            </ul>
            
            <p className="mb-4 mt-6">
              <strong>Que signifie "à jeun"?</strong>
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Ne rien manger ni boire (sauf eau) pendant 8-12 heures</li>
              <li>L'eau plate est autorisée et même recommandée</li>
              <li>Pas de café, thé, jus de fruits, soda</li>
              <li>Pas de gommes à mâcher ni bonbons</li>
              <li>Médicaments: demander à votre médecin</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Le timing de la prise de sang</h2>
            
            <p className="mb-4 mt-6">
              <strong>Meilleur moment: le matin (7h-10h)</strong>
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Permet de respecter le jeûne sans trop de difficulté</li>
              <li>Certaines hormones varient selon l'heure (cortisol, testostérone)</li>
              <li>Résultats plus fiables</li>
            </ul>
            
            <p className="mb-4 mt-6">
              <strong>Analyses hormonales féminines:</strong>
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>J2-J5 du cycle:</strong> FSH, LH, œstradiol (bilan de base)</li>
              <li><strong>J21-J23:</strong> Progestérone (confirmation d'ovulation)</li>
              <li><strong>N'importe quand:</strong> AMH, prolactine, TSH</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Hydratation</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>Buvez suffisamment d'eau la veille et le matin du prélèvement</li>
              <li>L'hydratation facilite la prise de sang (veines plus visibles)</li>
              <li>Réduit le risque de malaise</li>
              <li>N'affecte pas les résultats</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Activité physique</h2>
            
            <p className="mb-4 mt-6">
              <strong>À éviter avant la prise de sang:</strong>
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Effort intense dans les 24 heures précédentes</li>
              <li>Sport intensif peut modifier:
                <ul className="list-circle pl-6">
                  <li>Enzymes musculaires (CPK)</li>
                  <li>Certaines enzymes hépatiques</li>
                  <li>Créatinine</li>
                  <li>Glycémie</li>
                </ul>
              </li>
              <li>Activité légère (marche) autorisée</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Médicaments et compléments</h2>
            
            <p className="mb-4 mt-6">
              <strong>Règle générale:</strong>
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Signaler TOUS vos traitements au laboratoire</li>
              <li>Ne jamais arrêter un traitement sans avis médical</li>
            </ul>
            
            <p className="mb-4 mt-6">
              <strong>Traitements chroniques:</strong>
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Généralement à prendre normalement</li>
              <li>Sauf indication contraire du médecin</li>
            </ul>
            
            <p className="mb-4 mt-6">
              <strong>Compléments alimentaires:</strong>
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Biotine (vitamine B8): peut fausser certains dosages hormonaux
                <ul className="list-circle pl-6">
                  <li>Arrêter 2-3 jours avant si possible</li>
                </ul>
              </li>
              <li>Vitamine C à haute dose: peut affecter glycémie</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Alcool et tabac</h2>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Alcool:</strong> Éviter 48 heures avant (surtout pour bilan hépatique)</li>
              <li><strong>Tabac:</strong> Ne pas fumer le matin du prélèvement
                <ul className="list-circle pl-6">
                  <li>Affecte la glycémie</li>
                  <li>Modifie certains paramètres</li>
                </ul>
              </li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">État émotionnel et stress</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>Le stress peut augmenter:
                <ul className="list-circle pl-6">
                  <li>Glycémie</li>
                  <li>Cortisol</li>
                  <li>Globules blancs</li>
                </ul>
              </li>
              <li>Essayez d'être détendu</li>
              <li>Arrivez quelques minutes en avance pour vous calmer</li>
              <li>Respirez calmement pendant le prélèvement</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Le jour J: checklist</h2>
            
            <p className="mb-4 mt-6">
              <strong>À apporter:</strong>
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Prescription médicale</li>
              <li>Carte d'identité</li>
              <li>Carte vitale et mutuelle</li>
              <li>Résultats d'analyses précédentes (si demandés)</li>
            </ul>
            
            <p className="mb-4 mt-6">
              <strong>Tenue vestimentaire:</strong>
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Portez des vêtements à manches larges ou courtes</li>
              <li>Facilite l'accès au bras</li>
              <li>Vêtements confortables</li>
            </ul>
            
            <p className="mb-4 mt-6">
              <strong>Position pendant le prélèvement:</strong>
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Asseyez-vous confortablement</li>
              <li>Ne croisez pas les jambes</li>
              <li>Détendez le bras</li>
              <li>Regardez ailleurs si vous êtes impressionnable</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Après le prélèvement</h2>
            
            <p className="mb-4 mt-6">
              <strong>Immédiatement après:</strong>
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Comprimez le point de ponction 5 minutes</li>
              <li>Gardez le pansement 1-2 heures</li>
              <li>Restez assis quelques minutes</li>
            </ul>
            
            <p className="mb-4 mt-6">
              <strong>Dans les heures suivantes:</strong>
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Évitez l'effort intense avec le bras ponctionné</li>
              <li>Mangez et hydratez-vous normalement</li>
              <li>Reprenez vos activités habituelles</li>
            </ul>
            
            <p className="mb-4 mt-6">
              <strong>Effets secondaires normaux:</strong>
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Petit hématome possible (appliquer du froid)</li>
              <li>Légère fatigue si jeûne prolongé</li>
            </ul>
            
            <p className="mb-4 mt-6">
              <strong>Quand s'inquiéter (rare):</strong>
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Malaise intense et prolongé</li>
              <li>Gonflement important du bras</li>
              <li>Saignement persistant</li>
              <li>Douleur intense</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Cas particuliers</h2>
            
            <p className="mb-4 mt-6">
              <strong>Femmes enceintes:</strong>
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Certaines analyses nécessitent des précisions (âge gestationnel)</li>
              <li>Signaler la grossesse</li>
            </ul>
            
            <p className="mb-4 mt-6">
              <strong>Diabétiques:</strong>
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Prendre son traitement selon indication du médecin</li>
              <li>Venir tôt le matin pour limiter le jeûne</li>
              <li>Avoir de quoi se resucrer si besoin</li>
            </ul>
            
            <p className="mb-4 mt-6">
              <strong>Enfants:</strong>
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Jeûne raccourci possible selon l'âge</li>
              <li>Préparer psychologiquement l'enfant</li>
              <li>Distraction pendant le prélèvement</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Analyses urinaires (ECBU)</h2>
            
            <p className="mb-4 mt-6">
              <strong>Préparation:</strong>
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Recueillir les urines du matin (plus concentrées)</li>
              <li>Toilette intime avant le recueil</li>
              <li>Recueillir le milieu du jet (pas le début ni la fin)</li>
              <li>Utiliser un flacon stérile fourni par le laboratoire</li>
              <li>Apporter rapidement au laboratoire (&lt; 2h)</li>
            </ul>
            
            <div className="bg-primary/10 p-6 rounded-lg mt-8">
              <h3 className="text-xl font-bold mb-2">Prêt pour vos analyses?</h3>
              <p className="mb-4">
                Notre laboratoire vous accueille pour tous vos examens. Notre équipe est là pour vous guider.
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

export default PreparationAnalyses;
