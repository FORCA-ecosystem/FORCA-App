"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, Filter, MapPin, Star, MessageSquare, Heart, Eye, Briefcase, Clock, DollarSign } from "lucide-react"
import { VerticalLayout } from "@/components/vertical-layout"

export default function FreelancesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const freelances = [
    {
      id: 1,
      name: "Sophie Martin",
      title: "Développeuse Full-Stack",
      avatar: "/placeholder-user.jpg",
      rating: 4.9,
      reviewsCount: 47,
      hourlyRate: "45-65€/h",
      location: "Paris, France",
      availability: "Disponible",
      skills: ["React", "Node.js", "TypeScript", "MongoDB", "AWS"],
      description: "Développeuse passionnée avec 5 ans d'expérience dans le développement d'applications web modernes.",
      completedProjects: 32,
      responseTime: "< 2h",
      verified: true,
      topRated: true,
    },
    {
      id: 2,
      name: "Thomas Dubois",
      title: "Designer UI/UX",
      avatar: "/placeholder-user.jpg",
      rating: 4.8,
      reviewsCount: 23,
      hourlyRate: "40-60€/h",
      location: "Lyon, France",
      availability: "Occupé jusqu'au 15 Jan",
      skills: ["Figma", "Adobe XD", "Sketch", "Prototyping"],
      description: "Designer créatif spécialisé dans la création d'expériences utilisateur exceptionnelles.",
      completedProjects: 18,
      responseTime: "< 4h",
      verified: true,
      topRated: false,
    },
  ]

  return (
    <VerticalLayout userProfile="client">
      <div className="p-6 space-y-6 bg-slate-900 text-white min-h-full">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white">Freelances</h1>
            <p className="text-slate-400">Découvrez les meilleurs talents pour vos projets</p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" className="border-slate-600 text-slate-300 hover:text-white bg-transparent">
              <Heart className="h-4 w-4 mr-2" />
              Favoris
            </Button>
            <Button variant="outline" className="border-slate-600 text-slate-300 hover:text-white bg-transparent">
              <Eye className="h-4 w-4 mr-2" />
              Vus récemment
            </Button>
          </div>
        </div>

        {/* Filters */}
        <Card className="bg-slate-800 border-slate-700">
          <CardContent className="p-4">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                  <Input
                    placeholder="Rechercher par nom, compétence ou spécialité..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 bg-slate-900 border-slate-600 text-white placeholder-slate-400"
                  />
                </div>
              </div>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full lg:w-48 bg-slate-900 border-slate-600 text-white">
                  <SelectValue placeholder="Catégorie" />
                </SelectTrigger>
                <SelectContent className="bg-slate-800 border-slate-700">
                  <SelectItem value="all">Toutes les catégories</SelectItem>
                  <SelectItem value="development">Développement</SelectItem>
                  <SelectItem value="design">Design</SelectItem>
                  <SelectItem value="marketing">Marketing</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" className="border-slate-600 text-slate-300 hover:text-white bg-transparent">
                <Filter className="h-4 w-4 mr-2" />
                Plus de filtres
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Freelance Cards */}
        <div className="grid lg:grid-cols-2 gap-6">
          {freelances.map((freelance) => (
            <Card key={freelance.id} className="bg-slate-800 border-slate-700 hover:border-slate-600 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="relative">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src={freelance.avatar || "/placeholder.svg"} />
                      <AvatarFallback className="bg-slate-700 text-slate-300">
                        {freelance.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    {freelance.verified && (
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <div className="flex items-center space-x-2">
                          <h3 className="font-semibold text-lg text-white">{freelance.name}</h3>
                          {freelance.topRated && (
                            <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">Top Rated</Badge>
                          )}
                        </div>
                        <p className="text-slate-400">{freelance.title}</p>
                      </div>
                      <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>

                    <div className="flex items-center space-x-4 text-sm text-slate-400 mb-3">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 mr-1" />
                        <span className="text-white">{freelance.rating}</span>
                        <span className="ml-1">({freelance.reviewsCount} avis)</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>{freelance.location}</span>
                      </div>
                    </div>

                    <p className="text-sm text-slate-300 mb-4 line-clamp-2">{freelance.description}</p>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {freelance.skills.slice(0, 4).map((skill, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="text-xs border-slate-600 text-slate-300 bg-slate-900"
                        >
                          {skill}
                        </Badge>
                      ))}
                      {freelance.skills.length > 4 && (
                        <Badge variant="outline" className="text-xs border-slate-600 text-slate-300 bg-slate-900">
                          +{freelance.skills.length - 4}
                        </Badge>
                      )}
                    </div>

                    <div className="grid grid-cols-3 gap-4 text-sm text-slate-400 mb-4">
                      <div>
                        <div className="flex items-center">
                          <DollarSign className="h-4 w-4 mr-1" />
                          <span className="text-white">{freelance.hourlyRate}</span>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center">
                          <Briefcase className="h-4 w-4 mr-1" />
                          <span className="text-white">{freelance.completedProjects} projets</span>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          <span className="text-white">{freelance.responseTime}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <Badge
                        variant={freelance.availability === "Disponible" ? "default" : "secondary"}
                        className={
                          freelance.availability === "Disponible"
                            ? "bg-green-500/20 text-green-400 border-green-500/30"
                            : "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                        }
                      >
                        {freelance.availability}
                      </Badge>
                      <div className="flex space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-slate-600 text-slate-300 hover:text-white bg-transparent"
                        >
                          <MessageSquare className="h-4 w-4 mr-1" />
                          Contacter
                        </Button>
                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                          Voir profil
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </VerticalLayout>
  )
}
