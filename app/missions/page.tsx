"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, Filter, Plus, MapPin, Clock, DollarSign, Star, Users, Calendar } from "lucide-react"
import Link from "next/link"
import { DashboardLayout } from "@/components/dashboard-layout"

export default function MissionsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedStatus, setSelectedStatus] = useState("all")

  const missions = [
    {
      id: 1,
      title: "Développement d'une application e-commerce",
      description:
        "Nous recherchons un développeur expérimenté pour créer une plateforme e-commerce complète avec React et Node.js.",
      client: "TechStore",
      clientAvatar: "/placeholder-user.jpg",
      budget: "5,000€ - 8,000€",
      duration: "2-3 mois",
      location: "Remote",
      skills: ["React", "Node.js", "MongoDB", "Stripe"],
      proposals: 12,
      rating: 4.8,
      posted: "Il y a 2 heures",
      status: "Ouvert",
      category: "Développement",
    },
    {
      id: 2,
      title: "Design d'interface pour application mobile",
      description:
        "Création d'un design moderne et intuitif pour une application mobile de fitness. Expérience en UI/UX requise.",
      client: "FitApp",
      clientAvatar: "/placeholder-user.jpg",
      budget: "2,500€ - 4,000€",
      duration: "1 mois",
      location: "Paris, France",
      skills: ["Figma", "UI/UX", "Mobile Design", "Prototyping"],
      proposals: 8,
      rating: 4.9,
      posted: "Il y a 5 heures",
      status: "Ouvert",
      category: "Design",
    },
    {
      id: 3,
      title: "Rédaction de contenu pour site web",
      description:
        "Recherche d'un rédacteur web expérimenté pour créer du contenu SEO optimisé pour notre site corporate.",
      client: "CorpSolutions",
      clientAvatar: "/placeholder-user.jpg",
      budget: "1,200€ - 2,000€",
      duration: "3 semaines",
      location: "Remote",
      skills: ["SEO", "Rédaction web", "Content Marketing", "WordPress"],
      proposals: 15,
      rating: 4.6,
      posted: "Il y a 1 jour",
      status: "En cours",
      category: "Rédaction",
    },
    {
      id: 4,
      title: "Traduction français-anglais de documentation technique",
      description:
        "Traduction de manuels techniques et documentation produit du français vers l'anglais. Expertise technique requise.",
      client: "TechDocs",
      clientAvatar: "/placeholder-user.jpg",
      budget: "800€ - 1,500€",
      duration: "2 semaines",
      location: "Remote",
      skills: ["Traduction", "Technique", "Français", "Anglais"],
      proposals: 6,
      rating: 4.7,
      posted: "Il y a 3 jours",
      status: "Ouvert",
      category: "Traduction",
    },
  ]

  const myMissions = [
    {
      id: 1,
      title: "Développement d'une application mobile",
      client: "TechCorp",
      status: "En cours",
      progress: 75,
      deadline: "15 Jan 2024",
      budget: "3,500€",
    },
    {
      id: 2,
      title: "Design d'interface utilisateur",
      client: "StartupXYZ",
      status: "En révision",
      progress: 90,
      deadline: "20 Jan 2024",
      budget: "1,200€",
    },
  ]

  const filteredMissions = missions.filter((mission) => {
    const matchesSearch =
      mission.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mission.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "all" || mission.category === selectedCategory
    const matchesStatus = selectedStatus === "all" || mission.status === selectedStatus

    return matchesSearch && matchesCategory && matchesStatus
  })

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold">Missions</h1>
            <p className="text-gray-600">Découvrez et gérez vos missions</p>
          </div>
          <Link href="/missions/create">
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              <Plus className="h-4 w-4 mr-2" />
              Publier une mission
            </Button>
          </Link>
        </div>

        <Tabs defaultValue="browse" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="browse">Parcourir les missions</TabsTrigger>
            <TabsTrigger value="my-missions">Mes missions</TabsTrigger>
          </TabsList>

          <TabsContent value="browse" className="space-y-6">
            {/* Filters */}
            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row gap-4">
                  <div className="flex-1">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <Input
                        placeholder="Rechercher des missions..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger className="w-full lg:w-48">
                      <SelectValue placeholder="Catégorie" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Toutes les catégories</SelectItem>
                      <SelectItem value="Développement">Développement</SelectItem>
                      <SelectItem value="Design">Design</SelectItem>
                      <SelectItem value="Rédaction">Rédaction</SelectItem>
                      <SelectItem value="Traduction">Traduction</SelectItem>
                      <SelectItem value="Marketing">Marketing</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                    <SelectTrigger className="w-full lg:w-48">
                      <SelectValue placeholder="Statut" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Tous les statuts</SelectItem>
                      <SelectItem value="Ouvert">Ouvert</SelectItem>
                      <SelectItem value="En cours">En cours</SelectItem>
                      <SelectItem value="Terminé">Terminé</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button variant="outline">
                    <Filter className="h-4 w-4 mr-2" />
                    Plus de filtres
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Mission Cards */}
            <div className="grid gap-6">
              {filteredMissions.map((mission) => (
                <Card key={mission.id} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row gap-6">
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-lg font-semibold mb-2">{mission.title}</h3>
                            <p className="text-gray-600 mb-4">{mission.description}</p>
                          </div>
                          <Badge variant={mission.status === "Ouvert" ? "default" : "secondary"}>
                            {mission.status}
                          </Badge>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {mission.skills.map((skill, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>

                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-gray-600">
                          <div className="flex items-center">
                            <DollarSign className="h-4 w-4 mr-1" />
                            {mission.budget}
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {mission.duration}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {mission.location}
                          </div>
                          <div className="flex items-center">
                            <Users className="h-4 w-4 mr-1" />
                            {mission.proposals} candidatures
                          </div>
                        </div>
                      </div>

                      <div className="lg:w-64 space-y-4">
                        <div className="flex items-center space-x-3">
                          <Avatar className="h-10 w-10">
                            <AvatarImage src={mission.clientAvatar || "/placeholder.svg"} />
                            <AvatarFallback>{mission.client[0]}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">{mission.client}</p>
                            <div className="flex items-center">
                              <Star className="h-4 w-4 text-yellow-400 mr-1" />
                              <span className="text-sm">{mission.rating}</span>
                            </div>
                          </div>
                        </div>
                        <p className="text-sm text-gray-500">{mission.posted}</p>
                        <Button className="w-full">Postuler maintenant</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="my-missions" className="space-y-6">
            <div className="grid gap-6">
              {myMissions.map((mission) => (
                <Card key={mission.id} className="border-0 shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold">{mission.title}</h3>
                        <p className="text-gray-600">Client: {mission.client}</p>
                      </div>
                      <Badge variant={mission.status === "Terminé" ? "default" : "secondary"}>{mission.status}</Badge>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center justify-between text-sm mb-2">
                          <span>Progression</span>
                          <span>{mission.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full"
                            style={{ width: `${mission.progress}%` }}
                          ></div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-sm text-gray-600">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          Échéance: {mission.deadline}
                        </div>
                        <div className="flex items-center">
                          <DollarSign className="h-4 w-4 mr-1" />
                          {mission.budget}
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          Voir détails
                        </Button>
                        <Button variant="outline" size="sm">
                          Contacter client
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}
