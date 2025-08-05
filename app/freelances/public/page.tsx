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
  MapPin,
  Star,
  Filter,
  Users,
  Briefcase,
  TrendingUp,
  MessageSquare,
  Eye,
  Clock,
  Award,
} from "lucide-react"
import Link from "next/link"

export default function PublicFreelancesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedExperience, setSelectedExperience] = useState("all")
  const [selectedLocation, setSelectedLocation] = useState("all")
  const [selectedFreelancer, setSelectedFreelancer] = useState<any>(null)

  const freelances = [
    {
      id: 1,
      name: "Marie Dupont",
      title: "Développeuse Full-Stack Senior",
      avatar: "/placeholder-user.jpg",
      rating: 4.9,
      reviews: 47,
      location: "Paris, France",
      hourlyRate: "55€/h",
      category: "Développement",
      experience: "5+ ans",
      completedProjects: 32,
      responseTime: "< 1h",
      skills: ["React", "Node.js", "TypeScript", "MongoDB", "AWS", "Docker", "GraphQL", "Next.js"],
      description:
        "Développeuse passionnée avec 5 ans d'expérience dans le développement d'applications web modernes. Spécialisée dans l'écosystème JavaScript/TypeScript avec une expertise particulière en React et Node.js. J'accompagne les startups et PME dans la création d'applications scalables et performantes.",
      badges: ["Top Rated", "Verified", "Fast Response"],
      availability: "Disponible",
      languages: ["Français", "Anglais"],
      lastSeen: "En ligne",
      portfolio: [
        {
          title: "E-commerce Platform",
          description: "Plateforme e-commerce complète avec React/Node.js",
          image: "/placeholder.svg?height=200&width=300&text=E-commerce",
        },
        {
          title: "SaaS Dashboard",
          description: "Dashboard analytics pour startup SaaS",
          image: "/placeholder.svg?height=200&width=300&text=Dashboard",
        },
        {
          title: "Mobile App Backend",
          description: "API REST pour application mobile",
          image: "/placeholder.svg?height=200&width=300&text=API",
        },
      ],
      testimonials: [
        {
          client: "TechCorp",
          rating: 5,
          comment: "Excellent travail, très professionnelle et réactive. Je recommande vivement !",
        },
        {
          client: "StartupXYZ",
          rating: 5,
          comment: "Marie a dépassé nos attentes. Code de qualité et respect des délais.",
        },
      ],
      certifications: ["AWS Certified", "React Expert", "Node.js Professional"],
      workingHours: "9h-18h CET",
      joinedDate: "Janvier 2022",
    },
    {
      id: 2,
      name: "Ahmed Ben Ali",
      title: "Designer UI/UX & Brand Identity",
      avatar: "/placeholder-user.jpg",
      rating: 4.8,
      reviews: 34,
      location: "Tunis, Tunisie",
      hourlyRate: "40€/h",
      category: "Design",
      experience: "4 ans",
      completedProjects: 28,
      responseTime: "< 2h",
      skills: ["Figma", "Adobe Creative Suite", "Prototyping", "Branding", "UI/UX", "Sketch", "InVision"],
      description:
        "Designer créatif spécialisé dans la création d'identités visuelles fortes et d'interfaces utilisateur intuitives. J'aide les entreprises à créer des expériences digitales mémorables qui convertissent et fidélisent leurs utilisateurs.",
      badges: ["Creative Expert", "Verified"],
      availability: "Disponible",
      languages: ["Français", "Anglais", "Arabe"],
      lastSeen: "Il y a 2h",
      portfolio: [
        {
          title: "Brand Identity",
          description: "Identité complète pour startup fintech",
          image: "/placeholder.svg?height=200&width=300&text=Branding",
        },
        {
          title: "Mobile UI Design",
          description: "Interface mobile pour app de fitness",
          image: "/placeholder.svg?height=200&width=300&text=Mobile+UI",
        },
      ],
      testimonials: [
        {
          client: "FinTech Solutions",
          rating: 5,
          comment: "Design exceptionnel et grande créativité. Ahmed comprend parfaitement nos besoins.",
        },
      ],
      certifications: ["Adobe Certified Expert", "UX Design Professional"],
      workingHours: "8h-17h CET",
      joinedDate: "Mars 2022",
    },
    {
      id: 3,
      name: "Fatou Diallo",
      title: "Consultante Marketing Digital",
      avatar: "/placeholder-user.jpg",
      rating: 4.9,
      reviews: 52,
      location: "Dakar, Sénégal",
      hourlyRate: "45€/h",
      category: "Marketing",
      experience: "6 ans",
      completedProjects: 41,
      responseTime: "< 30min",
      skills: ["Google Ads", "Facebook Ads", "SEO", "Analytics", "Strategy", "Content Marketing", "Email Marketing"],
      description:
        "Experte en marketing digital avec une forte expertise dans l'acquisition client et l'optimisation des campagnes publicitaires. J'accompagne les entreprises dans leur croissance digitale avec des stratégies sur-mesure et des résultats mesurables.",
      badges: ["Top Rated", "Marketing Expert", "Fast Response"],
      availability: "Occupée jusqu'au 15 Feb",
      languages: ["Français", "Anglais", "Wolof"],
      lastSeen: "En ligne",
      portfolio: [
        {
          title: "Growth Campaign",
          description: "Campagne d'acquisition pour e-commerce",
          image: "/placeholder.svg?height=200&width=300&text=Growth",
        },
        {
          title: "SEO Strategy",
          description: "Stratégie SEO complète pour SaaS B2B",
          image: "/placeholder.svg?height=200&width=300&text=SEO",
        },
      ],
      testimonials: [
        {
          client: "E-commerce Pro",
          rating: 5,
          comment: "ROI exceptionnel sur nos campagnes. Fatou maîtrise parfaitement son domaine.",
        },
      ],
      certifications: ["Google Ads Certified", "Facebook Blueprint", "SEO Expert"],
      workingHours: "9h-18h GMT",
      joinedDate: "Juin 2021",
    },
    {
      id: 4,
      name: "Jean-Claude Mbeki",
      title: "Rédacteur Web & Content Manager",
      avatar: "/placeholder-user.jpg",
      rating: 4.7,
      reviews: 29,
      location: "Douala, Cameroun",
      hourlyRate: "30€/h",
      category: "Rédaction",
      experience: "3 ans",
      completedProjects: 45,
      responseTime: "< 1h",
      skills: ["SEO Writing", "Content Strategy", "WordPress", "Copywriting", "Blog Management", "Social Media"],
      description:
        "Rédacteur web spécialisé dans la création de contenu optimisé SEO et la stratégie de contenu pour entreprises B2B et B2C. Je transforme vos idées en contenus engageants qui génèrent du trafic et des conversions.",
      badges: ["Content Expert", "Verified"],
      availability: "Disponible",
      languages: ["Français", "Anglais"],
      lastSeen: "Il y a 1h",
      portfolio: [
        {
          title: "Blog Strategy",
          description: "Stratégie de contenu pour blog tech",
          image: "/placeholder.svg?height=200&width=300&text=Blog",
        },
        {
          title: "SEO Articles",
          description: "Série d'articles optimisés SEO",
          image: "/placeholder.svg?height=200&width=300&text=SEO+Content",
        },
      ],
      testimonials: [
        {
          client: "TechBlog",
          rating: 5,
          comment: "Contenu de qualité et respect parfait des briefs. Très professionnel.",
        },
      ],
      certifications: ["Content Marketing Certified", "SEO Writing Expert"],
      workingHours: "8h-16h WAT",
      joinedDate: "Septembre 2022",
    },
    {
      id: 5,
      name: "Amina Benali",
      title: "Traductrice Professionnelle",
      avatar: "/placeholder-user.jpg",
      rating: 4.8,
      reviews: 38,
      location: "Casablanca, Maroc",
      hourlyRate: "35€/h",
      category: "Traduction",
      experience: "7 ans",
      completedProjects: 67,
      responseTime: "< 2h",
      skills: ["Français", "Anglais", "Arabe", "Espagnol", "Traduction Technique", "Localisation"],
      description:
        "Traductrice certifiée avec une expertise dans la traduction technique, juridique et marketing. Maîtrise parfaite de 4 langues avec une spécialisation dans les domaines technologiques et commerciaux.",
      badges: ["Certified", "Language Expert"],
      availability: "Disponible",
      languages: ["Français", "Anglais", "Arabe", "Espagnol"],
      lastSeen: "Il y a 30min",
      portfolio: [
        {
          title: "Technical Manual",
          description: "Manuel technique FR-EN pour industrie",
          image: "/placeholder.svg?height=200&width=300&text=Technical",
        },
        {
          title: "Website Localization",
          description: "Localisation site e-commerce",
          image: "/placeholder.svg?height=200&width=300&text=Localization",
        },
      ],
      testimonials: [
        { client: "TechDocs", rating: 5, comment: "Traduction précise et dans les délais. Excellente communication." },
      ],
      certifications: ["Certified Translator", "Technical Translation Expert"],
      workingHours: "9h-17h CET",
      joinedDate: "Avril 2021",
    },
    {
      id: 6,
      name: "Kofi Asante",
      title: "Développeur Mobile React Native",
      avatar: "/placeholder-user.jpg",
      rating: 4.9,
      reviews: 31,
      location: "Accra, Ghana",
      hourlyRate: "50€/h",
      category: "Développement",
      experience: "4 ans",
      completedProjects: 24,
      responseTime: "< 1h",
      skills: ["React Native", "Flutter", "iOS", "Android", "Firebase", "Redux", "TypeScript"],
      description:
        "Développeur mobile passionné, spécialisé dans la création d'applications cross-platform performantes et user-friendly. J'accompagne les entreprises dans leur transformation mobile avec des solutions innovantes.",
      badges: ["Mobile Expert", "Top Rated"],
      availability: "Disponible",
      languages: ["Anglais", "Français"],
      lastSeen: "En ligne",
      portfolio: [
        {
          title: "Fitness App",
          description: "App de fitness avec tracking avancé",
          image: "/placeholder.svg?height=200&width=300&text=Fitness+App",
        },
        {
          title: "E-learning Platform",
          description: "Plateforme mobile d'apprentissage",
          image: "/placeholder.svg?height=200&width=300&text=E-learning",
        },
      ],
      testimonials: [
        {
          client: "MobileFirst",
          rating: 5,
          comment: "App de qualité exceptionnelle. Kofi est un expert en développement mobile.",
        },
      ],
      certifications: ["React Native Expert", "Mobile Development Professional"],
      workingHours: "8h-16h GMT",
      joinedDate: "Février 2022",
    },
  ]

  const stats = [
    { label: "Freelances vérifiés", value: "12,456", icon: Users, color: "text-blue-600", bg: "bg-blue-100" },
    { label: "Projets réalisés", value: "8,923", icon: Briefcase, color: "text-green-600", bg: "bg-green-100" },
    { label: "Note moyenne", value: "4.8/5", icon: Star, color: "text-yellow-600", bg: "bg-yellow-100" },
    { label: "Taux de satisfaction", value: "98%", icon: TrendingUp, color: "text-purple-600", bg: "bg-purple-100" },
  ]

  const categories = ["Développement", "Design", "Marketing", "Rédaction", "Traduction", "Conseil", "Vidéo", "Audio"]

  const filteredFreelances = freelances.filter((freelance) => {
    const matchesSearch =
      freelance.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      freelance.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      freelance.skills.some((skill) => skill.toLowerCase().includes(searchTerm.toLowerCase()))

    const matchesCategory = selectedCategory === "all" || freelance.category === selectedCategory
    const matchesExperience =
      selectedExperience === "all" ||
      (selectedExperience === "junior" && freelance.experience.includes("1-3")) ||
      (selectedExperience === "mid" && (freelance.experience.includes("3-5") || freelance.experience.includes("4"))) ||
      (selectedExperience === "senior" &&
        (freelance.experience.includes("5+") ||
          freelance.experience.includes("6") ||
          freelance.experience.includes("7")))

    const matchesLocation =
      selectedLocation === "all" || freelance.location.toLowerCase().includes(selectedLocation.toLowerCase())

    return matchesSearch && matchesCategory && matchesExperience && matchesLocation
  })

  return (
    <PublicLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Découvrez les meilleurs{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              freelances africains
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Trouvez le talent parfait pour votre projet parmi des milliers d'experts vérifiés
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
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Rechercher un freelance..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="border-gray-300 focus:border-blue-500 focus:ring-blue-500">
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

              <Select value={selectedExperience} onValueChange={setSelectedExperience}>
                <SelectTrigger className="border-gray-300 focus:border-blue-500 focus:ring-blue-500">
                  <SelectValue placeholder="Expérience" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tous niveaux</SelectItem>
                  <SelectItem value="junior">Junior (1-3 ans)</SelectItem>
                  <SelectItem value="mid">Intermédiaire (3-5 ans)</SelectItem>
                  <SelectItem value="senior">Senior (5+ ans)</SelectItem>
                </SelectContent>
              </Select>

              <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                <SelectTrigger className="border-gray-300 focus:border-blue-500 focus:ring-blue-500">
                  <SelectValue placeholder="Localisation" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Toutes les localisations</SelectItem>
                  <SelectItem value="paris">Paris</SelectItem>
                  <SelectItem value="dakar">Dakar</SelectItem>
                  <SelectItem value="tunis">Tunis</SelectItem>
                  <SelectItem value="casablanca">Casablanca</SelectItem>
                  <SelectItem value="accra">Accra</SelectItem>
                  <SelectItem value="douala">Douala</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Results */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-gray-900">
            {filteredFreelances.length} freelance{filteredFreelances.length > 1 ? "s" : ""} trouvé
            {filteredFreelances.length > 1 ? "s" : ""}
          </h2>
          <Select defaultValue="rating">
            <SelectTrigger className="w-48 border-gray-300">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="rating">Mieux notés</SelectItem>
              <SelectItem value="rate-high">Tarif décroissant</SelectItem>
              <SelectItem value="rate-low">Tarif croissant</SelectItem>
              <SelectItem value="experience">Plus expérimentés</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Freelances Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filteredFreelances.map((freelance) => (
            <Card key={freelance.id} className="hover:shadow-lg transition-shadow border-gray-200">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="relative">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src={freelance.avatar || "/placeholder.svg"} alt={freelance.name} />
                      <AvatarFallback className="bg-blue-100 text-blue-600">
                        {freelance.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    {freelance.lastSeen === "En ligne" && (
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 truncate">{freelance.name}</h3>
                    <p className="text-sm text-gray-600 truncate">{freelance.title}</p>
                    <div className="flex items-center mt-1">
                      <Star className="h-4 w-4 text-yellow-400 mr-1" />
                      <span className="text-sm font-medium">{freelance.rating}</span>
                      <span className="text-sm text-gray-500 ml-1">({freelance.reviews} avis)</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 mb-3">
                  {freelance.badges.map((badge, index) => (
                    <Badge key={index} variant="secondary" className="text-xs bg-blue-50 text-blue-700 border-blue-200">
                      {badge}
                    </Badge>
                  ))}
                </div>

                <p className="text-sm text-gray-600 mb-4 line-clamp-3">{freelance.description}</p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {freelance.skills.slice(0, 4).map((skill, index) => (
                    <Badge key={index} variant="outline" className="text-xs border-gray-300 text-gray-700">
                      {skill}
                    </Badge>
                  ))}
                  {freelance.skills.length > 4 && (
                    <Badge variant="outline" className="text-xs border-gray-300 text-gray-700">
                      +{freelance.skills.length - 4}
                    </Badge>
                  )}
                </div>

                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {freelance.location}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {freelance.responseTime}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Briefcase className="h-4 w-4 mr-1" />
                      {freelance.completedProjects} projets
                    </div>
                    <div className="font-semibold text-blue-600">{freelance.hourlyRate}</div>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
                        onClick={() => setSelectedFreelancer(freelance)}
                      >
                        <Eye className="h-4 w-4 mr-1" />
                        Voir profil
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                      {selectedFreelancer && (
                        <div>
                          <DialogHeader>
                            <DialogTitle className="flex items-center space-x-4">
                              <Avatar className="h-16 w-16">
                                <AvatarImage
                                  src={selectedFreelancer.avatar || "/placeholder.svg"}
                                  alt={selectedFreelancer.name}
                                />
                                <AvatarFallback className="bg-blue-100 text-blue-600">
                                  {selectedFreelancer.name
                                    .split(" ")
                                    .map((n: string) => n[0])
                                    .join("")}
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <h2 className="text-2xl font-bold">{selectedFreelancer.name}</h2>
                                <p className="text-gray-600">{selectedFreelancer.title}</p>
                                <div className="flex items-center mt-2">
                                  <Star className="h-5 w-5 text-yellow-400 mr-1" />
                                  <span className="font-medium">{selectedFreelancer.rating}</span>
                                  <span className="text-gray-500 ml-1">({selectedFreelancer.reviews} avis)</span>
                                  <Badge className="ml-3 bg-green-100 text-green-800">
                                    {selectedFreelancer.availability}
                                  </Badge>
                                </div>
                              </div>
                            </DialogTitle>
                          </DialogHeader>

                          <Tabs defaultValue="overview" className="mt-6">
                            <TabsList className="grid w-full grid-cols-4">
                              <TabsTrigger value="overview">Aperçu</TabsTrigger>
                              <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
                              <TabsTrigger value="reviews">Avis</TabsTrigger>
                              <TabsTrigger value="contact">Contact</TabsTrigger>
                            </TabsList>

                            <TabsContent value="overview" className="space-y-6">
                              <div>
                                <h3 className="text-lg font-semibold mb-3">À propos</h3>
                                <p className="text-gray-600">{selectedFreelancer.description}</p>
                              </div>

                              <div>
                                <h3 className="text-lg font-semibold mb-3">Compétences</h3>
                                <div className="flex flex-wrap gap-2">
                                  {selectedFreelancer.skills.map((skill: string, index: number) => (
                                    <Badge key={index} variant="outline" className="border-blue-200 text-blue-700">
                                      {skill}
                                    </Badge>
                                  ))}
                                </div>
                              </div>

                              <div className="grid grid-cols-2 gap-6">
                                <div>
                                  <h3 className="text-lg font-semibold mb-3">Informations</h3>
                                  <div className="space-y-2 text-sm">
                                    <div className="flex justify-between">
                                      <span className="text-gray-600">Localisation:</span>
                                      <span>{selectedFreelancer.location}</span>
                                    </div>
                                    <div className="flex justify-between">
                                      <span className="text-gray-600">Expérience:</span>
                                      <span>{selectedFreelancer.experience}</span>
                                    </div>
                                    <div className="flex justify-between">
                                      <span className="text-gray-600">Projets réalisés:</span>
                                      <span>{selectedFreelancer.completedProjects}</span>
                                    </div>
                                    <div className="flex justify-between">
                                      <span className="text-gray-600">Temps de réponse:</span>
                                      <span>{selectedFreelancer.responseTime}</span>
                                    </div>
                                    <div className="flex justify-between">
                                      <span className="text-gray-600">Membre depuis:</span>
                                      <span>{selectedFreelancer.joinedDate}</span>
                                    </div>
                                  </div>
                                </div>

                                <div>
                                  <h3 className="text-lg font-semibold mb-3">Certifications</h3>
                                  <div className="space-y-2">
                                    {selectedFreelancer.certifications.map((cert: string, index: number) => (
                                      <div key={index} className="flex items-center">
                                        <Award className="h-4 w-4 text-yellow-500 mr-2" />
                                        <span className="text-sm">{cert}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </TabsContent>

                            <TabsContent value="portfolio" className="space-y-6">
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {selectedFreelancer.portfolio.map((item: any, index: number) => (
                                  <Card key={index} className="border-gray-200">
                                    <img
                                      src={item.image || "/placeholder.svg"}
                                      alt={item.title}
                                      className="w-full h-48 object-cover rounded-t-lg"
                                    />
                                    <CardContent className="p-4">
                                      <h4 className="font-semibold mb-2">{item.title}</h4>
                                      <p className="text-sm text-gray-600">{item.description}</p>
                                    </CardContent>
                                  </Card>
                                ))}
                              </div>
                            </TabsContent>

                            <TabsContent value="reviews" className="space-y-4">
                              {selectedFreelancer.testimonials.map((review: any, index: number) => (
                                <Card key={index} className="border-gray-200">
                                  <CardContent className="p-4">
                                    <div className="flex items-center justify-between mb-2">
                                      <span className="font-medium">{review.client}</span>
                                      <div className="flex items-center">
                                        {[...Array(review.rating)].map((_, i) => (
                                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                                        ))}
                                      </div>
                                    </div>
                                    <p className="text-gray-600">{review.comment}</p>
                                  </CardContent>
                                </Card>
                              ))}
                            </TabsContent>

                            <TabsContent value="contact" className="space-y-6">
                              <div className="grid grid-cols-2 gap-6">
                                <div>
                                  <h3 className="text-lg font-semibold mb-3">Tarifs</h3>
                                  <div className="text-3xl font-bold text-blue-600 mb-2">
                                    {selectedFreelancer.hourlyRate}
                                  </div>
                                  <p className="text-gray-600">Tarif horaire</p>
                                </div>
                                <div>
                                  <h3 className="text-lg font-semibold mb-3">Disponibilité</h3>
                                  <div className="space-y-2 text-sm">
                                    <div className="flex justify-between">
                                      <span className="text-gray-600">Statut:</span>
                                      <Badge className="bg-green-100 text-green-800">
                                        {selectedFreelancer.availability}
                                      </Badge>
                                    </div>
                                    <div className="flex justify-between">
                                      <span className="text-gray-600">Horaires:</span>
                                      <span>{selectedFreelancer.workingHours}</span>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="flex space-x-4">
                                <Link href="/auth" className="flex-1">
                                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                                    <MessageSquare className="h-4 w-4 mr-2" />
                                    Contacter ce freelance
                                  </Button>
                                </Link>
                                <Link href="/auth" className="flex-1">
                                  <Button
                                    variant="outline"
                                    className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
                                  >
                                    Inviter sur un projet
                                  </Button>
                                </Link>
                              </div>
                            </TabsContent>
                          </Tabs>
                        </div>
                      )}
                    </DialogContent>
                  </Dialog>

                  <Link href="/auth" className="flex-1">
                    <Button
                      size="sm"
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                    >
                      <MessageSquare className="h-4 w-4 mr-1" />
                      Contacter
                    </Button>
                  </Link>
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
            Voir plus de freelances
            <TrendingUp className="h-4 w-4 ml-2" />
          </Button>
        </div>

        {/* CTA Section */}
        <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-0 shadow-lg">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Vous êtes freelance ? Rejoignez notre communauté !
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Accédez à des milliers d'opportunités et développez votre carrière avec FORCA
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/auth">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3"
                >
                  Créer mon profil freelance
                </Button>
              </Link>
              <Link href="/formations/public">
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 py-3 border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
                >
                  Découvrir les formations
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </PublicLayout>
  )
}
