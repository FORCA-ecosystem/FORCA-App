"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Search,
  Filter,
  Plus,
  Star,
  Eye,
  Edit,
  Trash2,
  MoreHorizontal,
  TrendingUp,
  DollarSign,
  Users,
} from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Link from "next/link"
import { DashboardLayout } from "@/components/dashboard-layout"

export default function ServicesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  const services = [
    {
      id: 1,
      title: "Je vais créer une application mobile moderne pour votre entreprise",
      category: "Développement Mobile",
      price: "À partir de 500€",
      status: "active",
      orders: 23,
      rating: 4.9,
      reviews: 18,
      views: 1247,
      thumbnail: "/placeholder.svg?height=200&width=300",
      featured: true,
    },
    {
      id: 2,
      title: "Je vais développer votre site web avec React et Next.js",
      category: "Développement Web",
      price: "À partir de 300€",
      status: "active",
      orders: 45,
      rating: 4.8,
      reviews: 32,
      views: 2156,
      thumbnail: "/placeholder.svg?height=200&width=300",
      featured: false,
    },
    {
      id: 3,
      title: "Je vais créer votre API REST avec Node.js et MongoDB",
      category: "Backend",
      price: "À partir de 250€",
      status: "paused",
      orders: 12,
      rating: 4.7,
      reviews: 9,
      views: 834,
      thumbnail: "/placeholder.svg?height=200&width=300",
      featured: false,
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-100 text-green-800">Actif</Badge>
      case "paused":
        return <Badge className="bg-yellow-100 text-yellow-800">En pause</Badge>
      case "draft":
        return <Badge className="bg-gray-100 text-gray-800">Brouillon</Badge>
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  const filteredServices = services.filter((service) => {
    const matchesSearch =
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.category.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = statusFilter === "all" || service.status === statusFilter

    return matchesSearch && matchesStatus
  })

  return (
    <DashboardLayout userProfile="freelance">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Mes Services</h1>
            <p className="text-slate-600">Gérez vos services et suivez leurs performances</p>
          </div>
          <Link href="/services/create">
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Plus className="h-4 w-4 mr-2" />
              Nouveau service
            </Button>
          </Link>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">Services actifs</p>
                  <p className="text-2xl font-bold">3</p>
                  <p className="text-xs text-green-600 mt-1">+1 ce mois</p>
                </div>
                <div className="p-3 rounded-lg bg-blue-50">
                  <TrendingUp className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">Commandes totales</p>
                  <p className="text-2xl font-bold">80</p>
                  <p className="text-xs text-green-600 mt-1">+12 ce mois</p>
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
                  <p className="text-sm font-medium text-slate-600">Revenus ce mois</p>
                  <p className="text-2xl font-bold">2,450€</p>
                  <p className="text-xs text-green-600 mt-1">+15% vs dernier mois</p>
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
                  <p className="text-sm font-medium text-slate-600">Note moyenne</p>
                  <p className="text-2xl font-bold">4.8</p>
                  <p className="text-xs text-slate-500 mt-1">Sur 59 avis</p>
                </div>
                <div className="p-3 rounded-lg bg-yellow-50">
                  <Star className="h-6 w-6 text-yellow-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card className="border-0 shadow-sm">
          <CardContent className="p-6">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                  <Input
                    placeholder="Rechercher dans mes services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-full lg:w-48">
                  <SelectValue placeholder="Statut" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tous les statuts</SelectItem>
                  <SelectItem value="active">Actif</SelectItem>
                  <SelectItem value="paused">En pause</SelectItem>
                  <SelectItem value="draft">Brouillon</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                Plus de filtres
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Services Grid */}
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
                  <Badge className="absolute top-3 left-3 bg-orange-500 text-white">En vedette</Badge>
                )}
                <div className="absolute top-3 right-3">{getStatusBadge(service.status)}</div>
              </div>

              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="font-semibold text-lg mb-2 line-clamp-2">{service.title}</h3>
                  <Badge variant="outline" className="text-xs mb-3">
                    {service.category}
                  </Badge>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm text-slate-600 mb-4">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 mr-1" />
                    <span>
                      {service.rating} ({service.reviews})
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    <span>{service.orders} commandes</span>
                  </div>
                  <div className="flex items-center">
                    <Eye className="h-4 w-4 mr-1" />
                    <span>{service.views} vues</span>
                  </div>
                  <div className="flex items-center">
                    <DollarSign className="h-4 w-4 mr-1" />
                    <span className="font-medium text-slate-900">{service.price}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4 mr-1" />
                      Voir
                    </Button>
                    <Button variant="outline" size="sm">
                      <Edit className="h-4 w-4 mr-1" />
                      Modifier
                    </Button>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Dupliquer</DropdownMenuItem>
                      <DropdownMenuItem>Promouvoir</DropdownMenuItem>
                      <DropdownMenuItem>Statistiques</DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600">
                        <Trash2 className="mr-2 h-4 w-4" />
                        Supprimer
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredServices.length === 0 && (
          <Card className="border-0 shadow-sm">
            <CardContent className="p-12 text-center">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Plus className="h-8 w-8 text-slate-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Aucun service trouvé</h3>
              <p className="text-slate-600 mb-4">
                {searchQuery || statusFilter !== "all"
                  ? "Aucun service ne correspond à vos critères de recherche."
                  : "Vous n'avez pas encore créé de service. Commencez dès maintenant !"}
              </p>
              <Link href="/services/create">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Plus className="h-4 w-4 mr-2" />
                  Créer mon premier service
                </Button>
              </Link>
            </CardContent>
          </Card>
        )}
      </div>
    </DashboardLayout>
  )
}
