"use client"

import { useState } from "react"
import { PublicLayout } from "@/components/public-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Search,
  Filter,
  Star,
  Heart,
  Eye,
  Clock,
  DollarSign,
  ArrowRight,
  CheckCircle,
  Award,
  MessageSquare,
  Package,
  Zap,
} from "lucide-react"
import Link from "next/link"

export default function PublicServicesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedBudget, setSelectedBudget] = useState("all")
  const [selectedDelivery, setSelectedDelivery] = useState("all")
  const [selectedService, setSelectedService] = useState<any>(null)

  const services = [
    {
      id: 1,
      title: "Je créerai un logo professionnel pour votre entreprise",
      freelancer: "Sophie Martin",
      freelancerAvatar: "/placeholder-user.jpg",
      rating: 4.9,
      reviewsCount: 127,
      startingPrice: 45,
      deliveryTime: "2 jours",
      category: "Design",
      thumbnail: "/placeholder.svg?height=200&width=300&text=Logo+Design",
      gallery: [
        "/placeholder.svg?height=200&width=300&text=Logo+1",
        "/placeholder.svg?height=200&width=300&text=Logo+2",
        "/placeholder.svg?height=200&width=300&text=Logo+3",
      ],
      tags: ["Logo", "Branding", "Design", "Illustrator", "Vectoriel", "Identité visuelle"],
      bestseller: true,
      topRated: true,
      verified: true,
      description:
        "Création de logos professionnels et mémorables pour votre marque. Je vous accompagne dans la création d'une identité visuelle forte qui reflète parfaitement vos valeurs et votre secteur d'activité. Chaque logo est unique, créé sur-mesure selon vos besoins spécifiques.",
      packages: [
        {
          name: "Basic",
          price: 45,
          delivery: "2 jours",
          revisions: 3,
          includes: ["1 concept de logo", "Fichiers PNG/JPG", "3 révisions", "Logo couleur + noir & blanc"],
        },
        {
          name: "Standard",
          price: 85,
          delivery: "3 jours",
          revisions: 5,
          includes: [
            "3 concepts de logo",
            "Fichiers sources (AI/PSD)",
            "5 révisions",
            "Guide de style basique",
            "Favicon inclus",
          ],
        },
        {
          name: "Premium",
          price: 150,
          delivery: "5 jours",
          revisions: "Illimitées",
          includes: [
            "5 concepts de logo",
            "Fichiers tous formats",
            "Révisions illimitées",
            "Guide de style complet",
            "Cartes de visite",
            "Support 30 jours",
          ],
        },
      ],
      faqs: [
        {
          question: "Combien de concepts proposez-vous ?",
          answer: "Cela dépend du package choisi : 1 concept en Basic, 3 en Standard et 5 en Premium.",
        },
        {
          question: "Puis-je demander des modifications ?",
          answer:
            "Oui, chaque package inclut un nombre de révisions spécifique pour ajuster le logo selon vos préférences.",
        },
      ],
      reviews: [
        {
          client: "TechCorp",
          rating: 5,
          comment: "Logo parfait ! Sophie a su capturer l'essence de notre marque. Très professionnelle.",
          date: "Il y a 3 jours",
        },
        {
          client: "StartupXYZ",
          rating: 5,
          comment: "Excellent travail, créatif et dans les délais. Je recommande vivement !",
          date: "Il y a 1 semaine",
        },
      ],
    },
    {
      id: 2,
      title: "Je développerai votre site web avec React et Next.js",
      freelancer: "Thomas Dubois",
      freelancerAvatar: "/placeholder-user.jpg",
      rating: 4.8,
      reviewsCount: 89,
      startingPrice: 299,
      deliveryTime: "7 jours",
      category: "Développement",
      thumbnail: "/placeholder.svg?height=200&width=300&text=Web+Development",
      gallery: [
        "/placeholder.svg?height=200&width=300&text=Website+1",
        "/placeholder.svg?height=200&width=300&text=Website+2",
      ],
      tags: ["React", "Next.js", "Web Development", "Responsive", "Modern", "Performance"],
      bestseller: false,
      topRated: true,
      verified: true,
      description:
        "Développement de sites web modernes et performants avec React et Next.js. Je crée des applications web rapides, SEO-friendly et parfaitement responsive. Chaque projet est optimisé pour les performances et l'expérience utilisateur.",
      packages: [
        {
          name: "Basic",
          price: 299,
          delivery: "7 jours",
          pages: 3,
          includes: ["Site vitrine 3 pages", "Design responsive", "Optimisation SEO basique", "Formulaire de contact"],
        },
        {
          name: "Standard",
          price: 599,
          delivery: "14 jours",
          pages: 7,
          includes: ["Site 7 pages", "CMS intégré", "Optimisation SEO avancée", "Analytics", "Support 30 jours"],
        },
        {
          name: "Premium",
          price: 999,
          delivery: "21 jours",
          pages: "Illimitées",
          includes: [
            "Site complexe",
            "E-commerce",
            "Dashboard admin",
            "API custom",
            "Support 90 jours",
            "Formation incluse",
          ],
        },
      ],
      faqs: [
        {
          question: "Le site sera-t-il responsive ?",
          answer: "Oui, tous mes sites sont parfaitement adaptés aux mobiles et tablettes.",
        },
        {
          question: "Incluez-vous l'hébergement ?",
          answer: "Je peux vous conseiller sur l'hébergement mais ce n'est pas inclus dans le prix.",
        },
      ],
      reviews: [
        {
          client: "E-commerce Pro",
          rating: 5,
          comment: "Site magnifique et très rapide ! Thomas maîtrise parfaitement React.",
          date: "Il y a 5 jours",
        },
        {
          client: "AgenceWeb",
          rating: 4,
          comment: "Bon travail, quelques ajustements nécessaires mais résultat final excellent.",
          date: "Il y a 2 semaines",
        },
      ],
    },
    {
      id: 3,
      title: "Je rédigerai du contenu SEO optimisé pour votre blog",
      freelancer: "Marie Leroy",
      freelancerAvatar: "/placeholder-user.jpg",
      rating: 4.7,
      reviewsCount: 156,
      startingPrice: 25,
      deliveryTime: "3 jours",
      category: "Rédaction",
      thumbnail: "/placeholder.svg?height=200&width=300&text=SEO+Content",
      gallery: ["/placeholder.svg?height=200&width=300&text=Content+Writing"],
      tags: ["SEO", "Rédaction", "Blog", "Content Marketing", "Mots-clés", "Optimisation"],
      bestseller: true,
      topRated: false,
      verified: true,
      description:
        "Rédaction d'articles de blog optimisés SEO pour améliorer votre visibilité en ligne. Je crée du contenu engageant et informatif qui attire votre audience cible tout en respectant les bonnes pratiques SEO pour un meilleur référencement.",
      packages: [
        {
          name: "Basic",
          price: 25,
          delivery: "3 jours",
          words: 500,
          includes: ["Article 500 mots", "Recherche mots-clés basique", "Optimisation SEO", "1 révision"],
        },
        {
          name: "Standard",
          price: 45,
          delivery: "5 jours",
          words: 1000,
          includes: [
            "Article 1000 mots",
            "Recherche mots-clés avancée",
            "Meta descriptions",
            "Images libres de droits",
            "2 révisions",
          ],
        },
        {
          name: "Premium",
          price: 85,
          delivery: "7 jours",
          words: 2000,
          includes: [
            "Article 2000 mots",
            "Stratégie de contenu",
            "Maillage interne",
            "Promotion réseaux sociaux",
            "Révisions illimitées",
          ],
        },
      ],
      faqs: [
        {
          question: "Faites-vous la recherche de mots-clés ?",
          answer: "Oui, je recherche les meilleurs mots-clés pour votre secteur et les intègre naturellement.",
        },
        {
          question: "Le contenu est-il original ?",
          answer: "Absolument ! Tout le contenu est rédigé à la main et 100% original, vérifié anti-plagiat.",
        },
      ],
      reviews: [
        {
          client: "BlogTech",
          rating: 5,
          comment: "Articles de qualité qui ont boosté notre trafic ! Marie comprend bien le SEO.",
          date: "Il y a 1 jour",
        },
        {
          client: "StartupBlog",
          rating: 4,
          comment: "Bon contenu, bien écrit et optimisé. Délais respectés.",
          date: "Il y a 4 jours",
        },
      ],
    },
    {
      id: 4,
      title: "Je créerai une stratégie marketing digital complète",
      freelancer: "Ahmed Ben Ali",
      freelancerAvatar: "/placeholder-user.jpg",
      rating: 4.6,
      reviewsCount: 67,
      startingPrice: 150,
      deliveryTime: "5 jours",
      category: "Marketing",
      thumbnail: "/placeholder.svg?height=200&width=300&text=Marketing+Strategy",
      gallery: [
        "/placeholder.svg?height=200&width=300&text=Strategy+1",
        "/placeholder.svg?height=200&width=300&text=Strategy+2",
      ],
      tags: ["Marketing Digital", "Stratégie", "Social Media", "Analytics", "ROI", "Growth"],
      bestseller: false,
      topRated: true,
      verified: true,
      description:
        "Élaboration d'une stratégie marketing digital personnalisée pour votre entreprise. J'analyse votre marché, vos concurrents et votre audience pour créer un plan d'action détaillé qui maximisera votre ROI et votre croissance.",
      packages: [
        {
          name: "Basic",
          price: 150,
          delivery: "5 jours",
          channels: 2,
          includes: ["Audit marketing", "Stratégie 2 canaux", "Plan d'action 30 jours", "Recommandations outils"],
        },
        {
          name: "Standard",
          price: 299,
          delivery: "10 jours",
          channels: 4,
          includes: [
            "Audit complet",
            "Stratégie multi-canaux",
            "Plan 90 jours",
            "Templates inclus",
            "1h de consultation",
          ],
        },
        {
          name: "Premium",
          price: 499,
          delivery: "14 jours",
          channels: "Tous",
          includes: ["Stratégie complète", "Plan annuel", "Formation équipe", "Suivi 30 jours", "Support prioritaire"],
        },
      ],
      faqs: [
        {
          question: "La stratégie est-elle adaptée à mon secteur ?",
          answer: "Oui, chaque stratégie est personnalisée selon votre secteur d'activité et vos objectifs.",
        },
        {
          question: "Incluez-vous la mise en œuvre ?",
          answer: "Je fournis le plan détaillé. La mise en œuvre peut être ajoutée en option.",
        },
      ],
      reviews: [
        {
          client: "TechStartup",
          rating: 5,
          comment: "Stratégie très détaillée et pertinente. Nos conversions ont augmenté de 40% !",
          date: "Il y a 1 semaine",
        },
        {
          client: "E-shop",
          rating: 4,
          comment: "Bonne analyse du marché, stratégie claire et actionnable.",
          date: "Il y a 10 jours",
        },
      ],
    },
    {
      id: 5,
      title: "Je traduirai vos documents du français vers l'anglais",
      freelancer: "Fatou Diallo",
      freelancerAvatar: "/placeholder-user.jpg",
      rating: 4.8,
      reviewsCount: 203,
      startingPrice: 15,
      deliveryTime: "1 jour",
      category: "Traduction",
      thumbnail: "/placeholder.svg?height=200&width=300&text=Translation",
      gallery: ["/placeholder.svg?height=200&width=300&text=Document+Translation"],
      tags: ["Traduction", "Français", "Anglais", "Documents", "Professionnel", "Rapide"],
      bestseller: true,
      topRated: true,
      verified: true,
      description:
        "Traduction professionnelle de vos documents avec révision incluse. Spécialisée dans les domaines technique, commercial et juridique. Traduction fidèle qui respecte le ton et le contexte de vos documents originaux.",
      packages: [
        {
          name: "Basic",
          price: 15,
          delivery: "1 jour",
          words: 500,
          includes: ["Traduction 500 mots", "Révision incluse", "Livraison rapide", "Format original conservé"],
        },
        {
          name: "Standard",
          price: 28,
          delivery: "2 jours",
          words: 1000,
          includes: ["Traduction 1000 mots", "Double révision", "Glossaire terminologique", "Support client"],
        },
        {
          name: "Premium",
          price: 50,
          delivery: "3 jours",
          words: 2000,
          includes: [
            "Traduction 2000 mots",
            "Révision native",
            "Certification qualité",
            "Livraison express",
            "Garantie satisfaction",
          ],
        },
      ],
      faqs: [
        {
          question: "Traduisez-vous tous types de documents ?",
          answer: "Oui, je traduis documents techniques, commerciaux, juridiques et personnels.",
        },
        {
          question: "La traduction est-elle certifiée ?",
          answer: "Je peux fournir une certification pour les documents officiels (supplément).",
        },
      ],
      reviews: [
        {
          client: "LegalFirm",
          rating: 5,
          comment: "Traduction parfaite et dans les délais. Fatou maîtrise parfaitement les deux langues.",
          date: "Il y a 2 jours",
        },
        {
          client: "TechDocs",
          rating: 5,
          comment: "Excellente traduction technique, terminologie précise. Je recommande !",
          date: "Il y a 1 semaine",
        },
      ],
    },
    {
      id: 6,
      title: "Je créerai une application mobile avec React Native",
      freelancer: "Jean-Claude Mvondo",
      freelancerAvatar: "/placeholder-user.jpg",
      rating: 4.7,
      reviewsCount: 45,
      startingPrice: 799,
      deliveryTime: "14 jours",
      category: "Développement",
      thumbnail: "/placeholder.svg?height=200&width=300&text=Mobile+App",
      gallery: [
        "/placeholder.svg?height=200&width=300&text=App+1",
        "/placeholder.svg?height=200&width=300&text=App+2",
        "/placeholder.svg?height=200&width=300&text=App+3",
      ],
      tags: ["React Native", "Mobile App", "iOS", "Android", "Cross-platform", "Modern"],
      bestseller: false,
      topRated: true,
      verified: true,
      description:
        "Développement d'applications mobiles cross-platform avec React Native. Je crée des apps performantes qui fonctionnent parfaitement sur iOS et Android. Design UI/UX moderne et intégration API inclus.",
      packages: [
        {
          name: "Basic",
          price: 799,
          delivery: "14 jours",
          screens: 5,
          includes: ["App 5 écrans", "Design basique", "Navigation", "Build iOS/Android"],
        },
        {
          name: "Standard",
          price: 1299,
          delivery: "21 jours",
          screens: 10,
          includes: ["App 10 écrans", "Design custom", "API integration", "Push notifications", "Tests inclus"],
        },
        {
          name: "Premium",
          price: 1999,
          delivery: "30 jours",
          screens: "Illimitées",
          includes: ["App complexe", "Backend inclus", "Admin panel", "Publication stores", "Support 60 jours"],
        },
      ],
      faqs: [
        {
          question: "L'app fonctionnera sur iOS et Android ?",
          answer: "Oui, React Native permet de créer une app qui fonctionne sur les deux plateformes.",
        },
        {
          question: "Aidez-vous pour la publication ?",
          answer: "Oui, je peux vous accompagner dans la publication sur les stores (package Premium).",
        },
      ],
      reviews: [
        {
          client: "StartupMobile",
          rating: 5,
          comment: "App magnifique et très fluide ! Jean-Claude est un expert React Native.",
          date: "Il y a 1 semaine",
        },
        {
          client: "FinTechApp",
          rating: 4,
          comment: "Bon travail, app fonctionnelle et bien codée. Quelques ajustements mineurs.",
          date: "Il y a 2 semaines",
        },
      ],
    },
  ]

  const stats = [
    { label: "Services actifs", value: "8,547", icon: Package, color: "text-blue-600", bg: "bg-blue-100" },
    { label: "Nouveaux aujourd'hui", value: "234", icon: Zap, color: "text-green-600", bg: "bg-green-100" },
    { label: "Satisfaction client", value: "4.8/5", icon: Star, color: "text-yellow-600", bg: "bg-yellow-100" },
    { label: "Livraison moyenne", value: "24h", icon: Clock, color: "text-purple-600", bg: "bg-purple-100" },
  ]

  const categories = ["Développement", "Design", "Marketing", "Rédaction", "Traduction", "Business", "Vidéo", "Audio"]

  const budgetRanges = [
    { value: "all", label: "Tous les budgets" },
    { value: "0-50", label: "Moins de 50€" },
    { value: "50-200", label: "50€ - 200€" },
    { value: "200-500", label: "200€ - 500€" },
    { value: "500+", label: "Plus de 500€" },
  ]

  const deliveryTimes = [
    { value: "all", label: "Tous les délais" },
    { value: "1", label: "24h" },
    { value: "3", label: "3 jours" },
    { value: "7", label: "1 semaine" },
    { value: "14", label: "2 semaines" },
  ]

  const filteredServices = services.filter((service) => {
    const matchesSearch =
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.freelancer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))

    const matchesCategory = selectedCategory === "all" || service.category === selectedCategory
    const matchesBudget = selectedBudget === "all" // Simplified for demo
    const matchesDelivery = selectedDelivery === "all" // Simplified for demo

    return matchesSearch && matchesCategory && matchesBudget && matchesDelivery
  })

  return (
    <PublicLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Découvrez tous les{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">services</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Explorez des milliers de services professionnels proposés par des freelances experts. Trouvez exactement ce
            dont vous avez besoin pour votre projet.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`inline-flex items-center justify-center w-12 h-12 ${stat.bg} rounded-lg mb-2`}>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Filters */}
        <Card className="mb-8 shadow-sm border-gray-200">
          <CardHeader className="bg-gray-50">
            <CardTitle className="flex items-center text-gray-900">
              <Filter className="h-5 w-5 mr-2" />
              Filtres de recherche
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              <div className="lg:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Rechercher des services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>

              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500">
                  <SelectValue placeholder="Catégorie" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Toutes les catégories</SelectItem>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedBudget} onValueChange={setSelectedBudget}>
                <SelectTrigger className="h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500">
                  <SelectValue placeholder="Budget" />
                </SelectTrigger>
                <SelectContent>
                  {budgetRanges.map((budget) => (
                    <SelectItem key={budget.value} value={budget.value}>
                      {budget.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedDelivery} onValueChange={setSelectedDelivery}>
                <SelectTrigger className="h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500">
                  <SelectValue placeholder="Délai" />
                </SelectTrigger>
                <SelectContent>
                  {deliveryTimes.map((delivery) => (
                    <SelectItem key={delivery.value} value={delivery.value}>
                      {delivery.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center justify-between mt-4">
              <div className="text-sm text-gray-600">{filteredServices.length} services trouvés</div>
              <Button
                variant="outline"
                size="sm"
                className="border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
              >
                <Filter className="h-4 w-4 mr-2" />
                Filtres avancés
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Results */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-gray-900">
            {filteredServices.length} service{filteredServices.length > 1 ? "s" : ""} trouvé
            {filteredServices.length > 1 ? "s" : ""}
          </h2>
          <Select defaultValue="popular">
            <SelectTrigger className="w-48 border-gray-300">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="popular">Plus populaires</SelectItem>
              <SelectItem value="rating">Mieux notés</SelectItem>
              <SelectItem value="price-low">Prix croissant</SelectItem>
              <SelectItem value="price-high">Prix décroissant</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filteredServices.map((service) => (
            <Card
              key={service.id}
              className="hover:shadow-lg transition-all duration-300 group overflow-hidden border-gray-200"
            >
              <div className="relative">
                <img
                  src={service.thumbnail || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        size="sm"
                        className="bg-white text-black hover:bg-gray-100 mr-2"
                        onClick={() => setSelectedService(service)}
                      >
                        <Eye className="h-4 w-4 mr-1" />
                        Voir
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                      {selectedService && (
                        <div>
                          <DialogHeader>
                            <DialogTitle className="flex items-start space-x-4">
                              <img
                                src={selectedService.thumbnail || "/placeholder.svg"}
                                alt={selectedService.title}
                                className="w-24 h-16 object-cover rounded"
                              />
                              <div className="flex-1">
                                <h2 className="text-2xl font-bold mb-2">{selectedService.title}</h2>
                                <div className="flex items-center space-x-4 mb-2">
                                  <div className="flex items-center">
                                    <Avatar className="h-8 w-8 mr-2">
                                      <AvatarImage src={selectedService.freelancerAvatar || "/placeholder.svg"} />
                                      <AvatarFallback className="bg-blue-100 text-blue-600">
                                        {selectedService.freelancer
                                          .split(" ")
                                          .map((n: string) => n[0])
                                          .join("")}
                                      </AvatarFallback>
                                    </Avatar>
                                    <span className="font-medium">{selectedService.freelancer}</span>
                                    {selectedService.verified && (
                                      <CheckCircle className="h-4 w-4 text-green-500 ml-1" />
                                    )}
                                  </div>
                                  <div className="flex items-center">
                                    <Star className="h-4 w-4 text-yellow-400 mr-1" />
                                    <span>{selectedService.rating}</span>
                                    <span className="text-gray-500 ml-1">({selectedService.reviewsCount} avis)</span>
                                  </div>
                                </div>
                                <div className="flex items-center space-x-4 text-sm text-gray-600">
                                  <div className="flex items-center">
                                    <Clock className="h-4 w-4 mr-1" />
                                    <span>Livraison en {selectedService.deliveryTime}</span>
                                  </div>
                                  <div className="flex items-center">
                                    <DollarSign className="h-4 w-4 mr-1 text-green-600" />
                                    <span>À partir de {selectedService.startingPrice}€</span>
                                  </div>
                                </div>
                              </div>
                            </DialogTitle>
                          </DialogHeader>

                          <Tabs defaultValue="overview" className="mt-6">
                            <TabsList className="grid w-full grid-cols-4">
                              <TabsTrigger value="overview">Aperçu</TabsTrigger>
                              <TabsTrigger value="packages">Packages</TabsTrigger>
                              <TabsTrigger value="reviews">Avis</TabsTrigger>
                              <TabsTrigger value="faq">FAQ</TabsTrigger>
                            </TabsList>

                            <TabsContent value="overview" className="space-y-6">
                              <div>
                                <h3 className="text-lg font-semibold mb-3">Description du service</h3>
                                <p className="text-gray-600 mb-4">{selectedService.description}</p>
                              </div>

                              <div>
                                <h3 className="text-lg font-semibold mb-3">Compétences utilisées</h3>
                                <div className="flex flex-wrap gap-2">
                                  {selectedService.tags.map((tag: string, index: number) => (
                                    <Badge key={index} variant="outline" className="border-blue-200 text-blue-700">
                                      {tag}
                                    </Badge>
                                  ))}
                                </div>
                              </div>

                              <div>
                                <h3 className="text-lg font-semibold mb-3">Galerie</h3>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                  {selectedService.gallery.map((image: string, index: number) => (
                                    <img
                                      key={index}
                                      src={image || "/placeholder.svg"}
                                      alt={`Exemple ${index + 1}`}
                                      className="w-full h-32 object-cover rounded-lg"
                                    />
                                  ))}
                                </div>
                              </div>
                            </TabsContent>

                            <TabsContent value="packages" className="space-y-4">
                              <div className="grid gap-4">
                                {selectedService.packages.map((pkg: any, index: number) => (
                                  <Card key={index} className="border-gray-200">
                                    <CardContent className="p-6">
                                      <div className="flex items-start justify-between mb-4">
                                        <div>
                                          <h4 className="text-lg font-semibold">{pkg.name}</h4>
                                          <p className="text-2xl font-bold text-blue-600">{pkg.price}€</p>
                                          <p className="text-sm text-gray-600">Livraison en {pkg.delivery}</p>
                                        </div>
                                        <Link href="/auth">
                                          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                                            Commander
                                          </Button>
                                        </Link>
                                      </div>
                                      <div>
                                        <h5 className="font-medium mb-2">Ce qui est inclus :</h5>
                                        <ul className="space-y-1">
                                          {pkg.includes.map((item: string, i: number) => (
                                            <li key={i} className="flex items-center text-sm">
                                              <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                                              {item}
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    </CardContent>
                                  </Card>
                                ))}
                              </div>
                            </TabsContent>

                            <TabsContent value="reviews" className="space-y-4">
                              <div>
                                <h3 className="text-lg font-semibold mb-4">Avis clients</h3>
                                <div className="space-y-4">
                                  {selectedService.reviews.map((review: any, index: number) => (
                                    <Card key={index} className="border-gray-200">
                                      <CardContent className="p-4">
                                        <div className="flex items-center justify-between mb-2">
                                          <span className="font-medium">{review.client}</span>
                                          <div className="flex items-center">
                                            {[...Array(review.rating)].map((_, i) => (
                                              <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                                            ))}
                                            <span className="text-sm text-gray-500 ml-2">{review.date}</span>
                                          </div>
                                        </div>
                                        <p className="text-gray-600">{review.comment}</p>
                                      </CardContent>
                                    </Card>
                                  ))}
                                </div>
                              </div>
                            </TabsContent>

                            <TabsContent value="faq" className="space-y-4">
                              <div>
                                <h3 className="text-lg font-semibold mb-4">Questions fréquentes</h3>
                                <div className="space-y-4">
                                  {selectedService.faqs.map((faq: any, index: number) => (
                                    <Card key={index} className="border-gray-200">
                                      <CardContent className="p-4">
                                        <h4 className="font-medium mb-2">{faq.question}</h4>
                                        <p className="text-gray-600">{faq.answer}</p>
                                      </CardContent>
                                    </Card>
                                  ))}
                                </div>
                              </div>
                            </TabsContent>
                          </Tabs>
                        </div>
                      )}
                    </DialogContent>
                  </Dialog>
                  <Button variant="outline" size="sm" className="bg-white/80 hover:bg-white text-gray-700">
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
                {service.bestseller && (
                  <Badge className="absolute top-3 left-3 bg-orange-500 text-white">Bestseller</Badge>
                )}
                {service.topRated && (
                  <Badge className="absolute top-3 right-3 bg-yellow-500 text-white">
                    <Award className="h-3 w-3 mr-1" />
                    Top Rated
                  </Badge>
                )}
              </div>

              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={service.freelancerAvatar || "/placeholder.svg"} />
                    <AvatarFallback className="bg-blue-100 text-blue-600">{service.freelancer[0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <p className="font-medium text-gray-900">{service.freelancer}</p>
                      {service.verified && <CheckCircle className="h-4 w-4 text-green-500" />}
                    </div>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 mr-1" />
                      <span className="text-sm font-medium">{service.rating}</span>
                      <span className="text-sm text-gray-500 ml-1">({service.reviewsCount})</span>
                    </div>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>

                <p className="text-sm text-gray-600 mb-4 line-clamp-2">{service.description}</p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {service.tags.slice(0, 3).map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-xs bg-blue-50 text-blue-700 border-blue-200">
                      {tag}
                    </Badge>
                  ))}
                  {service.tags.length > 3 && (
                    <Badge variant="outline" className="text-xs bg-gray-50 text-gray-600 border-gray-300">
                      +{service.tags.length - 3}
                    </Badge>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {service.deliveryTime}
                    </div>
                    <Badge variant="secondary" className="bg-blue-50 text-blue-700 border-blue-200">
                      {service.category}
                    </Badge>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">À partir de</p>
                    <p className="text-xl font-bold text-blue-600">{service.startingPrice}€</p>
                  </div>
                </div>

                <div className="mt-4 flex space-x-2">
                  <Link href="/auth" className="flex-1">
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Contacter
                    </Button>
                  </Link>
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mb-12">
          <Button
            variant="outline"
            size="lg"
            className="px-8 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 hover:border-blue-700 bg-transparent"
          >
            Voir plus de services
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>

        {/* CTA Section */}
        <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-0 shadow-lg">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Vous proposez des services professionnels ?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Rejoignez des milliers de freelances qui génèrent des revenus en proposant leurs services sur FORCA
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/auth">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3"
                >
                  Créer mon premier service
                </Button>
              </Link>
              <Link href="/freelances/public">
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 py-3 border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
                >
                  Découvrir les freelances
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </PublicLayout>
  )
}
