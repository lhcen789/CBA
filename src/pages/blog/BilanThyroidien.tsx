import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { Link } from "react-router-dom";

const BilanThyroidien = () => {
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
            Le Bilan Thyroïdien: Quand et Pourquoi?
          </h1>
          
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-8">
            <div className="flex items-center gap-2">
              <User size={16} />
              <span>Dr. Amina Benali</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>10 Décembre 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span>10 min de lecture</span>
            </div>
          </div>
          
          <img
            src="/placeholder.svg"
            alt="Bilan thyroïdien"
            className="w-full h-[400px] object-cover rounded-lg mb-8"
          />
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground mb-6">
              La thyroïde est une petite glande qui joue un rôle majeur dans le fonctionnement de l'organisme. 
              Découvrez quand et pourquoi effectuer un bilan thyroïdien.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Qu'est-ce que la thyroïde?</h2>
            <p className="mb-4">
              La thyroïde est une glande endocrine située à la base du cou. Elle produit des hormones essentielles 
              qui régulent le métabolisme, la croissance et le développement du corps.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Les hormones thyroïdiennes principales</h2>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>TSH (Thyréostimuline):</strong> Hormone produite par l'hypophyse qui régule la thyroïde</li>
              <li><strong>T4 (Thyroxine):</strong> Hormone principale produite par la thyroïde</li>
              <li><strong>T3 (Triiodothyronine):</strong> Forme active de l'hormone thyroïdienne</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Quand faire un bilan thyroïdien?</h2>
            <p className="mb-4">
              Un bilan thyroïdien est recommandé si vous présentez:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Fatigue inexpliquée et persistante</li>
              <li>Prise ou perte de poids sans raison apparente</li>
              <li>Troubles du sommeil</li>
              <li>Palpitations cardiaques</li>
              <li>Sensibilité au froid ou à la chaleur</li>
              <li>Troubles de l'humeur (dépression, anxiété)</li>
              <li>Problèmes de concentration</li>
              <li>Perte de cheveux</li>
              <li>Peau sèche</li>
              <li>Troubles menstruels</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Hypothyroïdie vs Hyperthyroïdie</h2>
            <p className="mb-4">
              <strong>Hypothyroïdie (thyroïde sous-active):</strong>
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>TSH élevée</li>
              <li>T4 basse</li>
              <li>Symptômes: fatigue, prise de poids, frilosité, constipation</li>
            </ul>
            
            <p className="mb-4 mt-6">
              <strong>Hyperthyroïdie (thyroïde hyperactive):</strong>
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>TSH basse</li>
              <li>T4 élevée</li>
              <li>Symptômes: perte de poids, nervosité, palpitations, sueurs</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Valeurs normales</h2>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>TSH:</strong> 0,4 - 4,0 mUI/L</li>
              <li><strong>T4 libre:</strong> 9 - 23 pmol/L</li>
              <li><strong>T3 libre:</strong> 3,5 - 7,8 pmol/L</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Qui devrait faire un dépistage régulier?</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>Les femmes de plus de 50 ans</li>
              <li>Les personnes ayant des antécédents familiaux de troubles thyroïdiens</li>
              <li>Les femmes enceintes ou qui planifient une grossesse</li>
              <li>Les personnes atteintes de maladies auto-immunes</li>
              <li>Les personnes prenant des médicaments affectant la thyroïde</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
            <p className="mb-4">
              Le bilan thyroïdien est un examen simple qui peut révéler des déséquilibres hormonaux 
              affectant de nombreux aspects de votre santé. Un diagnostic précoce permet une prise en 
              charge efficace et une amélioration significative de la qualité de vie.
            </p>
            
            <div className="bg-primary/10 p-6 rounded-lg mt-8">
              <h3 className="text-xl font-bold mb-2">Effectuez votre bilan thyroïdien</h3>
              <p className="mb-4">
                Notre laboratoire propose des bilans thyroïdiens complets avec des résultats précis.
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

export default BilanThyroidien;
