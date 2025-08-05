"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft, Plus, X, Upload, Eye, Globe, Copy, Star, Award, Zap } from "lucide-react"
import Link from "next/link"
import { DashboardLayout } from "@/components/dashboard-layout"
import { useRouter } from "next/navigation"

export default function CreateVitrinePage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)
  const [tags, setTags] = useState<string[]>([])
  const [newTag, setNewTag] = useState("")
  const [includes, setIncludes] = useState<string[]>([""])
  const [pricing, setPricing] = useState({
    type: "fixed",
    basePrice: "",
    premiumPrice: "",
    enterprisePrice: "",
  })

  const handleAddTag = () => {
    if (newTag.trim() && !tags.includes(newTag.trim())) {
      setTags([...tags, newTag.trim()])
      setNewTag("")
    }
  }

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove))
  }

  const handleAddInclude = () => {
    setIncludes([...includes, ""])
  }

  const handleRemoveInclude = (index: number) => {
    setIncludes(includes.filter((_, i) => i !== index))
  }

  const handleIncludeChange = (index: number, value: string) => {
    const newIncludes = [...includes]
    newIncludes[index] = value
    setIncludes(newIncludes)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    router.push("/vitrine")
  }

  const steps = [
    { id: 1, title: "Service de base", description: "Informations principales" },
    { id: 2, title: "Tarification", description: "Prix et packages" },
    { id: 3, title: "Présentation", description: "Galerie et description" },
    { id: 4, title: "Publication", description: "URL et mise en ligne" },
  ]

  const generateUrl = (title: string) => {
    const username = "marie-dubois" // Récupéré du profil utilisateur
    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .slice(0, 50)
    return `forca.app/${username}/${slug}`
  }

  return (
    <DashboardLayout userProfile="freelance">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center space-x-4">
          <Link href="/vitrine">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Retour à la vitrine
            </Button>
          </Link>
          <div>
            <h1 className="text-2xl font-bold">Créer un microservice</h1>
            <p className="text-gray-600">Créez votre service personnalisé avec URL publique</p>
          </div>
        </div>

        {/* Progress Steps */}
        <Card className="border-0 shadow-md">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  <div
                    className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium ${
                      currentStep >= step.id
                        ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                        : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {step.id}
                  </div>
                  <div className="ml-3 hidden sm:block">
                    <p className="text-sm font-medium">{step.title}</p>
                    <p className="text-xs text-gray-500">{step.description}</p>
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={`w-12 h-0.5 mx-4 ${
                        currentStep > step.id ? "bg-gradient-to-r from-purple-600 to-pink-600" : "bg-gray-200"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <form onSubmit={handleSubmit}>
          {/* Step 1: Service de base */}
          {currentStep === 1 && (
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle>Informations du service</CardTitle>
                <CardDescription>Décrivez votre microservice de manière attractive</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="title">Titre du service *</Label>
                  <Input id="title" placeholder="Ex: Logo professionnel + Charte graphique complète" required />
                  <p className="text-xs text-gray-500">Soyez spécifique et attractif (max 80 caractères)</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category">Catégorie *</Label>
                  <Select required>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionnez une catégorie" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="development">Développement & Tech</SelectItem>
                      <SelectItem value="design">Design & Créatif</SelectItem>
                      <SelectItem value="marketing">Marketing Digital</SelectItem>
                      <SelectItem value="writing">Rédaction & Contenu</SelectItem>
                      <SelectItem value="translation">Traduction</SelectItem>
                      <SelectItem value="video">Vidéo & Animation</SelectItem>
                      <SelectItem value="business">Business & Conseil</SelectItem>
                      <SelectItem value="training">Formation & Coaching</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description détaillée *</Label>
                  <Textarea
                    id="description"
                    placeholder="Décrivez précisément ce que vous proposez, le processus, les livrables..."
                    rows={4}
                    required
                  />
                  <p className="text-xs text-gray-500">Une description claire augmente vos chances de vente</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="deliveryTime">Délai de livraison *</Label>
                  <Select required>
                    <SelectTrigger>
                      <SelectValue placeholder="Temps de réalisation" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="24h">24 heures</SelectItem>
                      <SelectItem value="2-3j">2-3 jours</SelectItem>
                      <SelectItem value="3-5j">3-5 jours</SelectItem>
                      <SelectItem value="5-7j">5-7 jours</SelectItem>
                      <SelectItem value="7-14j">1-2 semaines</SelectItem>
                      <SelectItem value="14-30j">2-4 semaines</SelectItem>
                      <SelectItem value="30j+">Plus d'un mois</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Mots-clés du service</Label>
                  <div className="flex space-x-2">
                    <Input
                      placeholder="Ajouter un mot-clé"
                      value={newTag}
                      onChange={(e) => setNewTag(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), handleAddTag())}
                    />
                    <Button type="button" onClick={handleAddTag} variant="outline">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="flex items-center gap-1">
                        {tag}
                        <X className="h-3 w-3 cursor-pointer" onClick={() => handleRemoveTag(tag)} />
                      </Badge>
                    ))}
                  </div>
                  <p className="text-xs text-gray-500">Ajoutez jusqu'à 5 mots-clés pour améliorer la recherche</p>
                </div>

                <div className="space-y-2">
                  <Label>Ce qui est inclus dans votre service</Label>
                  {includes.map((include, index) => (
                    <div key={index} className="flex space-x-2">
                      <Input
                        placeholder="Ex: Logo vectoriel haute définition"
                        value={include}
                        onChange={(e) => handleIncludeChange(index, e.target.value)}
                      />
                      {includes.length > 1 && (
                        <Button type="button" variant="outline" size="sm" onClick={() => handleRemoveInclude(index)}>
                          <X className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  ))}
                  <Button type="button" variant="outline" size="sm" onClick={handleAddInclude}>
                    <Plus className="h-4 w-4 mr-2" />
                    Ajouter un élément
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 2: Tarification */}
          {currentStep === 2 && (
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle>Tarification de votre service</CardTitle>
                <CardDescription>Définissez vos prix de manière compétitive</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label>Type de tarification *</Label>
                  <RadioGroup value={pricing.type} onValueChange={(value) => setPricing({ ...pricing, type: value })}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="fixed" id="fixed" />
                      <Label htmlFor="fixed">Prix fixe</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="packages" id="packages" />
                      <Label htmlFor="packages">3 packages (Base, Standard, Premium)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="custom" id="custom" />
                      <Label htmlFor="custom">Sur devis</Label>
                    </div>
                  </RadioGroup>
                </div>

                {pricing.type === "fixed" && (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="basePrice">Prix de votre service (€) *</Label>
                      <Input
                        id="basePrice"
                        type="number"
                        placeholder="250"
                        value={pricing.basePrice}
                        onChange={(e) => setPricing({ ...pricing, basePrice: e.target.value })}
                      />
                    </div>
                  </div>
                )}

                {pricing.type === "packages" && (
                  <div className="grid md:grid-cols-3 gap-4">
                    <Card className="border-2">
                      <CardHeader className="text-center">
                        <CardTitle className="text-lg">Package Base</CardTitle>
                        <Badge variant="outline">Essentiel</Badge>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="space-y-2">
                          <Label>Prix (€)</Label>
                          <Input type="number" placeholder="150" />
                        </div>
                        <div className="space-y-2">
                          <Label>Description</Label>
                          <Textarea placeholder="Version de base..." rows={2} />
                        </div>
                        <div className="space-y-2">
                          <Label>Délai</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="5-7 jours" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="3-5j">3-5 jours</SelectItem>
                              <SelectItem value="5-7j">5-7 jours</SelectItem>
                              <SelectItem value="7-10j">7-10 jours</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-2 border-blue-500">
                      <CardHeader className="text-center">
                        <CardTitle className="text-lg">Package Standard</CardTitle>
                        <Badge className="bg-blue-500">Populaire</Badge>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="space-y-2">
                          <Label>Prix (€)</Label>
                          <Input type="number" placeholder="250" />
                        </div>
                        <div className="space-y-2">
                          <Label>Description</Label>
                          <Textarea placeholder="Version complète..." rows={2} />
                        </div>
                        <div className="space-y-2">
                          <Label>Délai</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="3-5 jours" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="2-3j">2-3 jours</SelectItem>
                              <SelectItem value="3-5j">3-5 jours</SelectItem>
                              <SelectItem value="5-7j">5-7 jours</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-2 border-purple-500">
                      <CardHeader className="text-center">
                        <CardTitle className="text-lg">Package Premium</CardTitle>
                        <Badge className="bg-purple-500">Premium</Badge>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="space-y-2">
                          <Label>Prix (€)</Label>
                          <Input type="number" placeholder="450" />
                        </div>
                        <div className="space-y-2">
                          <Label>Description</Label>
                          <Textarea placeholder="Version premium..." rows={2} />
                        </div>
                        <div className="space-y-2">
                          <Label>Délai</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="24-48h" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="24h">24 heures</SelectItem>
                              <SelectItem value="48h">48 heures</SelectItem>
                              <SelectItem value="2-3j">2-3 jours</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                )}

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2 flex items-center">
                    <Star className="h-5 w-5 text-purple-600 mr-2" />
                    Conseils de tarification
                  </h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Analysez les prix de la concurrence sur des services similaires</li>
                    <li>• Commencez avec des prix attractifs pour obtenir vos premiers avis</li>
                    <li>• Proposez plusieurs options pour toucher différents budgets</li>
                    <li>• N'oubliez pas d'inclure votre expertise dans le prix</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <Label>Options supplémentaires</Label>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="express" />
                      <Label htmlFor="express">Livraison express (48h) - Supplément +50%</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="revisions" />
                      <Label htmlFor="revisions">Révisions illimitées - Supplément +25%</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="commercial" />
                      <Label htmlFor="commercial">Licence commerciale étendue - Supplément +100%</Label>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 3: Présentation */}
          {currentStep === 3 && (
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle>Présentation visuelle</CardTitle>
                <CardDescription>Ajoutez des visuels pour convaincre vos clients</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label>Image principale du service *</Label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition-colors cursor-pointer">
                    <Upload className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                    <p className="text-gray-600 mb-2">Glissez-déposez votre image ici ou cliquez pour parcourir</p>
                    <p className="text-sm text-gray-500">JPG, PNG - Recommandé: 800x600px - Max 5MB</p>
                  </div>
                  <p className="text-xs text-gray-500">Cette image sera affichée dans la liste des services</p>
                </div>

                <div className="space-y-2">
                  <Label>Galerie d'exemples (optionnel)</Label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors cursor-pointer"
                      >
                        <Upload className="h-8 w-8 mx-auto text-gray-400 mb-2" />
                        <p className="text-sm text-gray-600">Image {i}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-gray-500">
                    Ajoutez des exemples de votre travail pour rassurer les clients
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="portfolio">Lien vers votre portfolio (optionnel)</Label>
                  <Input id="portfolio" type="url" placeholder="https://monportfolio.com" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="video">Vidéo de présentation (optionnel)</Label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                    <Upload className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                    <p className="text-gray-600 mb-2">Ajoutez une vidéo de présentation</p>
                    <p className="text-sm text-gray-500">MP4, MOV - Max 100MB - Durée max 60 secondes</p>
                    <Button variant="outline" className="mt-4 bg-transparent">
                      Choisir un fichier
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="faq">FAQ - Questions fréquentes</Label>
                  <div className="space-y-3">
                    {[1, 2].map((i) => (
                      <div key={i} className="border rounded-lg p-4">
                        <div className="space-y-3">
                          <Input placeholder={`Question ${i}`} />
                          <Textarea placeholder="Réponse..." rows={2} />
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button type="button" variant="outline" size="sm">
                    <Plus className="h-4 w-4 mr-2" />
                    Ajouter une question
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 4: Publication */}
          {currentStep === 4 && (
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle>Publication de votre service</CardTitle>
                <CardDescription>Configurez votre URL et mettez en ligne</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-green-800 mb-4 flex items-center">
                    <Award className="h-5 w-5 mr-2" />
                    Aperçu de votre service
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Titre:</span>
                      <span className="font-medium">Logo professionnel + Charte graphique</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Catégorie:</span>
                      <span>Design & Créatif</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Prix:</span>
                      <span className="font-medium text-green-600">À partir de 250€</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Délai:</span>
                      <span>3-5 jours</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="serviceUrl">URL de votre service</Label>
                  <div className="flex space-x-2">
                    <div className="flex-1 relative">
                      <Input
                        id="serviceUrl"
                        value={generateUrl("Logo professionnel + Charte graphique")}
                        readOnly
                        className="pr-10"
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0"
                        onClick={() =>
                          navigator.clipboard.writeText(generateUrl("Logo professionnel + Charte graphique"))
                        }
                      >
                        <Copy className="h-3 w-3" />
                      </Button>
                    </div>
                    <Button variant="outline" size="sm">
                      <Globe className="h-4 w-4 mr-2" />
                      Aperçu
                    </Button>
                  </div>
                  <p className="text-xs text-gray-500">
                    Cette URL sera accessible publiquement et vous pourrez la partager sur vos réseaux sociaux
                  </p>
                </div>

                <div className="space-y-2">
                  <Label>Visibilité du service</Label>
                  <RadioGroup defaultValue="public">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="public" id="public" />
                      <Label htmlFor="public">Public - Visible par tous sur FORCA</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="unlisted" id="unlisted" />
                      <Label htmlFor="unlisted">Non répertorié - Accessible uniquement via le lien direct</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2 flex items-center">
                    <Zap className="h-5 w-5 text-blue-600 mr-2" />
                    Optimisations recommandées
                  </h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>✓ Ajoutez au moins 3 exemples dans votre galerie</li>
                    <li>✓ Rédigez une FAQ complète avec 5-7 questions</li>
                    <li>✓ Optimisez vos mots-clés pour le SEO</li>
                    <li>✓ Ajoutez une vidéo de présentation courte</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <Label>Paramètres de notification</Label>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="emailOrders" defaultChecked />
                      <Label htmlFor="emailOrders">Recevoir les commandes par email</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="pushOrders" defaultChecked />
                      <Label htmlFor="pushOrders">Notifications push pour les nouvelles commandes</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="weeklyStats" />
                      <Label htmlFor="weeklyStats">Rapport hebdomadaire des performances</Label>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" required />
                  <Label htmlFor="terms" className="text-sm">
                    J'accepte les{" "}
                    <Link href="/legal/seller-terms" className="text-blue-600 hover:underline">
                      conditions de vente
                    </Link>{" "}
                    et la{" "}
                    <Link href="/legal/content-policy" className="text-blue-600 hover:underline">
                      politique de contenu
                    </Link>
                  </Label>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between">
            <Button
              type="button"
              variant="outline"
              onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
              disabled={currentStep === 1}
            >
              Précédent
            </Button>

            <div className="flex space-x-3">
              <Button type="button" variant="outline">
                <Eye className="h-4 w-4 mr-2" />
                Aperçu
              </Button>

              {currentStep < 4 ? (
                <Button
                  type="button"
                  onClick={() => setCurrentStep(Math.min(4, currentStep + 1))}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                >
                  Suivant
                </Button>
              ) : (
                <Button
                  type="submit"
                  className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
                >
                  <Globe className="h-4 w-4 mr-2" />
                  Publier le service
                </Button>
              )}
            </div>
          </div>
        </form>
      </div>
    </DashboardLayout>
  )
}
