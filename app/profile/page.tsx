"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { User, MapPin, Calendar, Star, Award, Shield, Camera, Save, Eye, Bell, Lock, FileText } from "lucide-react"
import { DashboardLayout } from "@/components/dashboard-layout"

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("general")
  const [profileData, setProfileData] = useState({
    firstName: "Marie",
    lastName: "Dupont",
    email: "marie.dupont@example.com",
    phone: "+33 6 12 34 56 78",
    location: "Paris, France",
    title: "Développeuse Full-Stack",
    bio: "Développeuse passionnée avec 5 ans d'expérience dans le développement d'applications web modernes.",
    hourlyRate: "55",
    availability: "available",
    skills: ["React", "Node.js", "TypeScript", "MongoDB", "AWS"],
    languages: ["Français", "Anglais"],
    experience: "5+ ans",
    education: "Master en Informatique",
  })

  const handleSave = () => {
    // Logique de sauvegarde
    console.log("Profil sauvegardé:", profileData)
  }

  return (
    <DashboardLayout userProfile="freelance">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Gestion du Profil</h1>
            <p className="text-slate-600">Gérez vos informations personnelles et professionnelles</p>
          </div>
          <div className="flex space-x-3">
            <Button variant="outline">
              <Eye className="h-4 w-4 mr-2" />
              Aperçu Public
            </Button>
            <Button onClick={handleSave} className="bg-blue-600 hover:bg-blue-700">
              <Save className="h-4 w-4 mr-2" />
              Sauvegarder
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Profile Summary Card */}
          <div className="lg:col-span-1">
            <Card className="border-0 shadow-sm">
              <CardContent className="p-6 text-center">
                <div className="relative inline-block mb-4">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback className="text-lg">MD</AvatarFallback>
                  </Avatar>
                  <Button
                    size="sm"
                    className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full p-0 bg-blue-600 hover:bg-blue-700"
                  >
                    <Camera className="h-4 w-4" />
                  </Button>
                </div>
                <h3 className="font-semibold text-lg">
                  {profileData.firstName} {profileData.lastName}
                </h3>
                <p className="text-slate-600 mb-2">{profileData.title}</p>
                <div className="flex items-center justify-center space-x-1 mb-4">
                  <Star className="h-4 w-4 text-yellow-400" />
                  <span className="text-sm font-medium">4.9</span>
                  <span className="text-sm text-slate-500">(47 avis)</span>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-center space-x-2">
                    <MapPin className="h-4 w-4 text-slate-400" />
                    <span>{profileData.location}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Calendar className="h-4 w-4 text-slate-400" />
                    <span>Membre depuis 2022</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t">
                  <div className="flex justify-center space-x-4 text-sm">
                    <div className="text-center">
                      <div className="font-semibold text-blue-600">32</div>
                      <div className="text-slate-500">Projets</div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-green-600">98%</div>
                      <div className="text-slate-500">Réussite</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Certifications */}
            <Card className="border-0 shadow-sm mt-6">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Award className="h-5 w-5 mr-2 text-yellow-500" />
                  Certifications
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Shield className="h-8 w-8 text-blue-600" />
                  <div>
                    <p className="font-medium text-sm">Profil Vérifié</p>
                    <p className="text-xs text-slate-500">Identité confirmée</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="h-8 w-8 text-green-600" />
                  <div>
                    <p className="font-medium text-sm">Top Rated</p>
                    <p className="text-xs text-slate-500">Freelance d'élite</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Card className="border-0 shadow-sm">
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <div className="border-b px-6 pt-6">
                  <TabsList className="grid w-full grid-cols-5">
                    <TabsTrigger value="general">Général</TabsTrigger>
                    <TabsTrigger value="professional">Professionnel</TabsTrigger>
                    <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
                    <TabsTrigger value="security">Sécurité</TabsTrigger>
                    <TabsTrigger value="notifications">Notifications</TabsTrigger>
                  </TabsList>
                </div>

                <TabsContent value="general" className="p-6 space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center">
                      <User className="h-5 w-5 mr-2" />
                      Informations Personnelles
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">Prénom</Label>
                        <Input
                          id="firstName"
                          value={profileData.firstName}
                          onChange={(e) => setProfileData({ ...profileData, firstName: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Nom</Label>
                        <Input
                          id="lastName"
                          value={profileData.lastName}
                          onChange={(e) => setProfileData({ ...profileData, lastName: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          value={profileData.email}
                          onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Téléphone</Label>
                        <Input
                          id="phone"
                          value={profileData.phone}
                          onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="location">Localisation</Label>
                        <Input
                          id="location"
                          value={profileData.location}
                          onChange={(e) => setProfileData({ ...profileData, location: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="availability">Disponibilité</Label>
                        <Select
                          value={profileData.availability}
                          onValueChange={(value) => setProfileData({ ...profileData, availability: value })}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="available">Disponible</SelectItem>
                            <SelectItem value="busy">Occupé</SelectItem>
                            <SelectItem value="unavailable">Indisponible</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-4">Bio Professionnelle</h3>
                    <Textarea
                      placeholder="Décrivez votre expérience et vos compétences..."
                      rows={4}
                      value={profileData.bio}
                      onChange={(e) => setProfileData({ ...profileData, bio: e.target.value })}
                    />
                  </div>
                </TabsContent>

                <TabsContent value="professional" className="p-6 space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Informations Professionnelles</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="title">Titre Professionnel</Label>
                        <Input
                          id="title"
                          value={profileData.title}
                          onChange={(e) => setProfileData({ ...profileData, title: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="hourlyRate">Tarif Horaire (€)</Label>
                        <Input
                          id="hourlyRate"
                          type="number"
                          value={profileData.hourlyRate}
                          onChange={(e) => setProfileData({ ...profileData, hourlyRate: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="experience">Expérience</Label>
                        <Select
                          value={profileData.experience}
                          onValueChange={(value) => setProfileData({ ...profileData, experience: value })}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="0-1 ans">0-1 ans</SelectItem>
                            <SelectItem value="1-3 ans">1-3 ans</SelectItem>
                            <SelectItem value="3-5 ans">3-5 ans</SelectItem>
                            <SelectItem value="5+ ans">5+ ans</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="education">Formation</Label>
                        <Input
                          id="education"
                          value={profileData.education}
                          onChange={(e) => setProfileData({ ...profileData, education: e.target.value })}
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-4">Compétences</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {profileData.skills.map((skill, index) => (
                        <Badge key={index} variant="secondary" className="px-3 py-1">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    <Button variant="outline" size="sm">
                      Gérer les compétences
                    </Button>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-4">Langues</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {profileData.languages.map((language, index) => (
                        <Badge key={index} variant="outline" className="px-3 py-1">
                          {language}
                        </Badge>
                      ))}
                    </div>
                    <Button variant="outline" size="sm">
                      Ajouter une langue
                    </Button>
                  </div>
                </TabsContent>

                <TabsContent value="portfolio" className="p-6">
                  <div className="text-center py-12">
                    <FileText className="h-12 w-12 text-slate-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Portfolio</h3>
                    <p className="text-slate-600 mb-4">Ajoutez vos meilleurs projets pour attirer plus de clients</p>
                    <Button>Ajouter un projet</Button>
                  </div>
                </TabsContent>

                <TabsContent value="security" className="p-6 space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center">
                      <Lock className="h-5 w-5 mr-2" />
                      Sécurité du Compte
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <p className="font-medium">Authentification à deux facteurs</p>
                          <p className="text-sm text-slate-600">Sécurisez votre compte avec 2FA</p>
                        </div>
                        <Switch />
                      </div>
                      <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <p className="font-medium">Notifications de connexion</p>
                          <p className="text-sm text-slate-600">Recevez un email à chaque connexion</p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-4">Changer le mot de passe</h3>
                    <div className="space-y-4 max-w-md">
                      <div className="space-y-2">
                        <Label htmlFor="currentPassword">Mot de passe actuel</Label>
                        <Input id="currentPassword" type="password" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="newPassword">Nouveau mot de passe</Label>
                        <Input id="newPassword" type="password" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirmPassword">Confirmer le mot de passe</Label>
                        <Input id="confirmPassword" type="password" />
                      </div>
                      <Button>Mettre à jour le mot de passe</Button>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="notifications" className="p-6 space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center">
                      <Bell className="h-5 w-5 mr-2" />
                      Préférences de Notification
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <p className="font-medium">Nouvelles missions</p>
                          <p className="text-sm text-slate-600">
                            Notifications pour les missions correspondant à vos compétences
                          </p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <p className="font-medium">Messages</p>
                          <p className="text-sm text-slate-600">Notifications pour les nouveaux messages</p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <p className="font-medium">Paiements</p>
                          <p className="text-sm text-slate-600">Notifications pour les paiements et factures</p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <p className="font-medium">Marketing</p>
                          <p className="text-sm text-slate-600">Conseils et actualités FORCA</p>
                        </div>
                        <Switch />
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
