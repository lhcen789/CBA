import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export const ContactInfoSection = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Adresse",
      description: "123 Avenue Hassan II, Agadir 80000, Maroc",
      link: "https://maps.google.com/?q=Centre+de+Biologie+Médicale+Agadir"
    },
    {
      icon: Phone,
      title: "Téléphone",
      description: "+212 5XX-XXXXXX",
      link: "tel:+2125XXXXXXXX"
    },
    {
      icon: Mail,
      title: "Email",
      description: "contact@biologiemedagadir.ma",
      link: "mailto:contact@biologiemedagadir.ma"
    },
    {
      icon: Clock,
      title: "Horaires d'ouverture",
      description: "Lun - Ven: 8h00 - 19h00\nSam: 8h00 - 13h00\nDimanche: Fermé",
      link: "#"
    }
  ];

  const socialMedia = [
    { icon: Facebook, url: "#" },
    { icon: Twitter, url: "#" },
    { icon: Instagram, url: "#" },
    { icon: Linkedin, url: "#" }
  ];

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Nous <span className="text-gradient">Contacter</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
            Notre équipe est à votre disposition pour répondre à toutes vos questions et prendre soin de votre santé
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-card rounded-2xl p-8 border border-border/30">
            <h3 className="text-2xl font-bold mb-6">Informations de contact</h3>
            
            <div className="space-y-6">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-start gap-4">
                    <div className="mt-1 p-2 rounded-lg bg-primary/10 text-primary">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">{item.title}</h4>
                      <p className="text-muted-foreground whitespace-pre-line">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8">
              <h4 className="font-medium text-foreground mb-4">Suivez-nous</h4>
              <div className="flex gap-4">
                {socialMedia.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a 
                      key={index} 
                      href={social.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-muted hover:bg-primary/10 flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
                      aria-label={social.icon.displayName || 'Social media link'}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="h-full min-h-[400px] rounded-2xl overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3440.567812454222!2d-9.5988506848711!3d30.42161998175641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb3b6f7b6d9e1b3%3A0x1b5c5c5c5c5c5c5c!2sAgadir%2C%20Morocco!5e0!3m2!1sen!2sma!4v1620000000000!5m2!1sen!2sma" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
              title="Carte Google Maps du Centre de Biologie Médicale Agadir"
            ></iframe>
          </div>
        </div>

        <div className="bg-card rounded-2xl p-8 border border-border/30">
          <h3 className="text-2xl font-bold mb-6">Prendre rendez-vous</h3>
          <p className="text-muted-foreground mb-6">
            Pour prendre rendez-vous ou pour toute question, n'hésitez pas à nous contacter par téléphone ou via notre formulaire en ligne.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="tel:+2125XXXXXXXX" 
              className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors text-center"
            >
              Appeler maintenant
            </a>
            <a 
              href="/rendez-vous" 
              className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent/50 transition-colors text-center"
            >
              Prendre RDV en ligne
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
