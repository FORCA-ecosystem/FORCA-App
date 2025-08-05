"use client"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter } from "lucide-react"

interface Props {
  initialSearch: string
  initialCategory: string
  initialLevel: string
  initialPrice: string
  initialSort: string
}

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

export function FormationsFilters({ initialSearch, initialCategory, initialLevel, initialPrice, initialSort }: Props) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [searchTerm, setSearchTerm] = useState(initialSearch)
  const [selectedCategory, setSelectedCategory] = useState(initialCategory)
  const [selectedLevel, setSelectedLevel] = useState(initialLevel)
  const [selectedPrice, setSelectedPrice] = useState(initialPrice)

  // Debounce search
  useEffect(() => {
    const timer = setTimeout(() => {
      updateURL({ search: searchTerm })
    }, 500)

    return () => clearTimeout(timer)
  }, [searchTerm])

  const updateURL = (updates: Record<string, string>) => {
    const params = new URLSearchParams(searchParams.toString())

    Object.entries(updates).forEach(([key, value]) => {
      if (value && value !== "all" && value !== "") {
        params.set(key, value)
      } else {
        params.delete(key)
      }
    })

    // Reset to page 1 when filters change
    params.delete("page")

    router.push(`/formations/public?${params.toString()}`)
  }

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value)
    updateURL({ category: value })
  }

  const handleLevelChange = (value: string) => {
    setSelectedLevel(value)
    updateURL({ level: value })
  }

  const handlePriceChange = (value: string) => {
    setSelectedPrice(value)
    updateURL({ price: value })
  }

  return (
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
              placeholder="Rechercher une formation..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          <Select value={selectedCategory} onValueChange={handleCategoryChange}>
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

          <Select value={selectedLevel} onValueChange={handleLevelChange}>
            <SelectTrigger className="border-gray-300 focus:border-blue-500 focus:ring-blue-500">
              <SelectValue placeholder="Niveau" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tous niveaux</SelectItem>
              <SelectItem value="Débutant">Débutant</SelectItem>
              <SelectItem value="Intermédiaire">Intermédiaire</SelectItem>
              <SelectItem value="Avancé">Avancé</SelectItem>
            </SelectContent>
          </Select>

          <Select value={selectedPrice} onValueChange={handlePriceChange}>
            <SelectTrigger className="border-gray-300 focus:border-blue-500 focus:ring-blue-500">
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
  )
}
