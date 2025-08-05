"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Search, Filter, Play, Clock, Users, Star, BookOpen, Award, TrendingUp, Plus, Eye, Heart } from "lucide-react"
import Link from "next/link"
import { VerticalLayout } from "@/components/vertical-layout"

export default function FormationsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedLevel, setSelectedLevel] = useState("all")

  const formations = [
    {
      id: 1,
      title: "Maîtriser React et Next.js",
      instructor: "Alexandre Chen",
      instructorAvatar: "/placeholder-user.jpg",
      rating: 4.9,
      studentsCount: 1247,
      reviewsCount: 89,
      duration: "12h 30min",
      lessonsCount: 45,
      price: 89,
      originalPrice: 129,
      level: "Intermédiaire",
      category: "Développement",
      thumbnail: "/placeholder.svg?height=200&width=300",
      bestseller: true,
      updated: "2024-01-15",
      description: "Apprenez à créer des applications web modernes avec React et Next.js",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      progress: 0,
      enrolled: false,
    },
    {
      id: 2,
      title: "Design System avec Figma",
      instructor: "Emma Rodriguez",
      instructorAvatar: "/placeholder-user.jpg",
      rating: 4.8,
      studentsCount: 892,
      reviewsCount: 67,
      duration: "8h 15min",
      lessonsCount: 32,
      price: 69,
      originalPrice: 99,
      level: "Débutant",
      category: "Design",
      thumbnail: "/placeholder.svg?height=200&width=300",
      bestseller: false,
      updated: "2024-01-10",
      description: "Créez des systèmes de design cohérents et scalables",
      skills: ["Figma", "Design System", "UI/UX", "Prototyping"],
      progress: 45,
      enrolled: true,
    },
    {
      id: 3,
      title: "SEO Avancé et Growth Hacking",
      instructor: "Pierre Dubois",
      instructorAvatar: "/placeholder-user.jpg",
      rating: 4.7,
      studentsCount: 634,
      reviewsCount: 45,
      duration: "15h 45min",
      lessonsCount: 58,
      price: 129,
      originalPrice: 179,
      level: "Avancé",
      category: "Marketing",
      thumbnail: "/placeholder.svg?height=200&width=300",
      bestseller: true,
      updated: "2024-01-08",
      description: "Techniques avancées pour optimiser votre référencement",
      skills: ["SEO", "Growth Hacking", "Analytics", "Content Marketing"],
      progress: 0,
      enrolled: false,
    },
  ]

  const categories = [
    { value: "all", label: "Toutes les catégories" },
    { value: "development", label: "Développement" },
    { value: "design", label: "Design" },
    { value: "marketing", label: "Marketing" },
    { value: "business", label: "Business" },
    { value: "languages", label: "Langues" },
  ]

  const levels = [
    { value: "all", label: "Tous les niveaux" },
    { value: "beginner", label: "Débutant" },
    { value: "intermediate", label: "Intermédiaire" },
    { value: "advanced", label: "Avancé" },
  ]

  const filteredFormations = formations.filter((formation) => {
    const matchesSearch =
      formation.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      formation.instructor.toLowerCase().includes(searchQuery.toLowerCase()) ||
      formation.skills.some((skill) => skill.toLowerCase().includes(searchQuery.toLowerCase()))
    const matchesCategory = selectedCategory === "all" || formation.category.toLowerCase().includes(selectedCategory)
    const matchesLevel = selectedLevel === "all" || formation.level.toLowerCase().includes(selectedLevel)

    return matchesSearch && matchesCategory && matchesLevel
  })

  const getLevelColor = (level: string) => {
    switch (level.toLowerCase()) {
      case "débutant":
        return "bg-green-500/20 text-green-400 border-green-500/30"
      case "intermédiaire":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
      case "avancé":
        return "bg-red-500/20 text-red-400 border-red-500/30"
      default:
        return "bg-slate-500/20 text-slate-400 border-slate-500/30"
    }
  }

  return (
    <VerticalLayout userProfile="freelance">
      <div className="p-6 space-y-6 bg-slate-900 text-white min-h-full">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white">Formations</h1>
            <p className="text-slate-400">Développez vos compétences avec nos experts</p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" className="border-slate-600 text-slate-300 hover:text-white bg-transparent">
              <Heart className="h-4 w-4 mr-2" />
              Mes favoris
            </Button>
            <Link href="/formations/create">
              <Button className="bg-purple-600 hover:bg-purple-700">
                <Plus className="h-4 w-4 mr-2" />
                Créer une formation
              </Button>
            </Link>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="bg-slate-800 border-slate-700">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-400">Formations suivies</p>
                  <p className="text-2xl font-bold text-white">3</p>
                  <p className="text-xs text-green-400 mt-1">+1 ce mois</p>
                </div>
                <div className="p-3 rounded-lg bg-blue-500/10">
                  <BookOpen className="h-6 w-6 text-blue-400" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800 border-slate-700">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-400">Heures d'apprentissage</p>
                  <p className="text-2xl font-bold text-white">47h</p>
                  <p className="text-xs text-green-400 mt-1">+8h cette semaine</p>
                </div>
                <div className="p-3 rounded-lg bg-green-500/10">
                  <Clock className="h-6 w-6 text-green-400" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800 border-slate-700">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-400">Certificats obtenus</p>
                  <p className="text-2xl font-bold text-white">2</p>
                  <p className="text-xs text-slate-400 mt-1">Sur 3 formations</p>
                </div>
                <div className="p-3 rounded-lg bg-yellow-500/10">
                  <Award className="h-6 w-6 text-yellow-400" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800 border-slate-700">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-400">Progression moyenne</p>
                  <p className="text-2xl font-bold text-white">73%</p>
                  <p className="text-xs text-green-400 mt-1">+15% ce mois</p>
                </div>
                <div className="p-3 rounded-lg bg-purple-500/10">
                  <TrendingUp className="h-6 w-6 text-purple-400" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card className="bg-slate-800 border-slate-700">
          <CardContent className="p-4">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                  <Input
                    placeholder="Rechercher une formation, un instructeur..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 bg-slate-900 border-slate-600 text-white placeholder-slate-400"
                  />
                </div>
              </div>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full lg:w-48 bg-slate-900 border-slate-600 text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-slate-800 border-slate-700">
                  {categories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={selectedLevel} onValueChange={setSelectedLevel}>
                <SelectTrigger className="w-full lg:w-48 bg-slate-900 border-slate-600 text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-slate-800 border-slate-700">
                  {levels.map((level) => (
                    <SelectItem key={level.value} value={level.value}>
                      {level.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button variant="outline" className="border-slate-600 text-slate-300 hover:text-white bg-transparent">
                <Filter className="h-4 w-4 mr-2" />
                Plus de filtres
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Formations Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredFormations.map((formation) => (
            <Card
              key={formation.id}
              className="bg-slate-800 border-slate-700 hover:border-slate-600 transition-colors overflow-hidden"
            >
              <div className="relative">
                <img
                  src={formation.thumbnail || "/placeholder.svg"}
                  alt={formation.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <Button size="sm" className="bg-white text-black hover:bg-gray-100">
                    <Play className="h-4 w-4 mr-2" />
                    Aperçu
                  </Button>
                </div>
                {formation.bestseller && (
                  <Badge className="absolute top-3 left-3 bg-orange-500 text-white">Bestseller</Badge>
                )}
                {formation.enrolled && <Badge className="absolute top-3 right-3 bg-blue-500 text-white">Inscrit</Badge>}
              </div>

              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-lg text-white line-clamp-2">{formation.title}</h3>
                    <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white p-1">
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="flex items-center space-x-2 mb-3">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src={formation.instructorAvatar || "/placeholder.svg"} />
                      <AvatarFallback className="bg-slate-700 text-slate-300 text-xs">
                        {formation.instructor[0]}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-sm text-slate-400">{formation.instructor}</span>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-slate-400 mb-3">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 mr-1" />
                      <span className="text-white">{formation.rating}</span>
                      <span className="ml-1">({formation.reviewsCount})</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      <span>{formation.studentsCount}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{formation.duration}</span>
                    </div>
                  </div>

                  <p className="text-sm text-slate-300 mb-4 line-clamp-2">{formation.description}</p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {formation.skills.slice(0, 3).map((skill, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="text-xs border-slate-600 text-slate-300 bg-slate-900"
                      >
                        {skill}
                      </Badge>
                    ))}
                    {formation.skills.length > 3 && (
                      <Badge variant="outline" className="text-xs border-slate-600 text-slate-300 bg-slate-900">
                        +{formation.skills.length - 3}
                      </Badge>
                    )}
                  </div>

                  {formation.enrolled && formation.progress > 0 && (
                    <div className="mb-4">
                      <div className="flex items-center justify-between text-sm mb-2">
                        <span className="text-slate-400">Progression</span>
                        <span className="text-white">{formation.progress}%</span>
                      </div>
                      <Progress value={formation.progress} className="h-2 bg-slate-700" />
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Badge className={getLevelColor(formation.level)}>{formation.level}</Badge>
                    <div className="text-right">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg font-bold text-white">{formation.price}€</span>
                        {formation.originalPrice > formation.price && (
                          <span className="text-sm text-slate-400 line-through">{formation.originalPrice}€</span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-slate-600 text-slate-300 hover:text-white bg-transparent"
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                    {formation.enrolled ? (
                      <Button size="sm" className="bg-green-600 hover:bg-green-700">
                        Continuer
                      </Button>
                    ) : (
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                        S'inscrire
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            className="border-slate-600 text-slate-300 hover:text-white bg-transparent"
          >
            Charger plus de formations
          </Button>
        </div>
      </div>
    </VerticalLayout>
  )
}
