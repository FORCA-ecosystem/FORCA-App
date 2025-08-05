"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts"
import {
  TrendingUp,
  Users,
  Briefcase,
  DollarSign,
  Star,
  Award,
  BookOpen,
  MessageSquare,
  Target,
  Activity,
  Zap,
  ArrowUp,
  Clock,
  CheckCircle,
} from "lucide-react"
import Link from "next/link"
import { DashboardLayout } from "@/components/dashboard-layout"
import { useAuth } from "@/contexts/auth-context"
import { useRouter } from "next/navigation"

export default function DashboardPage() {
  const { user, isAuthenticated, isLoading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push("/auth")
    }
  }, [isAuthenticated, isLoading, router])

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center">Chargement...</div>
  }

  if (!isAuthenticated || !user) {
    return null
  }

  // Données pour les graphiques
  const revenueData = [
    { month: "Jan", revenue: 2400, missions: 12 },
    { month: "Fév", revenue: 1398, missions: 8 },
    { month: "Mar", revenue: 9800, missions: 24 },
    { month: "Avr", revenue: 3908, missions: 18 },
    { month: "Mai", revenue: 4800, missions: 22 },
    { month: "Juin", revenue: 3800, missions: 20 },
  ]

  const skillsData = [
    { name: "Développement", value: 35, color: "#3B82F6" },
    { name: "Design", value: 25, color: "#8B5CF6" },
    { name: "Marketing", value: 20, color: "#10B981" },
    { name: "Rédaction", value: 20, color: "#F59E0B" },
  ]

  const getDashboardContent = () => {
    switch (user.profile) {
      case "freelance":
        return <FreelanceDashboard revenueData={revenueData} skillsData={skillsData} />
      case "client":
        return <ClientDashboard />
      case "apprenant":
        return <ApprenantDashboard />
      case "admin":
        return <AdminDashboard />
      default:
        return <FreelanceDashboard revenueData={revenueData} skillsData={skillsData} />
    }
  }

  return <DashboardLayout userProfile={user.profile}>{getDashboardContent()}</DashboardLayout>
}

// Dashboard Freelance
function FreelanceDashboard({ revenueData, skillsData }: any) {
  const recentMissions = [
    {
      id: 1,
      title: "Développement d'une app mobile",
      client: "TechCorp",
      status: "En cours",
      progress: 75,
      amount: "2,500€",
      deadline: "15 Jan 2024",
    },
    {
      id: 2,
      title: "Design d'interface utilisateur",
      client: "StartupXYZ",
      status: "En révision",
      progress: 90,
      amount: "1,200€",
      deadline: "20 Jan 2024",
    },
    {
      id: 3,
      title: "Rédaction de contenu web",
      client: "AgenceWeb",
      status: "Terminé",
      progress: 100,
      amount: "800€",
      deadline: "Terminé",
    },
  ]

  const achievements = [
    { icon: Award, title: "Top Rated", description: "Freelance d'élite" },
    { icon: Star, title: "5 étoiles", description: "Note parfaite" },
    { icon: Zap, title: "Réactif", description: "Réponse < 1h" },
    { icon: CheckCircle, title: "Fiable", description: "100% livré" },
  ]

  return (
    <div className="space-y-6">
      {/* Header avec statistiques principales */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Tableau de bord Freelance</h1>
          <p className="text-slate-600">Bienvenue sur votre espace FORCA</p>
        </div>
        <div className="flex space-x-3">
          <Link href="/missions/create">
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              <Target className="h-4 w-4 mr-2" />
              Nouvelle mission
            </Button>
          </Link>
          <Link href="/services/create">
            <Button variant="outline">
              <Briefcase className="h-4 w-4 mr-2" />
              Nouveau service
            </Button>
          </Link>
        </div>
      </div>

      {/* Statistiques principales */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border-0 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Revenus ce mois</p>
                <p className="text-2xl font-bold">3,247€</p>
                <p className="text-xs text-green-600 mt-1 flex items-center">
                  <ArrowUp className="h-3 w-3 mr-1" />
                  +12% vs mois dernier
                </p>
              </div>
              <div className="p-3 rounded-lg bg-blue-50">
                <DollarSign className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Missions actives</p>
                <p className="text-2xl font-bold">8</p>
                <p className="text-xs text-blue-600 mt-1">2 nouvelles cette semaine</p>
              </div>
              <div className="p-3 rounded-lg bg-green-50">
                <Briefcase className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Note moyenne</p>
                <p className="text-2xl font-bold">4.9</p>
                <p className="text-xs text-slate-500 mt-1">Sur 47 évaluations</p>
              </div>
              <div className="p-3 rounded-lg bg-yellow-50">
                <Star className="h-6 w-6 text-yellow-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Taux de réussite</p>
                <p className="text-2xl font-bold">98%</p>
                <p className="text-xs text-green-600 mt-1">32 projets terminés</p>
              </div>
              <div className="p-3 rounded-lg bg-purple-50">
                <TrendingUp className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Graphique des revenus */}
        <Card className="lg:col-span-2 border-0 shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center">
              <TrendingUp className="h-5 w-5 mr-2" />
              Évolution des revenus
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip formatter={(value: any) => [`${value}€`, "Revenus"]} />
                <Line type="monotone" dataKey="revenue" stroke="#3B82F6" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Répartition par compétences */}
        <Card className="border-0 shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Activity className="h-5 w-5 mr-2" />
              Répartition missions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={skillsData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {skillsData.map((entry: any, index: number) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value: any) => [`${value}%`, "Pourcentage"]} />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-4 space-y-2">
              {skillsData.map((skill: any, index: number) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: skill.color }}></div>
                    <span className="text-sm">{skill.name}</span>
                  </div>
                  <span className="text-sm font-medium">{skill.value}%</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Missions récentes */}
        <Card className="lg:col-span-2 border-0 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="flex items-center">
              <Briefcase className="h-5 w-5 mr-2" />
              Missions récentes
            </CardTitle>
            <Link href="/missions">
              <Button variant="outline" size="sm">
                Voir tout
              </Button>
            </Link>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentMissions.map((mission) => (
              <div key={mission.id} className="p-4 border rounded-lg hover:shadow-sm transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="font-semibold">{mission.title}</h4>
                    <p className="text-sm text-slate-600">Client: {mission.client}</p>
                  </div>
                  <Badge
                    variant={mission.status === "Terminé" ? "default" : "secondary"}
                    className={
                      mission.status === "Terminé"
                        ? "bg-green-100 text-green-800"
                        : mission.status === "En cours"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-yellow-100 text-yellow-800"
                    }
                  >
                    {mission.status}
                  </Badge>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Progression</span>
                    <span>{mission.progress}%</span>
                  </div>
                  <Progress value={mission.progress} className="h-2" />
                  <div className="flex items-center justify-between text-sm text-slate-600">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {mission.deadline}
                    </div>
                    <div className="flex items-center">
                      <DollarSign className="h-4 w-4 mr-1" />
                      {mission.amount}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Badges et certifications */}
        <Card className="border-0 shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Award className="h-5 w-5 mr-2" />
              Mes badges
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 p-3 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50"
              >
                <div className="p-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600">
                  <achievement.icon className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="font-medium">{achievement.title}</p>
                  <p className="text-sm text-slate-600">{achievement.description}</p>
                </div>
              </div>
            ))}
            <Link href="/profile">
              <Button variant="outline" className="w-full mt-4 bg-transparent">
                Voir mon profil
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      {/* Actions rapides */}
      <Card className="border-0 shadow-sm">
        <CardHeader>
          <CardTitle>Actions rapides</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link href="/formations">
              <Button
                variant="outline"
                className="w-full h-20 flex flex-col items-center justify-center bg-transparent"
              >
                <BookOpen className="h-6 w-6 mb-2" />
                <span className="text-sm">Formations</span>
              </Button>
            </Link>
            <Link href="/messages">
              <Button
                variant="outline"
                className="w-full h-20 flex flex-col items-center justify-center bg-transparent"
              >
                <MessageSquare className="h-6 w-6 mb-2" />
                <span className="text-sm">Messages</span>
              </Button>
            </Link>
            <Link href="/finances">
              <Button
                variant="outline"
                className="w-full h-20 flex flex-col items-center justify-center bg-transparent"
              >
                <DollarSign className="h-6 w-6 mb-2" />
                <span className="text-sm">Finances</span>
              </Button>
            </Link>
            <Link href="/profile">
              <Button
                variant="outline"
                className="w-full h-20 flex flex-col items-center justify-center bg-transparent"
              >
                <Users className="h-6 w-6 mb-2" />
                <span className="text-sm">Mon Profil</span>
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

// Dashboard Client
function ClientDashboard() {
  const activeProjects = [
    {
      id: 1,
      title: "Développement site e-commerce",
      freelancer: "Marie Dupont",
      status: "En cours",
      progress: 65,
      budget: "5,000€",
      deadline: "30 Jan 2024",
    },
    {
      id: 2,
      title: "Campaign marketing digital",
      freelancer: "Thomas Martin",
      status: "En révision",
      progress: 85,
      budget: "2,500€",
      deadline: "25 Jan 2024",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Tableau de bord Client</h1>
          <p className="text-slate-600">Gérez vos projets et freelances</p>
        </div>
        <div className="flex space-x-3">
          <Link href="/missions/create">
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              <Briefcase className="h-4 w-4 mr-2" />
              Nouveau projet
            </Button>
          </Link>
          <Link href="/freelances">
            <Button variant="outline">
              <Users className="h-4 w-4 mr-2" />
              Trouver des talents
            </Button>
          </Link>
        </div>
      </div>

      {/* Statistiques client */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="border-0 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Projets actifs</p>
                <p className="text-2xl font-bold">12</p>
                <p className="text-xs text-blue-600 mt-1">3 nouveaux ce mois</p>
              </div>
              <div className="p-3 rounded-lg bg-blue-50">
                <Briefcase className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Freelances</p>
                <p className="text-2xl font-bold">28</p>
                <p className="text-xs text-green-600 mt-1">Dans votre réseau</p>
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
                <p className="text-sm font-medium text-slate-600">Budget dépensé</p>
                <p className="text-2xl font-bold">47,500€</p>
                <p className="text-xs text-slate-500 mt-1">Cette année</p>
              </div>
              <div className="p-3 rounded-lg bg-purple-50">
                <DollarSign className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Satisfaction</p>
                <p className="text-2xl font-bold">4.7</p>
                <p className="text-xs text-yellow-600 mt-1">Note moyenne</p>
              </div>
              <div className="p-3 rounded-lg bg-yellow-50">
                <Star className="h-6 w-6 text-yellow-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Projets en cours */}
      <Card className="border-0 shadow-sm">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="flex items-center">
            <Activity className="h-5 w-5 mr-2" />
            Projets en cours
          </CardTitle>
          <Link href="/projects">
            <Button variant="outline" size="sm">
              Voir tous les projets
            </Button>
          </Link>
        </CardHeader>
        <CardContent className="space-y-4">
          {activeProjects.map((project) => (
            <div key={project.id} className="p-4 border rounded-lg">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h4 className="font-semibold">{project.title}</h4>
                  <p className="text-sm text-slate-600">Freelance: {project.freelancer}</p>
                </div>
                <Badge variant="secondary">{project.status}</Badge>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>Progression</span>
                  <span>{project.progress}%</span>
                </div>
                <Progress value={project.progress} className="h-2" />
                <div className="flex items-center justify-between text-sm text-slate-600">
                  <span>Budget: {project.budget}</span>
                  <span>Échéance: {project.deadline}</span>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}

// Dashboard Apprenant
function ApprenantDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Tableau de bord Apprenant</h1>
          <p className="text-slate-600">Suivez vos formations et votre progression</p>
        </div>
        <div className="flex space-x-3">
          <Link href="/formations/public">
            <Button className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700">
              <BookOpen className="h-4 w-4 mr-2" />
              Découvrir formations
            </Button>
          </Link>
        </div>
      </div>

      {/* Statistiques apprenant */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="border-0 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Formations en cours</p>
                <p className="text-2xl font-bold">3</p>
                <p className="text-xs text-blue-600 mt-1">1 nouvelle cette semaine</p>
              </div>
              <div className="p-3 rounded-lg bg-blue-50">
                <BookOpen className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Certificats obtenus</p>
                <p className="text-2xl font-bold">7</p>
                <p className="text-xs text-green-600 mt-1">2 ce mois</p>
              </div>
              <div className="p-3 rounded-lg bg-green-50">
                <Award className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Heures d'apprentissage</p>
                <p className="text-2xl font-bold">124h</p>
                <p className="text-xs text-purple-600 mt-1">Ce mois</p>
              </div>
              <div className="p-3 rounded-lg bg-purple-50">
                <Clock className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Progression moyenne</p>
                <p className="text-2xl font-bold">87%</p>
                <p className="text-xs text-yellow-600 mt-1">Très bon niveau</p>
              </div>
              <div className="p-3 rounded-lg bg-yellow-50">
                <TrendingUp className="h-6 w-6 text-yellow-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Formations en cours */}
      <Card className="border-0 shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center">
            <BookOpen className="h-5 w-5 mr-2" />
            Mes formations en cours
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                title: "Maîtriser React et Next.js",
                progress: 75,
                instructor: "Marie Dupont",
                nextLesson: "Hooks avancés",
              },
              {
                title: "Design System avec Figma",
                progress: 45,
                instructor: "Ahmed Ben Ali",
                nextLesson: "Composants réutilisables",
              },
              { title: "Marketing Digital", progress: 90, instructor: "Fatou Diallo", nextLesson: "Analytics avancés" },
            ].map((course, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex-1">
                  <h4 className="font-semibold">{course.title}</h4>
                  <p className="text-sm text-slate-600">Formateur: {course.instructor}</p>
                  <p className="text-sm text-blue-600">Prochaine leçon: {course.nextLesson}</p>
                  <div className="mt-2">
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span>Progression</span>
                      <span>{course.progress}%</span>
                    </div>
                    <Progress value={course.progress} className="h-2" />
                  </div>
                </div>
                <Button variant="outline" size="sm" className="ml-4 bg-transparent">
                  Continuer
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

// Dashboard Admin
function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Console d'administration</h1>
          <p className="text-slate-600">Vue d'ensemble de la plateforme FORCA</p>
        </div>
      </div>

      {/* Métriques globales */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="border-0 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Utilisateurs actifs</p>
                <p className="text-2xl font-bold">12,847</p>
                <p className="text-xs text-green-600 mt-1 flex items-center">
                  <ArrowUp className="h-3 w-3 mr-1" />
                  +8.2% ce mois
                </p>
              </div>
              <div className="p-3 rounded-lg bg-blue-50">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Missions créées</p>
                <p className="text-2xl font-bold">3,456</p>
                <p className="text-xs text-blue-600 mt-1">234 cette semaine</p>
              </div>
              <div className="p-3 rounded-lg bg-green-50">
                <Briefcase className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">CA total</p>
                <p className="text-2xl font-bold">287K€</p>
                <p className="text-xs text-purple-600 mt-1">+15% vs N-1</p>
              </div>
              <div className="p-3 rounded-lg bg-purple-50">
                <DollarSign className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Formations actives</p>
                <p className="text-2xl font-bold">145</p>
                <p className="text-xs text-yellow-600 mt-1">12 nouvelles</p>
              </div>
              <div className="p-3 rounded-lg bg-yellow-50">
                <BookOpen className="h-6 w-6 text-yellow-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Graphiques administrateur */}
      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="border-0 shadow-sm">
          <CardHeader>
            <CardTitle>Croissance utilisateurs</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={[
                  { month: "Jan", users: 1200 },
                  { month: "Fév", users: 1890 },
                  { month: "Mar", users: 2800 },
                  { month: "Avr", users: 3908 },
                  { month: "Mai", users: 4800 },
                  { month: "Juin", users: 5800 },
                ]}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="users" fill="#3B82F6" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm">
          <CardHeader>
            <CardTitle>Activité plateforme</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { label: "Nouveaux freelances", value: "156", trend: "+12%" },
              { label: "Nouvelles missions", value: "89", trend: "+8%" },
              { label: "Formations créées", value: "12", trend: "+25%" },
              { label: "Paiements traités", value: "234", trend: "+15%" },
            ].map((stat, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-slate-50">
                <span>{stat.label}</span>
                <div className="flex items-center space-x-2">
                  <span className="font-semibold">{stat.value}</span>
                  <span className="text-sm text-green-600">{stat.trend}</span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
