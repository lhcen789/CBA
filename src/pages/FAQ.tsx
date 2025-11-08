import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      category: "Rendez-vous et horaires",
      questions: [
        {
          question: "Comment prendre rendez-vous ?",
          answer: "Vous pouvez prendre rendez-vous en ligne via notre site, par téléphone au 05 28 XX XX XX, ou directement à notre accueil. Nous recommandons la prise de rendez-vous pour éviter l'attente."
        },
        {
          question: "Quels sont vos horaires d'ouverture ?",
          answer: "Nous sommes ouverts du lundi au vendredi de 7h30 à 19h00, et le samedi de 8h00 à 13h00. Certaines analyses d'urgence peuvent être réalisées en dehors de ces horaires sur rendez-vous."
        },
        {
          question: "Faut-il être à jeun pour tous les examens ?",
          answer: "Non, le jeûne n'est nécessaire que pour certaines analyses comme la glycémie, le bilan lipidique ou le bilan hépatique. Lors de votre prise de rendez-vous, nous vous indiquerons si un jeûne est nécessaire (généralement 8 à 12 heures)."
        }
      ]
    },
    {
      category: "Résultats et délais",
      questions: [
        {
          question: "Quand puis-je récupérer mes résultats ?",
          answer: "Les délais varient selon les analyses : analyses courantes en 24h, analyses spécialisées en 3-5 jours. Les résultats urgents peuvent être disponibles en quelques heures. Vous serez informé du délai lors du prélèvement."
        },
        {
          question: "Comment consulter mes résultats en ligne ?",
          answer: "Après votre prélèvement, vous recevrez un code d'accès par SMS ou email. Vous pourrez alors consulter vos résultats sur notre plateforme sécurisée dès qu'ils seront disponibles, 24h/24."
        },
        {
          question: "Dois-je venir récupérer mes résultats en personne ?",
          answer: "Non, vous pouvez consulter vos résultats en ligne, les recevoir par email, ou venir les chercher en personne. Vous pouvez également autoriser un proche à les récupérer pour vous avec une procuration."
        }
      ]
    },
    {
      category: "Tarifs et remboursements",
      questions: [
        {
          question: "Acceptez-vous les mutuelles ?",
          answer: "Oui, nous acceptons la plupart des mutuelles et assurances. Munissez-vous de votre carte de mutuelle lors de votre visite. Le tiers payant est appliqué pour les organismes conventionnés."
        },
        {
          question: "Puis-je obtenir un devis avant les analyses ?",
          answer: "Oui, nous fournissons des devis gratuits. Vous pouvez nous contacter par téléphone ou email avec votre ordonnance, et nous vous enverrons un devis détaillé sous 24h."
        },
        {
          question: "Quels modes de paiement acceptez-vous ?",
          answer: "Nous acceptons les paiements en espèces, carte bancaire, chèque, et nous travaillons avec les principales mutuelles et assurances santé pour le tiers payant."
        }
      ]
    },
    {
      category: "Services et analyses",
      questions: [
        {
          question: "Proposez-vous des prélèvements à domicile ?",
          answer: "Oui, nous proposons un service de prélèvement à domicile pour les personnes à mobilité réduite, les personnes âgées, ou sur demande. Contactez-nous pour organiser une visite (frais supplémentaires de 50 DH)."
        },
        {
          question: "Réalisez-vous des analyses pour les enfants ?",
          answer: "Oui, notre équipe est formée pour les prélèvements pédiatriques. Nous disposons d'un espace dédié et notre personnel veille au confort et à la sécurité des plus jeunes."
        },
        {
          question: "Puis-je faire des analyses sans ordonnance ?",
          answer: "Certaines analyses de dépistage peuvent être réalisées sans ordonnance (cholestérol, glycémie, etc.). Cependant, une ordonnance est nécessaire pour la prise en charge par votre mutuelle."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h1 className="text-4xl md:text-5xl font-bold">
              Questions <span className="text-gradient">Fréquentes</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Trouvez rapidement les réponses à vos questions
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {faqs.map((category, idx) => (
              <div key={idx} className="space-y-4">
                <h2 className="text-2xl font-bold">{category.category}</h2>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((faq, qIdx) => (
                    <AccordionItem key={qIdx} value={`${idx}-${qIdx}`}>
                      <AccordionTrigger className="text-left">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-card p-8 rounded-lg border text-center max-w-2xl mx-auto">
            <h3 className="text-xl font-bold mb-2">Vous ne trouvez pas votre réponse ?</h3>
            <p className="text-muted-foreground mb-4">
              Notre équipe est à votre disposition pour répondre à toutes vos questions
            </p>
            <Button className="gradient-primary text-white" asChild>
              <Link to="/contact">Nous contacter</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
