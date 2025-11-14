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
    excerpt: "Découvrez pourquoi le dépistage régulier de la glycémie est essentiel pour prévenir les complications du diabète et maintenir une bonne santé.",
    category: "Prévention",
    date: "15 Décembre 2024",
    readTime: "8 min de lecture",
    author: "Dr. Amina Benali",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  };

  const posts = [
    {
      id: "resultats-analyses-sanguines",
      title: "Comprendre vos Résultats d'Analyses Sanguines",
      excerpt: "Guide complet pour interpréter correctement vos résultats de NFS, glycémie et bilan lipidique.",
      category: "Éducation",
      date: "12 Décembre 2024",
      readTime: "6 min de lecture",
      author: "Dr. Karim Alami",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "bilan-thyroidien",
      title: "Le Bilan Thyroïdien: Quand et Pourquoi?",
      excerpt: "Tout ce qu'il faut savoir sur les analyses thyroïdiennes et leur importance pour votre santé.",
      category: "Hormonologie",
      date: "10 Décembre 2024",
      readTime: "10 min de lecture",
      author: "Dr. Amina Benali",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "prevention-infections-urinaires",
      title: "Prévention des Infections Urinaires",
      excerpt: "Conseils pratiques et importance de l'ECBU pour détecter et traiter rapidement les infections.",
      category: "Microbiologie",
      date: "8 Décembre 2024",
      readTime: "5 min de lecture",
      author: "Dr. Hassan Idrissi",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "bilan-prenuptial",
      title: "Le Bilan Prénuptial: Préparez votre Avenir",
      excerpt: "L'importance des analyses avant le mariage pour une vie de couple en bonne santé.",
      category: "Prévention",
      date: "5 Décembre 2024",
      readTime: "7 min de lecture",
      author: "Dr. Amina Benali",
      image: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "cholesterol-ami-ennemi",
      title: "Cholestérol: Ami ou Ennemi?",
      excerpt: "Comprendre les différents types de cholestérol et comment maintenir un niveau optimal.",
      category: "Biochimie",
      date: "3 Décembre 2024",
      readTime: "12 min de lecture",
      author: "Dr. Karim Alami",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "hemogramme-decrypte",
      title: "L'Hémogramme Décrypté",
      excerpt: "Comprendre chaque paramètre de votre numération formule sanguine et son importance.",
      category: "Hématologie",
      date: "1 Décembre 2024",
      readTime: "9 min de lecture",
      author: "Dr. Hassan Idrissi",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "tests-covid-19",
      title: "Tests COVID-19: PCR vs Antigénique",
      excerpt: "Différences, avantages et quand utiliser chaque type de test de dépistage COVID-19.",
      category: "Virologie",
      date: "28 Novembre 2024",
      readTime: "11 min de lecture",
      author: "Dr. Amina Benali",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "fertilite-analyses-essentielles",
      title: "Fertilité: Les Analyses Essentielles",
      excerpt: "Guide des analyses de fertilité pour couples souhaitant concevoir un enfant.",
      category: "Hormonologie",
      date: "25 Novembre 2024",
      readTime: "6 min de lecture",
      author: "Dr. Karim Alami",
      image: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "preparation-analyses",
      title: "Préparation aux Analyses: Conseils Pratiques",
      excerpt: "Comment bien se préparer avant une prise de sang pour des résultats optimaux.",
      category: "Conseils",
      date: "22 Novembre 2024",
      readTime: "15 min de lecture",
      author: "Dr. Hassan Idrissi",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
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
    "Virologie",
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
      <section className="relative pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-16 sm:pb-20 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              Actualités Santé
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Votre <span className="text-gradient bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Guide Santé</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-10 max-w-3xl mx-auto">
              Explorez nos articles d'experts sur les analyses médicales, la prévention et le bien-être. 
              Des conseils pratiques pour prendre soin de votre santé au quotidien.
            </p>
            
            <div className="max-w-2xl mx-auto">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative bg-background/80 backdrop-blur-sm rounded-2xl border border-border/50 p-2">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary">
                      <Search size={20} />
                    </div>
                    <Input
                      placeholder="Rechercher des articles, conseils, analyses..."
                      className="border-0 bg-transparent text-lg placeholder:text-muted-foreground/70 focus-visible:ring-0"
                    />
                    <Button className="gradient-primary text-white px-6 py-3 rounded-xl">
                      Rechercher
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-background to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Article <span className="text-gradient">Vedette</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Découvrez notre article le plus populaire de la semaine
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <Card className="overflow-hidden shadow-2xl border-0 bg-gradient-to-br from-background via-background to-primary/5">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative group overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-80 lg:h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-6 left-6 z-20">
                    <Badge className="bg-primary text-white border-0 px-4 py-2 text-sm font-medium">
                      {featuredPost.category}
                    </Badge>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6 z-20 lg:hidden">
                    <h3 className="text-white text-xl font-bold mb-2">{featuredPost.title}</h3>
                  </div>
                </div>
                
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="mb-8">
                    <div className="hidden lg:block mb-4">
                      <Badge variant="outline" className="border-primary/20 text-primary bg-primary/5 px-4 py-2">
                        {featuredPost.category}
                      </Badge>
                    </div>
                    <h2 className="text-2xl lg:text-4xl font-bold mb-6 leading-tight text-foreground">
                      {featuredPost.title}
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                      {featuredPost.excerpt}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-6 text-sm text-muted-foreground mb-8 pb-6 border-b border-border/50">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <User size={14} />
                      </div>
                      <span className="font-medium">{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <Calendar size={14} />
                      </div>
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <Clock size={14} />
                      </div>
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  
                  <Button asChild size="lg" className="gradient-primary text-white w-fit group shadow-lg hover:shadow-xl transition-all duration-300">
                    <Link to={`/blog/${featuredPost.id}`}>
                      Lire l'Article Complet
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-gradient-to-r from-secondary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Explorez par Catégorie</h3>
            <p className="text-muted-foreground">Trouvez les articles qui vous intéressent</p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className={`
                  ${index === 0 
                    ? "gradient-primary text-white shadow-lg hover:shadow-xl" 
                    : "hover:bg-primary/5 hover:border-primary/30 hover:text-primary transition-all duration-300"
                  }
                  px-6 py-3 rounded-full text-sm font-medium
                `}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-background to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Derniers <span className="text-gradient">Articles</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Restez informé avec nos dernières publications sur la santé et les analyses médicales
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <div className="lg:col-span-2">
              <div className="grid md:grid-cols-2 gap-6">
                {posts.map((post, index) => (
                  <Card key={index} className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-background to-secondary/5">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <Badge className="absolute top-4 left-4 bg-primary text-white border-0 px-3 py-1 text-xs font-medium">
                        {post.category}
                      </Badge>
                      <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <Button size="sm" className="bg-white text-primary hover:bg-white/90 font-medium">
                          Lire maintenant
                        </Button>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-lg font-bold mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-300">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                            <User size={10} />
                          </div>
                          <span className="font-medium">{post.author}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span>{post.date}</span>
                          <span>•</span>
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      
                      <Button asChild variant="ghost" className="w-full group/btn hover:bg-primary/5 hover:text-primary transition-all duration-300">
                        <Link to={`/blog/${post.id}`}>
                          Lire l'article complet
                          <ArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform" size={14} />
                        </Link>
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
              
              <div className="mt-16 text-center">
                <Button size="lg" className="gradient-primary text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                  Découvrir plus d'articles
                  <ArrowRight className="ml-2" size={18} />
                </Button>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="space-y-6">
              <Card className="p-8 shadow-xl border-0 bg-gradient-to-br from-primary/5 to-blue-500/5 backdrop-blur-sm">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Newsletter Santé</h3>
                  <p className="text-muted-foreground text-sm">
                    Recevez nos conseils d'experts et actualités médicales
                  </p>
                </div>
                <div className="space-y-3">
                  <Input 
                    placeholder="votre@email.com" 
                    className="bg-background/50 border-border/30 focus:border-primary/50 transition-colors"
                  />
                  <Button className="w-full gradient-primary text-white shadow-lg hover:shadow-xl transition-all duration-300">
                    S'abonner Gratuitement
                  </Button>
                </div>
              </Card>
              
              <Card className="p-6 shadow-lg border-0 bg-gradient-to-br from-background to-secondary/5">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Articles Populaires
                </h3>
                <div className="space-y-4">
                  {popularPosts.map((post, index) => (
                    <div key={index} className="group">
                      <a href="#" className="flex items-start gap-3 p-3 rounded-lg hover:bg-primary/5 transition-all duration-300">
                        <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-primary/20 to-blue-500/20 rounded-lg flex items-center justify-center text-primary font-bold text-sm">
                          {index + 1}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2">
                            {post}
                          </p>
                        </div>
                      </a>
                    </div>
                  ))}
                </div>
              </Card>
              
              <Card className="p-8 shadow-xl border-0 bg-gradient-to-br from-primary via-primary to-blue-600 text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full blur-xl"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Une Idée d'Article?</h3>
                  <p className="mb-6 text-white/90 text-sm leading-relaxed">
                    Proposez-nous les sujets santé qui vous intéressent le plus
                  </p>
                  <Button variant="secondary" className="bg-white text-primary hover:bg-white/90 font-medium shadow-lg">
                    Suggérer un Sujet
                  </Button>
                </div>
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
