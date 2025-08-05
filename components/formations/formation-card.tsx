"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star, Clock, Users, Globe, Award, Play, CheckCircle, Video, FileText } from "lucide-react"

interface Formation {
  id: number
  title: string
  description: string
  instructor: string
  instructorAvatar: string
  instructorRating: number
  instructorBio: string
  category: string
  level: string
  duration: string
  totalHours: string
  lessons: number
  students: number
  rating: number
  reviews: Array<{
    student: string
    rating: number
    comment: string
    date: string
  }>
  price: string
  originalPrice?: string
  isFree: boolean
  isPopular: boolean
  thumbnail: string
  skills: string[]
  certificate: boolean
  language: string
  lastUpdated: string
  completionRate: number
  requirements: string[]
  whatYouLearn: string[]
  curriculum: Array<{
    title: string
    lessons: number
    duration: string
  }>
}

interface Props {
  formation: Formation
}

export function FormationCard({ formation }: Props) {
  const [selectedFormation, setSelectedFormation] = useState<Formation | null>(null)

  return (
    <>
      <Card className="hover:shadow-lg transition-shadow overflow-hidden border-gray-200">
        <div className="relative">
          <img
            src={formation.thumbnail || "/placeholder.svg"}
            alt={formation.title}
            className="w-full h-48 object-cover"
          />
          {formation.isPopular && <Badge className="absolute top-2 left-2 bg-orange-500 text-white">Populaire</Badge>}
          {formation.isFree && <Badge className="absolute top-2 right-2 bg-green-500 text-white">Gratuit</Badge>}
          <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-xs">
            {formation.lessons} leçons
          </div>
        </div>

        <CardContent className="p-6">
          <div className="mb-3">
            <Badge variant="secondary" className="text-xs mb-2 bg-blue-50 text-blue-700 border-blue-200">
              {formation.category}
            </Badge>
            <h3 className="font-semibold text-gray-900 line-clamp-2 mb-2">{formation.title}</h3>
            <p className="text-sm text-gray-600 line-clamp-2 mb-3">{formation.description}</p>
          </div>

          <div className="flex items-center space-x-2 mb-3">
            <Avatar className="h-8 w-8">
              <AvatarImage src={formation.instructorAvatar || "/placeholder.svg"} alt={formation.instructor} />
              <AvatarFallback className="bg-blue-100 text-blue-600">
                {formation.instructor
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">{formation.instructor}</p>
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

          <div className="grid grid-cols-2 gap-4 text-xs text-gray-600 mb-4">
            <div className="flex items-center">
              <Clock className="h-3 w-3 mr-1" />
              {formation.duration}
            </div>
            <div className="flex items-center">
              <Users className="h-3 w-3 mr-1" />
              {formation.students.toLocaleString()} étudiants
            </div>
            <div className="flex items-center">
              <Star className="h-3 w-3 mr-1" />
              {formation.rating} ({formation.reviews.length})
            </div>
            <div className="flex items-center">
              <Globe className="h-3 w-3 mr-1" />
              {formation.language}
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
                <span className="text-lg font-bold text-green-600">Gratuit</span>
              ) : (
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-bold text-blue-600">{formation.price}</span>
                  {formation.originalPrice && (
                    <span className="text-sm text-gray-500 line-through">{formation.originalPrice}</span>
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

          <div className="flex space-x-2">
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
                  onClick={() => setSelectedFormation(formation)}
                >
                  <Play className="h-4 w-4 mr-1" />
                  Aperçu
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                {selectedFormation && <FormationModal formation={selectedFormation} />}
              </DialogContent>
            </Dialog>

            <Link href="/auth" className="flex-1">
              <Button
                size="sm"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
              >
                {formation.isFree ? "Commencer" : "S'inscrire"}
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </>
  )
}

function FormationModal({ formation }: { formation: Formation }) {
  return (
    <div>
      <DialogHeader>
        <DialogTitle className="flex items-start space-x-4">
          <img
            src={formation.thumbnail || "/placeholder.svg"}
            alt={formation.title}
            className="w-24 h-16 object-cover rounded"
          />
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-2">{formation.title}</h2>
            <div className="flex items-center space-x-4 mb-2">
              <div className="flex items-center">
                <Avatar className="h-8 w-8 mr-2">
                  <AvatarImage src={formation.instructorAvatar || "/placeholder.svg"} />
                  <AvatarFallback className="bg-blue-100 text-blue-600">
                    {formation.instructor
                      .split(" ")
                      .map((n: string) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <span className="font-medium">{formation.instructor}</span>
              </div>
              <div className="flex items-center">
                <Star className="h-4 w-4 text-yellow-400 mr-1" />
                <span>{formation.rating}</span>
                <span className="text-gray-500 ml-1">({formation.reviews.length} avis)</span>
              </div>
            </div>
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <span>{formation.students.toLocaleString()} étudiants</span>
              <span>{formation.totalHours}</span>
              <span>{formation.lessons} leçons</span>
              <Badge className="bg-green-100 text-green-800">{formation.level}</Badge>
            </div>
          </div>
        </DialogTitle>
      </DialogHeader>

      <Tabs defaultValue="overview" className="mt-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Aperçu</TabsTrigger>
          <TabsTrigger value="curriculum">Programme</TabsTrigger>
          <TabsTrigger value="instructor">Formateur</TabsTrigger>
          <TabsTrigger value="reviews">Avis</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">Description</h3>
            <p className="text-gray-600 mb-4">{formation.description}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Ce que vous apprendrez</h3>
            <ul className="space-y-2">
              {formation.whatYouLearn.map((item: string, index: number) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Prérequis</h3>
            <ul className="space-y-1">
              {formation.requirements.map((req: string, index: number) => (
                <li key={index} className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mr-2"></div>
                  {req}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Compétences acquises</h3>
            <div className="flex flex-wrap gap-2">
              {formation.skills.map((skill: string, index: number) => (
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
              {formation.curriculum.map((module: any, index: number) => (
                <Card key={index} className="border-gray-200">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">{module.title}</h4>
                        <p className="text-sm text-gray-600">
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
          <div className="flex items-start space-x-4">
            <Avatar className="h-20 w-20">
              <AvatarImage src={formation.instructorAvatar || "/placeholder.svg"} />
              <AvatarFallback className="bg-blue-100 text-blue-600 text-lg">
                {formation.instructor
                  .split(" ")
                  .map((n: string) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="text-xl font-semibold">{formation.instructor}</h3>
              <div className="flex items-center mt-1 mb-3">
                <Star className="h-4 w-4 text-yellow-400 mr-1" />
                <span className="font-medium">{formation.instructorRating}</span>
                <span className="text-gray-500 ml-1">Note formateur</span>
              </div>
              <p className="text-gray-600">{formation.instructorBio}</p>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="reviews" className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-4">Avis des étudiants</h3>
            <div className="space-y-4">
              {formation.reviews.map((review: any, index: number) => (
                <Card key={index} className="border-gray-200">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">{review.student}</span>
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
      </Tabs>

      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <div className="flex items-center justify-between">
          <div>
            {formation.isFree ? (
              <div className="text-2xl font-bold text-green-600">Gratuit</div>
            ) : (
              <div className="flex items-center space-x-2">
                <span className="text-2xl font-bold text-blue-600">{formation.price}</span>
                {formation.originalPrice && (
                  <span className="text-lg text-gray-500 line-through">{formation.originalPrice}</span>
                )}
              </div>
            )}
            <p className="text-sm text-gray-600">Accès à vie • Certificat inclus • Support formateur</p>
          </div>
          <Link href="/auth">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8"
            >
              {formation.isFree ? "Commencer gratuitement" : "S'inscrire maintenant"}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
