import { Users, Award, ShieldCheck, Clock, CheckCircle } from "lucide-react";

export const AboutSection = () => {
  const features = [
    {
      icon: Award,
      title: "Expertise Médicale",
      description: "Une équipe de biologistes médicaux et de techniciens hautement qualifiés et expérimentés."
    },
    {
      icon: ShieldCheck,
      title: "Qualité Certifiée",
      description: "Laboratoire accrédité selon les normes internationales de qualité et de sécurité."
    },
    {
      icon: Clock,
      title: "Rapidité des Résultats",
      description: "Délais d'exécution rapides avec des résultats fiables et précis."
    },
    {
      icon: CheckCircle,
      title: "Technologie de Pointe",
      description: "Équipements de dernière génération pour des analyses précises et fiables."
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 bg-secondary/10">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 w-fit mb-6">
              <Users className="w-4 h-4" />
              <span className="text-sm font-medium">À Propos de Nous</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Centre de Biologie <span className="text-gradient">Médicale Agadir</span>
            </h2>
            
            <p className="text-muted-foreground mb-6 text-base sm:text-lg">
              Fondé avec pour mission de fournir des services d'analyses biologiques de haute qualité, 
              le Centre de Biologie Médicale Agadir s'engage à offrir des résultats précis et fiables 
              grâce à une équipe expérimentée et des équipements de pointe.
            </p>
            
            <p className="text-muted-foreground mb-8 text-base sm:text-lg">
              Notre laboratoire est spécialisé dans un large éventail d'analyses médicales, allant 
              des bilans de routine aux examens spécialisés, tout en respectant les normes les plus 
              strictes de qualité et d'hygiène.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-start gap-3">
                    <div className="mt-1 p-1.5 rounded-lg bg-primary/10 text-primary">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            
            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors">
                Prendre Rendez-vous
              </button>
              <button className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent/50 transition-colors">
                En savoir plus
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="relative rounded-xl overflow-hidden h-64 sm:h-80">
              <img 
                src="https://images.unsplash.com/photo-1581595219315-a187dd40c322?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Laboratoire d'analyses médicales"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden h-64 sm:h-80 mt-8">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Équipement de laboratoire"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden h-64 sm:h-80 -mt-8">
              <img 
                src="https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Analyses en laboratoire"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden h-64 sm:h-80">
              <img 
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Technicien de laboratoire"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
