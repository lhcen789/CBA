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
import { Clock, MapPin, Phone, Upload, FileText, X } from "lucide-react";

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
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h1 className="text-4xl md:text-5xl font-bold">
              Prendre <span className="text-gradient">Rendez-vous</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Réservez votre créneau en quelques clics
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Informations du rendez-vous</CardTitle>
                  <CardDescription>
                    Remplissez le formulaire ci-dessous pour prendre rendez-vous
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

                  <Button className="w-full gradient-primary text-white" size="lg">
                    Confirmer le rendez-vous
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    * Champs obligatoires. Vous recevrez une confirmation par email et SMS
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Informations pratiques</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-sm">Horaires</p>
                      <p className="text-xs text-muted-foreground">
                        Lun-Ven: 7h30-19h00<br />
                        Samedi: 8h00-13h00
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-sm">Adresse</p>
                      <p className="text-xs text-muted-foreground">
                        Avenue Hassan II, Quartier Talborjt<br />
                        Agadir, Maroc
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-sm">Contact</p>
                      <p className="text-xs text-muted-foreground">
                        Tel: 05 28 XX XX XX<br />
                        Email: contact@labagadir.ma
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-primary/5 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-base">À savoir avant votre visite</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Munissez-vous de votre ordonnance</li>
                    <li>• Carte d'identité ou passeport</li>
                    <li>• Carte de mutuelle si applicable</li>
                    <li>• Jeûne si nécessaire (nous vous préviendrons)</li>
                    <li>• Arrivez 5-10 min avant l'heure</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
