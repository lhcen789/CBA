import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { MapPin, Briefcase, Clock, ArrowRight, Heart, Zap, Users, TrendingUp, Coffee, Laptop, Award, Palmtree } from "lucide-react";

const Careers = () => {
  const openings = [
    {
      title: "Biologiste Moléculaire",
      department: "Laboratoire",
      location: "Agadir, Maroc",
      type: "Temps plein",
      description: "Conduire des analyses de biologie moléculaire et participer à la recherche et développement.",
    },
    {
      title: "Technicien de Laboratoire",
      department: "Laboratoire",
      location: "Agadir, Maroc",
      type: "Temps plein",
      description: "Effectuer des analyses biologiques et maintenir les équipements de laboratoire.",
    },
    {
      title: "Responsable Assurance Qualité",
      department: "Qualité",
      location: "Agadir, Maroc",
      type: "Temps plein",
      description: "Assurer le respect des normes de qualité et des procédures du laboratoire.",
    },
    {
      title: "Chargé d'Études Cliniques",
      department: "Recherche",
      location: "Agadir, Maroc",
      type: "Temps plein",
      description: "Gérer et superviser les études cliniques en collaboration avec les médecins et chercheurs.",
    },
    {
      title: "Secrétaire Médicale",
      department: "Administration",
      location: "Agadir, Maroc",
      type: "Temps plein",
      description: "Accueillir les patients et gérer l'administration du laboratoire.",
    },
    {
      title: "Ingénieur Biomédical",
      department: "Technique",
      location: "Agadir, Maroc",
      type: "Temps plein",
      description: "Assurer la maintenance des équipements biomédicaux du laboratoire.",
    },
    {
      title: "Chargé de Communication Scientifique",
      department: "Communication",
      location: "Agadir, Maroc / Télétravail",
      type: "Temps plein / CDD",
      description: "Rédiger du contenu scientifique et gérer la communication du laboratoire.",
    },
    {
      title: "Commercial en Biologie Médicale",
      department: "Commercial",
      location: "Région Souss-Massa",
      type: "Temps plein",
      description: "Développer le portefeuille clients et promouvoir les services du laboratoire.",
    },
  ];

  const benefits = [
    {
      icon: Award,
      title: "Expertise Scientifique",
      description: "Travaillez avec des équipes hautement qualifiées et des équipements de pointe.",
    },
    {
      icon: Heart,
      title: "Santé & Bien-être",
      description: "Assurance maladie complète et programmes de bien-être au travail.",
    },
    {
      icon: TrendingUp,
      title: "Évolution Professionnelle",
      description: "Formations continues et perspectives d'évolution de carrière claires.",
    },
    {
      icon: Users,
      title: "Environnement Collaboratif",
      description: "Travaillez avec des professionnels passionnés par la biologie médicale.",
    },
    {
      icon: Zap,
      title: "Technologies de Pointe",
      description: "Accès aux dernières technologies en matière d'analyses biologiques.",
    },
    {
      icon: Coffee,
      title: "Avantages Sociaux",
      description: "Restauration, transport, et activités sociales pour tous les employés.",
    },
    {
      icon: Zap,
      title: "Innovation Time",
      description: "20% time for personal projects and experimentation.",
    },
    {
      icon: Award,
      title: "Competitive Pay",
      description: "Top-of-market salaries and equity options.",
    },
  ];

  const values = [
    {
      title: "Be Curious",
      description: "We encourage exploration, learning, and asking questions.",
    },
    {
      title: "Own It",
      description: "Take responsibility for your work and decisions.",
    },
    {
      title: "Collaborate",
      description: "Work together to achieve extraordinary results.",
    },
    {
      title: "Iterate",
      description: "Continuously improve and learn from experience.",
    },
  ];

  const testimonials = [
    {
      quote: "CREATV LAB has given me the freedom to grow as a designer while working on challenging, meaningful projects.",
      author: "Jessica Lin",
      role: "Senior Product Designer",
      years: "3 years at CREATV LAB",
    },
    {
      quote: "The culture here is incredible. Everyone is supportive, passionate, and committed to doing great work.",
      author: "Michael Torres",
      role: "Lead Developer",
      years: "4 years at CREATV LAB",
    },
    {
      quote: "I love that I can work remotely while still feeling connected to the team. The work-life balance is perfect.",
      author: "Emma Johnson",
      role: "Marketing Manager",
      years: "2 years at CREATV LAB",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Join Our <span className="text-gradient">Team</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              We're looking for talented, passionate individuals who want to create 
              exceptional digital experiences and grow their careers in a supportive, 
              innovative environment.
            </p>
            
            <div className="flex flex-wrap justify-center gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-gradient">50+</div>
                <div className="text-muted-foreground">Team Members</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gradient">12</div>
                <div className="text-muted-foreground">Countries</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gradient">8</div>
                <div className="text-muted-foreground">Open Positions</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Pourquoi Nous Rejoindre ?</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Rejoignez un laboratoire de référence au Maroc, reconnu pour son excellence technique et son engagement envers la qualité des soins.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="p-6 hover-lift shadow-card border-border/50 text-center">
                  <div className="w-16 h-16 rounded-xl gradient-primary flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 id="offres" className="text-3xl font-bold mb-4">Nos Offres d'Emploi</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Découvrez nos postes à pourvoir. Nous recherchons des profils passionnés pour renforcer notre équipe.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-8 shadow-card border-border/50 text-center">
                <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-foreground/70 mb-4">
              Vous ne trouvez pas de poste qui vous correspond ? Envoyez-nous votre candidature spontanée.
            </p>
            <Button asChild variant="outline">
              <Link to="/contact">Candidature Spontanée</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Open Positions</h2>
            <p className="text-xl text-muted-foreground">
              Find your next opportunity to make an impact
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto space-y-6">
            {openings.map((job, index) => (
              <Card key={index} className="p-6 hover-lift shadow-card border-border/50">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h3 className="text-2xl font-bold">{job.title}</h3>
                      <Badge>{job.department}</Badge>
                    </div>
                    
                    <p className="text-muted-foreground mb-4">{job.description}</p>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-foreground/70">
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Briefcase size={16} />
                        <span>{job.type}</span>
                      </div>
                    </div>
                  </div>
                  
                  <Button className="gradient-primary text-white group lg:self-start" asChild>
                    <Link to="/contact">
                      Apply Now
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                    </Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Don't see a perfect fit? We're always interested in talented people.
            </p>
            <Button variant="outline" size="lg" asChild>
              <Link to="/contact">Send Us Your Resume</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Hear From Our Team</h2>
            <p className="text-xl text-muted-foreground">
              What it's really like to work at CREATV LAB
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 shadow-card border-border/50">
                <div className="text-4xl text-primary mb-4">"</div>
                <p className="text-lg text-foreground/80 leading-relaxed mb-6 italic">
                  {testimonial.quote}
                </p>
                <div>
                  <div className="font-bold">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  <div className="text-sm text-primary mt-1">{testimonial.years}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Card className="p-12 lg:p-16 text-center gradient-primary shadow-glow">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Join Us?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Take the next step in your career. Browse our open positions and apply today.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8" asChild>
                <Link to="/careers">View Open Roles</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 bg-white/10 text-white border-white/30 hover:bg-white/20" asChild>
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
