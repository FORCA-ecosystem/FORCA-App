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
import { Progress } from "@/components/ui/progress"
import {
  Search,
  Star,
  Filter,
  BookOpen,
  Users,
  Clock,
  Award,
  Play,
  Globe,
  Video,
  FileText,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import Link from "next/link"

export default function PublicFormationsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedLevel, setSelectedLevel] = useState("all")
  const [selectedPrice, setSelectedPrice] = useState("all")
  const [selectedFormation, setSelectedFormation] = useState<any>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [sortBy, setSortBy] = useState("popular")

  const formations = [
    {
      id: 1,
      title: "Maîtriser React et Next.js - De débutant à expert",
      description:
        "Formation complète pour apprendre React et Next.js avec des projets pratiques et des cas d'usage réels. Vous apprendrez à créer des applications web modernes, performantes et scalables.",
      instructor: "Marie Dupont",
      instructorAvatar: "/placeholder-user.jpg",
      instructorRating: 4.9,
      instructorBio:
        "Développeuse Full-Stack avec 8 ans d'expérience, spécialisée en React et Node.js. Formatrice certifiée avec plus de 5000 étudiants formés.",
      category: "Développement",
      level: "Intermédiaire",
      duration: "12 semaines",
      totalHours: "45h",
      lessons: 45,
      students: 1247,
      rating: 4.8,
      reviews: [
        {
          student: "Ahmed K.",
          rating: 5,
          comment: "Excellente formation ! Très bien structurée et les projets pratiques sont parfaits.",
          date: "Il y a 2 jours",
        },
        {
          student: "Sophie M.",
          rating: 5,
          comment: "Marie explique très bien, j'ai enfin compris React. Je recommande vivement !",
          date: "Il y a 1 semaine",
        },
      ],
      price: "149€",
      originalPrice: "199€",
      isFree: false,
      isPopular: true,
      thumbnail: "/placeholder.svg?height=200&width=300&text=React+Course",
      skills: ["React", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS", "API Integration", "Deployment"],
      certificate: true,
      language: "Français",
      lastUpdated: "Décembre 2024",
      completionRate: 89,
      requirements: ["Connaissances de base en HTML/CSS", "Notions de JavaScript", "Motivation à apprendre"],
      whatYouLearn: [
        "Maîtriser React et ses concepts avancés",
        "Créer des applications avec Next.js",
        "Gérer l'état avec Redux et Context API",
        "Intégrer des APIs REST et GraphQL",
        "Déployer sur Vercel et Netlify",
      ],
      curriculum: [
        { title: "Introduction à React", lessons: 8, duration: "3h" },
        { title: "Composants et Props", lessons: 6, duration: "2.5h" },
        { title: "State et Hooks", lessons: 10, duration: "4h" },
        { title: "Next.js Fundamentals", lessons: 8, duration: "3.5h" },
        { title: "Routing et Navigation", lessons: 6, duration: "2h" },
        { title: "API et Data Fetching", lessons: 7, duration: "3h" },
      ],
    },
    {
      id: 2,
      title: "Design System et UI/UX avec Figma",
      description:
        "Apprenez à créer des design systems cohérents et des interfaces utilisateur modernes avec Figma. Formation pratique avec de vrais projets.",
      instructor: "Ahmed Ben Ali",
      instructorAvatar: "/placeholder-user.jpg",
      instructorRating: 4.8,
      instructorBio:
        "Designer UI/UX senior avec 6 ans d'expérience. Expert Figma et créateur de design systems pour des startups et grandes entreprises.",
      category: "Design",
      level: "Débutant",
      duration: "8 semaines",
      totalHours: "32h",
      lessons: 32,
      students: 892,
      rating: 4.7,
      reviews: [
        {
          student: "Fatou D.",
          rating: 5,
          comment: "Formation très complète, j'ai appris énormément sur les design systems.",
          date: "Il y a 3 jours",
        },
        {
          student: "Jean P.",
          rating: 4,
          comment: "Bon contenu mais j'aurais aimé plus d'exercices pratiques.",
          date: "Il y a 5 jours",
        },
      ],
      price: "99€",
      originalPrice: "129€",
      isFree: false,
      isPopular: false,
      thumbnail: "/placeholder.svg?height=200&width=300&text=Figma+Design",
      skills: ["Figma", "UI/UX", "Design System", "Prototyping", "User Research", "Wireframing"],
      certificate: true,
      language: "Français",
      lastUpdated: "Novembre 2024",
      completionRate: 92,
      requirements: ["Aucune expérience requise", "Ordinateur avec Figma installé", "Créativité et motivation"],
      whatYouLearn: [
        "Maîtriser Figma de A à Z",
        "Créer des design systems scalables",
        "Concevoir des interfaces modernes",
        "Prototyper des interactions",
        "Conduire des tests utilisateurs",
      ],
      curriculum: [
        { title: "Bases de Figma", lessons: 6, duration: "2h" },
        { title: "Design System Theory", lessons: 4, duration: "1.5h" },
        { title: "Création de composants", lessons: 8, duration: "3h" },
        { title: "Prototypage avancé", lessons: 6, duration: "2.5h" },
        { title: "Collaboration et handoff", lessons: 4, duration: "1.5h" },
        { title: "Projet final", lessons: 4, duration: "2h" },
      ],
    },
    {
      id: 3,
      title: "Marketing Digital pour Entrepreneurs",
      description:
        "Stratégies complètes de marketing digital : SEO, réseaux sociaux, publicité payante et analytics. Formation gratuite pour démocratiser le marketing digital.",
      instructor: "Fatou Diallo",
      instructorAvatar: "/placeholder-user.jpg",
      instructorRating: 4.9,
      instructorBio:
        "Consultante en marketing digital avec 7 ans d'expérience. Spécialisée en growth hacking et acquisition client pour startups africaines.",
      category: "Marketing",
      level: "Débutant",
      duration: "10 semaines",
      totalHours: "38h",
      lessons: 38,
      students: 1456,
      rating: 4.9,
      reviews: [
        {
          student: "Mamadou S.",
          rating: 5,
          comment: "Formation exceptionnelle et gratuite ! J'ai doublé mon CA grâce aux techniques apprises.",
          date: "Il y a 1 jour",
        },
        {
          student: "Aisha T.",
          rating: 5,
          comment: "Fatou explique très clairement, même pour les débutants. Merci pour cette formation gratuite !",
          date: "Il y a 4 jours",
        },
      ],
      price: "Gratuit",
      originalPrice: null,
      isFree: true,
      isPopular: true,
      thumbnail: "/placeholder.svg?height=200&width=300&text=Digital+Marketing",
      skills: ["SEO", "Google Ads", "Facebook Ads", "Analytics", "Content Marketing", "Email Marketing"],
      certificate: true,
      language: "Français",
      lastUpdated: "Janvier 2025",
      completionRate: 85,
      requirements: ["Aucune expérience requise", "Accès internet", "Motivation entrepreneuriale"],
      whatYouLearn: [
        "Créer une stratégie marketing complète",
        "Maîtriser le SEO et le référencement",
        "Lancer des campagnes publicitaires rentables",
        "Analyser et optimiser les performances",
        "Automatiser le marketing avec des outils",
      ],
      curriculum: [
        { title: "Fondamentaux du marketing digital", lessons: 6, duration: "2.5h" },
        { title: "SEO et référencement naturel", lessons: 8, duration: "3.5h" },
        { title: "Publicité payante (Google/Facebook)", lessons: 10, duration: "4h" },
        { title: "Content marketing et réseaux sociaux", lessons: 8, duration: "3h" },
        { title: "Email marketing et automation", lessons: 6, duration: "2.5h" },
      ],
    },
    {
      id: 4,
      title: "Développement Mobile avec React Native",
      description:
        "Créez des applications mobiles cross-platform performantes avec React Native et Expo. Formation avancée avec projets réels.",
      instructor: "Kofi Asante",
      instructorAvatar: "/placeholder-user.jpg",
      instructorRating: 4.8,
      instructorBio:
        "Développeur mobile senior avec 5 ans d'expérience en React Native. Créateur de plusieurs apps avec millions de téléchargements.",
      category: "Développement",
      level: "Avancé",
      duration: "14 semaines",
      totalHours: "52h",
      lessons: 52,
      students: 634,
      rating: 4.8,
      reviews: [
        {
          student: "Marie L.",
          rating: 5,
          comment: "Formation très technique et complète. Kofi maîtrise parfaitement son sujet.",
          date: "Il y a 1 semaine",
        },
        {
          student: "David K.",
          rating: 4,
          comment: "Bon contenu mais assez dense. Il faut avoir de bonnes bases en React.",
          date: "Il y a 2 semaines",
        },
      ],
      price: "199€",
      originalPrice: "249€",
      isFree: false,
      isPopular: false,
      thumbnail: "/placeholder.svg?height=200&width=300&text=React+Native",
      skills: ["React Native", "Expo", "Firebase", "Redux", "Navigation", "Push Notifications"],
      certificate: true,
      language: "Français",
      lastUpdated: "Décembre 2024",
      completionRate: 87,
      requirements: ["Bonnes connaissances en React", "JavaScript ES6+", "Bases de développement mobile"],
      whatYouLearn: [
        "Maîtriser React Native et Expo",
        "Créer des apps iOS et Android",
        "Intégrer Firebase et APIs",
        "Gérer la navigation complexe",
        "Publier sur les stores",
      ],
      curriculum: [
        { title: "Setup et premiers pas", lessons: 6, duration: "2h" },
        { title: "Composants et styling", lessons: 8, duration: "3h" },
        { title: "Navigation et routing", lessons: 8, duration: "3.5h" },
        { title: "State management avec Redux", lessons: 10, duration: "4h" },
        { title: "APIs et données", lessons: 8, duration: "3h" },
        { title: "Publication et déploiement", lessons: 6, duration: "2.5h" },
      ],
    },
    {
      id: 5,
      title: "Rédaction Web et SEO - Techniques avancées",
      description:
        "Maîtrisez l'art de la rédaction web optimisée SEO et créez du contenu qui convertit. Formation pratique avec études de cas réels.",
      instructor: "Jean-Claude Mbeki",
      instructorAvatar: "/placeholder-user.jpg",
      instructorRating: 4.7,
      instructorBio:
        "Rédacteur web et consultant SEO avec 4 ans d'expérience. Spécialisé en content marketing pour entreprises B2B et e-commerce.",
      category: "Rédaction",
      level: "Intermédiaire",
      duration: "6 semaines",
      totalHours: "24h",
      lessons: 24,
      students: 743,
      rating: 4.6,
      reviews: [
        {
          student: "Aminata B.",
          rating: 5,
          comment: "Très pratique ! J'ai immédiatement appliqué les techniques sur mon blog.",
          date: "Il y a 3 jours",
        },
        {
          student: "Paul D.",
          rating: 4,
          comment: "Bonne formation, Jean-Claude donne de bons conseils pratiques.",
          date: "Il y a 1 semaine",
        },
      ],
      price: "79€",
      originalPrice: "99€",
      isFree: false,
      isPopular: false,
      thumbnail: "/placeholder.svg?height=200&width=300&text=SEO+Writing",
      skills: ["SEO", "Content Writing", "WordPress", "Analytics", "Copywriting", "Keyword Research"],
      certificate: true,
      language: "Français",
      lastUpdated: "Octobre 2024",
      completionRate: 91,
      requirements: ["Bases de la rédaction", "Notions de marketing", "Accès à WordPress (optionnel)"],
      whatYouLearn: [
        "Rédiger du contenu optimisé SEO",
        "Rechercher et utiliser les mots-clés",
        "Créer des contenus qui convertissent",
        "Analyser les performances",
        "Automatiser la création de contenu",
      ],
      curriculum: [
        { title: "Fondamentaux du SEO", lessons: 4, duration: "1.5h" },
        { title: "Recherche de mots-clés", lessons: 4, duration: "2h" },
        { title: "Rédaction optimisée", lessons: 6, duration: "3h" },
        { title: "Content marketing", lessons: 4, duration: "2h" },
        { title: "Analytics et optimisation", lessons: 4, duration: "1.5h" },
        { title: "Projets pratiques", lessons: 2, duration: "1h" },
      ],
    },
    {
      id: 6,
      title: "Introduction à l'Intelligence Artificielle",
      description:
        "Découvrez les fondamentaux de l'IA, le machine learning et les applications pratiques. Formation gratuite pour démocratiser l'IA.",
      instructor: "Dr. Amina Hassan",
      instructorAvatar: "/placeholder-user.jpg",
      instructorRating: 4.9,
      instructorBio:
        "Docteure en IA avec 10 ans de recherche. Professeure universitaire et consultante en IA pour entreprises africaines.",
      category: "Technologie",
      level: "Débutant",
      duration: "8 semaines",
      totalHours: "30h",
      lessons: 30,
      students: 2134,
      rating: 4.8,
      reviews: [
        {
          student: "Omar F.",
          rating: 5,
          comment: "Formation exceptionnelle ! Dr. Hassan rend l'IA accessible à tous.",
          date: "Il y a 2 jours",
        },
        {
          student: "Khadija M.",
          rating: 5,
          comment: "Enfin une formation IA en français et gratuite ! Merci beaucoup.",
          date: "Il y a 5 jours",
        },
      ],
      price: "Gratuit",
      originalPrice: null,
      isFree: true,
      isPopular: true,
      thumbnail: "/placeholder.svg?height=200&width=300&text=AI+Course",
      skills: ["Python", "Machine Learning", "TensorFlow", "Data Science", "AI Ethics", "Deep Learning"],
      certificate: true,
      language: "Français",
      lastUpdated: "Janvier 2025",
      completionRate: 78,
      requirements: ["Bases en mathématiques", "Logique de programmation", "Curiosité scientifique"],
      whatYouLearn: [
        "Comprendre les concepts de l'IA",
        "Programmer en Python pour l'IA",
        "Créer des modèles de machine learning",
        "Utiliser TensorFlow et Keras",
        "Appliquer l'IA à des cas concrets",
      ],
      curriculum: [
        { title: "Introduction à l'IA", lessons: 4, duration: "2h" },
        { title: "Python pour l'IA", lessons: 6, duration: "3h" },
        { title: "Machine Learning basics", lessons: 8, duration: "4h" },
        { title: "Deep Learning", lessons: 6, duration: "3h" },
        { title: "Applications pratiques", lessons: 4, duration: "2h" },
        { title: "Éthique et futur de l'IA", lessons: 2, duration: "1h" },
      ],
    },
    // Ajouter plus de formations pour la pagination
    ...Array.from({ length: 20 }, (_, i) => ({
      id: i + 7,
      title: `Formation ${i + 7} - Spécialisation professionnelle`,
      description: `Description détaillée de la formation ${i + 7} avec contenu riche et informatif pour les apprenants.`,
      instructor: `Expert ${i + 7}`,
      instructorAvatar: "/placeholder-user.jpg",
      instructorRating: 4.5 + Math.random() * 0.4,
      instructorBio: `Biographie professionnelle de l'expert ${i + 7} avec son parcours et ses réalisations.`,
      category: ["Développement", "Design", "Marketing", "Rédaction", "Technologie"][i % 5],
      level: ["Débutant", "Intermédiaire", "Avancé"][i % 3],
      duration: `${4 + (i % 8)} semaines`,
      totalHours: `${20 + (i % 30)}h`,
      lessons: 20 + (i % 30),
      students: 100 + i * 50,
      rating: 4.0 + Math.random() * 1.0,
      reviews: [
        {
          student: `Étudiant ${i}`,
          rating: 5,
          comment: `Excellente formation ${i + 7} ! Très enrichissante.`,
          date: "Il y a quelques jours",
        },
      ],
      price: i % 3 === 0 ? "Gratuit" : `${50 + i * 10}€`,
      originalPrice: i % 3 === 0 ? null : `${70 + i * 10}€`,
      isFree: i % 3 === 0,
      isPopular: i % 5 === 0,
      thumbnail: `/placeholder.svg?height=200&width=300&text=Formation+${i + 7}`,
      skills: [`Compétence ${i}A`, `Compétence ${i}B`, `Compétence ${i}C`],
      certificate: true,
      language: "Français",
      lastUpdated: "Récemment",
      completionRate: 70 + (i % 30),
      requirements: [`Prérequis ${i}A`, `Prérequis ${i}B`],
      whatYouLearn: [`Objectif ${i}A`, `Objectif ${i}B`, `Objectif ${i}C`],
      curriculum: [
        { title: `Module ${i}A`, lessons: 5, duration: "2h" },
        { title: `Module ${i}B`, lessons: 7, duration: "3h" },
      ],
    })),
  ]

  const stats = [
    { label: "Formations disponibles", value: "450+", icon: BookOpen, color: "text-blue-600", bg: "bg-blue-100" },
    { label: "Étudiants actifs", value: "25,000+", icon: Users, color: "text-green-600", bg: "bg-green-100" },
    { label: "Heures de contenu", value: "1,200+", icon: Clock, color: "text-purple-600", bg: "bg-purple-100" },
    { label: "Certificats délivrés", value: "18,500+", icon: Award, color: "text-yellow-600", bg: "bg-yellow-100" },
  ]

  const categories = [
    "Développement",
    "Design",
    "Marketing",
    "Rédaction",
    "Technologie",
    "Business",
    "Langues",
    "Créatif",
  ]

  // Filtrage et tri
  const filteredFormations = formations
    .filter((formation) => {
      const matchesSearch =
        formation.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        formation.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        formation.skills.some((skill) => skill.toLowerCase().includes(searchTerm.toLowerCase()))

      const matchesCategory = selectedCategory === "all" || formation.category === selectedCategory
      const matchesLevel = selectedLevel === "all" || formation.level === selectedLevel
      const matchesPrice =
        selectedPrice === "all" ||
        (selectedPrice === "free" && formation.isFree) ||
        (selectedPrice === "paid" && !formation.isFree)

      return matchesSearch && matchesCategory && matchesLevel && matchesPrice
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "rating":
          return b.rating - a.rating
        case "recent":
          return b.id - a.id
        case "students":
          return b.students - a.students
        default: // popular
          return (b.isPopular ? 1 : 0) - (a.isPopular ? 1 : 0)
      }
    })

  // Pagination
  const itemsPerPage = 9
  const totalPages = Math.ceil(filteredFormations.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedFormations = filteredFormations.slice(startIndex, startIndex + itemsPerPage)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <PublicLayout>
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
          {/* Hero Section - Mobile Optimized */}
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4">
              Formations professionnelles de{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                qualité
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
              Développez vos compétences avec des formations créées par des experts africains
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
                  <div className="text-xl sm:text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Filters - Mobile Optimized */}
          <Card className="mb-6 sm:mb-8 shadow-sm border-gray-200">
            <CardHeader className="bg-gray-50 pb-3 sm:pb-4">
              <CardTitle className="flex items-center text-gray-900 text-lg sm:text-xl">
                <Filter className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                Filtres de recherche
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 sm:p-6">
              <div className="space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Rechercher une formation..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 border-gray-300 focus:border-blue-500 focus:ring-blue-500 h-11"
                  />
                </div>

                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 h-11">
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

                <Select value={selectedLevel} onValueChange={setSelectedLevel}>
                  <SelectTrigger className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 h-11">
                    <SelectValue placeholder="Niveau" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Tous niveaux</SelectItem>
                    <SelectItem value="Débutant">Débutant</SelectItem>
                    <SelectItem value="Intermédiaire">Intermédiaire</SelectItem>
                    <SelectItem value="Avancé">Avancé</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={selectedPrice} onValueChange={setSelectedPrice}>
                  <SelectTrigger className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 h-11">
                    <SelectValue placeholder="Prix" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Tous les prix</SelectItem>
                    <SelectItem value="free">Gratuit</SelectItem>
                    <SelectItem value="paid">Payant</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Results Header - Mobile Optimized */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 space-y-4 sm:space-y-0">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              {filteredFormations.length} formation{filteredFormations.length > 1 ? "s" : ""}
            </h2>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full sm:w-48 border-gray-300">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popular">Plus populaires</SelectItem>
                <SelectItem value="rating">Mieux notées</SelectItem>
                <SelectItem value="recent">Plus récentes</SelectItem>
                <SelectItem value="students">Plus d'étudiants</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Formations Grid - Mobile Optimized */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
            {paginatedFormations.map((formation) => (
              <Card key={formation.id} className="hover:shadow-lg transition-shadow overflow-hidden border-gray-200">
                <div className="relative">
                  <img
                    src={formation.thumbnail || "/placeholder.svg"}
                    alt={formation.title}
                    className="w-full h-40 sm:h-48 object-cover"
                  />
                  {formation.isPopular && (
                    <Badge className="absolute top-2 left-2 bg-orange-500 text-white text-xs">Populaire</Badge>
                  )}
                  {formation.isFree && (
                    <Badge className="absolute top-2 right-2 bg-green-500 text-white text-xs">Gratuit</Badge>
                  )}
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-xs">
                    {formation.lessons} leçons
                  </div>
                </div>

                <CardContent className="p-4 sm:p-6">
                  <div className="mb-3">
                    <Badge variant="secondary" className="text-xs mb-2 bg-blue-50 text-blue-700 border-blue-200">
                      {formation.category}
                    </Badge>
                    <h3 className="font-semibold text-gray-900 line-clamp-2 mb-2 text-sm sm:text-base">
                      {formation.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 line-clamp-2 mb-3">{formation.description}</p>
                  </div>

                  <div className="flex items-center space-x-2 mb-3">
                    <Avatar className="h-6 w-6 sm:h-8 sm:w-8">
                      <AvatarImage src={formation.instructorAvatar || "/placeholder.svg"} alt={formation.instructor} />
                      <AvatarFallback className="bg-blue-100 text-blue-600 text-xs">
                        {formation.instructor
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-xs sm:text-sm font-medium">{formation.instructor}</p>
                      <div className="flex items-center">
                        <Star className="h-3 w-3 text-yellow-400 mr-1" />
                        <span className="text-xs text-gray-600">
                          {formation.rating} ({formation.reviews.length})
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-3">
                    {formation.skills.slice(0, 3).map((skill, index) => (
                      <Badge key={index} variant="outline" className="text-xs border-gray-300 text-gray-700">
                        {skill}
                      </Badge>
                    ))}
                    {formation.skills.length > 3 && (
                      <Badge variant="outline" className="text-xs border-gray-300 text-gray-700">
                        +{formation.skills.length - 3}
                      </Badge>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-2 sm:gap-4 text-xs text-gray-600 mb-4">
                    <div className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      <span className="truncate">{formation.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-3 w-3 mr-1" />
                      <span className="truncate">{formation.students.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="h-3 w-3 mr-1" />
                      <span className="truncate">{formation.rating}</span>
                    </div>
                    <div className="flex items-center">
                      <Globe className="h-3 w-3 mr-1" />
                      <span className="truncate">{formation.language}</span>
                    </div>
                  </div>

                  {formation.certificate && (
                    <div className="flex items-center text-xs text-green-600 mb-3">
                      <Award className="h-3 w-3 mr-1" />
                      Certificat inclus
                    </div>
                  )}

                  <div className="flex items-center justify-between mb-4">
                    <div>
                      {formation.isFree ? (
                        <span className="text-base sm:text-lg font-bold text-green-600">Gratuit</span>
                      ) : (
                        <div className="flex items-center space-x-2">
                          <span className="text-base sm:text-lg font-bold text-blue-600">{formation.price}</span>
                          {formation.originalPrice && (
                            <span className="text-xs sm:text-sm text-gray-500 line-through">
                              {formation.originalPrice}
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                    <Badge
                      variant="outline"
                      className={`text-xs ${
                        formation.level === "Débutant"
                          ? "border-green-300 text-green-700 bg-green-50"
                          : formation.level === "Intermédiaire"
                            ? "border-yellow-300 text-yellow-700 bg-yellow-50"
                            : "border-red-300 text-red-700 bg-red-50"
                      }`}
                    >
                      {formation.level}
                    </Badge>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between text-xs text-gray-600">
                      <span>Taux de completion</span>
                      <span>{formation.completionRate}%</span>
                    </div>
                    <Progress value={formation.completionRate} className="h-1" />
                  </div>

                  <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent text-xs sm:text-sm"
                          onClick={() => setSelectedFormation(formation)}
                        >
                          <Play className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                          Aperçu
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto mx-4">
                        {selectedFormation && (
                          <div>
                            <DialogHeader>
                              <DialogTitle className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4">
                                <img
                                  src={selectedFormation.thumbnail || "/placeholder.svg"}
                                  alt={selectedFormation.title}
                                  className="w-full sm:w-24 h-32 sm:h-16 object-cover rounded"
                                />
                                <div className="flex-1">
                                  <h2 className="text-xl sm:text-2xl font-bold mb-2">{selectedFormation.title}</h2>
                                  <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 mb-2">
                                    <div className="flex items-center">
                                      <Avatar className="h-6 w-6 sm:h-8 sm:w-8 mr-2">
                                        <AvatarImage src={selectedFormation.instructorAvatar || "/placeholder.svg"} />
                                        <AvatarFallback className="bg-blue-100 text-blue-600 text-xs">
                                          {selectedFormation.instructor
                                            .split(" ")
                                            .map((n: string) => n[0])
                                            .join("")}
                                        </AvatarFallback>
                                      </Avatar>
                                      <span className="font-medium text-sm sm:text-base">
                                        {selectedFormation.instructor}
                                      </span>
                                    </div>
                                    <div className="flex items-center">
                                      <Star className="h-4 w-4 text-yellow-400 mr-1" />
                                      <span className="text-sm sm:text-base">{selectedFormation.rating}</span>
                                      <span className="text-gray-500 ml-1 text-sm">
                                        ({selectedFormation.reviews.length} avis)
                                      </span>
                                    </div>
                                  </div>
                                  <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-600">
                                    <span>{selectedFormation.students.toLocaleString()} étudiants</span>
                                    <span>{selectedFormation.totalHours}</span>
                                    <span>{selectedFormation.lessons} leçons</span>
                                    <Badge className="bg-green-100 text-green-800 text-xs">
                                      {selectedFormation.level}
                                    </Badge>
                                  </div>
                                </div>
                              </DialogTitle>
                            </DialogHeader>

                            <Tabs defaultValue="overview" className="mt-6">
                              <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4">
                                <TabsTrigger value="overview" className="text-xs sm:text-sm">
                                  Aperçu
                                </TabsTrigger>
                                <TabsTrigger value="curriculum" className="text-xs sm:text-sm">
                                  Programme
                                </TabsTrigger>
                                <TabsTrigger value="instructor" className="text-xs sm:text-sm">
                                  Formateur
                                </TabsTrigger>
                                <TabsTrigger value="reviews" className="text-xs sm:text-sm">
                                  Avis
                                </TabsTrigger>
                              </TabsList>

                              <TabsContent value="overview" className="space-y-6">
                                <div>
                                  <h3 className="text-lg font-semibold mb-3">Description</h3>
                                  <p className="text-gray-600 mb-4 text-sm sm:text-base">
                                    {selectedFormation.description}
                                  </p>
                                </div>

                                <div>
                                  <h3 className="text-lg font-semibold mb-3">Ce que vous apprendrez</h3>
                                  <ul className="space-y-2">
                                    {selectedFormation.whatYouLearn.map((item: string, index: number) => (
                                      <li key={index} className="flex items-start">
                                        <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                        <span className="text-gray-700 text-sm sm:text-base">{item}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>

                                <div>
                                  <h3 className="text-lg font-semibold mb-3">Prérequis</h3>
                                  <ul className="space-y-1">
                                    {selectedFormation.requirements.map((req: string, index: number) => (
                                      <li key={index} className="flex items-center text-gray-600 text-sm sm:text-base">
                                        <div className="w-2 h-2 bg-gray-400 rounded-full mr-2 flex-shrink-0"></div>
                                        {req}
                                      </li>
                                    ))}
                                  </ul>
                                </div>

                                <div>
                                  <h3 className="text-lg font-semibold mb-3">Compétences acquises</h3>
                                  <div className="flex flex-wrap gap-2">
                                    {selectedFormation.skills.map((skill: string, index: number) => (
                                      <Badge key={index} variant="outline" className="border-blue-200 text-blue-700">
                                        {skill}
                                      </Badge>
                                    ))}
                                  </div>
                                </div>
                              </TabsContent>

                              <TabsContent value="curriculum" className="space-y-4">
                                <div>
                                  <h3 className="text-lg font-semibold mb-4">Programme de la formation</h3>
                                  <div className="space-y-3">
                                    {selectedFormation.curriculum.map((module: any, index: number) => (
                                      <Card key={index} className="border-gray-200">
                                        <CardContent className="p-4">
                                          <div className="flex items-center justify-between">
                                            <div>
                                              <h4 className="font-medium text-sm sm:text-base">{module.title}</h4>
                                              <p className="text-xs sm:text-sm text-gray-600">
                                                {module.lessons} leçons • {module.duration}
                                              </p>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                              <Video className="h-4 w-4 text-gray-400" />
                                              <FileText className="h-4 w-4 text-gray-400" />
                                            </div>
                                          </div>
                                        </CardContent>
                                      </Card>
                                    ))}
                                  </div>
                                </div>
                              </TabsContent>

                              <TabsContent value="instructor" className="space-y-6">
                                <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4">
                                  <Avatar className="h-16 w-16 sm:h-20 sm:w-20 mx-auto sm:mx-0">
                                    <AvatarImage src={selectedFormation.instructorAvatar || "/placeholder.svg"} />
                                    <AvatarFallback className="bg-blue-100 text-blue-600 text-lg">
                                      {selectedFormation.instructor
                                        .split(" ")
                                        .map((n: string) => n[0])
                                        .join("")}
                                    </AvatarFallback>
                                  </Avatar>
                                  <div className="text-center sm:text-left">
                                    <h3 className="text-lg sm:text-xl font-semibold">{selectedFormation.instructor}</h3>
                                    <div className="flex items-center justify-center sm:justify-start mt-1 mb-3">
                                      <Star className="h-4 w-4 text-yellow-400 mr-1" />
                                      <span className="font-medium">{selectedFormation.instructorRating}</span>
                                      <span className="text-gray-500 ml-1">Note formateur</span>
                                    </div>
                                    <p className="text-gray-600 text-sm sm:text-base">
                                      {selectedFormation.instructorBio}
                                    </p>
                                  </div>
                                </div>
                              </TabsContent>

                              <TabsContent value="reviews" className="space-y-4">
                                <div>
                                  <h3 className="text-lg font-semibold mb-4">Avis des étudiants</h3>
                                  <div className="space-y-4">
                                    {selectedFormation.reviews.map((review: any, index: number) => (
                                      <Card key={index} className="border-gray-200">
                                        <CardContent className="p-4">
                                          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 space-y-2 sm:space-y-0">
                                            <span className="font-medium text-sm sm:text-base">{review.student}</span>
                                            <div className="flex items-center">
                                              {[...Array(review.rating)].map((_, i) => (
                                                <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                                              ))}
                                              <span className="text-xs sm:text-sm text-gray-500 ml-2">
                                                {review.date}
                                              </span>
                                            </div>
                                          </div>
                                          <p className="text-gray-600 text-sm sm:text-base">{review.comment}</p>
                                        </CardContent>
                                      </Card>
                                    ))}
                                  </div>
                                </div>
                              </TabsContent>
                            </Tabs>

                            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                              <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
                                <div className="text-center sm:text-left">
                                  {selectedFormation.isFree ? (
                                    <div className="text-xl sm:text-2xl font-bold text-green-600">Gratuit</div>
                                  ) : (
                                    <div className="flex items-center justify-center sm:justify-start space-x-2">
                                      <span className="text-xl sm:text-2xl font-bold text-blue-600">
                                        {selectedFormation.price}
                                      </span>
                                      {selectedFormation.originalPrice && (
                                        <span className="text-base sm:text-lg text-gray-500 line-through">
                                          {selectedFormation.originalPrice}
                                        </span>
                                      )}
                                    </div>
                                  )}
                                  <p className="text-xs sm:text-sm text-gray-600">
                                    Accès à vie • Certificat inclus • Support formateur
                                  </p>
                                </div>
                                <Link href="/auth">
                                  <Button
                                    size="lg"
                                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 sm:px-8 w-full sm:w-auto"
                                  >
                                    {selectedFormation.isFree ? "Commencer gratuitement" : "S'inscrire maintenant"}
                                  </Button>
                                </Link>
                              </div>
                            </div>
                          </div>
                        )}
                      </DialogContent>
                    </Dialog>

                    <Link href="/auth" className="flex-1">
                      <Button
                        size="sm"
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-xs sm:text-sm"
                      >
                        {formation.isFree ? "Commencer" : "S'inscrire"}
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pagination - Mobile Optimized */}
          {totalPages > 1 && (
            <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0 mb-8">
              <div className="text-sm text-gray-700 text-center sm:text-left">
                Affichage de {startIndex + 1} à {Math.min(startIndex + itemsPerPage, filteredFormations.length)} sur{" "}
                {filteredFormations.length} formations
              </div>

              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage <= 1}
                  className="border-gray-300 text-xs sm:text-sm"
                >
                  <ChevronLeft className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                  <span className="hidden sm:inline">Précédent</span>
                  <span className="sm:hidden">Préc</span>
                </Button>

                <div className="flex items-center space-x-1">
                  {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                    let pageNum
                    if (totalPages <= 5) {
                      pageNum = i + 1
                    } else if (currentPage <= 3) {
                      pageNum = i + 1
                    } else if (currentPage >= totalPages - 2) {
                      pageNum = totalPages - 4 + i
                    } else {
                      pageNum = currentPage - 2 + i
                    }

                    return (
                      <Button
                        key={pageNum}
                        variant={currentPage === pageNum ? "default" : "outline"}
                        size="sm"
                        onClick={() => handlePageChange(pageNum)}
                        className={
                          currentPage === pageNum
                            ? "bg-blue-600 text-white text-xs sm:text-sm"
                            : "border-gray-300 hover:bg-gray-50 text-xs sm:text-sm"
                        }
                      >
                        {pageNum}
                      </Button>
                    )
                  })}
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage >= totalPages}
                  className="border-gray-300 text-xs sm:text-sm"
                >
                  <span className="hidden sm:inline">Suivant</span>
                  <span className="sm:hidden">Suiv</span>
                  <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 ml-1" />
                </Button>
              </div>
            </div>
          )}

          {/* Load More Button - Mobile Alternative */}
          <div className="text-center mb-8 sm:mb-12">
            <Button
              variant="outline"
              size="lg"
              className="px-6 sm:px-8 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 hover:border-blue-700 bg-transparent"
            >
              Voir plus de formations
              <BookOpen className="h-4 w-4 ml-2" />
            </Button>
          </div>

          {/* CTA Section - Mobile Optimized */}
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-0 shadow-lg">
            <CardContent className="p-6 sm:p-12 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Vous êtes expert dans votre domaine ?
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
                Partagez vos connaissances et générez des revenus en créant vos propres formations sur FORCA
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/auth">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 sm:px-8 py-3 w-full sm:w-auto"
                  >
                    Devenir formateur
                  </Button>
                </Link>
                <Link href="/missions/public">
                  <Button
                    variant="outline"
                    size="lg"
                    className="px-6 sm:px-8 py-3 border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent w-full sm:w-auto"
                  >
                    Découvrir les missions
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </PublicLayout>
  )
}
