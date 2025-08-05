"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import {
  ArrowLeft,
  Mail,
  Facebook,
  Linkedin,
  User,
  Building,
  GraduationCap,
  Shield,
  CheckCircle,
  Star,
} from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useAuth } from "@/contexts/auth-context"

export default function AuthPage() {
  const [userType, setUserType] = useState("freelance")
  const [currentStep, setCurrentStep] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    phone: "",
    company: "",
    skills: [],
    experience: "",
    specialization: "",
    bio: "",
  })

  const router = useRouter()
  const { login } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const success = await login(formData.email, formData.password, userType)
      if (success) {
        router.push("/dashboard")
      }
    } catch (error) {
      console.error("Erreur de connexion:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Pour la démo, on utilise le type de profil sélectionné
      const success = await login(formData.email, formData.password, userType)
      if (success) {
        router.push("/dashboard")
      }
    } catch (error) {
      console.error("Erreur de connexion:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const userTypes = [
    {
      id: "freelance",
      title: "Freelance",
      description: "Je veux vendre mes services et trouver des missions",
      icon: User,
      color: "from-blue-500 to-blue-600",
      benefits: ["Accès à des milliers de missions", "Paiements sécurisés", "Outils de gestion", "Formation gratuite"],
    },
    {
      id: "client",
      title: "Client / Entreprise",
      description: "Je cherche des talents pour mes projets",
      icon: Building,
      color: "from-purple-500 to-purple-600",
      benefits: ["Accès aux meilleurs talents", "Gestion de projets", "Support dédié", "Facturation simplifiée"],
    },
    {
      id: "apprenant",
      title: "Apprenant",
      description: "Je veux suivre des formations et me former",
      icon: GraduationCap,
      color: "from-green-500 to-green-600",
      benefits: ["Formations de qualité", "Certificats reconnus", "Suivi personnalisé", "Communauté d'apprenants"],
    },
    {
      id: "admin",
      title: "Administrateur",
      description: "Accès administration (sur invitation)",
      icon: Shield,
      color: "from-red-500 to-red-600",
      benefits: ["Gestion complète", "Analytics avancés", "Modération", "Configuration système"],
    },
  ]

  const selectedUserType = userTypes.find((type) => type.id === userType)

  const FreelanceForm = () => (
    <div className="space-y-4">
      {currentStep === 1 && (
        <>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">Prénom *</Label>
              <Input
                id="firstName"
                required
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Nom *</Label>
              <Input
                id="lastName"
                required
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Téléphone</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Mot de passe *</Label>
            <Input
              id="password"
              type="password"
              required
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
          </div>
        </>
      )}

      {currentStep === 2 && (
        <>
          <div className="space-y-2">
            <Label>Spécialisation *</Label>
            <Select
              required
              value={formData.specialization}
              onValueChange={(value) => setFormData({ ...formData, specialization: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Choisissez votre domaine" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="web-dev">Développement Web</SelectItem>
                <SelectItem value="mobile-dev">Développement Mobile</SelectItem>
                <SelectItem value="design">Design & UI/UX</SelectItem>
                <SelectItem value="marketing">Marketing Digital</SelectItem>
                <SelectItem value="writing">Rédaction & Contenu</SelectItem>
                <SelectItem value="translation">Traduction</SelectItem>
                <SelectItem value="video">Vidéo & Animation</SelectItem>
                <SelectItem value="consulting">Conseil & Business</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Niveau d'expérience *</Label>
            <RadioGroup
              value={formData.experience}
              onValueChange={(value) => setFormData({ ...formData, experience: value })}
            >
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
            <Label htmlFor="bio">Présentation courte</Label>
            <Textarea
              id="bio"
              placeholder="Décrivez brièvement votre expertise et ce qui vous différencie..."
              rows={3}
              value={formData.bio}
              onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
            />
          </div>
        </>
      )}
    </div>
  )

  const ClientForm = () => (
    <div className="space-y-4">
      {currentStep === 1 && (
        <>
          <div className="space-y-2">
            <Label htmlFor="company">Nom de l'entreprise *</Label>
            <Input
              id="company"
              required
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">Prénom *</Label>
              <Input
                id="firstName"
                required
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Nom *</Label>
              <Input
                id="lastName"
                required
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email professionnel *</Label>
            <Input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Téléphone</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Mot de passe *</Label>
            <Input
              id="password"
              type="password"
              required
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
          </div>
        </>
      )}

      {currentStep === 2 && (
        <>
          <div className="space-y-2">
            <Label>Taille de l'entreprise</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Sélectionnez" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="startup">Startup (1-10 employés)</SelectItem>
                <SelectItem value="small">PME (11-50 employés)</SelectItem>
                <SelectItem value="medium">Moyenne (51-200 employés)</SelectItem>
                <SelectItem value="large">Grande (200+ employés)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Secteur d'activité</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Choisissez votre secteur" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="tech">Technologie</SelectItem>
                <SelectItem value="finance">Finance</SelectItem>
                <SelectItem value="healthcare">Santé</SelectItem>
                <SelectItem value="education">Éducation</SelectItem>
                <SelectItem value="retail">Commerce</SelectItem>
                <SelectItem value="manufacturing">Industrie</SelectItem>
                <SelectItem value="services">Services</SelectItem>
                <SelectItem value="other">Autre</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Types de projets recherchés</Label>
            <div className="grid grid-cols-2 gap-2">
              {["Développement", "Design", "Marketing", "Rédaction", "Traduction", "Conseil"].map((type) => (
                <div key={type} className="flex items-center space-x-2">
                  <Checkbox id={type} />
                  <Label htmlFor={type} className="text-sm">
                    {type}
                  </Label>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  )

  const ApprenantForm = () => (
    <div className="space-y-4">
      {currentStep === 1 && (
        <>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">Prénom *</Label>
              <Input
                id="firstName"
                required
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Nom *</Label>
              <Input
                id="lastName"
                required
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Téléphone</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Mot de passe *</Label>
            <Input
              id="password"
              type="password"
              required
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
          </div>
        </>
      )}

      {currentStep === 2 && (
        <>
          <div className="space-y-2">
            <Label>Domaines d'intérêt</Label>
            <div className="grid grid-cols-2 gap-2">
              {["Développement", "Design", "Marketing", "Business", "Langues", "Créatif"].map((domain) => (
                <div key={domain} className="flex items-center space-x-2">
                  <Checkbox id={domain} />
                  <Label htmlFor={domain} className="text-sm">
                    {domain}
                  </Label>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <Label>Niveau actuel</Label>
            <RadioGroup defaultValue="beginner">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="beginner" id="beginner-learn" />
                <Label htmlFor="beginner-learn">Débutant</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="intermediate" id="intermediate-learn" />
                <Label htmlFor="intermediate-learn">Intermédiaire</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="advanced" id="advanced-learn" />
                <Label htmlFor="advanced-learn">Avancé</Label>
              </div>
            </RadioGroup>
          </div>
          <div className="space-y-2">
            <Label htmlFor="bio">Objectifs d'apprentissage</Label>
            <Textarea
              id="bio"
              placeholder="Décrivez vos objectifs et ce que vous souhaitez apprendre..."
              rows={3}
              value={formData.bio}
              onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
            />
          </div>
        </>
      )}
    </div>
  )

  const AdminForm = () => (
    <div className="space-y-4">
      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
        <div className="flex items-center space-x-2 text-red-800">
          <Shield className="h-5 w-5" />
          <span className="font-medium">Accès Administrateur</span>
        </div>
        <p className="text-sm text-red-700 mt-1">
          L'accès administrateur nécessite une invitation et une validation par l'équipe FORCA.
        </p>
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email *</Label>
        <Input
          id="email"
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="inviteCode">Code d'invitation *</Label>
        <Input id="inviteCode" placeholder="Entrez votre code d'invitation" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">Mot de passe *</Label>
        <Input
          id="password"
          type="password"
          required
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />
      </div>
    </div>
  )

  const renderForm = () => {
    switch (userType) {
      case "freelance":
        return <FreelanceForm />
      case "client":
        return <ClientForm />
      case "apprenant":
        return <ApprenantForm />
      case "admin":
        return <AdminForm />
      default:
        return <FreelanceForm />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <div className="mb-6">
          <Link href="/" className="inline-flex items-center text-gray-600 hover:text-gray-900">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour à l'accueil
          </Link>
        </div>

        <Card className="shadow-xl border-0">
          <CardHeader className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">F</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                FORCA
              </span>
            </div>
            <CardTitle>Rejoignez la communauté FORCA</CardTitle>
            <CardDescription>Choisissez votre profil et commencez votre aventure</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="register" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login">Connexion</TabsTrigger>
                <TabsTrigger value="register">Inscription</TabsTrigger>
              </TabsList>

              <TabsContent value="login" className="space-y-4">
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label>Type de profil</Label>
                    <Select value={userType} onValueChange={setUserType}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="freelance">Freelance</SelectItem>
                        <SelectItem value="client">Client</SelectItem>
                        <SelectItem value="apprenant">Apprenant</SelectItem>
                        <SelectItem value="admin">Administrateur</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="loginEmail">Email ou téléphone</Label>
                    <Input
                      id="loginEmail"
                      type="text"
                      placeholder="votre@email.com"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="loginPassword">Mot de passe</Label>
                    <Input
                      id="loginPassword"
                      type="password"
                      required
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="remember" />
                      <Label htmlFor="remember" className="text-sm">
                        Se souvenir de moi
                      </Label>
                    </div>
                    <Link href="/auth/forgot-password" className="text-sm text-blue-600 hover:underline">
                      Mot de passe oublié ?
                    </Link>
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    disabled={isLoading}
                  >
                    {isLoading ? "Connexion..." : "Se connecter"}
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="register" className="space-y-6">
                {/* User Type Selection */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-center">Quel est votre profil ?</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {userTypes.map((type) => (
                      <div
                        key={type.id}
                        className={`relative p-4 border-2 rounded-lg cursor-pointer transition-all ${
                          userType === type.id ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:border-gray-300"
                        }`}
                        onClick={() => setUserType(type.id)}
                      >
                        <div className="flex items-start space-x-3">
                          <div className={`p-2 rounded-lg bg-gradient-to-r ${type.color}`}>
                            <type.icon className="h-5 w-5 text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold">{type.title}</h4>
                            <p className="text-sm text-gray-600 mb-2">{type.description}</p>
                            <ul className="text-xs text-gray-500 space-y-1">
                              {type.benefits.slice(0, 2).map((benefit, index) => (
                                <li key={index} className="flex items-center">
                                  <CheckCircle className="h-3 w-3 text-green-500 mr-1" />
                                  {benefit}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        {userType === type.id && (
                          <div className="absolute top-2 right-2">
                            <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                              <CheckCircle className="h-3 w-3 text-white" />
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Selected Profile Benefits */}
                {selectedUserType && (
                  <div className={`p-4 rounded-lg bg-gradient-to-r ${selectedUserType.color} bg-opacity-10`}>
                    <h4 className="font-semibold mb-2 flex items-center">
                      <selectedUserType.icon className="h-5 w-5 mr-2" />
                      Avantages {selectedUserType.title}
                    </h4>
                    <div className="grid md:grid-cols-2 gap-2">
                      {selectedUserType.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-center text-sm">
                          <Star className="h-3 w-3 text-yellow-500 mr-2" />
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Multi-step Form */}
                {userType !== "admin" && (
                  <div className="flex items-center justify-center space-x-2 mb-4">
                    {[1, 2].map((step) => (
                      <div key={step} className="flex items-center">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                            currentStep >= step ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-600"
                          }`}
                        >
                          {step}
                        </div>
                        {step < 2 && (
                          <div className={`w-12 h-0.5 mx-2 ${currentStep > step ? "bg-blue-600" : "bg-gray-200"}`} />
                        )}
                      </div>
                    ))}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  {renderForm()}

                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" required />
                    <Label htmlFor="terms" className="text-sm">
                      J'accepte les{" "}
                      <Link href="/legal/terms" className="text-blue-600 hover:underline">
                        conditions d'utilisation
                      </Link>{" "}
                      et la{" "}
                      <Link href="/legal/privacy" className="text-blue-600 hover:underline">
                        politique de confidentialité
                      </Link>
                    </Label>
                  </div>

                  <div className="flex space-x-3">
                    {currentStep > 1 && userType !== "admin" && (
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setCurrentStep(currentStep - 1)}
                        className="flex-1"
                        disabled={isLoading}
                      >
                        Précédent
                      </Button>
                    )}

                    {currentStep < 2 && userType !== "admin" ? (
                      <Button
                        type="button"
                        onClick={() => setCurrentStep(currentStep + 1)}
                        className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                        disabled={isLoading}
                      >
                        Suivant
                      </Button>
                    ) : (
                      <Button
                        type="submit"
                        className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                        disabled={isLoading}
                      >
                        {isLoading ? "Création..." : "Créer mon compte"}
                      </Button>
                    )}
                  </div>
                </form>
              </TabsContent>
            </Tabs>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white px-2 text-gray-500">Ou continuer avec</span>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3 mt-4">
                <Button variant="outline" size="sm">
                  <Mail className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <Linkedin className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
