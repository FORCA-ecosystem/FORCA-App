"use client"

import { PublicLayout } from "@/components/public-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Users,
  Target,
  Globe,
  Award,
  Heart,
  Lightbulb,
  Shield,
  Zap,
  CheckCircle,
  MapPin,
  Calendar,
  Star,
} from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  const stats = [
    { label: "Freelances actifs", value: "15,000+", icon: Users },
    { label: "Projets réalisés", value: "50,000+", icon: Target },
    { label: "Pays couverts", value: "25+", icon: Globe },
    { label: "Taux de satisfaction", value: "98%", icon: Award },
  ]

  const values = [
    {
      icon: Heart,
      title: "Passion",
      description: "Nous croyons en la passion comme moteur de l'excellence et de l'innovation.",
    },
    {
      icon: Shield,
      title: "Confiance",
      description: "La confiance mutuelle est la base de toutes nos relations professionnelles.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Nous encourageons la créativité et l'innovation dans chaque projet.",
    },
    {
      icon: Globe,
      title: "Inclusion",
      description: "Nous valorisons la diversité et l'inclusion pour enrichir notre communauté.",
    },
  ]

  const team = [
    {
      name: "Amadou Diallo",
      role: "CEO & Fondateur",
      bio: "Entrepreneur passionné par la tech africaine, ancien consultant chez McKinsey.",
      avatar: "/placeholder.svg?height=80&width=80",
      location: "Dakar, Sénégal",
    },
    {
      name: "Fatima El Mansouri",
      role: "CTO",
      bio: "Ingénieure logiciel experte en IA, diplômée de l'École Polytechnique.",
      avatar: "/placeholder.svg?height=80&width=80",
      location: "Casablanca, Maroc",
    },
    {
      name: "Kwame Asante",
      role: "Head of Product",
      bio: "Designer UX/UI passionné, ancien de Google et Spotify.",
      avatar: "/placeholder.svg?height=80&width=80",
      location: "Accra, Ghana",
    },
    {
      name: "Aisha Kone",
      role: "Head of Community",
      bio: "Experte en développement communautaire et relations freelances.",
      avatar: "/placeholder.svg?height=80&width=80",
      location: "Abidjan, Côte d'Ivoire",
    },
  ]

  const milestones = [
    {
      year: "2023",
      title: "Lancement de FORCA",
      description: "Création de la plateforme avec les premiers 100 freelances",
    },
    {
      year: "2024",
      title: "Expansion régionale",
      description: "Extension à 10 pays africains et 5,000 freelances actifs",
    },
    {
      year: "2024",
      title: "Levée de fonds",
      description: "Série A de 2M€ pour accélérer la croissance",
    },
    {
      year: "2025",
      title: "Vision globale",
      description: "Objectif de 50,000 freelances et expansion internationale",
    },
  ]

  return (
    <PublicLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            À propos de{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">FORCA</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            FORCA (Freelancers Organization for Resourceful Collaboration and Autonomy) est la plateforme qui connecte
            les talents africains aux opportunités mondiales, créant un écosystème de collaboration sans frontières.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3"
              >
                Rejoindre FORCA
              </Button>
            </Link>
            <Link href="/missions/public">
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-3 border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
              >
                Explorer les missions
              </Button>
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <stat.icon className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <Card className="border-0 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100">
              <CardTitle className="flex items-center text-2xl text-blue-900">
                <Target className="h-6 w-6 mr-3" />
                Notre Mission
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <p className="text-gray-600 text-lg leading-relaxed">
                Démocratiser l'accès aux opportunités professionnelles pour les talents africains en créant une
                plateforme collaborative, éthique et innovante qui valorise les compétences locales sur la scène
                internationale.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-purple-50 to-purple-100">
              <CardTitle className="flex items-center text-2xl text-purple-900">
                <Zap className="h-6 w-6 mr-3" />
                Notre Vision
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <p className="text-gray-600 text-lg leading-relaxed">
                Devenir la référence mondiale pour le travail collaboratif en Afrique, en créant un écosystème où chaque
                talent peut s'épanouir, innover et contribuer au développement économique du continent.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Values */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nos Valeurs</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Les principes qui guident chacune de nos actions et décisions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-6">
                    <value.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Notre Équipe</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Des passionnés qui travaillent chaque jour pour révolutionner le freelancing en Afrique
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <Avatar className="h-20 w-20 mx-auto mb-6">
                    <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
                    <AvatarFallback className="bg-blue-100 text-blue-600 text-lg">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <Badge className="bg-blue-100 text-blue-800 mb-4">{member.role}</Badge>
                  <p className="text-gray-600 mb-4 text-sm">{member.bio}</p>
                  <div className="flex items-center justify-center text-sm text-gray-500">
                    <MapPin className="h-4 w-4 mr-1" />
                    {member.location}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Notre Parcours</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Les étapes clés de notre développement et notre vision pour l'avenir
            </p>
          </div>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full font-bold">
                    {milestone.year.slice(-2)}
                  </div>
                </div>
                <Card className="flex-1 border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-2 mb-2">
                      <Calendar className="h-5 w-5 text-blue-600" />
                      <span className="text-blue-600 font-semibold">{milestone.year}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose FORCA */}
        <Card className="mb-16 border-0 shadow-lg bg-gradient-to-r from-blue-50 to-purple-50">
          <CardContent className="p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Pourquoi Choisir FORCA ?</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Ce qui nous différencie et fait de nous la plateforme de référence
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-10 h-10 bg-green-100 rounded-full">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Talents Africains Vérifiés</h3>
                  <p className="text-gray-600">
                    Tous nos freelances sont soigneusement sélectionnés et vérifiés pour garantir un niveau
                    d'excellence.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-10 h-10 bg-green-100 rounded-full">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Paiements Sécurisés</h3>
                  <p className="text-gray-600">
                    Notre système de paiement sécurisé protège à la fois les clients et les freelances.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-10 h-10 bg-green-100 rounded-full">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Support Personnalisé</h3>
                  <p className="text-gray-600">
                    Une équipe dédiée pour vous accompagner à chaque étape de votre projet.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-10 h-10 bg-green-100 rounded-full">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Communauté Engagée</h3>
                  <p className="text-gray-600">
                    Rejoignez une communauté dynamique de professionnels partageant les mêmes valeurs.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Testimonials */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ce qu'ils disent de nous</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Les témoignages de nos freelances et clients</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex mb-6">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">
                    "FORCA a transformé ma carrière de freelance. J'ai accès à des clients internationaux tout en
                    travaillant depuis mon pays. La plateforme est intuitive et l'équipe toujours disponible."
                  </p>
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage src={`/placeholder.svg?height=40&width=40&query=person${i}`} />
                      <AvatarFallback className="bg-blue-100 text-blue-600">JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-gray-900">Jean Dupont</div>
                      <div className="text-sm text-gray-500">Développeur Full-Stack</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Prêt à rejoindre l'aventure FORCA ?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Que vous soyez freelance ou à la recherche de talents, FORCA vous ouvre les portes d'un écosystème
              collaboratif unique en Afrique.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/auth">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
                  Créer un compte
                </Button>
              </Link>
              <Link href="/support">
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 py-3 border-white text-white hover:bg-blue-700 bg-transparent"
                >
                  Nous contacter
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </PublicLayout>
  )
}
