"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Search,
  Filter,
  Plus,
  Star,
  Eye,
  Heart,
  Share2,
  ShoppingCart,
  Clock,
  Users,
  Zap,
  Globe,
  Copy,
  ExternalLink,
  Settings,
} from "lucide-react"
import Link from "next/link"
import { DashboardLayout } from "@/components/dashboard-layout"

export default function VitrinePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [viewMode, setViewMode] = useState("grid")

  const microservices = [
    {
      id: 1,
      title: "Logo professionnel + Charte graphique",
      description: "Création d'un logo unique avec déclinaisons et guide d'utilisation complet",
      freelancer: "Marie Dubois",
      freelancerAvatar: "/placeholder-user.jpg",
      price: 250,
      originalPrice: 350,
      category: "Design",
      rating: 4.9,
      reviewsCount: 67,
      orderCount: 234,
      deliveryTime: "3-5 jours",
      thumbnail: "/placeholder.svg?height=200&width=300",
      featured: true,
      tags: ["Logo", "Branding", "Charte graphique"],
      includes: ["Logo vectoriel", "3 variations", "Charte couleurs", "Guide d'utilisation"],
      url: "forca.app/marie-dubois/logo-pro",
    },
    {
      id: 2,
      title: "Site web vitrine responsive",
      description: "Site web moderne et responsive avec CMS intégré, hébergement 1 an inclus",
      freelancer: "Thomas Chen",
      freelancerAvatar: "/placeholder-user.jpg",
      price: 890,
      originalPrice: 1200,
      category: "Développement",
      rating: 4.8,
      reviewsCount: 43,
      orderCount: 156,
      deliveryTime: "7-10 jours",
      thumbnail: "/placeholder.svg?height=200&width=300",
      featured: true,
      tags: ["Site web", "Responsive", "CMS"],
      includes: ["Design responsive", "CMS WordPress", "SEO de base", "Hébergement 1 an"],
      url: "forca.app/thomas-chen/site-vitrine",
    },
    {
      id: 3,
      title: "Stratégie marketing digital complète",
      description: "Audit complet + stratégie social media + calendrier éditorial 3 mois",
      freelancer: "Sarah Marketing",
      freelancerAvatar: "/placeholder-user.jpg",
      price: 450,
      originalPrice: 600,
      category: "Marketing",
      rating: 4.7,
      reviewsCount: 89,
      orderCount: 78,
      deliveryTime: "5-7 jours",
      thumbnail: "/placeholder.svg?height=200&width=300",
      featured: false,
      tags: ["Marketing", "Social Media", "Stratégie"],
      includes: ["Audit digital", "Stratégie SM", "Calendrier éditorial", "KPIs"],
      url: "forca.app/sarah-marketing/strategie-digital",
    },
    {
      id: 4,
      title: "Rédaction articles SEO (pack 10)",
      description: "10 articles SEO optimisés de 800 mots minimum avec recherche de mots-clés",
      freelancer: "Pierre Rédac",
      freelancerAvatar: "/placeholder-user.jpg",
      price: 320,
      originalPrice: 400,
      category: "Rédaction",
      rating: 4.6,
      reviewsCount: 124,
      orderCount: 289,
      deliveryTime: "7-14 jours",
      thumbnail: "/placeholder.svg?height=200&width=300",
      featured: false,
      tags: ["SEO", "Rédaction", "Content"],
      includes: ["10 articles 800+ mots", "Recherche mots-clés", "Optimisation SEO", "Images libres"],
      url: "forca.app/pierre-redac/articles-seo",
    },
    {
      id: 5,
      title: "Formation personnalisée React/Next.js",
      description: "Formation intensive individuelle React et Next.js avec projet concret",
      freelancer: "Alex DevMentor",
      freelancerAvatar: "/placeholder-user.jpg",
      price: 1200,
      originalPrice: 1500,
      category: "Formation",
      rating: 5.0,
      reviewsCount: 28,
      orderCount: 45,
      deliveryTime: "30 jours",
      thumbnail: "/placeholder.svg?height=200&width=300",
      featured: true,
      tags: ["React", "Next.js", "Formation", "Mentoring"],
      includes: ["20h de formation", "Projet personnel", "Support 30j", "Certificat"],
      url: "forca.app/alex-devmentor/formation-react",
    },
    {
      id: 6,
      title: "Traduction professionnelle FR-EN",
      description: "Traduction certifiée de documents professionnels avec relecture native",
      freelancer: "Linda Translate",
      freelancerAvatar: "/placeholder-user.jpg",
      price: 0.12,
      originalPrice: 0.15,
      category: "Traduction",
      rating: 4.9,
      reviewsCount: 156,
      orderCount: 567,
      deliveryTime: "2-3 jours",
      thumbnail: "/placeholder.svg?height=200&width=300",
      featured: false,
      tags: ["Traduction", "FR-EN", "Professionnel"],
      includes: ["Traduction certifiée", "Relecture native", "Formats multiples", "Urgence 24h"],
      url: "forca.app/linda-translate/trad-fr-en",
      priceUnit: "€/mot",
    },
  ]

  const categories = [
    { value: "all", label: "Toutes les catégories", count: 1250 },
    { value: "development", label: "Développement", count: 340 },
    { value: "design", label: "Design", count: 280 },
    { value: "marketing", label: "Marketing", count: 195 },
    { value: "writing", label: "Rédaction", count: 156 },
    { value: "translation", label: "Traduction", count: 124 },
    { value: "training", label: "Formation", count: 89 },
    { value: "video", label: "Vidéo", count: 66 },
  ]

  const filteredServices = microservices.filter((service) => {
    const matchesSearch =
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.freelancer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    const matchesCategory = selectedCategory === "all" || service.category.toLowerCase().includes(selectedCategory)

    return matchesSearch && matchesCategory
  })

  const copyUrl = (url: string) => {
    navigator.clipboard.writeText(`https://${url}`)
    // Ici on pourrait ajouter une notification toast
  }

  return (
    <DashboardLayout userProfile="freelance">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">FORCA Vitrine</h1>
            <p className="text-slate-600">Découvrez les microservices de notre communauté</p>
          </div>
          <div className="flex space-x-3">
            <Link href="/vitrine/create">
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                <Plus className="h-4 w-4 mr-2" />
                Créer mon service
              </Button>
            </Link>
            <Link href="/vitrine/my-services">
              <Button variant="outline">
                <Settings className="h-4 w-4 mr-2" />
                Mes services
              </Button>
            </Link>
          </div>
        </div>

        {/* Statistiques */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">Services actifs</p>
                  <p className="text-2xl font-bold">1,250</p>
                  <p className="text-xs text-green-600 mt-1">+23 cette semaine</p>
                </div>
                <div className="p-3 rounded-lg bg-purple-50">
                  <Globe className="h-6 w-6 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">Commandes ce mois</p>
                  <p className="text-2xl font-bold">3,456</p>
                  <p className="text-xs text-blue-600 mt-1">+15% vs mois dernier</p>
                </div>
                <div className="p-3 rounded-lg bg-blue-50">
                  <ShoppingCart className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">Freelances actifs</p>
                  <p className="text-2xl font-bold">845</p>
                  <p className="text-xs text-green-600 mt-1">Dans 15 pays</p>
                </div>
                <div className="p-3 rounded-lg bg-green-50">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">Note moyenne</p>
                  <p className="text-2xl font-bold">4.8</p>
                  <p className="text-xs text-yellow-600 mt-1">Sur 12,456 avis</p>
                </div>
                <div className="p-3 rounded-lg bg-yellow-50">
                  <Star className="h-6 w-6 text-yellow-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filtres et recherche */}
        <Card className="border-0 shadow-sm">
          <CardContent className="p-6">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                  <Input
                    placeholder="Rechercher un service, freelance, mot-clé..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full lg:w-64">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label} ({category.count})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                Plus de filtres
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Tabs pour différentes vues */}
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all">Tous les services</TabsTrigger>
            <TabsTrigger value="featured">En vedette</TabsTrigger>
            <TabsTrigger value="recent">Récents</TabsTrigger>
            <TabsTrigger value="top-rated">Mieux notés</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-6">
            {/* Services grid */}
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredServices.map((service) => (
                <Card key={service.id} className="border-0 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                  <div className="relative">
                    <img
                      src={service.thumbnail || "/placeholder.svg"}
                      alt={service.title}
                      className="w-full h-48 object-cover"
                    />
                    {service.featured && (
                      <Badge className="absolute top-3 left-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                        En vedette
                      </Badge>
                    )}
                    <div className="absolute top-3 right-3 flex space-x-2">
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0 bg-white/80 hover:bg-white">
                        <Heart className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 bg-white/80 hover:bg-white"
                        onClick={() => copyUrl(service.url)}
                      >
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="mb-4">
                      <h3 className="font-semibold text-lg mb-2 line-clamp-2">{service.title}</h3>
                      <p className="text-sm text-slate-600 line-clamp-2">{service.description}</p>
                    </div>

                    {/* Freelancer info */}
                    <div className="flex items-center space-x-3 mb-4">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={service.freelancerAvatar || "/placeholder.svg"} />
                        <AvatarFallback>{service.freelancer[0]}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <p className="text-sm font-medium">{service.freelancer}</p>
                        <div className="flex items-center space-x-4 text-xs text-slate-500">
                          <div className="flex items-center">
                            <Star className="h-3 w-3 text-yellow-400 mr-1" />
                            {service.rating} ({service.reviewsCount})
                          </div>
                          <span>{service.orderCount} commandes</span>
                        </div>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {service.tags.slice(0, 3).map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Inclusions */}
                    <div className="mb-4">
                      <p className="text-xs font-medium text-slate-700 mb-2">Inclus :</p>
                      <ul className="text-xs text-slate-600 space-y-1">
                        {service.includes.slice(0, 2).map((item, index) => (
                          <li key={index} className="flex items-center">
                            <div className="w-1 h-1 bg-green-500 rounded-full mr-2"></div>
                            {item}
                          </li>
                        ))}
                        {service.includes.length > 2 && (
                          <li className="text-slate-500">+{service.includes.length - 2} autres...</li>
                        )}
                      </ul>
                    </div>

                    {/* Prix et action */}
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="text-lg font-bold text-slate-900">
                            {service.price}€{service.priceUnit || ""}
                          </span>
                          {service.originalPrice > service.price && (
                            <span className="text-sm text-slate-500 line-through">{service.originalPrice}€</span>
                          )}
                        </div>
                        <div className="flex items-center text-xs text-slate-500">
                          <Clock className="h-3 w-3 mr-1" />
                          {service.deliveryTime}
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button
                          size="sm"
                          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                        >
                          Commander
                        </Button>
                      </div>
                    </div>

                    {/* URL publique */}
                    <div className="mt-4 p-2 bg-slate-50 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Globe className="h-4 w-4 text-slate-400" />
                          <span className="text-xs text-slate-600 truncate">{service.url}</span>
                        </div>
                        <div className="flex space-x-1">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-6 w-6 p-0"
                            onClick={() => copyUrl(service.url)}
                          >
                            <Copy className="h-3 w-3" />
                          </Button>
                          <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                            <ExternalLink className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="featured">
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredServices
                .filter((service) => service.featured)
                .map((service) => (
                  <Card key={service.id} className="border-0 shadow-sm">
                    {/* Même structure que ci-dessus mais seulement les services featured */}
                  </Card>
                ))}
            </div>
          </TabsContent>

          <TabsContent value="recent">
            <div className="text-center py-12">
              <p className="text-slate-600">Services les plus récents à venir...</p>
            </div>
          </TabsContent>

          <TabsContent value="top-rated">
            <div className="text-center py-12">
              <p className="text-slate-600">Services les mieux notés à venir...</p>
            </div>
          </TabsContent>
        </Tabs>

        {/* Call to action */}
        <Card className="border-0 shadow-sm bg-gradient-to-r from-purple-50 to-pink-50">
          <CardContent className="p-8 text-center">
            <h3 className="text-xl font-bold mb-2">Vous êtes freelance ?</h3>
            <p className="text-slate-600 mb-4">
              Créez votre vitrine personnalisée et vendez vos services à votre tarif
            </p>
            <Link href="/vitrine/create">
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                <Zap className="h-4 w-4 mr-2" />
                Créer ma vitrine
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
