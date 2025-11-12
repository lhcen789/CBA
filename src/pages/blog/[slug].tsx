import { useParams, Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Clock, User, Share2, Facebook, Twitter, Linkedin } from "lucide-react";

// Données des articles de blog - Dans une application réelle, cela viendrait d'une API ou d'un CMS
const blogPosts = {
  "depistage-precoce-diabete": {
    title: "L'importance du Dépistage Précoce du Diabète",
    content: [
      "Le diabète est une maladie chronique qui touche des millions de personnes dans le monde. Le dépistage précoce est essentiel pour prévenir les complications graves telles que les maladies cardiovasculaires, les lésions nerveuses et les problèmes rénaux.",
      "## Comprendre le diabète",
      "Le diabète se caractérise par un excès de sucre dans le sang (hyperglycémie). Il existe principalement deux types :",
      "- **Diabète de type 1** : Maladie auto-immune qui apparaît généralement pendant l'enfance ou l'adolescence",
      "- **Diabète de type 2** : Plus fréquent, souvent lié au mode de vie et à des facteurs héréditaires",
      "## Pourquoi le dépistage précoce est-il important ?",
      "Un diagnostic précoce permet de :",
      "- **Prévenir les complications** : Rétinopathie, néphropathie, neuropathie",
      "- **Mettre en place un traitement adapté** rapidement",
      "- **Éviter les urgences** comme l'acidocétose ou le coma hyperosmolaire",
      "- **Améliorer la qualité de vie** grâce à une prise en charge précoce",
      "## Les tests de dépistage",
      "1. **Glycémie à jeun** : Mesure du taux de sucre après 8h de jeûne",
      "2. **HGPO** (Hyperglycémie Provoquée par Voie Orale) : Test de tolérance au glucose",
      "3. **Hémoglobine glyquée (HbA1c)** : Bilan de la glycémie sur 3 mois",
      "4. **Glycémie post-prandiale** : Mesure 2h après un repas",
      "## Facteurs de risque",
      "- **Antécédents familiaux** de diabète",
      "- **Surpoids/obésité** (IMC > 25)",
      "- **Sédentarité** et manque d'activité physique",
      "- **Âge** > 45 ans",
      "- **Hypertension artérielle** (> 140/90 mmHg)",
      "- **Syndrome des ovaires polykystiques** chez la femme",
      "## Prévention",
      "- **Alimentation équilibrée** : Privilégier les fibres, limiter les sucres rapides",
      "- **Activité physique** : 30 minutes par jour minimum",
      "- **Contrôle du poids** : Maintenir un IMC entre 18.5 et 25",
      "- **Arrêt du tabac** : Le tabagisme augmente les risques",
      "- **Surveillance médicale** : Bilan annuel après 40 ans",
      "## Traitement",
      "- **Diabète de type 1** : Insulinothérapie à vie",
      "- **Diabète de type 2** : Mesures hygiéno-diététiques d'abord, puis médicaments si nécessaire",
      "- **Suivi régulier** par un diabétologue",
      "- **Auto-surveillance glycémique** pour adapter le traitement"
    ],
    category: "Prévention",
    date: "15 Décembre 2024",
    readTime: "12 min de lecture",
    author: "Dr. Amina Benali",
    image: "/placeholder.svg",
    tags: ["Diabète", "Prévention", "Dépistage", "Santé"]
  },
  "comprendre-analyses-sanguines": {
    title: "Comprendre vos Résultats d'Analyses Sanguines",
    content: [
      "Vos résultats d'analyses sanguines contiennent de nombreuses informations importantes sur votre santé. Ce guide complet vous aidera à décrypter les principaux paramètres et leur signification.",
      "## La Numération Formule Sanguine (NFS)",
      "### Hémogramme",
      "- **Hémoglobine** : 13-17 g/dL (H), 12-16 g/dL (F) - Transporte l'oxygène dans le sang",
      "- **Hématocrite** : 40-52% (H), 36-48% (F) - Pourcentage de globules rouges",
      "- **Plaquettes** : 150 000-400 000/mm³ - Essentielles pour la coagulation",
      "- **Leucocytes** : 4 000-10 000/mm³ - Défenses immunitaires",
      "## Bilan lipidique",
      "- **Cholestérol total** : < 2 g/L - À interpréter avec HDL et LDL",
      "- **HDL** : > 0.4 g/L (H), > 0.5 g/L (F) - Le 'bon' cholestérol",
      "- **LDL** : < 1.6 g/L - Le 'mauvais' cholestérol",
      "- **Triglycérides** : < 1.5 g/L - Stockage des graisses",
      "## Bilan hépatique",
      "- **Transaminases** (TGO/TGP) : < 40 UI/L - Marquers de l'état du foie",
      "- **Gamma-GT** : < 45 UI/L (H), < 35 UI/L (F) - Foie et voies biliaires",
      "- **Bilirubine** : < 17 µmol/L - Élimination des globules rouges",
      "- **PAL** (Phosphatases alcalines) : 30-130 UI/L - Foie et os",
      "## Bilan rénal",
      "- **Créatinine** : 6-12 mg/L (H), 4-10 mg/L (F) - Fonction rénale",
      "- **Urée** : 0.15-0.45 g/L - Élimination des protéines",
      "- **DFG** (Débit de Filtration Glomérulaire) : > 90 mL/min - Fonction rénale globale",
      "## Autres marqueurs importants",
      "- **Glycémie** : 0.70-1.10 g/L - Taux de sucre dans le sang",
      "- **CRP** : < 6 mg/L - Marqueur d'inflammation",
      "- **Fer sérique** : 11-30 µmol/L (H), 9-27 µmol/L (F)",
      "- **Vitamine D** : 75-250 nmol/L - Santé osseuse et immunité",
      "## Comment interpréter vos résultats",
      "1. **Contexte clinique** : Les résultats doivent être interprétés par un médecin",
      "2. **Valeurs de référence** : Varient selon les laboratoires",
      "3. **Évolution** : Comparaison avec les bilans précédents",
      "4. **Signes cliniques** : Les symptômes du patient sont essentiels",
      "## Quand s'inquiéter ?",
      "- **Valeurs très éloignées** des normes",
      "- **Symptômes associés** (fatigue, douleurs, fièvre...)",
      "- **Évolution défavorable** sur plusieurs bilans",
      "## Conseils avant une prise de sang",
      "- Être à jeun depuis 12h (sauf avis contraire)",
      "- Éviter les efforts intenses la veille",
      "- Prévenir des traitements en cours",
      "- Rester détendu pour éviter le stress"
    ],
    category: "Éducation",
    date: "12 Décembre 2024",
    readTime: "15 min de lecture",
    author: "Dr. Karim Alami",
    image: "/placeholder.svg",
    tags: ["Analyses sanguines", "NFS", "Bilan lipidique", "Santé"]
  },
  "bilan-thyroidien-quand-pourquoi": {
    title: "Le Bilan Thyroïdien: Quand et Pourquoi?",
    content: [
      "La thyroïde est une petite glande en forme de papillon située à la base du cou qui joue un rôle essentiel dans la régulation de nombreuses fonctions de l'organisme. Un bilan thyroïdien permet de détecter d'éventuels dysfonctionnements.",
      "## Les hormones thyroïdiennes",
      "- **TSH** (Thyréostimuline) : 0.4-4 mUI/L - Régule la production des hormones",
      "- **T4 libre** (Thyroxine) : 9-19 pmol/L - Forme inactive de l'hormone",
      "- **T3 libre** (Triiodothyronine) : 3-8 pmol/L - Forme active de l'hormone",
      "## Quand faire un bilan thyroïdien ?",
      "### Signes d'hypothyroïdie",
      "- Fatigue persistante et manque d'énergie",
      "- Prise de poids inexpliquée",
      "- Frilosité excessive",
      "- Ralentissement du rythme cardiaque",
      "- Constipation",
      "- Peau sèche et cheveux cassants",
      "- Dépression",
      "### Signes d'hyperthyroïdie",
      "- Perte de poids rapide",
      "- Nervosité et irritabilité",
      "- Palpitations et tachycardie",
      "- Transpiration excessive",
      "- Tremblements des mains",
      "- Troubles du sommeil",
      "- Yeux qui ressortent (exophtalmie)",
      "## Comment se déroule l'examen ?",
      "1. **Prise de sang** à jeun de préférence",
      "2. Pas de préparation particulière nécessaire",
      "3. Résultats généralement disponibles sous 24-48h",
      "## Interprétation des résultats",
      "### Hypothyroïdie",
      "- **TSH élevée** (> 4 mUI/L)",
      "- **T4 libre basse**",
      "- **Anticorps anti-TPO** positifs en cas de maladie d'Hashimoto",
      "### Hyperthyroïdie",
      "- **TSH basse** (< 0.4 mUI/L)",
      "- **T4 libre et/ou T3 élevées**",
      "- **Anticorps anti-récepteurs de la TSH** positifs en cas de maladie de Basedow",
      "## Traitements",
      "### Pour l'hypothyroïdie",
      "- **Lévothyroxine** (hormone de substitution)",
      "- Contrôle régulier de la TSH",
      "- Ajustement des doses si nécessaire",
      "### Pour l'hyperthyroïdie",
      "- **Antithyroïdiens de synthèse**",
      "- Traitement par iode radioactif",
      "- Chirurgie dans certains cas",
      "## Suivi",
      "- Bilan sanguin tous les 3 à 6 mois",
      "- Ajustement du traitement si nécessaire",
      "- Surveillance des complications éventuelles"
    ],
    category: "Endocrinologie",
    date: "10 Décembre 2024",
    readTime: "12 min de lecture",
    author: "Dr. Amina Benali",
    image: "/placeholder.svg",
    tags: ["Thyroïde", "Hormones", "Santé", "Médecine"]
  },
  "prevention-infections-urinaires": {
    title: "Prévention des Infections Urinaires",
    content: [
      "Les infections urinaires sont un problème de santé courant, particulièrement chez les femmes. Ce guide complet vous explique comment les prévenir et les traiter efficacement.",
      "## Comprendre les infections urinaires",
      "### Types d'infections",
      "- **Cystite** : Infection de la vessie (la plus fréquente)",
      "- **Pyélonéphrite** : Infection rénale (plus grave)",
      "- **Urétrite** : Infection de l'urètre",
      "### Symptômes courants",
      "- Besoin fréquent d'uriner",
      "- Brûlures mictionnelles",
      "- Urines troubles ou malodorantes",
      "- Douleurs pelviennes",
      "- Fièvre (en cas d'infection rénale)",
      "## Facteurs de risque",
      "- **Sexe féminin** : Urètre plus court",
      "- **Rapports sexuels** : Peuvent faciliter la remontée des bactéries",
      "- **Ménopause** : Baisse des œstrogènes",
      "- **Grossesse** : Changements hormonaux et pression sur la vessie",
      "- **Diabète** : Favorise les infections",
      "- **Calculs rénaux** : Obstruction des voies urinaires",
      "## Prévention",
      "### Hygiène intime",
      "- S'essuyer d'avant en arrière",
      "- Utiliser des produits d'hygiène doux",
      "- Éviter les douches vaginales",
      "- Porter des sous-vêtements en coton",
      "### Hydratation",
      "- Boire 1.5 à 2L d'eau par jour",
      "- Éviter l'alcool et le café en excès",
      "### Comportement",
      "- Ne pas se retenir d'uriner",
      "- Uriner après les rapports sexuels",
      "- Éviter les vêtements trop serrés",
      "## Traitement",
      "### Médicaments",
      "- **Antibiotiques** : Selon l'antibiogramme",
      "- **Antalgiques** : Pour la douleur",
      "- **Antispasmodiques** : Pour les douleurs vésicales",
      "### Remèdes naturels",
      "- **Canneberge** : Sous forme de jus ou de gélules",
      "- **D-mannose** : Sucre qui empêche l'adhésion des bactéries",
      "- **Probiotiques** : Pour rééquilibrer la flore",
      "## Quand consulter ?",
      "- Fièvre élevée",
      "- Douleurs dans le bas du dos",
      "- Sang dans les urines",
      "- Symptômes persistants plus de 48h",
      "- Infections à répétition (plus de 4 par an)",
      "## Examens complémentaires",
      "- **ECBU** : Examen cyto-bactériologique des urines",
      "- **Échographie** : Pour éliminer une cause anatomique",
      "- **Cystoscopie** : En cas de récidives fréquentes"
    ],
    category: "Urologie",
    date: "8 Décembre 2024",
    readTime: "10 min de lecture",
    author: "Dr. Hassan Idrissi",
    image: "/placeholder.svg",
    tags: ["Infections urinaires", "Prévention", "Santé féminine", "Médecine"]
  },
  "bilan-prenuptial": {
    title: "Le Bilan Prénuptial: Préparez votre Avenir",
    content: [
      "Le bilan prénuptial est un ensemble d'examens médicaux recommandés avant le mariage. Il permet de dépister d'éventuels problèmes de santé qui pourraient affecter le couple ou leur future descendance.",
      "## Pourquoi faire un bilan prénuptial ?",
      "- Dépister les maladies génétiques",
      "- Vérifier la compatibilité sanguine",
      "- Détecter les infections transmissibles",
      "- Évaluer l'état de santé général",
      "- Préparer une grossesse sereine",
      "## Examens inclus dans le bilan",
      "### Analyses sanguines",
      "- **Groupe sanguin et Rhésus** : Dépister les incompatibilités",
      "- **NFS** : Détecter une anémie ou infection",
      "- **Glycémie à jeun** : Dépister un diabète",
      "- **Bilan hépatique et rénal** : Évaluer la fonction des organes",
      "- **Sérologies infectieuses** : VIH, hépatites B et C, syphilis",
      "- **Dépistage de la thalassémie** : Dans les populations à risque",
      "### Examens spécifiques",
      "- **Frottis cervico-vaginal** : Pour la femme",
      "- **Spermogramme** : Pour l'homme (si désir de grossesse)",
      "- **Échographie pelvienne** : Si nécessaire",
      "- **Consultation génétique** : En cas d'antécédents familiaux",
      "## Dépistage des maladies génétiques",
      "### Drépanocytose",
      "- Fréquente en Afrique subsaharienne",
      "- Peut causer une anémie hémolytique",
      "### Thalassémie",
      "- Fréquente en Méditerranée, Moyen-Orient, Asie",
      "- Provoque une anémie sévère",
      "### Autres maladies",
      "- Mucoviscidose",
      "- Maladie de Tay-Sachs",
      "- Drépanocytose",
      "## Préparation à la grossesse",
      "### Pour la femme",
      "- Acide folique 3 mois avant la conception",
      "- Vaccination contre la rubéole si nécessaire",
      "- Équilibre des maladies chroniques",
      "### Pour l'homme",
      "- Arrêt du tabac et de l'alcool",
      "- Éviter les sources de chaleur excessive",
      "- Alimentation équilibrée",
      "## Conseils pour un mariage en bonne santé",
      "- Faire le bilan 3 à 6 mois avant le mariage",
      "- Discuter des résultats ensemble",
      "- Planifier les grossesses",
      "- Adopter un mode de vie sain",
      "## Aspects légaux",
      "- Le bilan est obligatoire dans certains pays",
      "- Confidentialité des résultats",
      "- Droit à l'information du partenaire"
    ],
    category: "Santé familiale",
    date: "5 Décembre 2024",
    readTime: "14 min de lecture",
    author: "Dr. Amina Benali",
    image: "/placeholder.svg",
    tags: ["Mariage", "Grossesse", "Santé familiale", "Prévention"]
  },
  "cholesterol-ami-ennemi": {
    title: "Cholestérol: Ami ou Ennemi?",
    content: [
      "Le cholestérol est une substance essentielle à l'organisme, mais en excès, il peut devenir dangereux. Ce guide complet vous aide à comprendre et à gérer votre cholestérol.",
      "## Comprendre le cholestérol",
      "### Rôle du cholestérol",
      "- Composant essentiel des membranes cellulaires",
      "- Précurseur des hormones stéroïdiennes",
      "- Nécessaire à la synthèse de la vitamine D",
      "- Composant des acides biliaires",
      "## Les différents types de cholestérol",
      "### LDL (Low-Density Lipoprotein)",
      "- Le 'mauvais' cholestérol",
      "- Transporte le cholestérol vers les tissus",
      "- Peut s'accumuler dans les artères",
      "- Valeur cible : < 1.6 g/L",
      "### HDL (High-Density Lipoprotein)",
      "- Le 'bon' cholestérol",
      "- Récupère l'excès de cholestérol",
      "- Protège les artères",
      "- Valeur cible : > 0.4 g/L (H), > 0.5 g/L (F)",
      "## Facteurs de risque",
      "### Non modifiables",
      "- Âge (risque accru après 50 ans)",
      "- Sexe (hommes plus à risque avant la ménopause)",
      "- Antécédents familiaux",
      "### Modifiables",
      "- Alimentation déséquilibrée",
      "- Surpoids et obésité",
      "- Sédentarité",
      "- Tabagisme",
      "- Diabète mal contrôlé",
      "## Conséquences d'un excès de cholestérol",
      "- **Athérosclérose** : Dépôts dans les artères",
      "- **Maladies cardiovasculaires** : Infarctus, AVC",
      "- **Artériopathie des membres inférieurs**",
      "- **Calculs biliaires**",
      "## Traitement",
      "### Mesures hygiéno-diététiques",
      "- Alimentation méditerranéenne",
      "- Activité physique régulière",
      "- Arrêt du tabac",
      "- Gestion du poids",
      "### Traitements médicamenteux",
      "- **Statines** : Réduisent la production de cholestérol",
      "- **Ézétimibe** : Diminue l'absorption intestinale",
      "- **Anti-PCSK9** : Pour les hypercholestérolémies familiales",
      "- **Résines** : Captent les acides biliaires",
      "## Alimentation et cholestérol",
      "### À privilégier",
      "- Poissons gras (saumon, maquereau, sardine)",
      "- Fruits et légumes",
      "- Céréales complètes",
      "- Huiles végétales (olive, colza, noix)",
      "- Fruits à coque (amandes, noix, noisettes)",
      "### À limiter",
      "- Charcuteries",
      "- Fromages gras",
      "- Viennoiseries",
      "- Plats industriels",
      "- Beurre et crème fraîche",
      "## Suivi médical",
      "- Bilan lipidique annuel",
      "- Surveillance des enzymes hépatiques sous traitement",
      "- Évaluation du risque cardiovasculaire global"
    ],
    category: "Cardiologie",
    date: "3 Décembre 2024",
    readTime: "13 min de lecture",
    author: "Dr. Karim Alami",
    image: "/placeholder.svg",
    tags: ["Cholestérol", "Santé cardiovasculaire", "Nutrition", "Médecine"]
  },
  "hemogramme-decrypte": {
    title: "L'Hémogramme Décrypté",
    content: [
      "L'hémogramme, aussi appelé numération formule sanguine (NFS), est l'un des examens biologiques les plus prescrits. Ce guide complet vous aide à comprendre chaque paramètre et son interprétation.",
      "## Les composants de l'hémogramme",
      "### Globules rouges (hématies)",
      "- **Rôle** : Transport de l'oxygène",
      "- **Valeurs normales** :",
      "  - Hommes : 4.5-5.9 millions/µL",
      "  - Femmes : 4.0-5.2 millions/µL",
      "- **Paramètres associés** :",
      "  - Hémoglobine (Hb) : 13-17 g/dL (H), 12-16 g/dL (F)",
      "  - Hématocrite (Ht) : 40-52% (H), 36-48% (F)",
      "  - VGM : 80-100 fL (volume globulaire moyen)",
      "  - CCMH : 32-36 g/dL (concentration corpusculaire moyenne en hémoglobine)",
      "### Globules blancs (leucocytes)",
      "- **Rôle** : Défense immunitaire",
      "- **Valeurs normales** : 4 000-10 000/µL",
      "- **Formule leucocytaire** :",
      "  - Polynucléaires neutrophiles : 40-75%",
      "  - Lymphocytes : 20-50%",
      "  - Monocytes : 2-10%",
      "  - Polynucléaires éosinophiles : 1-6%",
      "  - Polynucléaires basophiles : 0-2%",
      "### Plaquettes (thrombocytes)",
      "- **Rôle** : Coagulation sanguine",
      "- **Valeurs normales** : 150 000-400 000/µL",
      "- **Paramètres associés** :",
      "  - Volume plaquettaire moyen (VPM) : 7-11 fL",
      "  - PDW : 10-18% (hétérogénéité des plaquettes)",
      "## Interprétation des anomalies",
      "### Anémie (baisse des globules rouges)",
      "- **Causes possibles** :",
      "  - Carence en fer (anémie ferriprive)",
      "  - Carence en vitamine B12 ou folates",
      "  - Maladies chroniques",
      "  - Hémorragies",
      "  - Maladies de la moelle osseuse",
      "### Hyperleucocytose (augmentation des globules blancs)",
      "- **Causes possibles** :",
      "  - Infection bactérienne (neutrophiles ↑)",
      "  - Infection virale (lymphocytes ↑)",
      "  - Allergie (éosinophiles ↑)",
      "  - Leucémie (blastes anormaux)",
      "### Thrombopénie (baisse des plaquettes)",
      "- **Causes possibles** :",
      "  - Purpura thrombopénique immunologique",
      "  - Carence en vitamine B12 ou folates",
      "  - Certains médicaments",
      "  - Maladies de la moelle osseuse",
      "## Préparation à l'examen",
      "- **Prise de sang** : Généralement à jeun",
      "- **Heure du prélèvement** : Peut influencer certains paramètres",
      "- **Médicaments** : Signaler les traitements en cours",
      "## Limites de l'examen",
      "- Résultats à interpréter en fonction du contexte clinique",
      "- Variations normales selon l'âge et le sexe",
      "- Nécessité parfois d'examens complémentaires",
      "## Suivi et surveillance",
      "- Surveillance des traitements (chimiothérapie, carences...)",
      "- Bilan de santé annuel",
      "- Suivi des maladies chroniques"
    ],
    category: "Hématologie",
    date: "1 Décembre 2024",
    readTime: "15 min de lecture",
    author: "Dr. Hassan Idrissi",
    image: "/placeholder.svg",
    tags: ["Hémogramme", "Sang", "Analyses médicales", "Santé"]
  },
  "tests-covid": {
    title: "Tests COVID-19: PCR vs Antigénique",
    content: [
      "Avec la pandémie de COVID-19, les tests de dépistage sont devenus des outils essentiels. Ce guide compare les différents types de tests disponibles et leurs indications.",
      "## Les différents types de tests",
      "### Test PCR (RT-PCR)",
      "- **Principe** : Détection de l'ARN viral par amplification génique",
      "- **Prélèvement** : Écouvillon nasopharyngé",
      "- **Délai de résultat** : 24-48h",
      "- **Fiabilité** : Très élevée (étalon-or)",
      "- **Prix** : 40-70€ (remboursé sur ordonnance)",
      "### Test antigénique",
      "- **Principe** : Détection des protéines virales",
      "- **Prélèvement** : Écouvillon nasal ou nasopharyngé",
      "- **Délai de résultat** : 15-30 minutes",
      "- **Fiabilité** : Bonne en cas de symptômes",
      "- **Prix** : 20-45€ (remboursé sur ordonnance)",
      "### Autodiagnostic (TDR)",
      "- **Principe** : Détection d'antigènes",
      "- **Prélèvement** : Nasal (auto-prélèvement)",
      "- **Délai de résultat** : 15-30 minutes",
      "- **Fiabilité** : Moyenne (moins sensible)",
      "- **Prix** : 5-15€ (non remboursé)",
      "## Quand faire quel test ?",
      "### En cas de symptômes",
      "- **Test PCR** : Pour confirmation",
      "- **Test antigénique** : Si résultat rapide nécessaire",
      "### En cas de contact à risque",
      "- **Test PCR** : 2-4 jours après le contact",
      "- **Autotest** : Pour dépistage régulier",
      "### Pour un voyage",
      "- Vérifier les exigences du pays de destination",
      "- Privilégier la PCR pour plus de fiabilité",
      "## Interprétation des résultats",
      "### Test positif",
      "- Isolement immédiat",
      "- Déclaration aux autorités sanitaires",
      "- Surveillance des symptômes",
      "### Test négatif",
      "- Continuer les gestes barrières",
      "- Refaire un test si symptômes",
      "- Respecter les consignes sanitaires",
      "## Fiabilité et limites",
      "### Facteurs influençant la fiabilité",
      "- Qualité du prélèvement",
      "- Charge virale",
      "- Délai depuis la contamination",
      "- Respect du mode d'emploi",
      "### Faux négatifs",
      "- Test effectué trop tôt",
      "- Mauvaise technique de prélèvement",
      "- Charge virale trop faible",
      "## Conseils pratiques",
      "- Se faire tester dès l'apparition des symptômes",
      "- Respecter les gestes barrières en attendant les résultats",
      "- Se faire vacciner et faire les rappels",
      "- Consulter en cas de symptômes graves"
    ],
    category: "Virologie",
    date: "28 Novembre 2024",
    readTime: "12 min de lecture",
    author: "Dr. Amina Benali",
    image: "/placeholder.svg",
    tags: ["COVID-19", "Tests", "Santé publique", "Médecine"]
  },
  "fertilite-analyses-essentielles": {
    title: "Fertilité: Les Analyses Essentielles",
    content: [
      "L'évaluation de la fertilité est une étape importante pour les couples souhaitant concevoir un enfant. Ce guide détaille les examens essentiels pour évaluer la fertilité masculine et féminine.",
      "## Bilan de fertilité féminin",
      "### Bilan hormonal",
      "- **J2-J4 du cycle** :",
      "  - FSH (3-12 UI/L)",
      "  - LH (2-10 UI/L)",
      "  - Estradiol (20-150 pg/mL)",
      "  - Prolactine (< 25 ng/mL)",
      "- **J21 du cycle** : Progestérone (> 10 ng/mL)",
      "- **Autres dosages** :",
      "  - AMH (1-4 ng/mL) : Réserve ovarienne",
      "  - TSH : Fonction thyroïdienne",
      "  - Testostérone : En cas de signes d'hyperandrogénie",
      "### Examens complémentaires",
      "- **Échographie pelvienne** :",
      "  - Comptage des follicules antraux",
      "  - Recherche d'anomalies utérines ou ovariennes",
      "- **Hystérosalpingographie** : Perméabilité des trompes",
      "- **Cœlioscopie** : En cas d'endométriose suspectée",
      "## Bilan de fertilité masculin",
      "### Spermogramme",
      "- **Volume** : > 1.5 mL",
      "- **Concentration** : > 15 millions/mL",
      "- **Mobilité progressive** : > 32%",
      "- **Morphologie** : > 4% de formes normales",
      "- **Vitalité** : > 58% de spermatozoïdes vivants",
      "### Bilan hormonal",
      "- Testostérone",
      "- FSH, LH",
      "- Prolactine",
      "### Examens complémentaires",
      "- **Échographie testiculaire** : Recherche de varicocèle",
      "- **Caryotype** : En cas d'azoospermie",
      "- **Test de fragmentation de l'ADN spermatique** : Si échecs de FIV",
      "## Facteurs de risque d'infertilité",
      "### Chez la femme",
      "- Âge > 35 ans",
      "- Cycles irréguliers",
      "- Antécédents d'IST",
      "- Endométriose",
      "- Chirurgie pelvienne",
      "### Chez l'homme",
      "- Varicocèle",
      "- Antécédents de chirurgie des testicules",
      "- Traitements toxiques (chimiothérapie, radiothérapie)",
      "- Tabac, alcool, drogues",
      "## Quand consulter ?",
      "- Après 12 mois d'essais infructueux",
      "- Après 6 mois si femme > 35 ans",
      "- En cas de facteurs de risque connus",
      "## Traitements de l'infertilité",
      "### Traitements médicaux",
      "- Induction de l'ovulation",
      "- Traitement hormonal",
      "### Assistance médicale à la procréation (AMP)",
      "- Insémination intra-utérine (IIU)",
      "- Fécondation in vitro (FIV)",
      "- Injection intra-cytoplasmique de spermatozoïde (ICSI)",
      "### Chirurgie",
      "- Traitement d'une endométriose",
      "- Correction d'une varicocèle",
      "## Conseils pour optimiser la fertilité",
      "### Hygiène de vie",
      "- Alimentation équilibrée",
      "- Activité physique modérée",
      "- Arrêt du tabac et de l'alcool",
      "- Gestion du stress",
      "### Période de fertilité",
      "- Période d'ovulation (J12-J16 d'un cycle de 28 jours)",
      "- Température basale",
      "- Glaire cervicale"
    ],
    category: "Gynécologie",
    date: "25 Novembre 2024",
    readTime: "14 min de lecture",
    author: "Dr. Karim Alami",
    image: "/placeholder.svg",
    tags: ["Fertilité", "Grossesse", "Santé reproductive", "Médecine"]
  },
  "preparation-analyses": {
    title: "Préparation aux Analyses: Conseils Pratiques",
    content: [
      "Une bonne préparation est essentielle pour des résultats d'analyses fiables. Ce guide vous explique comment vous préparer correctement avant une prise de sang, une analyse d'urine ou d'autres examens biologiques.",
      "## Prise de sang",
      "### À jeun ou pas à jeun ?",
      "- **À jeun (12h) pour** :",
      "  - Glycémie",
      "  - Bilan lipidique (cholestérol, triglycérides)",
      "  - Ferritine",
      "  - Insulinémie",
      "- **Non nécessaire pour** :",
      "  - NFS",
      "  - Bilan thyroïdien",
      "  - Sérologies",
      "  - Marqueurs tumoraux",
      "### Conseils pratiques",
      "- Boire de l'eau est autorisé",
      "- Éviter les efforts intenses la veille",
      "- Ne pas fumer avant le prélèvement",
      "- Signaler les traitements en cours",
      "## Analyse d'urine",
      "### Recueil des urines",
      "- Premier jet d'urine du matin",
      "- Toilette intime soigneuse",
      "- Milieu de jet (sauf indication contraire)",
      "- Contenant stérile fourni par le laboratoire",
      "### Précautions",
      "- Éviter pendant les règles",
      "- Ne pas faire de toilette vaginale avant",
      "- Conserver au réfrigérateur si pas d'acheminement immédiat",
      "## Bactériologie et parasitologie",
      "### Coproculture (analyse des selles)",
      "- Recueil dans un récipient stérile",
      "- Éviter les laxatifs 3 jours avant",
      "- Pas de suppositoires la veille",
      "- Conserver au frais",
      "### Prélèvements gynécologiques",
      "- Pas de rapport sexuel 48h avant",
      "- Pas de toilette intime le jour du prélèvement",
      "- Pas de traitement local (ovules, crèmes) 1 semaine avant",
      "## Examens spécifiques",
      "### Test d'hyperglycémie provoquée (HGPO)",
      "- Régime normal les 3 jours précédents",
      "- Jeûne de 12h",
      "- Pas de tabac pendant le test",
      "- Repos strict pendant toute la durée du test",
      "### Bilan d'hémostase (coagulation)",
      "- Signaler tout traitement anticoagulant",
      "- Respecter le délai après la dernière injection d'héparine",
      "## Prélèvements pédiatriques",
      "### Chez le nourrisson",
      "- Privilégier les heures de repas",
      "- Apporter une tétine, un biberon d'eau",
      "- Prévoir un change",
      "### Chez l'enfant",
      "- Expliquer le déroulement",
      "- Utiliser des aiguilles fines",
      "- Distraire l'enfant pendant le prélèvement",
      "## Conseils généraux",
      "### Avant l'examen",
      "- Vérifier les consignes spécifiques",
      "- Prendre rendez-vous si nécessaire",
      "- Apporter l'ordonnance et la carte vitale",
      "### Pendant l'examen",
      "- Signaler tout malaise",
      "- Rester calme et détendu",
      "- Suivre les instructions du professionnel",
      "### Après l'examen",
      "- Appuyer sur le point de ponction",
      "- Boire suffisamment",
      "- Surveiller l'apparition d'un hématome",
      "## Comprendre les résultats",
      "- Les valeurs de référence sont indiquées sur les résultats",
      "- Les résultats doivent être interprétés par un médecin",
      "- Ne pas hésiter à demander des explications"
    ],
    category: "Biologie médicale",
    date: "22 Novembre 2024",
    readTime: "11 min de lecture",
    author: "Dr. Hassan Idrissi",
    image: "/placeholder.svg",
    tags: ["Analyses médicales", "Préparation", "Santé", "Conseils"]
  }
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts[slug as keyof typeof blogPosts];

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1 flex items-center justify-center py-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Article non trouvé</h1>
            <p className="text-muted-foreground mb-8">L'article que vous recherchez n'existe pas ou a été déplacé.</p>
            <Button asChild>
              <Link to="/blog">Retour au blog</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <Button variant="ghost" asChild className="mb-8">
            <Link to="/blog" className="flex items-center gap-2">
              <ArrowLeft size={16} />
              Retour aux articles
            </Link>
          </Button>

          <article className="max-w-4xl mx-auto">
            <header className="mb-12">
              <Badge variant="outline" className="mb-4">{post.category}</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
              
              <div className="flex flex-wrap gap-6 text-muted-foreground text-sm mb-8">
                <div className="flex items-center gap-2">
                  <User size={16} />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  <span>{post.readTime}</span>
                </div>
              </div>

              {post.image && (
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-64 md:h-96 object-cover rounded-lg mb-8"
                  onError={(e) => {
                    // Fallback to a placeholder if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.src = '/placeholder.svg';
                  }}
                />
              )}
            </header>

            <div className="prose prose-lg max-w-none dark:prose-invert">
              {post.content && post.content.map((paragraph, index) => {
                if (paragraph.startsWith('## ')) {
                  return <h2 key={index} className="text-2xl font-bold mt-8 mb-4">{paragraph.substring(3)}</h2>;
                } else if (paragraph.startsWith('### ')) {
                  return <h3 key={index} className="text-xl font-semibold mt-6 mb-3">{paragraph.substring(4)}</h3>;
                } else if (paragraph.startsWith('- ')) {
                  return <ul key={index} className="list-disc pl-6 my-4">
                    {paragraph.split('\n').map((item, i) => (
                      <li key={i} className="mb-2">{item.substring(2)}</li>
                    ))}
                  </ul>;
                }
                return <p key={index} className="mb-6 leading-relaxed">{paragraph}</p>;
              })}
            </div>

            <div className="mt-12 pt-8 border-t border-border">
              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-sm">
                    {tag}
                  </Badge>
                ))}
              </div>
              
              <div className="flex items-center gap-4">
                <span className="text-muted-foreground">Partager :</span>
                <Button variant="outline" size="icon">
                  <Facebook size={18} />
                </Button>
                <Button variant="outline" size="icon">
                  <Twitter size={18} />
                </Button>
                <Button variant="outline" size="icon">
                  <Linkedin size={18} />
                </Button>
                <Button variant="outline" size="icon" className="ml-auto">
                  <Share2 size={18} />
                </Button>
              </div>
            </div>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
