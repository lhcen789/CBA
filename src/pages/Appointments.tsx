import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { useState, useRef, ChangeEvent } from "react";
import { Clock, MapPin, Phone, Upload, FileText, X, CheckCircle2 } from "lucide-react";

export default function Appointments() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [analysisType, setAnalysisType] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      <main className="flex-1">
        <section className="relative pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24 gradient-hero overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/10"></div>
          <div className="absolute top-0 right-0 w-56 sm:w-72 md:w-[26rem] h-56 sm:h-72 md:h-[26rem] bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 sm:w-64 md:w-[24rem] h-48 sm:h-64 md:h-[24rem] bg-secondary/20 rounded-full blur-3xl"></div>

          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 items-center">
              <div className="space-y-6 sm:space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 w-fit text-sm font-medium">
                  Prendre rendez-vous
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-foreground">
                  Planifiez votre visite <span className="text-gradient">en toute simplicité</span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                  Choisissez votre créneau, téléchargez vos documents et recevez une confirmation rapide par email et SMS. Notre équipe vous accompagne avant, pendant et après votre passage au laboratoire.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[{
                    icon: Clock,
                    title: "Horaires flexibles",
                    description: "Du lundi au samedi with horaires étendus"
                  }, {
                    icon: MapPin,
                    title: "Prélèvements",
                    description: "Au laboratoire ou à domicile (+50 DH)"
                  }, {
                    icon: Phone,
                    title: "Support dédié",
                    description: "Assistance téléphonique pour toute question"
                  }].map((item, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-xl bg-background/80 backdrop-blur-sm border border-border/40 shadow-lg shadow-primary/5 space-y-3"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                        <item.icon className="w-5 h-5" />
                      </div>
                      <div className="space-y-1">
                        <p className="font-semibold text-foreground text-sm sm:text-base">{item.title}</p>
                        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Button asChild size="lg" className="gradient-primary text-white shadow-lg shadow-primary/20">
                    <a href="#booking-form">Réserver maintenant</a>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                    <a href="tel:0528XXXXXX">Appeler le laboratoire</a>
                  </Button>
                </div>
              </div>

              <div className="bg-background/80 backdrop-blur-sm border border-border/40 shadow-xl shadow-primary/10 rounded-3xl p-6 sm:p-8 space-y-6">
                <div className="space-y-3">
                  <h2 className="text-2xl font-bold text-foreground">Votre rendez-vous en 3 étapes</h2>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Préparez votre visite en suivant ces recommandations afin de garantir un passage fluide et des analyses précises.
                  </p>
                </div>
                <div className="space-y-4">
                  {["Renseignez vos informations personnelles et le type d'analyse souhaité.", "Téléchargez votre ordonnance si nécessaire et choisissez la date idéale.", "Recevez une confirmation immédiate et présentez-vous muni des documents requis."].map((step, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary font-semibold">
                        {index + 1}
                      </div>
                      <p className="text-sm sm:text-base text-foreground/90 leading-relaxed">{step}</p>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-primary/5 border border-primary/20 space-y-1.5">
                    <p className="text-sm font-semibold text-primary flex items-center gap-2">
                      <Clock className="w-4 h-4" /> Horaires
                    </p>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      Lun-Ven : 7h30 - 19h00<br />Samedi : 8h00 - 13h00
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-secondary/10 border border-secondary/30 space-y-1.5">
                    <p className="text-sm font-semibold text-secondary-foreground flex items-center gap-2">
                      <MapPin className="w-4 h-4" /> Adresse
                    </p>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      Avenue Hassan II, Quartier Talborjt<br />Agadir, Maroc
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-3 p-4 rounded-xl bg-accent/20 border border-border/40">
                  <div>
                    <p className="text-sm font-semibold text-foreground">Besoin d'aide ?</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">Notre équipe vous accompagne pour préparer votre rendez-vous.</p>
                  </div>
                  <Button asChild size="sm" className="gradient-primary text-white">
                    <a href="mailto:contact@labagadir.ma">Nous contacter</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 md:py-20">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="lg:col-span-2">
                <Card id="booking-form" className="shadow-glow border-border/50">
                  <CardHeader className="space-y-3">
                    <div className="inline-flex items-center gap-2 w-fit px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                      Formulaire sécurisé
                    </div>
                    <CardTitle className="text-2xl">Informations du rendez-vous</CardTitle>
                    <CardDescription className="text-sm sm:text-base">
                      Remplissez le formulaire ci-dessous pour réserver votre créneau d'analyse. Les champs marqués d'un * sont obligatoires.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">Prénom *</Label>
                        <Input id="firstName" placeholder="Votre prénom" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Nom *</Label>
                        <Input id="lastName" placeholder="Votre nom" />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input id="email" type="email" placeholder="votre@email.com" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Téléphone *</Label>
                        <Input id="phone" type="tel" placeholder="06 XX XX XX XX" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="analysisType">Type d'analyse *</Label>
                      <Select onValueChange={setAnalysisType}>
                        <SelectTrigger id="analysisType">
                          <SelectValue placeholder="Sélectionnez le type d'analyse" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="bilan-base">Bilan de Base</SelectItem>
                          <SelectItem value="bilan-complet">Bilan Complet</SelectItem>
                          <SelectItem value="bilan-premium">Bilan Premium</SelectItem>
                          <SelectItem value="analyses-specifiques">Analyses Spécifiques</SelectItem>
                          <SelectItem value="ordonnance">Avec ordonnance</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {analysisType === 'ordonnance' && (
                      <div className="space-y-2">
                        <Label>Ajouter votre ordonnance (PDF, JPG, PNG, max 5MB)</Label>
                        <div 
                          className="flex flex-col items-center justify-center w-full p-6 border-2 border-dashed rounded-lg cursor-pointer hover:bg-accent/20 transition-colors"
                          onClick={() => fileInputRef.current?.click()}
                        >
                          <input
                            ref={fileInputRef}
                            type="file"
                            className="hidden"
                            accept=".pdf,.jpg,.jpeg,.png"
                            onChange={handleFileChange}
                          />
                          {!selectedFile ? (
                            <>
                              <Upload className="h-10 w-10 text-muted-foreground mb-2" />
                              <p className="text-sm text-muted-foreground text-center">
                                Cliquez pour télécharger ou glissez-déposez votre ordonnance
                              </p>
                              <p className="text-xs text-muted-foreground mt-1">
                                Formats acceptés: PDF, JPG, PNG (max 5MB)
                              </p>
                            </>
                          ) : (
                            <div className="w-full">
                              <div className="flex items-center justify-between bg-accent/20 p-3 rounded-md">
                                <div className="flex items-center space-x-2">
                                  <FileText className="h-5 w-5 text-primary" />
                                  <span className="text-sm font-medium truncate max-w-[200px]">
                                    {selectedFile.name}
                                  </span>
                                </div>
                                <Button
                                  type="button"
                                  variant="ghost"
                                  size="icon"
                                  className="h-6 w-6"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleRemoveFile();
                                  }}
                                >
                                  <X className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    )}

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Date souhaitée *</Label>
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          className="rounded-md border"
                          disabled={(date) => date < new Date()}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="time">Heure préférée *</Label>
                        <Select>
                          <SelectTrigger id="time">
                            <SelectValue placeholder="Sélectionnez l'heure" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="08:00">08:00</SelectItem>
                            <SelectItem value="09:00">09:00</SelectItem>
                            <SelectItem value="10:00">10:00</SelectItem>
                            <SelectItem value="11:00">11:00</SelectItem>
                            <SelectItem value="14:00">14:00</SelectItem>
                            <SelectItem value="15:00">15:00</SelectItem>
                            <SelectItem value="16:00">16:00</SelectItem>
                            <SelectItem value="17:00">17:00</SelectItem>
                          </SelectContent>
                        </Select>

                        <div className="mt-4 space-y-2">
                          <Label htmlFor="prelevement">Type de prélèvement</Label>
                          <Select>
                            <SelectTrigger id="prelevement">
                              <SelectValue placeholder="Au laboratoire" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="laboratoire">Au laboratoire</SelectItem>
                              <SelectItem value="domicile">À domicile (+50 DH)</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="notes">Notes supplémentaires</Label>
                      <Textarea
                        id="notes"
                        placeholder="Informations complémentaires, pathologies, traitements en cours..."
                        rows={4}
                      />
                    </div>

                    <Button className="w-full gradient-primary text-white flex items-center justify-center gap-2" size="lg">
                      <CheckCircle2 className="w-5 h-5" />
                      Confirmer le rendez-vous
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      * Champs obligatoires. Vous recevrez une confirmation par email et SMS
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card className="shadow-md border-border/50">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-lg">Documents utiles</CardTitle>
                    <CardDescription>Préparez vos pièces avant votre venue</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="mt-1 h-2 w-2 rounded-full bg-primary"></span>
                        Ordonnance médicale (si requise)
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 h-2 w-2 rounded-full bg-primary"></span>
                        Carte d'identité ou passeport
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 h-2 w-2 rounded-full bg-primary"></span>
                        Carte de mutuelle ou d'assurance santé
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 h-2 w-2 rounded-full bg-primary"></span>
                        Respect des consignes de jeûne si indiquées
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="shadow-md border-border/50 bg-secondary/20">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-lg">Conseils pour votre rendez-vous</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 text-sm text-muted-foreground">
                    <p>Arrivez 5 à 10 minutes avant l'heure prévue pour garantir un passage fluide au laboratoire.</p>
                    <p>En cas de prélèvement à domicile, vérifiez que vos coordonnées et instructions d'accès sont exactes.</p>
                    <p>Pour toute urgence ou besoin particulier, contactez-nous afin d'adapter votre prise en charge.</p>
                  </CardContent>
                </Card>

                <Card className="shadow-md border-border/50">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-lg">Contact direct</CardTitle>
                    <CardDescription>Nous restons disponibles pour vous accompagner</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Phone className="w-4 h-4 text-primary" />
                      Tel: 05 28 XX XX XX
                    </div>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 text-primary" />
                      Avenue Hassan II, Quartier Talborjt, Agadir
                    </div>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 text-primary" />
                      Lun-Ven : 7h30 - 19h00 / Samedi : 8h00 - 13h00
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
