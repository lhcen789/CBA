import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { Link } from "react-router-dom";

const ResultatsAnalysesSanguines = () => {
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
          
          <Badge className="mb-4">Éducation</Badge>
          
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Comprendre vos Résultats d'Analyses Sanguines
          </h1>
          
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-8">
            <div className="flex items-center gap-2">
              <User size={16} />
              <span>Dr. Karim Alami</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>12 Décembre 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span>6 min de lecture</span>
            </div>
          </div>
          
          <img
            src="/placeholder.svg"
            alt="Analyses sanguines"
            className="w-full h-[400px] object-cover rounded-lg mb-8"
          />
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground mb-6">
              Recevoir ses résultats d'analyses sanguines peut être déroutant. Ce guide vous aide à comprendre 
              les principaux paramètres et leurs significations.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">La Numération Formule Sanguine (NFS)</h2>
            <p className="mb-4">
              La NFS est l'analyse la plus courante. Elle mesure:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Globules rouges:</strong> Transportent l'oxygène. Valeur normale: 4,5-5,5 millions/mm³</li>
              <li><strong>Hémoglobine:</strong> Protéine des globules rouges. Valeur normale: 12-16 g/dL (femmes), 13-17 g/dL (hommes)</li>
              <li><strong>Globules blancs:</strong> Défense immunitaire. Valeur normale: 4000-10000/mm³</li>
              <li><strong>Plaquettes:</strong> Coagulation sanguine. Valeur normale: 150000-400000/mm³</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Le Bilan Lipidique</h2>
            <p className="mb-4">
              Ce bilan évalue les graisses dans le sang:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Cholestérol total:</strong> Devrait être inférieur à 2 g/L</li>
              <li><strong>HDL (bon cholestérol):</strong> Devrait être supérieur à 0,4 g/L</li>
              <li><strong>LDL (mauvais cholestérol):</strong> Devrait être inférieur à 1,6 g/L</li>
              <li><strong>Triglycérides:</strong> Devrait être inférieur à 1,5 g/L</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">La Glycémie</h2>
            <p className="mb-4">
              La glycémie mesure le taux de sucre dans le sang:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Glycémie à jeun:</strong> Valeur normale: 0,7-1,1 g/L</li>
              <li><strong>Prédiabète:</strong> 1,1-1,26 g/L</li>
              <li><strong>Diabète:</strong> Supérieur à 1,26 g/L (à confirmer par deux mesures)</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Les Enzymes Hépatiques</h2>
            <p className="mb-4">
              Ces tests évaluent la fonction du foie:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>ASAT et ALAT:</strong> Enzymes du foie. Des valeurs élevées peuvent indiquer une lésion hépatique</li>
              <li><strong>GGT:</strong> Sensible à l'alcool et aux médicaments</li>
              <li><strong>Bilirubine:</strong> Pigment jaune produit par la dégradation des globules rouges</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">La Fonction Rénale</h2>
            <p className="mb-4">
              Ces paramètres évaluent le fonctionnement des reins:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Créatinine:</strong> Déchet métabolique filtré par les reins</li>
              <li><strong>Urée:</strong> Autre indicateur de la fonction rénale</li>
              <li><strong>DFG (Débit de Filtration Glomérulaire):</strong> Mesure directe de la fonction rénale</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Que faire si vos résultats sont anormaux?</h2>
            <p className="mb-4">
              Ne paniquez pas! Des résultats légèrement hors normes peuvent être dus à:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>La déshydratation</li>
              <li>Le stress</li>
              <li>Un effort physique récent</li>
              <li>L'alimentation</li>
              <li>Certains médicaments</li>
            </ul>
            <p className="mb-4">
              Consultez toujours votre médecin pour interpréter vos résultats dans le contexte de votre état de santé général.
            </p>
            
            <div className="bg-primary/10 p-6 rounded-lg mt-8">
              <h3 className="text-xl font-bold mb-2">Besoin d'analyses sanguines?</h3>
              <p className="mb-4">
                Notre laboratoire offre une gamme complète d'analyses avec des résultats rapides et précis.
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

export default ResultatsAnalysesSanguines;
