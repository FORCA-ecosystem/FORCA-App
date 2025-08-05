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
import { ArrowLeft, Plus, X, Upload, Eye, Star, Clock, CheckCircle } from "lucide-react"
import Link from "next/link"
import { DashboardLayout } from "@/components/dashboard-layout"
import { useRouter } from "next/navigation"

export default function CreateServicePage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)
  const [tags, setTags] = useState<string[]>([])
  const [newTag, setNewTag] = useState("")
  const [packages, setPackages] = useState([
    { name: "Basique", price: "", description: "", deliveryTime: "", revisions: "" },
    { name: "Standard", price: "", description: "", deliveryTime: "", revisions: "" },
    { name: "Premium", price: "", description: "", deliveryTime: "", revisions: "" },
  ])

  const handleAddTag = () => {
    if (newTag.trim() && !tags.includes(newTag.trim())) {
      setTags([...tags, newTag.trim()])
      setNewTag("")
    }
  }

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulation de création de service
    router.push("/dashboard")
  }

  const steps = [
    { id: 1, title: "Aperçu du service", description: "Titre, catégorie et description" },
    { id: 2, title: "Tarification", description: "Définissez vos packages et prix" },
    { id: 3, title: "Description détaillée", description: "Galerie et FAQ" },
    { id: 4, title: "Publication", description: "Vérifiez et publiez" },
  ]

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center space-x-4">
          <Link href="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Retour à l'accueil
            </Button>
          </Link>
          <div>
            <h1 className="text-2xl font-bold">Créer un nouveau service</h1>
            <p className="text-gray-600">Vendez vos compétences et développez votre activité</p>
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
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
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
                        currentStep > step.id ? "bg-gradient-to-r from-blue-600 to-purple-600" : "bg-gray-200"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <form onSubmit={handleSubmit}>
          {/* Step 1: Aperçu du service */}
          {currentStep === 1 && (
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle>Aperçu du service</CardTitle>
                <CardDescription>Créez un titre accrocheur et décrivez votre service</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="title">Titre du service *</Label>
                  <Input
                    id="title"
                    placeholder="Ex: Je vais créer une application mobile moderne pour votre entreprise"
                    required
                  />
                  <p className="text-xs text-gray-500">
                    Commencez par "Je vais..." et soyez spécifique (max 80 caractères)
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category">Catégorie *</Label>
                  <Select required>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionnez une catégorie" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="development">Développement &amp; Tech</SelectItem>
                      <SelectItem value="design">Design &amp; Créatif</SelectItem>
                      <SelectItem value="writing">Rédaction &amp; Traduction</SelectItem>
                      <SelectItem value="marketing">Marketing Digital</SelectItem>
                      <SelectItem value="video">Vidéo &amp; Animation</SelectItem>
                      <SelectItem value="music">Musique &amp; Audio</SelectItem>
                      <SelectItem value="business">Business &amp; Conseil</SelectItem>
                      <SelectItem value="lifestyle">Style de vie</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subcategory">Sous-catégorie *</Label>
                  <Select required>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionnez une sous-catégorie" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="web-dev">Développement Web</SelectItem>
                      <SelectItem value="mobile-dev">Développement Mobile</SelectItem>
                      <SelectItem value="desktop-dev">Applications Desktop</SelectItem>
                      <SelectItem value="game-dev">Développement de Jeux</SelectItem>
                      <SelectItem value="ai-ml">IA &amp; Machine Learning</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Mots-clés de recherche</Label>
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
                  <p className="text-xs text-gray-500">
                    Ajoutez jusqu'à 5 mots-clés pour aider les clients à trouver votre service
                  </p>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 2: Tarification */}
          {currentStep === 2 && (
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle>Packages et tarification</CardTitle>
                <CardDescription>Créez différents niveaux de service pour attirer plus de clients</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-3 gap-6">
                  {packages.map((pkg, index) => (
                    <Card key={index} className="border-2 border-gray-200">
                      <CardHeader className="text-center">
                        <CardTitle className="text-lg">{pkg.name}</CardTitle>
                        {index === 1 && <Badge className="mx-auto bg-blue-100 text-blue-800">Populaire</Badge>}
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-2">
                          <Label>Prix (€)</Label>
                          <Input
                            type="number"
                            placeholder="50"
                            value={pkg.price}
                            onChange={(e) => {
                              const newPackages = [...packages]
                              newPackages[index].price = e.target.value
                              setPackages(newPackages)
                            }}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>Description</Label>
                          <Textarea
                            placeholder="Décrivez ce qui est inclus..."
                            rows={3}
                            value={pkg.description}
                            onChange={(e) => {
                              const newPackages = [...packages]
                              newPackages[index].description = e.target.value
                              setPackages(newPackages)
                            }}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>Délai de livraison</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Sélectionner" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1">1 jour</SelectItem>
                              <SelectItem value="3">3 jours</SelectItem>
                              <SelectItem value="7">7 jours</SelectItem>
                              <SelectItem value="14">14 jours</SelectItem>
                              <SelectItem value="30">30 jours</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label>Révisions incluses</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Nombre" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="0">0 révision</SelectItem>
                              <SelectItem value="1">1 révision</SelectItem>
                              <SelectItem value="2">2 révisions</SelectItem>
                              <SelectItem value="3">3 révisions</SelectItem>
                              <SelectItem value="unlimited">Illimitées</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2 flex items-center">
                    <Star className="h-5 w-5 text-blue-600 mr-2" />
                    Conseils pour vos prix
                  </h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Recherchez les prix de la concurrence dans votre domaine</li>
                    <li>• Commencez avec des prix compétitifs pour obtenir vos premiers avis</li>
                    <li>• Augmentez progressivement vos tarifs avec votre réputation</li>
                    <li>• Proposez des options supplémentaires pour augmenter la valeur</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 3: Description détaillée */}
          {currentStep === 3 && (
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle>Description et galerie</CardTitle>
                <CardDescription>Ajoutez des détails et des visuels pour convaincre vos clients</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="description">Description complète *</Label>
                  <Textarea
                    id="description"
                    placeholder="Décrivez en détail votre service, votre processus de travail, ce qui vous différencie..."
                    rows={8}
                    required
                  />
                  <p className="text-xs text-gray-500">
                    Une description détaillée augmente vos chances d'être choisi (min 120 caractères)
                  </p>
                </div>

                <div className="space-y-2">
                  <Label>Galerie d'images</Label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors cursor-pointer"
                      >
                        <Upload className="h-8 w-8 mx-auto text-gray-400 mb-2" />
                        <p className="text-sm text-gray-600">Image {i}</p>
                        <p className="text-xs text-gray-500">JPG, PNG - Max 5MB</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-gray-500">
                    La première image sera votre image principale. Ajoutez des exemples de votre travail.
                  </p>
                </div>

                <div className="space-y-2">
                  <Label>Vidéo de présentation (optionnel)</Label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                    <Upload className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                    <p className="text-gray-600 mb-2">Ajoutez une vidéo de présentation</p>
                    <p className="text-sm text-gray-500">MP4, MOV - Max 100MB - Durée max 75 secondes</p>
                    <Button variant="outline" className="mt-4 bg-transparent">
                      Choisir un fichier
                    </Button>
                  </div>
                </div>

                <div className="space-y-4">
                  <Label>FAQ (Questions fréquentes)</Label>
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
                <CardTitle>Prêt à publier</CardTitle>
                <CardDescription>Vérifiez votre service avant publication</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-green-800 mb-4 flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    Aperçu de votre service
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Titre:</span>
                      <span className="font-medium">Je vais créer une application mobile moderne</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Catégorie:</span>
                      <span>Développement &amp; Tech &gt; Développement Mobile</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Prix de base:</span>
                      <span className="font-medium">À partir de 50€</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Délai:</span>
                      <span>3 jours</span>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2 flex items-center">
                    <Clock className="h-5 w-5 text-blue-600 mr-2" />
                    Processus d'approbation
                  </h3>
                  <p className="text-sm text-gray-700 mb-3">
                    Votre service sera examiné par notre équipe dans les 24h. Vous recevrez une notification une fois
                    approuvé.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>✓ Vérification du contenu et des images</li>
                    <li>✓ Conformité aux conditions d'utilisation</li>
                    <li>✓ Qualité et originalité du service</li>
                  </ul>
                </div>

                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="terms" required className="rounded" />
                  <Label htmlFor="terms" className="text-sm">
                    J'accepte les{" "}
                    <Link href="#" className="text-blue-600 hover:underline">
                      conditions de vente
                    </Link>{" "}
                    et la{" "}
                    <Link href="#" className="text-blue-600 hover:underline">
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
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  Suivant
                </Button>
              ) : (
                <Button
                  type="submit"
                  className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
                >
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
