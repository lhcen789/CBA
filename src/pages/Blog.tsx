import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Calendar, Clock, User, ArrowRight, Search } from "lucide-react";

const Blog = () => {
  const featuredPost = {
    id: "depistage-precoce-diabete",
    title: "L'importance du Dépistage Précoce du Diabète",
    excerpt: "Découvrez pourquoi le dépistage précoce du diabète est essentiel pour prévenir les complications et maintenir une bonne santé.",
    category: "Prévention",
    date: "15 Décembre 2024",
    readTime: "12 min de lecture",
    author: "Dr. Amina Benali",
    image: "/placeholder.svg",
  };

  const posts = [
    {
      id: "comprendre-analyses-sanguines",
      title: "Comprendre vos Résultats d'Analyses Sanguines",
      excerpt: "Un guide complet pour interpréter vos analyses sanguines et comprendre ce que signifient les différents paramètres.",
      category: "Éducation",
      date: "12 Décembre 2024",
      readTime: "15 min de lecture",
      author: "Dr. Karim Alami",
      image: "/placeholder.svg",
    },
    {
      id: "bilan-thyroidien-quand-pourquoi",
      title: "Le Bilan Thyroïdien: Quand et Pourquoi?",
      excerpt: "Tout savoir sur le bilan thyroïdien, ses indications et comment interpréter les résultats.",
      category: "Endocrinologie",
      date: "10 Décembre 2024",
      readTime: "12 min de lecture",
      author: "Dr. Amina Benali",
      image: "/placeholder.svg",
    },
    {
      id: "prevention-infections-urinaires",
      title: "Prévention des Infections Urinaires",
      excerpt: "Conseils pratiques pour prévenir les infections urinaires et maintenir une bonne santé urinaire.",
      category: "Urologie",
      date: "8 Décembre 2024",
      readTime: "10 min de lecture",
      author: "Dr. Hassan Idrissi",
      image: "/placeholder.svg",
    },
    {
      id: "bilan-prenuptial",
      title: "Le Bilan Prénuptial: Préparez votre Avenir",
      excerpt: "Pourquoi et comment réaliser un bilan prénuptial pour aborder le mariage en toute sérénité.",
      category: "Santé familiale",
      date: "5 Décembre 2024",
      readTime: "14 min de lecture",
      author: "Dr. Amina Benali",
      image: "/placeholder.svg",
    },
    {
      id: "cholesterol-ami-ennemi",
      title: "Cholestérol: Ami ou Ennemi?",
      excerpt: "Comprendre le rôle du cholestérol dans l'organisme et comment le maintenir à un niveau sain.",
      category: "Cardiologie",
      date: "3 Décembre 2024",
      readTime: "13 min de lecture",
      author: "Dr. Karim Alami",
      image: "/placeholder.svg",
    },
    {
      id: "hemogramme-decrypte",
      title: "L'Hémogramme Décrypté",
      excerpt: "Guide complet pour comprendre votre hémogramme et interpréter chaque paramètre.",
      category: "Hématologie",
      date: "1 Décembre 2024",
      readTime: "15 min de lecture",
      author: "Dr. Hassan Idrissi",
      image: "/placeholder.svg",
    },
    {
      id: "tests-covid-pcr-antigenique",
      title: "Tests COVID-19: PCR vs Antigénique",
      excerpt: "Différences, avantages et quand utiliser chaque type de test de dépistage COVID-19.",
      category: "Virologie",
      date: "28 Novembre 2024",
      readTime: "11 min de lecture",
      author: "Dr. Amina Benali",
    },
    {
      id: "fertilite-analyses-essentielles",
      title: "Fertilité: Les Analyses Essentielles",
      excerpt: "Guide des analyses de fertilité pour couples souhaitant concevoir un enfant.",
      category: "Hormonologie",
      date: "25 Novembre 2024",
      readTime: "6 min de lecture",
      author: "Dr. Karim Alami",
    },
    {
      id: "preparation-analyses-conseils",
      title: "Préparation aux Analyses: Conseils Pratiques",
      excerpt: "Comment bien se préparer avant une prise de sang pour des résultats optimaux.",
      category: "Conseils",
      date: "22 Novembre 2024",
      readTime: "15 min de lecture",
      author: "Dr. Hassan Idrissi",
    },
  ];

  const categories = [
    "Tous les Articles",
    "Prévention",
    "Éducation",
    "Hormonologie",
    "Biochimie",
    "Hématologie",
    "Microbiologie",
    "Conseils",
  ];

  const popularPosts = [
    "10 Conseils pour un Bilan Sanguin Optimal",
    "Comprendre son Bilan Thyroïdien",
    "Guide Complet du Diabète",
    "L'importance du Dépistage Précoce",
    "Introduction aux Analyses Hormonales",
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Actualités & <span className="text-gradient">Conseils Santé</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Découvrez nos derniers articles sur la santé, les analyses médicales et la prévention. 
              Conseils d'experts et informations pour mieux comprendre votre santé.
            </p>
            
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                <Input
                  placeholder="Search articles..."
                  className="pl-12 h-14 text-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Card className="overflow-hidden shadow-glow border-border/50">
            <div className="grid lg:grid-cols-2">
              <div className="relative aspect-[16/10] lg:aspect-auto">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-4 left-4">{featuredPost.category}</Badge>
              </div>
              
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">{featuredPost.title}</h2>
                <p className="text-lg text-muted-foreground mb-6">{featuredPost.excerpt}</p>
                
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-2">
                    <User size={16} />
                    <span>{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{featuredPost.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>
                
                <Button asChild className="gradient-primary text-white w-fit group">
                  <Link to={`/blog/${featuredPost.id}`}>
                    Lire l'Article
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                  </Link>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className={index === 0 ? "gradient-primary text-white" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="grid gap-8">
                {posts.map((post, index) => (
                  <Card key={index} className="p-6 hover-lift shadow-card border-border/50">
                    <Badge className="mb-4">{post.category}</Badge>
                    <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                    <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{post.category}</span>
                      <Button asChild variant="link" className="p-0 h-auto">
                        <Link to={`/blog/${post.id}`}>
                          Lire la suite <ArrowRight size={16} className="ml-1" />
                        </Link>
                      </Button>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar size={14} />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={14} />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <Button asChild variant="outline" className="group">
                      <Link to={`/blog/${post.id}`}>
                        Lire la suite
                        <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                      </Link>
                    </Button>
                  </Card>
                ))}
              </div>
              
              <div className="mt-12 text-center">
                <Button size="lg" variant="outline">
                  Load More Articles
                </Button>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="space-y-8">
              <Card className="p-6 shadow-card border-border/50">
                <h3 className="text-xl font-bold mb-4">Newsletter</h3>
                <p className="text-muted-foreground mb-4">
                  Get the latest insights delivered to your inbox.
                </p>
                <Input placeholder="Your email" className="mb-3" />
                <Button className="w-full gradient-primary text-white">
                  Subscribe
                </Button>
              </Card>
              
              <Card className="p-6 shadow-card border-border/50">
                <h3 className="text-xl font-bold mb-4">Popular Posts</h3>
                <ul className="space-y-3">
                  {popularPosts.map((post, index) => (
                    <li key={index}>
                      <a href="#" className="text-foreground/80 hover:text-primary transition-colors flex items-start gap-2">
                        <span className="text-primary font-bold">{index + 1}.</span>
                        <span>{post}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </Card>
              
              <Card className="p-6 shadow-card border-border/50 gradient-primary text-white">
                <h3 className="text-xl font-bold mb-4">Have a Topic Idea?</h3>
                <p className="mb-4 text-white/90">
                  We'd love to hear what you want to learn about.
                </p>
                <Button variant="secondary">
                  Suggest a Topic
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
