import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Contactez-<span className="text-gradient">Nous</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Besoin d'informations ou souhaitez prendre rendez-vous ? Notre équipe est à votre 
            écoute pour répondre à toutes vos questions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <Card className="p-8 shadow-card border-border/50">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                  <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                    Prénom
                  </label>
                  <Input id="firstName" placeholder="Mohammed" />
                  </div>
                  <div>
                  <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                    Nom
                  </label>
                  <Input id="lastName" placeholder="Alami" />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Téléphone
                  </label>
                  <Input id="phone" placeholder="+212 6 XX XX XX XX" />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Votre message ou demande de rendez-vous..."
                    rows={6}
                  />
                </div>

                <Button size="lg" className="w-full gradient-primary text-white group">
                  Envoyer
                  <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </Button>
              </form>
            </Card>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-6">Informations</h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Notre laboratoire est ouvert du lundi au samedi. Nous proposons des prélèvements 
                à domicile sur demande. Résultats disponibles en ligne sécurisé.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="p-6 flex items-start gap-4 shadow-card border-border/50">
                <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0">
                  <Mail className="text-white" size={20} />
                </div>
                <div>
                  <div className="font-semibold mb-1">Email</div>
                  <a href="mailto:contact@centrebiologieagadir.ma" className="text-muted-foreground hover:text-primary transition-colors">
                    contact@centrebiologieagadir.ma
                  </a>
                </div>
              </Card>

              <Card className="p-6 flex items-start gap-4 shadow-card border-border/50">
                <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0">
                  <Phone className="text-white" size={20} />
                </div>
                <div>
                  <div className="font-semibold mb-1">Téléphone</div>
                  <a href="tel:+212528123456" className="text-muted-foreground hover:text-primary transition-colors">
                    +212 528 12 34 56
                  </a>
                </div>
              </Card>

              <Card className="p-6 flex items-start gap-4 shadow-card border-border/50">
                <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-white" size={20} />
                </div>
                <div>
                  <div className="font-semibold mb-1">Adresse</div>
                  <p className="text-muted-foreground">
                    Avenue Mohammed V<br />
                    Agadir 80000, Maroc
                  </p>
                </div>
              </Card>
            </div>

            <div className="pt-8">
              <h4 className="font-semibold mb-4">Horaires d'Ouverture</h4>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex justify-between">
                  <span>Lundi - Vendredi</span>
                  <span>7:30 - 19:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Samedi</span>
                  <span>8:00 - 14:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Dimanche</span>
                  <span>Fermé</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
