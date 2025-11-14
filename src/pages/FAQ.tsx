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
        },
        {
          question: "Puis-je annuler ou reporter mon rendez-vous ?",
          answer: "Oui, vous pouvez annuler ou reporter votre rendez-vous jusqu'à 2 heures avant l'heure prévue. Contactez-nous par téléphone ou via notre plateforme en ligne pour toute modification."
        },
        {
          question: "Combien de temps dure un prélèvement ?",
          answer: "Un prélèvement sanguin standard dure 5-10 minutes. Prévoyez 15-30 minutes au total incluant l'accueil et les formalités administratives. Les analyses d'urine sont plus rapides (2-3 minutes)."
        },
        {
          question: "Acceptez-vous les patients sans rendez-vous ?",
          answer: "Oui, mais nous recommandons fortement la prise de rendez-vous pour éviter l'attente, surtout pour les analyses nécessitant un jeûne ou pendant les heures de pointe (8h-10h et 16h-18h)."
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
        },
        {
          question: "Puis-je avoir mes résultats par téléphone ?",
          answer: "Pour des raisons de confidentialité, nous ne communiquons pas les résultats par téléphone. Ils sont disponibles en ligne ou à retirer au laboratoire avec une pièce d'identité."
        },
        {
          question: "Comment interpréter mes résultats ?",
          answer: "Vos résultats incluent les valeurs de référence. Cependant, seul votre médecin peut les interpréter dans votre contexte clinique. N'hésitez pas à lui poser des questions ou à prendre rendez-vous."
        },
        {
          question: "Combien de temps gardez-vous mes résultats ?",
          answer: "Nous conservons vos résultats pendant 5 ans minimum. Vous pouvez demander des copies à tout moment pour votre suivi médical en présentant une pièce d'identité."
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
        },
        {
          question: "Combien coûtent les analyses courantes ?",
          answer: "Les tarifs respectent la nomenclature officielle. Par exemple : NFS (80 DH), Glycémie (25 DH), Bilan lipidique (120 DH). Les analyses prescrites sont remboursées selon les taux en vigueur."
        },
        {
          question: "Y a-t-il des frais supplémentaires ?",
          answer: "Les seuls frais supplémentaires sont pour les prélèvements à domicile (50 DH) et les analyses urgentes en dehors des horaires normaux (majoration de 30%)."
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
        },
        {
          question: "Quels types d'analyses proposez-vous ?",
          answer: "Nous proposons des analyses d'hématologie, biochimie, microbiologie, hormonologie, immunologie, sérologie, parasitologie et bilans complets de santé. Plus de 500 paramètres différents sont disponibles."
        },
        {
          question: "Effectuez-vous des analyses génétiques ?",
          answer: "Nous proposons certains tests génétiques sur prescription médicale. Ces analyses nécessitent un consentement éclairé et un conseil génétique approprié."
        },
        {
          question: "Proposez-vous des bilans de santé complets ?",
          answer: "Oui, nous proposons différents types de bilans : bilan de santé général, bilan cardiovasculaire, bilan hormonal, bilan préventif selon l'âge et les facteurs de risque."
        },
        {
          question: "Puis-je faire plusieurs analyses en même temps ?",
          answer: "Oui, la plupart des analyses peuvent être réalisées sur le même prélèvement. Cela évite les ponctions multiples et optimise votre temps."
        }
      ]
    },
    {
      category: "Préparation aux analyses",
      questions: [
        {
          question: "Que puis-je boire pendant le jeûne ?",
          answer: "Pendant le jeûne, seule l'eau plate est autorisée. Évitez le café, le thé, les jus, les sodas et l'eau aromatisée. L'eau gazeuse nature est acceptable."
        },
        {
          question: "Puis-je prendre mes médicaments avant les analyses ?",
          answer: "Continuez à prendre vos médicaments habituels sauf indication contraire de votre médecin. Signalez tous vos traitements lors du prélèvement car certains peuvent influencer les résultats."
        },
        {
          question: "Dois-je arrêter de fumer avant les analyses ?",
          answer: "Il est recommandé d'éviter de fumer au moins 2 heures avant le prélèvement, particulièrement pour les analyses cardiovasculaires et respiratoires."
        },
        {
          question: "Comment préparer un échantillon d'urine ?",
          answer: "Utilisez le récipient stérilisé fourni. Effectuez une toilette intime, éliminez le premier jet d'urine et recueillez le milieu de miction. Apportez l'échantillon dans les 2 heures."
        }
      ]
    },
    {
      category: "Hygiène et sécurité",
      questions: [
        {
          question: "Quelles précautions prenez-vous pour l'hygiène ?",
          answer: "Nous appliquons des protocoles d'hygiène stricts : désinfection systématique, matériel à usage unique, port d'équipements de protection individuelle, et nettoyage régulier des surfaces."
        },
        {
          question: "Comment garantissez-vous la qualité de vos analyses ?",
          answer: "Notre laboratoire est accrédité et participe à des contrôles qualité externes réguliers. Nos équipements sont maintenus selon les normes les plus strictes et calibrés quotidiennement."
        },
        {
          question: "Que faire si j'ai peur des piqûres ?",
          answer: "Prévenez notre équipe de votre appréhension. Nos techniciens sont habitués et sauront vous rassurer. Nous utilisons des aiguilles très fines pour minimiser l'inconfort."
        },
        {
          question: "Puis-je venir avec un accompagnant ?",
          answer: "Oui, un accompagnant peut vous accompagner, surtout pour les enfants, personnes âgées ou en cas d'anxiété. L'espace d'attente peut accueillir les accompagnants."
        }
      ]
    },
    {
      category: "Urgences et cas particuliers",
      questions: [
        {
          question: "Que faire en cas d'urgence médicale ?",
          answer: "En cas d'urgence médicale, contactez immédiatement le SAMU (15) ou rendez-vous aux urgences. Notre laboratoire n'assure pas les urgences médicales."
        },
        {
          question: "Proposez-vous des analyses en urgence ?",
          answer: "Oui, nous pouvons traiter certaines analyses en urgence (troponine, D-dimères, etc.) avec des résultats en 1-2 heures. Une majoration de 30% s'applique."
        },
        {
          question: "Réalisez-vous des analyses pour les entreprises ?",
          answer: "Oui, nous proposons des bilans de santé au travail, des dépistages collectifs et des analyses dans le cadre de la médecine du travail. Contactez-nous pour un devis."
        },
        {
          question: "Que faire si mes résultats sont anormaux ?",
          answer: "Consultez rapidement votre médecin traitant avec vos résultats. En cas de valeurs critiques, nous vous contactons immédiatement et orientons vers les services appropriés."
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
