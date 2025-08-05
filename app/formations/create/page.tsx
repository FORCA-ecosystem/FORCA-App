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
import { ArrowLeft, Plus, X, Upload, Eye, Video, FileText, Award } from "lucide-react"
import Link from "next/link"
import { VerticalLayout } from "@/components/vertical-layout"
import { useRouter } from "next/navigation"

export default function CreateFormationPage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)
  const [tags, setTags] = useState<string[]>([])
  const [newTag, setNewTag] = useState("")
  const [lessons, setLessons] = useState([{ id: 1, title: "", duration: "", type: "video", description: "" }])

  const handleAddTag = () => {
    if (newTag.trim() && !tags.includes(newTag.trim())) {
      setTags([...tags, newTag.trim()])
      setNewTag("")
    }
  }

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove))
  }

  const handleAddLesson = () => {
    setLessons([
      ...lessons,
      {
        id: lessons.length + 1,
        title: "",
        duration: "",
        type: "video",
        description: "",
      },
    ])
  }

  const handleRemoveLesson = (id: number) => {
    setLessons(lessons.filter((lesson) => lesson.id !== id))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulation de création de formation
    router.push("/formations")
  }

  const steps = [
    { id: 1, title: "Informations générales", description: "Titre, description et catégorie" },
    { id: 2, title: "Contenu du cours", description: "Leçons et structure" },
    { id: 3, title: "Tarification", description: "Prix et modalités" },
    { id: 4, title: "Publication", description: "Vérification et mise en ligne" },
  ]

  return (
    <VerticalLayout userProfile="formateur">
      <div className="p-6 space-y-6 bg-slate-900 text-white min-h-full">
        {/* Header */}
        <div className="flex items-center space-x-4">
          <Link href="/formations">
            <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Retour aux formations
            </Button>
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-white">Créer une nouvelle formation</h1>
            <p className="text-slate-400">Partagez votre expertise et générez des revenus</p>
          </div>
        </div>

        {/* Progress Steps */}
        <Card className="bg-slate-800 border-slate-700">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  <div
                    className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium ${
                      currentStep >= step.id
                        ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                        : "bg-slate-700 text-slate-400"
                    }`}
                  >
                    {step.id}
                  </div>
                  <div className="ml-3 hidden sm:block">
                    <p className="text-sm font-medium text-white">{step.title}</p>
                    <p className="text-xs text-slate-400">{step.description}</p>
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={`w-12 h-0.5 mx-4 ${
                        currentStep > step.id ? "bg-gradient-to-r from-purple-600 to-pink-600" : "bg-slate-700"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <form onSubmit={handleSubmit}>
          {/* Step 1: Informations générales */}
          {currentStep === 1 && (
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Informations générales</CardTitle>
                <CardDescription className="text-slate-400">
                  Créez un titre accrocheur et décrivez votre formation
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="title" className="text-white">
                    Titre de la formation *
                  </Label>
                  <Input
                    id="title"
                    placeholder="Ex: Maîtriser React et Next.js en 30 jours"
                    required
                    className="bg-slate-900 border-slate-600 text-white placeholder-slate-400"
                  />
                  <p className="text-xs text-slate-400">Un titre clair et attractif (max 60 caractères)</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category" className="text-white">
                    Catégorie *
                  </Label>
                  <Select required>
                    <SelectTrigger className="bg-slate-900 border-slate-600 text-white">
                      <SelectValue placeholder="Sélectionnez une catégorie" />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-800 border-slate-700">
                      <SelectItem value="development">Développement & Tech</SelectItem>
                      <SelectItem value="design">Design & Créatif</SelectItem>
                      <SelectItem value="marketing">Marketing Digital</SelectItem>
                      <SelectItem value="business">Business & Entrepreneuriat</SelectItem>
                      <SelectItem value="languages">Langues</SelectItem>
                      <SelectItem value="personal">Développement Personnel</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label className="text-white">Niveau de difficulté *</Label>
                  <RadioGroup defaultValue="intermediate">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="beginner" id="beginner" />
                      <Label htmlFor="beginner" className="text-slate-300">
                        Débutant
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="intermediate" id="intermediate" />
                      <Label htmlFor="intermediate" className="text-slate-300">
                        Intermédiaire
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="advanced" id="advanced" />
                      <Label htmlFor="advanced" className="text-slate-300">
                        Avancé
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description" className="text-white">
                    Description détaillée *
                  </Label>
                  <Textarea
                    id="description"
                    placeholder="Décrivez votre formation, les objectifs d'apprentissage, les prérequis..."
                    rows={6}
                    required
                    className="bg-slate-900 border-slate-600 text-white placeholder-slate-400"
                  />
                  <p className="text-xs text-slate-400">
                    Une description complète aide les étudiants à comprendre ce qu'ils vont apprendre
                  </p>
                </div>

                <div className="space-y-2">
                  <Label className="text-white">Mots-clés</Label>
                  <div className="flex space-x-2">
                    <Input
                      placeholder="Ajouter un mot-clé"
                      value={newTag}
                      onChange={(e) => setNewTag(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), handleAddTag())}
                      className="bg-slate-900 border-slate-600 text-white placeholder-slate-400"
                    />
                    <Button
                      type="button"
                      onClick={handleAddTag}
                      variant="outline"
                      className="border-slate-600 text-slate-300 bg-transparent"
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {tags.map((tag, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="flex items-center gap-1 bg-slate-700 text-slate-300"
                      >
                        {tag}
                        <X className="h-3 w-3 cursor-pointer" onClick={() => handleRemoveTag(tag)} />
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-white">Image de couverture</Label>
                  <div className="border-2 border-dashed border-slate-600 rounded-lg p-8 text-center hover:border-slate-500 transition-colors">
                    <Upload className="h-12 w-12 mx-auto text-slate-400 mb-4" />
                    <p className="text-slate-300 mb-2">Glissez-déposez votre image ici ou cliquez pour parcourir</p>
                    <p className="text-xs text-slate-400">JPG, PNG - Recommandé: 1280x720px - Max 5MB</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 2: Contenu du cours */}
          {currentStep === 2 && (
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Contenu du cours</CardTitle>
                <CardDescription className="text-slate-400">Structurez votre formation en leçons</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-white">Leçons</h3>
                    <Button
                      type="button"
                      onClick={handleAddLesson}
                      variant="outline"
                      className="border-slate-600 text-slate-300 bg-transparent"
                    >
                      <Plus className="h-4 w-4 mr-2" />
                      Ajouter une leçon
                    </Button>
                  </div>

                  {lessons.map((lesson, index) => (
                    <Card key={lesson.id} className="bg-slate-900 border-slate-600">
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between mb-4">
                          <h4 className="font-medium text-white">Leçon {index + 1}</h4>
                          {lessons.length > 1 && (
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              onClick={() => handleRemoveLesson(lesson.id)}
                              className="text-slate-400 hover:text-white"
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          )}
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label className="text-white">Titre de la leçon *</Label>
                            <Input
                              placeholder="Ex: Introduction à React"
                              className="bg-slate-800 border-slate-600 text-white placeholder-slate-400"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label className="text-white">Durée estimée</Label>
                            <Input
                              placeholder="Ex: 15 min"
                              className="bg-slate-800 border-slate-600 text-white placeholder-slate-400"
                            />
                          </div>
                        </div>

                        <div className="mt-4 space-y-2">
                          <Label className="text-white">Type de contenu</Label>
                          <Select defaultValue="video">
                            <SelectTrigger className="bg-slate-800 border-slate-600 text-white">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent className="bg-slate-800 border-slate-700">
                              <SelectItem value="video">
                                <div className="flex items-center">
                                  <Video className="h-4 w-4 mr-2" />
                                  Vidéo
                                </div>
                              </SelectItem>
                              <SelectItem value="text">
                                <div className="flex items-center">
                                  <FileText className="h-4 w-4 mr-2" />
                                  Texte/Article
                                </div>
                              </SelectItem>
                              <SelectItem value="quiz">
                                <div className="flex items-center">
                                  <Award className="h-4 w-4 mr-2" />
                                  Quiz
                                </div>
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="mt-4 space-y-2">
                          <Label className="text-white">Description de la leçon</Label>
                          <Textarea
                            placeholder="Décrivez ce que les étudiants vont apprendre dans cette leçon..."
                            rows={3}
                            className="bg-slate-800 border-slate-600 text-white placeholder-slate-400"
                          />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="bg-slate-900 p-4 rounded-lg border border-slate-600">
                  <h3 className="font-semibold mb-2 flex items-center text-white">
                    <Award className="h-5 w-5 text-purple-400 mr-2" />
                    Options avancées
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="certificate" />
                      <Label htmlFor="certificate" className="text-slate-300">
                        Délivrer un certificat de completion
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="downloadable" />
                      <Label htmlFor="downloadable" className="text-slate-300">
                        Ressources téléchargeables
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="community" />
                      <Label htmlFor="community" className="text-slate-300">
                        Accès à la communauté privée
                      </Label>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 3: Tarification */}
          {currentStep === 3 && (
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Tarification</CardTitle>
                <CardDescription className="text-slate-400">Définissez le prix de votre formation</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label className="text-white">Modèle de tarification *</Label>
                  <RadioGroup defaultValue="paid">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="free" id="free" />
                      <Label htmlFor="free" className="text-slate-300">
                        Gratuit
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="paid" id="paid" />
                      <Label htmlFor="paid" className="text-slate-300">
                        Payant
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="subscription" id="subscription" />
                      <Label htmlFor="subscription" className="text-slate-300">
                        Abonnement mensuel
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="price" className="text-white">
                      Prix (€)
                    </Label>
                    <Input
                      id="price"
                      type="number"
                      placeholder="99"
                      className="bg-slate-900 border-slate-600 text-white placeholder-slate-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="discount" className="text-white">
                      Prix promotionnel (optionnel)
                    </Label>
                    <Input
                      id="discount"
                      type="number"
                      placeholder="79"
                      className="bg-slate-900 border-slate-600 text-white placeholder-slate-400"
                    />
                  </div>
                </div>

                <div className="bg-purple-500/10 p-4 rounded-lg border border-purple-500/30">
                  <h3 className="font-semibold mb-2 flex items-center text-white">
                    <Award className="h-5 w-5 text-purple-400 mr-2" />
                    Conseils de tarification
                  </h3>
                  <ul className="text-sm text-slate-300 space-y-1">
                    <li>• Recherchez les prix de formations similaires</li>
                    <li>• Commencez avec un prix attractif pour vos premiers avis</li>
                    <li>• Proposez des promotions de lancement</li>
                    <li>• Ajustez selon la valeur perçue de votre contenu</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <Label className="text-white">Options de paiement</Label>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="installments" />
                      <Label htmlFor="installments" className="text-slate-300">
                        Paiement en plusieurs fois
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="guarantee" defaultChecked />
                      <Label htmlFor="guarantee" className="text-slate-300">
                        Garantie satisfait ou remboursé 30 jours
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="lifetime" />
                      <Label htmlFor="lifetime" className="text-slate-300">
                        Accès à vie
                      </Label>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 4: Publication */}
          {currentStep === 4 && (
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Prêt à publier</CardTitle>
                <CardDescription className="text-slate-400">Vérifiez votre formation avant publication</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/30">
                  <h3 className="font-semibold text-green-400 mb-4 flex items-center">
                    <Award className="h-5 w-5 mr-2" />
                    Aperçu de votre formation
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Titre:</span>
                      <span className="font-medium text-white">Maîtriser React et Next.js</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Catégorie:</span>
                      <span className="text-slate-300">Développement & Tech</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Niveau:</span>
                      <span className="text-slate-300">Intermédiaire</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Nombre de leçons:</span>
                      <span className="text-slate-300">{lessons.length}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Prix:</span>
                      <span className="font-medium text-white">99€</span>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-500/10 p-4 rounded-lg border border-blue-500/30">
                  <h3 className="font-semibold mb-2 flex items-center text-blue-400">
                    <Eye className="h-5 w-5 mr-2" />
                    Processus de validation
                  </h3>
                  <p className="text-sm text-slate-300 mb-3">
                    Votre formation sera examinée par notre équipe dans les 48h. Vous recevrez une notification une fois
                    approuvée.
                  </p>
                  <ul className="text-sm text-slate-400 space-y-1">
                    <li>✓ Vérification du contenu et de la qualité</li>
                    <li>✓ Conformité aux standards pédagogiques</li>
                    <li>✓ Respect des conditions d'utilisation</li>
                  </ul>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" required />
                  <Label htmlFor="terms" className="text-sm text-slate-300">
                    J'accepte les{" "}
                    <Link href="/legal/instructor-terms" className="text-blue-400 hover:underline">
                      conditions pour formateurs
                    </Link>{" "}
                    et la{" "}
                    <Link href="/legal/content-policy" className="text-blue-400 hover:underline">
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
              className="border-slate-600 text-slate-300 hover:text-white bg-transparent"
            >
              Précédent
            </Button>

            <div className="flex space-x-3">
              <Button
                type="button"
                variant="outline"
                className="border-slate-600 text-slate-300 hover:text-white bg-transparent"
              >
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
                  Publier la formation
                </Button>
              )}
            </div>
          </div>
        </form>
      </div>
    </VerticalLayout>
  )
}
