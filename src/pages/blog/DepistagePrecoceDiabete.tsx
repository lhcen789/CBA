import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { Link } from "react-router-dom";

const DepistagePrecoceDiabete = () => {
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
            L'importance du Dépistage Précoce du Diabète
          </h1>
          
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-8">
            <div className="flex items-center gap-2">
              <User size={16} />
              <span>Dr. Amina Benali</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>15 Décembre 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span>8 min de lecture</span>
            </div>
          </div>
          
          <img
            src="/placeholder.svg"
            alt="Dépistage du diabète"
            className="w-full h-[400px] object-cover rounded-lg mb-8"
          />
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground mb-6">
              Le diabète est une maladie chronique qui touche des millions de personnes dans le monde. 
              Un dépistage précoce peut faire toute la différence dans la gestion de cette condition.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Qu'est-ce que le diabète?</h2>
            <p className="mb-4">
              Le diabète est une maladie métabolique caractérisée par une hyperglycémie chronique. 
              Il existe principalement deux types de diabète : le type 1, qui est une maladie auto-immune, 
              et le type 2, qui est lié au mode de vie et à des facteurs génétiques.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Pourquoi le dépistage précoce est-il crucial?</h2>
            <p className="mb-4">
              Le dépistage précoce du diabète permet de:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Prévenir ou retarder les complications graves (maladies cardiovasculaires, rétinopathie, néphropathie)</li>
              <li>Améliorer la qualité de vie grâce à une gestion optimale de la glycémie</li>
              <li>Réduire les coûts de santé associés aux complications du diabète</li>
              <li>Permettre des interventions préventives efficaces</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Les tests de dépistage recommandés</h2>
            <p className="mb-4">
              Plusieurs tests permettent de dépister le diabète:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Glycémie à jeun:</strong> Mesure du taux de sucre dans le sang après 8 heures de jeûne</li>
              <li><strong>HbA1c (Hémoglobine glyquée):</strong> Reflète la glycémie moyenne sur les 2-3 derniers mois</li>
              <li><strong>Test HGPO (Hyperglycémie provoquée par voie orale):</strong> Évalue la capacité du corps à réguler la glycémie</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Qui devrait se faire dépister?</h2>
            <p className="mb-4">
              Le dépistage est particulièrement recommandé pour:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Les personnes de plus de 45 ans</li>
              <li>Les personnes en surpoids ou obèses</li>
              <li>Les personnes ayant des antécédents familiaux de diabète</li>
              <li>Les femmes ayant eu un diabète gestationnel</li>
              <li>Les personnes ayant une tension artérielle élevée</li>
              <li>Les personnes sédentaires</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Fréquence du dépistage</h2>
            <p className="mb-4">
              Pour les personnes à risque, il est recommandé de faire un dépistage tous les 3 ans. 
              Pour les personnes à haut risque, un dépistage annuel peut être nécessaire.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
            <p className="mb-4">
              Le dépistage précoce du diabète est un outil essentiel de prévention et de gestion de la santé. 
              N'attendez pas l'apparition de symptômes pour consulter. Un simple test sanguin peut vous aider 
              à prendre en charge votre santé et à prévenir des complications graves.
            </p>
            
            <div className="bg-primary/10 p-6 rounded-lg mt-8">
              <h3 className="text-xl font-bold mb-2">Prenez rendez-vous dès aujourd'hui</h3>
              <p className="mb-4">
                Notre laboratoire propose des tests de dépistage du diabète avec des résultats rapides et fiables.
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

export default DepistagePrecoceDiabete;
