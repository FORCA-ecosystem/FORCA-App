"use client"

import { useState } from "react"
import { PublicLayout } from "@/components/public-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Search,
  Filter,
  MapPin,
  Clock,
  DollarSign,
  Users,
  Briefcase,
  TrendingUp,
  Eye,
  Calendar,
  CheckCircle,
  ArrowRight,
  Building,
  Globe,
  Zap,
} from "lucide-react"
import Link from "next/link"

export default function PublicMissionsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedBudget, setSelectedBudget] = useState("all")
  const [selectedDuration, setSelectedDuration] = useState("all")
  const [selectedLocation, setSelectedLocation] = useState("all")
  const [selectedMission, setSelectedMission] = useState<any>(null)
  const [isDetailOpen, setIsDetailOpen] = useState(false)

  const missions = [
    {
      id: 1,
      title: "Développement d'une application mobile e-commerce",
      company: "TechCorp Solutions",
      companyLogo: "/placeholder.svg?height=40&width=40",
      description:
        "Nous recherchons un développeur React Native expérimenté pour créer une application mobile e-commerce complète avec paiement intégré, gestion des stocks et interface admin.",
      category: "Développement",
      budget: "2500€ - 4000€",
      duration: "6-8 semaines",
      location: "Remote",
      postedDate: "Il y a 2 jours",
      deadline: "15 février 2025",
      applicants: 12,
      isUrgent: true,
      isVerified: true,
      skills: ["React Native", "Node.js", "MongoDB", "Stripe", "Firebase", "Redux", "TypeScript"],
      requirements: [
        "5+ ans d'expérience en développement mobile",
        "Maîtrise de React Native et Expo",
        "Expérience avec les APIs de paiement",
        "Portfolio d'applications publiées",
        "Disponibilité immédiate",
      ],
      responsibilities: [
        "Développer l'application mobile iOS/Android",
        "Intégrer les systèmes de paiement",
        "Créer l'interface d'administration",
        "Optimiser les performances",
        "Assurer les tests et le déploiement",
      ],
      companyInfo: {
        name: "TechCorp Solutions",
        industry: "E-commerce",
        size: "50-100 employés",
        location: "Paris, France",
        website: "www.techcorp.com",
        description: "Startup spécialisée dans les solutions e-commerce innovantes pour PME.",
      },
      benefits: [
        "Projet stimulant et innovant",
        "Équipe technique expérimentée",
        "Possibilité de collaboration long terme",
        "Références pour portfolio",
      ],
    },
    {
      id: 2,
      title: "Refonte complète de l'identité visuelle",
      company: "Green Energy Co",
      companyLogo: "/placeholder.svg?height=40&width=40",
      description:
        "Refonte complète de notre identité visuelle : logo, charte graphique, supports de communication, site web. Nous voulons moderniser notre image pour refléter nos valeurs écologiques.",
      category: "Design",
      budget: "1500€ - 2500€",
      duration: "4-6 semaines",
      location: "Dakar, Sénégal",
      postedDate: "Il y a 1 jour",
      deadline: "20 février 2025",
      applicants: 8,
      isUrgent: false,
      isVerified: true,
      skills: ["Branding", "Logo Design", "Illustrator", "Photoshop", "InDesign", "Web Design", "Print Design"],
      requirements: [
        "3+ ans d'expérience en branding",
        "Portfolio de refontes d'identité",
        "Maîtrise des outils Adobe",
        "Sensibilité écologique",
        "Créativité et originalité",
      ],
      responsibilities: [
        "Créer le nouveau logo et déclinaisons",
        "Développer la charte graphique complète",
        "Designer les supports de communication",
        "Adapter l'identité au web",
        "Livrer un guide de style détaillé",
      ],
      companyInfo: {
        name: "Green Energy Co",
        industry: "Énergies renouvelables",
        size: "20-50 employés",
        location: "Dakar, Sénégal",
        website: "www.greenenergy.sn",
        description: "Entreprise leader en solutions d'énergie solaire en Afrique de l'Ouest.",
      },
      benefits: [
        "Projet à impact environnemental",
        "Liberté créative importante",
        "Client engagé et collaboratif",
        "Visibilité sur le marché africain",
      ],
    },
    {
      id: 3,
      title: "Stratégie marketing digital pour lancement produit",
      company: "InnovateLab",
      companyLogo: "/placeholder.svg?height=40&width=40",
      description:
        "Nous lançons un nouveau produit SaaS et cherchons un expert marketing digital pour créer et exécuter une stratégie complète : SEO, réseaux sociaux, publicité payante, content marketing.",
      category: "Marketing",
      budget: "3000€ - 5000€",
      duration: "8-10 semaines",
      location: "Remote",
      postedDate: "Il y a 3 jours",
      deadline: "25 février 2025",
      applicants: 15,
      isUrgent: true,
      isVerified: true,
      skills: [
        "Marketing Digital",
        "SEO",
        "Google Ads",
        "Facebook Ads",
        "Content Marketing",
        "Analytics",
        "Growth Hacking",
      ],
      requirements: [
        "5+ ans en marketing digital",
        "Expérience lancement de produits SaaS",
        "Maîtrise des outils marketing",
        "Résultats prouvés en acquisition",
        "Approche data-driven",
      ],
      responsibilities: [
        "Élaborer la stratégie marketing complète",
        "Créer et gérer les campagnes publicitaires",
        "Optimiser le référencement naturel",
        "Développer le content marketing",
        "Analyser et optimiser les performances",
      ],
      companyInfo: {
        name: "InnovateLab",
        industry: "SaaS / Technologie",
        size: "10-20 employés",
        location: "Casablanca, Maroc",
        website: "www.innovatelab.ma",
        description: "Startup technologique développant des solutions SaaS pour entreprises.",
      },
      benefits: [
        "Projet de lancement excitant",
        "Budget marketing conséquent",
        "Équipe dynamique et innovante",
        "Opportunité de croissance",
      ],
    },
    {
      id: 4,
      title: "Rédaction de contenu technique et documentation API",
      company: "DevTools Inc",
      companyLogo: "/placeholder.svg?height=40&width=40",
      description:
        "Recherche rédacteur technique pour créer la documentation complète de notre API, guides d'utilisation, tutoriels et articles de blog techniques pour développeurs.",
      category: "Rédaction",
      budget: "1200€ - 2000€",
      duration: "3-4 semaines",
      location: "Remote",
      postedDate: "Il y a 4 jours",
      deadline: "10 mars 2025",
      applicants: 6,
      isUrgent: false,
      isVerified: true,
      skills: ["Rédaction technique", "Documentation API", "Markdown", "Git", "Développement", "SEO technique"],
      requirements: [
        "Expérience en rédaction technique",
        "Compréhension des APIs REST",
        "Maîtrise de Markdown et Git",
        "Capacité de vulgarisation",
        "Anglais technique courant",
      ],
      responsibilities: [
        "Rédiger la documentation API complète",
        "Créer des guides d'intégration",
        "Écrire des tutoriels pas-à-pas",
        "Produire du contenu blog technique",
        "Maintenir la cohérence documentaire",
      ],
      companyInfo: {
        name: "DevTools Inc",
        industry: "Outils de développement",
        size: "30-50 employés",
        location: "Tunis, Tunisie",
        website: "www.devtools.tn",
        description: "Éditeur d'outils de développement pour équipes techniques.",
      },
      benefits: [
        "Projet technique stimulant",
        "Collaboration avec développeurs experts",
        "Flexibilité horaire totale",
        "Possibilité de missions récurrentes",
      ],
    },
    {
      id: 5,
      title: "Traduction multilingue site e-commerce",
      company: "AfriShop",
      companyLogo: "/placeholder.svg?height=40&width=40",
      description:
        "Traduction complète de notre plateforme e-commerce (français vers anglais, arabe, portugais) incluant interface utilisateur, descriptions produits, contenus marketing et support client.",
      category: "Traduction",
      budget: "800€ - 1500€",
      duration: "2-3 semaines",
      location: "Remote",
      postedDate: "Il y a 1 semaine",
      deadline: "5 mars 2025",
      applicants: 9,
      isUrgent: false,
      isVerified: true,
      skills: ["Traduction", "Localisation", "E-commerce", "Marketing", "Français", "Anglais", "Arabe", "Portugais"],
      requirements: [
        "Traducteur natif multilingue",
        "Expérience e-commerce",
        "Maîtrise de la localisation",
        "Connaissance du marketing digital",
        "Outils de traduction professionnels",
      ],
      responsibilities: [
        "Traduire l'interface utilisateur",
        "Localiser les descriptions produits",
        "Adapter le contenu marketing",
        "Traduire la documentation support",
        "Assurer la cohérence terminologique",
      ],
      companyInfo: {
        name: "AfriShop",
        industry: "E-commerce",
        size: "100-200 employés",
        location: "Abidjan, Côte d'Ivoire",
        website: "www.afrishop.ci",
        description: "Plateforme e-commerce leader en Afrique francophone.",
      },
      benefits: [
        "Projet d'envergure internationale",
        "Diversité linguistique enrichissante",
        "Client établi et fiable",
        "Opportunités de collaboration future",
      ],
    },
    {
      id: 6,
      title: "Développement d'un système de gestion RH",
      company: "HRTech Solutions",
      companyLogo: "/placeholder.svg?height=40&width=40",
      description:
        "Création d'un système de gestion des ressources humaines complet : gestion des employés, paie, congés, évaluations, reporting. Interface web moderne et intuitive requise.",
      category: "Développement",
      budget: "4000€ - 6000€",
      duration: "10-12 semaines",
      location: "Accra, Ghana",
      postedDate: "Il y a 5 jours",
      deadline: "1er mars 2025",
      applicants: 18,
      isUrgent: true,
      isVerified: true,
      skills: ["Full-Stack", "React", "Node.js", "PostgreSQL", "Authentication", "Dashboard", "Reporting"],
      requirements: [
        "7+ ans développement full-stack",
        "Expérience systèmes de gestion",
        "Maîtrise des bases de données",
        "Sécurité et authentification",
        "Interface utilisateur moderne",
      ],
      responsibilities: [
        "Développer l'architecture système",
        "Créer les modules de gestion",
        "Implémenter la sécurité",
        "Designer l'interface utilisateur",
        "Assurer les tests et déploiement",
      ],
      companyInfo: {
        name: "HRTech Solutions",
        industry: "Logiciels RH",
        size: "20-30 employés",
        location: "Accra, Ghana",
        website: "www.hrtech.gh",
        description: "Spécialiste en solutions technologiques pour ressources humaines.",
      },
      benefits: [
        "Projet technique complexe",
        "Impact direct sur les entreprises",
        "Équipe technique expérimentée",
        "Rémunération attractive",
      ],
    },
  ]

  const stats = [
    { label: "Missions actives", value: "1,247", icon: Briefcase, color: "text-blue-600", bg: "bg-blue-100" },
    { label: "Nouvelles aujourd'hui", value: "89", icon: Zap, color: "text-green-600", bg: "bg-green-100" },
    { label: "Budget moyen", value: "2,850€", icon: DollarSign, color: "text-purple-600", bg: "bg-purple-100" },
    { label: "Taux de succès", value: "94%", icon: TrendingUp, color: "text-yellow-600", bg: "bg-yellow-100" },
  ]

  const categories = ["Développement", "Design", "Marketing", "Rédaction", "Traduction", "Business", "Conseil", "Autre"]

  const budgetRanges = [
    { value: "all", label: "Tous les budgets" },
    { value: "0-500", label: "Moins de 500€" },
    { value: "500-1500", label: "500€ - 1500€" },
    { value: "1500-3000", label: "1500€ - 3000€" },
    { value: "3000+", label: "Plus de 3000€" },
  ]

  const durations = [
    { value: "all", label: "Toutes les durées" },
    { value: "1-2", label: "1-2 semaines" },
    { value: "3-4", label: "3-4 semaines" },
    { value: "1-2m", label: "1-2 mois" },
    { value: "3m+", label: "3+ mois" },
  ]

  const locations = [
    { value: "all", label: "Toutes les localisations" },
    { value: "remote", label: "Remote" },
    { value: "paris", label: "Paris" },
    { value: "dakar", label: "Dakar" },
    { value: "casablanca", label: "Casablanca" },
    { value: "tunis", label: "Tunis" },
    { value: "accra", label: "Accra" },
  ]

  const filteredMissions = missions.filter((mission) => {
    const matchesSearch =
      mission.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      mission.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      mission.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      mission.skills.some((skill) => skill.toLowerCase().includes(searchTerm.toLowerCase()))

    const matchesCategory = selectedCategory === "all" || mission.category === selectedCategory
    const matchesBudget = selectedBudget === "all"
    const matchesDuration = selectedDuration === "all"
    const matchesLocation = selectedLocation === "all" || mission.location.toLowerCase().includes(selectedLocation)

    return matchesSearch && matchesCategory && matchesBudget && matchesDuration && matchesLocation
  })

  const openMissionDetail = (mission: any) => {
    setSelectedMission(mission)
    setIsDetailOpen(true)
  }

  return (
    <PublicLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
        {/* Hero Section - Mobile Optimized */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Découvrez les meilleures{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              opportunités
            </span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
            Explorez des centaines de missions passionnantes proposées par des entreprises vérifiées. Trouvez le projet
            parfait pour développer votre carrière.
          </p>

          {/* Stats - Mobile Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div
                  className={`inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 ${stat.bg} rounded-lg mb-2`}
                >
                  <stat.icon className={`h-5 w-5 sm:h-6 sm:w-6 ${stat.color}`} />
                </div>
                <div className="text-lg sm:text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-xs sm:text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Filters - Mobile Optimized */}
        <Card className="mb-6 sm:mb-8 shadow-sm border-gray-200">
          <CardHeader className="bg-gray-50 pb-4">
            <CardTitle className="flex items-center text-gray-900 text-lg">
              <Filter className="h-5 w-5 mr-2" />
              Filtres de recherche
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 sm:p-6">
            {/* Mobile Search */}
            <div className="mb-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Rechercher des missions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 h-11 sm:h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Mobile Filters Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="h-11 sm:h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500">
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
                <SelectTrigger className="h-11 sm:h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500">
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

              <Select value={selectedDuration} onValueChange={setSelectedDuration}>
                <SelectTrigger className="h-11 sm:h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500">
                  <SelectValue placeholder="Durée" />
                </SelectTrigger>
                <SelectContent>
                  {durations.map((duration) => (
                    <SelectItem key={duration.value} value={duration.value}>
                      {duration.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                <SelectTrigger className="h-11 sm:h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500">
                  <SelectValue placeholder="Localisation" />
                </SelectTrigger>
                <SelectContent>
                  {locations.map((location) => (
                    <SelectItem key={location.value} value={location.value}>
                      {location.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-4 gap-3">
              <div className="text-sm text-gray-600">{filteredMissions.length} missions trouvées</div>
              <Button
                variant="outline"
                size="sm"
                className="border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent w-full sm:w-auto"
              >
                <Filter className="h-4 w-4 mr-2" />
                Filtres avancés
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Results Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
            {filteredMissions.length} mission{filteredMissions.length > 1 ? "s" : ""} trouvée
            {filteredMissions.length > 1 ? "s" : ""}
          </h2>
          <Select defaultValue="recent">
            <SelectTrigger className="w-full sm:w-48 border-gray-300">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="recent">Plus récentes</SelectItem>
              <SelectItem value="budget-high">Budget décroissant</SelectItem>
              <SelectItem value="budget-low">Budget croissant</SelectItem>
              <SelectItem value="deadline">Échéance proche</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Mission Cards - Mobile Optimized */}
        <div className="space-y-4 sm:space-y-6 mb-8">
          {filteredMissions.map((mission) => (
            <Card key={mission.id} className="hover:shadow-lg transition-shadow border-gray-200">
              <CardContent className="p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row items-start justify-between mb-4 gap-4">
                  <div className="flex items-start space-x-3 sm:space-x-4 flex-1 w-full">
                    <Avatar className="h-10 w-10 sm:h-12 sm:w-12 flex-shrink-0">
                      <AvatarImage src={mission.companyLogo || "/placeholder.svg"} alt={mission.company} />
                      <AvatarFallback className="bg-blue-100 text-blue-600 text-sm">
                        {mission.company
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-2 mb-2">
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 hover:text-blue-600 cursor-pointer line-clamp-2">
                          {mission.title}
                        </h3>
                        <div className="flex items-center space-x-2">
                          {mission.isUrgent && (
                            <Badge className="bg-red-100 text-red-800 border-red-200 text-xs">Urgent</Badge>
                          )}
                          {mission.isVerified && (
                            <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 flex-shrink-0" />
                          )}
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-4 text-sm text-gray-600 mb-3">
                        <div className="flex items-center">
                          <Building className="h-4 w-4 mr-1 flex-shrink-0" />
                          <span className="truncate">{mission.company}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
                          <span>{mission.location}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1 flex-shrink-0" />
                          <span>{mission.postedDate}</span>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-4 line-clamp-2 text-sm sm:text-base">{mission.description}</p>
                    </div>
                  </div>
                  <div className="text-left sm:text-right ml-0 sm:ml-4 w-full sm:w-auto">
                    <div className="text-xl sm:text-2xl font-bold text-blue-600 mb-1">{mission.budget}</div>
                    <div className="text-sm text-gray-600">{mission.duration}</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="bg-blue-50 text-blue-700 border-blue-200 text-xs">
                    {mission.category}
                  </Badge>
                  {mission.skills.slice(0, 3).map((skill, index) => (
                    <Badge key={index} variant="outline" className="border-gray-300 text-gray-700 text-xs">
                      {skill}
                    </Badge>
                  ))}
                  {mission.skills.length > 3 && (
                    <Badge variant="outline" className="border-gray-300 text-gray-700 text-xs">
                      +{mission.skills.length - 3}
                    </Badge>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {mission.applicants} candidatures
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      Échéance: {mission.deadline}
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 w-full sm:w-auto">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent w-full sm:w-auto"
                      onClick={() => openMissionDetail(mission)}
                    >
                      <Eye className="h-4 w-4 mr-1" />
                      Voir détails
                    </Button>
                    <Link href="/auth" className="w-full sm:w-auto">
                      <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white w-full">
                        Postuler maintenant
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mb-8 sm:mb-12">
          <Button
            variant="outline"
            size="lg"
            className="px-6 sm:px-8 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 hover:border-blue-700 bg-transparent w-full sm:w-auto"
          >
            Voir plus de missions
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>

        {/* CTA Section */}
        <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-0 shadow-lg">
          <CardContent className="p-6 sm:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Vous cherchez des talents pour votre projet ?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Publiez votre mission gratuitement et recevez des propositions de freelances qualifiés en quelques heures
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/auth" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 sm:px-8 py-3 w-full"
                >
                  Publier une mission
                </Button>
              </Link>
              <Link href="/freelances/public" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  className="px-6 sm:px-8 py-3 border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent w-full"
                >
                  Parcourir les freelances
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Mobile-Optimized Mission Detail Sheet */}
      <Sheet open={isDetailOpen} onOpenChange={setIsDetailOpen}>
        <SheetContent side="right" className="w-full sm:w-[600px] lg:w-[800px] p-0">
          {selectedMission && (
            <div className="h-full flex flex-col">
              <SheetHeader className="p-4 sm:p-6 border-b bg-white sticky top-0 z-10">
                <div className="flex items-start space-x-4">
                  <Avatar className="h-12 w-12 sm:h-16 sm:w-16 flex-shrink-0">
                    <AvatarImage src={selectedMission.companyLogo || "/placeholder.svg"} />
                    <AvatarFallback className="bg-blue-100 text-blue-600">
                      {selectedMission.company
                        .split(" ")
                        .map((n: string) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <SheetTitle className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 line-clamp-2">
                      {selectedMission.title}
                    </SheetTitle>
                    <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-4 mb-2">
                      <div className="flex items-center">
                        <Building className="h-4 w-4 mr-1" />
                        <span className="font-medium text-sm sm:text-base">{selectedMission.company}</span>
                        {selectedMission.isVerified && <CheckCircle className="h-4 w-4 text-green-500 ml-1" />}
                      </div>
                      <div className="flex items-center text-sm sm:text-base">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>{selectedMission.location}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-600">
                      <span>Publié {selectedMission.postedDate}</span>
                      <span>•</span>
                      <span>{selectedMission.applicants} candidatures</span>
                      <span>•</span>
                      <span>Échéance: {selectedMission.deadline}</span>
                    </div>
                  </div>
                </div>
              </SheetHeader>

              <ScrollArea className="flex-1">
                <div className="p-4 sm:p-6">
                  <Tabs defaultValue="overview" className="w-full">
                    <TabsList className="grid w-full grid-cols-4 mb-6 h-auto">
                      <TabsTrigger value="overview" className="text-xs sm:text-sm py-2 px-2 sm:px-4">
                        Aperçu
                      </TabsTrigger>
                      <TabsTrigger value="requirements" className="text-xs sm:text-sm py-2 px-2 sm:px-4">
                        Exigences
                      </TabsTrigger>
                      <TabsTrigger value="company" className="text-xs sm:text-sm py-2 px-2 sm:px-4">
                        Entreprise
                      </TabsTrigger>
                      <TabsTrigger value="apply" className="text-xs sm:text-sm py-2 px-2 sm:px-4">
                        Postuler
                      </TabsTrigger>
                    </TabsList>

                    <TabsContent value="overview" className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold mb-3">Description de la mission</h3>
                        <p className="text-gray-600 mb-4 text-sm sm:text-base">{selectedMission.description}</p>
                      </div>

                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div>
                          <h3 className="text-lg font-semibold mb-3">Informations clés</h3>
                          <div className="space-y-3 text-sm">
                            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                              <span className="text-gray-600">Budget:</span>
                              <span className="font-medium text-blue-600">{selectedMission.budget}</span>
                            </div>
                            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                              <span className="text-gray-600">Durée:</span>
                              <span className="font-medium">{selectedMission.duration}</span>
                            </div>
                            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                              <span className="text-gray-600">Localisation:</span>
                              <span className="font-medium">{selectedMission.location}</span>
                            </div>
                            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                              <span className="text-gray-600">Catégorie:</span>
                              <span className="font-medium">{selectedMission.category}</span>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold mb-3">Avantages</h3>
                          <ul className="space-y-2">
                            {selectedMission.benefits.map((benefit: string, index: number) => (
                              <li key={index} className="flex items-start text-sm">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                <span>{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold mb-3">Compétences requises</h3>
                        <div className="flex flex-wrap gap-2">
                          {selectedMission.skills.map((skill: string, index: number) => (
                            <Badge key={index} variant="outline" className="border-blue-200 text-blue-700 text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="requirements" className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold mb-4">Exigences du poste</h3>
                        <ul className="space-y-3">
                          {selectedMission.requirements.map((req: string, index: number) => (
                            <li key={index} className="flex items-start p-3 bg-gray-50 rounded-lg">
                              <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700 text-sm sm:text-base">{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold mb-4">Responsabilités</h3>
                        <ul className="space-y-3">
                          {selectedMission.responsibilities.map((resp: string, index: number) => (
                            <li key={index} className="flex items-start p-3 bg-blue-50 rounded-lg">
                              <ArrowRight className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700 text-sm sm:text-base">{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </TabsContent>

                    <TabsContent value="company" className="space-y-6">
                      <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                        <Avatar className="h-16 w-16 sm:h-20 sm:w-20">
                          <AvatarImage src={selectedMission.companyLogo || "/placeholder.svg"} />
                          <AvatarFallback className="bg-blue-100 text-blue-600 text-lg">
                            {selectedMission.companyInfo.name
                              .split(" ")
                              .map((n: string) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold">{selectedMission.companyInfo.name}</h3>
                          <p className="text-gray-600 mb-2">{selectedMission.companyInfo.industry}</p>
                          <div className="space-y-1 text-sm text-gray-600">
                            <div className="flex items-center">
                              <Users className="h-4 w-4 mr-2" />
                              {selectedMission.companyInfo.size}
                            </div>
                            <div className="flex items-center">
                              <MapPin className="h-4 w-4 mr-2" />
                              {selectedMission.companyInfo.location}
                            </div>
                            <div className="flex items-center">
                              <Globe className="h-4 w-4 mr-2" />
                              {selectedMission.companyInfo.website}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">À propos de l'entreprise</h4>
                        <p className="text-gray-600 text-sm sm:text-base">{selectedMission.companyInfo.description}</p>
                      </div>
                    </TabsContent>

                    <TabsContent value="apply" className="space-y-6">
                      <div className="bg-blue-50 p-4 sm:p-6 rounded-lg">
                        <h3 className="text-lg font-semibold mb-4">Postuler à cette mission</h3>
                        <p className="text-gray-600 mb-6 text-sm sm:text-base">
                          Pour postuler à cette mission, vous devez créer un compte freelance sur FORCA. Une fois
                          inscrit, vous pourrez soumettre votre candidature avec votre portfolio et une proposition
                          personnalisée.
                        </p>
                        <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                          <Link href="/auth" className="flex-1">
                            <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                              S'inscrire comme freelance
                            </Button>
                          </Link>
                          <Link href="/auth">
                            <Button
                              variant="outline"
                              className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent w-full sm:w-auto"
                            >
                              Se connecter
                            </Button>
                          </Link>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3">Conseils pour votre candidature</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            Personnalisez votre proposition selon les besoins du client
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            Mettez en avant votre expérience pertinente
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            Incluez des exemples de travaux similaires
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            Proposez un planning réaliste
                          </li>
                        </ul>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
              </ScrollArea>

              {/* Sticky Footer */}
              <div className="p-4 sm:p-6 border-t bg-white">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-center sm:text-left">
                    <div className="text-2xl font-bold text-blue-600">{selectedMission.budget}</div>
                    <p className="text-sm text-gray-600">
                      {selectedMission.duration} • {selectedMission.applicants} candidatures
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3 w-full sm:w-auto">
                    <Button
                      variant="outline"
                      className="border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent w-full sm:w-auto"
                      onClick={() => setIsDetailOpen(false)}
                    >
                      Fermer
                    </Button>
                    <Link href="/auth" className="w-full sm:w-auto">
                      <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white w-full">
                        Postuler maintenant
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </SheetContent>
      </Sheet>
    </PublicLayout>
  )
}
