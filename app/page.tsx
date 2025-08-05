"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import {
  ArrowRight,
  Users,
  Star,
  Shield,
  Search,
  Play,
  Award,
  TrendingUp,
  MessageCircle,
  Bot,
  Plus,
  ChevronRight,
  Clock,
  DollarSign,
  Sparkles,
  Menu,
  Globe,
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("")

  const featuredMissions = [
    {
      id: 1,
      title: "Développement d'une app e-commerce",
      description: "Création d'une application mobile complète avec paiement intégré",
      budget: "3,000€ - 5,000€",
      duration: "2-3 mois",
      skills: ["React Native", "Node.js", "Stripe"],
      client: "TechStore",
      proposals: 12,
      urgent: true,
    },
    {
      id: 2,
      title: "Design d'identité visuelle complète",
      description: "Logo, charte graphique et supports de communication",
      budget: "1,500€ - 2,500€",
      duration: "1 mois",
      skills: ["Illustrator", "Photoshop", "Branding"],
      client: "StartupXYZ",
      proposals: 8,
      urgent: false,
    },
    {
      id: 3,
      title: "Stratégie SEO et content marketing",
      description: "Optimisation SEO et création de contenu pour 6 mois",
      budget: "2,000€ - 4,000€",
      duration: "6 mois",
      skills: ["SEO", "Content Marketing", "Analytics"],
      client: "AgenceDigital",
      proposals: 15,
      urgent: false,
    },
  ]

  const topFreelances = [
    {
      id: 1,
      name: "Sophie Martin",
      title: "Développeuse Full-Stack",
      avatar: "/placeholder-user.jpg",
      rating: 4.9,
      reviewsCount: 47,
      hourlyRate: "45-65€/h",
      skills: ["React", "Node.js", "AWS"],
      completedProjects: 32,
      topRated: true,
      available: true,
    },
    {
      id: 2,
      name: "Thomas Dubois",
      title: "Designer UI/UX",
      avatar: "/placeholder-user.jpg",
      rating: 4.8,
      reviewsCount: 23,
      hourlyRate: "40-60€/h",
      skills: ["Figma", "Adobe XD", "Prototyping"],
      completedProjects: 18,
      topRated: true,
      available: false,
    },
    {
      id: 3,
      name: "Marie Leroy",
      title: "Expert SEO & Marketing",
      avatar: "/placeholder-user.jpg",
      rating: 4.7,
      reviewsCount: 35,
      hourlyRate: "35-50€/h",
      skills: ["SEO", "Google Ads", "Analytics"],
      completedProjects: 45,
      topRated: true,
      available: true,
    },
  ]

  const topFormations = [
    {
      id: 1,
      title: "Maîtriser React et Next.js",
      instructor: "Alexandre Chen",
      rating: 4.9,
      studentsCount: 1247,
      duration: "12h",
      price: "89€",
      level: "Intermédiaire",
      thumbnail: "/placeholder.svg?height=200&width=300",
      bestseller: true,
    },
    {
      id: 2,
      title: "Design System avec Figma",
      instructor: "Emma Rodriguez",
      rating: 4.8,
      studentsCount: 892,
      duration: "8h",
      price: "69€",
      level: "Débutant",
      thumbnail: "/placeholder.svg?height=200&width=300",
      bestseller: false,
    },
    {
      id: 3,
      title: "SEO Avancé et Growth Hacking",
      instructor: "Pierre Dubois",
      rating: 4.7,
      studentsCount: 634,
      duration: "15h",
      price: "129€",
      level: "Avancé",
      thumbnail: "/placeholder.svg?height=200&width=300",
      bestseller: true,
    },
  ]

  const categories = [
    { name: "Développement", icon: "💻", count: "2,500+ services", href: "/services/public?category=development" },
    { name: "Design", icon: "🎨", count: "1,800+ services", href: "/services/public?category=design" },
    { name: "Marketing", icon: "📈", count: "1,200+ services", href: "/services/public?category=marketing" },
    { name: "Rédaction", icon: "✍️", count: "900+ services", href: "/services/public?category=writing" },
    { name: "Traduction", icon: "🌍", count: "600+ services", href: "/services/public?category=translation" },
    { name: "Vidéo", icon: "🎬", count: "750+ services", href: "/services/public?category=video" },
    { name: "Musique", icon: "🎵", count: "400+ services", href: "/services/public?category=music" },
    { name: "Business", icon: "💼", count: "800+ services", href: "/services/public?category=business" },
  ]

  const popularSearches = ["Développement web", "Logo design", "SEO", "Traduction", "Vidéo"]

  const handleSearch = () => {
    if (searchQuery.trim()) {
      window.location.href = `/services/public?search=${encodeURIComponent(searchQuery)}`
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch()
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">F</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              FORCA
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/services/public" className="text-gray-600 hover:text-gray-900 transition-colors">
              Services
            </Link>
            <Link href="/freelances/public" className="text-gray-600 hover:text-gray-900 transition-colors">
              Freelances
            </Link>
            <Link href="/formations/public" className="text-gray-600 hover:text-gray-900 transition-colors">
              Formations
            </Link>
            <Link href="/missions/public" className="text-gray-600 hover:text-gray-900 transition-colors">
              Missions
            </Link>
            <Link href="#business" className="text-gray-600 hover:text-gray-900 transition-colors">
              FORCA Business
            </Link>
          </nav>

          <div className="flex items-center space-x-3">
            <Link href="/auth">
              <Button variant="ghost" className="hover:bg-gray-100">
                Connexion
              </Button>
            </Link>
            <Link href="/auth">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Rejoindre
              </Button>
            </Link>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Trouvez le{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              service parfait
            </span>
            <br />
            pour votre entreprise
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Millions de freelances. Milliers de compétences. Une plateforme. Des possibilités infinies.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="flex bg-white rounded-lg shadow-lg border">
              <div className="flex-1 flex items-center px-4">
                <Search className="h-5 w-5 text-gray-400 mr-3" />
                <Input
                  placeholder="Essayez 'développement web', 'logo design', 'SEO'..."
                  className="border-0 focus:ring-0 text-lg"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={handleKeyPress}
                />
              </div>
              <Button
                className="m-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                onClick={handleSearch}
              >
                Rechercher
              </Button>
            </div>
          </div>

          {/* Popular searches */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <span className="text-gray-600">Populaire:</span>
            {popularSearches.map((term, index) => (
              <Link key={index} href={`/services/public?search=${encodeURIComponent(term)}`}>
                <Badge variant="outline" className="cursor-pointer hover:bg-gray-50 transition-colors">
                  {term}
                </Badge>
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/missions/create">
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
              >
                <Plus className="mr-2 h-5 w-5" />
                Publier une mission
              </Button>
            </Link>
            <Link href="/services/create">
              <Button
                size="lg"
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
              >
                <Sparkles className="mr-2 h-5 w-5" />
                Vendre vos services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Explorez par catégorie</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {categories.map((category, index) => (
              <Link key={index} href={category.href}>
                <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer border-0 h-full">
                  <CardContent className="p-6">
                    <div className="text-3xl mb-3">{category.icon}</div>
                    <h3 className="font-semibold mb-1">{category.name}</h3>
                    <p className="text-xs text-gray-600">{category.count}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Missions */}
      <section id="services" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">Missions en vedette</h2>
              <p className="text-gray-600">Découvrez les opportunités les plus attractives</p>
            </div>
            <Link href="/missions/public">
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent">
                Voir toutes les missions
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredMissions.map((mission) => (
              <Card key={mission.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-semibold text-lg">{mission.title}</h3>
                        {mission.urgent && <Badge className="bg-red-100 text-red-800 text-xs">Urgent</Badge>}
                      </div>
                      <p className="text-gray-600 text-sm mb-4">{mission.description}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {mission.skills.map((skill, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <DollarSign className="h-4 w-4 mr-1" />
                        <span>{mission.budget}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{mission.duration}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Client: {mission.client}</span>
                      <span>{mission.proposals} candidatures</span>
                    </div>
                  </div>

                  <Link href={`/missions/public?id=${mission.id}`}>
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                      Voir la mission
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Top Freelances */}
      <section id="freelances" className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">Freelances les mieux notés</h2>
              <p className="text-gray-600">Travaillez avec les meilleurs talents</p>
            </div>
            <Link href="/freelances/public">
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent">
                Voir tous les freelances
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topFreelances.map((freelance) => (
              <Card key={freelance.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="relative">
                      <Avatar className="h-16 w-16">
                        <AvatarImage src={freelance.avatar || "/placeholder.svg"} />
                        <AvatarFallback>
                          {freelance.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      {freelance.available && (
                        <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white"></div>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold">{freelance.name}</h3>
                        {freelance.topRated && (
                          <Badge className="bg-yellow-100 text-yellow-800 text-xs">Top Rated</Badge>
                        )}
                      </div>
                      <p className="text-gray-600 text-sm">{freelance.title}</p>
                      <div className="flex items-center mt-1">
                        <Star className="h-4 w-4 text-yellow-400 mr-1" />
                        <span className="text-sm">{freelance.rating}</span>
                        <span className="text-sm text-gray-500 ml-1">({freelance.reviewsCount})</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {freelance.skills.map((skill, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                    <span>{freelance.hourlyRate}</span>
                    <span>{freelance.completedProjects} projets</span>
                  </div>

                  <div className="flex gap-2">
                    <Link href={`/messages?freelance=${freelance.id}`} className="flex-1">
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full bg-transparent border-blue-600 text-blue-600 hover:bg-blue-50"
                      >
                        <MessageCircle className="h-4 w-4 mr-1" />
                        Contacter
                      </Button>
                    </Link>
                    <Link href={`/freelances/public?id=${freelance.id}`} className="flex-1">
                      <Button
                        size="sm"
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                      >
                        Voir profil
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Top Formations */}
      <section id="formations" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">Formations les mieux notées</h2>
              <p className="text-gray-600">Développez vos compétences avec nos experts</p>
            </div>
            <div className="flex gap-3">
              <Link href="/formations/public">
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent">
                  Toutes les formations
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/formations/create">
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                  <Award className="mr-2 h-4 w-4" />
                  Devenir formateur
                </Button>
              </Link>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topFormations.map((formation) => (
              <Card key={formation.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                <div className="relative">
                  <img
                    src={formation.thumbnail || "/placeholder.svg"}
                    alt={formation.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <Link href={`/formations/public?id=${formation.id}`}>
                      <Button size="sm" className="bg-white text-black hover:bg-gray-100">
                        <Play className="h-4 w-4 mr-2" />
                        Aperçu
                      </Button>
                    </Link>
                  </div>
                  {formation.bestseller && (
                    <Badge className="absolute top-3 left-3 bg-orange-500 text-white">Bestseller</Badge>
                  )}
                </div>
                <CardContent className="p-6">
                  <div className="mb-4">
                    <Link href={`/formations/public?id=${formation.id}`}>
                      <h3 className="font-semibold text-lg mb-2 hover:text-blue-600 transition-colors cursor-pointer">
                        {formation.title}
                      </h3>
                    </Link>
                    <p className="text-gray-600 text-sm">Par {formation.instructor}</p>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 mr-1" />
                      <span>{formation.rating}</span>
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

                  <div className="flex items-center justify-between">
                    <div>
                      <Badge variant="outline" className="text-xs mb-2">
                        {formation.level}
                      </Badge>
                      <p className="font-bold text-lg">{formation.price}</p>
                    </div>
                    <Link href={`/formations/public?id=${formation.id}`}>
                      <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                        S'inscrire
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Business Section */}
      <section id="business" className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">FORCA Business</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Une solution complète pour les entreprises qui veulent accéder aux meilleurs talents freelances
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="font-semibold mb-2">Talents vérifiés</h3>
              <p className="opacity-90">Accès exclusif aux freelances les mieux notés</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="font-semibold mb-2">Équipes dédiées</h3>
              <p className="opacity-90">Gestionnaire de compte personnel</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8" />
              </div>
              <h3 className="font-semibold mb-2">Analytics avancés</h3>
              <p className="opacity-90">Tableaux de bord et rapports détaillés</p>
            </div>
          </div>
          <Link href="/business">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Découvrir FORCA Business
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">2M+</div>
              <div className="text-gray-600">Services actifs</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">500K+</div>
              <div className="text-gray-600">Freelances</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">10M+</div>
              <div className="text-gray-600">Projets réalisés</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">4.9/5</div>
              <div className="text-gray-600">Satisfaction client</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-5 gap-8">
            <div className="md:col-span-2">
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">F</span>
                </div>
                <span className="text-xl font-bold">FORCA</span>
              </Link>
              <p className="text-gray-400 mb-4">
                La plateforme qui connecte les talents aux opportunités. Trouvez le freelance parfait ou vendez vos
                services.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Facebook
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Twitter
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  LinkedIn
                </Link>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Catégories</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/services/public?category=development" className="hover:text-white transition-colors">
                    Développement
                  </Link>
                </li>
                <li>
                  <Link href="/services/public?category=design" className="hover:text-white transition-colors">
                    Design
                  </Link>
                </li>
                <li>
                  <Link href="/services/public?category=marketing" className="hover:text-white transition-colors">
                    Marketing
                  </Link>
                </li>
                <li>
                  <Link href="/services/public?category=writing" className="hover:text-white transition-colors">
                    Rédaction
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">À propos</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/about/careers" className="hover:text-white transition-colors">
                    Carrières
                  </Link>
                </li>
                <li>
                  <Link href="/about/press" className="hover:text-white transition-colors">
                    Presse
                  </Link>
                </li>
                <li>
                  <Link href="/about/partnerships" className="hover:text-white transition-colors">
                    Partenariats
                  </Link>
                </li>
                <li>
                  <Link href="/about/investors" className="hover:text-white transition-colors">
                    Investisseurs
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/help" className="hover:text-white transition-colors">
                    Centre d'aide
                  </Link>
                </li>
                <li>
                  <Link href="/security" className="hover:text-white transition-colors">
                    Sécurité
                  </Link>
                </li>
                <li>
                  <Link href="/legal/terms" className="hover:text-white transition-colors">
                    Conditions
                  </Link>
                </li>
                <li>
                  <Link href="/legal/privacy" className="hover:text-white transition-colors">
                    Confidentialité
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">&copy; 2024 FORCA. Tous droits réservés.</p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <div className="flex items-center space-x-2 text-gray-400">
                <Globe className="h-4 w-4" />
                <span>Français</span>
              </div>
              <span className="text-gray-400">EUR €</span>
            </div>
          </div>
        </div>
      </footer>

      {/* FORCA IA Chatbot */}
      <Link href="/chat">
        <div className="fixed bottom-6 right-6 z-50">
          <Button className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg">
            <Bot className="h-6 w-6" />
          </Button>
        </div>
      </Link>
    </div>
  )
}
