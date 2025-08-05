"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ArrowLeft, Plus, X, Upload, Eye } from "lucide-react"
import Link from "next/link"
import { DashboardLayout } from "@/components/dashboard-layout"
import { useRouter } from "next/navigation"

export default function CreateMissionPage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)
  const [skills, setSkills] = useState<string[]>([])
  const [newSkill, setNewSkill] = useState("")
  const [missionType, setMissionType] = useState("project")
  const [budgetType, setBudgetType] = useState("fixed")

  const handleAddSkill = () => {
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      setSkills([...skills, newSkill.trim()])
      setNewSkill("")
    }
  }

  const handleRemoveSkill = (skillToRemove: string) => {
    setSkills(skills.filter((skill) => skill !== skillToRemove))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulation de création de mission
    router.push("/missions")
  }

  const steps = [
    { id: 1, title: "Informations générales", description: "Titre et description de votre mission" },
    { id: 2, title: "Compétences requises", description: "Définissez les compétences nécessaires" },
    { id: 3, title: "Budget et durée", description: "Fixez votre budget et vos délais" },
    { id: 4, title: "Finalisation", description: "Vérifiez et publiez votre mission" },
  ]

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center space-x-4">
          <Link href="/missions">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Retour aux missions
            </Button>
          </Link>
          <div>
            <h1 className="text-2xl font-bold">Publier une nouvelle mission</h1>
            <p className="text-gray-600">Trouvez le freelance parfait pour votre projet</p>
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
          {/* Step 1: Informations générales */}
          {currentStep === 1 && (
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle>Informations générales</CardTitle>
                <CardDescription>Décrivez votre mission de manière claire et attractive</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="title">Titre de la mission *</Label>
                  <Input id="title" placeholder="Ex: Développement d'une application mobile" required />
                  <p className="text-xs text-gray-500">Un titre clair attire plus de candidatures</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category">Catégorie *</Label>
                  <Select required>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionnez une catégorie" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="development">Développement</SelectItem>
                      <SelectItem value="design">Design</SelectItem>
                      <SelectItem value="writing">Rédaction</SelectItem>
                      <SelectItem value="translation">Traduction</SelectItem>
                      <SelectItem value="marketing">Marketing</SelectItem>
                      <SelectItem value="consulting">Conseil</SelectItem>
                      <SelectItem value="other">Autre</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Type de mission *</Label>
                  <RadioGroup value={missionType} onValueChange={setMissionType}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="project" id="project" />
                      <Label htmlFor="project">Projet ponctuel</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="ongoing" id="ongoing" />
                      <Label htmlFor="ongoing">Mission récurrente</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="fulltime" id="fulltime" />
                      <Label htmlFor="fulltime">Temps plein</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description détaillée *</Label>
                  <Textarea
                    id="description"
                    placeholder="Décrivez votre projet, vos attentes, les livrables attendus..."
                    rows={6}
                    required
                  />
                  <p className="text-xs text-gray-500">
                    Plus votre description est détaillée, mieux les freelances pourront évaluer votre projet
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Localisation</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionnez une localisation" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="remote">Télétravail</SelectItem>
                      <SelectItem value="paris">Paris, France</SelectItem>
                      <SelectItem value="lyon">Lyon, France</SelectItem>
                      <SelectItem value="marseille">Marseille, France</SelectItem>
                      <SelectItem value="toulouse">Toulouse, France</SelectItem>
                      <SelectItem value="other">Autre</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 2: Compétences requises */}
          {currentStep === 2 && (
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle>Compétences requises</CardTitle>
                <CardDescription>Définissez les compétences et le niveau d'expérience nécessaires</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label>Niveau d'expérience requis *</Label>
                  <RadioGroup defaultValue="intermediate">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="beginner" id="beginner" />
                      <Label htmlFor="beginner">Débutant (0-2 ans)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="intermediate" id="intermediate" />
                      <Label htmlFor="intermediate">Intermédiaire (2-5 ans)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="expert" id="expert" />
                      <Label htmlFor="expert">Expert (5+ ans)</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label>Compétences techniques *</Label>
                  <div className="flex space-x-2">
                    <Input
                      placeholder="Ajouter une compétence"
                      value={newSkill}
                      onChange={(e) => setNewSkill(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), handleAddSkill())}
                    />
                    <Button type="button" onClick={handleAddSkill} variant="outline">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {skills.map((skill, index) => (
                      <Badge key={index} variant="secondary" className="flex items-center gap-1">
                        {skill}
                        <X className="h-3 w-3 cursor-pointer" onClick={() => handleRemoveSkill(skill)} />
                      </Badge>
                    ))}
                  </div>
                  <p className="text-xs text-gray-500">
                    Ajoutez les technologies, outils ou compétences spécifiques requis
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="languages">Langues requises</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionnez les langues" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="french">Français</SelectItem>
                      <SelectItem value="english">Anglais</SelectItem>
                      <SelectItem value="spanish">Espagnol</SelectItem>
                      <SelectItem value="german">Allemand</SelectItem>
                      <SelectItem value="italian">Italien</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-4">
                  <Label>Critères supplémentaires</Label>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="portfolio" />
                      <Label htmlFor="portfolio">Portfolio requis</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="references" />
                      <Label htmlFor="references">Références clients requises</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="certification" />
                      <Label htmlFor="certification">Certifications professionnelles</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="availability" />
                      <Label htmlFor="availability">Disponibilité immédiate</Label>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 3: Budget et durée */}
          {currentStep === 3 && (
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle>Budget et durée</CardTitle>
                <CardDescription>Définissez votre budget et vos contraintes temporelles</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label>Type de budget *</Label>
                  <RadioGroup value={budgetType} onValueChange={setBudgetType}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="fixed" id="fixed" />
                      <Label htmlFor="fixed">Budget fixe</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="hourly" id="hourly" />
                      <Label htmlFor="hourly">Tarif horaire</Label>
                    </div>
                  </RadioGroup>
                </div>

                {budgetType === "fixed" ? (
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="budgetMin">Budget minimum (€)</Label>
                      <Input id="budgetMin" type="number" placeholder="1000" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="budgetMax">Budget maximum (€)</Label>
                      <Input id="budgetMax" type="number" placeholder="5000" />
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="hourlyMin">Tarif horaire min (€/h)</Label>
                      <Input id="hourlyMin" type="number" placeholder="25" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="hourlyMax">Tarif horaire max (€/h)</Label>
                      <Input id="hourlyMax" type="number" placeholder="75" />
                    </div>
                  </div>
                )}

                <div className="space-y-2">
                  <Label htmlFor="duration">Durée estimée *</Label>
                  <Select required>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionnez la durée" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1week">Moins d'une semaine</SelectItem>
                      <SelectItem value="2weeks">1-2 semaines</SelectItem>
                      <SelectItem value="1month">1 mois</SelectItem>
                      <SelectItem value="3months">1-3 mois</SelectItem>
                      <SelectItem value="6months">3-6 mois</SelectItem>
                      <SelectItem value="longterm">Plus de 6 mois</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="deadline">Date limite de candidature</Label>
                  <Input id="deadline" type="date" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="startDate">Date de début souhaitée</Label>
                  <Input id="startDate" type="date" />
                </div>

                <div className="space-y-4">
                  <Label>Options de paiement</Label>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="escrow" defaultChecked />
                      <Label htmlFor="escrow">Utiliser le système d'escrow FORCA</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="milestones" />
                      <Label htmlFor="milestones">Paiement par jalons</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="advance" />
                      <Label htmlFor="advance">Acompte à la signature</Label>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 4: Finalisation */}
          {currentStep === 4 && (
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle>Finalisation</CardTitle>
                <CardDescription>Vérifiez les informations et publiez votre mission</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h3 className="font-semibold mb-2">Récapitulatif de votre mission</h3>
                    <div className="space-y-2 text-sm">
                      <p>
                        <strong>Titre:</strong> Développement d'une application mobile
                      </p>
                      <p>
                        <strong>Catégorie:</strong> Développement
                      </p>
                      <p>
                        <strong>Budget:</strong> 3,000€ - 5,000€
                      </p>
                      <p>
                        <strong>Durée:</strong> 1-3 mois
                      </p>
                      <p>
                        <strong>Compétences:</strong> React Native, Node.js, MongoDB
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Visibilité de la mission</Label>
                    <RadioGroup defaultValue="public">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="public" id="public" />
                        <Label htmlFor="public">Mission publique (visible par tous)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="private" id="private" />
                        <Label htmlFor="private">Mission privée (sur invitation uniquement)</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="attachments">Fichiers joints (optionnel)</Label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                      <Upload className="h-8 w-8 mx-auto text-gray-400 mb-2" />
                      <p className="text-sm text-gray-600">
                        Glissez-déposez vos fichiers ici ou cliquez pour parcourir
                      </p>
                      <p className="text-xs text-gray-500 mt-1">PDF, DOC, images - Max 10MB par fichier</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <Label>Paramètres de notification</Label>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="emailNotif" defaultChecked />
                        <Label htmlFor="emailNotif">Recevoir les candidatures par email</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="pushNotif" defaultChecked />
                        <Label htmlFor="pushNotif">Notifications push sur mobile</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="weeklyReport" />
                        <Label htmlFor="weeklyReport">Rapport hebdomadaire d'activité</Label>
                      </div>
                    </div>
                  </div>
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
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  Publier la mission
                </Button>
              )}
            </div>
          </div>
        </form>
      </div>
    </DashboardLayout>
  )
}
